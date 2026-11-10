import { test, expect } from '@playwright/test';

test('POST /booking should create a new booking',{tag:['@smoke','@regression']}, async ({ request }) => {

    const bookingData = {
        firstname: 'John',
        lastname: 'Doe',
        totalprice: 150,
        depositpaid: true,
        bookingdates: {
            checkin: '2026-09-01',
            checkout: '2026-09-10'
        },
        additionalneeds: 'Breakfast'
    };

    const response = await request.post('/booking', {
        data: bookingData
    });

    expect(response.status()).toBe(200);

    const responseBody = await response.json();

    expect(responseBody).toHaveProperty('bookingid');
    expect(typeof responseBody.bookingid).toBe('number');

    expect(responseBody.booking.firstname).toBe(bookingData.firstname);
    expect(responseBody.booking.lastname).toBe(bookingData.lastname);
    expect(responseBody.booking.totalprice).toBe(bookingData.totalprice);
    expect(responseBody.booking.depositpaid).toBe(bookingData.depositpaid);
    expect(responseBody.booking.bookingdates.checkin).toBe(bookingData.bookingdates.checkin);
    expect(responseBody.booking.bookingdates.checkout).toBe(bookingData.bookingdates.checkout);
    expect(responseBody.booking.additionalneeds).toBe(bookingData.additionalneeds);

});