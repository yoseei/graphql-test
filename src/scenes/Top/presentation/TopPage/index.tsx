import React, {FC, Fragment, ReactElement} from "react";
import styles from "./style.module.scss";
import {Navigate} from "react-router-dom";
import Home from "scenes/Home";

type PrivateRouteProps = {
  children: ReactElement
}

const TopPage: FC = () => {
  const useAuth = () => {
    return localStorage.getItem("APP_AUTH_TOKEN");
  }
  const auth = useAuth()

  const PrivateRoute: FC<PrivateRouteProps> = ({children}) => {
    return auth ? children : <Navigate to="/login"/>;
  }

  return (
    <Fragment>
      {auth ? <PrivateRoute children={<Home/>}/> :
        <div className={styles.page}>トップページです</div>
      }
    </Fragment>
  )
};

export default TopPage;