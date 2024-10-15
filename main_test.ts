import { assertEquals } from "@std/assert";
import { add } from "./main.ts";

Deno.test(async function addTest() {
  assertEquals(await add(2, 3), 5);
});
