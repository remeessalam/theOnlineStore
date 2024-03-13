import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { ApolloServer } from "@apollo/server";
// import { NextRequest } from "next/server";
import schema from "./schema";
import resolver from "./resolvers";
// const typeDefs = gql`
//   type Query {
//     hello: String
//   }
// `;

// const resolvers = {
//   Query: {
//     hello: () => "Hello world!",
//   },
// };

const server = new ApolloServer({
  typeDefs: schema,
  resolvers: resolver,
});

const handler = startServerAndCreateNextHandler(server, {
  context: async (req) => ({ req }),
});

export { handler as GET, handler as POST };
