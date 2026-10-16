// Endform reads this file only for `npx endform test`; local Playwright runs
// ignore it. ENDFORM_CONCURRENCY caps how many smoke tests share the local
// static server at once.
export default {
  concurrentTestLimits: [
    {
      scope: "within-suite-run",
      limit: Number(process.env.ENDFORM_CONCURRENCY ?? "20"),
    },
  ],
};
