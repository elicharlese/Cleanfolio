import React from "react";
import Text from "../Text";
import "./HireMe.css";

function HireMe(props) {
  const { textProps } = props;

  return (
    <div className="hire-me-38">
      <Text className={textProps.className} />
      <img className="click-up-9" src="/img/-click-up@1x.png" alt="click-up" />
    </div>
  );
}

export default HireMe;
