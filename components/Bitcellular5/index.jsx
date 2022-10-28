import React from "react";
import Bitcellular2 from "../Bitcellular2";
import "./Bitcellular5.css";

function Bitcellular5(props) {
  const { className, bitcellular2Props } = props;

  return (
    <div className={`bitcellular-1 ${className || ""}`}>
      <Bitcellular2 bitcellSignupProps={bitcellular2Props.bitcellSignupProps} />
    </div>
  );
}

export default Bitcellular5;
