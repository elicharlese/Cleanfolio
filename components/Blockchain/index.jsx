import React from "react";
import Blockchain2 from "../Blockchain2";
import "./Blockchain.css";

function Blockchain(props) {
  const { blockchain2Props } = props;

  return (
    <div className="blockchain-14">
      <Blockchain2
        className={blockchain2Props.className}
        ethereumProps={blockchain2Props.ethereumProps}
        ethereumProps2={blockchain2Props.ethereumProps2}
        buttonProps={blockchain2Props.buttonProps}
      />
    </div>
  );
}

export default Blockchain;
