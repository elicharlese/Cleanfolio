import React from "react";
import styled from "styled-components";
import { RalewayBoldWhite26px, RalewayBoldCapeCod20px } from "../../../styledMixins";


function Navbar(props) {
  const { dashboardLayout, hireMe, github, openSource, organizations, heroButton1, heroButton2 } = props;

  return (
    <Navbar1>
      <DashboardLayout src={dashboardLayout} alt="Dashboard Layout" />
      <HIREME>{hireMe}</HIREME>
      <GITHUB>{github}</GITHUB>
      <OPENSOURCE>{openSource}</OPENSOURCE>
      <ORGANIZATIONS>{organizations}</ORGANIZATIONS>
      <ButtonLogin>
        <HeroButton>{heroButton1}</HeroButton>
      </ButtonLogin>
      <ButtonWallet>
        <HeroButton1>{heroButton2}</HeroButton1>
      </ButtonWallet>
    </Navbar1>
  );
}

const Navbar1 = styled.div`
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

const Navbar2 = styled.div`
  ${RalewayBoldCapeCod20px}
  width: 1512px;
  height: 90px;
  display: flex;
  padding: 0 23px;
  align-items: center;
  background-color: var(--material-themereferrorerror100);
  border: 1px none;
`;

const DashboardLayout1 = styled.img`
  width: 60px;
  height: 60px;
`;

const HIREME1 = styled.div`
  min-height: 23px;
  margin-left: 539px;
  margin-bottom: 1px;
  min-width: 81px;
  text-align: center;
  letter-spacing: 0;
`;

const GITHUB1 = styled.div`
  min-height: 23px;
  margin-left: 19px;
  margin-bottom: 1px;
  min-width: 77px;
  text-align: center;
  letter-spacing: 0;
`;

const OPENSOURCE1 = styled.div`
  min-height: 23px;
  margin-left: 19px;
  margin-bottom: 3px;
  min-width: 145px;
  text-align: center;
  letter-spacing: 0;
`;

const ORGANIZATIONS1 = styled.div`
  min-height: 23px;
  margin-left: 19px;
  margin-bottom: 1px;
  min-width: 163px;
  text-align: center;
  letter-spacing: 0;
`;

const ButtonLogin1 = styled.div`
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

const HeroButton2 = styled.div`
  ${RalewayBoldWhite26px}
  width: 74px;
  min-height: 28px;
  text-align: center;
  letter-spacing: 0;
`;

const ButtonWallet1 = styled.div`
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

const HeroButton3 = styled.div`
  ${RalewayBoldWhite26px}
  width: 104px;
  min-height: 28px;
  text-align: center;
  letter-spacing: 0;
`;

export default Navbar;
