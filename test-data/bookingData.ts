import { BookingData } from '../models/BookingData';

export const bookingData: BookingData = {
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