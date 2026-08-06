import { test as base } from '@playwright/test';
import { getToken } from '../utils/auth';
import { createBooking } from '../utils/booking';
import { bookingData } from '../test-data/bookingData';
import { BookingResponse } from '../models/BookingResponse';
import { ApiClient } from '../api/ApiClient';


type ApiFixtures = {
    apiClient: ApiClient;
    token: string;
    booking: BookingResponse;
};

export const test = base.extend<ApiFixtures>({

    apiClient: async ({ request }, use) => {
    const apiClient = new ApiClient(request);
    await use(apiClient);
    },

    token: async ({ apiClient }, use) => {

        const token = await apiClient.getToken();
        await use(token);
    },

    booking: async ({ apiClient }, use) => {
    const response = await apiClient.createBooking(bookingData);
    const booking: BookingResponse = await response.json();
    await use(booking);
    }

});

export { expect } from '@playwright/test';