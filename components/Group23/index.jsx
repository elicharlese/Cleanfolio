import React from "react";
import "./Group23.css";

function Group23(props) {
  const { number, className } = props;

  return (
    <div className={`group-23 ${className || ""}`}>
      <div className="number-2 poppins-regular-normal-mountain-mist-12px">{number}</div>
      <img className="line-1-13" src="/img/line-12@2x.svg" alt="Line 12" />
    </div>
  );
}

export default Group23;
