import React from "react";
import Navbar from "../Navbar";
import HeroInfo from "../HeroInfo";
import Bots from "../Bots";
import ClassroomContainers from "../ClassroomContainers";
import Footer from "../Footer";
import styled from "styled-components";
import {
  RalewayNormalCapeCod100px,
  RalewayNormalCapeCod32px,
  RalewayNormalBlack22px,
  ValignTextMiddle,
} from "../../../styledMixins";
import "./OpenSource.css";

function OpenSource(props) {
  const {
    bangobongo17,
    discordBubble,
    letsWorkTogether,
    githubClassrooms,
    theseClassesAreSm,
    navbarProps,
    heroInfoProps,
    botsProps,
    classroomContainersProps,
    footerProps,
  } = props;

  return (
    <div className="open-source screen">
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
          <OpenSource1>
            <OverlapGroup4>
              <CollaborateImg src="/img/-collaborate-img@1x.svg" alt="collaborate-img" />
              <OverlapGroup1>
                <OverlapGroup>
                  <Bangobongo17>{bangobongo17}</Bangobongo17>
                  <DiscordBubble src={discordBubble} alt="Discord Bubble" />
                </OverlapGroup>
                <LetsWorkTogether>{letsWorkTogether}</LetsWorkTogether>
              </OverlapGroup1>
            </OverlapGroup4>
          </OpenSource1>
          <Bots overlapGroup3={botsProps.overlapGroup3} bot={botsProps.bot} />
          <GithubClassrooms>
            <GitHubClassrooms>{githubClassrooms}</GitHubClassrooms>
            <TheseClassesAreSm>{theseClassesAreSm}</TheseClassesAreSm>
            <ClassroomContainers className={classroomContainersProps.className} />
          </GithubClassrooms>
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

const OpenSource1 = styled.div`
  width: 1512px;
  height: 982px;
  display: flex;
  align-items: flex-start;
  background-color: var(--material-themereferrorerror100);
  border: 1px none;
`;

const OverlapGroup4 = styled.div`
  width: 1484px;
  height: 833px;
  position: relative;
  margin-left: 28px;
`;

const CollaborateImg = styled.img`
  position: absolute;
  width: 920px;
  height: 833px;
  top: 0;
  left: 564px;
`;

const OverlapGroup1 = styled.div`
  position: absolute;
  width: 779px;
  height: 560px;
  top: 89px;
  left: 0;
`;

const OverlapGroup = styled.div`
  position: absolute;
  width: 439px;
  height: 119px;
  top: 441px;
  left: 171px;
`;

const Bangobongo17 = styled.div`
  ${ValignTextMiddle}
  ${RalewayNormalCapeCod32px}
            position: absolute;
  width: 359px;
  height: 51px;
  top: 34px;
  left: 80px;
  text-align: center;
  letter-spacing: 0;
`;

const DiscordBubble = styled.img`
  position: absolute;
  width: 117px;
  height: 119px;
  top: 0;
  left: 0;
`;

const LetsWorkTogether = styled.div`
  ${ValignTextMiddle}
  ${RalewayNormalCapeCod100px}
            position: absolute;
  width: 779px;
  height: 546px;
  top: 0;
  left: 0;
  text-align: center;
  letter-spacing: 0;
`;

const GithubClassrooms = styled.div`
  width: 1512px;
  height: 1083px;
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 69px 61px;
  align-items: center;
  background-color: var(--material-themereferrorerror100);
  border: 1px none;
`;

const GitHubClassrooms = styled.div`
  ${ValignTextMiddle}
  ${RalewayNormalCapeCod100px}
            height: 117px;
  margin-right: 1px;
  min-width: 887px;
  text-align: center;
  letter-spacing: 0;
`;

const TheseClassesAreSm = styled.div`
  ${ValignTextMiddle}
  ${RalewayNormalBlack22px}
            width: 1260px;
  height: 91px;
  margin-top: 21px;
  text-align: center;
  letter-spacing: 0;
`;

export default OpenSource;
