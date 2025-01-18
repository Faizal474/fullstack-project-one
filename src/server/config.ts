const env = process.env;
const PORT = env.PORT ?? "8080";
const HOST = env.HOST ?? "0.0.0.0";
export const SERVER_URL = `http://${HOST}:${PORT}`;

export const MONGO_URI = env.MONGO_URI ?? "mongodb://127.0.0.1:27017";
export const DATABASE_NAME = env.DATABASE_NAME ?? "local";

export default {
    PORT,
    HOST
}