import React from "react";
import Navbar7 from "../Navbar7";
import Button219 from "../Button219";
import Products from "../Products";
import Tools from "../Tools";
import Avatars from "../Avatars";
import DevEnvironment from "../DevEnvironment";
import Button220 from "../Button220";
import Footer11 from "../Footer11";
import "./Blockify.css";

function Blockify(props) {
  const {
    blockify,
    thisWeb30Applica,
    contribute,
    logoBlockify,
    spanText1,
    spanText2,
    learnHow,
    navbar7Props,
    button219Props,
    productsProps,
    toolsProps,
    avatarsProps,
    devEnvironmentProps,
    button220Props,
    footer11Props,
  } = props;

  return (
    <div className="blockify screen">
      <div className="blockify-1">
        <div className="body-31">
          <Navbar7
            className={navbar7Props.className}
            buttonLoginProps={navbar7Props.buttonLoginProps}
            buttonWalletProps={navbar7Props.buttonWalletProps}
          />
          <div className="hero-27">
            <div className="flex-col-22">
              <div className="blockify-2 raleway-normal-cape-cod-80px">{blockify}</div>
              <p className="this-web-30-applica-9 raleway-normal-cape-cod-26px">{thisWeb30Applica}</p>
              <div className="flex-row-108">
                <div className="overlap-group-104">
                  <div className="contribute-9 raleway-bold-white-32px">{contribute}</div>
                </div>
                <Button219>{button219Props.children}</Button219>
              </div>
            </div>
            <img className="logo-blockify-2" src={logoBlockify} alt="logo-blockify" />
          </div>
          <Products className={productsProps.className} downloadsProps={productsProps.downloadsProps} />
          <Tools
            className={toolsProps.className}
            packages1Props={toolsProps.packages1Props}
            packages2Props={toolsProps.packages2Props}
            packages3Props={toolsProps.packages3Props}
          />
          <div className="team-9">
            <div className="become-a-contributor-9 raleway-normal-white-100px">
              <span className="raleway-normal-cape-cod-100px">{spanText1}</span>
              <span className="span1-16">{spanText2}</span>
            </div>
            <Avatars
              user71Props={avatarsProps.user71Props}
              user72Props={avatarsProps.user72Props}
              user73Props={avatarsProps.user73Props}
              user74Props={avatarsProps.user74Props}
              user75Props={avatarsProps.user75Props}
              user76Props={avatarsProps.user76Props}
              user77Props={avatarsProps.user77Props}
            />
          </div>
          <div className="live-developing-9">
            <DevEnvironment className={devEnvironmentProps.className} />
            <div className="flex-row-109">
              <div className="overlap-group-105">
                <div className="learn-how-9 valign-text-middle raleway-bold-white-32px">{learnHow}</div>
              </div>
              <Button220>{button220Props.children}</Button220>
            </div>
          </div>
          <Footer11 className={footer11Props.className} footerMenu2Props={footer11Props.footerMenu2Props} />
        </div>
      </div>
    </div>
  );
}

export default Blockify;
