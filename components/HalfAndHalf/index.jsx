import React from "react";
import Navbar7 from "../Navbar7";
import Button29 from "../Button29";
import Products from "../Products";
import Tools from "../Tools";
import Avatars2 from "../Avatars2";
import DevEnvironment from "../DevEnvironment";
import Button210 from "../Button210";
import Footer11 from "../Footer11";
import "./HalfAndHalf.css";

function HalfAndHalf(props) {
  const {
    halfHalf,
    thisWeb30Applica,
    contribute,
    logoHalfAndHalf,
    spanText1,
    spanText2,
    learnHow,
    navbar7Props,
    button29Props,
    productsProps,
    toolsProps,
    avatars2Props,
    devEnvironmentProps,
    button210Props,
    footer11Props,
  } = props;

  return (
    <div className="half-and-half screen">
      <div className="half-and-half-1">
        <div className="body-26">
          <Navbar7
            className={navbar7Props.className}
            buttonLoginProps={navbar7Props.buttonLoginProps}
            buttonWalletProps={navbar7Props.buttonWalletProps}
          />
          <div className="hero-22">
            <div className="flex-col-17">
              <div className="half-half raleway-normal-cape-cod-80px">{halfHalf}</div>
              <p className="this-web-30-applica-4 raleway-normal-cape-cod-26px">{thisWeb30Applica}</p>
              <div className="flex-row-95">
                <div className="overlap-group-93">
                  <div className="contribute-4 raleway-bold-white-32px">{contribute}</div>
                </div>
                <Button29>{button29Props.children}</Button29>
              </div>
            </div>
            <img className="logo-half-and-half-2" src={logoHalfAndHalf} alt="logo-half-and-half" />
          </div>
          <Products className={productsProps.className} downloadsProps={productsProps.downloadsProps} />
          <Tools
            className={toolsProps.className}
            packages1Props={toolsProps.packages1Props}
            packages2Props={toolsProps.packages2Props}
            packages3Props={toolsProps.packages3Props}
          />
          <div className="team-4">
            <div className="become-a-contributor-4 raleway-normal-white-100px">
              <span className="raleway-normal-cape-cod-100px">{spanText1}</span>
              <span className="span1-11">{spanText2}</span>
            </div>
            <Avatars2
              user71Props={avatars2Props.user71Props}
              user72Props={avatars2Props.user72Props}
              user73Props={avatars2Props.user73Props}
              user74Props={avatars2Props.user74Props}
              user75Props={avatars2Props.user75Props}
              user76Props={avatars2Props.user76Props}
              user77Props={avatars2Props.user77Props}
            />
          </div>
          <div className="live-developing-4">
            <DevEnvironment className={devEnvironmentProps.className} />
            <div className="flex-row-96">
              <div className="overlap-group-94">
                <div className="learn-how-4 valign-text-middle raleway-bold-white-32px">{learnHow}</div>
              </div>
              <Button210>{button210Props.children}</Button210>
            </div>
          </div>
          <Footer11 className={footer11Props.className} footerMenu2Props={footer11Props.footerMenu2Props} />
        </div>
      </div>
    </div>
  );
}

export default HalfAndHalf;
