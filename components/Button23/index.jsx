import React from "react";
import "./Button23.css";

function Button23(props) {
  const { children } = props;

  return (
    <div className="button-2-3">
      <div className="dashboard-3 raleway-bold-mandy-32px">{children}</div>
    </div>
  );
}

export default Button23;
