<template>
  <div class="bitcellular-17 screen">
    <div class="bitcellular-18">
      <div class="body-23">
        <navbar7
          :className="navbar7Props.className"
          :buttonLoginProps="navbar7Props.buttonLoginProps"
          :buttonWalletProps="navbar7Props.buttonWalletProps"
        />
        <div class="hero-19">
          <div class="flex-col-11">
            <div class="bitcellular-19 raleway-normal-cape-cod-100px">{{ bitcellular }}</div>
            <p class="this-web-30-applica-1 raleway-normal-cape-cod-26px">{{ thisWeb30Applica }}</p>
            <div class="flex-row-82">
              <div class="overlap-group-79">
                <div class="contribute-1 raleway-bold-white-32px">{{ contribute }}</div>
              </div>
              <button23 :dashboard="button23Props.dashboard" />
            </div>
          </div>
          <img class="logo-bitcell-2" :src="logoBitcell" alt="logo-bitcell" />
        </div>
        <products :className="productsProps.className" :downloadsProps="productsProps.downloadsProps" />
        <tools
          :className="toolsProps.className"
          :packages1Props="toolsProps.packages1Props"
          :packages2Props="toolsProps.packages2Props"
          :packages3Props="toolsProps.packages3Props"
        />
        <div class="team-1">
          <div class="become-a-contributor-1 raleway-normal-white-100px">
            <span class="raleway-normal-cape-cod-100px">{{ spanText1 }}</span
            ><span class="span1-7">{{ spanText2 }}</span>
          </div>
          <div class="overlap-group1-29">
            <div class="avatars-9">
              <user7 :ellipse2="user71Props.ellipse2" :className="user71Props.className" />
              <user7 :ellipse2="user72Props.ellipse2" :className="user72Props.className" />
              <user7 :ellipse2="user73Props.ellipse2" :className="user73Props.className" />
              <user7 :ellipse2="user74Props.ellipse2" :className="user74Props.className" />
              <user7 :ellipse2="user75Props.ellipse2" :className="user75Props.className" />
              <div class="user_-container">
                <user7 :ellipse2="user76Props.ellipse2" :className="user76Props.className" />
                <user7 :ellipse2="user77Props.ellipse2" :className="user77Props.className" />
              </div>
            </div>
            <img
              class="vector-10"
              src="https://anima-uploads.s3.amazonaws.com/projects/62fe76f7359e99eee487b330/releases/634b1e2b9caf1e7ca700d848/img/vector-2@1x.svg"
              alt="Vector"
            />
          </div>
        </div>
        <div class="overlap-group4-9">
          <div class="footer-38">
            <footer-menu2
              :x3RuptLogo1="footerMenu2Props.x3RuptLogo1"
              :button1="footerMenu2Props.button1"
              :button2="footerMenu2Props.button2"
            />
            <div class="flex-row-83">
              <img class="image-8-25" :src="image8" alt="image 8" />
              <div class="overlap-group-80">
                <div class="snippet-of-the-day-33 valign-text-middle raleway-bold-white-36px">
                  {{ snippetOfTheDay }}
                </div>
                <div class="flex-row-84">
                  <div class="subscribe-to-get-access-33 valign-text-middle raleway-bold-white-20px">
                    {{ subscribeToGetAccess }}
                  </div>
                  <div class="rectangle-6-25"></div>
                  <div class="rectangle-7-26"></div>
                </div>
              </div>
            </div>
          </div>
          <div class="live-developing-1">
            <dev-environment :className="devEnvironmentProps.className" />
            <div class="flex-row-85">
              <div class="overlap-group-81">
                <div class="learn-how-1 valign-text-middle raleway-bold-white-32px">{{ learnHow }}</div>
              </div>
              <button24 :dashboard="button24Props.dashboard" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar7 from "./Navbar7";
import Button23 from "./Button23";
import Products from "./Products";
import Tools from "./Tools";
import User7 from "./User7";
import FooterMenu2 from "./FooterMenu2";
import DevEnvironment from "./DevEnvironment";
import Button24 from "./Button24";
export default {
  name: "Bitcellular4",
  components: {
    Navbar7,
    Button23,
    Products,
    Tools,
    User7,
    FooterMenu2,
    DevEnvironment,
    Button24,
  },
  props: [
    "bitcellular",
    "thisWeb30Applica",
    "contribute",
    "logoBitcell",
    "spanText1",
    "spanText2",
    "image8",
    "snippetOfTheDay",
    "subscribeToGetAccess",
    "learnHow",
    "navbar7Props",
    "button23Props",
    "productsProps",
    "toolsProps",
    "user71Props",
    "user72Props",
    "user73Props",
    "user74Props",
    "user75Props",
    "user76Props",
    "user77Props",
    "footerMenu2Props",
    "devEnvironmentProps",
    "button24Props",
  ],
};
</script>

