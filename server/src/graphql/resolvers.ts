import { LISTINGS } from "../listings";

export const resolvers = {
    Query: {
        listings: () => {
            return LISTINGS;
        }
    },
    Mutation: {
        deleteListing: (_root: undefined, { id }: { id: string }) => {
            for (let i = 0; i < LISTINGS.length; i++) {
                if (LISTINGS[i].id === id) {
                    return LISTINGS.splice(i, 1)[0];
                }
            }

            throw new Error("failed to deleted listing");
        }
    }
};
