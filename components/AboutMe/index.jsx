import React from "react";
import AboutMe22 from "../AboutMe22";
import Snippets from "../Snippets";
import "./AboutMe.css";

function AboutMe(props) {
  const { className, snippetsProps2 } = props;

  return (
    <div className={`about-me-20 ${className || ""}`}>
      <AboutMe22 />
      <Snippets className={snippetsProps2.className} />
    </div>
  );
}

export default AboutMe;
