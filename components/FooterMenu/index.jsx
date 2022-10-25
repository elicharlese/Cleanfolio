import React from "react";
import styled from "styled-components";
import { RalewayBoldCapeCod20px } from "../../styledMixins";


function FooterMenu(props) {
  const { logoBlockify, button1, button2 } = props;

  return (
    <FooterMenu1>
      <LogoBlockify src={logoBlockify} alt="logo-blockify" />
      <FlexRow>
        <HIREME>
          <span className="raleway-bold-cape-cod-20px">HIRE ME</span>
        </HIREME>
        <GITHUB>
          <span className="raleway-bold-cape-cod-20px">GITHUB</span>
        </GITHUB>
        <OPENSOURCE>
          <span className="raleway-bold-cape-cod-20px">OPEN-SOURCE</span>
        </OPENSOURCE>
        <ORGANIZATIONS>
          <span className="raleway-bold-cape-cod-20px">ORGANIZATIONS</span>
        </ORGANIZATIONS>
        <Button src={button1} alt="button" />
        <Button1 src={button2} alt="button" />
      </FlexRow>
    </FooterMenu1>
  );
}

const FooterMenu1 = styled.div`
  width: 1391px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 233px;
  gap: 53px;
`;

const LogoBlockify = styled.img`
  width: 120px;
  height: 120px;
  margin-right: 66.85px;
  object-fit: cover;
`;

const FlexRow = styled.div`
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

const FooterMenu2 = styled.div`
  width: 1391px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 233px;
  gap: 53px;
`;

const LogoUniMeta = styled.img`
  width: 120px;
  height: 120px;
  margin-right: 66.85px;
  object-fit: cover;
`;

const FlexRow1 = styled.div`
  ${RalewayBoldCapeCod20px}
  margin-right: 8.0px;
  display: flex;
  align-items: center;
  min-width: 1383px;
`;

const HIREME1 = styled.div`
  width: 124px;
  min-height: 23px;
  margin-bottom: 1px;
  text-align: center;
  letter-spacing: 0;
`;

const GITHUB1 = styled.div`
  width: 118px;
  min-height: 23px;
  margin-left: 30px;
  margin-bottom: 1px;
  text-align: center;
  letter-spacing: 0;
`;

const OPENSOURCE1 = styled.div`
  width: 223px;
  min-height: 23px;
  margin-left: 28px;
  margin-bottom: 3px;
  text-align: center;
  letter-spacing: 0;
`;

const ORGANIZATIONS1 = styled.div`
  width: 250px;
  min-height: 23px;
  margin-left: 29px;
  margin-bottom: 1px;
  text-align: center;
  letter-spacing: 0;
`;

const Button2 = styled.img`
  width: 215px;
  height: 60px;
  margin-left: 76px;
`;

const Button3 = styled.img`
  width: 215px;
  height: 60px;
  margin-left: 75px;
`;

const FooterMenu3 = styled.div`
  width: 1391px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 233px;
  gap: 53px;
`;

const LogoHooden = styled.img`
  width: 120px;
  height: 120px;
  margin-right: 66.85px;
  object-fit: cover;
`;

const FlexRow2 = styled.div`
  ${RalewayBoldCapeCod20px}
  margin-right: 8.0px;
  display: flex;
  align-items: center;
  min-width: 1383px;
`;

const HIREME2 = styled.div`
  width: 124px;
  min-height: 23px;
  margin-bottom: 1px;
  text-align: center;
  letter-spacing: 0;
`;

const GITHUB2 = styled.div`
  width: 118px;
  min-height: 23px;
  margin-left: 30px;
  margin-bottom: 1px;
  text-align: center;
  letter-spacing: 0;
`;

const OPENSOURCE2 = styled.div`
  width: 223px;
  min-height: 23px;
  margin-left: 28px;
  margin-bottom: 3px;
  text-align: center;
  letter-spacing: 0;
