<template>
  <div class="ts screen">
    <div class="ts-1">
      <div class="body-29">
        <navbar7
          :className="navbar7Props.className"
          :buttonLoginProps="navbar7Props.buttonLoginProps"
          :buttonWalletProps="navbar7Props.buttonWalletProps"
        />
        <div class="hero-25">
          <div class="flex-col-17">
            <div class="terra-solstice raleway-normal-cape-cod-100px">{{ terrasolstice }}</div>
            <p class="this-web-30-applica-7 raleway-normal-cape-cod-26px">{{ thisWeb30Applica }}</p>
            <div class="flex-row-96">
              <div class="overlap-group-94">
                <div class="contribute-7 raleway-bold-white-32px">{{ contribute }}</div>
              </div>
              <button215 :dashboard="button215Props.dashboard" />
            </div>
          </div>
          <img class="terrasolstice-logo-1" :src="terrasolsticeLogo11" alt="terrasolstice-logo 1" />
        </div>
        <products :className="productsProps.className" :downloadsProps="productsProps.downloadsProps" />
        <tools
          :className="toolsProps.className"
          :packages1Props="toolsProps.packages1Props"
          :packages2Props="toolsProps.packages2Props"
          :packages3Props="toolsProps.packages3Props"
        />
        <div class="team-7">
          <div class="become-a-contributor-7 raleway-normal-white-100px">
            <span class="raleway-normal-cape-cod-100px">{{ spanText1 }}</span
            ><span class="span1-13">{{ spanText2 }}</span>
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
        <div class="live-developing-7">
          <dev-environment :className="devEnvironmentProps.className" />
          <div class="flex-row-97">
            <div class="overlap-group-95">
              <div class="learn-how-7 valign-text-middle raleway-bold-white-32px">{{ learnHow }}</div>
            </div>
            <button216 :dashboard="button216Props.dashboard" />
          </div>
        </div>
        <div class="footer-39">
          <div class="footer-menu-27">
            <img class="terrasolstice-logo-1-1" :src="terrasolsticeLogo12" alt="terrasolstice-logo 1" />
            <div class="flex-row-98 raleway-bold-cape-cod-20px">
              <div class="hire-me-59">{{ hireMe }}</div>
              <div class="github-46">{{ github }}</div>
              <div class="open-source-58">{{ openSource }}</div>
              <div class="organizations-48">{{ organizations }}</div>
              <img class="button-53" :src="button1" alt="button" /><img class="button-54" :src="button2" alt="button" />
            </div>
          </div>
          <div class="flex-row-99">
            <img class="image-8-26" :src="image8" alt="image 8" />
            <div class="overlap-group-96">
              <div class="snippet-of-the-day-34 valign-text-middle raleway-bold-white-36px">{{ snippetOfTheDay }}</div>
              <div class="flex-row-100">
                <div class="subscribe-to-get-access-34 valign-text-middle raleway-bold-white-20px">
                  {{ subscribeToGetAccess }}
                </div>
                <div class="rectangle-6-26"></div>
                <div class="rectangle-7-27"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar7 from "./Navbar7";
import Button215 from "./Button215";
import Products from "./Products";
import Tools from "./Tools";
import Avatars from "./Avatars";
import DevEnvironment from "./DevEnvironment";
import Button216 from "./Button216";
export default {
  name: "TS",
  components: {
    Navbar7,
    Button215,
    Products,
    Tools,
    Avatars,
    DevEnvironment,
    Button216,
  },
  props: [
    "terrasolstice",
    "thisWeb30Applica",
    "contribute",
    "terrasolsticeLogo11",
    "spanText1",
    "spanText2",
    "learnHow",
    "terrasolsticeLogo12",
    "hireMe",
    "github",
    "openSource",
    "organizations",
    "button1",
    "button2",
    "image8",
    "snippetOfTheDay",
    "subscribeToGetAccess",
    "navbar7Props",
    "button215Props",
    "productsProps",
    "toolsProps",
    "avatarsProps",
    "devEnvironmentProps",
    "button216Props",
  ],
};
</script>

<style lang="sass">
@import '../../variables'

.ts
  align-items: center
  border: 1px none
  display: flex
  flex-direction: column
  gap: 122px
  height: 100vh
  min-height: 5592px
  min-width: 1512px
  width: 100%

.ts-1
  display: flex
  height: 5592px
  min-width: 1512px

.body-29
  background-color: $material-themereferrorerror100
  border: 1px none
  display: flex
  flex-direction: column
  height: 5592px
  position: relative
  width: 1512px

.hero-25
  align-items: center
  background-color: $material-themereferrorerror100
  border: 1px none
  display: flex
  gap: 172px
  width: 1512px

