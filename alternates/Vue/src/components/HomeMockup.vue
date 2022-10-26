<template>
  <div class="home-mockup screen">
    <navbar
      :dashboardLayout="navbarProps.dashboardLayout"
      :hireMe="navbarProps.hireMe"
      :github="navbarProps.github"
      :openSource="navbarProps.openSource"
      :organizations="navbarProps.organizations"
    />
    <hero22 :heroInfoProps="hero22Props.heroInfoProps" />
    <div class="about-me">
      <about-me22 />
      <div class="snippets">
        <div class="overlap-group4">
          <div class="overlap-group2 raleway-bold-white-20px">
            <div class="subscribe-to-get-access valign-text-middle">{{ subscribeToGetAccess }}</div>
            <div class="overlap-group">
              <input
                class="enter-your-email raleway-bold-seagull-20px"
                name="enteryouremail"
                :placeholder="inputPlaceholder"
                :type="inputType"
              />
            </div>
            <div class="overlap-group1">
              <div class="submit valign-text-middle">{{ submit }}</div>
            </div>
          </div>
          <div class="overlap-group3">
            <p class="function-snippets raleway-bold-white-16px" v-html="functionSnippets"></p>
          </div>
          <div class="snippet-of-the-day valign-text-middle raleway-bold-white-36px">{{ snippetOfTheDay }}</div>
        </div>
      </div>
    </div>
    <skills4 />
    <open-source-contribution3 />
    <div class="hire-me">
      <text />
      <div class="click-up"></div>
    </div>
    <private-repositories4 />
    <bitcellular5 :bitcellular2Props="bitcellular5Props.bitcellular2Props" />
    <blockchain :blockchain2Props="blockchain4Props.blockchain2Props" />
    <socials />
    <recommended-material :postsProps="recommendedMaterial3Props.postsProps" />
    <x-footer :image8="footerProps.image8" :footerMenuProps="footerProps.footerMenuProps" />
  </div>
</template>

<script>
import Navbar from "./Navbar";
import Hero22 from "./Hero22";
import AboutMe22 from "./AboutMe22";
import Skills4 from "./Skills4";
import OpenSourceContribution3 from "./OpenSourceContribution3";
import Text from "./Text";
import PrivateRepositories4 from "./PrivateRepositories4";
import Bitcellular5 from "./Bitcellular5";
import Blockchain from "./Blockchain";
import Socials from "./Socials";
import RecommendedMaterial from "./RecommendedMaterial";
import xFooter from "./xFooter";
export default {
  name: "HomeMockup",
  components: {
    Navbar,
    Hero22,
    AboutMe22,
    Skills4,
    OpenSourceContribution3,
    Text,
    PrivateRepositories4,
    Bitcellular5,
    Blockchain,
    Socials,
    RecommendedMaterial,
    xFooter,
  },
  props: [
    "subscribeToGetAccess",
    "inputType",
    "inputPlaceholder",
    "submit",
    "functionSnippets",
    "snippetOfTheDay",
    "navbarProps",
    "hero22Props",
    "bitcellular5Props",
    "blockchain4Props",
    "recommendedMaterial3Props",
    "footerProps",
  ],
};
</script>

<style lang="sass">
@import '../../variables'

.home-mockup
  align-items: center
  background-color: $material-themereferrorerror100
  border: 1px none
  display: flex
  flex-direction: column
  height: 100vh
  justify-content: center
  min-height: 7269px
  min-width: 1512px
  position: relative
  width: 100%

.about-me
  background-color: $material-themereferrorerror100
  border: 1px none
  display: flex
  flex-direction: column
  gap: 118.3px
  height: 982px
  min-width: 1512px
  position: relative

.snippets
  align-items: flex-start
  display: flex
  margin-left: 129px
  min-width: 1255px

.overlap-group4
  border-radius: 16px
  height: 371px
  position: relative
  width: 1253px

.overlap-group2
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

.subscribe-to-get-access
  height: 31px
  letter-spacing: 0
  line-height: normal
  margin-bottom: 12.14px
  text-align: center
  width: 296px

.overlap-group
  align-items: flex-start
  background-color: $material-themereferrorerror100
  border-radius: 16px
  display: flex
  height: 57px
  margin-left: 71px
  min-width: 559px
  padding: 12.4px 35.6px

.enter-your-email
  background-color: transparent
  border: 0
  height: 31px
  letter-spacing: 0
  line-height: normal
  padding: 0
  width: 296px

.enter-your-email::placeholder
  color: #7dbee399

.overlap-group1
  align-items: flex-end
  background-color: $white
  border-radius: 16px
  display: flex
  height: 57px
  justify-content: flex-end
  margin-left: 38px
  min-width: 179px
  padding: 6.2px 23.4px

.submit
  height: 44px
  letter-spacing: 0
  line-height: normal
  text-align: center
  width: 132px

.overlap-group3
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

.function-snippets
  letter-spacing: 0
  line-height: normal
  min-height: 97px
  width: 1046px

.snippet-of-the-day
  height: 51px
  left: 444px
  letter-spacing: 0
  line-height: normal
  position: absolute
  text-align: center
  top: 35px
  width: 367px

.hire-me
  background-color: $material-themereferrorerror100
  border: 1px none
  display: flex
  flex-direction: column
  gap: 30px
  height: 1046px
  min-width: 1512px
  position: relative

.click-up
  height: 753px
  margin-left: 489px
  width: 533px
</style>
