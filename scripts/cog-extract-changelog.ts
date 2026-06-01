#!/usr/bin/env -S deno run -qA --ext=ts
import { toText } from "@std/streams";

/*
  A simple script to extract the most recent changelog entry from the full
  changelog output, which is useful when you have a monorepo with many packages
  and want to create GitHub releases with just the changelog for a specific package.
*/

const input = await toText(Deno.stdin.readable);
const output = input.split("---")[1]?.trim() + "\n";
await Deno.stdout.write(new TextEncoder().encode(output));
