import { MongoClient } from "mongodb";
import { Database } from "../lib/types";

const url = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_CLUSTER}.mongodb.net`;

// TODO: add process.env validation
export const connectDatabase = async (): Promise<Database> => {
    const client = new MongoClient(url);
    await client.connect();
    const db = client.db(process.env.DB_NAME);

    return {
        listings: db.collection("listings")
    };
};
