<template>
  <div class="ipad-mini-ipad-9-7-portrait screen">
    <div class="body-2">
      <navbar4 />
      <div class="hero-5">
        <div class="overlap-group5-1">
          <img
            class="componentlottiehttps-1"
            :src="componentLottieHttpsAssets8Lottiefi"
            alt="component:lottie:https://assets8.lottiefiles.com/packages/lf20_vfuqgv0l.json]"
          /><hero-info
            :spanText1="heroInfoProps.spanText1"
            :spanText2="heroInfoProps.spanText2"
            :spanText3="heroInfoProps.spanText3"
            :name="heroInfoProps.name"
            :className="heroInfoProps.className"
            :buttonProps="heroInfoProps.buttonProps"
          />
        </div>
      </div>
      <div class="about-me-8">
        <about-me2 />
        <div class="snippets-8">
          <div class="overlap-group4-3">
            <div class="overlap-group2-12 raleway-bold-white-20px">
              <div class="subscribe-to-get-access-11 valign-text-middle">{{ subscribeToGetAccess }}</div>
              <div class="overlap-group-37">
                <input
                  class="enter-your-email-3 raleway-bold-seagull-20px"
                  name="enteryouremail"
                  :placeholder="inputPlaceholder"
                  :type="inputType"
                  required
                />
              </div>
              <div class="overlap-group1-13">
                <div class="submit-3 valign-text-middle">{{ submit }}</div>
              </div>
            </div>
            <div class="overlap-group3-4">
              <p class="function-snippets-3 raleway-bold-white-16px" v-html="functionSnippets"></p>
            </div>
            <div class="snippet-of-the-day-11 valign-text-middle raleway-bold-white-36px">{{ snippetOfTheDay }}</div>
          </div>
        </div>
      </div>
      <skills3 />
      <div class="open-source-contribution-5">
        <div class="open-source-16">
          <div class="overlap-group-38">
            <div class="snippets-9"></div>
            <icon-github :className="iconGithubProps.className" />
            <p class="view-my-profile-to-s-4 valign-text-middle raleway-normal-cape-cod-22px">{{ viewMyProfileToS }}</p>
            <div class="open-source-projects-contributions-4 valign-text-middle raleway-bold-cape-cod-32px">
              {{ openSourceProjectsContributions }}
            </div>
            <img class="eli-img-4" :src="eliImg" alt="eli-img" />
          </div>
        </div>
      </div>
      <div class="hire-me-25">
        <div class="text-13">
          <div class="overlap-group-39">
            <p class="got-a-question-fill-4 raleway-bold-cape-cod-36px">
              <span class="raleway-bold-cape-cod-36px">{{ spanText1 }}</span
              ><span class="span1-4 raleway-bold-cape-cod-36px">{{ spanText2 }}</span
              ><span class="raleway-bold-cape-cod-36px">{{ spanText3 }}</span>
            </p>
            <p class="if-you-have-any-curi-4 valign-text-middle raleway-normal-cape-cod-22px">{{ ifYouHaveAnyCuri }}</p>
          </div>
        </div>
        <div class="click-up-4"></div>
      </div>
      <div class="private-repositories-14">
        <div class="private-repositories-15">
          <div class="overlap-group-40">
            <div class="private-repositories-16 valign-text-middle raleway-bold-cape-cod-32px">
              {{ privateRepositories }}
            </div>
            <p class="in-order-to-access-m-4 valign-text-middle raleway-normal-cape-cod-22px">
              <span
                ><span class="raleway-normal-cape-cod-22px">{{ spanText4 }}</span
                ><span class="raleway-bold-cape-cod-22px">{{ spanText5 }}</span
                ><span class="raleway-normal-cape-cod-22px">{{ spanText6 }}</span
                ><span class="raleway-bold-cape-cod-22px">{{ spanText7 }}</span
                ><span class="raleway-normal-cape-cod-22px">{{ spanText8 }}</span>
              </span>
            </p>
            <github-link :className="githubLinkProps.className" />
          </div>
        </div>
      </div>
      <div class="bitcellular-10">
        <div class="bitcellular-11">
          <img class="blockchain-new-logo-4" :src="blockchainNewLogo" alt="Blockchain New Logo" />
          <p class="build-a-bitcell-and-4 valign-text-middle raleway-bold-cape-cod-32px">{{ buildABitcellAnd }}</p>
          <div class="bitcell-signup-4">
            <user-github :children="userGithub1Props.children" :className="userGithub1Props.className" />
            <user-github :children="userGithub2Props.children" :className="userGithub2Props.className" />
            <button-signup :className="buttonSignupProps.className" />
          </div>
        </div>
      </div>
      <div class="blockchain-18">
        <blockchain2
          :className="blockchain2Props.className"
          :ethereumProps="blockchain2Props.ethereumProps"
          :bitcoinProps="blockchain2Props.bitcoinProps"
          :xButtonProps="blockchain2Props.xButtonProps"
        />
      </div>
      <div class="socials-5">
        <div class="icons-6">
          <img class="icons-item-2" :src="iconMail" alt="icon-mail" /><img
            class="icons-item-2"
            :src="iconLinkedin"
            alt="icon-linkedin"
          /><img class="icons-item-2" :src="iconPaper_Plane" alt="icon-paper_plane" /><img
            class="discord-new-4"
            :src="discordNew"
            alt="Discord New"
          /><img class="icons-item-2" :src="twitch" alt="Twitch" />
        </div>
      </div>
      <div class="recommended-material-10">
        <div class="text-14">
          <div class="recommended-material-11 raleway-bold-cape-cod-64px">{{ recommendedMaterial }}</div>
          <p class="a-few-of-the-most-re-5 inter-normal-cape-cod-22px">{{ aFewOfTheMostRe }}</p>
        </div>
        <posts2
          :className="posts2Props.className"
          :recommendation1Props="posts2Props.recommendation1Props"
          :recommendation21Props="posts2Props.recommendation21Props"
          :recommendation22Props="posts2Props.recommendation22Props"
        />
      </div>
      <x-footer4 v-bind="xFooter4Props" />
    </div>
  </div>
