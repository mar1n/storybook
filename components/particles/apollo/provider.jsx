import React from "react";
import { ApolloProvider } from "@apollo/react-hooks";
import ApolloClient from "apollo-boost";

const client = new ApolloClient({
	uri: "https://countries.trevorblades.com"
});

const ApolloWrapper = ({ children }) => (
	<ApolloProvider client={client}>{children}</ApolloProvider>
);

export default ApolloWrapper;