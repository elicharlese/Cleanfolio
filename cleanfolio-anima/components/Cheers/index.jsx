import React from "react";
import Navbar3 from "../Navbar3";
import Products from "../Products";
import Tools from "../Tools";
import User7 from "../User7";
import DevEnvironment from "../DevEnvironment";
import Footer3 from "../Footer3";
import styled from "styled-components";
import {
  RalewayNormalCapeCod80px,
  RalewayNormalCapeCod100px,
  RalewayBoldWhite32px,
  RalewayNormalCapeCod26px,
  ValignTextMiddle,
  RalewayBoldAnzac32px,
} from "../../styledMixins";
import "./Cheers.css";

function Cheers(props) {
  const {
    spanText1,
    spanText2,
    spanText3,
    spanText4,
    logoCheers,
    spanText5,
    spanText6,
    spanText7,
    spanText8,
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
    footer3Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="cheers screen">
        <Body>
          <Navbar3 {...navbarProps} />
          <Hero>
            <FlexCol>
              <Cheers1>
                <span className="raleway-normal-cape-cod-80px">{spanText1}</span>
              </Cheers1>
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
                    <span className="raleway-bold-anzac-32px">{spanText4}</span>
                  </DASHBOARD>
                </Button2>
              </FlexRow>
            </FlexCol>
            <LogoCheers src={logoCheers} alt="logo-cheers" />
          </Hero>
          <Products className={productsProps.className} downloadsProps={productsProps.downloadsProps} />
          <Tools className={toolsProps.className} />
          <Team>
            <BecomeAContributor>
              <span className="raleway-normal-cape-cod-100px">{spanText5}</span>
              <Span113>{spanText6}</Span113>
            </BecomeAContributor>
            <OverlapGroup1>
              <User7 ellipse2={user71Props.ellipse2} />
              <User7 ellipse2={user72Props.ellipse2} className={user72Props.className} />
              <User7 ellipse2={user73Props.ellipse2} className={user73Props.className} />
              <User7 ellipse2={user74Props.ellipse2} className={user74Props.className} />
              <User7 ellipse2={user75Props.ellipse2} className={user75Props.className} />
              <User7 ellipse2={user76Props.ellipse2} className={user76Props.className} />
              <User7 ellipse2={user77Props.ellipse2} className={user77Props.className} />
              <Vector src="/img/vector-17@2x.png" alt="Vector" />
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
                    <span className="raleway-bold-anzac-32px">{spanText8}</span>
                  </span>
                </DASHBOARD1>
              </Button21>
            </FlexRow1>
          </LiveDeveloping>
          <Footer3 className={footer3Props.className} footerMenuProps={footer3Props.footerMenuProps} />
        </Body>
      </div>
    </div>
  );
}

const Body = styled.div`
  width: 1512px;
  height: 5610px;
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
  align-items: center;
  gap: 200px;
  background-color: var(--material-themereferrorerror100);
  overflow: hidden;
  border: 1px none;
`;

const FlexCol = styled.div`
  width: 570px;
  margin-left: 94px;
  margin-bottom: 87px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 327px;
`;

const Cheers1 = styled.div`
  ${RalewayNormalCapeCod80px}
  min-height: 94px;
  margin-left: 3px;
  letter-spacing: 0;
`;

const ThisWeb30Applica = styled.div`
  ${RalewayNormalCapeCod26px}
  width: 570px;
  min-height: 93px;
  margin-top: 25px;
  letter-spacing: 0;
`;

const FlexRow = styled.div`
  margin-top: 47px;
  margin-left: 3px;
  display: flex;
  align-items: flex-start;
  min-width: 541px;
  gap: 27px;
`;

const OverlapGroup = styled.div`
  height: 68px;
  display: flex;
  padding: 14px 25px;
  justify-content: flex-end;
  align-items: flex-start;
  min-width: 257px;
  background-color: var(--anzac);
  border-radius: 16px;
`;

const CONTRIBUTE = styled.div`
  ${RalewayBoldWhite32px}
  min-height: 38px;
  letter-spacing: 0;
`;

const DASHBOARD = styled.div`
  ${RalewayBoldAnzac32px}
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

const LogoCheers = styled.img`
  width: 1000px;
  height: 1000px;
  align-self: flex-end;
  margin-bottom: -18px;
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

const Span113 = styled.span`
  font-family: var(--font-family-raleway);
  font-weight: 400;
  color: var(--anzac);
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
  background-color: var(--anzac);
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
  ${RalewayBoldAnzac32px}
            height: 38px;
  min-width: 189px;
  text-align: center;
  letter-spacing: 0;
`;

export default Cheers;
