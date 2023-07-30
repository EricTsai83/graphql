import "./globals.css";
import type {Metadata} from "next";
import {Inter} from "next/font/google";
import {NextApolloProvider} from "./providers/provider";
const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
  title: "GraphQL",
  description: "GraphQL testing",
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextApolloProvider>{children}</NextApolloProvider>
      </body>
    </html>
  );
}
