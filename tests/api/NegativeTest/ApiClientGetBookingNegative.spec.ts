import { test, expect } from '../../../fixtures/api.fixture';

test('Should not obtain a non-existent booking',{tag:'@regression'}, async ({ apiClient }) => {

    // Use an ID that probably does not exist
    const bookingId = 999999999;

    const response = await apiClient.getBooking(bookingId);

    // Verify status code
    expect(response.status()).toBe(404);
    expect(await response.text()).toBe('Not Found');

});