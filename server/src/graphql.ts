import {
    GraphQLID,
    GraphQLInt,
    GraphQLList,
    GraphQLNonNull,
    GraphQLObjectType,
    GraphQLSchema,
    GraphQLString
} from "graphql";
import { LISTINGS } from "./listings";

const Listing = new GraphQLObjectType({
    name: "Listing",
    fields: {
        id: { type: new GraphQLNonNull(GraphQLID) },
        title: { type: new GraphQLNonNull(GraphQLString) },
        image: { type: new GraphQLNonNull(GraphQLString) },
        address: { type: new GraphQLNonNull(GraphQLString) },
        price: { type: new GraphQLNonNull(GraphQLInt) },
        numOfGuests: { type: new GraphQLNonNull(GraphQLInt) },
        numOfBeds: { type: new GraphQLNonNull(GraphQLInt) },
        numOfBaths: { type: new GraphQLNonNull(GraphQLInt) },
        rating: { type: new GraphQLNonNull(GraphQLInt) }
    }
});

const query = new GraphQLObjectType({
    name: "Query",
    fields: {
        listings: {
            type: new GraphQLNonNull(new GraphQLList(Listing)),
            resolve: () => LISTINGS
        }
    }
});

const mutation = new GraphQLObjectType({
    name: "Mutation",
    fields: {
        deleteListing: {
            type: new GraphQLNonNull(Listing),
            args: {
                id: {
                    type: new GraphQLNonNull(GraphQLID)
                }
            },
            resolve: (_, { id }, context, info) => {
                // TODO: types fro, resolver
                for (let i = 0; i < LISTINGS.length; i++) {
                    if (LISTINGS[i].id === id) {
                        return LISTINGS.splice(i, 1)[0];
                    }
                }

                throw new Error("failed to deleted listing");
            }
        }
    }
});

export const schema = new GraphQLSchema({
    query,
    mutation
});