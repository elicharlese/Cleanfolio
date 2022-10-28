import React from "react";
import Blockchain2 from "../Blockchain2";
import "./Blockchain4.css";

function Blockchain4(props) {
  const { className, blockchain2Props } = props;

  return (
    <div className={`blockchain-4 ${className || ""}`}>
      <Blockchain2
        ethereumProps={blockchain2Props.ethereumProps}
        ethereumProps2={blockchain2Props.ethereumProps2}
        buttonProps={blockchain2Props.buttonProps}
      />
    </div>
  );
}

export default Blockchain4;
