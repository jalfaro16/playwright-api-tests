import { test, expect } from '../../../fixtures/api.fixture';

test('No debe obtener un booking inexistente', async ({ apiClient }) => {

    // Usar un ID que probablemente no exista
    const bookingId = 999999999;

    const response = await apiClient.getBooking(bookingId);

    // Validar status code
    expect(response.status()).toBe(404);
    expect(await response.text()).toBe('Not Found');

    //console.log('Status:', response.status());
    //console.log('Body:', await response.text());

});