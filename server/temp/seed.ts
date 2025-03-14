import "dotenv/config";

import { connectDatabase } from "../src/database";
import { LISTINGS } from "../src/listings";

const seed = async () => {
    try {
        console.log(`[seed] : running...`);

        const db = await connectDatabase();

        for (const listing of LISTINGS) {
            await db.listings.insertOne(listing);
        }

        console.log(`[seed] : success`);
        process.exit(0);
    } catch (error) {
        throw new Error("failed to seed database");
    }
};

seed();