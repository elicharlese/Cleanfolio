import React from "react";
import XButton from "../XButton";
import "./Footer42.css";

function Footer42(props) {
  const {
    footerMenu,
    hireMe,
    github,
    openSource,
    organizations,
    snippetOfTheDay,
    subscribeToGetAccess,
    image8,
    button1Props,
    button2Props,
  } = props;

  return (
    <div className="footer-20">
      <div className="footer-menu-9" style={{ backgroundImage: `url(${footerMenu})` }}></div>
      <div className="links-6">
        <div className="hire-me-26 raleway-bold-cape-cod-20px">{hireMe}</div>
        <div className="github-13 raleway-bold-cape-cod-20px">{github}</div>
        <div className="open-source-17 raleway-bold-cape-cod-20px">{openSource}</div>
        <div className="organizations-13 raleway-bold-cape-cod-20px">{organizations}</div>
        <XButton className={button1Props.className}>{button1Props.children}</XButton>
        <XButton className={button2Props.className}>{button2Props.children}</XButton>
      </div>
      <div className="snippets-11">
        <div className="overlap-group-40">
          <div className="snippet-of-the-day-12 valign-text-middle raleway-bold-white-36px">{snippetOfTheDay}</div>
          <div className="subscribe-to-get-access-12 valign-text-middle raleway-bold-white-20px">
            {subscribeToGetAccess}
          </div>
          <div className="flex-row-20">
            <div className="rectangle-6-7"></div>
            <div className="rectangle-7-8"></div>
          </div>
        </div>
      </div>
      <img className="image-8-7" src={image8} alt="image 8" />
    </div>
  );
}

export default Footer42;
