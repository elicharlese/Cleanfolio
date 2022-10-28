import React from "react";
import Navbar7 from "../Navbar7";
import Button27 from "../Button27";
import Products from "../Products";
import Tools from "../Tools";
import Avatars2 from "../Avatars2";
import DevEnvironment from "../DevEnvironment";
import Button28 from "../Button28";
import Footer11 from "../Footer11";
import "./Cheers.css";

function Cheers(props) {
  const {
    cheers,
    thisWeb30Applica,
    contribute,
    logoCheers,
    spanText1,
    spanText2,
    learnHow,
    navbar7Props,
    button27Props,
    productsProps,
    toolsProps,
    avatars2Props,
    devEnvironmentProps,
    button28Props,
    footer11Props,
  } = props;

  return (
    <div className="cheers screen">
      <div className="cheers-1">
        <div className="body-25">
          <Navbar7
            className={navbar7Props.className}
            buttonLoginProps={navbar7Props.buttonLoginProps}
            buttonWalletProps={navbar7Props.buttonWalletProps}
          />
          <div className="hero-21">
            <div className="flex-col-16">
              <div className="cheers-2 raleway-normal-cape-cod-80px">{cheers}</div>
              <p className="this-web-30-applica-3 raleway-normal-cape-cod-26px">{thisWeb30Applica}</p>
              <div className="flex-row-93">
                <div className="overlap-group-89">
                  <div className="contribute-3 raleway-bold-white-32px">{contribute}</div>
                </div>
                <Button27>{button27Props.children}</Button27>
              </div>
            </div>
            <img className="logo-cheers-2" src={logoCheers} alt="logo-cheers" />
          </div>
          <Products className={productsProps.className} downloadsProps={productsProps.downloadsProps} />
          <Tools
            className={toolsProps.className}
            packages1Props={toolsProps.packages1Props}
            packages2Props={toolsProps.packages2Props}
            packages3Props={toolsProps.packages3Props}
          />
          <div className="team-3">
            <div className="become-a-contributor-3 raleway-normal-white-100px">
              <span className="raleway-normal-cape-cod-100px">{spanText1}</span>
              <span className="span1-10">{spanText2}</span>
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
          <div className="live-developing-3">
            <DevEnvironment className={devEnvironmentProps.className} />
            <div className="flex-row-94">
              <div className="overlap-group-90">
                <div className="learn-how-3 valign-text-middle raleway-bold-white-32px">{learnHow}</div>
              </div>
              <Button28>{button28Props.children}</Button28>
            </div>
          </div>
          <Footer11 className={footer11Props.className} footerMenu2Props={footer11Props.footerMenu2Props} />
        </div>
      </div>
    </div>
  );
}

export default Cheers;
