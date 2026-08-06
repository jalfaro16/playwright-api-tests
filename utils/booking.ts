import { APIRequestContext, expect } from '@playwright/test';
import { BookingData } from '../models/BookingData';
import { BookingResponse } from '../models/BookingResponse';

export async function createBooking(request: APIRequestContext, bookingData: BookingData)
: Promise<BookingResponse> {

    const response = await request.post('/booking', {
        data: bookingData
    });

    expect(response.status()).toBe(200);

    //const responseBody = await response.json();
    const responseBody: BookingResponse = await response.json();

    return responseBody;

}