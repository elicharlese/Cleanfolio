import React from "react";
import BlockchainsText from "../BlockchainsText";
import Ethereum from "../Ethereum";
import Bitcoin from "../Bitcoin";
import XButton from "../XButton";
import "./Blockchain2.css";

function Blockchain2(props) {
  const { className, ethereumProps, ethereumProps2, buttonProps } = props;

  return (
    <div className={`blockchain-6 ${className || ""}`}>
      <img
        className="tradent-logo5-transparent-2-1"
        src="/img/tradent-logo5-transparent-2@2x.png"
        alt="tradent-logo5-transparent 2"
      />
      <BlockchainsText />
      <div className="blockchains-tech-1">
        <Ethereum className={ethereumProps.className} />
        <Bitcoin bitcoin1={ethereumProps2.bitcoin1} className={ethereumProps2.className} />
      </div>
      <XButton className={buttonProps.className}>{buttonProps.children}</XButton>
    </div>
  );
}

export default Blockchain2;
