import React from "react";
import "./ButtonLogin.css";

function ButtonLogin(props) {
  const { className } = props;

  return (
    <div className={`button-login-2 ${className || ""}`}>
      <div className="hero-button-1 raleway-bold-white-26px">Login</div>
    </div>
  );
}

export default ButtonLogin;
