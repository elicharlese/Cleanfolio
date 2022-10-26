<template>
  <div class="cec screen">
    <div class="cec-1">
      <div class="body-24">
        <navbar7
          :className="navbar7Props.className"
          :buttonLoginProps="navbar7Props.buttonLoginProps"
          :buttonWalletProps="navbar7Props.buttonWalletProps"
        />
        <div class="hero-20">
          <div class="flex-col-12">
            <div class="creative-e-commerce-co raleway-normal-cape-cod-80px" v-html="creativeECommerceCo"></div>
            <p class="this-web-30-applica-2 raleway-normal-cape-cod-26px">{{ thisWeb30Applica }}</p>
            <div class="flex-row-86">
              <div class="overlap-group-82">
                <div class="contribute-2 raleway-bold-white-32px">{{ contribute }}</div>
              </div>
              <button25 :dashboard="button25Props.dashboard" />
            </div>
          </div>
          <img class="cec-logo-15" :src="cecLogo" alt="cec-logo" />
        </div>
        <products :className="productsProps.className" :downloadsProps="productsProps.downloadsProps" />
        <tools
          :className="toolsProps.className"
          :packages1Props="toolsProps.packages1Props"
          :packages2Props="toolsProps.packages2Props"
          :packages3Props="toolsProps.packages3Props"
        />
        <div class="team-2">
          <div class="become-a-contributor-2 raleway-normal-white-100px">
            <span class="raleway-normal-cape-cod-100px">{{ spanText1 }}</span
            ><span class="span1-8">{{ spanText2 }}</span>
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
        <div class="live-developing-2">
          <dev-environment :className="devEnvironmentProps.className" />
          <div class="flex-row-87">
            <div class="overlap-group-83">
              <div class="learn-how-2 valign-text-middle raleway-bold-white-32px">{{ learnHow }}</div>
            </div>
            <button26 :dashboard="button26Props.dashboard" />
          </div>
        </div>
        <x-footer11 :className="xFooter11Props.className" :footerMenu2Props="xFooter11Props.footerMenu2Props" />
      </div>
    </div>
  </div>
</template>

<script>
import Navbar7 from "./Navbar7";
import Button25 from "./Button25";
import Products from "./Products";
import Tools from "./Tools";
import Avatars from "./Avatars";
import DevEnvironment from "./DevEnvironment";
import Button26 from "./Button26";
import xFooter11 from "./xFooter11";
export default {
  name: "CEC",
  components: {
    Navbar7,
    Button25,
    Products,
    Tools,
    Avatars,
    DevEnvironment,
    Button26,
    xFooter11,
  },
  props: [
    "creativeECommerceCo",
    "thisWeb30Applica",
    "contribute",
    "cecLogo",
    "spanText1",
    "spanText2",
    "learnHow",
    "navbar7Props",
    "button25Props",
    "productsProps",
    "toolsProps",
    "avatarsProps",
    "devEnvironmentProps",
    "button26Props",
    "xFooter11Props",
  ],
};
</script>

<style lang="sass">
@import '../../variables'

.cec
  align-items: center
  border: 1px none
  display: flex
  flex-direction: column
  gap: 122px
  height: 100vh
  min-height: 5592px
  min-width: 1512px
  width: 100%

.cec-1
  display: flex
  height: 5592px
  min-width: 1512px

.body-24
  background-color: $material-themereferrorerror100
  border: 1px none
  display: flex
  flex-direction: column
  height: 5592px
  position: relative
  width: 1512px

.hero-20
  align-items: flex-start
  background-color: $material-themereferrorerror100
  border: 1px none
  display: flex
  gap: 233px
  height: 982px
  width: 1512px

.flex-col-12
  align-items: flex-start
  display: flex
  flex-direction: column
  margin-left: 94px
  margin-top: 104px
  min-height: 526px
  width: 570px

.creative-e-commerce-co
  letter-spacing: 0
  line-height: normal
  min-height: 282px

.this-web-30-applica-2
  letter-spacing: 0
  line-height: normal
  margin-top: 17px
  width: 570px

.flex-row-86
  align-items: flex-start
  display: flex
  gap: 25px
  margin-left: 3px
  margin-top: 66px
  min-width: 539px
  position: relative

.overlap-group-82
  align-items: center
  background-color: $seagull
  border-radius: 16px
  display: flex
  height: 68px
  justify-content: flex-end
  min-width: 257px
  padding: 0 25px

.contribute-2
  letter-spacing: 0
  line-height: normal
  min-height: 38px
  min-width: 206px

.cec-logo-15
  align-self: flex-end
  height: 972px
  object-fit: cover
  width: 615px

.team-2
  background-color: $material-themereferrorerror100
  border: 1px none
  display: flex
  flex-direction: column
  gap: 60px
  height: 982px
  position: relative

.become-a-contributor-2
  height: 117px
  letter-spacing: 0
  line-height: normal
  margin-left: 253px
  margin-top: 105px
  width: 1006px

.span1-8
  color: $seagull
  font-family: $font-family-raleway
  font-size: $font-size-xxxl
  font-weight: 400

.live-developing-2
  align-items: center
  background-color: $material-themereferrorerror100
  border: 1px none
  display: flex
  flex-direction: column
  gap: 66px
  height: 982px
  padding: 40px 0
  position: relative

.flex-row-87
  align-items: flex-start
  display: flex
  gap: 100px
  min-width: 614px
  position: relative

.overlap-group-83
  align-items: center
  background-color: $seagull
  border-radius: 16px
  display: flex
  height: 68px
  min-width: 257px
  padding: 0 26px

.learn-how-2
  height: 38px
  letter-spacing: 0
  line-height: normal
  min-width: 194px
  text-align: center
</style>
