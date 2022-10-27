import React from "react";
import styled from "styled-components";
import { RalewayBoldWhite36px, RalewayBoldWhite16px, ValignTextMiddle } from "../../../styledMixins";


function ClassroomContainers(props) {
  const { className } = props;

  return (
    <ClassroomContainers1 className={`classroom-containers ${className || ""}`}>
      <LeftDiv className="left-div">
        <Salesforce className="salesforce">
          <OverlapGroup2 className="overlap-group2">
            <Salesforce1 className="salesforce-1" src="/img/salesforce@2x.png" alt="Salesforce" />
            <FlexCol className="flex-col-1">
              <SalesforceDevelopment className="salesforce-development">Salesforce Development</SalesforceDevelopment>
              <WorkWithAPEXAndB className="work-with-apex-and-b">
                Work with APEX and build custom Lightning Web Components.
              </WorkWithAPEXAndB>
            </FlexCol>
          </OverlapGroup2>
        </Salesforce>
        <Salesforce className="gis">
          <OverlapGroup1 className="overlap-group1">
            <Salesforce1 className="gis-1" src="/img/gis@2x.png" alt="GIS" />
            <FlexCol1 className="flex-col-2">
              <GISDevelopment className="gis-development">GIS Development</GISDevelopment>
              <WorkWithAPEXAndB className="work-with-apex-and-b-1">
                Work with APEX and build custom Lightning Web Components.
              </WorkWithAPEXAndB>
            </FlexCol1>
          </OverlapGroup1>
        </Salesforce>
        <OverlapGroup className="overlap-group-1">
          <Salesforce1 className="rest-api" src="/img/rest-api@2x.png" alt="Rest API" />
          <FlexCol2 className="flex-col-3">
            <APIDevelopment className="api-development">API Development</APIDevelopment>
            <WorkWithAPEXAndB className="work-with-apex-and-b-2">
              Work with APEX and build custom Lightning Web Components.
            </WorkWithAPEXAndB>
          </FlexCol2>
        </OverlapGroup>
      </LeftDiv>
      <LeftDiv className="right-div">
        <Salesforce className="python">
          <OverlapGroup21 className="overlap-group2-1">
            <Python className="python-1" src="/img/python@2x.png" alt="Python" />
            <FlexCol3 className="flex-col-4">
              <PythonDevelopment className="python-development">Python Development</PythonDevelopment>
              <WorkWithAPEXAndB className="work-with-apex-and-b-3">
                Work with APEX and build custom Lightning Web Components.
              </WorkWithAPEXAndB>
            </FlexCol3>
          </OverlapGroup21>
        </Salesforce>
        <OverlapGroup11 className="overlap-group1-1">
          <Salesforce1
            className="amazon-web-services"
            src="/img/amazon-web-services@2x.png"
            alt="Amazon Web Services"
          />
          <FlexCol4 className="flex-col-5">
            <CloudDevelopment className="cloud-development">Cloud Development</CloudDevelopment>
            <WorkWithAPEXAndB className="work-with-apex-and-b-4">
              Work with APEX and build custom Lightning Web Components.
            </WorkWithAPEXAndB>
          </FlexCol4>
        </OverlapGroup11>
        <OverlapGroup3 className="overlap-group-2">
          <Salesforce1
            className="decentralized-network"
            src="/img/decentralized-network@2x.png"
            alt="Decentralized Network"
          />
          <FlexCol5 className="flex-col-6">
            <Web30Development className="web-30-development">Web 3.0 Development</Web30Development>
            <WorkWithAPEXAndB className="work-with-apex-and-b-5">
              Work with APEX and build custom Lightning Web Components.
            </WorkWithAPEXAndB>
          </FlexCol5>
        </OverlapGroup3>
      </LeftDiv>
    </ClassroomContainers1>
  );
}

const ClassroomContainers1 = styled.div`
  height: 610px;
  align-self: flex-start;
  margin-top: 60px;
  display: flex;
  align-items: flex-start;
  min-width: 1389px;
  gap: 69px;
  border: 1px none;

  &.classroom-containers.classroom-containers-1 {
    margin-top: 75px;
  }
`;

const LeftDiv = styled.div`
  width: 660px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 610px;
  gap: 65px;
`;

const Salesforce = styled.div`
  display: flex;
  align-items: flex-start;
  min-width: 664px;
  transition: all 0.2s ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
`;

const OverlapGroup2 = styled.div`
  height: 160px;
  display: flex;
  padding: 28px 21px;
  justify-content: flex-end;
  align-items: flex-start;
  min-width: 660px;
  gap: 29px;
  border-radius: 16px;
  background: linear-gradient(
    180deg,
    rgb(125.00000014901161, 190.0000038743019, 227.00000166893005) 0%,
    rgb(36.00000165402889, 18.000000827014446, 106.00000128149986) 100%
  );
`;

const Salesforce1 = styled.img`
  width: 96px;
  height: 96px;
`;

const FlexCol = styled.div`
  width: 480px;
  align-self: center;
  margin-top: 4.21px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 72px;
  gap: 11px;
`;