<style lang="sass">
@import '../../variables'

.bitcellular-17
  align-items: center
  border: 1px none
  display: flex
  flex-direction: column
  gap: 53px
  height: 100vh
  min-height: 5592px
  min-width: 1512px
  width: 100%

.bitcellular-18
  display: flex
  height: 5592px
  min-width: 1512px

.body-23
  align-items: flex-start
  background-color: $material-themereferrorerror100
  border: 1px none
  display: flex
  flex-direction: column
  height: 5592px
  position: relative
  width: 1512px

.hero-19
  align-items: center
  background-color: $material-themereferrorerror100
  border: 1px none
  display: flex
  gap: 222px
  margin-top: 3px
  width: 1512px

.flex-col-11
  align-items: flex-start
  display: flex
  flex-direction: column
  margin-bottom: 138.0px
  margin-left: 94px
  min-height: 370px
  width: 570px

.bitcellular-19
  letter-spacing: 0
  line-height: normal
  margin-left: 3px
  min-height: 117px

.this-web-30-applica-1
  letter-spacing: 0
  line-height: normal
  margin-top: 49px
  width: 570px

.flex-row-82
  align-items: flex-start
  display: flex
  gap: 32px
  margin-left: 3px
  margin-top: 43px
  min-width: 546px
  position: relative

.overlap-group-79
  align-items: center
  background-color: $mandy
  border-radius: 16px
  display: flex
  height: 68px
  justify-content: flex-end
  min-width: 257px
  padding: 0 25px

.contribute-1
  letter-spacing: 0
  line-height: normal
  min-height: 38px
  min-width: 206px

.logo-bitcell-2
  height: 982px
  object-fit: cover
  width: 626px

.team-1
  align-items: center
  background-color: $material-themereferrorerror100
  border: 1px none
  display: flex
  flex-direction: column
  gap: 61px
  height: 982px
  width: 1512px

.become-a-contributor-1
  letter-spacing: 0
  line-height: normal
  margin-top: 104px
  min-height: 117px
  min-width: 1006px

.span1-7
  color: $mandy
  font-family: $font-family-raleway
  font-size: $font-size-xxxl
  font-weight: 400

.overlap-group1-29
  height: 700px
  position: relative
  width: 1512px

.avatars-9
  align-items: flex-start
  display: flex
  height: 550px
  left: 25px
  min-width: 1459px
  position: absolute
  top: 0

.user_-container
  align-items: flex-start
  display: flex
  flex-direction: column
  gap: 19px
  margin-left: 31px
  min-height: 421px
  position: relative
  width: 304px

.vector-10
  height: 500px
  left: 0
  position: absolute
  top: 200px
  width: 1512px

.overlap-group4-9
  height: 1571px
  position: relative
  width: 1512px

.footer-38
  align-items: flex-end
  background-color: $material-themereferrorerror100
  border: 1px none
  display: flex
  flex-direction: column
  gap: 33px
  height: 592px
  left: 0
  padding: 47px 27.1px
  position: absolute
  top: 979px
  width: 1512px

.flex-row-83
  align-items: flex-end
  display: flex
  gap: 80px
  margin-right: 7.85px
  min-width: 1383px

.image-8-25
  height: 225px
  object-fit: cover
  width: 640px

.overlap-group-80
  align-items: flex-start
  background-color: $mandy
  border-radius: 16px
  display: flex
  flex-direction: column
  gap: 21px
  min-height: 164px
  padding: 19px 14px
  width: 663px

.snippet-of-the-day-33
  align-self: center
  height: 51px
  letter-spacing: 0
  line-height: normal
  margin-left: 1.54px
  text-align: center
  width: 367px

.flex-row-84
  align-items: flex-end
  display: flex
  gap: 18px
  min-width: 620px

.subscribe-to-get-access-33
  align-self: flex-start
  height: 49px
  letter-spacing: 0
  line-height: normal
  text-align: center
  width: 167px

.rectangle-6-25
  background-color: $material-themereferrorerror100
  border: 1px none
  border-radius: 16px
  height: 33px
  width: 316px

.rectangle-7-26
  background-color: $white
  border: 1px none
  border-radius: 16px
  height: 33px
  width: 101px

.live-developing-1
  align-items: center
  background-color: $material-themereferrorerror100
  border: 1px none
  display: flex
  flex-direction: column
  gap: 66px
  height: 982px
  left: 0
  padding: 40px 0
  position: absolute
  top: 0
  width: 1512px

.flex-row-85
  align-items: flex-start
  display: flex
  gap: 100px
  min-width: 614px
  position: relative

.overlap-group-81
  align-items: center
  background-color: $mandy
  border-radius: 16px
  display: flex
  height: 68px
  min-width: 257px
  padding: 0 26px

.learn-how-1
  height: 38px
  letter-spacing: 0
  line-height: normal
  min-width: 194px
  text-align: center
</style>
