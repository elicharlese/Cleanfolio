import React from "react";
import FooterMenu22 from "../FooterMenu22";
import "./Footer11.css";

function Footer11(props) {
  const { className, footerMenu2Props } = props;

  return (
    <div className={`footer-28 ${className || ""}`}>
      <FooterMenu22
        x3RuptLogo1={footerMenu2Props.x3RuptLogo1}
        button1={footerMenu2Props.button1}
        button2={footerMenu2Props.button2}
      />
      <div className="flex-row-56">
        <img className="image-8-15" src="/img/image-8@1x.png" alt="image 8" />
        <div className="overlap-group-83">
          <div className="snippet-of-the-day-23 valign-text-middle raleway-bold-white-36px">Snippet of the Day</div>
          <div className="flex-row-57">
            <div className="subscribe-to-get-access-23 valign-text-middle raleway-bold-white-20px">
              Subscribe to get access
            </div>
            <div className="rectangle-6-14"></div>
            <div className="rectangle-7-15"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer11;
