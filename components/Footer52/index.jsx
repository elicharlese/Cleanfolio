import React from "react";
import XButton from "../XButton";
import Snippets22 from "../Snippets22";
import "./Footer52.css";

function Footer52(props) {
  const {
    cecLogo,
    hireMe,
    github,
    openSource,
    organizations,
    image8,
    button1Props,
    button2Props,
    button1Props2,
  } = props;

  return (
    <div className="footer-21">
      <div className="footer-menu-10">
        <img className="cec-logo-8" src={cecLogo} alt="cec-logo" />
        <div className="links-7 raleway-bold-cape-cod-20px">
          <div className="hire-me-28">{hireMe}</div>
          <div className="github-14">{github}</div>
          <div className="open-source-19">{openSource}</div>
          <div className="organizations-14">{organizations}</div>
        </div>
        <div className="button-container-1">
          <XButton className={button1Props.className}>{button1Props.children}</XButton>
          <XButton className={button2Props.className}>{button2Props.children}</XButton>
        </div>
      </div>
      <img className="image-8-8" src={image8} alt="image 8" />
      <Snippets22 className={button1Props2.className} />
    </div>
  );
}

export default Footer52;
