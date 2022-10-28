import React from "react";
import ButtonLogin from "../ButtonLogin";
import ButtonWallet from "../ButtonWallet";
import HeroInfo from "../HeroInfo";
import ClassroomContainers2 from "../ClassroomContainers2";
import XFooter from "../XFooter";
import "./Financer.css";

function Financer(props) {
  const {
    dashboardLayout,
    hireMe,
    github,
    openSource,
    organizations,
    letsDiscussYourPortfolio,
    planner,
    bookAnAppointment,
    overlapGroup3,
    bot,
    decentralizedFinances,
    spanText1,
    spanText2,
    spanText3,
    spanText4,
    spanText5,
    heroInfoProps,
    classroomContainers2Props,
    footerProps,
  } = props;

  return (
    <div className="financer screen">
      <div className="body-34">
        <div className="flex-col-25">
          <div className="navbar-26 raleway-bold-cape-cod-20px">
            <img className="dashboard-layout-25" src={dashboardLayout} alt="Dashboard Layout" />
            <div className="hire-me-60">{hireMe}</div>
            <div className="github-47">{github}</div>
            <div className="open-source-59">{openSource}</div>
            <div className="organizations-49">{organizations}</div>
            <ButtonLogin />
            <ButtonWallet />
          </div>
          <div className="hero-30">
            <div className="overlap-group5-17">
              <img
                className="componentlottiehttps-4"
                src="/img/-component-lottie-https---assets4-lottiefiles-com-packages-lf20-@1x.svg"
                alt="component:lottie:https://assets4.lottiefiles.com/packages/lf20_efx3aac9.json]"
              />
              <HeroInfo
                spanText1={heroInfoProps.spanText1}
                spanText2={heroInfoProps.spanText2}
                spanText3={heroInfoProps.spanText3}
                name={heroInfoProps.name}
                className={heroInfoProps.className}
                buttonProps={heroInfoProps.buttonProps}
              />
            </div>
          </div>
          <div className="consultations">
            <div className="collaborate-container">
              <img className="collaborate-img-1" src="/img/-collaborate-img@1x.svg" alt="collaborate-img" />
              <div className="collaborate-text">
                <div className="lets-discuss-your-portfolio valign-text-middle raleway-normal-cape-cod-100px">
                  {letsDiscussYourPortfolio}
                </div>
                <div className="appointments">
                  <img className="planner" src={planner} alt="Planner" />
                  <div className="book-an-appointment valign-text-middle raleway-normal-cape-cod-32px">
                    {bookAnAppointment}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bots">
            <div className="overlap-group3-14" style={{ backgroundImage: `url(${overlapGroup3})` }}>
              <img className="bot" src={bot} alt="Bot" />
            </div>
          </div>
          <div className="management-steps">
            <div className="decentralized-finances valign-text-middle raleway-normal-cape-cod-100px">
              {decentralizedFinances}
            </div>
            <p className="building-a-investmen valign-text-middle raleway-normal-black-22px">
              <span>
                <span className="raleway-normal-black-22px">{spanText1}</span>
                <span className="span-21 raleway-normal-black-22px">{spanText2}</span>
                <span className="raleway-normal-black-22px">{spanText3}</span>
                <span className="span-21 raleway-normal-black-22px">{spanText4}</span>
                <span className="raleway-normal-black-22px">{spanText5}</span>
              </span>
            </p>
            <ClassroomContainers2 {...classroomContainers2Props} />
          </div>
          <XFooter
            image8={footerProps.image8}
            className={footerProps.className}
            footerMenuProps={footerProps.footerMenuProps}
          />
        </div>
      </div>
    </div>
  );
}

export default Financer;
