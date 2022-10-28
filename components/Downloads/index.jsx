import React from "react";
import "./Downloads.css";

function Downloads(props) {
  const { className } = props;

  return (
    <div className={`downloads-12 ${className || ""}`}>
      <img className="downloads-item" src="/img/mac-client@2x.png" alt="Mac Client" />
      <img className="downloads-item variant-1" src="/img/windows-client@2x.png" alt="Windows Client" />
      <img className="downloads-item variant-2" src="/img/app-symbol@2x.png" alt="App Symbol" />
      <img className="downloads-item variant-3" src="/img/playstore@2x.png" alt="Playstore" />
      <img className="downloads-item variant-4" src="/img/apple-watch@2x.png" alt="Apple Watch" />
      <img className="downloads-item variant-5" src="/img/command-line@2x.png" alt="Command Line" />
    </div>
  );
}

export default Downloads;
