<template>
  <div class="iphone-12-pro-max screen">
    <div class="body">
      <navbar2 />
      <div class="hero-2">
        <div class="overlap-group6">
          <img
            class="componentlottiehttps"
            :src="componentLottieHttpsAssets8Lottiefi"
            alt="component:lottie:https://assets8.lottiefiles.com/packages/lf20_vfuqgv0l.json]"
          /><hero-info2
            :name="heroInfo2Props.name"
            :spanText1="heroInfo2Props.spanText1"
            :spanText2="heroInfo2Props.spanText2"
            :spanText3="heroInfo2Props.spanText3"
            :xButtonProps="heroInfo2Props.xButtonProps"
          />
        </div>
      </div>
      <div class="about-me-5">
        <div class="about-me-6">
          <img class="globe-3" :src="globe" alt="Globe" />
          <div class="overlap-group5">
            <p
              class="a-self-taught-web-de-3 valign-text-middle raleway-normal-cape-cod-22px"
              v-html="aSelfTaughtWebDe"
            ></p>
            <div class="well-rounded-and-highly-grounded-3 valign-text-middle raleway-bold-cape-cod-32px">
              {{ wellRoundedAndHighlyGrounded }}
            </div>
          </div>
        </div>
        <div class="snippets-4">
          <div class="overlap-group4-1">
            <div class="overlap-group2-10 raleway-bold-white-20px">
              <div class="subscribe-to-get-access-6 valign-text-middle">{{ subscribeToGetAccess }}</div>
              <div class="overlap-group-28">
                <input
                  class="enter-your-email-1 raleway-bold-seagull-20px"
                  name="enteryouremail"
                  :placeholder="inputPlaceholder"
                  :type="inputType"
                />
              </div>
              <div class="overlap-group1-10">
                <div class="submit-1 valign-text-middle">{{ submit }}</div>
              </div>
            </div>
            <div class="overlap-group3-1">
              <p class="function-snippets-1 raleway-bold-white-16px" v-html="functionSnippets"></p>
            </div>
            <div class="snippet-of-the-day-6 valign-text-middle raleway-bold-white-36px">{{ snippetOfTheDay }}</div>
          </div>
        </div>
      </div>
      <div class="skills-4">
        <div class="languages-and-experience-3 raleway-bold-cape-cod-16px">
          <div class="text-carousel-3">
            <div class="html-3 valign-text-middle">{{ html }}</div>
            <div class="css-20 valign-text-middle">{{ css }}</div>
            <div class="java-script-3 valign-text-middle">{{ javascript }}</div>
            <div class="react-18 valign-text-middle">{{ react }}</div>
            <div class="python-3 valign-text-middle">{{ python }}</div>
            <div class="sql-18 valign-text-middle">{{ sql }}</div>
            <div class="c-40 valign-text-middle">{{ c1 }}</div>
            <div class="c-41 valign-text-middle">{{ c2 }}</div>
            <div class="java-18 valign-text-middle">{{ java }}</div>
            <div class="swift-18 valign-text-middle">{{ swift }}</div>
            <div class="price-18 valign-text-middle">{{ price }}</div>
            <div class="type-script-3 valign-text-middle">{{ typescript }}</div>
            <div class="name-25 valign-text-middle">{{ name }}</div>
            <div class="go-20 valign-text-middle">{{ go }}</div>
            <div class="place-36 valign-text-middle">{{ place1 }}</div>
            <div class="place-37 valign-text-middle">{{ place2 }}</div>
          </div>
          <div class="experiences-3">
            <div class="web-e-commerce-development-3 valign-text-middle">{{ webECommerceDevelopment }}</div>
            <div class="project-management-3 valign-text-middle">{{ projectManagement }}</div>
            <div class="salesforce-3 valign-text-middle">{{ salesforce }}</div>
            <div class="full-stack-3 valign-text-middle">{{ fullStack }}</div>
            <div class="gis-20 valign-text-middle">{{ gis }}</div>
            <div class="blockchain-11 valign-text-middle">{{ blockchain }}</div>
            <div class="python-scripting-3 valign-text-middle">{{ pythonScripting }}</div>
            <div class="api-integrations-3 valign-text-middle">{{ apiIntegrations }}</div>
            <div class="cloud-development-3 valign-text-middle">{{ cloudDevelopment }}</div>
          </div>
        </div>
      </div>
      <div class="open-source-contribution-2">
        <div class="overlap-group3-2">
          <div class="overlap-group-29">
            <div class="snippets-5"></div>
            <icon-github :className="iconGithubProps.className" />
            <div class="open-source-projects-contributions-3 valign-text-middle raleway-bold-cape-cod-32px">
              {{ openSourceProjectsContributions }}
            </div>
            <img class="eli-img-3" :src="eliImg" alt="eli-img" />
          </div>
          <p class="view-my-profile-to-s-3 valign-text-middle raleway-normal-cape-cod-22px">{{ viewMyProfileToS }}</p>
        </div>
      </div>
      <div class="hire-me-17">
        <div class="text-11">
          <div class="overlap-group-30">
            <p class="if-you-have-any-curi-3 valign-text-middle raleway-normal-cape-cod-22px">{{ ifYouHaveAnyCuri }}</p>
            <p class="got-a-question-fill-3 raleway-bold-cape-cod-36px">
              <span class="raleway-bold-cape-cod-36px">{{ spanText1 }}</span
              ><span class="span1-3 raleway-bold-cape-cod-36px">{{ spanText2 }}</span
              ><span class="raleway-bold-cape-cod-36px">{{ spanText3 }}</span>
            </p>
          </div>
        </div>
        <img class="click-up-1" :src="clickUp" alt="click-up" />
      </div>
      <div class="private-repositories-9">
        <div class="private-repositories-10">
          <div class="overlap-group-31">
            <div class="private-repositories-11 valign-text-middle raleway-bold-cape-cod-32px">
              {{ privateRepositories }}
            </div>
            <p class="in-order-to-access-m-3 valign-text-middle raleway-normal-cape-cod-22px">
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
      <div class="bitcellular-6">
        <div class="bitcellular-7">
          <img class="blockchain-new-logo-3" :src="blockchainNewLogo" alt="Blockchain New Logo" />
          <p class="build-a-bitcell-and-3 valign-text-middle raleway-bold-cape-cod-32px">{{ buildABitcellAnd }}</p>
          <div class="bitcell-signup-3">
            <user-github :children="userGithubProps.children" :className="userGithubProps.className" />
            <div class="user-email-3">
              <div class="overlap-group1-11">
                <div class="email-address-3 valign-text-middle raleway-normal-cape-cod-22px">{{ emailAddress }}</div>
              </div>
            </div>
            <button-signup :className="buttonSignupProps.className" />
          </div>
        </div>
      </div>
      <div class="blockchain-12">
        <div class="blockchain-13">
          <img
            class="tradent-logo5-transparent-2-5"
            :src="tradentLogo5Transparent2"
            alt="tradent-logo5-transparent 2"
          />
          <div class="blockchains-text-4">
            <div class="overlap-group-32">
              <p class="we-have-experience-w-5 valign-text-middle inter-normal-cape-cod-22px">
                {{ weHaveExperienceW }}
              </p>
              <p class="blockchain-bounty-hunting-team-tdto-5 valign-text-middle raleway-bold-cape-cod-32px">
                {{ blockchainBountyHuntingTeamTdto }}
              </p>
            </div>
          </div>
          <div class="blockchains-tech-5">
            <ethereum />
            <bitcoin :bitcoin1="bitcoinProps.bitcoin1" />
          </div>
          <x-button :children="xButtonProps.children" :className="xButtonProps.className" />
        </div>
      </div>
      <div class="socials-2">
        <div class="icons-5">
          <img class="telegram-app-2" :src="telegramApp" alt="Telegram App" /><img
            class="discord-new-3"
            :src="discordNew"
            alt="Discord New"
          /><img class="twitch-5" :src="twitch" alt="Twitch" /><img
            class="icon-mail-3"
            :src="iconMail"
            alt="icon-mail"
          /><img class="linked-in-2" :src="linkedin" alt="LinkedIn" />
        </div>
      </div>
      <div class="recommended-material-6">
        <div class="text-12">
          <div class="recommended-material-7 valign-text-middle">{{ recommendedMaterial }}</div>
          <p class="a-few-of-the-most-re-4 valign-text-middle inter-normal-cape-cod-22px">{{ aFewOfTheMostRe }}</p>
        </div>
        <posts2
          :recommendation1Props="posts2Props.recommendation1Props"
          :recommendation21Props="posts2Props.recommendation21Props"
          :recommendation22Props="posts2Props.recommendation22Props"
        />
      </div>
      <x-footer2 v-bind="xFooter2Props" />
    </div>
  </div>
