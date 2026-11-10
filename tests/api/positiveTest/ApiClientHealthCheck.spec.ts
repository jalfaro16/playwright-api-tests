import { test, expect } from '../../../fixtures/api.fixture';

test('Should validate that the service is available',{tag:['@smoke','@regression']}, async ({ apiClient }) => {

    // Execute Health Check
    const response = await apiClient.healthCheck();

    // Verify status code
    expect(response.status()).toBe(201);

});