import { APIRequestContext, expect } from '@playwright/test';
import { AuthResponse } from '../models/AuthResponse';


export async function getToken(request: APIRequestContext,
    ): Promise<string> {

   const username = process.env.BOOKER_USERNAME;
   const password = process.env.BOOKER_PASSWORD;

if (!username || !password) {
    throw new Error('BOOKER_USERNAME o BOOKER_PASSWORD no están definidos.');
}

    const response = await request.post('/auth', {
        data: {
            username: username,
            password: password
        }
    });

    expect(response.status()).toBe(200);

    const responseBody: AuthResponse = await response.json();

    expect(responseBody).toHaveProperty('token');

    return responseBody.token;

}