</template>

<script>
import Navbar2 from "./Navbar2";
import HeroInfo2 from "./HeroInfo2";
import IconGithub from "./IconGithub";
import GithubLink from "./GithubLink";
import UserGithub from "./UserGithub";
import ButtonSignup from "./ButtonSignup";
import Ethereum from "./Ethereum";
import Bitcoin from "./Bitcoin";
import xButton from "./xButton";
import Posts2 from "./Posts2";
import xFooter2 from "./xFooter2";
export default {
  name: "IPhone12ProMax",
  components: {
    Navbar2,
    HeroInfo2,
    IconGithub,
    GithubLink,
    UserGithub,
    ButtonSignup,
    Ethereum,
    Bitcoin,
    xButton,
    Posts2,
    xFooter2,
  },
  props: [
    "componentLottieHttpsAssets8Lottiefi",
    "globe",
    "aSelfTaughtWebDe",
    "wellRoundedAndHighlyGrounded",
    "subscribeToGetAccess",
    "inputType",
    "inputPlaceholder",
    "submit",
    "functionSnippets",
    "snippetOfTheDay",
    "html",
    "css",
    "javascript",
    "react",
    "python",
    "sql",
    "c1",
    "c2",
    "java",
    "swift",
    "price",
    "typescript",
    "name",
    "go",
    "place1",
    "place2",
    "webECommerceDevelopment",
    "projectManagement",
    "salesforce",
    "fullStack",
    "gis",
    "blockchain",
    "pythonScripting",
    "apiIntegrations",
    "cloudDevelopment",
    "openSourceProjectsContributions",
    "eliImg",
    "viewMyProfileToS",
    "ifYouHaveAnyCuri",
    "spanText1",
    "spanText2",
    "spanText3",
    "clickUp",
    "privateRepositories",
    "spanText4",
    "spanText5",
    "spanText6",
    "spanText7",
    "spanText8",
    "blockchainNewLogo",
    "buildABitcellAnd",
    "emailAddress",
    "tradentLogo5Transparent2",
    "weHaveExperienceW",
    "blockchainBountyHuntingTeamTdto",
    "telegramApp",
    "discordNew",
    "twitch",
    "iconMail",
    "linkedin",
    "recommendedMaterial",
    "aFewOfTheMostRe",
    "heroInfo2Props",
    "iconGithubProps",
    "githubLinkProps",
    "userGithubProps",
    "buttonSignupProps",
    "bitcoinProps",
    "xButtonProps",
    "posts2Props",
    "xFooter2Props",
  ],
};
</script>

