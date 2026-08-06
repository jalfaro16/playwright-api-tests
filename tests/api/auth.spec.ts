import { test, expect } from '@playwright/test';
import { getToken } from '../../utils/auth';

test('Debe obtener un token válido', async ({ request }) => {

    const token = await getToken(request);

    expect(token).toBeDefined();

    expect(typeof token).toBe('string');

    expect(token).not.toBe('');

    console.log(token);
    
});