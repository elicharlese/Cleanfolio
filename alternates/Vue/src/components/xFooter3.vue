<template>
  <div class="footer-19">
    <div class="footer-menu-7">
      <img
        class="cec-logo-5"
        src="https://anima-uploads.s3.amazonaws.com/projects/62fe76f7359e99eee487b330/releases/634ef8f1abca668fdefc42a0/img/-cec-logo@2x.png"
        alt="cec-logo"
      />
      <div class="flex-row-15">
        <div class="links-3 raleway-bold-cape-cod-20px">
          <div class="hire-me-23">HIRE ME</div>
          <div class="github-10">GITHUB</div>
          <div class="open-source-14">OPEN-SOURCE</div>
          <div class="organizations-10">ORGANIZATIONS</div>
        </div>
        <x-button :children="xButton1Props.children" :className="xButton1Props.className" />
        <x-button :children="xButton2Props.children" :className="xButton2Props.className" />
      </div>
    </div>
    <div class="flex-row-16">
      <img
        class="image-8-6"
        src="https://anima-uploads.s3.amazonaws.com/projects/62fe76f7359e99eee487b330/releases/634ef8f1abca668fdefc42a0/img/image-8@1x.png"
        alt="image 8"
      />
      <div class="overlap-group-35">
        <div class="snippet-of-the-day-9 valign-text-middle raleway-bold-white-36px">Snippet of the Day</div>
        <div class="flex-row-17">
          <div class="subscribe-to-get-access-9 valign-text-middle raleway-bold-white-20px">
            Subscribe to get access
          </div>
          <div class="rectangle-6-6"></div>
          <div class="rectangle-7-7"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import xButton from "./xButton";
export default {
  name: "xFooter3",
  components: {
    xButton,
  },
  props: ["xButton1Props", "xButton2Props"],
};
</script>

<style lang="sass">
@import '../../variables'

.footer-19,
.footer-20
  align-items: flex-start
  background-color: $material-themereferrorerror100
  border: 1px none
  display: flex
  flex-direction: column
  gap: 37px
  height: 592px
  padding: 45px 36px
  width: 1440px

.footer-menu-7,
.footer-menu-8
  align-items: center
  align-self: flex-end
  display: flex
  flex-direction: column
  gap: 51px
  margin-right: 5.15px
  min-height: 231px
  width: 1341px

.cec-logo-5,
.cec-logo-6
  height: 120px
  margin-right: 16.85px
  object-fit: cover
  width: 120px

.flex-row-15,
.flex-row-18
  align-items: center
  display: flex
  height: 60px
  margin-right: 0
  min-width: 1341px
  position: relative

.links-3,
.links-4
  display: flex
  height: 24px
  width: 769px

.hire-me-23,
.hire-me-24
  height: 23px
  letter-spacing: 0
  line-height: normal
  margin-top: 1px
  text-align: center
  width: 117.58px

.github-10,
.github-11
  height: 23px
  letter-spacing: 0
  line-height: normal
  margin-left: 28.7px
  margin-top: 1px
  text-align: center
  width: 112.02px

.open-source-14,
.open-source-15
  height: 23px
  letter-spacing: 0
  line-height: normal
  margin-left: 25.9px
  text-align: center
  width: 212.01px

.organizations-10,
.organizations-11
  height: 23px
  letter-spacing: 0
  line-height: normal
  margin-left: 27.8px
  margin-top: 1px
  text-align: center
  width: 237px

.flex-row-16,
.flex-row-19
  align-items: flex-end
  display: flex
  gap: 60px
  min-width: 1363px

.image-8-6,
.image-8-7
  height: 225px
  object-fit: cover
  width: 640px

.overlap-group-35,
.overlap-group-36
  align-items: flex-start
  background-color: $seagull
  border-radius: 16px
  display: flex
  flex-direction: column
  gap: 21px
  min-height: 164px
  padding: 19px 14px
  width: 663px

.snippet-of-the-day-9,
.snippet-of-the-day-10
  align-self: center
  height: 51px
  letter-spacing: 0
  line-height: normal
  margin-left: 1.54px
  text-align: center
  width: 367px

.flex-row-17,
.flex-row-20
  align-items: flex-end
  display: flex
  gap: 18px
  min-width: 620px

.subscribe-to-get-access-9,
.subscribe-to-get-access-10
  align-self: flex-start
  height: 49px
  letter-spacing: 0
  line-height: normal
  text-align: center
  width: 167px

.rectangle-6-6,
.rectangle-6-7
  background-color: $material-themereferrorerror100
  border: 1px none
  border-radius: 16px
  height: 33px
  width: 316px

.rectangle-7-7,
.rectangle-7-8
  background-color: $white
  border: 1px none
  border-radius: 16px
  height: 33px
  width: 101px
</style>
