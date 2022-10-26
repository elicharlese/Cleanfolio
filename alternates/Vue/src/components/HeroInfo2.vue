<template>
  <div class="hero-info-10">
    <div class="name-26 raleway-normal-cape-cod-80px">{{ name }}</div>
    <p class="an-e-commerce-and-fu-7 raleway-bold-white-16px-2">
      <span class="raleway-bold-cape-cod-16px">{{ spanText1 }}</span
      ><span class="raleway-bold-seagull-16px">{{ spanText2 }}</span
      ><span class="raleway-bold-cape-cod-16px">{{ spanText3 }}</span>
    </p>
    <x-button :children="xButtonProps.children" :className="xButtonProps.className" />
  </div>
</template>

<script>
import xButton from "./xButton";
export default {
  name: "HeroInfo2",
  components: {
    xButton,
  },
  props: ["name", "spanText1", "spanText2", "spanText3", "xButtonProps"],
};
</script>

<style lang="sass">
.hero-info-10
  align-items: flex-start
  border: 1px none
  display: flex
  flex-direction: column
  left: 66px
  min-height: 429px
  position: absolute
  top: 0
  width: 299px

.name-26
  letter-spacing: 0
  line-height: normal
  margin-top: -43px
  min-height: 204px
  width: 299px

.an-e-commerce-and-fu-7
  letter-spacing: 0
  line-height: normal
  margin-top: 18px
  min-height: 68px
  width: 299px
</style>
