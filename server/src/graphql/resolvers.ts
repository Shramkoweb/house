import { ObjectId } from "mongodb";
import {
    Database,
    Listing
} from "../lib/types";

export const resolvers = {
    Query: {
        listings: async (_root: undefined, __: {}, { db }: { db: Database }) => {
            return await db.listings.find().toArray();
        }
    },
    Mutation: {
        deleteListing: async (_root: undefined, { id }: { id: string }, { db }: { db: Database }) => {
            const deletedListing = await db.listings.findOneAndDelete({ _id: new ObjectId(id) });

            if (!deletedListing) {
                throw new Error("failed to deleted listing");
            }

            return deletedListing;

        }
    },
    Listing: {
        id: (listing: Listing) => listing._id,
    }
};
