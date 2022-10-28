import React from "react";
import "./Bitcoin.css";

function Bitcoin(props) {
  const { bitcoin1, className } = props;

  return (
    <div className={`bitcoin-5 ${className || ""}`}>
      <img className="bitcoin-6" src={bitcoin1} alt="Bitcoin" />
      <div className="bitcoin-7 inter-bold-cape-cod-22px">Bitcoin</div>
    </div>
  );
}

export default Bitcoin;
