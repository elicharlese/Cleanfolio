<template>
  <div class="blockify screen">
    <div class="blockify-1">
      <div class="body-31">
        <navbar7
          :className="navbar7Props.className"
          :buttonLoginProps="navbar7Props.buttonLoginProps"
          :buttonWalletProps="navbar7Props.buttonWalletProps"
        />
        <div class="hero-27">
          <div class="flex-col-19">
            <div class="blockify-2 raleway-normal-cape-cod-80px">{{ blockify }}</div>
            <p class="this-web-30-applica-9 raleway-normal-cape-cod-26px">{{ thisWeb30Applica }}</p>
            <div class="flex-row-103">
              <div class="overlap-group-99">
                <div class="contribute-9 raleway-bold-white-32px">{{ contribute }}</div>
              </div>
              <button219 :dashboard="button219Props.dashboard" />
            </div>
          </div>
          <img class="logo-blockify-2" :src="logoBlockify" alt="logo-blockify" />
        </div>
        <products :className="productsProps.className" :downloadsProps="productsProps.downloadsProps" />
        <tools
          :className="toolsProps.className"
          :packages1Props="toolsProps.packages1Props"
          :packages2Props="toolsProps.packages2Props"
          :packages3Props="toolsProps.packages3Props"
        />
        <div class="team-9">
          <div class="become-a-contributor-9 raleway-normal-white-100px">
            <span class="raleway-normal-cape-cod-100px">{{ spanText1 }}</span
            ><span class="span1-15">{{ spanText2 }}</span>
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
        <div class="live-developing-9">
          <dev-environment :className="devEnvironmentProps.className" />
          <div class="flex-row-104">
            <div class="overlap-group-100">
              <div class="learn-how-9 valign-text-middle raleway-bold-white-32px">{{ learnHow }}</div>
            </div>
            <button220 :dashboard="button220Props.dashboard" />
          </div>
        </div>
        <x-footer11 :className="xFooter11Props.className" :footerMenu2Props="xFooter11Props.footerMenu2Props" />
      </div>
    </div>
  </div>
</template>

<script>
import Navbar7 from "./Navbar7";
import Button219 from "./Button219";
import Products from "./Products";
import Tools from "./Tools";
import Avatars from "./Avatars";
import DevEnvironment from "./DevEnvironment";
import Button220 from "./Button220";
import xFooter11 from "./xFooter11";
export default {
  name: "Blockify",
  components: {
    Navbar7,
    Button219,
    Products,
    Tools,
    Avatars,
    DevEnvironment,
    Button220,
    xFooter11,
  },
  props: [
    "blockify",
    "thisWeb30Applica",
    "contribute",
    "logoBlockify",
    "spanText1",
    "spanText2",
    "learnHow",
    "navbar7Props",
    "button219Props",
    "productsProps",
    "toolsProps",
    "avatarsProps",
    "devEnvironmentProps",
    "button220Props",
    "xFooter11Props",
  ],
};
</script>

<style lang="sass">
@import '../../variables'

.blockify
  align-items: center
  border: 1px none
  display: flex
  flex-direction: column
  gap: 50px
  height: 100vh
  min-height: 5592px
  min-width: 1512px
  width: 100%

.blockify-1
  display: flex
  height: 5592px
  min-width: 1512px

.body-31
  background-color: $material-themereferrorerror100
  border: 1px none
  display: flex
  flex-direction: column
  height: 5592px
  position: relative
  width: 1512px

.hero-27
  align-items: center
  background-color: $material-themereferrorerror100
  border: 1px none
  display: flex
  gap: 201px
  width: 1512px

.flex-col-19
  align-items: flex-start
  display: flex
  flex-direction: column
  margin-bottom: 105.0px
  margin-left: 94px
  min-height: 309px
  width: 570px

.blockify-2
  letter-spacing: 0
  line-height: normal
  margin-left: 3px
  min-height: 94px

.this-web-30-applica-9
  letter-spacing: 0
  line-height: normal
  margin-top: 25px
  width: 570px

.flex-row-103
  align-items: flex-start
  display: flex
  gap: 40px
  margin-left: 3px
  margin-top: 29px
  min-width: 554px
  position: relative

.overlap-group-99
  align-items: center
  background-color: $purple-heart
  border-radius: 16px
  display: flex
  height: 68px
  justify-content: flex-end
  min-width: 257px
  padding: 0 25px

.contribute-9
  letter-spacing: 0
  line-height: normal
  min-height: 38px
  min-width: 206px

.logo-blockify-2
  height: 982px
  object-fit: cover
  width: 647px

.team-9
  background-color: $material-themereferrorerror100
  border: 1px none
  display: flex
  flex-direction: column
  gap: 60px
  height: 982px
  position: relative

.become-a-contributor-9
  height: 117px
  letter-spacing: 0
  line-height: normal
  margin-left: 253px
  margin-top: 105px
  width: 1006px

.span1-15
  color: $purple-heart
  font-family: $font-family-raleway
  font-size: $font-size-xxxl
  font-weight: 400

.live-developing-9
  align-items: center
  background-color: $material-themereferrorerror100
  border: 1px none
  display: flex
  flex-direction: column
  gap: 66px
  height: 982px
  padding: 40px 0
  position: relative

.flex-row-104
  align-items: flex-start
  display: flex
  gap: 100px
  min-width: 614px
  position: relative

.overlap-group-100
  align-items: center
  background-color: $purple-heart
  border-radius: 16px
  display: flex
  height: 68px
  min-width: 257px
  padding: 0 26px

.learn-how-9
  height: 38px
  letter-spacing: 0
  line-height: normal
  min-width: 194px
  text-align: center
</style>
