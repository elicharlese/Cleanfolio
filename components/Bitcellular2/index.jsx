import React from "react";
import BitcellSignup from "../BitcellSignup";
import "./Bitcellular2.css";

function Bitcellular2(props) {
  const { className, bitcellSignupProps } = props;

  return (
    <div className={`bitcellular-3 ${className || ""}`}>
      <img className="blockchain-new-logo-1" src="/img/blockchain-new-logo@2x.png" alt="Blockchain New Logo" />
      <p className="build-a-bitcell-and-1 valign-text-middle raleway-bold-cape-cod-32px">
        Build a Bitcell and join the rest of the Metaverse!
      </p>
      <BitcellSignup userGithubProps={bitcellSignupProps.userGithubProps} />
    </div>
  );
}

export default Bitcellular2;
