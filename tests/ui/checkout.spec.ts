import { test, expect } from '@playwright/test';
import users from '../data/users.json';

test('Register multiple users', async ({ page }) => {
  await page.goto('https://konfhub.com/checkout/stepin-summit-2025?ticketId=35524');

  for (let i = 0; i < users.length; i++) {
    await page.locator(`input[name="35524-${i}.name"]`).fill(users[i].name);
    await page.locator(`input[name="35524-${i}.email"]`).fill(users[i].email);
    await page.locator(`input[name="35524-${i}.phone"]`).fill(users[i].phone);
  }

  await page.screenshot({ path: 'reports/filled-users.png' });
});