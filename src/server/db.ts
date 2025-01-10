import {MongoClient} from "mongodb";
import { MONGODB_URL, DATABASE_NAME } from "./config";

let connectedClient = null;

export const connectClient = async () => {
    if (connectedClient) {
        return connectedClient.db(DATABASE_NAME);
    }
    // connect to the db
    const client = new MongoClient(MONGODB_URL);
    await client.connect();
    await client.db(DATABASE_NAME).command({ping: 1});
    console.log("DB connected..");
    connectedClient = client;

    return connectedClient.db(DATABASE_NAME);
};

export const stopClient = () => {
    connectedClient?.close();
}