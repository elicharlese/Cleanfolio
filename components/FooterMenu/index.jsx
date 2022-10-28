import React from "react";
import XButton from "../XButton";
import "./FooterMenu.css";

function FooterMenu(props) {
  const { cecLogo, className, button1Props, button2Props } = props;

  return (
    <div className={`footer-menu-1 ${className || ""}`}>
      <img className="cec-logo-1" src={cecLogo} alt="cec-logo" />
      <div className="flex-row-7 raleway-bold-cape-cod-20px">
        <div className="hire-me-11">HIRE ME</div>
        <div className="github-3">GITHUB</div>
        <div className="open-source-7">OPEN-SOURCE</div>
        <div className="organizations-3">ORGANIZATIONS</div>
        <XButton className={button1Props.className}>{button1Props.children}</XButton>
        <XButton className={button2Props.className}>{button2Props.children}</XButton>
      </div>
    </div>
  );
}

export default FooterMenu;
