<template>
  <div class="financer screen">
    <div class="body-34">
      <div class="flex-col-22">
        <div class="navbar-26 raleway-bold-cape-cod-20px">
          <img class="dashboard-layout-25" :src="dashboardLayout" alt="Dashboard Layout" />
          <div class="hire-me-60">{{ hireMe }}</div>
          <div class="github-47">{{ github }}</div>
          <div class="open-source-59">{{ openSource }}</div>
          <div class="organizations-49">{{ organizations }}</div>
          <button-login />
          <button-wallet />
        </div>
        <div class="hero-30">
          <div class="overlap-group5-16">
            <img
              class="componentlottiehttps-4"
              src="https://anima-uploads.s3.amazonaws.com/projects/62fe76f7359e99eee487b330/releases/633e379a38caf9c281884c8d/img/-component-lottie-https---assets4-lottiefiles-com-packages-lf20-@1x.svg"
              alt="component:lottie:https://assets4.lottiefiles.com/packages/lf20_efx3aac9.json]"
            />
            <hero-info
              :spanText1="heroInfoProps.spanText1"
              :spanText2="heroInfoProps.spanText2"
              :spanText3="heroInfoProps.spanText3"
              :name="heroInfoProps.name"
              :className="heroInfoProps.className"
              :buttonProps="heroInfoProps.buttonProps"
            />
          </div>
        </div>
        <div class="consultations">
          <div class="collaborate-container">
            <img
              class="collaborate-img-1"
              src="https://anima-uploads.s3.amazonaws.com/projects/62fe76f7359e99eee487b330/releases/633e379a38caf9c281884c8d/img/-collaborate-img@1x.svg"
              alt="collaborate-img"
            />
            <div class="collaborate-text">
              <div class="lets-discuss-your-portfolio valign-text-middle raleway-normal-cape-cod-100px">
                {{ letsDiscussYourPortfolio }}
              </div>
              <div class="appointments">
                <img class="planner" :src="planner" alt="Planner" />
                <div class="book-an-appointment valign-text-middle raleway-normal-cape-cod-32px">
                  {{ bookAnAppointment }}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="bots">
          <div class="overlap-group3-12" :style="{ 'background-image': 'url(' + overlapGroup3 + ')' }">
            <img class="bot" :src="bot" alt="Bot" />
          </div>
        </div>
        <div class="management-steps">
          <div class="decentralized-finances valign-text-middle raleway-normal-cape-cod-100px">
            {{ decentralizedFinances }}
          </div>
          <p class="building-a-investmen valign-text-middle raleway-normal-black-22px">
            <span
              ><span class="raleway-normal-black-22px">{{ spanText1 }}</span
              ><span class="span-20 raleway-normal-black-22px">{{ spanText2 }}</span
              ><span class="raleway-normal-black-22px">{{ spanText3 }}</span
              ><span class="span-20 raleway-normal-black-22px">{{ spanText4 }}</span
              ><span class="raleway-normal-black-22px">{{ spanText5 }}</span>
            </span>
          </p>
          <classroom-containers2 v-bind="classroomContainers2Props" />
        </div>
        <x-footer
          :image8="xFooterProps.image8"
          :className="xFooterProps.className"
          :footerMenuProps="xFooterProps.footerMenuProps"
        />
      </div>
    </div>
  </div>
</template>

<script>
import ButtonLogin from "./ButtonLogin";
import ButtonWallet from "./ButtonWallet";
import HeroInfo from "./HeroInfo";
import ClassroomContainers2 from "./ClassroomContainers2";
import xFooter from "./xFooter";
export default {
  name: "Financer",
  components: {
    ButtonLogin,
    ButtonWallet,
    HeroInfo,
    ClassroomContainers2,
    xFooter,
  },
  props: [
    "dashboardLayout",
    "hireMe",
    "github",
    "openSource",
    "organizations",
    "letsDiscussYourPortfolio",
    "planner",
    "bookAnAppointment",
    "overlapGroup3",
    "bot",
    "decentralizedFinances",
    "spanText1",
    "spanText2",
    "spanText3",
    "spanText4",
    "spanText5",
    "heroInfoProps",
    "classroomContainers2Props",
    "xFooterProps",
  ],
};
</script>

