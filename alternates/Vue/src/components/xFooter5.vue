<template>
  <div class="footer-22">
    <div class="footer-menu-10">
      <img class="cec-logo-8" :src="cecLogo" alt="cec-logo" />
      <div class="links-7 raleway-bold-cape-cod-20px">
        <div class="hire-me-29">{{ hireMe }}</div>
        <div class="github-14">{{ github }}</div>
        <div class="open-source-19">{{ openSource }}</div>
        <div class="organizations-14">{{ organizations }}</div>
      </div>
      <div class="button-container-1">
        <x-button :children="xButton1Props.children" :className="xButton1Props.className" />
        <x-button :children="xButton2Props.children" :className="xButton2Props.className" />
      </div>
    </div>
    <img class="image-8-9" :src="image8" alt="image 8" /><snippets :className="snippetsProps.className" />
  </div>
</template>

<script>
import xButton from "./xButton";
import Snippets from "./Snippets";
export default {
  name: "xFooter5",
  components: {
    xButton,
    Snippets,
  },
  props: [
    "cecLogo",
    "hireMe",
    "github",
    "openSource",
    "organizations",
    "image8",
    "xButton1Props",
    "xButton2Props",
    "snippetsProps",
  ],
};
</script>

<style lang="sass">
@import '../../variables'

.footer-22
  background-color: $material-themereferrorerror100
  border: 1px none
  display: flex
  flex-direction: column
  gap: 89px
  height: 1008px
  position: relative
  width: 1022px

.footer-menu-10
  align-items: center
  display: flex
  flex-direction: column
  margin-left: 100px
  margin-top: 49px
  min-height: 324px
  width: 822px

.cec-logo-8
  height: 120px
  object-fit: cover
  width: 120px

.links-7
  display: flex
  height: 24px
  margin-left: 8.0px
  margin-top: 71px
  width: 830px

.hire-me-29
  height: 23px
  letter-spacing: 0
  line-height: normal
  margin-top: 1px
  text-align: center
  width: 127px

.github-14
  height: 23px
  letter-spacing: 0
  line-height: normal
  margin-left: 31px
  margin-top: 1px
  text-align: center
  width: 121px

.open-source-19
  height: 23px
  letter-spacing: 0
  line-height: normal
  margin-left: 28px
  text-align: center
  width: 229px

.organizations-14
  height: 23px
  letter-spacing: 0
  line-height: normal
  margin-left: 30px
  margin-top: 1px
  text-align: center
  width: 256px

.button-container-1
  align-items: flex-start
  display: flex
  gap: 75px
  height: 60px
  margin-left: 0.85px
  margin-top: 49px
  min-width: 505px
  position: relative

.image-8-9
  height: 225px
  margin-left: 191px
  object-fit: cover
  width: 640px
</style>
