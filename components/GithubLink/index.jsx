import React from "react";
import "./GithubLink.css";

function GithubLink(props) {
  const { className } = props;

  return (
    <div className={`github-link-1 ${className || ""}`}>
      <img className="git-hub-14" src="/img/github-1@2x.png" alt="GitHub" />
      <div className="git-hub-15 valign-text-middle raleway-bold-cape-cod-22px">GitHub</div>
    </div>
  );
}

export default GithubLink;
