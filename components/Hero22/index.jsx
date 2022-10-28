import React from "react";
import HeroInfo from "../HeroInfo";
import "./Hero22.css";

function Hero22(props) {
  const { heroInfoProps } = props;

  return (
    <div className="hero">
      <div className="hero-i-container">
        <img className="hero-image" src="/img/-hero-image@1x.png" alt="hero-image" />
        <HeroInfo
          spanText1={heroInfoProps.spanText1}
          spanText2={heroInfoProps.spanText2}
          spanText3={heroInfoProps.spanText3}
          name={heroInfoProps.name}
          buttonProps={heroInfoProps.buttonProps}
        />
      </div>
    </div>
  );
}

export default Hero22;
