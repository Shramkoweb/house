import {
    ObjectId,
    WithId
} from "mongodb";
import {
    Database,
    Listing
} from "../lib/types";

export const resolvers = {
    Query: {
        listings: async (_root: undefined, __: {}, { db }: { db: Database }): Promise<Array<WithId<Listing> >> => {
            return await db.listings.find().toArray();
        }
    },
    Mutation: {
        deleteListing: async (_root: undefined, { id }: { id: string }, { db }: {
            db: Database
        }): Promise<WithId<Listing>> => {
            const deletedListing = await db.listings.findOneAndDelete({ _id: new ObjectId(id) });

            if (!deletedListing) {
                throw new Error("failed to deleted listing");
            }

            return deletedListing;

        }
    },
    Listing: {
        id: (listing: Listing): string => listing._id.toString(),
    }
};
