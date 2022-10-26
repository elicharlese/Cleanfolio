<template>
  <div class="the-public screen">
    <div class="the-public-1">
      <div class="body-27">
        <navbar7
          :className="navbar7Props.className"
          :buttonLoginProps="navbar7Props.buttonLoginProps"
          :buttonWalletProps="navbar7Props.buttonWalletProps"
        />
        <div class="hero-23">
          <div class="flex-col-15">
            <div class="the-public-2 raleway-normal-cape-cod-80px">{{ thePublic }}</div>
            <p class="this-web-30-applica-5 raleway-normal-cape-cod-26px">{{ thisWeb30Applica }}</p>
            <div class="flex-row-92">
              <div class="overlap-group-90">
                <div class="contribute-5 raleway-bold-white-32px">{{ contribute }}</div>
              </div>
              <button211 :dashboard="button211Props.dashboard" />
            </div>
          </div>
          <img class="logo-the-public-2" :src="logoThePublic" alt="logo-the-public" />
        </div>
        <products :className="productsProps.className" :downloadsProps="productsProps.downloadsProps" />
        <tools
          :className="toolsProps.className"
          :packages1Props="toolsProps.packages1Props"
          :packages2Props="toolsProps.packages2Props"
          :packages3Props="toolsProps.packages3Props"
        />
        <div class="team-5">
          <div class="become-a-contributor-5 raleway-normal-white-100px">
            <span class="raleway-normal-cape-cod-100px">{{ spanText1 }}</span
            ><span class="span1-11">{{ spanText2 }}</span>
          </div>
          <avatars
            :user71Props="avatarsProps.user71Props"
            :user72Props="avatarsProps.user72Props"
            :user73Props="avatarsProps.user73Props"
            :user74Props="avatarsProps.user74Props"
            :user75Props="avatarsProps.user75Props"
            :user76Props="avatarsProps.user76Props"
            :user77Props="avatarsProps.user77Props"
          />
        </div>
        <div class="live-developing-5">
          <dev-environment :className="devEnvironmentProps.className" />
          <div class="flex-row-93">
            <div class="overlap-group-91">
              <div class="learn-how-5 valign-text-middle raleway-bold-white-32px">{{ learnHow }}</div>
            </div>
            <button212 :dashboard="button212Props.dashboard" />
          </div>
        </div>
        <x-footer11 :className="xFooter11Props.className" :footerMenu2Props="xFooter11Props.footerMenu2Props" />
      </div>
    </div>
  </div>
</template>

<script>
import Navbar7 from "./Navbar7";
import Button211 from "./Button211";
import Products from "./Products";
import Tools from "./Tools";
import Avatars from "./Avatars";
import DevEnvironment from "./DevEnvironment";
import Button212 from "./Button212";
import xFooter11 from "./xFooter11";
export default {
  name: "ThePublic",
  components: {
    Navbar7,
    Button211,
    Products,
    Tools,
    Avatars,
    DevEnvironment,
    Button212,
    xFooter11,
  },
  props: [
    "thePublic",
    "thisWeb30Applica",
    "contribute",
    "logoThePublic",
    "spanText1",
    "spanText2",
    "learnHow",
    "navbar7Props",
    "button211Props",
    "productsProps",
    "toolsProps",
    "avatarsProps",
    "devEnvironmentProps",
    "button212Props",
    "xFooter11Props",
  ],
};
</script>

<style lang="sass">
@import '../../variables'

.the-public
  align-items: center
  border: 1px none
  display: flex
  flex-direction: column
  gap: 50px
  height: 100vh
  min-height: 5592px
  min-width: 1512px
  width: 100%

.the-public-1
  display: flex
  height: 5592px
  min-width: 1512px

.body-27
  background-color: $material-themereferrorerror100
  border: 1px none
  display: flex
  flex-direction: column
  height: 5592px
  position: relative
  width: 1512px

.hero-23
  align-items: center
  background-color: $material-themereferrorerror100
  border: 1px none
  display: flex
  gap: 142px
  width: 1512px

.flex-col-15
  align-items: flex-start
  display: flex
  flex-direction: column
  margin-bottom: 75.0px
  margin-left: 94px
  min-height: 339px
  width: 570px

.the-public-2
  letter-spacing: 0
  line-height: normal
  margin-left: 3px
  min-height: 94px

.this-web-30-applica-5
  letter-spacing: 0
  line-height: normal
  margin-top: 25px
  width: 570px

.flex-row-92
  align-items: flex-start
  display: flex
  gap: 27px
  margin-left: 3px
  margin-top: 59px
  min-width: 541px
  position: relative

.overlap-group-90
  align-items: center
  background-color: $cararra
  border-radius: 16px
  display: flex
  height: 68px
  justify-content: flex-end
  min-width: 257px
  padding: 0 25px

.contribute-5
  letter-spacing: 0
  line-height: normal
  min-height: 38px
  min-width: 206px

.logo-the-public-2
  height: 982px
  object-fit: cover
  width: 706px

.team-5
  background-color: $material-themereferrorerror100
  border: 1px none
  display: flex
  flex-direction: column
  gap: 60px
  height: 982px
  position: relative

.become-a-contributor-5
  height: 117px
  letter-spacing: 0
  line-height: normal
  margin-left: 253px
  margin-top: 105px
  width: 1006px

.span1-11
  color: $cararra
  font-family: $font-family-raleway
  font-size: $font-size-xxxl
  font-weight: 400

.live-developing-5
  align-items: center
  background-color: $material-themereferrorerror100
  border: 1px none
  display: flex
  flex-direction: column
  gap: 66px
  height: 982px
  padding: 40px 0
  position: relative

.flex-row-93
  align-items: flex-start
  display: flex
  gap: 100px
  min-width: 614px
  position: relative

.overlap-group-91
  align-items: center
  background-color: $cararra
  border-radius: 16px
  display: flex
  height: 68px
  min-width: 257px
  padding: 0 26px

.learn-how-5
  height: 38px
  letter-spacing: 0
  line-height: normal
  min-width: 194px
  text-align: center
</style>