<style lang="sass">
@import '../../variables'

.iphone-12-pro-max
  background-color: $material-themereferrorerror100
  border: 1px none
  display: flex
  height: 100vh
  min-height: 9847px
  min-width: 428px
  width: 100%

.body
  background-color: $material-themereferrorerror100
  border: 1px none
  display: flex
  flex-direction: column
  height: 9847px
  position: relative
  width: 428px

.hero-2
  align-items: flex-end
  background-color: $material-themereferrorerror100
  border: 1px none
  display: flex
  height: 865px
  padding: 68.5px 0
  width: 427px

.overlap-group6
  height: 671px
  position: relative
  width: 427px

.componentlottiehttps
  height: 324px
  left: 0
  position: absolute
  top: 347px
  width: 427px

.about-me-5
  background-color: $material-themereferrorerror100
  border: 1px none
  display: flex
  flex-direction: column
  gap: 24px
  height: 1556px
  width: 427px

.about-me-6
  align-items: center
  display: flex
  flex-direction: column
  margin-left: 47px
  margin-top: 22px
  min-height: 836px
  width: 335px

.globe-3
  height: 52px
  margin-right: 3.0px
  width: 40px

.overlap-group5
  height: 784px
  margin-right: 4.0px
  position: relative
  width: 331px

.a-self-taught-web-de-3
  height: 685px
  left: 9px
  letter-spacing: 0
  line-height: normal
  position: absolute
  text-align: center
  top: 99px
  width: 313px

.well-rounded-and-highly-grounded-3
  height: 133px
  left: 0
  letter-spacing: 0
  line-height: normal
  position: absolute
  text-align: center
  top: 0
  width: 331px

.snippets-4
  align-items: flex-start
  display: flex
  margin-left: 38px
  min-width: 351px

.overlap-group4-1
  border-radius: 16px
  height: 638px
  position: relative
  width: 349px

.overlap-group2-10
  align-items: center
  background-color: $seagull
  border-radius: 16px
  display: flex
  flex-direction: column
  left: 0
  min-height: 638px
  padding: 40px 41.2px
  position: absolute
  top: 0
  width: 349px

