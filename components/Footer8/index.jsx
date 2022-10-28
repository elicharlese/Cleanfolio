import React from "react";
import XButton from "../XButton";
import "./Footer8.css";

function Footer8(props) {
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
    <div className="footer-25">
      <div className="footer-menu-13 raleway-bold-cape-cod-20px">
        <img className="cec-logo-11" src={cecLogo} alt="cec-logo" />
        <div className="hire-me-41">{hireMe}</div>
        <div className="github-18">{github}</div>
        <div className="open-source-28">{openSource}</div>
        <div className="organizations-18">{organizations}</div>
        <XButton className={button1Props.className}>{button1Props.children}</XButton>
        <XButton className={button2Props.className}>{button2Props.children}</XButton>
      </div>
      <div className="flex-row-35">
        <img className="image-8-12" src={image8} alt="image 8" />
        <div className="overlap-group-62">
          <div className="snippet-of-the-day-20 valign-text-middle raleway-bold-white-36px">{snippetOfTheDay}</div>
          <div className="flex-row-36">
            <div className="subscribe-to-get-access-20 valign-text-middle raleway-bold-white-20px">
              {subscribeToGetAccess}
            </div>
            <div className="rectangle-6-11"></div>
            <div className="rectangle-7-12"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer8;
