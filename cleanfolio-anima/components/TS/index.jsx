import React from "react";
import Navbar3 from "../Navbar3";
import Products from "../Products";
import Tools from "../Tools";
import User7 from "../User7";
import DevEnvironment from "../DevEnvironment";
import styled from "styled-components";
import {
  RalewayBoldWhite36px,
  RalewayBoldCapeCod20px,
  RalewayBoldWhite20px,
  RalewayBoldYellowSunshine32px,
  RalewayNormalCapeCod100px,
  RalewayBoldWhite32px,
  RalewayNormalCapeCod26px,
  ValignTextMiddle,
} from "../../../styledMixins";
import "./TS.css";

function TS(props) {
  const {
    spanText1,
    spanText2,
    spanText3,
    spanText4,
    terrasolsticeLogo11,
    spanText5,
    spanText6,
    spanText7,
    spanText8,
    terrasolsticeLogo12,
    spanText9,
    spanText10,
    spanText11,
    spanText12,
    button1,
    button2,
    image8,
    spanText13,
    spanText14,
    navbarProps,
    productsProps,
    toolsProps,
    user71Props,
    user72Props,
    user73Props,
    user74Props,
    user75Props,
    user76Props,
    user77Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="ts screen">
        <Body>
          <Navbar3 {...navbarProps} />
          <Hero>
            <FlexCol>
              <TerraSolstice>
                <span className="raleway-normal-cape-cod-100px">{spanText1}</span>
              </TerraSolstice>
              <ThisWeb30Applica>
                <span className="raleway-normal-cape-cod-26px">{spanText2}</span>
              </ThisWeb30Applica>
              <FlexRow>
                <OverlapGroup>
                  <CONTRIBUTE>
                    <span className="raleway-bold-white-32px">{spanText3}</span>
                  </CONTRIBUTE>
                </OverlapGroup>
                <Button2>
                  <DASHBOARD>
                    <span className="raleway-bold-yellow-sunshine-32px">{spanText4}</span>
                  </DASHBOARD>
                </Button2>
              </FlexRow>
            </FlexCol>
            <TerrasolsticeLogo1 src={terrasolsticeLogo11} alt="terrasolstice-logo 1" />
          </Hero>
          <Products className={productsProps.className} downloadsProps={productsProps.downloadsProps} />
          <Tools className={toolsProps.className} />
          <Team>
            <BecomeAContributor>
              <span className="raleway-normal-cape-cod-100px">{spanText5}</span>
              <Span116>{spanText6}</Span116>
            </BecomeAContributor>
            <OverlapGroup1>
              <Vector src="/img/vector-20@2x.png" alt="Vector" />
              <User7 ellipse2={user71Props.ellipse2} />
              <User7 ellipse2={user72Props.ellipse2} className={user72Props.className} />
              <User7 ellipse2={user73Props.ellipse2} className={user73Props.className} />
              <User7 ellipse2={user74Props.ellipse2} className={user74Props.className} />
              <User7 ellipse2={user75Props.ellipse2} className={user75Props.className} />
              <User7 ellipse2={user76Props.ellipse2} className={user76Props.className} />
              <User7 ellipse2={user77Props.ellipse2} className={user77Props.className} />
            </OverlapGroup1>
          </Team>
          <LiveDeveloping>
            <DevEnvironment />
            <FlexRow1>
              <OverlapGroup2>
                <LEARNHOW>
                  <span>
                    <span className="raleway-bold-white-32px">{spanText7}</span>
                  </span>
                </LEARNHOW>
              </OverlapGroup2>
              <Button21>
                <DASHBOARD1>
                  <span>
                    <span className="raleway-bold-yellow-sunshine-32px">{spanText8}</span>
                  </span>
                </DASHBOARD1>
              </Button21>
            </FlexRow1>
          </LiveDeveloping>
          <Footer>
            <FooterMenu>
              <TerrasolsticeLogo11 src={terrasolsticeLogo12} alt="terrasolstice-logo 1" />
              <FlexRow2>
                <HIREME>
                  <span className="raleway-bold-cape-cod-20px">{spanText9}</span>
                </HIREME>
                <GITHUB>
                  <span className="raleway-bold-cape-cod-20px">{spanText10}</span>
                </GITHUB>
                <OPENSOURCE>
                  <span className="raleway-bold-cape-cod-20px">{spanText11}</span>
                </OPENSOURCE>
                <ORGANIZATIONS>
                  <span className="raleway-bold-cape-cod-20px">{spanText12}</span>
                </ORGANIZATIONS>
                <Button src={button1} alt="button" />
                <Button1 src={button2} alt="button" />
              </FlexRow2>
            </FooterMenu>
            <FlexRow3>
              <Image8 src={image8} alt="image 8" />
              <OverlapGroup3>
                <SnippetOfTheDay>
                  <span>
                    <span className="raleway-bold-white-36px">{spanText13}</span>
                  </span>
                </SnippetOfTheDay>
                <FlexRow4>
                  <SubscribeToGetAccess>
                    <span>
                      <span className="raleway-bold-white-20px">{spanText14}</span>
                    </span>
                  </SubscribeToGetAccess>
                  <Rectangle6></Rectangle6>
                  <Rectangle7></Rectangle7>
                </FlexRow4>
              </OverlapGroup3>
            </FlexRow3>
          </Footer>
        </Body>
      </div>
    </div>
  );
}

