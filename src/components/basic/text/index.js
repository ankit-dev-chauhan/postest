import React from "react";
import PropTypes from "prop-types";
// import { colors } from "../../constants/colors";

const Text = (props) => {
  const style = {
    fontSize: props.size,
    color: props.color,
    fontWeight: props.fontWeight,
    fontStyle: props.fontStyle,
    fontFamily: props.fontFamily,
    lineheight: props.lineheight,
  };

  return (
    <span style={style} {...props}>
      {props.children}
    </span>
  );
};

Text.propTypes = {
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  fontWeight: PropTypes.number,
  fontStyle: PropTypes.string,
  color: PropTypes.string,
  className: PropTypes.string,
  lineheight: PropTypes.string,
  fontFamily: PropTypes.string,
};

Text.defaultProps = {
  size: "16px",
  fontWeight: 500,
  fontStyle: "normal",
  color: "#000",
  className: "",
  lineheight: "15px",
  fontFamily: "mulish",
};

export default Text;
