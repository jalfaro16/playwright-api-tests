import { test, expect } from '../../../fixtures/api.fixture';
import { bookingData } from '../../../test-data/bookingData';
import { BookingResponse } from '../../../models/BookingResponse';

test('@api @smoke Should create a booking using ApiClient',{tag:'@regression'}, async ({ apiClient }) => {


    const response = await apiClient.createBooking(bookingData);
    // Verify status code
    expect(response.status()).toBe(200);

     // Get response body
    const responseBody: BookingResponse = await response.json();

    // Verify bookingId
    expect(responseBody.bookingid).toBeGreaterThan(0);

    // Verify that the created data matches the sent data
    expect(responseBody.booking).toEqual(bookingData);


});