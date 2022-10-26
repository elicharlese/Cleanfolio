<template>
  <div :class="[`button-57`, className || ``]">
    <div class="hire-me-64 valign-text-middle raleway-bold-white-26px">
      <span
        ><span class="span-27 raleway-bold-white-26px">{{ spanText }}</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "xButton2",
  props: ["spanText", "className"],
};
</script>

<style lang="sass">
@import '../../variables'

.button-57
  align-items: flex-start
  background-color: $seagull
  border: 1px none
  border-radius: 16px
  display: flex
  height: 60px
  margin-left: 1px
  min-width: 215px
  padding: 8.6px 52px

.hire-me-64
  height: 41px
  letter-spacing: 0
  line-height: normal
  text-align: center
  width: 110px

.button-57.button-56
  align-self: center
  margin-left: unset
  margin-right: 10.15px

.button-57.button-58
  margin-left: 76px

.button-57.button-59
  margin-left: 75px
</style>
