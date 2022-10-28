import React from "react";
import Bitcellular2 from "../Bitcellular2";
import "./Bitcellular.css";

function Bitcellular(props) {
  const { bitcellular2Props } = props;

  return (
    <div className="bitcellular-8">
      <Bitcellular2 className={bitcellular2Props.className} bitcellSignupProps={bitcellular2Props.bitcellSignupProps} />
    </div>
  );
}

export default Bitcellular;
