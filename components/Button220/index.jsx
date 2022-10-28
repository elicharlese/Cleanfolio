import React from "react";
import "./Button220.css";

function Button220(props) {
  const { children } = props;

  return (
    <div className="button-2-20">
      <div className="dashboard-20 valign-text-middle raleway-bold-purple-heart-32px">{children}</div>
    </div>
  );
}

export default Button220;
