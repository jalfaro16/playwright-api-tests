import { test, expect } from '../../../fixtures/api.fixture';
import { BookingResponse } from '../../../models/BookingResponse';

test('Should get the list of bookings using ApiClient',{tag:'@regression'}, async ({ apiClient }) => {

    // Get the list of bookings
    const response = await apiClient.getBookings();

    // Verify status code
    expect(response.status()).toBe(200);

    // Get response body
    const responseBody: BookingResponse[] = await response.json();

    // Verify that the response is an array
    expect(Array.isArray(responseBody)).toBeTruthy();

    // Verify that there are bookings
    expect(responseBody.length).toBeGreaterThan(0);

    // Verify structure of the first element
    expect(responseBody[0]).toHaveProperty('bookingid');

    expect(typeof responseBody[0].bookingid).toBe('number');

    for (const booking of responseBody) {
    expect(booking).toHaveProperty('bookingid');
    expect(typeof booking.bookingid).toBe('number');
    }

    console.log(await response.json());


});