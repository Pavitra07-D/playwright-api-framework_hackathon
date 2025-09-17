import { test, expect, request } from '@playwright/test';

class UserAPI {
  request;
  basePath = '/api';

  constructor(requestContext) {
    this.request = requestContext;
  }

  async getUser(id: number) {
    const res = await this.request.get(`${this.basePath}/users/${id}`);
    console.log(`GET /users/${id} status:`, res.status());
    expect(res.status()).toBe(200);
    const data = await res.json();
    console.log('Fetched user:', data);
    return data;
  }

  async createUser(data: any) {
    const res = await this.request.post(`${this.basePath}/users`, { data });
    console.log('POST /users status:', res.status());
    expect(res.status()).toBe(201);
    const created = await res.json();
    console.log('Created user:', created);
    expect(created).toHaveProperty('id'); // safety check
    return created;
  }

  async updateUser(id: number, data: any) {
    const res = await this.request.put(`${this.basePath}/users/${id}`, { data });
    console.log(`PUT /users/${id} status:`, res.status());
    expect(res.status()).toBe(200);
    const updated = await res.json();
    console.log('Updated user:', updated);
    return updated;
  }

  async deleteUser(id: number) {
    const res = await this.request.delete(`${this.basePath}/users/${id}`);
    console.log(`DELETE /users/${id} status:`, res.status());
    expect(res.status()).toBe(204);
    return res;
  }
}

// --- Test Suite ---
test('Run full user API flow', async ({ request }) => {
  const api = new UserAPI(request);

  // 1. Create user
  const newUser = await api.createUser({ name: 'John Doe', email: 'john@example.com' });

  // 2. Get user
  const fetchedUser = await api.getUser(newUser.id);

  // 3. Update user
  const updatedUser = await api.updateUser(newUser.id, { name: 'Jane Doe' });

  // 4. Delete user
  await api.deleteUser(newUser.id);

  console.log('Successfully ran full user API flow for ID:', newUser.id);
});
