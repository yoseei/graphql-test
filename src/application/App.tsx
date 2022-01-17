import React, { FC, Fragment } from "react";
import { ApolloProvider } from "@apollo/client";
import client from "data/utilities/glaqhQLClient";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivateRoute from "scenes/PrivateRoute";
import TopPage from "scenes/Top/presentation/TopPage";
import Home from "scenes/Home";
import routes from "commons/constants/routes";
import SignIn from "scenes/SignIn";
const AppContent: FC = () => {
  return (
    <Fragment>
      <Routes>
        <Route path={routes.top()} element={<TopPage />} />
        <Route
          path={routes.home()}
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
        <Route path={routes.signIn()} element={<SignIn />} />
      </Routes>
    </Fragment>
  );
};

const App: FC = () => (
  <BrowserRouter>
    <ApolloProvider client={client}>
      <AppContent />
    </ApolloProvider>
  </BrowserRouter>
);

export default App;
