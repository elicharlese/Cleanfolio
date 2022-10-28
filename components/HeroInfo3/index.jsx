import React from "react";
import XButton from "../XButton";
import "./HeroInfo3.css";

function HeroInfo3(props) {
  const { name, spanText1, spanText2, spanText3, buttonProps } = props;

  return (
    <div className="hero-info-12">
      <div className="name-30 raleway-normal-cape-cod-80px">{name}</div>
      <div className="overlap-group-60">
        <XButton className={buttonProps.className}>{buttonProps.children}</XButton>
        <p className="an-e-commerce-and-fu-8 raleway-bold-white-16px-2">
          <span className="raleway-bold-cape-cod-16px">{spanText1}</span>
          <span className="raleway-bold-seagull-16px">{spanText2}</span>
          <span className="raleway-bold-cape-cod-16px">{spanText3}</span>
        </p>
      </div>
    </div>
  );
}

export default HeroInfo3;
