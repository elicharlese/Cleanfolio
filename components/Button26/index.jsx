import React from "react";
import "./Button26.css";

function Button26(props) {
  const { children } = props;

  return (
    <div className="button-2-6">
      <div className="dashboard-6 valign-text-middle raleway-bold-seagull-32px">{children}</div>
    </div>
  );
}

export default Button26;
