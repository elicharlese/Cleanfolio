<template>
  <div class="footer-21">
    <div class="footer-menu-9">
      <img class="cec-logo-7" :src="cecLogo" alt="cec-logo" />
      <div class="links-5 raleway-bold-cape-cod-20px">
        <div class="hire-me-26">{{ hireMe }}</div>
        <div class="github-12">{{ github }}</div>
        <div class="open-source-17">{{ openSource }}</div>
        <div class="organizations-12">{{ organizations }}</div>
      </div>
      <div class="button-container">
        <x-button :children="xButton1Props.children" :className="xButton1Props.className" />
        <x-button :children="xButton2Props.children" :className="xButton2Props.className" />
      </div>
    </div>
    <img class="image-8-8" :src="image8" alt="image 8" /><snippets />
  </div>
</template>

<script>
import xButton from "./xButton";
import Snippets from "./Snippets";
export default {
  name: "xFooter4",
  components: {
    xButton,
    Snippets,
  },
  props: ["cecLogo", "hireMe", "github", "openSource", "organizations", "image8", "xButton1Props", "xButton2Props"],
};
</script>

<style lang="sass">
@import '../../variables'

.footer-21
  background-color: $material-themereferrorerror100
  border: 1px none
  display: flex
  flex-direction: column
  height: 942px
  margin-left: 2px
  position: relative
  width: 768px

.footer-menu-9
  align-items: center
  display: flex
  flex-direction: column
  margin-left: 50px
  margin-top: 39px
  min-height: 299px
  width: 667px

.cec-logo-7
  height: 120px
  margin-left: 1.0px
  object-fit: cover
  width: 120px

.links-5
  display: flex
  height: 33px
  margin-left: 8.0px
  margin-top: 68px
  width: 675px

.hire-me-26
  height: 31.62px
  letter-spacing: 0
  line-height: normal
  margin-top: 1.4px
  text-align: center
  width: 103.05px

.github-12
  height: 31.62px
  letter-spacing: 0
  line-height: normal
  margin-left: 25.2px
  margin-top: 1.4px
  text-align: center
  width: 98.18px

.open-source-17
  height: 31.62px
  letter-spacing: 0
  line-height: normal
  margin-left: 22.7px
  text-align: center
  width: 185.82px

.organizations-12
  height: 31.62px
  letter-spacing: 0
  line-height: normal
  margin-left: 24.3px
  margin-top: 1.4px
  text-align: center
  width: 207.73px

.button-container
  align-items: flex-start
  display: flex
  gap: 41px
  height: 60px
  margin-left: 9.85px
  margin-top: 18px
  min-width: 471px
  position: relative

.image-8-8
  height: 225px
  margin-left: 74px
  margin-top: 123px
  object-fit: cover
  width: 640px
</style>
