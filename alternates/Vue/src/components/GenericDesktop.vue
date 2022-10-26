<template>
  <form class="generic-desktop screen" name="form1" action="form1" method="post">
    <div class="body-1">
      <navbar3 :linksProps="navbar3Props.linksProps" />
      <hero2 :heroInfoProps="hero2Props.heroInfoProps" />
      <div class="about-me-7">
        <about-me22 :className="aboutMe22Props.className" />
        <div class="snippets-7">
          <div class="overlap-group4-2">
            <div class="overlap-group2-11 raleway-bold-white-20px">
              <div class="subscribe-to-get-access-8 valign-text-middle">{{ subscribeToGetAccess }}</div>
              <div class="overlap-group-34">
                <input
                  class="enter-your-email-2 raleway-bold-seagull-20px"
                  name="enteryouremail"
                  :placeholder="inputPlaceholder"
                  :type="inputType"
                />
              </div>
              <div class="overlap-group1-12">
                <a href="javascript:SubmitForm('form1')"> <div class="rectangle-7-6"></div></a>
                <div class="submit-2 valign-text-middle">{{ submit }}</div>
              </div>
            </div>
            <div class="overlap-group3-3">
              <p class="function-snippets-2 raleway-bold-white-16px" v-html="functionSnippets"></p>
            </div>
            <div class="snippet-of-the-day-8 valign-text-middle raleway-bold-white-36px">{{ snippetOfTheDay }}</div>
          </div>
        </div>
      </div>
      <skills2 />
      <open-source-contribution2 :openSourceProps="openSourceContribution2Props.openSourceProps" />
      <hire-me :textProps="hireMeProps.textProps" />
      <private-repositories3 :privateRepositories2Props="privateRepositories3Props.privateRepositories2Props" />
      <bitcellular3 :bitcellular2Props="bitcellular3Props.bitcellular2Props" />
      <blockchain3 :blockchain2Props="blockchain3Props.blockchain2Props" />
      <socials2 :iconsProps="socials2Props.iconsProps" />
      <recommended-material2
        :text2Props="recommendedMaterial2Props.text2Props"
        :postsProps="recommendedMaterial2Props.postsProps"
      />
      <x-footer3 :xButton1Props="xFooter3Props.xButton1Props" :xButton2Props="xFooter3Props.xButton2Props" />
    </div>
  </form>
</template>

<script>
import Navbar3 from "./Navbar3";
import Hero2 from "./Hero2";
import AboutMe22 from "./AboutMe22";
import Skills2 from "./Skills2";
import OpenSourceContribution2 from "./OpenSourceContribution2";
import HireMe from "./HireMe";
import PrivateRepositories3 from "./PrivateRepositories3";
import Bitcellular3 from "./Bitcellular3";
import Blockchain3 from "./Blockchain3";
import Socials2 from "./Socials2";
import RecommendedMaterial2 from "./RecommendedMaterial2";
import xFooter3 from "./xFooter3";
export default {
  name: "GenericDesktop",
  components: {
    Navbar3,
    Hero2,
    AboutMe22,
    Skills2,
    OpenSourceContribution2,
    HireMe,
    PrivateRepositories3,
    Bitcellular3,
    Blockchain3,
    Socials2,
    RecommendedMaterial2,
    xFooter3,
  },
  props: [
    "subscribeToGetAccess",
    "inputType",
    "inputPlaceholder",
    "submit",
    "functionSnippets",
    "snippetOfTheDay",
    "navbar3Props",
    "hero2Props",
    "aboutMe22Props",
    "openSourceContribution2Props",
    "hireMeProps",
    "privateRepositories3Props",
    "bitcellular3Props",
    "blockchain3Props",
    "socials2Props",
    "recommendedMaterial2Props",
    "xFooter3Props",
  ],
};
</script>

<style lang="sass">
@import '../../variables'

.generic-desktop
  background-color: $material-themereferrorerror100
  border: 1px none
  display: flex
  height: 100vh
  min-height: 7273px
  min-width: 1440px
  width: 100%

.body-1
  background-color: $material-themereferrorerror100
  border: 1px none
  display: flex
  flex-direction: column
  height: 7273px
  overflow: hidden
  position: relative
  width: 1440px

.about-me-7
  background-color: $material-themereferrorerror100
  border: 1px none
  display: flex
  flex-direction: column
  gap: 111.3px
  height: 982px
  position: relative

.snippets-7
  align-items: flex-start
  display: flex
  margin-left: 95px
  min-width: 1255px

.overlap-group4-2
  border-radius: 16px
  height: 371px
  position: relative
  width: 1253px

.overlap-group2-11
  align-items: flex-end
  background-color: $seagull
  border-radius: 16px
  display: flex
  height: 371px
  justify-content: flex-end
  left: 0
  min-width: 1253px
  padding: 42.8px 54.6px
  position: absolute
  top: 0

.subscribe-to-get-access-8
  height: 31px
  letter-spacing: 0
  line-height: normal
  margin-bottom: 12.14px
  text-align: center
  width: 296px

.overlap-group-34
  align-items: flex-start
  background-color: $material-themereferrorerror100
  border-radius: 16px
  display: flex
  height: 57px
  margin-left: 71px
  min-width: 559px
  padding: 12.4px 35.6px

.enter-your-email-2
  background-color: transparent
  border: 0
  height: 31px
  letter-spacing: 0
  line-height: normal
  padding: 0
  width: 296px

.enter-your-email-2::placeholder
  color: #7dbee399

.overlap-group1-12
  border-radius: 16px
  height: 57px
  margin-left: 38px
  position: relative
  width: 179px

.rectangle-7-6
  background-color: $white
  border: 1px none
  border-radius: 16px
  cursor: pointer
  height: 57px
  left: 0
  position: absolute
  top: 0
  width: 179px

.submit-2
  height: 44px
  left: 24px
  letter-spacing: 0
  line-height: normal
  position: absolute
  text-align: center
  top: 6px
  width: 132px

.overlap-group3-3
  align-items: flex-end
  background-color: $white
  border-radius: 16px
  display: flex
  height: 124px
  left: 84px
  min-width: 1102px
  padding: 12.8px 27.3px
  position: absolute
  top: 120px

.function-snippets-2
  letter-spacing: 0
  line-height: normal
  min-height: 97px
  width: 1046px

.snippet-of-the-day-8
  height: 51px
  left: 444px
  letter-spacing: 0
  line-height: normal
  position: absolute
  text-align: center
  top: 35px
  width: 367px
</style>
