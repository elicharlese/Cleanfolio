import React from "react";
import HeroInfo from "../HeroInfo";
import "./Hero4.css";

function Hero4(props) {
  const { frame, className, heroInfoProps } = props;

  return (
    <div className={`hero-15-1 ${className || ""}`}>
      <div className="overlap-group5-15">
        <img className="frame-17" src={frame} alt="Frame" />
        <HeroInfo
          spanText1={heroInfoProps.spanText1}
          spanText2={heroInfoProps.spanText2}
          spanText3={heroInfoProps.spanText3}
          name={heroInfoProps.name}
          className={heroInfoProps.className}
          buttonProps={heroInfoProps.buttonProps}
        />
      </div>
    </div>
  );
}

export default Hero4;
