import {
    Database,
    Listing
} from "../../../lib/types";
import { ObjectId } from "mongodb";

export const listingResolvers = {
    Query: {
        listings: async (
            _root: undefined,
            _args: {},
            { db }: { db: Database }
        ): Promise<Listing[]> => {
            return await db.listings.find({}).toArray();
        }
    },
    Mutation: {
        deleteListing: async (
            _root: undefined,
            { id }: { id: string },
            { db }: { db: Database }
        ): Promise<Listing> => {
            const deleted = await db.listings.findOneAndDelete({
                _id: new ObjectId(id)
            });

            if (!deleted) {
                throw new Error("failed to delete listing");
            }

            return deleted;
        }
    },
    Listing: {
        id: (listing: Listing): string => listing._id.toString()
    }
};