import { test, expect } from '../../../fixtures/api.fixture';
import { bookingData } from '../../../test-data/bookingData';

test('@api @smokeNo debe actualizar un booking sin autenticación', async ({ apiClient, booking }) => {

    // Intentar actualizar sin token
    const response = await apiClient.updateBooking(
        booking.bookingid,
        bookingData,
        ''
    );

    // Validar status code
    expect(response.status()).toBe(403);

    expect(await response.text()).toBe('Forbidden');

});