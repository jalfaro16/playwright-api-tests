import { test, expect } from '../../../fixtures/api.fixture';
import { bookingData } from '../../../test-data/bookingData';
import { BookingData } from '../../../models/BookingData';

test('@api @smoke Should update a booking using ApiClient', async ({ apiClient, token, booking }) => {
    
    // Update booking
    const response = await apiClient.updateBooking(
        booking.bookingid,
        bookingData,
        token
    );

    console.log(response);

     // Verify status code
    expect(response.status()).toBe(200);

    // Get response body
    const responseBody: BookingData = await response.json();

    // Verify that the data was updated correctly
    expect(responseBody).toEqual(bookingData);

    expect(responseBody.firstname).toBe(bookingData.firstname);
    expect(responseBody.lastname).toBe(bookingData.lastname);
    expect(responseBody.totalprice).toBe(bookingData.totalprice);

});