const Body = styled.div`
  width: 1512px;
  height: 5592px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: var(--material-themereferrorerror100);
  border: 1px none;
`;

const Hero = styled.div`
  width: 1512px;
  height: 982px;
  display: flex;
  align-items: flex-start;
  gap: 172px;
  background-color: var(--material-themereferrorerror100);
  overflow: hidden;
  border: 1px none;
`;

const FlexCol = styled.div`
  width: 598px;
  align-self: center;
  margin-left: 97px;
  margin-bottom: 116px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 394px;
`;

const TerraSolstice = styled.div`
  ${RalewayNormalCapeCod100px}
  min-height: 117px;
  letter-spacing: 0;
`;

const ThisWeb30Applica = styled.div`
  ${RalewayNormalCapeCod26px}
  width: 570px;
  min-height: 93px;
  margin-top: 44px;
  letter-spacing: 0;
`;

const FlexRow = styled.div`
  margin-top: 72px;
  display: flex;
  align-items: flex-start;
  min-width: 539px;
  gap: 25px;
`;

const OverlapGroup = styled.div`
  height: 68px;
  display: flex;
  padding: 14px 25px;
  justify-content: flex-end;
  align-items: flex-start;
  min-width: 257px;
  background-color: var(--yellow-sunshine);
  border-radius: 16px;
`;

const CONTRIBUTE = styled.div`
  ${RalewayBoldWhite32px}
  min-height: 38px;
  letter-spacing: 0;
`;

const DASHBOARD = styled.div`
  ${RalewayBoldYellowSunshine32px}
  min-height: 38px;
  letter-spacing: 0;
`;

const Button2 = styled.div`
  height: 68px;
  display: flex;
  padding: 14px 26px;
  align-items: flex-start;
  min-width: 257px;
  background-color: var(--material-themereferrorerror100);
  border-radius: 16px;
  border: 1px none;
  box-shadow: 0px 4px 4px #fcf50040;
`;

const TerrasolsticeLogo1 = styled.img`
  width: 1040px;
  height: 1040px;
  margin-top: -20px;
  object-fit: cover;
`;

const Team = styled.div`
  width: 1512px;
  height: 982px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 61px;
  background-color: var(--material-themereferrorerror100);
  border: 1px none;
`;

const BecomeAContributor = styled.div`
  ${RalewayNormalCapeCod100px}
  min-height: 117px;
  margin-top: 104px;
  min-width: 1006px;
  letter-spacing: 0;
`;

const Span116 = styled.span`
  font-family: var(--font-family-raleway);
  font-weight: 400;
  color: var(--yellow-sunshine);
  font-size: 100px;
`;

const OverlapGroup1 = styled.div`
  width: 1512px;
  height: 700px;
  position: relative;
`;

const Vector = styled.img`
  position: absolute;
  width: 1512px;
  height: 500px;
  top: 200px;
  left: 0;
`;

const LiveDeveloping = styled.div`
  width: 1512px;
  height: 982px;
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 40px 0;
  align-items: center;
  gap: 66px;
  background-color: var(--material-themereferrorerror100);
  border: 1px none;
`;

const FlexRow1 = styled.div`
  display: flex;
  align-items: flex-start;
  min-width: 614px;
  gap: 100px;
`;

