import { test, expect } from '../../fixtures/api.fixture';
import { BookingData } from '../../models/BookingData';

test('Debe actualizar parcialmente un booking', async ({ apiClient, token, booking }) => {

    const partialBooking: Partial<BookingData> = {
        firstname: 'Pedro'
    };

    // Actualizar parcialmente el booking
    const response = await apiClient.partialUpdateBooking(
        booking.bookingid,
        partialBooking,
        token
    );

    expect(response.status()).toBe(200);

    const responseBody: BookingData = await response.json();

    expect(responseBody.firstname).toBe(partialBooking.firstname);

    // Validar que el resto de los datos no cambiaron
    expect(responseBody.lastname).toBe(booking.booking.lastname);
    expect(responseBody.totalprice).toBe(booking.booking.totalprice);
    expect(responseBody.depositpaid).toBe(booking.booking.depositpaid);
    expect(responseBody.bookingdates).toEqual(booking.booking.bookingdates);
    expect(responseBody.additionalneeds).toBe(booking.booking.additionalneeds);
});