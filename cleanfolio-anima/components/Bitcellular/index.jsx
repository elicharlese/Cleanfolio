import React from "react";
import Navbar3 from "../Navbar3";
import Products from "../Products";
import Tools from "../Tools";
import User7 from "../User7";
import FooterMenu from "../FooterMenu";
import DevEnvironment from "../DevEnvironment";
import styled from "styled-components";
import {
  RalewayBoldWhite36px,
  RalewayBoldMandy32px,
  RalewayBoldWhite20px,
  RalewayNormalCapeCod100px,
  RalewayBoldWhite32px,
  RalewayNormalCapeCod26px,
  ValignTextMiddle,
} from "../../styledMixins";
import "./Bitcellular.css";

function Bitcellular(props) {
  const {
    spanText1,
    spanText2,
    spanText3,
    spanText4,
    logoBitcell,
    spanText5,
    spanText6,
    image8,
    spanText7,
    spanText8,
    spanText9,
    spanText10,
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
    footerMenuProps,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="bitcellular screen">
        <Body>
          <Navbar3 {...navbarProps} />
          <Hero>
            <FlexCol>
              <Bitcellular1>
                <span className="raleway-normal-cape-cod-100px">{spanText1}</span>
              </Bitcellular1>
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
                    <span className="raleway-bold-mandy-32px">{spanText4}</span>
                  </DASHBOARD>
                </Button2>
              </FlexRow>
            </FlexCol>
            <LogoBitcell src={logoBitcell} alt="logo-bitcell" />
          </Hero>
          <Products className={productsProps.className} downloadsProps={productsProps.downloadsProps} />
          <Tools className={toolsProps.className} />
          <Team>
            <BecomeAContributor>
              <span className="raleway-normal-cape-cod-100px">{spanText5}</span>
              <Span114>{spanText6}</Span114>
            </BecomeAContributor>
            <OverlapGroup1>
              <Avatars>
                <User7 ellipse2={user71Props.ellipse2} className={user71Props.className} />
                <User7 ellipse2={user72Props.ellipse2} className={user72Props.className} />
                <User7 ellipse2={user73Props.ellipse2} className={user73Props.className} />
                <User7 ellipse2={user74Props.ellipse2} className={user74Props.className} />
                <User7 ellipse2={user75Props.ellipse2} className={user75Props.className} />
                <UserContainer>
                  <User7 ellipse2={user76Props.ellipse2} className={user76Props.className} />
                  <User7 ellipse2={user77Props.ellipse2} className={user77Props.className} />
                </UserContainer>
              </Avatars>
              <Vector src="/img/vector-18@2x.png" alt="Vector" />
            </OverlapGroup1>
          </Team>
          <OverlapGroup4>
            <Footer>
              <FooterMenu
                logoBlockify={footerMenuProps.logoBlockify}
                button1={footerMenuProps.button1}
                button2={footerMenuProps.button2}
              />
              <FlexRow1>
                <Image8 src={image8} alt="image 8" />
                <OverlapGroup2>
                  <SnippetOfTheDay>
                    <span>
                      <span className="raleway-bold-white-36px">{spanText7}</span>
                    </span>
                  </SnippetOfTheDay>
                  <FlexRow2>
                    <SubscribeToGetAccess>
                      <span>
                        <span className="raleway-bold-white-20px">{spanText8}</span>
                      </span>
                    </SubscribeToGetAccess>
                    <Rectangle6></Rectangle6>
                    <Rectangle7></Rectangle7>
                  </FlexRow2>
                </OverlapGroup2>
              </FlexRow1>
            </Footer>
            <LiveDeveloping>
              <DevEnvironment />
              <FlexRow3>
                <OverlapGroup3>
                  <LEARNHOW>
                    <span>
                      <span className="raleway-bold-white-32px">{spanText9}</span>
                    </span>
                  </LEARNHOW>
                </OverlapGroup3>
                <Button21>
                  <DASHBOARD1>
                    <span>
                      <span className="raleway-bold-mandy-32px">{spanText10}</span>
                    </span>
                  </DASHBOARD1>
                </Button21>
              </FlexRow3>
            </LiveDeveloping>
          </OverlapGroup4>
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
  margin-top: 3px;
  display: flex;
  align-items: flex-start;
  gap: 222px;
  background-color: var(--material-themereferrorerror100);
  overflow: hidden;
  border: 1px none;
`;

const FlexCol = styled.div`
  width: 570px;
  align-self: center;
  margin-left: 94px;
  margin-bottom: 138px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 370px;
`;

const Bitcellular1 = styled.div`
  ${RalewayNormalCapeCod100px}
  min-height: 117px;
  margin-left: 3px;
  letter-spacing: 0;
`;

const ThisWeb30Applica = styled.div`
  ${RalewayNormalCapeCod26px}
  width: 570px;
  min-height: 93px;
  margin-top: 49px;
  letter-spacing: 0;
`;

const FlexRow = styled.div`
  margin-top: 43px;
  margin-left: 3px;
  display: flex;
  align-items: flex-start;
  min-width: 546px;
  gap: 32px;
`;

const OverlapGroup = styled.div`
  height: 68px;
  display: flex;
  padding: 14px 25px;
  justify-content: flex-end;
  align-items: flex-start;
  min-width: 257px;
  background-color: var(--mandy);
  border-radius: 16px;
`;

const CONTRIBUTE = styled.div`
  ${RalewayBoldWhite32px}
  min-height: 38px;
  letter-spacing: 0;
`;

const DASHBOARD = styled.div`
  ${RalewayBoldMandy32px}
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
  box-shadow: 0px 4px 4px #00000040;
`;

const LogoBitcell = styled.img`
  width: 1000px;
  height: 1000px;
  margin-top: -18px;
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

const Span114 = styled.span`
  font-family: var(--font-family-raleway);
  font-weight: 400;
  color: var(--mandy);
  font-size: 100px;
`;

const OverlapGroup1 = styled.div`
  width: 1512px;
  height: 700px;
  position: relative;
`;

const Avatars = styled.div`
  position: absolute;
  height: 550px;
  top: 0;
  left: 25px;
  display: flex;
  align-items: flex-start;
  min-width: 1459px;
`;

const UserContainer = styled.div`
  width: 304px;
  position: relative;
  margin-left: 31px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 421px;
  gap: 19px;
`;

const Vector = styled.img`
  position: absolute;
  width: 1512px;
  height: 500px;
  top: 200px;
  left: 0;
`;

const OverlapGroup4 = styled.div`
  width: 1512px;
  height: 1571px;
  position: relative;
`;

const Footer = styled.div`
  position: absolute;
  width: 1512px;
  height: 592px;
  top: 979px;
  left: 0;
  display: flex;
  flex-direction: column;
  padding: 47px 27.1px;
  align-items: flex-end;
  gap: 33px;
  background-color: var(--material-themereferrorerror100);
  border: 1px none;
`;

const FlexRow1 = styled.div`
  margin-right: 7.85px;
  display: flex;
  align-items: flex-end;
  min-width: 1383px;
  gap: 80px;
`;

const Image8 = styled.img`
  width: 640px;
  height: 225px;
  object-fit: cover;
`;

const OverlapGroup2 = styled.div`
  width: 663px;
  display: flex;
  flex-direction: column;
  padding: 18px 14px;
  align-items: flex-start;
  min-height: 164px;
  gap: 21px;
  background-color: var(--mandy);
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

const FlexRow2 = styled.div`
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

const LiveDeveloping = styled.div`
  position: absolute;
  width: 1512px;
  height: 982px;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  padding: 40px 0;
  align-items: center;
  gap: 66px;
  background-color: var(--material-themereferrorerror100);
  border: 1px none;
`;

const FlexRow3 = styled.div`
  display: flex;
  align-items: flex-start;
  min-width: 614px;
  gap: 100px;
`;

const OverlapGroup3 = styled.div`
  height: 68px;
  display: flex;
  padding: 14px 26px;
  align-items: flex-start;
  min-width: 257px;
  background-color: var(--mandy);
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
  ${RalewayBoldMandy32px}
            height: 38px;
  min-width: 189px;
  text-align: center;
  letter-spacing: 0;
`;

export default Bitcellular;
