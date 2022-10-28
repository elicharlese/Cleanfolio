import React from "react";
import UserGithub from "../UserGithub";
import ButtonSignup from "../ButtonSignup";
import "./BitcellSignup.css";

function BitcellSignup(props) {
  const { userGithubProps } = props;

  return (
    <div className="bitcell-signup-1">
      <UserGithub>{userGithubProps.children}</UserGithub>
      <div className="user-email-1">
        <div className="overlap-group1-2">
          <div className="email-address-1 valign-text-middle raleway-normal-cape-cod-22px">Email Address</div>
        </div>
      </div>
      <ButtonSignup />
    </div>
  );
}

export default BitcellSignup;
