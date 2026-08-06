import { test, expect } from '../../../fixtures/api.fixture';
import { BookingData } from '../../../models/BookingData';

test('No debe actualizar parcialmente un booking inexistente', async ({ apiClient, token }) => {

    const bookingId = 999999999;

    const partialBooking: Partial<BookingData> = {
        firstname: 'Pedro'
    };

    const response = await apiClient.partialUpdateBooking(
        bookingId,
        partialBooking,
        token
    );

    expect(response.status()).toBe(405);
    expect(await response.text()).toBe('Method Not Allowed');

});