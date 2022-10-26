<template>
  <div class="x3rupt screen">
    <div class="x3-rupt">
      <div class="body-22">
        <navbar7
          :buttonLoginProps="navbar7Props.buttonLoginProps"
          :buttonWalletProps="navbar7Props.buttonWalletProps"
        />
        <div class="hero-18">
          <div class="flex-col-9">
            <div class="x3-rupt-1 raleway-normal-cape-cod-80px">{{ x3Rupt }}</div>
            <p class="this-web-30-applica raleway-normal-cape-cod-26px">{{ thisWeb30Applica }}</p>
            <div class="flex-row-37">
              <div class="overlap-group-66">
                <div class="contribute raleway-bold-white-32px">{{ contribute }}</div>
              </div>
              <button2 :dashboard="button2Props.dashboard" />
            </div>
          </div>
          <img class="x3-rupt-logo-2" :src="x3RuptLogo2" alt="3RUPT Logo 2" />
        </div>
        <products :downloadsProps="productsProps.downloadsProps" />
        <tools
          :packages1Props="toolsProps.packages1Props"
          :packages2Props="toolsProps.packages2Props"
          :packages3Props="toolsProps.packages3Props"
        />
        <div class="team">
          <div class="become-a-contributor raleway-normal-white-100px">
            <span class="raleway-normal-cape-cod-100px">{{ spanText1 }}</span
            ><span class="span1-6">{{ spanText2 }}</span>
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
        <div class="live-developing">
          <dev-environment />
          <div class="flex-row-38">
            <div class="overlap-group-67">
              <div class="learn-how valign-text-middle raleway-bold-white-32px">{{ learnHow }}</div>
            </div>
            <button22 :dashboard="button22Props.dashboard" />
          </div>
        </div>
        <x-footer11 :footerMenu2Props="xFooter11Props.footerMenu2Props" />
      </div>
    </div>
  </div>
</template>

<script>
import Navbar7 from "./Navbar7";
import Button2 from "./Button2";
import Products from "./Products";
import Tools from "./Tools";
import Avatars from "./Avatars";
import DevEnvironment from "./DevEnvironment";
import Button22 from "./Button22";
import xFooter11 from "./xFooter11";
export default {
  name: "X3RUPT",
  components: {
    Navbar7,
    Button2,
    Products,
    Tools,
    Avatars,
    DevEnvironment,
    Button22,
    xFooter11,
  },
  props: [
    "x3Rupt",
    "thisWeb30Applica",
    "contribute",
    "x3RuptLogo2",
    "spanText1",
    "spanText2",
    "learnHow",
    "navbar7Props",
    "button2Props",
    "productsProps",
    "toolsProps",
    "avatarsProps",
    "button22Props",
    "xFooter11Props",
  ],
};
</script>

<style lang="sass">
@import '../../variables'

.x3rupt
  align-items: center
  border: 1px none
  display: flex
  flex-direction: column
  gap: 122px
  height: 100vh
  min-height: 5610px
  min-width: 1512px
  width: 100%

.x3-rupt
  display: flex
  height: 5610px
  min-width: 1512px

.body-22
  background-color: $material-themereferrorerror100
  border: 1px none
  display: flex
  flex-direction: column
  height: 5610px
  position: relative
  width: 1512px

.hero-18
  align-items: center
  background-color: $material-themereferrorerror100
  border: 1px none
  display: flex
  gap: 223px
  width: 1512px

.flex-col-9
  align-items: flex-start
  display: flex
  flex-direction: column
  margin-bottom: 68.0px
  margin-left: 94px
  min-height: 346px
  width: 570px

.x3-rupt-1
  letter-spacing: 0
  line-height: normal
  margin-left: 3px
  min-height: 94px

.this-web-30-applica
  letter-spacing: 0
  line-height: normal
  margin-top: 25px
  width: 570px

.flex-row-37
  align-items: flex-start
  display: flex
  gap: 25px
  margin-left: 3px
  margin-top: 66px
  min-width: 539px
  position: relative

.overlap-group-66
  align-items: center
  background-color: $mexican-red
  border-radius: 16px
  display: flex
  height: 68px
  justify-content: flex-end
  min-width: 257px
  padding: 0 25px

.contribute
  letter-spacing: 0
  line-height: normal
  min-height: 38px
  min-width: 206px

.x3-rupt-logo-2
  height: 982px
  object-fit: cover
  width: 625px

.team
  background-color: $material-themereferrorerror100
  border: 1px none
  display: flex
  flex-direction: column
  gap: 60px
  height: 982px
  position: relative

.become-a-contributor
  height: 117px
  letter-spacing: 0
  line-height: normal
  margin-left: 253px
  margin-top: 105px
  width: 1006px

.span1-6
  color: $mexican-red
  font-family: $font-family-raleway
  font-size: $font-size-xxxl
  font-weight: 400

.live-developing
  align-items: center
  background-color: $material-themereferrorerror100
  border: 1px none
  display: flex
  flex-direction: column
  gap: 66px
  height: 982px
  padding: 40px 0
  position: relative

.flex-row-38
  align-items: flex-start
  display: flex
  gap: 100px
  min-width: 614px
  position: relative

.overlap-group-67
  align-items: center
  background-color: $mexican-red
  border-radius: 16px
  display: flex
  height: 68px
  min-width: 257px
  padding: 0 26px

.learn-how
  height: 38px
  letter-spacing: 0
  line-height: normal
  min-width: 194px
  text-align: center
</style>
