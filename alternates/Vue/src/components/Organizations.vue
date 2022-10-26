<template>
  <div class="organizations-22 screen">
    <div class="organizations-23">
      <div class="body-21">
        <div class="navbar-13 raleway-bold-cape-cod-20px">
          <img class="dashboard-layout-12" :src="dashboardLayout" alt="Dashboard Layout" />
          <div class="hire-me-45">{{ hireMe }}</div>
          <div class="github-22">{{ github }}</div>
          <div class="open-source-34">{{ openSource }}</div>
          <div class="organizations-24">{{ organizations }}</div>
          <button-login :className="buttonLoginProps.className" />
          <button-wallet :className="buttonWalletProps.className" />
        </div>
        <div class="major-organizations">
          <div class="hero-17">
            <div class="flex-row-36">
              <div class="overlap-group-63">
                <img class="react-native" :src="reactNative" alt="React Native" /><img
                  class="laptop"
                  :src="laptop"
                  alt="Laptop"
                />
              </div>
              <h1 class="hero-text valign-text-middle">{{ heroText }}</h1>
            </div>
            <p class="ece-dapps-channel-op valign-text-middle raleway-normal-cape-cod-26px">{{ eceDappsChannelOp }}</p>
          </div>
          <div class="major-organizations-buttons">
            <router-link to="/cec">
              <div class="button-21">
                <div class="overlap-group2-22">
                  <div class="hero-button-38 valign-text-middle raleway-bold-white-32px">{{ heroButton1 }}</div>
                </div>
              </div></router-link
            ><router-link to="/ts">
              <div class="button-19">
                <div class="overlap-group1-27">
                  <div class="hero-button-39 raleway-bold-white-32px">{{ heroButton2 }}</div>
                </div>
              </div></router-link
            ><router-link to="/tdt">
              <div class="button-19">
                <div class="overlap-group-64">
                  <div class="hero-button-40 raleway-bold-white-32px">{{ heroButton3 }}</div>
                </div>
              </div></router-link
            >
          </div>
        </div>
        <div class="dao-development">
          <div class="overlap-group1-28">
            <step4 :sourceCode="step41Props.sourceCode" :getPaidToBeADeveloper="step41Props.getPaidToBeADeveloper" />
            <step4
              :sourceCode="step42Props.sourceCode"
              :getPaidToBeADeveloper="step42Props.getPaidToBeADeveloper"
              :className="step42Props.className"
            />
            <step4
              :sourceCode="step43Props.sourceCode"
              :getPaidToBeADeveloper="step43Props.getPaidToBeADeveloper"
              :className="step43Props.className"
            />
            <step4
              :sourceCode="step44Props.sourceCode"
              :getPaidToBeADeveloper="step44Props.getPaidToBeADeveloper"
              :className="step44Props.className"
            />
            <img
              class="timeline"
              src="https://anima-uploads.s3.amazonaws.com/projects/62fe76f7359e99eee487b330/releases/634b1e2b9caf1e7ca700d848/img/-timeline@1x.svg"
              alt="timeline"
            />
          </div>
        </div>
        <div class="minor-organizations">
          <div class="minor-organizations-1">{{ minorOrganizations }}</div>
          <div class="wave">
            <div class="overlap-group-65">
              <router-link to="/3rupt"><img class="logo-3rupt" :src="logo3Rupt" alt="logo-3rupt" /></router-link
              ><router-link to="/bitcellular"
                ><img class="logo-bitcell" :src="logoBitcell" alt="logo-bitcell" /></router-link
              ><router-link to="/cheers"><img class="logo-cheers" :src="logoCheers" alt="logo-cheers" /></router-link
              ><router-link to="/half-and-half"
                ><img class="logo-half-and-half" :src="logoHalfAndHalf" alt="logo-half-and-half" /></router-link
              ><router-link to="/the-public"
                ><img class="logo-the-public" :src="logoThePublic" alt="logo-the-public" /></router-link
              ><router-link to="/knott-bank"
                ><img class="logo-knott-bank" :src="logoKnottBank" alt="logo-knott-bank" /></router-link
              ><router-link to="/hooden"><img class="logo-hooden" :src="logoHooden" alt="logo-hooden" /></router-link
              ><router-link to="/uni-meta"
                ><img class="logo-uni-meta" :src="logoUniMeta" alt="logo-uni-meta" /></router-link
              ><img
                class="vector"
                src="https://anima-uploads.s3.amazonaws.com/projects/62fe76f7359e99eee487b330/releases/634b1e2b9caf1e7ca700d848/img/vector@1x.svg"
                alt="Vector"
              />
            </div>
            <router-link to="/blockify"
              ><img class="logo-blockify" :src="logoBlockify" alt="logo-blockify"
            /></router-link>
          </div>
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
import Step4 from "./Step4";
import xFooter from "./xFooter";
export default {
  name: "Organizations",
  components: {
    ButtonLogin,
    ButtonWallet,
    Step4,
    xFooter,
  },
  props: [
    "dashboardLayout",
    "hireMe",
    "github",
    "openSource",
    "organizations",
    "reactNative",
    "laptop",
    "heroText",
    "eceDappsChannelOp",
    "heroButton1",
    "heroButton2",
    "heroButton3",
    "minorOrganizations",
    "logo3Rupt",
    "logoBitcell",
    "logoCheers",
    "logoHalfAndHalf",
    "logoThePublic",
    "logoKnottBank",
    "logoHooden",
    "logoUniMeta",
    "logoBlockify",
    "buttonLoginProps",
    "buttonWalletProps",
    "step41Props",
    "step42Props",
    "step43Props",
    "step44Props",
    "xFooterProps",
  ],
};
</script>

