import { test, expect } from '../../../fixtures/api.fixture';
import { AuthResponse } from '../../../models/AuthResponse';

test('Should generate a valid token',{tag:'@regression'}, async ({ apiClient }) => {

    // Request token
    const response = await apiClient.auth();

    // Verify status code
    expect(response.status()).toBe(200);

    // Get response body
    const responseBody: AuthResponse = await response.json();

    // Verify token
    expect(responseBody).toHaveProperty('token');
    expect(responseBody.token).toBeTruthy();

    expect(responseBody.token).toBeDefined();
    expect(typeof responseBody.token).toBe('string');
    expect(responseBody.token.length).toBeGreaterThan(0);

});