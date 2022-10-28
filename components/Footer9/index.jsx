import React from "react";
import XButton from "../XButton";
import "./Footer9.css";

function Footer9(props) {
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
    <div className="footer-26">
      <div className="footer-menu-14 raleway-bold-cape-cod-20px">
        <img className="cec-logo-12" src={cecLogo} alt="cec-logo" />
        <div className="hire-me-42">{hireMe}</div>
        <div className="github-19">{github}</div>
        <div className="open-source-29">{openSource}</div>
        <div className="organizations-19">{organizations}</div>
        <XButton className={button1Props.className}>{button1Props.children}</XButton>
        <XButton className={button2Props.className}>{button2Props.children}</XButton>
      </div>
      <div className="flex-row-37">
        <img className="image-8-13" src={image8} alt="image 8" />
        <div className="overlap-group-63">
          <div className="snippet-of-the-day-21 valign-text-middle raleway-bold-white-36px">{snippetOfTheDay}</div>
          <div className="flex-row-38">
            <div className="subscribe-to-get-access-21 valign-text-middle raleway-bold-white-20px">
              {subscribeToGetAccess}
            </div>
            <div className="rectangle-6-12"></div>
            <div className="rectangle-7-13"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer9;
