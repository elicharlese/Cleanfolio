import React from "react";
import "./Frame12.css";

function Frame12(props) {
  const { place, className } = props;

  return (
    <div className={`frame-12 ${className || ""}`}>
      <img className="group-2" src="/img/group-2@2x.svg" alt="Group 2" />
      <div className="place-45 poppins-regular-normal-white-12px">{place}</div>
    </div>
  );
}

export default Frame12;
