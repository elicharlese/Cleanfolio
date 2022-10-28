import React from "react";
import XButton from "../XButton";
import "./Footer10.css";

function Footer10(props) {
  const {
    cecLogo,
    hireMe,
    github,
    openSource,
    organizations,
    image8,
    snippetOfTheDay,
    subscribeToGetAccess,
    button1Props,
    button2Props,
  } = props;

  return (
    <div className="footer-27">
      <div className="footer-menu-15 raleway-bold-cape-cod-20px">
        <img className="cec-logo-13" src={cecLogo} alt="cec-logo" />
        <div className="hire-me-43">{hireMe}</div>
        <div className="github-20">{github}</div>
        <div className="open-source-30">{openSource}</div>
        <div className="organizations-20">{organizations}</div>
        <XButton className={button1Props.className}>{button1Props.children}</XButton>
        <XButton className={button2Props.className}>{button2Props.children}</XButton>
      </div>
      <div className="flex-row-39">
        <img className="image-8-14" src={image8} alt="image 8" />
        <div className="overlap-group-64">
          <div className="snippet-of-the-day-22 valign-text-middle raleway-bold-white-36px">{snippetOfTheDay}</div>
          <div className="flex-row-40">
            <div className="subscribe-to-get-access-22 valign-text-middle raleway-bold-white-20px">
              {subscribeToGetAccess}
            </div>
            <div className="rectangle-6-13"></div>
            <div className="rectangle-7-14"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer10;
