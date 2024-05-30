import { config } from 'dotenv';
config();
export const DB_NAME = process.env.DB_NAME;
export const DB_USER = process.env.DB_USER;
export const DB_PASSWORD = process.env.DB_PASSWORD;
export const DB_HOST = process.env.DB_HOST;
export const PORT = process.env.PORT;
export const SECRET_TOKEN = process.env.SECRET_TOKEN;
