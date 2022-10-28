import React from "react";
import "./BlockchainsText.css";

function BlockchainsText(props) {
  const { className } = props;

  return (
    <div className={`blockchains-text-2 ${className || ""}`}>
      <p className="blockchain-bounty-hunting-team-tdto-1 raleway-bold-cape-cod-32px">
        Blockchain Bounty Hunting: Team TDTO
      </p>
      <p className="we-have-experience-w-1 inter-normal-cape-cod-22px">
        We have experience with the following blockchains:
      </p>
    </div>
  );
}

export default BlockchainsText;
