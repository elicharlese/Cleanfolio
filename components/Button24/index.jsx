import React from "react";
import "./Button24.css";

function Button24(props) {
  const { children } = props;

  return (
    <div className="button-2-4">
      <div className="dashboard-4 valign-text-middle raleway-bold-mandy-32px">{children}</div>
    </div>
  );
}

export default Button24;
