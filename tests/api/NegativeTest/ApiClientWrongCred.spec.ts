import { test, expect } from '../../../fixtures/api.fixture';
import { ErrorResponse } from '../../../models/ErrorResponse';

test('No debe generar un token con credenciales inválidas', async ({ apiClient }) => {

    // Solicitar token con credenciales inválidas
    const response = await apiClient.auth(
        'admin',
        'incorrectPassword'
    );

    // Validar status code
    expect(response.status()).toBe(200);

    // Obtener response body
    const responseBody: ErrorResponse = await response.json();

    // Validar mensaje de error
    expect(responseBody.reason).toBe('Bad credentials');

});