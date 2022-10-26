<template>
  <div :class="[`footer-28`, className || ``]">
    <footer-menu2
      :x3RuptLogo1="footerMenu2Props.x3RuptLogo1"
      :button1="footerMenu2Props.button1"
      :button2="footerMenu2Props.button2"
    />
    <div class="flex-row-51">
      <img
        class="image-8-15"
        src="https://anima-uploads.s3.amazonaws.com/projects/62fe76f7359e99eee487b330/releases/62fe76ff42961e6f284ac312/img/image-8@1x.png"
        alt="image 8"
      />
      <div class="overlap-group-78">
        <div class="snippet-of-the-day-23 valign-text-middle raleway-bold-white-36px">Snippet of the Day</div>
        <div class="flex-row-52">
          <div class="subscribe-to-get-access-23 valign-text-middle raleway-bold-white-20px">
            Subscribe to get access
          </div>
          <div class="rectangle-6-15"></div>
          <div class="rectangle-7-16"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FooterMenu2 from "./FooterMenu2";
export default {
  name: "xFooter11",
  components: {
    FooterMenu2,
  },
  props: ["className", "footerMenu2Props"],
};
</script>

<style lang="sass">
@import '../../variables'

.footer-28
  align-items: flex-end
  background-color: $material-themereferrorerror100
  border: 1px none
  display: flex
  flex-direction: column
  gap: 33px
  height: 592px
  padding: 47px 27.1px
  position: relative
  width: 1512px

.flex-row-51
  align-items: flex-end
  display: flex
  gap: 100px
  margin-right: 7.85px
  min-width: 1403px

.image-8-15
  height: 225px
  object-fit: cover
  width: 640px

.overlap-group-78
  align-items: flex-start
  background-color: $mexican-red
  border-radius: 16px
  display: flex
  flex-direction: column
  gap: 21px
  min-height: 164px
  padding: 19px 14px
  width: 663px

.snippet-of-the-day-23
  align-self: center
  height: 51px
  letter-spacing: 0
  line-height: normal
  margin-left: 1.54px
  text-align: center
  width: 367px

.flex-row-52
  align-items: flex-end
  display: flex
  gap: 18px
  min-width: 620px

.subscribe-to-get-access-23
  align-self: flex-start
  height: 49px
  letter-spacing: 0
  line-height: normal
  text-align: center
  width: 167px

.rectangle-6-15
  background-color: $material-themereferrorerror100
  border: 1px none
  border-radius: 16px
  height: 33px
  width: 316px

.rectangle-7-16
  background-color: $white
  border: 1px none
  border-radius: 16px
  height: 33px
  width: 101px

.footer-28.footer-29 .overlap-group-78
  background-color: $seagull

.footer-28.footer-30 .overlap-group-78
  background-color: $anzac

.footer-28.footer-31 .overlap-group-78
  background-color: $dairy-cream

.footer-28.footer-32 .overlap-group-78
  background-color: $cararra

.footer-28.footer-33 .overlap-group-78
  background-color: $fern

.footer-28.footer-34 .overlap-group-78
  background-color: $portage

.footer-28.footer-35 .overlap-group-78
  background-color: $purple-heart

.footer-28.footer-36 .overlap-group-78
  background-color: $orchid

.footer-28.footer-37 .overlap-group-78
  background-color: $turquoise-blue
</style>