.subscribe-to-get-access-6
  height: 55px
  letter-spacing: 0
  line-height: normal
  margin-left: 0
  margin-top: 377px
  text-align: center
  width: 247px

.overlap-group-28
  align-items: flex-start
  align-self: flex-end
  background-color: $material-themereferrorerror100
  border-radius: 16px
  display: flex
  height: 60px
  min-width: 267px
  padding: 13px 17.3px

.enter-your-email-1
  background-color: transparent
  border: 0
  height: 33px
  letter-spacing: 0
  line-height: normal
  padding: 0
  width: 225px

.enter-your-email-1::placeholder
  color: #7dbee399

.overlap-group1-10
  align-items: flex-end
  background-color: $white
  border-radius: 16px
  display: flex
  height: 44px
  justify-content: flex-end
  margin-right: 7.59px
  margin-top: 22px
  min-width: 112px
  padding: 4.8px 14.6px

.submit-1
  height: 34px
  letter-spacing: 0
  line-height: normal
  text-align: center
  width: 82px

.overlap-group3-1
  align-items: flex-end
  background-color: $white
  border-radius: 16px
  display: flex
  height: 226px
  left: 31px
  min-width: 283px
  padding: 23.4px 7.0px
  position: absolute
  top: 150px

.function-snippets-1
  letter-spacing: 0
  line-height: normal
  min-height: 178px
  width: 269px

.snippet-of-the-day-6
  height: 111px
  left: 76px
  letter-spacing: 0
  line-height: normal
  position: absolute
  text-align: center
  top: 17px
  width: 194px

.skills-4
  background-color: $material-themereferrorerror100
  border: 1px none
  display: flex
  height: 331px
  width: 427px

.languages-and-experience-3
  display: flex
  flex-direction: column
  gap: 36px
  height: 188px
  margin-top: 72px
  width: 425px

.text-carousel-3
  align-items: center
  border: 1px none
  display: flex
  gap: 20px
  height: 76px
  justify-content: center
  margin-left: 14.3px
  margin-top: 0
  width: 396.34px

.html-3
  height: 108.17px
  letter-spacing: 0
  line-height: normal
  margin-bottom: -15.09px
  margin-left: -482.72px
  margin-top: -17.09px
  text-align: center
  width: 92.93px

.css-20
  height: 108.17px
  letter-spacing: 0
  line-height: normal
  margin-bottom: -15.09px
  margin-left: -369.79px
  margin-top: -17.09px
  text-align: center
  width: 56.28px

.java-script-3
  height: 108.17px
  letter-spacing: 0
  line-height: normal
  margin-bottom: -15.09px
  margin-left: -293.52px
  margin-top: -17.09px
  text-align: center
  width: 128.26px

.react-18
  height: 109.54px
  letter-spacing: 0
  line-height: normal
  margin-bottom: -15.77px
  margin-left: -145.25px
  margin-top: -17.77px
  text-align: center
  width: 69.44px

.python-3
  height: 109.54px
  letter-spacing: 0
  line-height: normal
  margin-bottom: -15.77px
  margin-left: -55.81px
  margin-top: -17.77px
  text-align: center
  width: 83.74px

.sql-18
  height: 109.54px
  letter-spacing: 0
  line-height: normal
  margin-bottom: -15.77px
  margin-top: -17.77px
  text-align: center
  width: 49.02px

.c-40
  height: 109.54px
  letter-spacing: 0
  line-height: normal
  margin-bottom: -15.77px
  margin-top: -17.77px
  text-align: center
  width: 38.81px

.c-41
  height: 109.54px
  letter-spacing: 0
  line-height: normal
  margin-bottom: -15.77px
  margin-top: -17.77px
  text-align: center
  width: 34.72px

.java-18
  height: 109.54px
  letter-spacing: 0
  line-height: normal
  margin-bottom: -15.77px
  margin-top: -17.77px
  text-align: center
  width: 53.1px

.swift-18
  height: 109.54px
  letter-spacing: 0
  line-height: normal
  margin-bottom: -15.77px
  margin-top: -17.77px
  text-align: center
  width: 61.27px

.price-18
  height: 109.54px
  letter-spacing: 0
  line-height: normal
  margin-bottom: -15.77px
  margin-right: -37.54px
  margin-top: -17.77px
  text-align: center
  width: 49.02px

