<template>
  <div class="open-source-31 screen">
    <div class="body-20">
      <div class="flex-col-1">
        <div class="navbar-12 raleway-bold-cape-cod-20px">
          <img class="dashboard-layout-11" :src="dashboardLayout" alt="Dashboard Layout" />
          <div class="hire-me-44">{{ hireMe }}</div>
          <div class="github-21">{{ github }}</div>
          <div class="open-source-32">{{ openSource }}</div>
          <div class="organizations-21">{{ organizations }}</div>
          <button-login :className="buttonLoginProps.className" />
          <button-wallet :className="buttonWalletProps.className" />
        </div>
        <div class="hero-16">
          <div class="overlap-group5-15">
            <img
              class="componentlottiehttps-3"
              :src="componentLottieHttpsAssets4Lottiefi"
              alt="component:lottie:https://assets4.lottiefiles.com/packages/lf20_efx3aac9.json]"
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
        <div class="open-source-33">
          <div class="overlap-group4-8">
            <img class="collaborate-img" :src="collaborateImg" alt="collaborate-img" />
            <div class="overlap-group1-24">
              <div class="overlap-group-60">
                <div class="bangobongo17 valign-text-middle raleway-normal-cape-cod-32px">{{ bangobongo17 }}</div>
                <img class="discord-bubble" :src="discordBubble" alt="Discord Bubble" />
              </div>
              <div class="lets-work-together valign-text-middle raleway-normal-cape-cod-100px">
                {{ letsWorkTogether }}
              </div>
            </div>
          </div>
        </div>
        <div class="tdto-live">
          <div class="overlap-group3-10" :style="{ 'background-image': 'url(' + overlapGroup3 + ')' }">
            <img class="twitch-22" :src="twitch" alt="Twitch" />
          </div>
        </div>
        <div class="github-classrooms">
          <div class="git-hub-classrooms valign-text-middle raleway-normal-cape-cod-100px">{{ githubClassrooms }}</div>
          <p class="these-classes-are-sm valign-text-middle raleway-normal-black-22px">{{ theseClassesAreSm }}</p>
          <classroom-containers v-bind="classroomContainersProps" />
        </div>
        <x-footer
          :image8="xFooterProps.image8"
          :className="xFooterProps.className"
          :footerMenuProps="xFooterProps.footerMenuProps"
        />
      </div>
    </div>
  </div>
</template>

<script>
import ButtonLogin from "./ButtonLogin";
import ButtonWallet from "./ButtonWallet";
import HeroInfo from "./HeroInfo";
import ClassroomContainers from "./ClassroomContainers";
import xFooter from "./xFooter";
export default {
  name: "OpenSource2",
  components: {
    ButtonLogin,
    ButtonWallet,
    HeroInfo,
    ClassroomContainers,
    xFooter,
  },
  props: [
    "dashboardLayout",
    "hireMe",
    "github",
    "openSource",
    "organizations",
    "componentLottieHttpsAssets4Lottiefi",
    "collaborateImg",
    "bangobongo17",
    "discordBubble",
    "letsWorkTogether",
    "overlapGroup3",
    "twitch",
    "githubClassrooms",
    "theseClassesAreSm",
    "buttonLoginProps",
    "buttonWalletProps",
    "heroInfoProps",
    "classroomContainersProps",
    "xFooterProps",
  ],
};
</script>

<style lang="sass">
@import '../../variables'

.open-source-31
  align-items: flex-start
  background-color: $material-themereferrorerror100
  border: 1px none
  display: flex
  gap: 10px
  height: 100vh
  min-height: 4674px
  min-width: 1512px
  width: 100%

.body-20
  background-color: $material-themereferrorerror100
  border: 1px none
  height: 4674px
  min-width: 1512px

.flex-col-1
  align-items: flex-start
  display: flex
  flex-direction: column
  min-height: 4674px
  position: relative
  width: 1512px

.navbar-12
  background-color: $material-themereferrorerror100
  border: 1px none
  display: flex
  height: 90px
  position: relative
  width: 1512px

.dashboard-layout-11
  height: 60px
  margin-left: 23px
  margin-top: 15px
  width: 60px

.hire-me-44
  height: 23px
  letter-spacing: 0
  line-height: normal
  margin-left: 539px
  margin-top: 34px
  text-align: center
  width: 81px

.github-21
  height: 23px
  letter-spacing: 0
  line-height: normal
  margin-left: 19px
  margin-top: 34px
  text-align: center
  width: 77px

.open-source-32
  height: 23px
  letter-spacing: 0
  line-height: normal
  margin-left: 19px
  margin-top: 33px
  text-align: center
  width: 145px

.organizations-21
  height: 23px
  letter-spacing: 0
  line-height: normal
  margin-left: 19px
  margin-top: 34px
  text-align: center
  width: 163px

.hero-16
  align-items: flex-start
  background-color: $material-themereferrorerror100
  border: 1px none
  display: flex
  height: 879px
  padding: 0 79px
  width: 1512px

.overlap-group5-15
  height: 706px
  position: relative
  width: 1339px

.componentlottiehttps-3
  height: 706px
  left: 530px
  position: absolute
  top: 0
  width: 809px

.open-source-33
  align-items: flex-start
  background-color: $material-themereferrorerror100
  border: 1px none
  display: flex
  height: 982px
  width: 1512px

.overlap-group4-8
  height: 833px
  margin-left: 28px
  position: relative
  width: 1484px

.collaborate-img
  height: 833px
  left: 564px
  position: absolute
  top: 0
  width: 920px

.overlap-group1-24
  height: 560px
  left: 0
  position: absolute
  top: 89px
  width: 779px

.overlap-group-60
  height: 119px
  left: 171px
  position: absolute
  top: 441px
  width: 439px

.bangobongo17
  height: 51px
  left: 80px
  letter-spacing: 0
  line-height: normal
  position: absolute
  text-align: center
  top: 34px
  width: 359px

.discord-bubble
  height: 119px
  left: 0
  position: absolute
  top: 0
  width: 117px

.lets-work-together
  height: 546px
  left: 0
  letter-spacing: 0
  line-height: normal
  position: absolute
  text-align: center
  top: 0
  width: 779px

.tdto-live
  align-items: flex-start
  background-color: $material-themereferrorerror100
  border: 1px none
  display: flex
  height: 1048px
  padding: 131px 156px
  width: 1512px

.overlap-group3-10
  align-items: center
  background-position: 50% 50%
  background-size: cover
  display: flex
  height: 720px
  min-width: 1200px
  padding: 0 552px

.twitch-22
  height: 96px
  width: 96px

.github-classrooms
  background-color: $material-themereferrorerror100
  border: 1px none
  display: flex
  flex-direction: column
  height: 1083px
  position: relative
  width: 1512px

.git-hub-classrooms
  height: 117px
  letter-spacing: 0
  line-height: normal
  margin-left: 312px
  margin-top: 70px
  text-align: center
  width: 887px

.these-classes-are-sm
  height: 91px
  letter-spacing: 0
  line-height: normal
  margin-left: 126px
  margin-top: 21px
  text-align: center
  width: 1260px
</style>
