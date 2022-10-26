<template>
  <div class="ipad-mini-ipad-9-7-landsape screen">
    <div class="body-3">
      <navbar5
        :dashboardLayout="navbar5Props.dashboardLayout"
        :hireMe="navbar5Props.hireMe"
        :github="navbar5Props.github"
        :openSource="navbar5Props.openSource"
        :organizations="navbar5Props.organizations"
        :buttonLoginProps="navbar5Props.buttonLoginProps"
        :buttonWalletProps="navbar5Props.buttonWalletProps"
      />
      <div class="hero-6">
        <div class="overlap-group5-2">
          <img
            class="componentlottiehttps-2"
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
      <div class="about-me-11">
        <div class="about-me-12">
          <img class="globe-6" :src="globe" alt="Globe" />
          <div class="well-rounded-and-highly-grounded-6 valign-text-middle raleway-bold-cape-cod-32px">
            {{ wellRoundedAndHighlyGrounded }}
          </div>
          <p
            class="a-self-taught-web-de-6 valign-text-middle raleway-normal-cape-cod-22px"
            v-html="aSelfTaughtWebDe"
          ></p>
        </div>
        <div class="snippets-12">
          <div class="overlap-group4-4">
            <div class="overlap-group2-13 raleway-bold-white-20px">
              <div class="subscribe-to-get-access-14 valign-text-middle">{{ subscribeToGetAccess }}</div>
              <div class="overlap-group-43">
                <input
                  class="enter-your-email-4 raleway-bold-seagull-20px"
                  name="enteryouremail"
                  :placeholder="inputPlaceholder"
                  :type="inputType"
                />
              </div>
              <div class="overlap-group1-14">
                <div class="submit-4 valign-text-middle">{{ submit }}</div>
              </div>
            </div>
            <div class="overlap-group3-5">
              <p class="function-snippets-4 raleway-bold-white-16px" v-html="functionSnippets"></p>
            </div>
            <div class="snippet-of-the-day-14 valign-text-middle raleway-bold-white-36px">{{ snippetOfTheDay }}</div>
          </div>
        </div>
      </div>
      <div class="skills-9"><languages-and-experience /></div>
      <div class="open-source-contribution-6">
        <div class="overlap-group3-6">
          <div class="overlap-group-44">
            <div class="open-source-projects-contributions-5 valign-text-middle raleway-bold-cape-cod-32px">
              {{ openSourceProjectsContributions }}
            </div>
            <p class="view-my-profile-to-s-5 valign-text-middle raleway-normal-cape-cod-22px">{{ viewMyProfileToS }}</p>
            <icon-github :className="iconGithubProps.className" />
          </div>
          <img class="eli-img-5" :src="eliImg" alt="eli-img" />
        </div>
      </div>
      <div class="hire-me-27">
        <div class="text-15">
          <p class="got-a-question-fill-5 valign-text-middle raleway-bold-cape-cod-36px">
            <span
              ><span class="raleway-bold-cape-cod-36px">{{ spanText1 }}</span
              ><span class="span1-5 raleway-bold-cape-cod-36px">{{ spanText2 }}</span
              ><span class="raleway-bold-cape-cod-36px">{{ spanText3 }}</span>
            </span>
          </p>
          <p class="if-you-have-any-curi-5 valign-text-middle raleway-normal-cape-cod-22px">{{ ifYouHaveAnyCuri }}</p>
        </div>
        <img class="click-up-5" :src="clickUp" alt="click-up" />
      </div>
      <div class="private-repositories-17">
        <div class="private-repositories-18">
          <div class="overlap-group-45">
            <div class="snippets-13"></div>
            <github-link :className="githubLinkProps.className" />
            <p class="in-order-to-access-m-5 valign-text-middle raleway-normal-cape-cod-22px">
              <span
                ><span class="raleway-normal-cape-cod-22px">{{ spanText4 }}</span
                ><span class="raleway-bold-cape-cod-22px">{{ spanText5 }}</span
                ><span class="raleway-normal-cape-cod-22px">{{ spanText6 }}</span
                ><span class="raleway-bold-cape-cod-22px">{{ spanText7 }}</span
                ><span class="raleway-normal-cape-cod-22px">{{ spanText8 }}</span>
              </span>
            </p>
            <div class="private-repositories-19 valign-text-middle raleway-bold-cape-cod-32px">
              {{ privateRepositories }}
            </div>
          </div>
        </div>
      </div>
      <div class="bitcellular-12">
        <div class="bitcellular-13">
          <img class="blockchain-new-logo-5" :src="blockchainNewLogo" alt="Blockchain New Logo" />
          <p class="build-a-bitcell-and-5 valign-text-middle raleway-bold-cape-cod-32px">{{ buildABitcellAnd }}</p>
          <div class="bitcell-signup-5">
            <user-github :children="userGithubProps.children" :className="userGithubProps.className" />
            <div class="user-email-4">
              <div class="overlap-group1-15">
                <div class="email-address-4 valign-text-middle raleway-normal-cape-cod-22px">{{ emailAddress }}</div>
              </div>
            </div>
            <button-signup :className="buttonSignupProps.className" />
          </div>
        </div>
      </div>
      <div class="overlap-group6-1">
        <div class="socials-6">
          <div class="icons-7">
            <img class="twitch-6" :src="twitch" alt="Twitch" /><img
              class="icon-mail-4"
              :src="iconMail"
              alt="icon-mail"
            /><img class="icon" :src="iconLinkedin" alt="icon-linkedin" /><img
              class="icon"
              :src="iconPaper_Plane"
              alt="icon-paper_plane"
            /><img class="discord-new-5" :src="discordNew" alt="Discord New" />
          </div>
        </div>
        <div class="blockchain-21">
          <blockchain2
            :className="blockchain2Props.className"
            :ethereumProps="blockchain2Props.ethereumProps"
            :bitcoinProps="blockchain2Props.bitcoinProps"
            :xButtonProps="blockchain2Props.xButtonProps"
          />
        </div>
      </div>
      <div class="recommended-material-12">
        <text2 :className="text2Props.className" />
        <posts2
          :className="posts2Props.className"
          :recommendation1Props="posts2Props.recommendation1Props"
          :recommendation21Props="posts2Props.recommendation21Props"
          :recommendation22Props="posts2Props.recommendation22Props"
        />
      </div>
      <x-footer5 v-bind="xFooter5Props" />
    </div>
  </div>
