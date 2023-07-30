import {ApolloServer} from "@apollo/server";
import {startServerAndCreateNextHandler} from "@as-integrations/next";
import {NextRequest} from "next/server";

// Hardcoded data store
const books = [
  {
    title: "The Awakening",
    author: "Kate Chopin",
  },
  {
    title: "City of Glass",
    author: "Paul Auster",
  },
];

// Schema definition
const typeDefs = `#graphql
  type Book {
    title: String
    author: String
  }

  type Query {
    books: [Book]
  }
`;

// Resolver map
const resolvers = {
  Query: {
    books() {
      return books;
    },
  },
};

// Pass schema definition and resolvers to the
// ApolloServer constructor
// @ts-ignoreignore-ts
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// Launch the server
const handler = startServerAndCreateNextHandler(server);

export async function GET(request: NextRequest) {
  return handler(request);
}

export async function POST(request: NextRequest) {
  return handler(request);
}
