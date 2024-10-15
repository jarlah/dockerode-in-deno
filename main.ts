import Docker from "dockerode";

export async function add(a: number, b: number): Promise<number> {
  const docker = new Docker({ socketPath: "/var/run/docker.sock" });
  await docker.info();
  return a + b;
}

// Learn more at https://docs.deno.com/runtime/manual/examples/module_metadata#concepts
if (import.meta.main) {
  console.log("Add 2 + 3 =", add(2, 3));
}