`;

const ORGANIZATIONS2 = styled.div`
  width: 250px;
  min-height: 23px;
  margin-left: 29px;
  margin-bottom: 1px;
  text-align: center;
  letter-spacing: 0;
`;

const Button4 = styled.img`
  width: 215px;
  height: 60px;
  margin-left: 76px;
`;

const Button5 = styled.img`
  width: 215px;
  height: 60px;
  margin-left: 75px;
`;

const FooterMenu4 = styled.div`
  width: 1391px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 233px;
  gap: 53px;
`;

const LogoKnottBank = styled.img`
  width: 120px;
  height: 120px;
  margin-right: 66.85px;
  object-fit: cover;
`;

const FlexRow3 = styled.div`
  ${RalewayBoldCapeCod20px}
  margin-right: 8.0px;
  display: flex;
  align-items: center;
  min-width: 1383px;
`;

const HIREME3 = styled.div`
  width: 124px;
  min-height: 23px;
  margin-bottom: 1px;
  text-align: center;
  letter-spacing: 0;
`;

const GITHUB3 = styled.div`
  width: 118px;
  min-height: 23px;
  margin-left: 30px;
  margin-bottom: 1px;
  text-align: center;
  letter-spacing: 0;
`;

const OPENSOURCE3 = styled.div`
  width: 223px;
  min-height: 23px;
  margin-left: 28px;
  margin-bottom: 3px;
  text-align: center;
  letter-spacing: 0;
`;

const ORGANIZATIONS3 = styled.div`
  width: 250px;
  min-height: 23px;
  margin-left: 29px;
  margin-bottom: 1px;
  text-align: center;
  letter-spacing: 0;
`;

const Button6 = styled.img`
  width: 215px;
  height: 60px;
  margin-left: 76px;
`;

const Button7 = styled.img`
  width: 215px;
  height: 60px;
  margin-left: 75px;
`;

const FooterMenu5 = styled.div`
  width: 1391px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 233px;
  gap: 53px;
`;

const LogoThePublic = styled.img`
  width: 120px;
  height: 120px;
  margin-right: 66.85px;
  object-fit: cover;
`;

const FlexRow4 = styled.div`
  ${RalewayBoldCapeCod20px}
  margin-right: 8.0px;
  display: flex;
  align-items: center;
  min-width: 1383px;
`;

const HIREME4 = styled.div`
  width: 124px;
  min-height: 23px;
  margin-bottom: 1px;
  text-align: center;
  letter-spacing: 0;
`;

const GITHUB4 = styled.div`
  width: 118px;
  min-height: 23px;
  margin-left: 30px;
  margin-bottom: 1px;
  text-align: center;
  letter-spacing: 0;
`;

const OPENSOURCE4 = styled.div`
  width: 223px;
  min-height: 23px;
  margin-left: 28px;
  margin-bottom: 3px;
  text-align: center;
  letter-spacing: 0;
`;

const ORGANIZATIONS4 = styled.div`
  width: 250px;
  min-height: 23px;
  margin-left: 29px;
  margin-bottom: 1px;
  text-align: center;
  letter-spacing: 0;
`;

const Button8 = styled.img`
  width: 215px;
  height: 60px;
  margin-left: 76px;
`;

const Button9 = styled.img`
  width: 215px;
  height: 60px;
  margin-left: 75px;
`;

const FooterMenu6 = styled.div`
  width: 1391px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 233px;
  gap: 53px;
`;

const LogoHalfAndHalf = styled.img`
  width: 120px;
  height: 120px;
  margin-right: 66.85px;
  object-fit: cover;
`;

const FlexRow5 = styled.div`
  ${RalewayBoldCapeCod20px}
  margin-right: 8.0px;
  display: flex;
  align-items: center;
  min-width: 1383px;
`;

const HIREME5 = styled.div`
  width: 124px;
  min-height: 23px;
  margin-bottom: 1px;
  text-align: center;
  letter-spacing: 0;
`;

const GITHUB5 = styled.div`
  width: 118px;
  min-height: 23px;
  margin-left: 30px;
  margin-bottom: 1px;
  text-align: center;
  letter-spacing: 0;
