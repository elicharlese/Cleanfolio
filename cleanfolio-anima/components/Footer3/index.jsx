import React from "react";
import FooterMenu from "../FooterMenu";
import styled from "styled-components";
import { RalewayBoldWhite36px, RalewayBoldWhite20px, ValignTextMiddle } from "../../styledMixins";


function Footer3(props) {
  const { className, footerMenuProps } = props;

  return (
    <Footer className={`footer-3 ${className || ""}`}>
      <FooterMenu
        logoBlockify={footerMenuProps.logoBlockify}
        button1={footerMenuProps.button1}
        button2={footerMenuProps.button2}
      />
      <FlexRow className="flex-row-19">
        <Image8 className="image-8-3" src="/img/image-8-1@2x.png" alt="image 8" />
        <OverlapGroup className="overlap-group-23">
          <SnippetOfTheDay className="snippet-of-the-day-4">
            <span>
              <span className="spanaiyrp raleway-bold-white-36px">Snippet of the Day</span>
            </span>
          </SnippetOfTheDay>
          <FlexRow1 className="flex-row-20">
            <SubscribeToGetAccess className="subscribe-to-get-access-4">
              <span>
                <span className="spanhppxt raleway-bold-white-20px">Subscribe to get access</span>
              </span>
            </SubscribeToGetAccess>
            <Rectangle6 className="rectangle-6-5"></Rectangle6>
            <Rectangle7 className="rectangle-7-4"></Rectangle7>
          </FlexRow1>
        </OverlapGroup>
      </FlexRow>
    </Footer>
  );
}

const Footer = styled.div`
  width: 1512px;
  height: 592px;
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 47px 27.1px;
  align-items: flex-end;
  gap: 33px;
  background-color: var(--material-themereferrorerror100);
  border: 1px none;
`;

const FlexRow = styled.div`
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
  background-color: var(--purple-heart);
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

const FlexRow1 = styled.div`
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

const OverlapGroup1 = styled.div`
  .footer-3.footer-4 & {
    background-color: var(--orchid);
  }
`;

const OverlapGroup2 = styled.div`
  .footer-3.footer-5 & {
    background-color: var(--portage);
  }
`;

const OverlapGroup3 = styled.div`
  .footer-3.footer-6 & {
    background-color: var(--fern);
  }
`;

const OverlapGroup4 = styled.div`
  .footer-3.footer-7 & {
    background-color: var(--cararra);
  }
`;

const OverlapGroup5 = styled.div`
  .footer-3.footer-8 & {
    background-color: var(--dairy-cream);
  }
`;

const OverlapGroup6 = styled.div`
  .footer-3.footer-9 & {
    background-color: var(--anzac);
  }
`;

const OverlapGroup7 = styled.div`
  .footer-3.footer-10 & {
    background-color: var(--mexican-red);
  }
`;

const OverlapGroup8 = styled.div`
  .footer-3.footer-11 & {
    background-color: var(--turquoise-blue);
  }
`;

const OverlapGroup9 = styled.div`
  .footer-3.footer-12 & {
    background-color: var(--seagull);
  }
`;

export default Footer3;
