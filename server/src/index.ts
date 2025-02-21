import express, { Application } from "express";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import bodyParser from "body-parser";
import "dotenv/config";
import {
    resolvers,
    typeDefs
} from "./graphql";
import { connectDatabase } from "./database";

const mount = async (app: Application) => {
    const db = await connectDatabase();
    const server = new ApolloServer({
        typeDefs,
        resolvers
    });
    await server.start();


    // Apollo Server
    app.use("/api", bodyParser.json(), expressMiddleware(server, {
        context: async ({ req }) => ({
            headers: req.headers,
        }),
    }));

    // Server start
    app.listen(process.env.PORT, () => {
        console.log(`[server] Server running on port ${process.env.PORT}`);
        console.log(`[graphql] Playground available at http://localhost:${process.env.PORT}/api`);
    });

    const listings = await db.listings.find({}).toArray();
    console.log({ listings });
};

mount(express()).catch((error) => {
    console.error("[server] Failed to start server:", error);
    process.exit(1);
});
