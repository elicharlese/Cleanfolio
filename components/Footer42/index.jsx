import React from "react";
import styled from "styled-components";
import {
  RalewayBoldWhite36px,
  RalewayBoldCapeCod20px,
  RalewayBoldWhite20px,
  ValignTextMiddle,
} from "../../styledMixins";


function Footer42(props) {
  const { cecLogo, spanText1, spanText2, spanText3, spanText4, button1, button2, image8, spanText5, spanText6 } = props;

  return (
    <Footer>
      <FooterMenu>
        <CecLogo src={cecLogo} alt="cec-logo" />
        <FlexRow>
          <HIREME>
            <span className="raleway-bold-cape-cod-20px">{spanText1}</span>
          </HIREME>
          <GITHUB>
            <span className="raleway-bold-cape-cod-20px">{spanText2}</span>
          </GITHUB>
          <OPENSOURCE>
            <span className="raleway-bold-cape-cod-20px">{spanText3}</span>
          </OPENSOURCE>
          <ORGANIZATIONS>
            <span className="raleway-bold-cape-cod-20px">{spanText4}</span>
          </ORGANIZATIONS>
          <Button src={button1} alt="button" />
          <Button1 src={button2} alt="button" />
        </FlexRow>
      </FooterMenu>
      <FlexRow1>
        <Image8 src={image8} alt="image 8" />
        <OverlapGroup>
          <SnippetOfTheDay>
            <span>
              <span className="raleway-bold-white-36px">{spanText5}</span>
            </span>
          </SnippetOfTheDay>
          <FlexRow2>
            <SubscribeToGetAccess>
              <span>
                <span className="raleway-bold-white-20px">{spanText6}</span>
              </span>
            </SubscribeToGetAccess>
            <Rectangle6></Rectangle6>
            <Rectangle7></Rectangle7>
          </FlexRow2>
        </OverlapGroup>
      </FlexRow1>
    </Footer>
  );
}

const Footer = styled.div`
  width: 1512px;
  height: 592px;
  display: flex;
  flex-direction: column;
  padding: 47px 27.1px;
  align-items: flex-end;
  gap: 33px;
  background-color: var(--material-themereferrorerror100);
  border: 1px none;
`;

const FooterMenu = styled.div`
  width: 1411px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 233px;
  gap: 53px;
`;

const CecLogo = styled.img`
  width: 120px;
  height: 120px;
  margin-right: 46.85px;
  object-fit: cover;
`;

const FlexRow = styled.div`
  ${RalewayBoldCapeCod20px}
  margin-right: 8.0px;
  display: flex;
  align-items: center;
  min-width: 1403px;
`;

const HIREME = styled.div`
  width: 127px;
  min-height: 23px;
  margin-bottom: 1px;
  text-align: center;
  letter-spacing: 0;
`;

const GITHUB = styled.div`
  width: 121px;
  min-height: 23px;
  margin-left: 31px;
  margin-bottom: 1px;
  text-align: center;
  letter-spacing: 0;
`;

const OPENSOURCE = styled.div`
  width: 229px;
  min-height: 23px;
  margin-left: 28px;
  margin-bottom: 3px;
  text-align: center;
  letter-spacing: 0;
`;

const ORGANIZATIONS = styled.div`
  width: 256px;
  min-height: 23px;
  margin-left: 30px;
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

const FlexRow1 = styled.div`
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

const OverlapGroup = styled.div`
  width: 663px;
  display: flex;
  flex-direction: column;
  padding: 18px 14px;
  align-items: flex-start;
  min-height: 164px;
  gap: 21px;
  background-color: var(--seagull);
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

export default Footer42;
