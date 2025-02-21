import express from "express";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import bodyParser from "body-parser";
import dotenv from "dotenv";

import { schema } from "./graphql";

dotenv.config();

const server = new ApolloServer({ schema });
const port = process.env.PORT || 3000;

const main = async () => {
    await server.start();

    const app = express();

    // Middleware
    app.use(bodyParser.json());

    // Apollo Server
    app.use("/api", expressMiddleware(server));

    // Server start
    app.listen(port, () => {
        console.log(`[server] Server running on port ${port}`);
        console.log(`[graphql] Playground available at http://localhost:${port}/api`);
    });
};

main().catch((error) => {
    console.error("[server] Failed to start server:", error);
    process.exit(1);
});
