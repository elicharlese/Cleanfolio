import React from "react";
import styled from "styled-components";
import { RalewayBoldWhite26px, RalewayBoldCapeCod20px } from "../../../styledMixins";


function Navbar3(props) {
  const { dashboardLayout, spanText1, spanText2, spanText3, spanText4, spanText5, spanText6, className } = props;

  return (
    <Navbar className={`navbar-1 ${className || ""}`}>
      <DashboardLayout className="dashboard-layout-1" src={dashboardLayout} alt="Dashboard Layout" />
      <HIREME className="hire-me-5">
        <span className="span7rke6 raleway-bold-cape-cod-20px">{spanText1}</span>
      </HIREME>
      <GITHUB className="github-2">
        <span className="spanbshuo raleway-bold-cape-cod-20px">{spanText2}</span>
      </GITHUB>
      <OPENSOURCE className="open-source-3">
        <span className="span4gr98 raleway-bold-cape-cod-20px">{spanText3}</span>
      </OPENSOURCE>
      <ORGANIZATIONS className="organizations-2">
        <span className="span1ifbp raleway-bold-cape-cod-20px">{spanText4}</span>
      </ORGANIZATIONS>
      <ButtonLogin className="button-login-1">
        <HeroButton className="hero-button-2">
          <span className="spankczrm raleway-bold-white-26px">{spanText5}</span>
        </HeroButton>
      </ButtonLogin>
      <ButtonWallet className="button-wallet-1">
        <HeroButton1 className="hero-button-3">
          <span className="span6kjpk raleway-bold-white-26px">{spanText6}</span>
        </HeroButton1>
      </ButtonWallet>
    </Navbar>
  );
}

const Navbar = styled.div`
  ${RalewayBoldCapeCod20px}
  width: 1512px;
  height: 90px;
  display: flex;
  padding: 0 23px;
  align-items: center;
  background-color: var(--material-themereferrorerror100);
  border: 1px none;
`;

const DashboardLayout = styled.img`
  width: 60px;
  height: 60px;
`;

const HIREME = styled.div`
  min-height: 23px;
  margin-left: 539px;
  margin-bottom: 1px;
  min-width: 81px;
  text-align: center;
  letter-spacing: 0;
`;

const GITHUB = styled.div`
  min-height: 23px;
  margin-left: 19px;
  margin-bottom: 1px;
  min-width: 77px;
  text-align: center;
  letter-spacing: 0;
`;

const OPENSOURCE = styled.div`
  min-height: 23px;
  margin-left: 19px;
  margin-bottom: 3px;
  min-width: 145px;
  text-align: center;
  letter-spacing: 0;
`;

const ORGANIZATIONS = styled.div`
  min-height: 23px;
  margin-left: 19px;
  margin-bottom: 1px;
  min-width: 163px;
  text-align: center;
  letter-spacing: 0;
`;

const ButtonLogin = styled.div`
  height: 50px;
  margin-left: 19px;
  display: flex;
  padding: 6px 38.2px;
  align-items: flex-start;
  min-width: 150px;
  background-color: var(--seagull);
  border-radius: 16px;
  border: 1px none;
`;

const HeroButton = styled.div`
  ${RalewayBoldWhite26px}
  width: 74px;
  min-height: 28px;
  text-align: center;
  letter-spacing: 0;
`;

const ButtonWallet = styled.div`
  height: 50px;
  margin-left: 19px;
  display: flex;
  padding: 6px 22.8px;
  justify-content: flex-end;
  align-items: flex-start;
  min-width: 150px;
  background-color: var(--seagull);
  border-radius: 16px;
  border: 1px none;
`;

const HeroButton1 = styled.div`
  ${RalewayBoldWhite26px}
  width: 104px;
  min-height: 28px;
  text-align: center;
  letter-spacing: 0;
`;

const ButtonLogin1 = styled.div`
  .navbar-1.navbar-3 & {
    background-color: var(--purple-heart);
  }
`;

const ButtonLogin2 = styled.div`
  .navbar-1.navbar-4 & {
    background-color: var(--orchid);
  }
`;

const ButtonLogin3 = styled.div`
  .navbar-1.navbar-5 & {
    background-color: var(--portage);
  }
`;

const ButtonLogin4 = styled.div`
  .navbar-1.navbar-6 & {
    background-color: var(--fern);
  }
`;

const ButtonLogin5 = styled.div`
  .navbar-1.navbar-7 & {
    background-color: var(--mercury);
  }
`;

const ButtonLogin6 = styled.div`
  .navbar-1.navbar-8 & {
    background-color: var(--dairy-cream);
  }
`;

const ButtonLogin7 = styled.div`
  .navbar-1.navbar-9 & {
    background-color: var(--anzac);
  }
`;

const ButtonLogin8 = styled.div`
  .navbar-1.navbar-10 & {
    background-color: var(--mandy);
  }
`;

const ButtonLogin9 = styled.div`
  .navbar-1.navbar-11 & {
    background-color: var(--mexican-red);
  }
`;

const ButtonLogin10 = styled.div`
  .navbar-1.navbar-12 & {
    background-color: var(--yellow-sunshine);
  }
`;

const ButtonLogin11 = styled.div`
  .navbar-1.navbar-13 & {
    background-color: var(--turquoise-blue);
  }
`;

export default Navbar3;
