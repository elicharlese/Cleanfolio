import React from "react";
import Salesforce from "../Salesforce";
import Gis from "../Gis";
import Python from "../Python";
import "./ClassroomContainers.css";

function ClassroomContainers(props) {
  const {
    iconSettings,
    apiDevelopment,
    workWithApexAndB1,
    decentralizedNetwork,
    web30Development,
    workWithApexAndB2,
    python1Props,
    python2Props,
  } = props;

  return (
    <div className="classroom-containers">
      <div className="t-div">
        <Salesforce />
        <Gis />
        <div className="api-integrations-8">
          <div className="overlap-group-66">
            <img className="icon-settings" src={iconSettings} alt="icon-settings" />
            <div className="flex-col-5">
              <div className="api-development valign-text-middle raleway-bold-white-36px">{apiDevelopment}</div>
              <p className="work-with-apex-and-b valign-text-middle raleway-bold-white-16px">{workWithApexAndB1}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="t-div">
        <Python python={python1Props.python} pythonDevelopment={python1Props.pythonDevelopment} />
        <Python
          python={python2Props.python}
          pythonDevelopment={python2Props.pythonDevelopment}
          className={python2Props.className}
        />
        <div className="web30">
          <div className="overlap-group-67">
            <img className="decentralized-network" src={decentralizedNetwork} alt="Decentralized Network" />
            <div className="flex-col-6">
              <div className="web-30-development valign-text-middle raleway-bold-white-36px">{web30Development}</div>
              <p className="work-with-apex-and-b valign-text-middle raleway-bold-white-16px">{workWithApexAndB2}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ClassroomContainers;
