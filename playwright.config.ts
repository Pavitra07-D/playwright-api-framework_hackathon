import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 30 * 1000,
  retries: 1,
  reporter: [['html', { outputFolder: 'reports' }]],
  use: {
    baseURL: 'https://testautothon.org',
    headless: true,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure'
  }
});
