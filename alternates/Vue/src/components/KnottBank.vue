<template>
  <div class="knott-bank screen">
    <div class="knott-bank-1">
      <div class="body-28">
        <navbar7
          :className="navbar7Props.className"
          :buttonLoginProps="navbar7Props.buttonLoginProps"
          :buttonWalletProps="navbar7Props.buttonWalletProps"
        />
        <div class="hero-24">
          <div class="flex-col-16">
            <div class="knott-bank-2 raleway-normal-cape-cod-80px">{{ knottBank }}</div>
            <p class="this-web-30-applica-6 raleway-normal-cape-cod-26px">{{ thisWeb30Applica }}</p>
            <div class="flex-row-94">
              <div class="overlap-group-92">
                <div class="contribute-6 raleway-bold-white-32px">{{ contribute }}</div>
              </div>
              <button213 :dashboard="button213Props.dashboard" />
            </div>
          </div>
          <img class="logo-knott-bank-2" :src="logoKnottBank" alt="logo-knott-bank" />
        </div>
        <products :className="productsProps.className" :downloadsProps="productsProps.downloadsProps" />
        <tools
          :className="toolsProps.className"
          :packages1Props="toolsProps.packages1Props"
          :packages2Props="toolsProps.packages2Props"
          :packages3Props="toolsProps.packages3Props"
        />
        <div class="team-6">
          <div class="become-a-contributor-6 raleway-normal-white-100px">
            <span class="raleway-normal-cape-cod-100px">{{ spanText1 }}</span
            ><span class="span1-12">{{ spanText2 }}</span>
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
        <div class="live-developing-6">
          <dev-environment :className="devEnvironmentProps.className" />
          <div class="flex-row-95">
            <div class="overlap-group-93">
              <div class="learn-how-6 valign-text-middle raleway-bold-white-32px">{{ learnHow }}</div>
            </div>
            <button214 :dashboard="button214Props.dashboard" />
          </div>
        </div>
        <x-footer11 :className="xFooter11Props.className" :footerMenu2Props="xFooter11Props.footerMenu2Props" />
      </div>
    </div>
  </div>
</template>

<script>
import Navbar7 from "./Navbar7";
import Button213 from "./Button213";
import Products from "./Products";
import Tools from "./Tools";
import Avatars from "./Avatars";
import DevEnvironment from "./DevEnvironment";
import Button214 from "./Button214";
import xFooter11 from "./xFooter11";
export default {
  name: "KnottBank",
  components: {
    Navbar7,
    Button213,
    Products,
    Tools,
    Avatars,
    DevEnvironment,
    Button214,
    xFooter11,
  },
  props: [
    "knottBank",
    "thisWeb30Applica",
    "contribute",
    "logoKnottBank",
    "spanText1",
    "spanText2",
    "learnHow",
    "navbar7Props",
    "button213Props",
    "productsProps",
    "toolsProps",
    "avatarsProps",
    "devEnvironmentProps",
    "button214Props",
    "xFooter11Props",
  ],
};
</script>

<style lang="sass">
@import '../../variables'

.knott-bank
  align-items: center
  border: 1px none
  display: flex
  flex-direction: column
  gap: 50px
  height: 100vh
  min-height: 5592px
  min-width: 1512px
  width: 100%

.knott-bank-1
  display: flex
  height: 5592px
  min-width: 1512px

.body-28
  background-color: $material-themereferrorerror100
  border: 1px none
  display: flex
  flex-direction: column
  height: 5592px
  position: relative
  width: 1512px

.hero-24
  align-items: center
  background-color: $material-themereferrorerror100
  border: 1px none
  display: flex
  gap: 154px
  width: 1512px

.flex-col-16
  align-items: flex-start
  display: flex
  flex-direction: column
  margin-bottom: 64.0px
  margin-left: 94px
  min-height: 350px
  width: 570px

.knott-bank-2
  letter-spacing: 0
  line-height: normal
  margin-left: 3px
  min-height: 94px

.this-web-30-applica-6
  letter-spacing: 0
  line-height: normal
  margin-top: 25px
  width: 570px

.flex-row-94
  align-items: flex-start
  display: flex
  gap: 33px
  margin-left: 3px
  margin-top: 70px
  min-width: 547px
  position: relative

.overlap-group-92
  align-items: center
  background-color: $fern
  border-radius: 16px
  display: flex
  height: 68px
  justify-content: flex-end
  min-width: 257px
  padding: 0 25px

.contribute-6
  letter-spacing: 0
  line-height: normal
  min-height: 38px
  min-width: 206px

.logo-knott-bank-2
  height: 982px
  object-fit: cover
  width: 694px

.team-6
  background-color: $material-themereferrorerror100
  border: 1px none
  display: flex
  flex-direction: column
  gap: 60px
  height: 982px
  position: relative

.become-a-contributor-6
  height: 117px
  letter-spacing: 0
  line-height: normal
  margin-left: 253px
  margin-top: 105px
  width: 1006px

.span1-12
  color: $fern
  font-family: $font-family-raleway
  font-size: $font-size-xxxl
  font-weight: 400

.live-developing-6
  align-items: center
  background-color: $material-themereferrorerror100
  border: 1px none
  display: flex
  flex-direction: column
  gap: 66px
  height: 982px
  padding: 40px 0
  position: relative

.flex-row-95
  align-items: flex-start
  display: flex
  gap: 100px
  min-width: 614px
  position: relative

.overlap-group-93
  align-items: center
  background-color: $fern
  border-radius: 16px
  display: flex
  height: 68px
  min-width: 257px
  padding: 0 26px

.learn-how-6
  height: 38px
  letter-spacing: 0
  line-height: normal
  min-width: 194px
  text-align: center
</style>
