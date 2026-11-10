import { test, expect } from '@playwright/test';

test('GET /booking should return status 200',{tag:'@regression'}, async ({ request }) => {

    const response = await request.get('/booking');

    console.log(await response.json());

    expect(response.status()).toBe(200);

    const responseBody = await response.json();

    expect(responseBody.length).toBeGreaterThan(0);

    expect(responseBody[0]).toHaveProperty('bookingid');

    expect(typeof responseBody[0].bookingid).toBe('number');


});