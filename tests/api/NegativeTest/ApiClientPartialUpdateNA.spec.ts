import { test, expect } from '../../../fixtures/api.fixture';
import { BookingData } from '../../../models/BookingData';

test('Should not partially update a booking without authentication',{tag:'@regression'}, async ({ apiClient, booking }) => {

    const partialBooking: Partial<BookingData> = {
        firstname: 'Pedro'
    };

    // Try to partially update without token
    const response = await apiClient.partialUpdateBooking(
        booking.bookingid,
        partialBooking,
        ''
    );

    // Verify status code
    expect(response.status()).toBe(403);

    // Verify error message
    expect(await response.text()).toBe('Forbidden');

});