import React from "react";
// import Navbar7 from "../Navbar7";
import Button23 from "../Button23";
import Products from "../Products";
import Tools from "../Tools";
import User7 from "../User7";
import FooterMenu22 from "../FooterMenu22";
import DevEnvironment from "../DevEnvironment";
import Button24 from "../Button24";
import "./Bitcellular4.css";

function Bitcellular4(props) {
  const {
    bitcellular,
    thisWeb30Applica,
    contribute,
    logoBitcell,
    spanText1,
    spanText2,
    image8,
    snippetOfTheDay,
    subscribeToGetAccess,
    learnHow,
    navbar7Props,
    button23Props,
    productsProps,
    toolsProps,
    user71Props,
    user72Props,
    user73Props,
    user74Props,
    user75Props,
    user76Props,
    user77Props,
    footerMenu22Props,
    devEnvironmentProps,
    button24Props,
  } = props;

  return (
    <div className="bitcellular-17 screen">
      <div className="bitcellular-18">
        <div className="body-23">
          <Navbar7
            className={navbar7Props.className}
            buttonLoginProps={navbar7Props.buttonLoginProps}
            buttonWalletProps={navbar7Props.buttonWalletProps}
          />
          <div className="hero-19">
            <div className="flex-col-14">
              <div className="bitcellular-19 raleway-normal-cape-cod-100px">{bitcellular}</div>
              <p className="this-web-30-applica-1 raleway-normal-cape-cod-26px">{thisWeb30Applica}</p>
              <div className="flex-row-87">
                <div className="overlap-group-84">
                  <div className="contribute-1 raleway-bold-white-32px">{contribute}</div>
                </div>
                <Button23>{button23Props.children}</Button23>
              </div>
            </div>
            <img className="logo-bitcell-2" src={logoBitcell} alt="logo-bitcell" />
          </div>
          <Products className={productsProps.className} downloadsProps={productsProps.downloadsProps} />
          <Tools
            className={toolsProps.className}
            packages1Props={toolsProps.packages1Props}
            packages2Props={toolsProps.packages2Props}
            packages3Props={toolsProps.packages3Props}
          />
          <div className="team-1">
            <div className="become-a-contributor-1 raleway-normal-white-100px">
              <span className="raleway-normal-cape-cod-100px">{spanText1}</span>
              <span className="span1-8">{spanText2}</span>
            </div>
            <div className="overlap-group1-32">
              <div className="avatars-9">
                <User7 ellipse2={user71Props.ellipse2} className={user71Props.className} />
                <User7 ellipse2={user72Props.ellipse2} className={user72Props.className} />
                <User7 ellipse2={user73Props.ellipse2} className={user73Props.className} />
                <User7 ellipse2={user74Props.ellipse2} className={user74Props.className} />
                <User7 ellipse2={user75Props.ellipse2} className={user75Props.className} />
                <div className="user_-container">
                  <User7 ellipse2={user76Props.ellipse2} className={user76Props.className} />
                  <User7 ellipse2={user77Props.ellipse2} className={user77Props.className} />
                </div>
              </div>
              <img className="vector-10" src="/img/vector-2@1x.svg" alt="Vector" />
            </div>
          </div>
          <div className="overlap-group4-10">
            <div className="footer-38">
              <FooterMenu22
                x3RuptLogo1={footerMenu22Props.x3RuptLogo1}
                button1={footerMenu22Props.button1}
                button2={footerMenu22Props.button2}
              />
              <div className="flex-row-88">
                <img className="image-8-25" src={image8} alt="image 8" />
                <div className="overlap-group-85">
                  <div className="snippet-of-the-day-33 valign-text-middle raleway-bold-white-36px">
                    {snippetOfTheDay}
                  </div>
                  <div className="flex-row-89">
                    <div className="subscribe-to-get-access-33 valign-text-middle raleway-bold-white-20px">
                      {subscribeToGetAccess}
                    </div>
                    <div className="rectangle-6-24"></div>
                    <div className="rectangle-7-25"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="live-developing-1">
              <DevEnvironment className={devEnvironmentProps.className} />
              <div className="flex-row-90">
                <div className="overlap-group-86">
                  <div className="learn-how-1 valign-text-middle raleway-bold-white-32px">{learnHow}</div>
                </div>
                <Button24>{button24Props.children}</Button24>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bitcellular4;
