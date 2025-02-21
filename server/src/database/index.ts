import { MongoClient } from "mongodb";

const url = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_CLUSTER}.mongodb.net`;

// TODO: add process.env validation
export const connectDatabase = async () => {
    const client = new MongoClient(url);
    await client.connect();
    const db = client.db(process.env.DB_NAME);

    return {
        listings: db.collection("listings")
    };
};
