import React from "react";
import "./Button3.css";

function Button3(props) {
  const { children, className } = props;

  return (
    <div className={`button-57 ${className || ""}`}>
      <div className="hire-me-64 valign-text-middle raleway-bold-white-26px">
        <span>
          <span className="span-23 raleway-bold-white-26px">{children}</span>
        </span>
      </div>
    </div>
  );
}

export default Button3;
