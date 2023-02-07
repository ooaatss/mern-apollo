import dotenv from 'dotenv';
import http from "http";
import express from "express";
import cors from "cors";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
dotenv.config()
export async function startApolloServer(typeDefs, resolvers) {
  const app = express();
  app.use(cors())
  const port = process.env.SERVER_PORT || 4000;
  const httpServer = http.createServer(app);

  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  await server.start();

  app.use("/graphql", cors(), express.json(), expressMiddleware(server));

  await new Promise((resolve) => {
    httpServer.listen({
      port,
    }, resolve);
  });
  console.log(`[server]: Server running on port ${port}! 🚀`)
}
