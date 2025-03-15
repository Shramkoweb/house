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
import { startStandaloneServer } from "@apollo/server/standalone";
import { Database } from "./lib/types";

const mount = async (app: Application) => {
    const db = await connectDatabase();
    const server = new ApolloServer<{ db: Database }>({
        typeDefs,
        resolvers
    });
    const { url } = await startStandaloneServer(server, {
        context: async () => {

            return {
                db
            };
        }
    });

    console.log(`[server] GraphQL API available at ${url}`);

    // Apollo Server
    app.use("/api", bodyParser.json(), expressMiddleware(server, {
        context: async ({ req }) => ({
            db,
            headers: req.headers,
        }),
    }));

    // Server start
    app.listen(process.env.PORT, () => {
        console.log(`[graphql] Playground available at http://localhost:${process.env.PORT}/api`);
    });
};

mount(express()).catch((error) => {
    console.error("[server] Failed to start server:", error);
    process.exit(1);
});