</template>

<script>
import Navbar5 from "./Navbar5";
import HeroInfo from "./HeroInfo";
import LanguagesAndExperience from "./LanguagesAndExperience";
import IconGithub from "./IconGithub";
import GithubLink from "./GithubLink";
import UserGithub from "./UserGithub";
import ButtonSignup from "./ButtonSignup";
import Blockchain2 from "./Blockchain2";
import Text2 from "./Text2";
import Posts2 from "./Posts2";
import xFooter5 from "./xFooter5";
export default {
  name: "IPadMiniiPad97Landsape",
  components: {
    Navbar5,
    HeroInfo,
    LanguagesAndExperience,
    IconGithub,
    GithubLink,
    UserGithub,
    ButtonSignup,
    Blockchain2,
    Text2,
    Posts2,
    xFooter5,
  },
  props: [
    "componentLottieHttpsAssets8Lottiefi",
    "globe",
    "wellRoundedAndHighlyGrounded",
    "aSelfTaughtWebDe",
    "subscribeToGetAccess",
    "inputType",
    "inputPlaceholder",
    "submit",
    "functionSnippets",
    "snippetOfTheDay",
    "openSourceProjectsContributions",
    "viewMyProfileToS",
    "eliImg",
    "spanText1",
    "spanText2",
    "spanText3",
    "ifYouHaveAnyCuri",
    "clickUp",
    "spanText4",
    "spanText5",
    "spanText6",
    "spanText7",
    "spanText8",
    "privateRepositories",
    "blockchainNewLogo",
    "buildABitcellAnd",
    "emailAddress",
    "twitch",
    "iconMail",
    "iconLinkedin",
    "iconPaper_Plane",
    "discordNew",
    "navbar5Props",
    "heroInfoProps",
    "iconGithubProps",
    "githubLinkProps",
    "userGithubProps",
    "buttonSignupProps",
    "blockchain2Props",
    "text2Props",
    "posts2Props",
    "xFooter5Props",
  ],
};
</script>

<style lang="sass">
@import '../../variables'

.ipad-mini-ipad-9-7-landsape
  background-color: $material-themereferrorerror100
  border: 1px none
  display: flex
  height: 100vh
  min-height: 8475px
  min-width: 1024px
  width: 100%

