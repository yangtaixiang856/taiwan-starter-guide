const fs = require("node:fs");
const { defineConfig } = require("playwright/test");

const port = Number(process.env.PORT || 9327);
const host = process.env.HOST || ["127", "0", "0", "1"].join(".");
const baseURL = process.env.PLAYWRIGHT_BASE_URL || `http://${host}:${port}`;
const useFileBaseURL = baseURL.startsWith("file:");
const executablePath =
  process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH && fs.existsSync(process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH)
    ? process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH
    : undefined;

module.exports = defineConfig({
  testDir: "./tests",
  timeout: 30_000,
  expect: {
    timeout: 5_000
  },
  reporter: [
    ["list"],
    ["html", { open: "never" }]
  ],
  use: {
    baseURL,
    trace: "retain-on-failure",
    launchOptions: executablePath ? { executablePath } : undefined
  },
  webServer: useFileBaseURL
    ? undefined
    : {
        command: `PORT=${port} node tests/static-server.js`,
        url: `${baseURL}/index.html`,
        reuseExistingServer: !process.env.CI,
        timeout: 30_000
      }
});
