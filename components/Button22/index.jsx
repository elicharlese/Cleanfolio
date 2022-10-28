import React from "react";
import "./Button22.css";

function Button22(props) {
  const { children } = props;

  return (
    <div className="button-2-2">
      <div className="dashboard-2 valign-text-middle raleway-bold-mexican-red-32px">{children}</div>
    </div>
  );
}

export default Button22;
