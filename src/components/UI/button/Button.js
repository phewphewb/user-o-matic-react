import React, { forwardRef } from "react";
import classNames from "classnames";
import "./Button.scss";

const Button = forwardRef(({ title, id, disabled, active, children, onClick }, ref) => {
  return (
    <button
      ref={ref}
      id={id}
      disabled={disabled}
      className={classNames("button-base", { active })}
      onClick={onClick}>
      {title}
      {children}
    </button>
  );
});
export default Button;