`;

const OPENSOURCE5 = styled.div`
  width: 223px;
  min-height: 23px;
  margin-left: 28px;
  margin-bottom: 3px;
  text-align: center;
  letter-spacing: 0;
`;

const ORGANIZATIONS5 = styled.div`
  width: 250px;
  min-height: 23px;
  margin-left: 29px;
  margin-bottom: 1px;
  text-align: center;
  letter-spacing: 0;
`;

const Button10 = styled.img`
  width: 215px;
  height: 60px;
  margin-left: 76px;
`;

const Button11 = styled.img`
  width: 215px;
  height: 60px;
  margin-left: 75px;
`;

const FooterMenu7 = styled.div`
  width: 1391px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 233px;
  gap: 53px;
`;

const LogoCheers = styled.img`
  width: 120px;
  height: 120px;
  margin-right: 66.85px;
  object-fit: cover;
`;

const FlexRow6 = styled.div`
  ${RalewayBoldCapeCod20px}
  margin-right: 8.0px;
  display: flex;
  align-items: center;
  min-width: 1383px;
`;

const HIREME6 = styled.div`
  width: 124px;
  min-height: 23px;
  margin-bottom: 1px;
  text-align: center;
  letter-spacing: 0;
`;

const GITHUB6 = styled.div`
  width: 118px;
  min-height: 23px;
  margin-left: 30px;
  margin-bottom: 1px;
  text-align: center;
  letter-spacing: 0;
`;

const OPENSOURCE6 = styled.div`
  width: 223px;
  min-height: 23px;
  margin-left: 28px;
  margin-bottom: 3px;
  text-align: center;
  letter-spacing: 0;
`;

const ORGANIZATIONS6 = styled.div`
  width: 250px;
  min-height: 23px;
  margin-left: 29px;
  margin-bottom: 1px;
  text-align: center;
  letter-spacing: 0;
`;

const Button12 = styled.img`
  width: 215px;
  height: 60px;
  margin-left: 76px;
`;

const Button13 = styled.img`
  width: 215px;
  height: 60px;
  margin-left: 75px;
`;

const FooterMenu8 = styled.div`
  width: 1391px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 233px;
  gap: 53px;
`;

const LogoBitcell = styled.img`
  width: 120px;
  height: 120px;
  margin-right: 66.85px;
  object-fit: cover;
`;

const FlexRow7 = styled.div`
  ${RalewayBoldCapeCod20px}
  margin-right: 8.0px;
  display: flex;
  align-items: center;
  min-width: 1383px;
`;

const HIREME7 = styled.div`
  width: 124px;
  min-height: 23px;
  margin-bottom: 1px;
  text-align: center;
  letter-spacing: 0;
`;

const GITHUB7 = styled.div`
  width: 118px;
  min-height: 23px;
  margin-left: 30px;
  margin-bottom: 1px;
  text-align: center;
  letter-spacing: 0;
`;

const OPENSOURCE7 = styled.div`
  width: 223px;
  min-height: 23px;
  margin-left: 28px;
  margin-bottom: 3px;
  text-align: center;
  letter-spacing: 0;
`;

const ORGANIZATIONS7 = styled.div`
  width: 250px;
  min-height: 23px;
  margin-left: 29px;
  margin-bottom: 1px;
  text-align: center;
  letter-spacing: 0;
`;

const Button14 = styled.img`
  width: 215px;
  height: 60px;
  margin-left: 76px;
`;

const Button15 = styled.img`
  width: 215px;
  height: 60px;
  margin-left: 75px;
`;

const FooterMenu9 = styled.div`
  width: 1391px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 233px;
  gap: 53px;
`;

const X3RUPTLogo1 = styled.img`
  width: 120px;
  height: 120px;
  margin-right: 66.85px;
  object-fit: cover;
`;

const FlexRow8 = styled.div`
  ${RalewayBoldCapeCod20px}
  margin-right: 8.0px;
  display: flex;
  align-items: center;
  min-width: 1383px;
