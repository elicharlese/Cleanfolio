import React from "react";
import "./Button210.css";

function Button210(props) {
  const { children } = props;

  return (
    <div className="button-2-10">
      <div className="dashboard-10 valign-text-middle raleway-bold-dairy-cream-32px">{children}</div>
    </div>
  );
}

export default Button210;
