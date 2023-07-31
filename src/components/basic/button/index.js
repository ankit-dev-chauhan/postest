import { oneOf, PropTypes } from "prop-types";
import styles from "./styles.module.scss";

const Button = (props) => {
    const { type, className, style, onClick, disabled } = props;
    return (
        <button
            {...props}
            className={`${props.outlined ? styles.button_outlined : styles.button} ${props.disabled ? styles.disabled : ""
                } ${className}`}
        >
            {props.children}
        </button>
    );
};

Button.propTypes = {
    title: PropTypes.string,
    type: oneOf(["button", "reset", "submit"]),
    style: PropTypes.object,
    onClick: PropTypes.func.isRequired,
    disabled: PropTypes.bool,
};

Button.defaultProps = {
    style: {},
    onClick: () => { },
};

export default Button;
