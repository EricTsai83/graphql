import {startServerAndCreateNextHandler} from "@as-integrations/next";
import {ApolloServer} from "@apollo/server";
import {gql} from "graphql-tag";
import {NextRequest} from "next/server";

const resolvers = {
  Query: {
    hello: () => "world",
  },
};

const typeDefs = gql`
  type Query {
    hello: String
  }
`;

// @ts-ignoreignore-ts
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const handler = startServerAndCreateNextHandler(server);

export async function GET(request: NextRequest) {
  return handler(request);
}

export async function POST(request: NextRequest) {
  return handler(request);
}