</template>

<script>
import Navbar4 from "./Navbar4";
import HeroInfo from "./HeroInfo";
import AboutMe2 from "./AboutMe2";
import Skills3 from "./Skills3";
import IconGithub from "./IconGithub";
import GithubLink from "./GithubLink";
import UserGithub from "./UserGithub";
import ButtonSignup from "./ButtonSignup";
import Blockchain2 from "./Blockchain2";
import Posts2 from "./Posts2";
import xFooter4 from "./xFooter4";
export default {
  name: "IPadMiniiPad97Portrait",
  components: {
    Navbar4,
    HeroInfo,
    AboutMe2,
    Skills3,
    IconGithub,
    GithubLink,
    UserGithub,
    ButtonSignup,
    Blockchain2,
    Posts2,
    xFooter4,
  },
  props: [
    "componentLottieHttpsAssets8Lottiefi",
    "subscribeToGetAccess",
    "inputType",
    "inputPlaceholder",
    "submit",
    "functionSnippets",
    "snippetOfTheDay",
    "viewMyProfileToS",
    "openSourceProjectsContributions",
    "eliImg",
    "spanText1",
    "spanText2",
    "spanText3",
    "ifYouHaveAnyCuri",
    "privateRepositories",
    "spanText4",
    "spanText5",
    "spanText6",
    "spanText7",
    "spanText8",
    "blockchainNewLogo",
    "buildABitcellAnd",
    "iconMail",
    "iconLinkedin",
    "iconPaper_Plane",
    "discordNew",
    "twitch",
    "recommendedMaterial",
    "aFewOfTheMostRe",
    "heroInfoProps",
    "iconGithubProps",
    "githubLinkProps",
    "userGithub1Props",
    "userGithub2Props",
    "buttonSignupProps",
    "blockchain2Props",
    "posts2Props",
    "xFooter4Props",
  ],
};
</script>

