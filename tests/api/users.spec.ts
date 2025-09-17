import { test, expect } from '@playwright/test';

test('GET single user', async ({ request }) => {
  const response = await request.get('/api/users/2');
  expect(response.status()).toBe(200);
  const body = await response.json();
  expect(body.data.email).toBe('janet.weaver@reqres.in');
});

test('POST create user', async ({ request }) => {
  const response = await request.post('/api/users', {
    data: { name: 'Test User', job: 'QA' }
  });
  expect(response.status()).toBe(201);
  const body = await response.json();
  expect(body.name).toBe('Test User');
});