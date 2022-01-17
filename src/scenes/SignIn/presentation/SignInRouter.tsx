import React, { FC, Fragment } from "react";
import routes from "commons/constants/routes";
import { Routes, Route } from "react-router-dom";
import SignInPage from "scenes/SignIn/presentation/SignInPage";

const SignInRouter: FC = () => {
  return (
    <Fragment>
      <Routes>
        <Route path={routes.signIn()} element={<SignInPage />} />
      </Routes>
    </Fragment>
  );
};

export default SignInRouter;
