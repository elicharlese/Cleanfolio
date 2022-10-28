import React from "react";
import "./ButtonWallet.css";

function ButtonWallet(props) {
  const { className } = props;

  return (
    <div className={`button-wallet-2 ${className || ""}`}>
      <div className="hero-button-20 raleway-bold-white-26px">Wallet</div>
    </div>
  );
}

export default ButtonWallet;
