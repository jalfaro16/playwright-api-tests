//import { test, expect } from '@playwright/test';
import { test, expect } from '../../fixtures/api.fixture';
import { getToken } from '../../utils/auth';
import { createBooking } from '../../utils/booking';
import { bookingData } from '../../test-data/bookingData';

test('Debe eliminar un booking existente', async ({request, token, booking }) => {

    //const token = await getToken(request);
    //const booking = await createBooking(request, bookingData);

    const bookingId = booking.bookingid;
    const deleteResponse = await request.delete(`/booking/${bookingId}`, {
    headers: {
        Cookie: `token=${token}`  
    }
    });

    expect(deleteResponse.status()).toBe(201);      
    const getResponse = await request.get(`/booking/${bookingId}`);
    expect(getResponse.status()).toBe(404);

});