<style lang="sass">
@import '../../variables'

.organizations-22
  align-items: center
  border: 1px none
  display: flex
  flex-direction: column
  gap: 82px
  height: 100vh
  min-height: 3758px
  min-width: 1512px
  width: 100%

.organizations-23
  display: flex
  height: 3758px
  min-width: 1512px

.body-21
  background-color: $material-themereferrorerror100
  border: 1px none
  display: flex
  flex-direction: column
  height: 3758px
  overflow: hidden
  position: relative
  width: 1512px

.navbar-13
  background-color: $material-themereferrorerror100
  border: 1px none
  display: flex
  height: 90px
  position: relative
  width: 1512px

.dashboard-layout-12
  height: 60px
  margin-left: 23px
  margin-top: 15px
  width: 60px

.hire-me-45
  height: 23px
  letter-spacing: 0
  line-height: normal
  margin-left: 539px
  margin-top: 34px
  text-align: center
  width: 81px

.github-22
  height: 23px
  letter-spacing: 0
  line-height: normal
  margin-left: 19px
  margin-top: 34px
  text-align: center
  width: 77px

.open-source-34
  height: 23px
  letter-spacing: 0
  line-height: normal
  margin-left: 19px
  margin-top: 33px
  text-align: center
  width: 145px

.organizations-24
  height: 23px
  letter-spacing: 0
  line-height: normal
  margin-left: 19px
  margin-top: 34px
  text-align: center
  width: 163px

.major-organizations
  background-color: $material-themereferrorerror100
  border: 1px none
  display: flex
  flex-direction: column
  gap: 150px
  height: 982px

.hero-17
  align-items: center
  display: flex
  flex-direction: column
  margin-left: 250px
  margin-top: 272px
  min-height: 270px
  width: 1024px

.flex-row-36
  align-items: flex-start
  display: flex
  margin-right: 4.0px
  min-width: 1020px

.overlap-group-63
  height: 151px
  position: relative
  width: 269px

.react-native
  height: 39px
  left: 109px
  position: absolute
  top: 56px
  width: 51px

.laptop
  height: 151px
  left: 0
  position: absolute
  top: 0
  width: 269px

.hero-text
  color: $cape-cod
  font-family: $font-family-raleway
  font-size: 128px
  font-weight: 400
  height: 151px
  letter-spacing: 0
  line-height: normal
  text-align: center
  width: 751px

