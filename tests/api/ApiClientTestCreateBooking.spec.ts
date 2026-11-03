import { test, expect } from '../../fixtures/api.fixture';
import { bookingData } from '../../test-data/bookingData';
import { BookingResponse } from '../../models/BookingResponse';

test('@api @smoke Debe crear un booking usando ApiClient', async ({ apiClient }) => {


    const response = await apiClient.createBooking(bookingData);
    // Validar status code
    expect(response.status()).toBe(200);

     // Obtener body
    const responseBody: BookingResponse = await response.json();

    // Validar bookingId
    expect(responseBody.bookingid).toBeGreaterThan(0);

    // Validar que los datos creados coinciden con los enviados
    expect(responseBody.booking).toEqual(bookingData);


});