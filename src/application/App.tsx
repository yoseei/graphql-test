import React, {FC, Fragment} from "react";
import {ApolloProvider} from "@apollo/client";
import client from "data/utilities/glaqhQLClient";
import {BrowserRouter} from "react-router-dom";
import TopRouter from "scenes/Top/presentation/TopRouter";

localStorage.setItem("APP_AUTH_TOKEN", "hogehoge")

const AppContent: FC = () => {
  return (
    <Fragment>
      <TopRouter/>
    </Fragment>
  );
};

const App: FC = () => (
  <BrowserRouter>
    <ApolloProvider client={client}>
      <AppContent/>
    </ApolloProvider>
  </BrowserRouter>
);

export default App;