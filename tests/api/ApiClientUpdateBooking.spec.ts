import { test, expect } from '../../fixtures/api.fixture';
import { bookingData } from '../../test-data/bookingData';
import { BookingData } from '../../models/BookingData';

test('@api @smoke Debe actualizar un booking usando ApiClient', async ({ apiClient, token, booking }) => {
    
    // Actualizar booking
    const response = await apiClient.updateBooking(
        booking.bookingid,
        bookingData,
        token
    );

    console.log(response);

     // Validar status code
    expect(response.status()).toBe(200);

    // Obtener response body
    const responseBody: BookingData = await response.json();

    // Validar que los datos fueron actualizados correctamente
    expect(responseBody).toEqual(bookingData);

    expect(responseBody.firstname).toBe(bookingData.firstname);
    expect(responseBody.lastname).toBe(bookingData.lastname);
    expect(responseBody.totalprice).toBe(bookingData.totalprice);

});