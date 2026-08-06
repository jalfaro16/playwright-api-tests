import { test, expect } from '../../fixtures/api.fixture';

test('Debe validar que el servicio esté disponible', async ({ apiClient }) => {

    // Ejecutar Health Check
    const response = await apiClient.healthCheck();

    // Validar status code
    expect(response.status()).toBe(201);

});