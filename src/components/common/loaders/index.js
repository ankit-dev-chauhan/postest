import React from "react";
import { Spinner } from "react-bootstrap";
import styles from "./loader.module.scss";
const SpinnerLoader = (props) => {
  const style = {
    width: props?.width,
    height: props?.height,
  };
  return (
    <div>
      <Spinner
        style={style}
        animation="border"
        role="status"
        className={
          props?.fileLoad === "true"
            ? `${styles.loaderFileStyle}`
            : `${styles.loaderStyle}`
        }
      />
    </div>
  );
};

export default SpinnerLoader;