<style lang="sass">
@import '../../variables'

.ipad-mini-ipad-9-7-portrait
  background-color: $material-themereferrorerror100
  border: 1px none
  display: flex
  height: 100vh
  min-height: 8822px
  min-width: 768px
  width: 100%

.body-2
  align-items: flex-start
  background-color: $material-themereferrorerror100
  border: 1px none
  display: flex
  flex-direction: column
  height: 8822px
  overflow: hidden
  position: relative
  width: 768px

.hero-5
  align-items: flex-end
  background-color: $material-themereferrorerror100
  border: 1px none
  display: flex
  height: 883px
  padding: 0 1.0px
  width: 769px

.overlap-group5-1
  height: 777px
  margin-left: 7px
  position: relative
  width: 760px

.componentlottiehttps-1
  height: 504px
  left: 0
  position: absolute
  top: 273px
  width: 760px

.about-me-8
  background-color: $material-themereferrorerror100
  border: 1px none
  display: flex
  flex-direction: column
  height: 1054px
  margin-left: -1px
  position: relative
  width: 769px

.snippets-8
  align-items: flex-start
  display: flex
  margin-left: 83px
  min-width: 605px

.overlap-group4-3
  border-radius: 16px
  height: 371px
  position: relative
  width: 603px

.overlap-group2-12
  align-items: flex-end
  background-color: $seagull
  border-radius: 16px
  display: flex
  height: 371px
  justify-content: flex-end
  left: 0
  min-width: 603px
  padding: 41.3px 15.4px
  position: absolute
  top: 0

.subscribe-to-get-access-11
  height: 31px
  letter-spacing: 0
  line-height: normal
  margin-bottom: 13.57px
  text-align: center
  width: 143px

.overlap-group-37
  align-items: flex-start
  background-color: $material-themereferrorerror100
  border-radius: 16px
  display: flex
  height: 57px
  margin-bottom: 1.43px
  margin-left: 34px
  min-width: 269px
  padding: 12.4px 16.7px

.enter-your-email-3
  background-color: transparent
  border: 0
  height: 31px
  letter-spacing: 0
  line-height: normal
  padding: 0
  width: 204px

.enter-your-email-3::placeholder
  color: #7dbee399

.overlap-group1-13
  align-items: flex-end
  background-color: $white
  border-radius: 16px
  display: flex
  height: 57px
  justify-content: flex-end
  margin-left: 12px
  min-width: 104px
  padding: 6.2px 13.5px

.submit-3
  height: 44px
  letter-spacing: 0
  line-height: normal
  text-align: center
  width: 76px

.overlap-group3-4
  align-items: flex-end
  background-color: $white
  border-radius: 16px
  display: flex
  height: 124px
  left: 41px
  min-width: 530px
  padding: 12.8px 13.1px
  position: absolute
  top: 120px

.function-snippets-3
  letter-spacing: 0
  line-height: normal
  min-height: 97px
  width: 504px

.snippet-of-the-day-11
  height: 51px
  left: 214px
  letter-spacing: 0
  line-height: normal
  position: absolute
  text-align: center
  top: 35px
  width: 176px

.open-source-contribution-5
  background-color: $material-themereferrorerror100
  border: 1px none
  display: flex
  height: 560px
  margin-top: 5px
  width: 769px

.open-source-16
  align-items: flex-start
  display: flex
  margin-left: 51px
  margin-top: 50px
  min-width: 671px

.overlap-group-38
  height: 436px
  position: relative
  width: 667px

.snippets-9
  background-color: $seagull-2
  border: 1px none
  border-radius: 16px
  height: 361px
  left: 0
  position: absolute
  top: 75px
  width: 667px

.view-my-profile-to-s-4
  height: 78px
  left: 52px
  letter-spacing: 0
  line-height: normal
  position: absolute
  text-align: center
  top: 250px
  width: 563px

.open-source-projects-contributions-4
  height: 38px
  left: 42px
  letter-spacing: 0
  line-height: normal
  position: absolute
  text-align: center
  top: 189px

