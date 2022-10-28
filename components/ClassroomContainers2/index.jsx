import React from "react";
import Salesforce from "../Salesforce";
import Gis from "../Gis";
import Python from "../Python";
import "./ClassroomContainers2.css";

function ClassroomContainers2(props) {
  const {
    restApi,
    apiDevelopment,
    workWithApexAndB1,
    amazonWebServices,
    cloudDevelopment,
    workWithApexAndB2,
    decentralizedNetwork,
    web30Development,
    workWithApexAndB3,
    pythonProps,
  } = props;

  return (
    <div className="classroom-containers-1">
      <div className="t-div-1">
        <Salesforce />
        <Gis />
        <div className="overlap-group-110">
          <img className="rest-api" src={restApi} alt="Rest API" />
          <div className="flex-col-26">
            <div className="api-development-1 valign-text-middle raleway-bold-white-36px">{apiDevelopment}</div>
            <p className="work-with-apex-and-b-7 valign-text-middle raleway-bold-white-16px">{workWithApexAndB1}</p>
          </div>
        </div>
      </div>
      <div className="t-div-1">
        <Python python={pythonProps.python} pythonDevelopment={pythonProps.pythonDevelopment} />
        <div className="overlap-group1-33">
          <img className="amazon-web-services" src={amazonWebServices} alt="Amazon Web Services" />
          <div className="flex-col-27">
            <div className="cloud-development-8 valign-text-middle raleway-bold-white-36px">{cloudDevelopment}</div>
            <p className="work-with-apex-and-b-7 valign-text-middle raleway-bold-white-16px">{workWithApexAndB2}</p>
          </div>
        </div>
        <div className="overlap-group-111">
          <img className="decentralized-network-1" src={decentralizedNetwork} alt="Decentralized Network" />
          <div className="flex-col-28">
            <div className="web-30-development-1 valign-text-middle raleway-bold-white-36px">{web30Development}</div>
            <p className="work-with-apex-and-b-7 valign-text-middle raleway-bold-white-16px">{workWithApexAndB3}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ClassroomContainers2;
