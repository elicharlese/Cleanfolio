import React from "react";
import "./Button224.css";

function Button224(props) {
  const { children } = props;

  return (
    <div className="button-2-24">
      <div className="dashboard-24 valign-text-middle raleway-bold-turquoise-blue-32px">{children}</div>
    </div>
  );
}

export default Button224;
