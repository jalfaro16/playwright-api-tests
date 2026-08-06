import { APIRequestContext, expect, APIResponse  } from '@playwright/test';

import { env } from '../config/env';
import { AuthResponse } from '../models/AuthResponse';
import { BookingData } from '../models/BookingData';

export class ApiClient {

    constructor(
        private readonly request: APIRequestContext
    ) {}

    async healthCheck(): Promise<APIResponse> {
    return await this.request.get('/ping');
    }

    async auth(
               username: string = env.username,
               password: string = env.password
               ): Promise<APIResponse> {

    return await this.request.post('/auth', {
        data: {
            username,
            password}
    });
    }

    async getToken(): Promise<string> {

        const response = await this.auth();
        expect(response.status()).toBe(200);
        const responseBody: AuthResponse = await response.json();
        return responseBody.token;
    }

    async getBooking(bookingId: number): Promise<APIResponse> {

        return await this.request.get(`/booking/${bookingId}`);
   }

    async getBookings(): Promise<APIResponse> {
    return await this.request.get('/booking');
   }

    async deleteBooking(
        bookingId: number,
        token: string
        ): Promise<APIResponse> {
  
        return await this.request.delete(`/booking/${bookingId}`, {
        headers: {
            Cookie: `token=${token}`
        }
    });
    }

    async createBooking(bookingData: BookingData): Promise<APIResponse> {

        return await this.request.post('/booking', {data: bookingData});   
    }

    async updateBooking(
        bookingId: number,
        bookingData: BookingData,
        token: string
        ): Promise<APIResponse> {

    return await this.request.put(`/booking/${bookingId}`, {
        headers: {
            Cookie: `token=${token}`},
        data: bookingData});
    }

    async partialUpdateBooking(
        bookingId: number,
        bookingData: Partial<BookingData>,
        token: string
                ): Promise<APIResponse> {

        return await this.request.patch(`/booking/${bookingId}`, {
        headers: {
            Cookie: `token=${token}`},
        data: bookingData
        });

    }

}