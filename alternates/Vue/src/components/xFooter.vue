<template>
  <div :class="[`footer-1`, className || ``]">
    <footer-menu
      :cecLogo="footerMenuProps.cecLogo"
      :className="footerMenuProps.className"
      :xButton1Props="footerMenuProps.xButton1Props"
      :xButton2Props="footerMenuProps.xButton2Props"
    />
    <div class="flex-row-4">
      <img class="image-8-1" :src="image8" alt="image 8" />
      <div class="overlap-group-24">
        <div class="snippet-of-the-day-2 valign-text-middle raleway-bold-white-36px">Snippet of the Day</div>
        <div class="flex-row-5">
          <div class="subscribe-to-get-access-2 valign-text-middle raleway-bold-white-20px">
            Subscribe to get access
          </div>
          <div class="rectangle-6-1"></div>
          <div class="rectangle-7-1"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FooterMenu from "./FooterMenu";
export default {
  name: "xFooter",
  components: {
    FooterMenu,
  },
  props: ["image8", "className", "footerMenuProps"],
};
</script>

<style lang="sass">
@import '../../variables'

.footer-1
  background-color: $material-themereferrorerror100
  border: 1px none
  height: 592px
  min-width: 1512px
  position: relative

.flex-row-4
  align-items: flex-end
  display: flex
  gap: 100px
  height: 225px
  left: 74px
  min-width: 1407px
  position: absolute
  top: 313px

.image-8-1
  height: 225px
  object-fit: cover
  width: 640px

.overlap-group-24
  align-items: flex-start
  background-color: $seagull
  border-radius: 16px
  display: flex
  flex-direction: column
  gap: 21px
  min-height: 164px
  padding: 19px 14px
  width: 663px

.snippet-of-the-day-2
  align-self: center
  height: 51px
  letter-spacing: 0
  line-height: normal
  margin-left: 1.54px
  text-align: center
  width: 367px

.flex-row-5
  align-items: flex-end
  display: flex
  gap: 18px
  min-width: 620px

.subscribe-to-get-access-2
  align-self: flex-start
  height: 49px
  letter-spacing: 0
  line-height: normal
  text-align: center
  width: 167px

.rectangle-6-1
  background-color: $material-themereferrorerror100
  border: 1px none
  border-radius: 16px
  height: 33px
  width: 316px

.rectangle-7-1
  background-color: $white
  border: 1px none
  border-radius: 16px
  height: 33px
  width: 101px

.footer-1.footer,
.footer-1.footer-10,
.footer-1.footer-11,
.footer-1.footer-12,
.footer-1.footer-13,
.footer-1.footer-14,
.footer-1.footer-15,
.footer-1.footer-16,
.footer-1.footer-17,
.footer-1.footer-6,
.footer-1.footer-7,
.footer-1.footer-8,
.footer-1.footer-9,
.footer-1.footer-3,
.footer-1.footer-4,
.footer-1.footer-5
  align-items: flex-end
  display: flex
  flex-direction: column
  gap: 33px
  min-width: unset
  padding: 47px 27.1px
  width: 1512px

.footer-1.footer-6 .flex-row-4,
.footer-1.footer-3 .flex-row-4,
.footer-1.footer-4 .flex-row-4,
.footer-1.footer-5 .flex-row-4,
.footer-1.footer-7 .flex-row-4,
.footer-1.footer-8 .flex-row-4,
.footer-1.footer-9 .flex-row-4,
.footer-1.footer-10 .flex-row-4,
.footer-1.footer-11 .flex-row-4,
.footer-1.footer-12 .flex-row-4,
.footer-1.footer-13 .flex-row-4,
.footer-1.footer-14 .flex-row-4,
.footer-1.footer-15 .flex-row-4,
.footer-1.footer-16 .flex-row-4,
.footer-1.footer-17 .flex-row-4,
.footer-1.footer .flex-row-4
  height: unset
  left: unset
  margin-right: 7.85px
  min-width: 1403px
  position: unset
  top: unset
</style>
