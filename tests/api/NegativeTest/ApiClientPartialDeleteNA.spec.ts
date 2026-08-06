import { test, expect } from '../../../fixtures/api.fixture';
import { BookingData } from '../../../models/BookingData';

test('No debe actualizar parcialmente un booking sin autenticación', async ({ apiClient, booking }) => {

    const partialBooking: Partial<BookingData> = {
        firstname: 'Pedro'
    };

    // Intentar actualizar parcialmente sin token
    const response = await apiClient.partialUpdateBooking(
        booking.bookingid,
        partialBooking,
        ''
    );

    // Validar status code
    expect(response.status()).toBe(403);

    // Validar mensaje de error
    expect(await response.text()).toBe('Forbidden');

});