import React from "react";
import User7 from "../User7";
import "./Avatars.css";

function Avatars(props) {
  const { user71Props, user72Props, user73Props, user74Props, user75Props, user76Props, user77Props } = props;

  return (
    <div className="avatars">
      <div className="overlap-group-74">
        <img className="vector-1" src="/img/vector-1@1x.svg" alt="Vector" />
        <User7 ellipse2={user71Props.ellipse2} />
        <User7 ellipse2={user72Props.ellipse2} className={user72Props.className} />
        <User7 ellipse2={user73Props.ellipse2} className={user73Props.className} />
        <User7 ellipse2={user74Props.ellipse2} className={user74Props.className} />
        <User7 ellipse2={user75Props.ellipse2} className={user75Props.className} />
        <User7 ellipse2={user76Props.ellipse2} className={user76Props.className} />
        <User7 ellipse2={user77Props.ellipse2} className={user77Props.className} />
      </div>
    </div>
  );
}

export default Avatars;
