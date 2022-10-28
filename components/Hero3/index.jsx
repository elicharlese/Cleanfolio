import React from "react";
import HeroInfo from "../HeroInfo";
import "./Hero3.css";

function Hero3(props) {
  const { frame, heroInfoProps } = props;

  return (
    <div className="hero-14">
      <div className="overlap-group5-14">
        <img className="frame-16" src={frame} alt="Frame" />
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

export default Hero3;