.type-script-3
  height: 109.54px
  letter-spacing: 0
  line-height: normal
  margin-bottom: -15.77px
  margin-right: -186.22px
  margin-top: -17.77px
  text-align: center
  width: 128.68px

.name-25
  height: 109.54px
  letter-spacing: 0
  line-height: normal
  margin-bottom: -15.77px
  margin-right: -267.49px
  margin-top: -17.77px
  text-align: center
  width: 61.27px

.go-20
  height: 109.54px
  letter-spacing: 0
  line-height: normal
  margin-bottom: -15.77px
  margin-right: -320.17px
  margin-top: -17.77px
  text-align: center
  width: 32.68px

.place-36
  height: 109.54px
  letter-spacing: 0
  line-height: normal
  margin-bottom: -15.77px
  margin-right: -409.62px
  margin-top: -17.77px
  text-align: center
  width: 69.44px

.place-37
  height: 109.54px
  letter-spacing: 0
  line-height: normal
  margin-bottom: -15.77px
  margin-right: -482.72px
  margin-top: -17.77px
  text-align: center
  width: 53.1px

.experiences-3
  align-items: center
  border: 1px none
  display: flex
  gap: 3px
  height: 76px
  justify-content: center
  padding: 17px 0px
  width: 425px

.web-e-commerce-development-3
  letter-spacing: 0
  line-height: normal
  margin-left: -522.00px
  text-align: center
  width: 299px

.project-management-3
  letter-spacing: 0
  line-height: normal
  margin-left: -220.00px
  text-align: center
  width: 199px

.salesforce-3
  letter-spacing: 0
  line-height: normal
  margin-left: -18.00px
  text-align: center
  width: 118px

.full-stack-3
  letter-spacing: 0
  line-height: normal
  text-align: center
  width: 116px

.gis-20
  letter-spacing: 0
  line-height: normal
  text-align: center
  width: 66px

.blockchain-11
  height: 19px
  letter-spacing: 0
  line-height: normal
  text-align: center
  width: 121px

.python-scripting-3
  letter-spacing: 0
  line-height: normal
  margin-right: -165.00px
  text-align: center
  width: 175px

.api-integrations-3
  letter-spacing: 0
  line-height: normal
  margin-right: -340.00px
  text-align: center
  width: 172px

.cloud-development-3
  letter-spacing: 0
  line-height: normal
  margin-right: -522.00px
  text-align: center
  width: 179px

.open-source-contribution-2
  align-items: flex-end
  background-color: $material-themereferrorerror100
  border: 1px none
  display: flex
  height: 721px
  padding: 71px 29px
  width: 427px

.overlap-group3-2
  height: 578px
  position: relative
  width: 368px

.overlap-group-29
  height: 578px
  left: 0
  position: absolute
  top: 0
  width: 368px

.snippets-5
  background-color: $seagull-2
  border: 1px none
  border-radius: 16px
  height: 490px
  left: 0
  position: absolute
  top: 88px
  width: 368px

.open-source-projects-contributions-3
  height: 153px
  left: 38px
  letter-spacing: 0
  line-height: normal
  position: absolute
  text-align: center
  top: 164px
  width: 291px

.eli-img-3
  height: 150px
  left: 109px
  object-fit: cover
  position: absolute
  top: 0
  width: 150px

.view-my-profile-to-s-3
  height: 167px
  left: 52px
  letter-spacing: 0
  line-height: normal
  position: absolute
  text-align: center
  top: 337px
  width: 261px

.hire-me-17
  background-color: $material-themereferrorerror100
  border: 1px none
  display: flex
  flex-direction: column
  gap: 13px
  height: 1022px
  overflow: hidden
  width: 372px

.text-11
  align-items: flex-start
  display: flex
  margin-left: 42px
  margin-top: 49px
  min-width: 345px

.overlap-group-30
  height: 314px
  position: relative
  width: 341px

.if-you-have-any-curi-3
  height: 179px
  left: 0
  letter-spacing: 0
  line-height: normal
  position: absolute
  text-align: center
  top: 135px
  width: 341px

.got-a-question-fill-3
  left: 10px
  letter-spacing: 0
  line-height: normal
  position: absolute
  text-align: center
  top: 0
  width: 321px

.span1-3
  text-decoration: underline

.click-up-1
  height: 616px
  margin-left: 22px
  object-fit: cover
  width: 350px

.private-repositories-9
  background-color: $material-themereferrorerror100
  border: 1px none
  display: flex
  height: 568px
  width: 428px

.private-repositories-10
  align-items: flex-start
  display: flex
  height: 405px
  margin-left: 19px
  margin-top: 83px
  min-width: 396px