const OverlapGroup2 = styled.div`
  height: 68px;
  display: flex;
  padding: 14px 26px;
  align-items: flex-start;
  min-width: 257px;
  background-color: var(--yellow-sunshine);
  border-radius: 16px;
`;

const LEARNHOW = styled.div`
  ${ValignTextMiddle}
  ${RalewayBoldWhite32px}
            height: 38px;
  min-width: 194px;
  text-align: center;
  letter-spacing: 0;
`;

const Button21 = styled.div`
  height: 68px;
  display: flex;
  padding: 14px 31px;
  align-items: flex-start;
  min-width: 257px;
  background-color: var(--material-themereferrorerror100);
  border-radius: 16px;
  border: 1px none;
  box-shadow: 0px 4px 4px #00000040;
`;

const DASHBOARD1 = styled.div`
  ${ValignTextMiddle}
  ${RalewayBoldYellowSunshine32px}
            height: 38px;
  min-width: 189px;
  text-align: center;
  letter-spacing: 0;
`;

const Footer = styled.div`
  width: 1512px;
  height: 592px;
  display: flex;
  flex-direction: column;
  padding: 54px 27.1px;
  align-items: flex-end;
  gap: 33px;
  background-color: var(--material-themereferrorerror100);
  border: 1px none;
`;

const FooterMenu = styled.div`
  width: 1391px;
  margin-top: 3px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 223px;
  gap: 38px;
`;

const TerrasolsticeLogo11 = styled.img`
  width: 125px;
  height: 125px;
  margin-right: 67.85px;
  object-fit: cover;
`;

const FlexRow2 = styled.div`
  ${RalewayBoldCapeCod20px}
  margin-right: 8.0px;
  display: flex;
  align-items: center;
  min-width: 1383px;
`;

const HIREME = styled.div`
  width: 124px;
  min-height: 23px;
  margin-bottom: 1px;
  text-align: center;
  letter-spacing: 0;
`;

const GITHUB = styled.div`
  width: 118px;
  min-height: 23px;
  margin-left: 30px;
  margin-bottom: 1px;
  text-align: center;
  letter-spacing: 0;
`;

const OPENSOURCE = styled.div`
  width: 223px;
  min-height: 23px;
  margin-left: 28px;
  margin-bottom: 3px;
  text-align: center;
  letter-spacing: 0;
`;

const ORGANIZATIONS = styled.div`
  width: 250px;
  min-height: 23px;
  margin-left: 29px;
  margin-bottom: 1px;
  text-align: center;
  letter-spacing: 0;
`;

const Button = styled.img`
  width: 215px;
  height: 60px;
  margin-left: 76px;
`;

const Button1 = styled.img`
  width: 215px;
  height: 60px;
  margin-left: 75px;
`;

const FlexRow3 = styled.div`
  margin-right: 7.85px;
  display: flex;
  align-items: flex-end;
  min-width: 1403px;
  gap: 100px;
`;

const Image8 = styled.img`
  width: 640px;
  height: 225px;
  object-fit: cover;
`;

const OverlapGroup3 = styled.div`
  width: 663px;
  display: flex;
  flex-direction: column;
  padding: 18px 14px;
  align-items: flex-start;
  min-height: 164px;
  gap: 21px;
  background-color: var(--yellow-sunshine);
  border-radius: 16px;
`;

const SnippetOfTheDay = styled.div`
  ${ValignTextMiddle}
  ${RalewayBoldWhite36px}
            width: 367px;
  height: 51px;
  align-self: center;
  margin-left: 1.54px;
  text-align: center;
  letter-spacing: 0;
`;

const FlexRow4 = styled.div`
  height: 50px;
  display: flex;
  align-items: flex-end;
  min-width: 620px;
  gap: 18px;
`;

const SubscribeToGetAccess = styled.div`
  ${ValignTextMiddle}
  ${RalewayBoldWhite20px}
            width: 167px;
  height: 49px;
  align-self: flex-start;
  text-align: center;
  letter-spacing: 0;
`;

const Rectangle6 = styled.div`
  width: 316px;
  height: 33px;
  background-color: var(--material-themereferrorerror100);
  border-radius: 16px;
  border: 1px none;
`;

const Rectangle7 = styled.div`
  width: 101px;
  height: 33px;
  background-color: var(--white);
  border-radius: 16px;
  border: 1px none;
`;

export default TS;