.eli-img-4
  height: 150px
  left: 259px
  object-fit: cover
  position: absolute
  top: 0
  width: 150px

.hire-me-25
  background-color: $material-themereferrorerror100
  border: 1px none
  display: flex
  flex-direction: column
  height: 1130px
  margin-left: -1px
  width: 770px

.text-13
  align-items: flex-start
  display: flex
  margin-left: 118px
  margin-top: 72px
  min-width: 538px
  padding: 0.0px 0

.overlap-group-39
  height: 234px
  position: relative
  width: 534px

.got-a-question-fill-4
  left: 69px
  letter-spacing: 0
  line-height: normal
  position: absolute
  top: 0
  width: 396px

.span1-4
  text-decoration: underline

.if-you-have-any-curi-4
  height: 134px
  left: 0
  letter-spacing: 0
  line-height: normal
  position: absolute
  text-align: center
  top: 100px
  width: 534px

.click-up-4
  height: 753px
  margin-left: 119px
  width: 533px

.private-repositories-14
  background-color: $material-themereferrorerror100
  border: 1px none
  display: flex
  height: 478px
  margin-left: -2px
  width: 771px

.private-repositories-15
  align-items: flex-start
  display: flex
  height: 327px
  margin-left: 55px
  margin-top: 75px
  min-width: 666px

.overlap-group-40
  align-items: center
  background-color: $seagull-2
  border-radius: 16px
  display: flex
  flex-direction: column
  gap: 25px
  min-height: 327px
  padding: 33px 102px
  position: relative
  width: 662px

.private-repositories-16
  height: 38px
  letter-spacing: 0
  line-height: normal
  margin-left: 24.0px
  margin-top: 6px
  min-width: 306px
  text-align: center

.in-order-to-access-m-4
  align-self: flex-end
  height: 122px
  letter-spacing: 0
  line-height: normal
  text-align: center
  width: 435px

.bitcellular-10
  background-color: $material-themereferrorerror100
  border: 1px none
  display: flex
  height: 534px
  width: 768px

.bitcellular-11
  display: flex
  flex-direction: column
  height: 441px
  margin-left: 64px
  margin-top: 57px
  width: 642px

.blockchain-new-logo-4
  height: 90px
  margin-left: 275px
  width: 90px

.build-a-bitcell-and-4
  height: 76px
  letter-spacing: 0
  line-height: normal
  margin-top: 52px
  text-align: center
  width: 640px

.bitcell-signup-4
  align-items: center
  border: 1px none
  display: flex
  flex-direction: column
  gap: 30px
  height: 189px
  justify-content: center
  margin-left: 161px
  margin-top: 34px
  position: relative
  width: 318px

.blockchain-18
  background-color: $material-themereferrorerror100
  border: 1px none
  display: flex
  height: 610px
  margin-left: -2px
  position: relative
  width: 770px

.socials-5
  background-color: $material-themereferrorerror100
  border: 1px none
  display: flex
  height: 337px
  width: 770px

.icons-6
  align-items: center
  border: 1px none
  display: flex
  gap: 60px
  height: 80px
  justify-content: center
  margin-left: 85px
  margin-top: 129px
  width: 600px

.icons-item-2
  height: 70px
  min-width: 70px

.discord-new-4
  height: 80px
  min-width: 80px

.recommended-material-10
  background-color: $material-themereferrorerror100
  border: 1px none
  display: flex
  flex-direction: column
  gap: 96px
  height: 1884px
  position: relative
  width: 770px

.text-14
  display: flex
  flex-direction: column
  gap: 70.8px
  height: 261px
  margin-left: 128px
  margin-top: 69px
  width: 517px

.recommended-material-11
  height: 123.24px
  letter-spacing: 0
  line-height: normal
  text-align: center
  width: 513px

.a-few-of-the-most-re-5
  height: 67px
  letter-spacing: 0
  line-height: normal
  margin-left: 8px
  text-align: center
  width: 497px
</style>
