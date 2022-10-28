import React from "react";
import "./AboutMe22.css";

function AboutMe22(props) {
  const { className } = props;

  return (
    <div className={`about-me-2 ${className || ""}`}>
      <img className="globe-1" src="/img/globe@2x.png" alt="Globe" />
      <div className="well-rounded-and-highly-grounded-1 valign-text-middle raleway-bold-cape-cod-32px">
        Well-Rounded and Highly-Grounded
      </div>
      <p className="a-self-taught-web-de-1 valign-text-middle raleway-normal-cape-cod-22px">
        A self-taught web developer with a passion for e-commerce and blockchain applications. I have a background in
        Geographic Information Systems, ESRI products and Databases. I have a strong interest in the blockchain space
        and am currently working on developing a blockchain based e-commerce platform which relies of AWS
        infrastructures. <br /> <br />I just completed my undergrad at the University of California, Santa Barbara and
        plan on persuing a certification as a Salesforce Developer and Administrator, with future plans for a Master’s
        degree in Business (emphasizing in Location Analysis).
      </p>
    </div>
  );
}

export default AboutMe22;
