import { test, expect } from '../../../fixtures/api.fixture';

test('Should delete an existing booking',{tag:['@smoke', '@regression']}, async ({ apiClient, token, booking }) => {

    // Delete booking
    await apiClient.deleteBooking(
        booking.bookingid,
        token
    );

    // Verify that it no longer exists
    const getResponse = await apiClient.getBooking(booking.bookingid);
    expect(getResponse.status()).toBe(404);

});