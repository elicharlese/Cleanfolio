import React from "react";
import "./Button25.css";

function Button25(props) {
  const { children } = props;

  return (
    <div className="button-2-5">
      <div className="dashboard-5 raleway-bold-seagull-32px">{children}</div>
    </div>
  );
}

export default Button25;
