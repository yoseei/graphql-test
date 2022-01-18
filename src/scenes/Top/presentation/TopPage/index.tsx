import React, { FC, Fragment } from "react";
import styles from "./style.module.scss";

const TopPage: FC = () => {
  return (
    <Fragment>
      <div className={styles.page}>トップページです</div>
    </Fragment>
  );
};

export default TopPage;
