import React from "react";
import Navbar22 from "../Navbar22";
import Hero from "../Hero";
import AboutMe22 from "../AboutMe22";
import Skills from "../Skills";
import OpenSourceContribution from "../OpenSourceContribution";
import Text from "../Text";
import PrivateRepositories from "../PrivateRepositories";
import Bitcellular from "../Bitcellular";
import Blockchain from "../Blockchain";
import Socials from "../Socials";
import RecommendedMaterial from "../RecommendedMaterial";
import Footer3 from "../Footer3";
import "./GenericDesktop.css";

function GenericDesktop(props) {
  const {
    subscribeToGetAccess,
    inputType,
    inputPlaceholder,
    submit,
    functionSnippets,
    snippetOfTheDay,
    navbar22Props,
    heroProps,
    aboutMe22Props,
    openSourceContributionProps,
    textProps,
    privateRepositoriesProps,
    bitcellularProps,
    blockchainProps,
    socialsProps,
    recommendedMaterialProps,
    footer3Props,
  } = props;

  return (
    <form className="generic-desktop screen" name="form1" action="form1" method="post">
      <div className="body-1">
        <Navbar22 dashboardLayout={navbar22Props.dashboardLayout} linksProps={navbar22Props.linksProps} />
        <Hero heroInfoProps={heroProps.heroInfoProps} />
        <div className="about-me-7">
          <AboutMe22 className={aboutMe22Props.className} />
          <div className="snippets-8">
            <div className="overlap-group4-2">
              <div className="overlap-group2-11 raleway-bold-white-20px">
                <div className="subscribe-to-get-access-9 valign-text-middle">{subscribeToGetAccess}</div>
                <div className="overlap-group-33">
                  <input
                    className="enter-your-email-2 raleway-bold-seagull-20px"
                    name="enteryouremail"
                    placeholder={inputPlaceholder}
                    type={inputType}
                  />
                </div>
                <div className="overlap-group1-12">
                  <a href="javascript:SubmitForm('form1')">
                    <div className="rectangle-7-7"></div>
                  </a>
                  <div className="submit-2 valign-text-middle">{submit}</div>
                </div>
              </div>
              <div className="overlap-group3-3">
                <p className="function-snippets-2 raleway-bold-white-16px">{functionSnippets}</p>
              </div>
              <div className="snippet-of-the-day-9 valign-text-middle raleway-bold-white-36px">{snippetOfTheDay}</div>
            </div>
          </div>
        </div>
        <Skills />
        <OpenSourceContribution openSourceProps={openSourceContributionProps.openSourceProps} />
        <div className="hire-me-20">
          <Text className={textProps.className} />
          <div className="rectangle-11-1"></div>
        </div>
        <PrivateRepositories privateRepositories2Props={privateRepositoriesProps.privateRepositories2Props} />
        <Bitcellular bitcellular2Props={bitcellularProps.bitcellular2Props} />
        <Blockchain blockchain2Props={blockchainProps.blockchain2Props} />
        <Socials iconsProps={socialsProps.iconsProps} />
        <RecommendedMaterial
          postsProps={recommendedMaterialProps.postsProps}
          postsProps2={recommendedMaterialProps.postsProps2}
        />
        <Footer3
          image8={footer3Props.image8}
          snippetOfTheDay={footer3Props.snippetOfTheDay}
          subscribeToGetAccess={footer3Props.subscribeToGetAccess}
          enterEmailHere={footer3Props.enterEmailHere}
          submit={footer3Props.submit}
          footerMenu2Props={footer3Props.footerMenu2Props}
        />
      </div>
    </form>
  );
}

export default GenericDesktop;
