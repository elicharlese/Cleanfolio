<template>
  <div :class="[`button-9`, className || ``]">
    <div class="hire-me-3 valign-text-middle raleway-bold-white-26px">{{ children }}</div>
  </div>
</template>

<script>
export default {
  name: "xButton",
  props: ["children", "className"],
};
</script>

<style lang="sass">
@import '../../variables'

.button-9,
.button-9.button-2
  align-items: flex-start
  background-color: $seagull
  border: 1px none
  border-radius: 16px
  display: flex
  height: 60px
  margin-left: 1px
  min-width: 215px
  padding: 8.6px 52px

.hire-me-3
  height: 41px
  letter-spacing: 0
  line-height: normal
  text-align: center
  width: 110px

.button-9.button-10,
.button-9.button-16,
.button-9.button-20,
.button-9.button-22,
.button-9.button-3,
.button-9.button-3-1,
.button-9.button-3-10,
.button-9.button-3-11,
.button-9.button-3-12,
.button-9.button-3-13,
.button-9.button-3-14,
.button-9.button-3-15,
.button-9.button-3-16,
.button-9.button-3-17,
.button-9.button-3-18,
.button-9.button-3-19,
.button-9.button-3-2,
.button-9.button-3-3,
.button-9.button-3-4,
.button-9.button-3-5,
.button-9.button-3-6,
.button-9.button-3-7,
.button-9.button-3-8,
.button-9.button-3-9
  margin-left: 165px
  margin-top: 52px
  min-width: 277px
  padding: 8.6px 67.0px

.button-9.button-10 .hire-me-3,
.button-9.button-14 .hire-me-3,
.button-9.button-16 .hire-me-3,
.button-9.button-20 .hire-me-3,
.button-9.button-22 .hire-me-3,
.button-9.button-3-1 .hire-me-3,
.button-9.button-3-2 .hire-me-3,
.button-9.button-3-3 .hire-me-3,
.button-9.button-3-4 .hire-me-3,
.button-9.button-3-5 .hire-me-3,
.button-9.button-3-6 .hire-me-3,
.button-9.button-3-7 .hire-me-3,
.button-9.button-3-8 .hire-me-3,
.button-9.button-3-9 .hire-me-3,
.button-9.button-3-10 .hire-me-3,
.button-9.button-3-11 .hire-me-3,
.button-9.button-3-12 .hire-me-3,
.button-9.button-3-13 .hire-me-3,
.button-9.button-3-14 .hire-me-3,
.button-9.button-3-15 .hire-me-3,
.button-9.button-3-16 .hire-me-3,
.button-9.button-3-17 .hire-me-3,
.button-9.button-3-18 .hire-me-3,
.button-9.button-3-19 .hire-me-3,
.button-9.button-3 .hire-me-3
  width: 141px

.button-9.button-11,
.button-9.button-4,
.button-9.button-26,
.button-9.button-28,
.button-9.button-31
  margin-left: 76px

.button-9.button-12,
.button-9.button-18,
.button-9.button-5,
.button-9.button-27,
.button-9.button-29,
.button-9.button-32
  margin-left: 75px

.button-9.button-13
  margin-left: unset
  margin-top: 46px

.button-9.button-14
  margin-left: 58px
  margin-top: 41px
  min-width: 277px
  padding: 8.6px 67.0px

.button-9.button-8,
.button-9.button-8-1
  align-items: unset
  display: unset
  margin-left: unset
  min-width: 214.85px
  padding: unset
  position: relative

.button-9.button-8-1 .hire-me-3,
.button-9.button-8 .hire-me-3
  left: 52px
  position: absolute
  top: 9px

.button-9.button-17,
.button-9.button-23
  margin-left: 67px

.button-9.button,
.button-9.button-1
  margin-left: unset

.button-9.button-24
  left: 0
  margin-left: unset
  position: absolute
  top: 98px

.button-9.button-6
  margin-left: 76px
  margin-top: 173px
  min-width: 214.85px

.button-9.button-7
  margin-left: 75.1px
  margin-top: 173px
  min-width: 214.85px
</style>
