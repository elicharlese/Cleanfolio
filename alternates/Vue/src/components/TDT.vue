<template>
  <div class="tdt screen">
    <div class="tdt-1">
      <div class="body-33">
        <navbar7
          :className="navbar7Props.className"
          :buttonLoginProps="navbar7Props.buttonLoginProps"
          :buttonWalletProps="navbar7Props.buttonWalletProps"
        />
        <div class="hero-29">
          <div class="flex-col-21">
            <div class="tradent raleway-normal-cape-cod-100px">{{ tradent }}</div>
            <p class="this-web-30-applica-11 raleway-normal-cape-cod-26px">{{ thisWeb30Applica }}</p>
            <div class="flex-row-107">
              <div class="overlap-group-103">
                <div class="contribute-11 raleway-bold-white-32px">{{ contribute }}</div>
              </div>
              <button223 :dashboard="button223Props.dashboard" />
            </div>
          </div>
          <img class="tradent-logo5-transparent-1" :src="tradentLogo5Transparent1" alt="tradent-logo5-transparent 1" />
        </div>
        <products :className="productsProps.className" :downloadsProps="productsProps.downloadsProps" />
        <tools
          :className="toolsProps.className"
          :packages1Props="toolsProps.packages1Props"
          :packages2Props="toolsProps.packages2Props"
          :packages3Props="toolsProps.packages3Props"
        />
        <div class="team-11">
          <div class="become-a-contributor-11 raleway-normal-white-100px">
            <span class="raleway-normal-cape-cod-100px">{{ spanText1 }}</span
            ><span class="span1-17">{{ spanText2 }}</span>
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
        <div class="live-developing-11">
          <dev-environment :className="devEnvironmentProps.className" />
          <div class="flex-row-108">
            <div class="overlap-group-104">
              <div class="learn-how-11 valign-text-middle raleway-bold-white-32px">{{ learnHow }}</div>
            </div>
            <button224 :dashboard="button224Props.dashboard" />
          </div>
        </div>
        <x-footer11 :className="xFooter11Props.className" :footerMenu2Props="xFooter11Props.footerMenu2Props" />
      </div>
    </div>
  </div>
</template>

<script>
import Navbar7 from "./Navbar7";
import Button223 from "./Button223";
import Products from "./Products";
import Tools from "./Tools";
import Avatars from "./Avatars";
import DevEnvironment from "./DevEnvironment";
import Button224 from "./Button224";
import xFooter11 from "./xFooter11";
export default {
  name: "TDT",
  components: {
    Navbar7,
    Button223,
    Products,
    Tools,
    Avatars,
    DevEnvironment,
    Button224,
    xFooter11,
  },
  props: [
    "tradent",
    "thisWeb30Applica",
    "contribute",
    "tradentLogo5Transparent1",
    "spanText1",
    "spanText2",
    "learnHow",
    "navbar7Props",
    "button223Props",
    "productsProps",
    "toolsProps",
    "avatarsProps",
    "devEnvironmentProps",
    "button224Props",
    "xFooter11Props",
  ],
};
</script>

<style lang="sass">
@import '../../variables'

.tdt
  align-items: center
  border: 1px none
  display: flex
  flex-direction: column
  gap: 122px
  height: 100vh
  min-height: 5592px
  min-width: 1512px
  width: 100%

.tdt-1
  display: flex
  height: 5592px
  min-width: 1512px

.body-33
  background-color: $material-themereferrorerror100
  border: 1px none
  display: flex
  flex-direction: column
  height: 5592px
  position: relative
  width: 1512px

.hero-29
  align-items: center
  background-color: $material-themereferrorerror100
  border: 1px none
  display: flex
  gap: 223px
  width: 1512px

.flex-col-21
  align-items: flex-start
  display: flex
  flex-direction: column
  margin-bottom: 110.0px
  margin-left: 94px
  min-height: 388px
  width: 570px

.tradent
  letter-spacing: 0
  line-height: normal
  min-height: 117px

.this-web-30-applica-11
  letter-spacing: 0
  line-height: normal
  margin-top: 44px
  width: 570px

.flex-row-107
  align-items: flex-start
  display: flex
  gap: 25px
  margin-left: 3px
  margin-top: 66px
  min-width: 539px
  position: relative

.overlap-group-103
  align-items: center
  background-color: $turquoise-blue
  border-radius: 16px
  display: flex
  height: 68px
  justify-content: flex-end
  min-width: 257px
  padding: 0 25px

.contribute-11
  letter-spacing: 0
  line-height: normal
  min-height: 38px
  min-width: 206px

.tradent-logo5-transparent-1
  height: 982px
  object-fit: cover
  width: 625px

.team-11
  background-color: $material-themereferrorerror100
  border: 1px none
  display: flex
  flex-direction: column
  gap: 60px
  height: 982px
  position: relative

.become-a-contributor-11
  height: 117px
  letter-spacing: 0
  line-height: normal
  margin-left: 253px
  margin-top: 105px
  width: 1006px

.span1-17
  color: $turquoise-blue
  font-family: $font-family-raleway
  font-size: $font-size-xxxl
  font-weight: 400

.live-developing-11
  align-items: center
  background-color: $material-themereferrorerror100
  border: 1px none
  display: flex
  flex-direction: column
  gap: 66px
  height: 982px
  padding: 40px 0
  position: relative

.flex-row-108
  align-items: flex-start
  display: flex
  gap: 100px
  min-width: 614px
  position: relative

.overlap-group-104
  align-items: center
  background-color: $turquoise-blue
  border-radius: 16px
  display: flex
  height: 68px
  min-width: 257px
  padding: 0 26px

.learn-how-11
  height: 38px
  letter-spacing: 0
  line-height: normal
  min-width: 194px
  text-align: center
</style>
