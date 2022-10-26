<template>
  <div class="footer-18">
    <div class="footer-menu-6" :style="{ 'background-image': 'url(' + footerMenu + ')' }"></div>
    <div class="links">
      <div class="hire-me-18 raleway-bold-cape-cod-20px">{{ hireMe }}</div>
      <div class="github-7 raleway-bold-cape-cod-20px">{{ github }}</div>
      <div class="open-source-11 raleway-bold-cape-cod-20px">{{ openSource }}</div>
      <div class="organizations-7 raleway-bold-cape-cod-20px">{{ organizations }}</div>
      <x-button :children="xButton1Props.children" :className="xButton1Props.className" />
      <x-button :children="xButton2Props.children" :className="xButton2Props.className" />
    </div>
    <div class="snippets-6">
      <div class="overlap-group-33">
        <div class="snippet-of-the-day-7 valign-text-middle raleway-bold-white-36px">{{ snippetOfTheDay }}</div>
        <div class="subscribe-to-get-access-7 valign-text-middle raleway-bold-white-20px">
          {{ subscribeToGetAccess }}
        </div>
        <div class="flex-row-14">
          <div class="rectangle-6-5"></div>
          <div class="rectangle-7-5"></div>
        </div>
      </div>
    </div>
    <img class="image-8-5" :src="image8" alt="image 8" />
  </div>
</template>

<script>
import xButton from "./xButton";
export default {
  name: "xFooter2",
  components: {
    xButton,
  },
  props: [
    "footerMenu",
    "hireMe",
    "github",
    "openSource",
    "organizations",
    "snippetOfTheDay",
    "subscribeToGetAccess",
    "image8",
    "xButton1Props",
    "xButton2Props",
  ],
};
</script>

<style lang="sass">
@import '../../variables'

.footer-18
  background-color: $material-themereferrorerror100
  border: 1px none
  display: flex
  flex-direction: column
  height: 1221px
  width: 428px

.footer-menu-6
  background-position: 50% 50%
  background-size: cover
  height: 120px
  margin-left: 153px
  margin-top: 63px
  width: 120px

.links
  align-items: center
  border: 1px none
  display: flex
  flex-direction: column
  gap: 48px
  height: 452px
  justify-content: center
  margin-left: 85px
  margin-top: 63px
  position: relative
  width: 256px

.hire-me-18
  letter-spacing: 0
  line-height: normal
  margin-top: -1.00px
  text-align: center
  width: 127px

.github-7
  letter-spacing: 0
  line-height: normal
  text-align: center
  width: 121px

.open-source-11
  letter-spacing: 0
  line-height: normal
  text-align: center
  width: 229px

.organizations-7
  letter-spacing: 0
  line-height: normal
  text-align: center
  width: 256px

.snippets-6
  align-items: flex-start
  display: flex
  height: 227px
  margin-left: 21px
  margin-top: 82px
  min-width: 382px

.overlap-group-33
  align-items: center
  background-color: $seagull
  border-radius: 16px
  display: flex
  flex-direction: column
  min-height: 227px
  padding: 26px 12px
  width: 378px

.snippet-of-the-day-7
  height: 53px
  letter-spacing: 0
  line-height: normal
  text-align: center
  width: 344px

.subscribe-to-get-access-7
  height: 26px
  letter-spacing: 0
  line-height: normal
  margin-right: 19.0px
  margin-top: 27px
  text-align: center
  width: 325px

.flex-row-14
  align-items: flex-start
  align-self: flex-end
  display: flex
  gap: 54px
  margin-top: 13px
  min-width: 349px

.rectangle-6-5
  background-color: $material-themereferrorerror100
  border: 1px none
  border-radius: 16px
  height: 54px
  width: 202px

.rectangle-7-5
  background-color: $white
  border: 1px none
  border-radius: 16px
  height: 53px
  width: 93px

.image-8-5
  height: 148px
  margin-left: 25px
  margin-top: 24px
  object-fit: cover
  width: 378px
</style>
