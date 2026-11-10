import { test, expect } from '../../../fixtures/api.fixture';
import { bookingData } from '../../../test-data/bookingData';

test('Should not update a booking without authentication',{tag:'@regression'}, async ({ apiClient, booking }) => {

    // Try to update without token
    const response = await apiClient.updateBooking(
        booking.bookingid,
        bookingData,
        ''
    );

    // Verify status code
    expect(response.status()).toBe(403);

    expect(await response.text()).toBe('Forbidden');

});