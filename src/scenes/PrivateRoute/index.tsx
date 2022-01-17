import React, { FC, Fragment, ReactElement, useMemo } from "react";
import { Navigate } from "react-router-dom";
import routes from "commons/constants/routes";

type PrivateRouteProps = {
  children: ReactElement;
};
const PrivateRoute: FC<PrivateRouteProps> = ({ children }) => {
  const auth = useMemo(() => {
    return localStorage.getItem("APP_AUTH_TOKEN");
  }, []);
  return (
    <Fragment>{auth ? children : <Navigate to={routes.signIn()} />}</Fragment>
  );
};

export default PrivateRoute;
