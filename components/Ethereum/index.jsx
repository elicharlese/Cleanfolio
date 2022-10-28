import React from "react";
import "./Ethereum.css";

function Ethereum(props) {
  const { className } = props;

  return (
    <div className={`ethereum-5 ${className || ""}`}>
      <img className="ethereum-6" src="/img/ethereum@2x.png" alt="Ethereum" />
      <div className="ethereum-7 inter-bold-cape-cod-22px">Ethereum</div>
    </div>
  );
}

export default Ethereum;
