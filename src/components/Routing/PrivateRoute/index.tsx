import React, { FC, useMemo } from "react";
import { Navigate, Outlet } from "react-router-dom";
import routes from "commons/constants/routes";

const PrivateRoute: FC = () => {
  const token = useMemo(() => {
    return localStorage.getItem("APP_AUTH_TOKEN");
  }, []);
  return token ? <Outlet /> : <Navigate to={routes.signIn()} />;
};

export default PrivateRoute;
