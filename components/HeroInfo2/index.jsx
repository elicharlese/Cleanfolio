import React from "react";
import XButton from "../XButton";
import "./HeroInfo2.css";

function HeroInfo2(props) {
  const { name, spanText1, spanText2, spanText3, buttonProps } = props;

  return (
    <div className="hero-info-10">
      <div className="name-26 raleway-normal-cape-cod-80px">{name}</div>
      <p className="an-e-commerce-and-fu-7 raleway-bold-white-16px-2">
        <span className="raleway-bold-cape-cod-16px">{spanText1}</span>
        <span className="raleway-bold-seagull-16px">{spanText2}</span>
        <span className="raleway-bold-cape-cod-16px">{spanText3}</span>
      </p>
      <XButton className={buttonProps.className}>{buttonProps.children}</XButton>
    </div>
  );
}

export default HeroInfo2;
