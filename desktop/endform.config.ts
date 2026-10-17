// Endform reads this file only for `npx endform test`; local Playwright runs
// ignore it. ENDFORM_CONCURRENCY caps how many smoke tests share the local
// static server at once.
export default {
  // Files specs read through fs or resolve through tsconfig `@/` paths,
  // which Endform's import tracing does not pick up on its own.
  additionalFiles: [
    "tsconfig.json",
    "src/**/*",
    "src-tauri/tauri.conf.json",
    "tests/fixtures/*",
    "tests/e2e/*-snapshots/*",
  ],
  concurrentTestLimits: [
    {
      scope: "within-suite-run",
      limit: Number(process.env.ENDFORM_CONCURRENCY ?? "20"),
    },
  ],
};
