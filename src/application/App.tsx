import React, { FC, Fragment } from "react";
import { ApolloProvider } from "@apollo/client";
import client from "data/utilities/glaqhQLClient";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivateRoute from "scenes/PrivateRoute";
import TopPage from "scenes/Top/presentation/TopPage";
import HomePage from "scenes/Home/presentation/HomePage";
import routes from "commons/constants/routes";
import SignInPage from "scenes/SignIn/presentation/SignInPage";
const AppContent: FC = () => {
  return (
    <Fragment>
      <Routes>
        <Route path={routes.top()} element={<TopPage />} />
        <Route
          path={routes.home()}
          element={
            <PrivateRoute>
              <HomePage />
            </PrivateRoute>
          }
        />
        <Route path={routes.signIn()} element={<SignInPage />} />
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
