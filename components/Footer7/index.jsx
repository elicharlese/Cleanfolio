import React from "react";
import XButton from "../XButton";
import "./Footer7.css";

function Footer7(props) {
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
    <div className="footer-24">
      <div className="footer-menu-12 raleway-bold-cape-cod-20px">
        <img className="cec-logo-10" src={cecLogo} alt="cec-logo" />
        <div className="hire-me-40">{hireMe}</div>
        <div className="github-17">{github}</div>
        <div className="open-source-27">{openSource}</div>
        <div className="organizations-17">{organizations}</div>
        <XButton className={button1Props.className}>{button1Props.children}</XButton>
        <XButton className={button2Props.className}>{button2Props.children}</XButton>
      </div>
      <div className="flex-row-33">
        <img className="image-8-11" src={image8} alt="image 8" />
        <div className="overlap-group-61">
          <div className="snippet-of-the-day-19 valign-text-middle raleway-bold-white-36px">{snippetOfTheDay}</div>
          <div className="flex-row-34">
            <div className="subscribe-to-get-access-19 valign-text-middle raleway-bold-white-20px">
              {subscribeToGetAccess}
            </div>
            <div className="rectangle-6-10"></div>
            <div className="rectangle-7-11"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer7;
