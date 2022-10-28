import React from "react";
import "./FooterMenu22.css";

function FooterMenu22(props) {
  const { x3RuptLogo1, button1, button2 } = props;

  return (
    <div className="footer-menu-16">
      <img className="x3-rupt-logo-1" src={x3RuptLogo1} alt="3RUPT Logo 1" />
      <div className="flex-row-76 raleway-bold-cape-cod-20px">
        <div className="hire-me-48">HIRE ME</div>
        <div className="github-35">GITHUB</div>
        <div className="open-source-47">OPEN-SOURCE</div>
        <div className="organizations-37">ORGANIZATIONS</div>
        <img className="button-30" src={button1} alt="button" />
        <img className="button-33" src={button2} alt="button" />
      </div>
    </div>
  );
}

export default FooterMenu22;
