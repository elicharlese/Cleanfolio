import React from "react";
import FooterMenu2 from "../FooterMenu2";
import "./Footer22.css";

function Footer22(props) {
  const { cecLogo, github, hireMe, button1Props } = props;

  return (
    <div className="footer-22">
      <FooterMenu2 xButton1Props={button1Props.xButton1Props} xButton2Props={button1Props.xButton2Props} />
      <div className="flex-row-28">
        <img className="image-8-9" src={cecLogo} alt="image 8" />
        <div className="overlap-group-58">
          <div className="snippet-of-the-day-17 valign-text-middle raleway-bold-white-36px">{github}</div>
          <div className="flex-row-29">
            <div className="subscribe-to-get-access-17 valign-text-middle raleway-bold-white-20px">{hireMe}</div>
            <div className="rectangle-6-8"></div>
            <div className="rectangle-7-9"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer22;
