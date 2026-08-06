import { test, expect } from '../../fixtures/api.fixture';

test('Debe eliminar un booking existente', async ({ apiClient, token, booking }) => {

    // Eliminar el booking
    await apiClient.deleteBooking(
        booking.bookingid,
        token
    );

    // Verificar que ya no existe
    const getResponse = await apiClient.getBooking(booking.bookingid);
    expect(getResponse.status()).toBe(404);

});