.flex-col-17
  align-items: flex-start
  display: flex
  flex-direction: column
  margin-bottom: 116.0px
  margin-left: 97px
  min-height: 394px
  width: 598px

.terra-solstice
  letter-spacing: 0
  line-height: normal
  min-height: 117px

.this-web-30-applica-7
  letter-spacing: 0
  line-height: normal
  margin-top: 44px
  width: 570px

.flex-row-96
  align-items: flex-start
  display: flex
  gap: 25px
  margin-top: 72px
  min-width: 539px
  position: relative

.overlap-group-94
  align-items: center
  background-color: $yellow-sunshine
  border-radius: 16px
  display: flex
  height: 68px
  justify-content: flex-end
  min-width: 257px
  padding: 0 25px

.contribute-7
  letter-spacing: 0
  line-height: normal
  min-height: 38px
  min-width: 206px

.terrasolstice-logo-1
  height: 982px
  object-fit: cover
  width: 645px

.team-7
  background-color: $material-themereferrorerror100
  border: 1px none
  display: flex
  flex-direction: column
  gap: 60px
  height: 982px
  position: relative

.become-a-contributor-7
  height: 117px
  letter-spacing: 0
  line-height: normal
  margin-left: 253px
  margin-top: 105px
  width: 1006px

.span1-13
  color: $yellow-sunshine
  font-family: $font-family-raleway
  font-size: $font-size-xxxl
  font-weight: 400

.live-developing-7
  align-items: center
  background-color: $material-themereferrorerror100
  border: 1px none
  display: flex
  flex-direction: column
  gap: 66px
  height: 982px
  padding: 40px 0
  position: relative

.flex-row-97
  align-items: flex-start
  display: flex
  gap: 100px
  min-width: 614px
  position: relative

.overlap-group-95
  align-items: center
  background-color: $yellow-sunshine
  border-radius: 16px
  display: flex
  height: 68px
  min-width: 257px
  padding: 0 26px

.learn-how-7
  height: 38px
  letter-spacing: 0
  line-height: normal
  min-width: 194px
  text-align: center

.footer-39
  align-items: flex-end
  background-color: $material-themereferrorerror100
  border: 1px none
  display: flex
  flex-direction: column
  gap: 33px
  height: 592px
  padding: 54px 27.1px

.footer-menu-27
  align-items: center
  display: flex
  flex-direction: column
  gap: 38px
  margin-top: 3px
  min-height: 223px
  width: 1391px

.terrasolstice-logo-1-1
  height: 125px
  margin-right: 67.85px
  object-fit: cover
  width: 125px

.flex-row-98
  align-items: center
  display: flex
  margin-right: 8.0px
  min-width: 1383px

.hire-me-59
  letter-spacing: 0
  line-height: normal
  margin-top: 1.0px
  text-align: center
  width: 124px

.github-46
  letter-spacing: 0
  line-height: normal
  margin-left: 30px
  margin-top: 1.0px
  text-align: center
  width: 118px

.open-source-58
  letter-spacing: 0
  line-height: normal
  margin-bottom: 1.0px
  margin-left: 28px
  text-align: center
  width: 223px

.organizations-48
  letter-spacing: 0
  line-height: normal
  margin-left: 29px
  margin-top: 1.0px
  text-align: center
  width: 250px

.button-53
  height: 60px
  margin-left: 76px
  width: 215px

.button-54
  height: 60px
  margin-left: 75px
  width: 215px

.flex-row-99
  align-items: flex-end
  display: flex
  gap: 100px
  margin-right: 7.85px
  min-width: 1403px

.image-8-26
  height: 225px
  object-fit: cover
  width: 640px

.overlap-group-96
  align-items: flex-start
  background-color: $yellow-sunshine
  border-radius: 16px
  display: flex
  flex-direction: column
  gap: 21px
  min-height: 164px
  padding: 19px 14px
  width: 663px

.snippet-of-the-day-34
  align-self: center
  height: 51px
  letter-spacing: 0
  line-height: normal
  margin-left: 1.54px
  text-align: center
  width: 367px

.flex-row-100
  align-items: flex-end
  display: flex
  gap: 18px
  min-width: 620px

.subscribe-to-get-access-34
  align-self: flex-start
  height: 49px
  letter-spacing: 0
  line-height: normal
  text-align: center
  width: 167px

.rectangle-6-26
  background-color: $material-themereferrorerror100
  border: 1px none
  border-radius: 16px
  height: 33px
  width: 316px

.rectangle-7-27
  background-color: $white
  border: 1px none
  border-radius: 16px
  height: 33px
  width: 101px
</style>
