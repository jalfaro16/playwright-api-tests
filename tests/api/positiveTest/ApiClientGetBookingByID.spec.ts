import { test, expect } from '../../../fixtures/api.fixture';
import { BookingData } from '../../../models/BookingData';

test('Should get a booking by id using ApiClient',{tag:['@smoke', '@regression']}, async ({ apiClient, booking }) => {

    // Get booking
    const response = await apiClient.getBooking(booking.bookingid);

    // Verify status code
    expect(response.status()).toBe(200);

    // Get response body
    const responseBody: BookingData = await response.json();
    console.log(responseBody); 

    // Verify data
    expect(responseBody).toEqual(booking.booking);
    //expect(responseBody.firstname).toBe(booking.booking.firstname);
    

});