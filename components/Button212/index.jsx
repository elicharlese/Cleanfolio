import React from "react";
import "./Button212.css";

function Button212(props) {
  const { children } = props;

  return (
    <div className="button-2-12">
      <div className="dashboard-12 valign-text-middle raleway-bold-cararra-32px">{children}</div>
    </div>
  );
}

export default Button212;
