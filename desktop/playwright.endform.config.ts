import { defineConfig } from "@playwright/test";

import baseConfig from "./playwright.config";

// Runs the desktop smoke project on Endform: one CI job, every test on its
// own machine, against the production `build:e2e` bundle served locally.
// Endform proxies the runners' traffic back to this `webServer`.
export default defineConfig({
  ...baseConfig,
  fullyParallel: true,
  retries: 2,
  workers: undefined,
  use: { ...baseConfig.use, trace: "retain-on-failure" },
  projects: baseConfig.projects?.filter(({ name }) => name === "smoke"),
  // http.server logs every request to stderr; keep the CI log readable.
  webServer: { ...baseConfig.webServer, stderr: "ignore" },
});
