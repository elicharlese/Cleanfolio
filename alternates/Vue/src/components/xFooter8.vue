<template>
  <div class="footer-25">
    <div class="footer-menu-13 raleway-bold-cape-cod-20px">
      <img class="cec-logo-11" :src="cecLogo" alt="cec-logo" />
      <div class="hire-me-41">{{ hireMe }}</div>
      <div class="github-18">{{ github }}</div>
      <div class="open-source-28">{{ openSource }}</div>
      <div class="organizations-18">{{ organizations }}</div>
      <x-button :children="xButton1Props.children" :className="xButton1Props.className" />
      <x-button :children="xButton2Props.children" :className="xButton2Props.className" />
    </div>
    <div class="flex-row-30">
      <img class="image-8-12" :src="image8" alt="image 8" />
      <div class="overlap-group-57">
        <div class="snippet-of-the-day-20 valign-text-middle raleway-bold-white-36px">{{ snippetOfTheDay }}</div>
        <div class="flex-row-31">
          <div class="subscribe-to-get-access-20 valign-text-middle raleway-bold-white-20px">
            {{ subscribeToGetAccess }}
          </div>
          <div class="rectangle-6-12"></div>
          <div class="rectangle-7-13"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import xButton from "./xButton";
export default {
  name: "xFooter8",
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

.footer-25
  align-items: flex-end
  background-color: $material-themereferrorerror100
  border: 1px none
  display: flex
  flex-direction: column
  gap: 33px
  height: 592px
  margin-left: 2px
  padding: 47px 27.1px
  width: 1512px

.footer-menu-13
  display: flex
  height: 233px
  position: relative
  width: 1411px

.cec-logo-11
  height: 120px
  margin-left: -18779.0px
  margin-top: -4954px
  object-fit: cover
  width: 120px

.hire-me-41
  height: 23px
  letter-spacing: 0
  line-height: normal
  margin-left: 18659.0px
  margin-top: 192px
  text-align: center
  width: 127px

.github-18
  height: 23px
  letter-spacing: 0
  line-height: normal
  margin-left: 31px
  margin-top: 192px
  text-align: center
  width: 121px

.open-source-28
  height: 23px
  letter-spacing: 0
  line-height: normal
  margin-left: 28px
  margin-top: 191px
  text-align: center
  width: 229px

.organizations-18
  height: 23px
  letter-spacing: 0
  line-height: normal
  margin-left: 30px
  margin-top: 192px
  text-align: center
  width: 256px

.flex-row-30
  align-items: flex-end
  display: flex
  gap: 424px
  margin-right: 7.85px
  min-width: 1403px

.image-8-12
  height: 225px
  object-fit: cover
  width: 316px

.overlap-group-57
  align-items: flex-start
  background-color: $seagull
  border-radius: 16px
  display: flex
  flex-direction: column
  gap: 21px
  min-height: 164px
  padding: 19px 14px
  width: 663px

.snippet-of-the-day-20
  align-self: center
  height: 51px
  letter-spacing: 0
  line-height: normal
  margin-left: 1.54px
  text-align: center
  width: 367px

.flex-row-31
  align-items: flex-end
  display: flex
  gap: 18px
  min-width: 620px

.subscribe-to-get-access-20
  align-self: flex-start
  height: 49px
  letter-spacing: 0
  line-height: normal
  text-align: center
  width: 167px

.rectangle-6-12
  background-color: $material-themereferrorerror100
  border: 1px none
  border-radius: 16px
  height: 33px
  width: 316px

.rectangle-7-13
  background-color: $white
  border: 1px none
  border-radius: 16px
  height: 33px
  width: 101px
</style>
