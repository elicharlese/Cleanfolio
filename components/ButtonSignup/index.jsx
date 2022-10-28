import React from "react";
import "./ButtonSignup.css";

function ButtonSignup(props) {
  const { className } = props;

  return (
    <div className={`button-signup-1 ${className || ""}`}>
      <div className="overlap-group2-2">
        <div className="sign-up-1 valign-text-middle raleway-normal-cape-cod-22px">Sign-Up</div>
      </div>
    </div>
  );
}

export default ButtonSignup;
