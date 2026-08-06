import { test, expect } from '../../fixtures/api.fixture';
import { BookingResponse } from '../../models/BookingResponse';

test('Debe obtener la lista de bookings usando ApiClient', async ({ apiClient }) => {

    // Obtener lista de bookings
    const response = await apiClient.getBookings();

    // Validar status code
    expect(response.status()).toBe(200);

    // Obtener response body
    const responseBody: BookingResponse[] = await response.json();

    // Validar que la respuesta sea un array
    expect(Array.isArray(responseBody)).toBeTruthy();

    // Validar que existan bookings
    expect(responseBody.length).toBeGreaterThan(0);

    // Validar estructura del primer elemento
    expect(responseBody[0]).toHaveProperty('bookingid');

    expect(typeof responseBody[0].bookingid).toBe('number');

    for (const booking of responseBody) {
    expect(booking).toHaveProperty('bookingid');
    expect(typeof booking.bookingid).toBe('number');
    }

    console.log(await response.json());

    //console.log(responseBody);

});