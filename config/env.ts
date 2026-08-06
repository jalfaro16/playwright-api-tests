import dotenv from 'dotenv';

dotenv.config();

function getEnv(name: string): string {
    const value = process.env[name];

    if (!value) {
        throw new Error(`La variable de entorno ${name} no está definida.`);
    }

    return value;
}

export const env = {
    baseUrl: getEnv('BOOKER_BASE_URL'),
    username: getEnv('BOOKER_USERNAME'),
    password: getEnv('BOOKER_PASSWORD')
};