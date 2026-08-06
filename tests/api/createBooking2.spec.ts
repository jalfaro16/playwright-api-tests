import { test, expect } from '@playwright/test';
import { createBooking } from '../../utils/booking';
import { bookingData } from '../../test-data/bookingData';

test('Debe crear una reserva correctamente', async ({ request }) => {

    const booking = await createBooking(request, bookingData);

    expect(booking.bookingid).toBeGreaterThan(0);

    console.log(booking.bookingid);

});