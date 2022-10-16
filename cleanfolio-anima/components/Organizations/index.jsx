import React from "react";
import Navbar3 from "../Navbar3";
import Step3 from "../Step3";
import Footer5 from "../Footer5";
import styled from "styled-components";
import {
  RalewayNormalCapeCod128px,
  InterRegularNormalCapeCod100px,
  RalewayBoldWhite32px,
  RalewayNormalCapeCod26px,
  ValignTextMiddle,
} from "../../../styledMixins";
import "./Organizations.css";

function Organizations(props) {
  const {
    spanText1,
    reactNative,
    laptop,
    spanText2,
    spanText3,
    spanText4,
    spanText5,
    timeline,
    spanText6,
    wave,
    navbarProps,
    step31Props,
    step32Props,
    step33Props,
    step34Props,
    footerProps,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="organizations screen">
        <Body>
          <Navbar3 {...navbarProps} />
          <MajorOrganizations>
            <OverlapGroup4>
              <OverlapGroup3>
                <ThisWeb30Applica>
                  <span>
                    <span className="raleway-normal-cape-cod-26px">{spanText1}</span>
                  </span>
                </ThisWeb30Applica>
                <OverlapGroup>
                  <ReactNative src={reactNative} alt="React Native" />
                  <OverlapGroup src={laptop} alt="Laptop" />
                </OverlapGroup>
              </OverlapGroup3>
              <HeroText>
                <span>
                  <span className="raleway-normal-cape-cod-128px">{spanText2}</span>
                </span>
              </HeroText>
            </OverlapGroup4>
            <MajorOrganizationsButtons>
              <OverlapGroup2>
                <HeroButton>
                  <span>
                    <span className="raleway-bold-white-32px">{spanText3}</span>
                  </span>
                </HeroButton>
              </OverlapGroup2>
              <OverlapGroup1>
                <HeroButton1>
                  <span className="raleway-bold-white-32px">{spanText4}</span>
                </HeroButton1>
              </OverlapGroup1>
              <OverlapGroup5>
                <HeroButton1>
                  <span className="raleway-bold-white-32px">{spanText5}</span>
                </HeroButton1>
              </OverlapGroup5>
            </MajorOrganizationsButtons>
          </MajorOrganizations>
          <DaoDevelopment>
            <OverlapGroup11>
              <Step3 codeFork={step31Props.codeFork} spanText={step31Props.spanText} />
              <Step3
                codeFork={step32Props.codeFork}
                spanText={step32Props.spanText}
                className={step32Props.className}
              />
              <Timeline src={timeline} alt="timeline" />
            </OverlapGroup11>
            <StepContainer>
              <Step3
                codeFork={step33Props.codeFork}
                spanText={step33Props.spanText}
                className={step33Props.className}
              />
              <Step3
                codeFork={step34Props.codeFork}
                spanText={step34Props.spanText}
                className={step34Props.className}
              />
            </StepContainer>
          </DaoDevelopment>
          <MinorOrganizations>
            <MinorOrganizations1>
              <span className="inter-regular-normal-cape-cod-100px">{spanText6}</span>
            </MinorOrganizations1>
            <Wave src={wave} alt="wave" />
          </MinorOrganizations>
          <Footer5 button1Props={footerProps.button1Props} button2Props={footerProps.button2Props} />
        </Body>
      </div>
    </div>
  );
}

const Body = styled.div`
  width: 1512px;
  height: 3758px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  background-color: var(--material-themereferrorerror100);
  overflow: hidden;
  border: 1px none;
`;

const MajorOrganizations = styled.div`
  width: 1512px;
  height: 982px;
  display: flex;
  flex-direction: column;
  padding: 222px 182px;
  align-items: flex-end;
  gap: 152px;
  background-color: var(--material-themereferrorerror100);
  border: 1px none;
`;

const OverlapGroup4 = styled.div`
  width: 1020px;
  height: 269px;
  position: relative;
  align-self: center;
  margin-top: 49px;
  margin-left: 8px;
`;

const OverlapGroup3 = styled.div`
  position: absolute;
  width: 882px;
  height: 268px;
  top: 1px;
  left: 0;
`;

const ThisWeb30Applica = styled.div`
  ${ValignTextMiddle}
  ${RalewayNormalCapeCod26px}
            position: absolute;
  width: 760px;
  height: 118px;
  top: 150px;
  left: 122px;
  text-align: center;
  letter-spacing: 0;
`;

const OverlapGroup = styled.div`
  position: absolute;
  width: 269px;
  height: 151px;
  top: 0;
  left: 0;
`;

const ReactNative = styled.img`
  position: absolute;
  width: 51px;
  height: 39px;
  top: 56px;
  left: 109px;
`;

const HeroText = styled.h1`
  ${ValignTextMiddle}
  ${RalewayNormalCapeCod128px}
            position: absolute;
  width: 751px;
  height: 151px;
  top: 0;
  left: 269px;
  text-align: center;
  letter-spacing: 0;
`;

const MajorOrganizationsButtons = styled.div`
  display: flex;
  align-items: flex-start;
  min-width: 1147px;
  gap: 84px;
  border-radius: 16px;
`;

const OverlapGroup2 = styled.div`
  height: 68px;
  display: flex;
  padding: 14px 37px;
  align-items: flex-start;
  min-width: 465px;
  background-color: var(--seagull);
  border-radius: 16px;
`;

const HeroButton = styled.div`
  ${ValignTextMiddle}
  ${RalewayBoldWhite32px}
            height: 38px;
  min-width: 390px;
  text-align: center;
  letter-spacing: 0;
`;

const OverlapGroup1 = styled.div`
  height: 68px;
  display: flex;
  padding: 14px 27px;
  justify-content: flex-end;
  align-items: flex-start;
  min-width: 257px;
  background-color: var(--seagull);
  border-radius: 16px;
`;

const HeroButton1 = styled.div`
  ${RalewayBoldWhite32px}
  min-height: 38px;
  letter-spacing: 0;
`;

const OverlapGroup5 = styled.div`
  height: 68px;
  display: flex;
  padding: 14px 68px;
  align-items: flex-start;
  min-width: 257px;
  background-color: var(--seagull);
  border-radius: 16px;
`;

const DaoDevelopment = styled.div`
  width: 1512px;
  height: 982px;
  margin-right: -5px;
  display: flex;
  padding: 37px 129px;
  align-items: flex-start;
  gap: 4px;
  background-color: var(--material-themereferrorerror100);
  border: 1px none;
`;

const OverlapGroup11 = styled.div`
  width: 1002px;
  height: 907px;
  position: relative;
  margin-left: 1px;
`;

const Timeline = styled.img`
  position: absolute;
  width: 763px;
  height: 863px;
  top: 44px;
  left: 239px;
`;

const StepContainer = styled.div`
  width: 247px;
  position: relative;
  align-self: center;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 760px;
  gap: 270px;
`;

const MinorOrganizations = styled.div`
  width: 1512px;
  height: 1112px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 186px;
  background-color: var(--material-themereferrorerror100);
  border: 1px none;
`;

const MinorOrganizations1 = styled.div`
  ${InterRegularNormalCapeCod100px}
  min-height: 121px;
  margin-top: 155px;
  margin-left: 1px;
  min-width: 949px;
  text-align: center;
  letter-spacing: 0;
`;

const Wave = styled.img`
  width: 1512px;
  height: 650px;
`;

export default Organizations;
