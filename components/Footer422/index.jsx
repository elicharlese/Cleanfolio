import React from "react";
import XButton from "../XButton";
import Snippets22 from "../Snippets22";
import "./Footer422.css";

function Footer422(props) {
  const { cecLogo, hireMe, github, openSource, organizations, image8, button1Props, button2Props } = props;

  return (
    <div className="footer-18">
      <div className="footer-menu-6">
        <img className="cec-logo-5" src={cecLogo} alt="cec-logo" />
        <div className="links-1 raleway-bold-cape-cod-20px">
          <div className="hire-me-19">{hireMe}</div>
          <div className="github-8">{github}</div>
          <div className="open-source-12">{openSource}</div>
          <div className="organizations-8">{organizations}</div>
        </div>
        <div className="button-container">
          <XButton className={button1Props.className}>{button1Props.children}</XButton>
          <XButton className={button2Props.className}>{button2Props.children}</XButton>
        </div>
      </div>
      <img className="image-8-5" src={image8} alt="image 8" />
      <Snippets22 />
    </div>
  );
}

export default Footer422;
