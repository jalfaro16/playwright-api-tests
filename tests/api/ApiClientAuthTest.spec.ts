import { test, expect } from '../../fixtures/api.fixture';
import { AuthResponse } from '../../models/AuthResponse';

test('Debe generar un token válido', async ({ apiClient }) => {

    // Solicitar token
    const response = await apiClient.auth();

    // Validar status code
    expect(response.status()).toBe(200);

    // Obtener response body
    const responseBody: AuthResponse = await response.json();

    // Validar token
    expect(responseBody).toHaveProperty('token');
    expect(responseBody.token).toBeTruthy();

    expect(responseBody.token).toBeDefined();
    expect(typeof responseBody.token).toBe('string');
    expect(responseBody.token.length).toBeGreaterThan(0);

});