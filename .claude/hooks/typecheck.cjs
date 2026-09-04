// PostToolUse hook (Write|Edit): after a .ts/.tsx file is touched, run the
// project typecheck and hand any errors back to Claude so it can fix them.
const { execSync } = require("child_process");

let input = "";
process.stdin.on("data", (chunk) => (input += chunk));
process.stdin.on("end", () => {
  let payload;
  try {
    payload = JSON.parse(input);
  } catch {
    process.exit(0);
  }

  const filePath =
    payload?.tool_input?.file_path ?? payload?.tool_response?.filePath ?? "";
  if (!/\.(ts|tsx)$/.test(filePath)) {
    process.exit(0);
  }

  try {
    execSync("pnpm exec tsc --noEmit -p tsconfig.json", {
      stdio: ["ignore", "pipe", "pipe"],
    });
    process.exit(0);
  } catch (err) {
    const output = `${err.stdout ?? ""}${err.stderr ?? ""}`.slice(0, 4000);
    console.log(
      JSON.stringify({
        decision: "block",
        reason: `TypeScript check failed (pnpm exec tsc --noEmit):\n${output}`,
      }),
    );
    process.exit(0);
  }
});
