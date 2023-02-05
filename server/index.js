import { startApolloServer } from "./app.js";
import { typeDefs } from "./graphql/typeDefs.js";
import { resolvers } from "./graphql/resolvers.js";
import { connectDb } from "./database/index.js";
connectDb();
startApolloServer(typeDefs, resolvers);
