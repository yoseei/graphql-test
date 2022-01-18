import React, {FC, Fragment} from "react";
import {Route, Routes} from "react-router-dom";
import TopPage from "./TopPage";
import routes from "commons/constants/routes";

const TopRouter: FC = () => {
  return (
    <Fragment>
      <Routes>
          <Route path={routes.top()} element={<TopPage/>}/>
      </Routes>
    </Fragment>
  );
};

export default TopRouter;