import React from "react";
import FooterMenu2 from "../FooterMenu2";
import "./Footer3.css";

function Footer3(props) {
  const { image8, snippetOfTheDay, subscribeToGetAccess, enterEmailHere, submit, footerMenu2Props } = props;

  return (
    <div className="footer-19">
      <FooterMenu2 xButton1Props={footerMenu2Props.xButton1Props} xButton2Props={footerMenu2Props.xButton2Props} />
      <div className="flex-row-16">
        <img className="image-8-6" src={image8} alt="image 8" />
        <div className="overlap-group2-12">
          <div className="snippet-of-the-day-10 valign-text-middle raleway-bold-white-36px">{snippetOfTheDay}</div>
          <div className="flex-row-17">
            <div className="subscribe-to-get-access-10 valign-text-middle raleway-bold-white-20px">
              {subscribeToGetAccess}
            </div>
            <div className="overlap-group1-13">
              <div className="enter-email-here valign-text-middle raleway-bold-seagull-20px">{enterEmailHere}</div>
            </div>
            <div className="overlap-group-34">
              <div className="submit-3 valign-text-middle raleway-bold-white-20px">{submit}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer3;
