import React from "react";
import XButton from "../XButton";
import "./Footer6.css";

function Footer6(props) {
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
    <div className="footer-23">
      <div className="footer-menu-11">
        <img className="cec-logo-9" src={cecLogo} alt="cec-logo" />
        <div className="flex-row-30 raleway-bold-cape-cod-20px">
          <div className="hire-me-39">{hireMe}</div>
          <div className="github-16">{github}</div>
          <div className="open-source-26">{openSource}</div>
          <div className="organizations-16">{organizations}</div>
          <XButton className={button1Props.className}>{button1Props.children}</XButton>
          <XButton className={button2Props.className}>{button2Props.children}</XButton>
        </div>
      </div>
      <div className="flex-row-31">
        <img className="image-8-10" src={image8} alt="image 8" />
        <div className="overlap-group-59">
          <div className="snippet-of-the-day-18 valign-text-middle raleway-bold-white-36px">{snippetOfTheDay}</div>
          <div className="flex-row-32">
            <div className="subscribe-to-get-access-18 valign-text-middle raleway-bold-white-20px">
              {subscribeToGetAccess}
            </div>
            <div className="rectangle-6-9"></div>
            <div className="rectangle-7-10"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer6;
