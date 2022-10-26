<template>
  <div class="uni-meta screen">
    <div class="uni-meta-1">
      <div class="body-32">
        <navbar7
          :className="navbar7Props.className"
          :buttonLoginProps="navbar7Props.buttonLoginProps"
          :buttonWalletProps="navbar7Props.buttonWalletProps"
        />
        <div class="hero-28">
          <div class="flex-col-20">
            <div class="uni-meta-2 raleway-normal-cape-cod-80px">{{ uniMeta }}</div>
            <p class="this-web-30-applica-10 raleway-normal-cape-cod-26px">{{ thisWeb30Applica }}</p>
            <div class="flex-row-105">
              <div class="overlap-group-101">
                <div class="contribute-10 raleway-bold-white-32px">{{ contribute }}</div>
              </div>
              <button221 :dashboard="button221Props.dashboard" />
            </div>
          </div>
          <img class="logo-uni-meta-2" :src="logoUniMeta" alt="logo-uni-meta" />
        </div>
        <products :className="productsProps.className" :downloadsProps="productsProps.downloadsProps" />
        <tools
          :className="toolsProps.className"
          :packages1Props="toolsProps.packages1Props"
          :packages2Props="toolsProps.packages2Props"
          :packages3Props="toolsProps.packages3Props"
        />
        <div class="team-10">
          <div class="become-a-contributor-10 raleway-normal-white-100px">
            <span class="raleway-normal-cape-cod-100px">{{ spanText1 }}</span
            ><span class="span1-16">{{ spanText2 }}</span>
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
        <div class="live-developing-10">
          <dev-environment :className="devEnvironmentProps.className" />
          <div class="flex-row-106">
            <div class="overlap-group-102">
              <div class="learn-how-10 valign-text-middle raleway-bold-white-32px">{{ learnHow }}</div>
            </div>
            <button222 :dashboard="button222Props.dashboard" />
          </div>
        </div>
        <x-footer11 :className="xFooter11Props.className" :footerMenu2Props="xFooter11Props.footerMenu2Props" />
      </div>
    </div>
  </div>
</template>

<script>
import Navbar7 from "./Navbar7";
import Button221 from "./Button221";
import Products from "./Products";
import Tools from "./Tools";
import Avatars from "./Avatars";
import DevEnvironment from "./DevEnvironment";
import Button222 from "./Button222";
import xFooter11 from "./xFooter11";
export default {
  name: "UNIMETA",
  components: {
    Navbar7,
    Button221,
    Products,
    Tools,
    Avatars,
    DevEnvironment,
    Button222,
    xFooter11,
  },
  props: [
    "uniMeta",
    "thisWeb30Applica",
    "contribute",
    "logoUniMeta",
    "spanText1",
    "spanText2",
    "learnHow",
    "navbar7Props",
    "button221Props",
    "productsProps",
    "toolsProps",
    "avatarsProps",
    "devEnvironmentProps",
    "button222Props",
    "xFooter11Props",
  ],
};
</script>

<style lang="sass">
@import '../../variables'

.uni-meta
  align-items: center
  border: 1px none
  display: flex
  flex-direction: column
  gap: 50px
  height: 100vh
  min-height: 5592px
  min-width: 1512px
  width: 100%

.uni-meta-1
  display: flex
  height: 5592px
  min-width: 1512px

.body-32
  background-color: $material-themereferrorerror100
  border: 1px none
  display: flex
  flex-direction: column
  height: 5592px
  position: relative
  width: 1512px

.hero-28
  align-items: center
  background-color: $material-themereferrorerror100
  border: 1px none
  display: flex
  gap: 183px
  width: 1512px

.flex-col-20
  align-items: flex-start
  display: flex
  flex-direction: column
  margin-bottom: 67.0px
  margin-left: 94px
  min-height: 347px
  width: 570px

.uni-meta-2
  letter-spacing: 0
  line-height: normal
  margin-left: 3px
  min-height: 94px

.this-web-30-applica-10
  letter-spacing: 0
  line-height: normal
  margin-top: 25px
  width: 570px

.flex-row-105
  align-items: flex-start
  display: flex
  gap: 40px
  margin-left: 3px
  margin-top: 67px
  min-width: 554px
  position: relative

.overlap-group-101
  align-items: center
  background-color: $orchid
  border-radius: 16px
  display: flex
  height: 68px
  justify-content: flex-end
  min-width: 257px
  padding: 0 25px

.contribute-10
  letter-spacing: 0
  line-height: normal
  min-height: 38px
  min-width: 206px

.logo-uni-meta-2
  height: 982px
  object-fit: cover
  width: 665px

.team-10
  background-color: $material-themereferrorerror100
  border: 1px none
  display: flex
  flex-direction: column
  gap: 60px
  height: 982px
  position: relative

.become-a-contributor-10
  height: 117px
  letter-spacing: 0
  line-height: normal
  margin-left: 253px
  margin-top: 105px
  width: 1006px

.span1-16
  color: $orchid
  font-family: $font-family-raleway
  font-size: $font-size-xxxl
  font-weight: 400

.live-developing-10
  align-items: center
  background-color: $material-themereferrorerror100
  border: 1px none
  display: flex
  flex-direction: column
  gap: 66px
  height: 982px
  padding: 40px 0
  position: relative

.flex-row-106
  align-items: flex-start
  display: flex
  gap: 100px
  min-width: 614px
  position: relative

.overlap-group-102
  align-items: center
  background-color: $orchid
  border-radius: 16px
  display: flex
  height: 68px
  min-width: 257px
  padding: 0 26px

.learn-how-10
  height: 38px
  letter-spacing: 0
  line-height: normal
  min-width: 194px
  text-align: center
</style>
