<template>
  <div class="half-and-half screen">
    <div class="half-and-half-1">
      <div class="body-26">
        <navbar7
          :className="navbar7Props.className"
          :buttonLoginProps="navbar7Props.buttonLoginProps"
          :buttonWalletProps="navbar7Props.buttonWalletProps"
        />
        <div class="hero-22">
          <div class="flex-col-14">
            <div class="half-half raleway-normal-cape-cod-80px">{{ halfHalf }}</div>
            <p class="this-web-30-applica-4 raleway-normal-cape-cod-26px">{{ thisWeb30Applica }}</p>
            <div class="flex-row-90">
              <div class="overlap-group-88">
                <div class="contribute-4 raleway-bold-white-32px">{{ contribute }}</div>
              </div>
              <button29 :dashboard="button29Props.dashboard" />
            </div>
          </div>
          <img class="logo-half-and-half-2" :src="logoHalfAndHalf" alt="logo-half-and-half" />
        </div>
        <products :className="productsProps.className" :downloadsProps="productsProps.downloadsProps" />
        <tools
          :className="toolsProps.className"
          :packages1Props="toolsProps.packages1Props"
          :packages2Props="toolsProps.packages2Props"
          :packages3Props="toolsProps.packages3Props"
        />
        <div class="team-4">
          <div class="become-a-contributor-4 raleway-normal-white-100px">
            <span class="raleway-normal-cape-cod-100px">{{ spanText1 }}</span
            ><span class="span1-10">{{ spanText2 }}</span>
          </div>
          <avatars2
            :user71Props="avatars2Props.user71Props"
            :user72Props="avatars2Props.user72Props"
            :user73Props="avatars2Props.user73Props"
            :user74Props="avatars2Props.user74Props"
            :user75Props="avatars2Props.user75Props"
            :user76Props="avatars2Props.user76Props"
            :user77Props="avatars2Props.user77Props"
          />
        </div>
        <div class="live-developing-4">
          <dev-environment :className="devEnvironmentProps.className" />
          <div class="flex-row-91">
            <div class="overlap-group-89">
              <div class="learn-how-4 valign-text-middle raleway-bold-white-32px">{{ learnHow }}</div>
            </div>
            <button210 :dashboard="button210Props.dashboard" />
          </div>
        </div>
        <x-footer11 :className="xFooter11Props.className" :footerMenu2Props="xFooter11Props.footerMenu2Props" />
      </div>
    </div>
  </div>
</template>

<script>
import Navbar7 from "./Navbar7";
import Button29 from "./Button29";
import Products from "./Products";
import Tools from "./Tools";
import Avatars2 from "./Avatars2";
import DevEnvironment from "./DevEnvironment";
import Button210 from "./Button210";
import xFooter11 from "./xFooter11";
export default {
  name: "HalfAndHalf",
  components: {
    Navbar7,
    Button29,
    Products,
    Tools,
    Avatars2,
    DevEnvironment,
    Button210,
    xFooter11,
  },
  props: [
    "halfHalf",
    "thisWeb30Applica",
    "contribute",
    "logoHalfAndHalf",
    "spanText1",
    "spanText2",
    "learnHow",
    "navbar7Props",
    "button29Props",
    "productsProps",
    "toolsProps",
    "avatars2Props",
    "devEnvironmentProps",
    "button210Props",
    "xFooter11Props",
  ],
};
</script>

<style lang="sass">
@import '../../variables'

.half-and-half
  align-items: center
  border: 1px none
  display: flex
  flex-direction: column
  gap: 53px
  height: 100vh
  min-height: 5592px
  min-width: 1512px
  width: 100%

.half-and-half-1
  display: flex
  height: 5592px
  min-width: 1512px

.body-26
  background-color: $material-themereferrorerror100
  border: 1px none
  display: flex
  flex-direction: column
  height: 5592px
  position: relative
  width: 1512px

.hero-22
  align-items: center
  background-color: $material-themereferrorerror100
  border: 1px none
  display: flex
  gap: 190px
  width: 1512px

.flex-col-14
  align-items: flex-start
  display: flex
  flex-direction: column
  margin-bottom: 87.0px
  margin-left: 94px
  min-height: 327px
  width: 570px

.half-half
  letter-spacing: 0
  line-height: normal
  margin-left: 3px
  min-height: 94px

.this-web-30-applica-4
  letter-spacing: 0
  line-height: normal
  margin-top: 25px
  width: 570px

.flex-row-90
  align-items: flex-start
  display: flex
  gap: 31px
  margin-left: 3px
  margin-top: 47px
  min-width: 545px
  position: relative

.overlap-group-88
  align-items: center
  background-color: $peach-yellow
  border-radius: 16px
  display: flex
  height: 68px
  justify-content: flex-end
  min-width: 257px
  padding: 0 25px

.contribute-4
  letter-spacing: 0
  line-height: normal
  min-height: 38px
  min-width: 206px

.logo-half-and-half-2
  height: 982px
  object-fit: cover
  width: 658px

.team-4
  background-color: $material-themereferrorerror100
  border: 1px none
  display: flex
  flex-direction: column
  gap: 60px
  height: 982px
  position: relative

.become-a-contributor-4
  height: 117px
  letter-spacing: 0
  line-height: normal
  margin-left: 253px
  margin-top: 105px
  width: 1006px

.span1-10
  color: $dairy-cream
  font-family: $font-family-raleway
  font-size: $font-size-xxxl
  font-weight: 400

.live-developing-4
  align-items: center
  background-color: $material-themereferrorerror100
  border: 1px none
  display: flex
  flex-direction: column
  gap: 66px
  height: 982px
  padding: 40px 0
  position: relative

.flex-row-91
  align-items: flex-start
  display: flex
  gap: 100px
  min-width: 614px
  position: relative

.overlap-group-89
  align-items: center
  background-color: $dairy-cream
  border-radius: 16px
  display: flex
  height: 68px
  min-width: 257px
  padding: 0 26px

.learn-how-4
  height: 38px
  letter-spacing: 0
  line-height: normal
  min-width: 194px
  text-align: center
</style>
