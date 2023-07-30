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
// const handler = startServerAndCreateNextHandler<NextRequest>(server);
// export async function GET(request: Request) {
//   return new Response("This is my parent route");
// }

// export async function POST(request: NextRequest) {
//   return handler(request);
// }

// const client = new ApolloClient({
//   uri: "https://flyby-router-demo.herokuapp.com/",
//   cache: new InMemoryCache(),
// });

// export async function get(request: NextRequest) {
//   const formData = await request.formData();
//   const file = formData.get("file");
//   const response = await fetch(`${HOSTNAME}/akahana/vit-base-cats-vs-dogs`, {
//     headers: HEADER,
//     method: "POST",
//     body: file,
//   });

//   const result = await response.json();
//   return NextResponse.json(result);
// }
