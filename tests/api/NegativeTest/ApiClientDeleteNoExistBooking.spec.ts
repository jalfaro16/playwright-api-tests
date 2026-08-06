import { test, expect } from '../../../fixtures/api.fixture';

test('No debe eliminar un booking inexistente', async ({ apiClient, token }) => {

    // Usar un ID que probablemente no exista
    const bookingId = 999999999;

    // Intentar eliminar el booking
    const response = await apiClient.deleteBooking(
        bookingId,
        token
    );

    // Validar status code
    expect(response.status()).toBe(405);

    // Validar mensaje de error
    expect(await response.text()).toBe('Method Not Allowed');

});