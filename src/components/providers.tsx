import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { PropsWithChildren } from "react";

const client = new ApolloClient({
    uri: process.env.SERVER_URL + "/graphql",
    cache: new InMemoryCache(),
    defaultOptions: {
        watchQuery: {
            fetchPolicy: "no-cache",
        },
    },
});

export function Providers({ children }: PropsWithChildren) {
    return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
