import React from "react";
import XButton from "../XButton";
import "./HeroInfo.css";

function HeroInfo(props) {
  const { spanText1, spanText2, spanText3, name, className, buttonProps } = props;

  return (
    <div className={`hero-info-2 ${className || ""}`}>
      <div className="overlap-group-2">
        <p className="an-e-commerce-and-fu-1 raleway-bold-white-22px-2">
          <span className="span raleway-bold-cape-cod-22px">{spanText1}</span>
          <span className="span raleway-bold-seagull-22px">{spanText2}</span>
          <span className="span raleway-bold-cape-cod-22px">{spanText3}</span>
        </p>
        <div className="name-1 raleway-normal-cape-cod-100px">{name}</div>
      </div>
      <XButton>{buttonProps.children}</XButton>
    </div>
  );
}

export default HeroInfo;