<style lang="sass">
@import '../../variables'

.financer
  align-items: flex-start
  background-color: $material-themereferrorerror100
  border: 1px none
  display: flex
  gap: 10px
  height: 100vh
  min-height: 4674px
  min-width: 1512px
  width: 100%

.body-34
  background-color: $material-themereferrorerror100
  border: 1px none
  height: 4674px
  min-width: 1512px

.flex-col-22
  align-items: flex-start
  display: flex
  flex-direction: column
  min-height: 4674px
  position: relative
  width: 1512px

.navbar-26
  align-items: center
  background-color: $material-themereferrorerror100
  border: 1px none
  display: flex
  height: 90px
  padding: 0 23px
  position: relative
  width: 1512px

.dashboard-layout-25
  height: 60px
  width: 60px

.hire-me-60
  letter-spacing: 0
  line-height: normal
  margin-bottom: 1.0px
  margin-left: 539px
  min-height: 23px
  min-width: 81px
  text-align: center

.github-47
  letter-spacing: 0
  line-height: normal
  margin-bottom: 1.0px
  margin-left: 19px
  min-height: 23px
  min-width: 77px
  text-align: center

.open-source-59
  letter-spacing: 0
  line-height: normal
  margin-bottom: 3.0px
  margin-left: 19px
  min-height: 23px
  min-width: 145px
  text-align: center

.organizations-49
  letter-spacing: 0
  line-height: normal
  margin-bottom: 1.0px
  margin-left: 19px
  min-height: 23px
  min-width: 163px
  text-align: center

.hero-30
  align-items: flex-start
  background-color: $material-themereferrorerror100
  border: 1px none
  display: flex
  height: 879px
  padding: 0 79px
  width: 1512px

.overlap-group5-16
  height: 706px
  position: relative
  width: 1339px

.componentlottiehttps-4
  height: 706px
  left: 530px
  position: absolute
  top: 0
  width: 809px

.consultations
  align-items: flex-start
  background-color: $material-themereferrorerror100
  border: 1px none
  display: flex
  height: 982px
  width: 1512px

.collaborate-container
  height: 833px
  margin-left: 31px
  position: relative
  width: 1481px

.collaborate-img-1
  height: 833px
  left: 561px
  position: absolute
  top: 0
  width: 920px

.collaborate-text
  align-items: center
  display: flex
  flex-direction: column
  gap: 6px
  left: 0
  min-height: 480px
  position: absolute
  top: 145px
  width: 781px

.lets-discuss-your-portfolio
  height: 378px
  letter-spacing: 0
  line-height: normal
  margin-right: 2.0px
  text-align: center
  width: 779px

.appointments
  align-items: center
  display: flex
  min-width: 457px

.planner,
.bot
  height: 96px
  width: 96px

.book-an-appointment
  height: 51px
  letter-spacing: 0
  line-height: normal
  margin-top: 1.0px
  text-align: center
  width: 359px

.bots
  align-items: flex-start
  background-color: $material-themereferrorerror100
  border: 1px none
  display: flex
  height: 1048px
  padding: 131px 156px
  width: 1512px

.overlap-group3-12
  align-items: center
  background-position: 50% 50%
  background-size: cover
  display: flex
  height: 720px
  min-width: 1200px
  padding: 0 552px

.management-steps
  align-items: center
  background-color: $material-themereferrorerror100
  border: 1px none
  display: flex
  flex-direction: column
  height: 1083px
  padding: 92px 61px
  position: relative
  width: 1512px

.decentralized-finances
  height: 117px
  letter-spacing: 0
  line-height: normal
  margin-right: 1.0px
  min-width: 1081px
  text-align: center

.building-a-investmen
  height: 104px
  letter-spacing: 0
  line-height: normal
  margin-right: 1.0px
  text-align: center
  width: 1269px

.span-20
  text-decoration: underline
</style>
