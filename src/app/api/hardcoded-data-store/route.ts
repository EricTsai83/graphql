import {ApolloServer} from "@apollo/server";
import {startServerAndCreateNextHandler} from "@as-integrations/next";
import {NextRequest} from "next/server";
// Hardcoded data store "Kate Chopin"

const books = [
  {
    title: "The Awakening",
    author: {name: "Eric", age: 12, birthday: "2000/01/01"},
  },
  {
    title: "City of Glass",
    author: {name: "Peko", age: 12, birthday: "2000/01/01"},
  },
];

// Schema definition
const typeDefs = `#graphql
  type Book {
    title: String
    author: Author
  }

  type Author {
    name: String
    age: Int
    birthday: String
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
