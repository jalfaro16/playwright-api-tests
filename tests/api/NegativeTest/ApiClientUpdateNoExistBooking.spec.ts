import { test, expect } from '../../../fixtures/api.fixture';
import { bookingData } from '../../../test-data/bookingData';

test('No debe actualizar un booking inexistente', async ({ apiClient, token }) => {

    // Usar un ID que probablemente no exista
    const bookingId = 999999999;

    // Intentar actualizar el booking
    const response = await apiClient.updateBooking(
        bookingId,
        bookingData,
        token
    );

    // Validar status code
    expect(response.status()).toBe(405);

    // Validar mensaje de error
    expect(await response.text()).toBe('Method Not Allowed');

});