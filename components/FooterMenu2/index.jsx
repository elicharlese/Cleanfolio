import React from "react";
import XButton from "../XButton";
import "./FooterMenu2.css";

function FooterMenu2(props) {
  const { xButton1Props, xButton2Props } = props;

  return (
    <div className="footer-menu-7">
      <img className="cec-logo-6" src="/img/-cec-logo@2x.png" alt="cec-logo" />
      <div className="flex-row-18">
        <div className="links-4 raleway-bold-cape-cod-20px">
          <div className="hire-me-23">HIRE ME</div>
          <div className="github-11">GITHUB</div>
          <div className="open-source-15">OPEN-SOURCE</div>
          <div className="organizations-11">ORGANIZATIONS</div>
        </div>
        <XButton className={xButton1Props.className}>{xButton1Props.children}</XButton>
        <XButton className={xButton2Props.className}>{xButton2Props.children}</XButton>
      </div>
    </div>
  );
}

export default FooterMenu2;
