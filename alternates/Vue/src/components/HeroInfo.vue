<template>
  <div :class="[`hero-info-2`, className || ``]">
    <div class="overlap-group-2">
      <p class="an-e-commerce-and-fu-1 raleway-bold-white-22px-2">
        <span class="span raleway-bold-cape-cod-22px">{{ spanText1 }}</span
        ><span class="span raleway-bold-seagull-22px">{{ spanText2 }}</span
        ><span class="span raleway-bold-cape-cod-22px">{{ spanText3 }}</span>
      </p>
      <div class="name-1 raleway-normal-cape-cod-100px">{{ name }}</div>
    </div>
    <x-button :children="buttonProps.children" />
  </div>
</template>

<script>
import xButton from "./xButton";
export default {
  name: "HeroInfo",
  components: {
    xButton,
  },
  props: ["spanText1", "spanText2", "spanText3", "name", "className", "buttonProps"],
};
</script>

<style lang="sass">
.hero-info-2,
.hero-info-2.hero-info
  align-items: flex-start
  border: 1px none
  display: flex
  flex-direction: column
  gap: 67px
  left: 0
  min-height: 355px
  position: absolute
  top: 148px
  width: 669px

.overlap-group-2
  height: 229px
  margin-top: -1px
  position: relative
  width: 669px

.an-e-commerce-and-fu-1
  left: 1px
  letter-spacing: 0
  line-height: normal
  position: absolute
  top: 134px
  width: 668px

.name-1
  left: 0
  letter-spacing: 0
  line-height: normal
  position: absolute
  top: 0
  width: 669px

.hero-info-2.hero-info-4
  left: 42px
  top: 0

.hero-info-2.hero-info-5
  top: 0

.hero-info-2.hero-info-1,
.hero-info-2.hero-info-7,
.hero-info-2.hero-info-8
  top: 225px

.hero-info-2.hero-info-6
  left: 50px
  top: 0
</style>
