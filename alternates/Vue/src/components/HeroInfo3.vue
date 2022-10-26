<template>
  <div class="hero-info-12">
    <div class="name-29 raleway-normal-cape-cod-80px">{{ name }}</div>
    <div class="overlap-group-55">
      <x-button :children="xButtonProps.children" :className="xButtonProps.className" />
      <p class="an-e-commerce-and-fu-8 raleway-bold-white-16px-2">
        <span class="raleway-bold-cape-cod-16px">{{ spanText1 }}</span
        ><span class="raleway-bold-seagull-16px">{{ spanText2 }}</span
        ><span class="raleway-bold-cape-cod-16px">{{ spanText3 }}</span>
      </p>
    </div>
  </div>
</template>

<script>
import xButton from "./xButton";
export default {
  name: "HeroInfo3",
  components: {
    xButton,
  },
  props: ["name", "spanText1", "spanText2", "spanText3", "xButtonProps"],
};
</script>

<style lang="sass">
.hero-info-12
  align-items: flex-start
  border: 1px none
  display: flex
  flex-direction: column
  gap: 18px
  left: 66px
  min-height: 429px
  position: absolute
  top: 0
  width: 299px

.name-29
  letter-spacing: 0
  line-height: normal
  margin-top: -43px
  min-height: 204px
  width: 299px

.overlap-group-55
  height: 158px
  position: relative
  width: 299px

.an-e-commerce-and-fu-8
  left: 0
  letter-spacing: 0
  line-height: normal
  position: absolute
  top: 0
  width: 299px
</style>
