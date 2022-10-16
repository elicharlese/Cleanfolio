import React from "react";
import Navbar from "../Navbar";
import HeroInfo from "../HeroInfo";
import Bots from "../Bots";
import ClassroomContainers from "../ClassroomContainers";
import Footer from "../Footer";
import styled from "styled-components";
import {
  RalewayNormalCapeCod32px,
  RalewayNormalCapeCod100px,
  RalewayNormalBlack22px,
  ValignTextMiddle,
} from "../../../styledMixins";
import "./Financer.css";

function Financer(props) {
  const {
    letsDiscussYourPortfolio,
    planner,
    bookAnAppointment,
    decentralizedFinances,
    spanText1,
    spanText2,
    spanText3,
    spanText4,
    spanText5,
    navbarProps,
    heroInfoProps,
    botsProps,
    footerProps,
  } = props;

  return (
    <div className="financer screen">
      <Body>
        <FlexCol>
          <Navbar
            dashboardLayout={navbarProps.dashboardLayout}
            hireMe={navbarProps.hireMe}
            github={navbarProps.github}
            openSource={navbarProps.openSource}
            organizations={navbarProps.organizations}
            heroButton1={navbarProps.heroButton1}
            heroButton2={navbarProps.heroButton2}
          />
          <Hero>
            <OverlapGroup5>
              <Componentlottiehttpsassets4lottiefi
                src="/img/-component-lottie-https---assets4-lottiefiles-com-packages-lf20-@1x.svg"
                alt="component:lottie:https://assets4.lottiefiles.com/packages/lf20_efx3aac9.json]"
              />
              <HeroInfo
                spanText1={heroInfoProps.spanText1}
                spanText2={heroInfoProps.spanText2}
                spanText3={heroInfoProps.spanText3}
                name={heroInfoProps.name}
                buttonProps={heroInfoProps.buttonProps}
              />
            </OverlapGroup5>
          </Hero>
          <Consultations>
            <CollaborateContainer>
              <CollaborateImg src="/img/-collaborate-img@1x.svg" alt="collaborate-img" />
              <CollaborateText>
                <LetsDiscussYourPortfolio>{letsDiscussYourPortfolio}</LetsDiscussYourPortfolio>
                <Appointments>
                  <Planner src={planner} alt="Planner" />
                  <BookAnAppointment>{bookAnAppointment}</BookAnAppointment>
                </Appointments>
              </CollaborateText>
            </CollaborateContainer>
          </Consultations>
          <Bots overlapGroup3={botsProps.overlapGroup3} bot={botsProps.bot} />
          <ManagementSteps>
            <DecentralizedFinances>{decentralizedFinances}</DecentralizedFinances>
            <BuildingAInvestmen>
              <span>
                <span className="raleway-normal-black-22px">{spanText1}</span>
                <Span1>{spanText2}</Span1>
                <span className="raleway-normal-black-22px">{spanText3}</span>
                <Span1>{spanText4}</Span1>
                <span className="raleway-normal-black-22px">{spanText5}</span>
              </span>
            </BuildingAInvestmen>
            <ClassroomContainers />
          </ManagementSteps>
          <Footer {...footerProps} />
        </FlexCol>
      </Body>
    </div>
  );
}

const Body = styled.div`
  min-width: 1512px;
  height: 4674px;
  background-color: var(--material-themereferrorerror100);
  border: 1px none;
`;

const FlexCol = styled.div`
  position: relative;
  width: 1512px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 4674px;
`;

const Hero = styled.div`
  width: 1512px;
  height: 879px;
  display: flex;
  padding: 0 79px;
  align-items: flex-start;
  background-color: var(--material-themereferrorerror100);
  border: 1px none;
`;

const OverlapGroup5 = styled.div`
  width: 1339px;
  height: 706px;
  position: relative;
`;

const Componentlottiehttpsassets4lottiefi = styled.img`
  position: absolute;
  width: 809px;
  height: 706px;
  top: 0;
  left: 530px;
`;

const Consultations = styled.div`
  width: 1512px;
  height: 982px;
  display: flex;
  align-items: flex-start;
  background-color: var(--material-themereferrorerror100);
  border: 1px none;
`;

const CollaborateContainer = styled.div`
  width: 1481px;
  height: 833px;
  position: relative;
  margin-left: 31px;
`;

const CollaborateImg = styled.img`
  position: absolute;
  width: 920px;
  height: 833px;
  top: 0;
  left: 561px;
`;

const CollaborateText = styled.div`
  position: absolute;
  width: 781px;
  top: 145px;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 480px;
  gap: 6px;
`;

const LetsDiscussYourPortfolio = styled.div`
  ${ValignTextMiddle}
  ${RalewayNormalCapeCod100px}
            width: 779px;
  height: 378px;
  margin-right: 2px;
  text-align: center;
  letter-spacing: 0;
`;

const Appointments = styled.div`
  display: flex;
  align-items: center;
  min-width: 457px;
`;

const Planner = styled.img`
  width: 96px;
  height: 96px;
`;

const BookAnAppointment = styled.div`
  ${ValignTextMiddle}
  ${RalewayNormalCapeCod32px}
            width: 359px;
  height: 51px;
  margin-top: 1px;
  text-align: center;
  letter-spacing: 0;
`;

const ManagementSteps = styled.div`
  width: 1512px;
  height: 1083px;
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 92px 61px;
  align-items: center;
  background-color: var(--material-themereferrorerror100);
  border: 1px none;
`;

const DecentralizedFinances = styled.div`
  ${ValignTextMiddle}
  ${RalewayNormalCapeCod100px}
            height: 117px;
  margin-right: 1px;
  min-width: 1081px;
  text-align: center;
  letter-spacing: 0;
`;

const BuildingAInvestmen = styled.div`
  ${ValignTextMiddle}
  ${RalewayNormalBlack22px}
            width: 1269px;
  height: 104px;
  margin-right: 1px;
  text-align: center;
  letter-spacing: 0;
`;

const Span1 = styled.span`
  ${RalewayNormalBlack22px}
  text-decoration: underline;
`;

export default Financer;
