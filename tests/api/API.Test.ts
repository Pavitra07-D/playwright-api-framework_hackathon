import { test, expect } from '@playwright/test';
import * as fs from 'fs';

/*
test('GET homepage status', async ({ request }) => {
  const response = await request.get('/');
  expect(response.status()).toBe(200);

  const body = await response.text();
  fs.writeFileSync('homepage-response.html', body); // save HTML
  expect(body).toContain('TestAutothon');
});


*/

test('Check past winners page', async ({ request }) => {
  const response = await request.get('https://testautothon.org/past-winners/');
  
  // 1. Verify status code
  expect(response.status()).toBe(200);

  // 2. Get HTML content
  const body = await response.text();
  console.log('Page HTML length:', body.length);

  // 3. Verify some text exists on the page
  expect(body).toContain('Past Winners'); // checks page has expected heading
  expect(body).toContain('Bengaluru');    // checks for a known winner city
});

