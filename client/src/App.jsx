import React from "react";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Projects from "./pages/Projects";

const client = new ApolloClient({
  url: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Projects />} />
        </Routes>
      </BrowserRouter>
    </ApolloProvider>
  );
};

export default App;
