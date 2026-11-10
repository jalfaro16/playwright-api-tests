import { test, expect } from '@playwright/test';
import { getToken } from '../../../utils/auth';
import { createBooking } from '../../../utils/booking';
import { bookingData } from '../../../test-data/bookingData';

test('Should update an existing booking',{tag:'@regression'}, async ({ request }) => {

    const token = await getToken(request);

    const booking = await createBooking(request,bookingData);

    const bookingId = booking.bookingid;

    const updatedBooking = {
    firstname: 'Michael',
    lastname: 'Jordan',
    totalprice: 500,
    depositpaid: false,
    bookingdates: {
        checkin: '2026-10-01',
        checkout: '2026-10-15'
    },
    additionalneeds: 'Lunch'
    };

    const response = await request.put(`/booking/${bookingId}`, {
    headers: {
        Cookie: `token=${token}`
    },
    data: updatedBooking
   });

   expect(response.status()).toBe(200);


   const responseBody = await response.json();

   expect(responseBody).toEqual(updatedBooking);

   expect(responseBody.firstname).toBe(updatedBooking.firstname);
   expect(responseBody.lastname).toBe(updatedBooking.lastname);
   expect(responseBody.totalprice).toBe(updatedBooking.totalprice);
   expect(responseBody.depositpaid).toBe(updatedBooking.depositpaid);
   expect(responseBody.bookingdates.checkin).toBe(updatedBooking.bookingdates.checkin);
   expect(responseBody.bookingdates.checkout).toBe(updatedBooking.bookingdates.checkout);
   expect(responseBody.additionalneeds).toBe(updatedBooking.additionalneeds);
   console.log(responseBody);

});
