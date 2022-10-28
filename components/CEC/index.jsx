import React from "react";
import Navbar7 from "../Navbar7";
import Button25 from "../Button25";
import Products from "../Products";
import Tools from "../Tools";
import Avatars from "../Avatars";
import DevEnvironment from "../DevEnvironment";
import Button26 from "../Button26";
import Footer11 from "../Footer11";
import "./CEC.css";

function CEC(props) {
  const {
    creativeECommerceCo,
    thisWeb30Applica,
    contribute,
    cecLogo,
    spanText1,
    spanText2,
    learnHow,
    navbar7Props,
    button25Props,
    productsProps,
    toolsProps,
    avatarsProps,
    devEnvironmentProps,
    button26Props,
    footer11Props,
  } = props;

  return (
    <div className="cec screen">
      <div className="cec-1">
        <div className="body-24">
          <Navbar7
            className={navbar7Props.className}
            buttonLoginProps={navbar7Props.buttonLoginProps}
            buttonWalletProps={navbar7Props.buttonWalletProps}
          />
          <div className="hero-20">
            <div className="flex-col-15">
              <div className="creative-e-commerce-co raleway-normal-cape-cod-80px">{creativeECommerceCo}</div>
              <p className="this-web-30-applica-2 raleway-normal-cape-cod-26px">{thisWeb30Applica}</p>
              <div className="flex-row-91">
                <div className="overlap-group-87">
                  <div className="contribute-2 raleway-bold-white-32px">{contribute}</div>
                </div>
                <Button25>{button25Props.children}</Button25>
              </div>
            </div>
            <img className="cec-logo-15" src={cecLogo} alt="cec-logo" />
          </div>
          <Products className={productsProps.className} downloadsProps={productsProps.downloadsProps} />
          <Tools
            className={toolsProps.className}
            packages1Props={toolsProps.packages1Props}
            packages2Props={toolsProps.packages2Props}
            packages3Props={toolsProps.packages3Props}
          />
          <div className="team-2">
            <div className="become-a-contributor-2 raleway-normal-white-100px">
              <span className="raleway-normal-cape-cod-100px">{spanText1}</span>
              <span className="span1-9">{spanText2}</span>
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
          <div className="live-developing-2">
            <DevEnvironment className={devEnvironmentProps.className} />
            <div className="flex-row-92">
              <div className="overlap-group-88">
                <div className="learn-how-2 valign-text-middle raleway-bold-white-32px">{learnHow}</div>
              </div>
              <Button26>{button26Props.children}</Button26>
            </div>
          </div>
          <Footer11 className={footer11Props.className} footerMenu2Props={footer11Props.footerMenu2Props} />
        </div>
      </div>
    </div>
  );
}

export default CEC;
