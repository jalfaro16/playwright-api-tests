import { test, expect } from '../../../fixtures/api.fixture';
import { ErrorResponse } from '../../../models/ErrorResponse';

test('Should not generate a token with invalid credentials',{tag:'@regression'}, async ({ apiClient }) => {

    // Request token with invalid credentials
    const response = await apiClient.auth(
        'admin',
        'incorrectPassword'
    );

    // Verify status code
    expect(response.status()).toBe(200);

    // Obtener response body
    const responseBody: ErrorResponse = await response.json();

    // Verify error message
    expect(responseBody.reason).toBe('Bad credentials');

});