#!/usr/bin/env -S deno run -qA --ext=ts
import { outdent } from "@cspotcode/outdent";
import { $ } from "@david/dax";
import { CopilotClient, defineTool } from "@github/copilot-sdk";
import { walk } from "@std/fs";
import { join } from "@std/path";
import { parse as tomlParse } from "@std/toml";
import { parse as yamlParse } from "@std/yaml";
import { z } from "@zod/zod";

const DEBUG = Deno.env.get("DEBUG") ? true : false;

const log = (...args: unknown[]) => {
  if (DEBUG) {
    console.log(...args);
  }
};

// Step 1. Locate all Dockerfiles in the repository
// It's obviously a lot faster to do this upfront and provide the list to the model,
// rather than having it search the repo every time it needs to reference a Dockerfile.
const dockerfiles: string[] = [];
for await (
  const entry of walk(join(import.meta.dirname!, ".."), {
    includeDirs: false,
    match: [/dockerfile/i],
    skip: [/\.git/, /\.pixi/, /node_modules/],
  })
) {
  dockerfiles.push(entry.path);
}

// Step 2. Read all Docker images used in those Dockerfiles that might need updating.
const dockerImagesToUpdate: Record<string, string[]> = {};
const fromRegex = /^FROM\s+([^\s]+)(?:\s+AS\s+\w+)?/i;
for (const path of dockerfiles) {
  const content = await Deno.readTextFile(path);
  const lines = content.split("\n");
  for (const line of lines) {
    const match = line.match(fromRegex);
    if (match && !match[1].endsWith(":latest")) {
      if (!dockerImagesToUpdate[match[1]]) {
        dockerImagesToUpdate[match[1]] = [];
      }
      dockerImagesToUpdate[match[1]].push(path);
    }
  }
}

// Step 3. Read all tools installed by Pixi.
const pixiTools = Object.keys(
  z.object({ dependencies: z.record(z.string(), z.string()) }).parse(
    tomlParse(await Deno.readTextFile(join(import.meta.dirname!, "../pixi.toml"))),
  ).dependencies,
);

// Step 4. Resolve the installed versions of those tools by reading the lockfile.
const pixiLock = z.object({ packages: z.array(z.object({ conda: z.url() })) }).parse(
  yamlParse(await Deno.readTextFile(join(import.meta.dirname!, "../pixi.lock"))),
).packages.map((_) => _.conda);

const pixiToolVersions = pixiTools.map((tool) => {
  const regex = new RegExp(`${tool}[-_=]([0-9]+\\.[0-9]+\\.[0-9]+)`);
  for (const url of pixiLock) {
    const match = url.match(regex);
    if (match) {
      return { tool, version: match[1] };
    }
  }
  return { tool, version: "unknown" };
});

// Step 5. Build the prompt for Copilot
const prompt = outdent`
  You are an assistant for updating Dockerfiles in a code repository.

  I will provide you with a list of Docker images used in the repository that may need updating,
  along with the versions of those tools that are installed by Pixi.

  Your task is to update the Dockerfiles to use the same versions of the tools as installed by Pixi.

  If for some reason you cannot find a matching Docker image for a tool,
  or if the version installed by Pixi is not available as a Docker tag,
  please just update the docker image to the latest version returned by
  the list_docker_image_tags tool.

  Provide status updates as you work through the list of Docker images,
  and use the tools I've given you to look up available tags and update
  the Dockerfiles.

  - list_docker_image_tags
  - update_dockerfile

  **IMPORTANT**: You are running in streaming mode, provide outputs suitable for an interactive terminal.
  ---

  ${JSON.stringify({ dockerImagesToUpdate, pixiToolVersions }, null, 2)}
`;
log(prompt);

// Step 6. Run the prompt with Copilot, providing tools for listing Docker tags and updating Dockerfiles.
const client = new CopilotClient({
  connection: {
    kind: "stdio",
    path: join(import.meta.dirname!, "../.pixi/envs/default/bin/copilot"),
  },
});

const session = await client.createSession({
  onPermissionRequest: () => ({ kind: "approve-once" }),
  model: "claude-sonnet-4.6",
  streaming: true,
  tools: [
    defineTool("list_docker_image_tags", {
      description: "Given a Docker image reference, return a list of available tags for that image from its registry.",
      parameters: {
        type: "object",
        properties: {
          image: {
            type: "string",
            description: "The Docker image reference, minus the tag (e.g., 'python' or 'node').",
          },
        },
        required: ["image"],
      },
      handler: async ({ image }: { image: string }) => {
        log(`Fetching tags for image: ${image}`);
        const result = z.array(z.string()).parse(
          (await $`skopeo list-tags ${`docker://${image.split(":")[0]}`}`.quiet().json())["Tags"],
        );
        log(`Image ${image} has tags: ${result.join(", ")}`);
        return result;
      },
    }),
    defineTool("update_dockerfile", {
      description:
        "Given the path to a Dockerfile, the original image reference, and the new image reference, update the Dockerfile to use the new image.",
      parameters: {
        type: "object",
        properties: {
          dockerfilePath: {
            type: "string",
            description: "The path to the Dockerfile to update.",
          },
          originalImage: {
            type: "string",
            description: "The original image reference in the Dockerfile.",
          },
          newImage: {
            type: "string",
            description: "The new image reference to update in the Dockerfile.",
          },
        },
        required: ["dockerfilePath", "originalImage", "newImage"],
      },
      handler: async (
        { dockerfilePath, originalImage, newImage }: {
          dockerfilePath: string;
          originalImage: string;
          newImage: string;
        },
      ) => {
        log(`Updating Dockerfile: ${dockerfilePath} - replacing image: ${originalImage} with ${newImage}`);
        const content = await Deno.readTextFile(dockerfilePath);
        const updatedContent = content.replace(originalImage, newImage);
        await Deno.writeTextFile(dockerfilePath, updatedContent);
      },
    }),
  ],
});

// Listen for response chunks
session.on("assistant.message_delta", (event) => {
  Deno.stdout.write(new TextEncoder().encode(event.data.deltaContent));
});
session.on("session.idle", () => {
  console.log(); // New line when done
});

console.log("Sending prompt to Copilot...");
await session.sendAndWait({ prompt }, 5 * 60 * 1000);
await client.stop();