const SalesforceDevelopment = styled.div`
  ${ValignTextMiddle}
  ${RalewayBoldWhite36px}
            height: 42px;
  margin-left: 3px;
  min-width: 427px;
  text-align: center;
  letter-spacing: 0;
`;

const WorkWithAPEXAndB = styled.p`
  ${ValignTextMiddle}
  ${RalewayBoldWhite16px}
            height: 19px;
  min-width: 480px;
  text-align: center;
  letter-spacing: 0;
`;

const OverlapGroup1 = styled.div`
  height: 160px;
  display: flex;
  padding: 31.7px 21px;
  justify-content: flex-end;
  align-items: flex-start;
  min-width: 660px;
  gap: 29px;
  border-radius: 16px;
  background: linear-gradient(
    180deg,
    rgb(125.00000014901161, 190.0000038743019, 227.00000166893005) 0%,
    rgb(36.00000165402889, 18.000000827014446, 106.00000128149986) 100%
  );
`;

const FlexCol1 = styled.div`
  width: 480px;
  align-self: center;
  margin-top: 3.65px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 72px;
  gap: 11px;
`;

const GISDevelopment = styled.div`
  ${ValignTextMiddle}
  ${RalewayBoldWhite36px}
            height: 42px;
  margin-left: 28px;
  min-width: 302px;
  text-align: center;
  letter-spacing: 0;
`;

const OverlapGroup = styled.div`
  height: 160px;
  display: flex;
  padding: 31.4px 21px;
  justify-content: flex-end;
  align-items: flex-start;
  min-width: 660px;
  gap: 29px;
  border-radius: 16px;
  background: linear-gradient(
    180deg,
    rgb(125.00000014901161, 190.0000038743019, 227.00000166893005) 0%,
    rgb(36.00000165402889, 18.000000827014446, 106.00000128149986) 100%
  );
`;

const FlexCol2 = styled.div`
  width: 480px;
  align-self: center;
  margin-top: 4.09px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 73px;
  gap: 12px;
`;

const APIDevelopment = styled.div`
  ${ValignTextMiddle}
  ${RalewayBoldWhite36px}
            height: 42px;
  margin-left: 29px;
  min-width: 300px;
  text-align: center;
  letter-spacing: 0;
`;

const OverlapGroup21 = styled.div`
  height: 160px;
  display: flex;
  padding: 31.9px 21px;
  justify-content: flex-end;
  align-items: center;
  min-width: 660px;
  gap: 22px;
  border-radius: 16px;
  background: linear-gradient(
    180deg,
    rgb(125.00000014901161, 190.0000038743019, 227.00000166893005) 0%,
    rgb(36.00000165402889, 18.000000827014446, 106.00000128149986) 100%
  );
`;

const Python = styled.img`
  width: 96px;
  height: 96px;
  align-self: flex-end;
`;

const FlexCol3 = styled.div`
  width: 480px;
  margin-top: 4.06px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 72px;
  gap: 11px;
`;

const PythonDevelopment = styled.div`
  ${ValignTextMiddle}
  ${RalewayBoldWhite36px}
            height: 42px;
  margin-right: 53px;
  min-width: 365px;
  text-align: center;
  letter-spacing: 0;
`;

const OverlapGroup11 = styled.div`
  height: 160px;
  display: flex;
  padding: 31.8px 21px;
  justify-content: flex-end;
  align-items: flex-start;
  min-width: 660px;
  gap: 22px;
  border-radius: 16px;
  background: linear-gradient(
    180deg,
    rgb(125.00000014901161, 190.0000038743019, 227.00000166893005) 0%,
    rgb(36.00000165402889, 18.000000827014446, 106.00000128149986) 100%
  );
`;

const FlexCol4 = styled.div`
  width: 480px;
  align-self: center;
  margin-top: 3.58px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 72px;
  gap: 11px;
`;

const CloudDevelopment = styled.div`
  ${ValignTextMiddle}
  ${RalewayBoldWhite36px}
            height: 42px;
  margin-left: 31px;
  min-width: 347px;
  text-align: center;
  letter-spacing: 0;
`;

const OverlapGroup3 = styled.div`
  height: 160px;
  display: flex;
  padding: 23.5px 21px;
  justify-content: flex-end;
  align-items: flex-start;
  min-width: 660px;
  gap: 22px;
  border-radius: 16px;
  background: linear-gradient(
    180deg,
    rgb(125.00000014901161, 190.0000038743019, 227.00000166893005) 0%,
    rgb(36.00000165402889, 18.000000827014446, 106.00000128149986) 100%
  );
`;

const FlexCol5 = styled.div`
  width: 480px;
  align-self: center;
  margin-top: 4.11px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 73px;
  gap: 12px;
`;

const Web30Development = styled.div`
  ${ValignTextMiddle}
  ${RalewayBoldWhite36px}
            height: 42px;
  margin-right: 36px;
  min-width: 382px;
  text-align: center;
  letter-spacing: 0;
`;

export default ClassroomContainers;
