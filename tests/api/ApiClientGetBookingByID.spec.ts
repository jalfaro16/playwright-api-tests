import { test, expect } from '../../fixtures/api.fixture';
import { BookingData } from '../../models/BookingData';

test('Debe obtener un booking por id usando ApiClient', async ({ apiClient, booking }) => {

    // Obtener booking
    const response = await apiClient.getBooking(booking.bookingid);

    // Validar status code
    expect(response.status()).toBe(200);

    // Obtener response body
    const responseBody: BookingData = await response.json();
    console.log(responseBody); 

    // Validar datos
    expect(responseBody).toEqual(booking.booking);
    //expect(responseBody.firstname).toBe(booking.booking.firstname);
    

});