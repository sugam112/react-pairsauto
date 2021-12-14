import React from "react";
import { Link } from "react-router-dom";
import "./Button.css";

const styles = ["btn--primary", "btn--outline"];
const sizes = ["btn--medium", "btn--large"];

export const Button = ({
  children,
  type,
  onClick,
  buttonstyle,
  buttonSize,
}) => {
  const checkButtonStyle = styles.includes(buttonstyle)
    ? buttonstyle
    : styles[0];

  const checkButtonSize = sizes.includes(buttonSize) ? buttonSize : sizes[0];

  return (
    <Link to="/contact-us" className="btn-mobile">
      <button
        className={`btn  ${checkButtonStyle} ${checkButtonSize}`}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    </Link>
  );
};