.ece-dapps-channel-op
  height: 119px
  letter-spacing: 0
  line-height: normal
  margin-right: 12.0px
  text-align: center
  width: 870px

.major-organizations-buttons
  display: flex
  gap: 82px
  margin-left: 183px
  width: 1147px

.button-21
  align-items: flex-start
  cursor: pointer
  display: flex
  min-width: 467px

.overlap-group2-22
  align-items: center
  background-color: $seagull
  border-radius: 16px
  display: flex
  height: 68px
  min-width: 465px
  padding: 0 37px

.hero-button-38
  height: 38px
  letter-spacing: 0
  line-height: normal
  min-width: 390px
  text-align: center

.button-19
  align-items: flex-start
  cursor: pointer
  display: flex
  min-width: 259px

.overlap-group1-27
  align-items: center
  background-color: $seagull
  border-radius: 16px
  display: flex
  height: 68px
  justify-content: flex-end
  min-width: 257px
  padding: 0 27px

.hero-button-39
  letter-spacing: 0
  line-height: normal
  min-height: 38px
  min-width: 202px

.overlap-group-64
  align-items: center
  background-color: $seagull
  border-radius: 16px
  display: flex
  height: 68px
  min-width: 257px
  padding: 0 68px

.hero-button-40
  letter-spacing: 0
  line-height: normal
  min-height: 38px
  min-width: 121px

.dao-development
  align-items: flex-end
  background-color: $material-themereferrorerror100
  border: 1px none
  display: flex
  height: 982px
  margin-left: 5px
  padding: 30px 129px
  width: 1512px

.overlap-group1-28
  height: 915px
  margin-left: 1px
  position: relative
  width: 1253px

.timeline
  height: 879px
  left: 232px
  position: absolute
  top: 36px
  width: 778px

.minor-organizations
  background-color: $material-themereferrorerror100
  border: 1px none
  display: flex
  flex-direction: column
  gap: 185px
  height: 1112px

.minor-organizations-1
  color: $cape-cod
  font-family: $font-family-inter
  font-size: $font-size-xxxl
  font-weight: 400
  height: 121px
  letter-spacing: 0
  line-height: normal
  margin-left: 282px
  margin-top: 156px
  text-align: center
  width: 949px

.wave
  height: 650px
  position: relative
  width: 1512px

.overlap-group-65
  height: 625px
  left: 0
  position: absolute
  top: 25px
  width: 1512px

.logo-3rupt
  cursor: pointer
  height: 190px
  left: 84px
  object-fit: cover
  position: absolute
  top: 365px
  width: 190px

.logo-bitcell
  cursor: pointer
  height: 150px
  left: 254px
  object-fit: cover
  position: absolute
  top: 244px
  width: 150px

.logo-cheers
  cursor: pointer
  height: 150px
  left: 404px
  object-fit: cover
  position: absolute
  top: 94px
  width: 150px

.logo-half-and-half
  cursor: pointer
  height: 150px
  left: 606px
  object-fit: cover
  position: absolute
  top: 0
  width: 150px

.logo-the-public
  cursor: pointer
  height: 150px
  left: 808px
  object-fit: cover
  position: absolute
  top: 0
  width: 150px

.logo-knott-bank
  cursor: pointer
  height: 150px
  left: 987px
  object-fit: cover
  position: absolute
  top: 94px
  width: 150px

.logo-hooden
  cursor: pointer
  height: 150px
  left: 1137px
  object-fit: cover
  position: absolute
  top: 244px
  width: 150px

.logo-uni-meta
  cursor: pointer
  height: 150px
  left: 1287px
  object-fit: cover
  position: absolute
  top: 150px
  width: 150px

.vector
  height: 500px
  left: 0
  position: absolute
  top: 125px
  width: 1512px

.logo-blockify
  cursor: pointer
  height: 150px
  left: 1362px
  object-fit: cover
  position: absolute
  top: 0
  width: 150px
</style>
