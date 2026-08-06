import { test, expect } from '@playwright/test';

test('GET /booking debe retornar status 200', async ({ request }) => {

    const response = await request.get('/booking');

    console.log(await response.json());

    expect(response.status()).toBe(200);

    const responseBody = await response.json();

    expect(responseBody.length).toBeGreaterThan(0);

    expect(responseBody[0]).toHaveProperty('bookingid');

    expect(typeof responseBody[0].bookingid).toBe('number');

    //console.log(responseBody);

});