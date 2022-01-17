import React, { FC, Fragment } from "react";
import routes from "commons/constants/routes";
import { Route, Routes } from "react-router-dom";
import HomePage from "scenes/Home/presentation/HomePage";

const HomeRouter: FC = (auth) => {
  return (
    <Fragment>
      <Routes>
        <Route path={routes.home()} element={<HomePage />} />
      </Routes>
    </Fragment>
  );
};

export default HomeRouter;
