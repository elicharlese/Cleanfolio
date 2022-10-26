<template>
  <div class="cheers screen">
    <div class="cheers-1">
      <div class="body-25">
        <navbar7
          :className="navbar7Props.className"
          :buttonLoginProps="navbar7Props.buttonLoginProps"
          :buttonWalletProps="navbar7Props.buttonWalletProps"
        />
        <div class="hero-21">
          <div class="flex-col-13">
            <div class="cheers-2 raleway-normal-cape-cod-80px">{{ cheers }}</div>
            <p class="this-web-30-applica-3 raleway-normal-cape-cod-26px">{{ thisWeb30Applica }}</p>
            <div class="flex-row-88">
              <div class="overlap-group-84">
                <div class="contribute-3 raleway-bold-white-32px">{{ contribute }}</div>
              </div>
              <button27 :dashboard="button27Props.dashboard" />
            </div>
          </div>
          <img class="logo-cheers-2" :src="logoCheers" alt="logo-cheers" />
        </div>
        <products :className="productsProps.className" :downloadsProps="productsProps.downloadsProps" />
        <tools
          :className="toolsProps.className"
          :packages1Props="toolsProps.packages1Props"
          :packages2Props="toolsProps.packages2Props"
          :packages3Props="toolsProps.packages3Props"
        />
        <div class="team-3">
          <div class="become-a-contributor-3 raleway-normal-white-100px">
            <span class="raleway-normal-cape-cod-100px">{{ spanText1 }}</span
            ><span class="span1-9">{{ spanText2 }}</span>
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
        <div class="live-developing-3">
          <dev-environment :className="devEnvironmentProps.className" />
          <div class="flex-row-89">
            <div class="overlap-group-85">
              <div class="learn-how-3 valign-text-middle raleway-bold-white-32px">{{ learnHow }}</div>
            </div>
            <button28 :dashboard="button28Props.dashboard" />
          </div>
        </div>
        <x-footer11 :className="xFooter11Props.className" :footerMenu2Props="xFooter11Props.footerMenu2Props" />
      </div>
    </div>
  </div>
</template>

<script>
import Navbar7 from "./Navbar7";
import Button27 from "./Button27";
import Products from "./Products";
import Tools from "./Tools";
import Avatars2 from "./Avatars2";
import DevEnvironment from "./DevEnvironment";
import Button28 from "./Button28";
import xFooter11 from "./xFooter11";
export default {
  name: "Cheers",
  components: {
    Navbar7,
    Button27,
    Products,
    Tools,
    Avatars2,
    DevEnvironment,
    Button28,
    xFooter11,
  },
  props: [
    "cheers",
    "thisWeb30Applica",
    "contribute",
    "logoCheers",
    "spanText1",
    "spanText2",
    "learnHow",
    "navbar7Props",
    "button27Props",
    "productsProps",
    "toolsProps",
    "avatars2Props",
    "devEnvironmentProps",
    "button28Props",
    "xFooter11Props",
  ],
};
</script>

<style lang="sass">
@import '../../variables'

.cheers
  align-items: center
  border: 1px none
  display: flex
  flex-direction: column
  gap: 53px
  height: 100vh
  min-height: 5610px
  min-width: 1512px
  width: 100%

.cheers-1
  display: flex
  height: 5610px
  min-width: 1512px

.body-25
  background-color: $material-themereferrorerror100
  border: 1px none
  display: flex
  flex-direction: column
  height: 5610px
  position: relative
  width: 1512px

.hero-21
  align-items: center
  background-color: $material-themereferrorerror100
  border: 1px none
  display: flex
  gap: 200px
  width: 1512px

.flex-col-13
  align-items: flex-start
  display: flex
  flex-direction: column
  margin-bottom: 87.0px
  margin-left: 94px
  min-height: 327px
  width: 570px

.cheers-2
  letter-spacing: 0
  line-height: normal
  margin-left: 3px
  min-height: 94px

.this-web-30-applica-3
  letter-spacing: 0
  line-height: normal
  margin-top: 25px
  width: 570px

.flex-row-88
  align-items: flex-start
  display: flex
  gap: 27px
  margin-left: 3px
  margin-top: 47px
  min-width: 541px
  position: relative

.overlap-group-84
  align-items: center
  background-color: $anzac
  border-radius: 16px
  display: flex
  height: 68px
  justify-content: flex-end
  min-width: 257px
  padding: 0 25px

.contribute-3
  letter-spacing: 0
  line-height: normal
  min-height: 38px
  min-width: 206px

.logo-cheers-2
  height: 982px
  object-fit: cover
  width: 648px

.team-3
  background-color: $material-themereferrorerror100
  border: 1px none
  display: flex
  flex-direction: column
  gap: 60px
  height: 982px
  position: relative

.become-a-contributor-3
  height: 117px
  letter-spacing: 0
  line-height: normal
  margin-left: 253px
  margin-top: 105px
  width: 1006px

.span1-9
  color: $anzac
  font-family: $font-family-raleway
  font-size: $font-size-xxxl
  font-weight: 400

.live-developing-3
  align-items: center
  background-color: $material-themereferrorerror100
  border: 1px none
  display: flex
  flex-direction: column
  gap: 66px
  height: 982px
  padding: 40px 0
  position: relative

.flex-row-89
  align-items: flex-start
  display: flex
  gap: 100px
  min-width: 614px
  position: relative

.overlap-group-85
  align-items: center
  background-color: $anzac
  border-radius: 16px
  display: flex
  height: 68px
  min-width: 257px
  padding: 0 26px

.learn-how-3
  height: 38px
  letter-spacing: 0
  line-height: normal
  min-width: 194px
  text-align: center
</style>
