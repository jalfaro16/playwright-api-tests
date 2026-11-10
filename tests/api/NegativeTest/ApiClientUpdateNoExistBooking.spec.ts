import { test, expect } from '../../../fixtures/api.fixture';
import { bookingData } from '../../../test-data/bookingData';

test('Should not update a non-existent booking',{tag:'@regression'}, async ({ apiClient, token }) => {

    // Use an ID that probably does not exist
    const bookingId = 999999999;

    // Try to update the booking
    const response = await apiClient.updateBooking(
        bookingId,
        bookingData,
        token
    );

    // Verify status code
    expect(response.status()).toBe(405);

    // Verify error message
    expect(await response.text()).toBe('Method Not Allowed');

});