.body-3
  align-items: flex-start
  background-color: $material-themereferrorerror100
  border: 1px none
  display: flex
  flex-direction: column
  height: 8475px
  overflow: hidden
  position: relative
  width: 1024px

.hero-6
  align-items: flex-end
  background-color: $material-themereferrorerror100
  border: 1px none
  display: flex
  height: 844px
  width: 1024px

.overlap-group5-2
  height: 738px
  margin-left: 89px
  position: relative
  width: 935px

.componentlottiehttps-2
  height: 587px
  left: 40px
  position: absolute
  top: 151px
  width: 895px

.about-me-11
  background-color: $material-themereferrorerror100
  border: 1px none
  display: flex
  flex-direction: column
  gap: 68px
  height: 931px
  width: 1024px

.about-me-12
  display: flex
  flex-direction: column
  height: 456px
  margin-left: 80px
  margin-top: 23px
  width: 868px

.globe-6
  height: 57.78px
  margin-left: 415.0px
  width: 34.82px

.well-rounded-and-highly-grounded-6
  height: 63.68px
  letter-spacing: 0
  line-height: normal
  margin-left: 224.9px
  margin-top: 38.9px
  text-align: center
  width: 415.07px

.a-self-taught-web-de-6
  height: 261.44px
  letter-spacing: 0
  line-height: normal
  margin-top: 34.2px
  text-align: center
  width: 864px

.snippets-12
  align-items: flex-start
  display: flex
  margin-left: 77px
  min-width: 872px

.overlap-group4-4
  border-radius: 16px
  height: 339px
  position: relative
  width: 870px

.overlap-group2-13
  align-items: flex-end
  background-color: $seagull
  border-radius: 16px
  display: flex
  height: 339px
  justify-content: flex-end
  left: 0
  min-width: 870px
  padding: 39.1px 37.9px
  position: absolute
  top: 0

.subscribe-to-get-access-14
  height: 28px
  letter-spacing: 0
  line-height: normal
  margin-bottom: 11.09px
  text-align: center
  width: 206px

.overlap-group-43
  align-items: flex-start
  background-color: $material-themereferrorerror100
  border-radius: 16px
  display: flex
  height: 52px
  margin-left: 50px
  min-width: 388px
  padding: 11.4px 24.7px

.enter-your-email-4
  background-color: transparent
  border: 0
  height: 28px
  letter-spacing: 0
  line-height: normal
  padding: 0
  width: 206px

.enter-your-email-4::placeholder
  color: #7dbee399

.overlap-group1-14
  align-items: flex-end
  background-color: $white
  border-radius: 16px
  display: flex
  height: 52px
  justify-content: flex-end
  margin-left: 26px
  min-width: 125px
  padding: 5.7px 16.3px

.submit-4
  height: 40px
  letter-spacing: 0
  line-height: normal
  text-align: center
  width: 92px

.overlap-group3-5
  align-items: flex-end
  background-color: $white
  border-radius: 16px
  display: flex
  height: 113px
  left: 59px
  min-width: 765px
  padding: 11.7px 19.0px
  position: absolute
  top: 109px

.function-snippets-4
  letter-spacing: 0
  line-height: normal
  min-height: 89px
  width: 727px

.snippet-of-the-day-14
  height: 45px
  left: 264px
  letter-spacing: 0
  line-height: normal
  position: absolute
  text-align: center
  top: 35px
  width: 342px

.skills-9
  background-color: $material-themereferrorerror100
  border: 1px none
  display: flex
  height: 331px
  overflow: hidden
  position: relative
  width: 1024px

.open-source-contribution-6
  align-items: flex-end
  background-color: $material-themereferrorerror100
  border: 1px none
  display: flex
  height: 525px
  padding: 66px 40px
  width: 1024px

.overlap-group3-6
  height: 366px
  position: relative
  width: 944px

.overlap-group-44
  align-items: center
  background-color: $seagull-2
  border-radius: 16px
  display: flex
  flex-direction: column
  gap: 21px
  left: 0
  min-height: 291px
  padding: 18px 55.5px
  position: absolute
  top: 75px
  width: 944px

.open-source-projects-contributions-5
  height: 63px
  letter-spacing: 0
  line-height: normal
  margin-top: 57px
  text-align: center
  width: 598px

