"use client";
import type {ReactNode} from "react";
import {ApolloClient, InMemoryCache, ApolloProvider} from "@apollo/client";

type Props = {
  children: ReactNode;
};

const client = new ApolloClient({
  uri: "https://flyby-router-demo.herokuapp.com/",
  cache: new InMemoryCache(),
});

export const NextApolloProvider = ({children}: Props) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};
