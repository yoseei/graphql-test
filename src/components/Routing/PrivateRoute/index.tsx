import React, { FC, useMemo } from "react";
import { Navigate, Outlet } from "react-router-dom";
import routes from "commons/constants/routes";
import { useCurrentAccount } from "commons/hooks/useCurrentAccount/useCurrentAccount";

const PrivateRoute: FC = () => {
  const token = useMemo(() => {
    return localStorage.getItem("APP_AUTH_TOKEN");
  }, []);

  useCurrentAccount(token);

  return token ? <Outlet /> : <Navigate to={routes.signIn()} />;
};

export default PrivateRoute;
