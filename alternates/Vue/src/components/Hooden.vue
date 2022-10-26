<template>
  <div class="hooden screen">
    <div class="hooden-1">
      <div class="body-30">
        <navbar7
          :className="navbar7Props.className"
          :buttonLoginProps="navbar7Props.buttonLoginProps"
          :buttonWalletProps="navbar7Props.buttonWalletProps"
        />
        <div class="hero-26">
          <div class="flex-col-18">
            <div class="hooden-2 raleway-normal-cape-cod-80px">{{ hooden }}</div>
            <p class="this-web-30-applica-8 raleway-normal-cape-cod-26px">{{ thisWeb30Applica }}</p>
            <div class="flex-row-101">
              <div class="overlap-group-97">
                <div class="contribute-8 raleway-bold-white-32px">{{ contribute }}</div>
              </div>
              <button217 :dashboard="button217Props.dashboard" />
            </div>
          </div>
          <img class="logo-hooden-2" :src="logoHooden" alt="logo-hooden" />
        </div>
        <products :className="productsProps.className" :downloadsProps="productsProps.downloadsProps" />
        <tools
          :className="toolsProps.className"
          :packages1Props="toolsProps.packages1Props"
          :packages2Props="toolsProps.packages2Props"
          :packages3Props="toolsProps.packages3Props"
        />
        <div class="team-8">
          <div class="become-a-contributor-8 raleway-normal-white-100px">
            <span class="raleway-normal-cape-cod-100px">{{ spanText1 }}</span
            ><span class="span1-14">{{ spanText2 }}</span>
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
        <div class="live-developing-8">
          <dev-environment :className="devEnvironmentProps.className" />
          <div class="flex-row-102">
            <div class="overlap-group-98">
              <div class="learn-how-8 valign-text-middle raleway-bold-white-32px">{{ learnHow }}</div>
            </div>
            <button218 :dashboard="button218Props.dashboard" />
          </div>
        </div>
        <x-footer11 :className="xFooter11Props.className" :footerMenu2Props="xFooter11Props.footerMenu2Props" />
      </div>
    </div>
  </div>
</template>

<script>
import Navbar7 from "./Navbar7";
import Button217 from "./Button217";
import Products from "./Products";
import Tools from "./Tools";
import Avatars from "./Avatars";
import DevEnvironment from "./DevEnvironment";
import Button218 from "./Button218";
import xFooter11 from "./xFooter11";
export default {
  name: "Hooden",
  components: {
    Navbar7,
    Button217,
    Products,
    Tools,
    Avatars,
    DevEnvironment,
    Button218,
    xFooter11,
  },
  props: [
    "hooden",
    "thisWeb30Applica",
    "contribute",
    "logoHooden",
    "spanText1",
    "spanText2",
    "learnHow",
    "navbar7Props",
    "button217Props",
    "productsProps",
    "toolsProps",
    "avatarsProps",
    "devEnvironmentProps",
    "button218Props",
    "xFooter11Props",
  ],
};
</script>

<style lang="sass">
@import '../../variables'

.hooden
  align-items: center
  border: 1px none
  display: flex
  flex-direction: column
  gap: 50px
  height: 100vh
  min-height: 5592px
  min-width: 1512px
  width: 100%

.hooden-1
  display: flex
  height: 5592px
  min-width: 1512px

.body-30
  background-color: $material-themereferrorerror100
  border: 1px none
  display: flex
  flex-direction: column
  height: 5592px
  position: relative
  width: 1512px

.hero-26
  align-items: center
  background-color: $material-themereferrorerror100
  border: 1px none
  display: flex
  gap: 154px
  width: 1512px

.flex-col-18
  align-items: flex-start
  display: flex
  flex-direction: column
  margin-bottom: 100.0px
  margin-left: 94px
  min-height: 314px
  width: 570px

.hooden-2
  letter-spacing: 0
  line-height: normal
  margin-left: 3px
  min-height: 94px

.this-web-30-applica-8
  letter-spacing: 0
  line-height: normal
  margin-top: 25px
  width: 570px

.flex-row-101
  align-items: flex-start
  display: flex
  gap: 30px
  margin-left: 3px
  margin-top: 34px
  min-width: 544px
  position: relative

.overlap-group-97
  align-items: center
  background-color: $portage
  border-radius: 16px
  display: flex
  height: 68px
  justify-content: flex-end
  min-width: 257px
  padding: 0 25px

.contribute-8
  letter-spacing: 0
  line-height: normal
  min-height: 38px
  min-width: 206px

.logo-hooden-2
  height: 982px
  object-fit: cover
  width: 694px

.team-8
  background-color: $material-themereferrorerror100
  border: 1px none
  display: flex
  flex-direction: column
  gap: 60px
  height: 982px
  position: relative

.become-a-contributor-8
  height: 117px
  letter-spacing: 0
  line-height: normal
  margin-left: 253px
  margin-top: 105px
  width: 1006px

.span1-14
  color: $portage
  font-family: $font-family-raleway
  font-size: $font-size-xxxl
  font-weight: 400

.live-developing-8
  align-items: center
  background-color: $material-themereferrorerror100
  border: 1px none
  display: flex
  flex-direction: column
  gap: 66px
  height: 982px
  padding: 40px 0
  position: relative

.flex-row-102
  align-items: flex-start
  display: flex
  gap: 100px
  min-width: 614px
  position: relative

.overlap-group-98
  align-items: center
  background-color: $portage
  border-radius: 16px
  display: flex
  height: 68px
  min-width: 257px
  padding: 0 26px

.learn-how-8
  height: 38px
  letter-spacing: 0
  line-height: normal
  min-width: 194px
  text-align: center
</style>
