import React from "react";
import "./DevEnvironment.css";

function DevEnvironment(props) {
  const { className } = props;

  return (
    <div className={`dev-environment ${className || ""}`}>
      <div className="duckly">
        <div className="duckly-environment valign-text-middle raleway-bold-white-36px">Duckly Environment</div>
        <img className="flying-duck" src="/img/flying-duck@2x.png" alt="Flying Duck" />
      </div>
    </div>
  );
}

export default DevEnvironment;