.view-my-profile-to-s-5
  align-self: flex-end
  height: 63px
  letter-spacing: 0
  line-height: normal
  text-align: center
  width: 832px

.eli-img-5
  height: 150px
  left: 397px
  object-fit: cover
  position: absolute
  top: 0
  width: 150px

.hire-me-27
  background-color: $material-themereferrorerror100
  border: 1px none
  display: flex
  flex-direction: column
  gap: 53.3px
  height: 1046px
  width: 1022px

.text-15
  display: flex
  flex-direction: column
  gap: 12px
  height: 131.66px
  margin-left: 74px
  margin-top: 80px
  width: 877px

.got-a-question-fill-5
  height: 60px
  letter-spacing: 0
  line-height: normal
  margin-left: 30px
  text-align: center
  width: 814px

.span1-5
  text-decoration: underline

.if-you-have-any-curi-5
  height: 59.66px
  letter-spacing: 0
  line-height: normal
  text-align: center
  width: 873px

.click-up-5
  height: 753px
  margin-left: 244px
  object-fit: cover
  width: 533px

.private-repositories-17
  background-color: $material-themereferrorerror100
  border: 1px none
  display: flex
  height: 484px
  overflow: hidden
  width: 1024px

.private-repositories-18
  align-items: flex-start
  display: flex
  margin-left: -14px
  margin-top: 117px
  min-width: 1056px

.overlap-group-45
  height: 273px
  position: relative
  width: 1052px

.snippets-13
  background-color: $seagull-2
  border: 1px none
  border-radius: 16px
  height: 273px
  left: 60px
  position: absolute
  top: 0
  width: 934px

.in-order-to-access-m-5
  height: 52px
  left: 0
  letter-spacing: 0
  line-height: normal
  position: absolute
  text-align: center
  top: 106px
  width: 1052px

.private-repositories-19
  height: 38px
  left: 374px
  letter-spacing: 0
  line-height: normal
  position: absolute
  text-align: center
  top: 39px

.bitcellular-12
  background-color: $material-themereferrorerror100
  border: 1px none
  display: flex
  height: 494px
  width: 1025px

.bitcellular-13
  display: flex
  flex-direction: column
  height: 397px
  margin-left: 141px
  margin-top: 44px
  width: 744px

.blockchain-new-logo-5
  height: 90px
  margin-left: 326px
  width: 90px

.build-a-bitcell-and-5
  height: 38px
  letter-spacing: 0
  line-height: normal
  margin-top: 32px
  text-align: center
  width: 742px

.bitcell-signup-5
  align-items: center
  border: 1px none
  display: flex
  flex-direction: column
  gap: 30px
  height: 189px
  justify-content: center
  margin-left: 212px
  margin-top: 48px
  position: relative
  width: 318px

.user-email-4
  height: 43px
  margin-right: -2.00px
  min-width: 320px

.overlap-group1-15
  align-items: flex-start
  background-color: $material-themereferrorerror100
  border: 1px solid
  border-color: $cape-cod
  border-radius: 8px
  display: flex
  height: 43px
  min-width: 318px
  padding: 10px 7px

.email-address-4
  height: 22px
  letter-spacing: 0
  line-height: normal
  text-align: center
  width: 167px

.overlap-group6-1
  height: 899px
  margin-left: -2px
  position: relative
  width: 1026px

.socials-6
  background-color: $material-themereferrorerror100
  border: 1px none
  display: flex
  height: 337px
  left: 2px
  overflow: hidden
  position: absolute
  top: 562px
  width: 1024px

.icons-7
  display: flex
  margin-left: 136px
  margin-top: 129px
  width: 1240px

.twitch-6
  height: 70px
  margin-left: -161px
  margin-top: -3570px
  width: 70px

.icon-mail-4
  height: 70px
  margin-left: 91px
  margin-top: 10px
  width: 70px

.icon
  height: 70px
  margin-left: 220px
  margin-top: 10px
  width: 70px

.discord-new-5
  height: 80px
  margin-left: 220px
  width: 18px

.blockchain-21
  background-color: $material-themereferrorerror100
  border: 1px none
  display: flex
  height: 610px
  left: 0
  position: absolute
  top: 0
  width: 1024px

.recommended-material-12
  background-color: $material-themereferrorerror100
  border: 1px none
  display: flex
  flex-direction: column
  gap: 90px
  height: 1823px
  position: relative
  width: 1024px
</style>
