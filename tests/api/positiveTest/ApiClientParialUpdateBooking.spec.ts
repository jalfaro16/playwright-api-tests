import { test, expect } from '../../../fixtures/api.fixture';
import { BookingData } from '../../../models/BookingData';

test('Should partially update a booking',{tag:['@smoke','@regression']}, async ({ apiClient, token, booking }) => {

    const partialBooking: Partial<BookingData> = {
        firstname: 'Pedro'
    };

    // Update the booking partially
    const response = await apiClient.partialUpdateBooking(
        booking.bookingid,
        partialBooking,
        token
    );

    expect(response.status()).toBe(200);

    const responseBody: BookingData = await response.json();

    expect(responseBody.firstname).toBe(partialBooking.firstname);

    // Verify that the rest of the data did not change
    expect(responseBody.lastname).toBe(booking.booking.lastname);
    expect(responseBody.totalprice).toBe(booking.booking.totalprice);
    expect(responseBody.depositpaid).toBe(booking.booking.depositpaid);
    expect(responseBody.bookingdates).toEqual(booking.booking.bookingdates);
    expect(responseBody.additionalneeds).toBe(booking.booking.additionalneeds);
});