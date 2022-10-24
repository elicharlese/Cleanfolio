import React from "react";
import Button from "../Button";
import styled from "styled-components";
import {
  RalewayBoldCapeCod20px,
  RalewayBoldWhite20px,
  RalewayBoldWhite36px,
  ValignTextMiddle,
} from "../../styledMixins";


function Footer(props) {
  const {
    cecLogo,
    hireMe,
    github,
    openSource,
    organizations,
    image8,
    snippetOfTheDay,
    subscribeToGetAccess,
    button1Props,
    button2Props,
  } = props;

  return (
    <Footer1>
      <FooterMenu>
        <CecLogo src={cecLogo} alt="cec-logo" />
        <FlexRow>
          <HIREME>{hireMe}</HIREME>
          <GITHUB>{github}</GITHUB>
          <OPENSOURCE>{openSource}</OPENSOURCE>
          <ORGANIZATIONS>{organizations}</ORGANIZATIONS>
          <Button className={button1Props.className}>{button1Props.children}</Button>
          <Button className={button2Props.className}>{button2Props.children}</Button>
        </FlexRow>
      </FooterMenu>
      <FlexRow1>
        <Image8 src={image8} alt="image 8" />
        <OverlapGroup>
          <SnippetOfTheDay>{snippetOfTheDay}</SnippetOfTheDay>
          <FlexRow2>
            <SubscribeToGetAccess>{subscribeToGetAccess}</SubscribeToGetAccess>
            <Rectangle6></Rectangle6>
            <Rectangle7></Rectangle7>
          </FlexRow2>
        </OverlapGroup>
      </FlexRow1>
    </Footer1>
  );
}

const Footer1 = styled.div`
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
  height: 60px;
  position: relative;
  margin-right: 8px;
  display: flex;
  align-items: center;
  min-width: 1403px;
`;

const HIREME = styled.div`
  width: 127px;
  min-height: 23px;
  margin-top: 1px;
  text-align: center;
  letter-spacing: 0;
`;

const GITHUB = styled.div`
  width: 121px;
  min-height: 23px;
  margin-left: 31px;
  margin-top: 1px;
  text-align: center;
  letter-spacing: 0;
`;

const OPENSOURCE = styled.div`
  width: 229px;
  min-height: 23px;
  margin-left: 28px;
  margin-bottom: 1px;
  text-align: center;
  letter-spacing: 0;
`;

const ORGANIZATIONS = styled.div`
  width: 256px;
  min-height: 23px;
  margin-left: 30px;
  margin-top: 1px;
  text-align: center;
  letter-spacing: 0;
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
  padding: 19px 14px;
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

const Footer2 = styled.div`
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

const FooterMenu1 = styled.div`
  width: 1411px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 233px;
  gap: 53px;
`;

const CecLogo1 = styled.img`
  width: 120px;
  height: 120px;
  margin-right: 46.85px;
  object-fit: cover;
`;

const FlexRow3 = styled.div`
  ${RalewayBoldCapeCod20px}
  height: 60px;
  position: relative;
  margin-right: 8px;
  display: flex;
  align-items: center;
  min-width: 1403px;
`;

const HIREME1 = styled.div`
  width: 127px;
  min-height: 23px;
  margin-top: 1px;
  text-align: center;
  letter-spacing: 0;
`;

const GITHUB1 = styled.div`
  width: 121px;
  min-height: 23px;
  margin-left: 31px;
  margin-top: 1px;
  text-align: center;
  letter-spacing: 0;
`;

const OPENSOURCE1 = styled.div`
  width: 229px;
  min-height: 23px;
  margin-left: 28px;
  margin-bottom: 1px;
  text-align: center;
  letter-spacing: 0;
`;

const ORGANIZATIONS1 = styled.div`
  width: 256px;
  min-height: 23px;
  margin-left: 30px;
  margin-top: 1px;
  text-align: center;
  letter-spacing: 0;
`;

const FlexRow4 = styled.div`
  margin-right: 7.85px;
  display: flex;
  align-items: flex-end;
  min-width: 1403px;
  gap: 100px;
`;

const Image81 = styled.img`
  width: 640px;
  height: 225px;
  object-fit: cover;
`;

const OverlapGroup1 = styled.div`
  width: 663px;
  display: flex;
  flex-direction: column;
  padding: 19px 14px;
  align-items: flex-start;
  min-height: 164px;
  gap: 21px;
  background-color: var(--seagull);
  border-radius: 16px;
`;

const SnippetOfTheDay1 = styled.div`
  ${ValignTextMiddle}
  ${RalewayBoldWhite36px}
            width: 367px;
  height: 51px;
  align-self: center;
  margin-left: 1.54px;
  text-align: center;
  letter-spacing: 0;
`;

const FlexRow5 = styled.div`
  display: flex;
  align-items: flex-end;
  min-width: 620px;
  gap: 18px;
`;

const SubscribeToGetAccess1 = styled.div`
  ${ValignTextMiddle}
  ${RalewayBoldWhite20px}
            width: 167px;
  height: 49px;
  align-self: flex-start;
  text-align: center;
  letter-spacing: 0;
`;

const Rectangle61 = styled.div`
  width: 316px;
  height: 33px;
  background-color: var(--material-themereferrorerror100);
  border-radius: 16px;
  border: 1px none;
`;

const Rectangle71 = styled.div`
  width: 101px;
  height: 33px;
  background-color: var(--white);
  border-radius: 16px;
  border: 1px none;
`;

export default Footer;
