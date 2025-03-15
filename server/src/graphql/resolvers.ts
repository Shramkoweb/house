import { LISTINGS } from "../listings";
import { ObjectId } from "mongodb";
import { Database } from "../lib/types";

export const resolvers = {
    Query: {
        listings: async (_: undefined, __: {}, { db }: { db: Database }) => {
            return await db.listings.find().toArray();
        }
    },
    Mutation: {
        deleteListing: (_root: undefined, { id }: { id: ObjectId }) => {
            for (let i = 0; i < LISTINGS.length; i++) {
                if (LISTINGS[i]._id === id) {
                    return LISTINGS.splice(i, 1)[0];
                }
            }

            throw new Error("failed to deleted listing");
        }
    },
    Listing: {
        // TODO: any :cry
        id: (listing: any) => listing._id,
    }
};
