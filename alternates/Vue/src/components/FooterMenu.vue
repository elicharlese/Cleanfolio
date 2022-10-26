<template>
  <div :class="[`footer-menu-1`, className || ``]">
    <img class="cec-logo-1" :src="cecLogo" alt="cec-logo" />
    <div class="flex-row-7 raleway-bold-cape-cod-20px">
      <div class="hire-me-11">HIRE ME</div>
      <div class="github-3">GITHUB</div>
      <div class="open-source-7">OPEN-SOURCE</div>
      <div class="organizations-3">ORGANIZATIONS</div>
      <x-button :children="xButton1Props.children" :className="xButton1Props.className" />
      <x-button :children="xButton2Props.children" :className="xButton2Props.className" />
    </div>
  </div>
</template>

<script>
import xButton from "./xButton";
export default {
  name: "FooterMenu",
  components: {
    xButton,
  },
  props: ["cecLogo", "className", "xButton1Props", "xButton2Props"],
};
</script>

<style lang="sass">
.footer-menu-1
  align-items: center
  display: flex
  flex-direction: column
  gap: 53px
  left: 74px
  min-height: 233px
  position: absolute
  top: 47px
  width: 1411px

.cec-logo-1
  height: 120px
  margin-right: 46.85px
  object-fit: cover
  width: 120px

.flex-row-7
  align-items: center
  display: flex
  height: 60px
  margin-right: 8.0px
  min-width: 1403px
  position: relative

.hire-me-11
  letter-spacing: 0
  line-height: normal
  margin-top: 1.0px
  text-align: center
  width: 127px

.github-3
  letter-spacing: 0
  line-height: normal
  margin-left: 31px
  margin-top: 1.0px
  text-align: center
  width: 121px

.open-source-7
  letter-spacing: 0
  line-height: normal
  margin-bottom: 1.0px
  margin-left: 28px
  text-align: center
  width: 229px

.organizations-3
  letter-spacing: 0
  line-height: normal
  margin-left: 30px
  margin-top: 1.0px
  text-align: center
  width: 256px

.footer-menu-1.footer-menu,
.footer-menu-1.footer-menu-3,
.footer-menu-1.footer-menu-4,
.footer-menu-1.footer-menu-5
  left: unset
  position: unset
  top: unset
</style>