`;

const HIREME8 = styled.div`
  width: 124px;
  min-height: 23px;
  margin-bottom: 1px;
  text-align: center;
  letter-spacing: 0;
`;

const GITHUB8 = styled.div`
  width: 118px;
  min-height: 23px;
  margin-left: 30px;
  margin-bottom: 1px;
  text-align: center;
  letter-spacing: 0;
`;

const OPENSOURCE8 = styled.div`
  width: 223px;
  min-height: 23px;
  margin-left: 28px;
  margin-bottom: 3px;
  text-align: center;
  letter-spacing: 0;
`;

const ORGANIZATIONS8 = styled.div`
  width: 250px;
  min-height: 23px;
  margin-left: 29px;
  margin-bottom: 1px;
  text-align: center;
  letter-spacing: 0;
`;

const Button16 = styled.img`
  width: 215px;
  height: 60px;
  margin-left: 76px;
`;

const Button17 = styled.img`
  width: 215px;
  height: 60px;
  margin-left: 75px;
`;

const FooterMenu10 = styled.div`
  width: 1391px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 233px;
  gap: 53px;
`;

const TradentLogo5Transparent2 = styled.img`
  width: 120px;
  height: 120px;
  margin-right: 66.85px;
  object-fit: cover;
`;

const FlexRow9 = styled.div`
  ${RalewayBoldCapeCod20px}
  margin-right: 8.0px;
  display: flex;
  align-items: center;
  min-width: 1383px;
`;

const HIREME9 = styled.div`
  width: 124px;
  min-height: 23px;
  margin-bottom: 1px;
  text-align: center;
  letter-spacing: 0;
`;

const GITHUB9 = styled.div`
  width: 118px;
  min-height: 23px;
  margin-left: 30px;
  margin-bottom: 1px;
  text-align: center;
  letter-spacing: 0;
`;

const OPENSOURCE9 = styled.div`
  width: 223px;
  min-height: 23px;
  margin-left: 28px;
  margin-bottom: 3px;
  text-align: center;
  letter-spacing: 0;
`;

const ORGANIZATIONS9 = styled.div`
  width: 250px;
  min-height: 23px;
  margin-left: 29px;
  margin-bottom: 1px;
  text-align: center;
  letter-spacing: 0;
`;

const Button18 = styled.img`
  width: 215px;
  height: 60px;
  margin-left: 76px;
`;

const Button19 = styled.img`
  width: 215px;
  height: 60px;
  margin-left: 75px;
`;

const FooterMenu11 = styled.div`
  width: 1391px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 233px;
  gap: 53px;
`;

const CecLogo = styled.img`
  width: 120px;
  height: 120px;
  margin-right: 66.85px;
  object-fit: cover;
`;

const FlexRow10 = styled.div`
  ${RalewayBoldCapeCod20px}
  margin-right: 8.0px;
  display: flex;
  align-items: center;
  min-width: 1383px;
`;

const HIREME10 = styled.div`
  width: 124px;
  min-height: 23px;
  margin-bottom: 1px;
  text-align: center;
  letter-spacing: 0;
`;

const GITHUB10 = styled.div`
  width: 118px;
  min-height: 23px;
  margin-left: 30px;
  margin-bottom: 1px;
  text-align: center;
  letter-spacing: 0;
`;

const OPENSOURCE10 = styled.div`
  width: 223px;
  min-height: 23px;
  margin-left: 28px;
  margin-bottom: 3px;
  text-align: center;
  letter-spacing: 0;
`;

const ORGANIZATIONS10 = styled.div`
  width: 250px;
  min-height: 23px;
  margin-left: 29px;
  margin-bottom: 1px;
  text-align: center;
  letter-spacing: 0;
`;

const Button20 = styled.img`
  width: 215px;
  height: 60px;
  margin-left: 76px;
`;

const Button21 = styled.img`
  width: 215px;
  height: 60px;
  margin-left: 75px;
`;

export default FooterMenu;
