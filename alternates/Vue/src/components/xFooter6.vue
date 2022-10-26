<template>
  <div class="footer-23">
    <div class="footer-menu-11">
      <img class="cec-logo-9" :src="cecLogo" alt="cec-logo" />
      <div class="flex-row-25 raleway-bold-cape-cod-20px">
        <div class="hire-me-39">{{ hireMe }}</div>
        <div class="github-16">{{ github }}</div>
        <div class="open-source-26">{{ openSource }}</div>
        <div class="organizations-16">{{ organizations }}</div>
        <x-button :children="xButton1Props.children" :className="xButton1Props.className" />
        <x-button :children="xButton2Props.children" :className="xButton2Props.className" />
      </div>
    </div>
    <div class="flex-row-26">
      <img class="image-8-10" :src="image8" alt="image 8" />
      <div class="overlap-group-54">
        <div class="snippet-of-the-day-18 valign-text-middle raleway-bold-white-36px">{{ snippetOfTheDay }}</div>
        <div class="flex-row-27">
          <div class="subscribe-to-get-access-18 valign-text-middle raleway-bold-white-20px">
            {{ subscribeToGetAccess }}
          </div>
          <div class="rectangle-6-10"></div>
          <div class="rectangle-7-11"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import xButton from "./xButton";
export default {
  name: "xFooter6",
  components: {
    xButton,
  },
  props: [
    "cecLogo",
    "hireMe",
    "github",
    "openSource",
    "organizations",
    "image8",
    "snippetOfTheDay",
    "subscribeToGetAccess",
    "xButton1Props",
    "xButton2Props",
  ],
};
</script>

<style lang="sass">
@import '../../variables'

.footer-23
  align-items: flex-end
  background-color: $material-themereferrorerror100
  border: 1px none
  display: flex
  flex-direction: column
  gap: 33px
  height: 592px
  padding: 47px 27.1px
  width: 1512px

.footer-menu-11
  align-items: center
  display: flex
  flex-direction: column
  gap: 53px
  min-height: 233px
  width: 1411px

.cec-logo-9
  height: 120px
  margin-right: 94.85px
  object-fit: cover
  width: 72px

.flex-row-25
  align-items: center
  display: flex
  height: 60px
  margin-right: 8.0px
  min-width: 1403px
  position: relative

.hire-me-39
  letter-spacing: 0
  line-height: normal
  margin-top: 1.0px
  text-align: center
  width: 127px

.github-16
  letter-spacing: 0
  line-height: normal
  margin-left: 31px
  margin-top: 1.0px
  text-align: center
  width: 121px

.open-source-26
  letter-spacing: 0
  line-height: normal
  margin-bottom: 1.0px
  margin-left: 28px
  text-align: center
  width: 229px

.organizations-16
  letter-spacing: 0
  line-height: normal
  margin-left: 30px
  margin-top: 1.0px
  text-align: center
  width: 256px

.flex-row-26
  align-items: flex-end
  display: flex
  gap: 100px
  margin-right: 7.85px
  min-width: 1403px

.image-8-10
  height: 225px
  object-fit: cover
  width: 640px

.overlap-group-54
  align-items: flex-start
  background-color: $seagull
  border-radius: 16px
  display: flex
  flex-direction: column
  gap: 21px
  min-height: 164px
  padding: 19px 14px
  width: 663px

.snippet-of-the-day-18
  align-self: center
  height: 51px
  letter-spacing: 0
  line-height: normal
  margin-left: 1.54px
  text-align: center
  width: 367px

.flex-row-27
  align-items: flex-end
  display: flex
  gap: 18px
  min-width: 620px

.subscribe-to-get-access-18
  align-self: flex-start
  height: 49px
  letter-spacing: 0
  line-height: normal
  text-align: center
  width: 167px

.rectangle-6-10
  background-color: $material-themereferrorerror100
  border: 1px none
  border-radius: 16px
  height: 33px
  width: 316px

.rectangle-7-11
  background-color: $white
  border: 1px none
  border-radius: 16px
  height: 33px
  width: 101px
</style>