.overlap-group-31
  align-items: center
  background-color: $seagull-2
  border-radius: 16px
  display: flex
  flex-direction: column
  min-height: 405px
  padding: 39px
  position: relative
  width: 392px

.private-repositories-11
  height: 38px
  letter-spacing: 0
  line-height: normal
  margin-left: 2.0px
  min-width: 306px
  text-align: center

.in-order-to-access-m-3
  align-self: flex-start
  height: 186px
  letter-spacing: 0
  line-height: normal
  margin-top: 35px
  text-align: center
  width: 312px

.bitcellular-6
  background-color: $material-themereferrorerror100
  border: 1px none
  display: flex
  height: 666px
  width: 428px

.bitcellular-7
  display: flex
  flex-direction: column
  height: 480px
  margin-left: 56px
  margin-top: 74px
  width: 320px

.blockchain-new-logo-3
  height: 90px
  margin-left: 114px
  width: 90px

.build-a-bitcell-and-3
  height: 182px
  letter-spacing: 0
  line-height: normal
  margin-top: 19px
  text-align: center
  width: 318px

.bitcell-signup-3
  align-items: center
  border: 1px none
  display: flex
  flex-direction: column
  gap: 30px
  height: 189px
  justify-content: center
  position: relative
  width: 318px

.user-email-3
  height: 43px
  min-width: 306px

.overlap-group1-11
  align-items: flex-start
  background-color: $material-themereferrorerror100
  border: 1px solid
  border-color: $cape-cod
  border-radius: 8px
  display: flex
  height: 43px
  min-width: 304px
  padding: 8px 19px

.email-address-3
  height: 26px
  letter-spacing: 0
  line-height: normal
  width: 210px

.blockchain-12
  background-color: $material-themereferrorerror100
  border: 1px none
  display: flex
  height: 665px
  width: 428px

.blockchain-13
  display: flex
  flex-direction: column
  height: 500px
  margin-left: 17px
  margin-top: 82px
  position: relative
  width: 394.47px

.tradent-logo5-transparent-2-5
  height: 120px
  margin-left: 137.0px
  object-fit: cover
  width: 120px

.blockchains-text-4
  align-items: flex-start
  display: flex
  height: 165.11px
  margin-left: 13px
  margin-top: 41px
  min-width: 371px

.overlap-group-32
  height: 165px
  position: relative
  width: 367px

.we-have-experience-w-5
  height: 86px
  left: 22px
  letter-spacing: 0
  line-height: normal
  position: absolute
  text-align: center
  top: 79px
  width: 322px

.blockchain-bounty-hunting-team-tdto-5
  height: 86px
  left: 0
  letter-spacing: 0
  line-height: normal
  position: absolute
  text-align: center
  top: 0
  width: 367px

.blockchains-tech-5
  display: flex
  gap: 38px
  height: 45px
  margin-top: 27.9px
  position: relative
  width: 394.47px

.socials-2
  background-color: $material-themereferrorerror100
  border: 1px none
  display: flex
  height: 337px
  overflow: hidden
  width: 428px

.icons-5
  display: flex
  margin-left: 136px
  margin-top: 129px
  width: 1240px

.telegram-app-2
  height: 70px
  margin-left: -2435px
  margin-top: -4747px
  width: 70px

.discord-new-3
  height: 80px
  margin-left: 220px
  margin-top: -4757px
  width: 80px

.twitch-5
  height: 70px
  margin-left: 220px
  margin-top: -4747px
  width: 70px

.icon-mail-3
  height: 70px
  margin-left: 1775px
  margin-top: 10px
  width: 70px

.linked-in-2
  height: 70px
  margin-left: 220px
  margin-top: 10px
  width: 2px

.recommended-material-6
  background-color: $material-themereferrorerror100
  border: 1px none
  display: flex
  flex-direction: column
  gap: 32px
  height: 1805px
  position: relative

.text-12
  display: flex
  flex-direction: column
  gap: 19px
  height: 232px
  margin-left: 22px
  margin-top: 116px
  width: 387px

.recommended-material-7
  color: $cape-cod
  font-family: $font-family-raleway
  font-size: 48px
  font-weight: 700
  height: 113px
  letter-spacing: 0
  line-height: normal
  text-align: center
  width: 383px

.a-few-of-the-most-re-4
  height: 100px
  letter-spacing: 0
  line-height: normal
  margin-left: 27px
  text-align: center
  width: 330px
</style>
