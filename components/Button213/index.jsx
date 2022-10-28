import React from "react";
import "./Button213.css";

function Button213(props) {
  const { children } = props;

  return (
    <div className="button-2-13">
      <div className="dashboard-13">{children}</div>
    </div>
  );
}

export default Button213;
