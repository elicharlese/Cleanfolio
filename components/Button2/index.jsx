import React from "react";
import "./Button2.css";

function Button2(props) {
  const { children } = props;

  return (
    <div className="button-2-1">
      <div className="dashboard-1 raleway-bold-mexican-red-32px">{children}</div>
    </div>
  );
}

export default Button2;
