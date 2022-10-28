import React from "react";
import HeroInfo from "../HeroInfo";
import "./Hero.css";

function Hero(props) {
  const { heroInfoProps } = props;

  return (
    <div className="hero-3">
      <div className="hero-i-container-2">
        <img className="hero-image-2" src="/img/-hero-image-2@1x.png" alt="hero-image" />
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

export default Hero;
