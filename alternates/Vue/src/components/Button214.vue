<template>
  <div class="button-2-14">
    <div class="dashboard-13 valign-text-middle">{{ dashboard }}</div>
  </div>
</template>

<script>
export default {
  name: "Button214",
  props: ["dashboard"],
};
</script>

<style lang="sass">
@import '../../variables'

.button-2-14
  align-items: flex-start
  background-color: $material-themereferrorerror100
  border: 1px none
  border-radius: 16px
  box-shadow: 0px 4px 4px #00000040
  display: flex
  height: 68px
  min-width: 257px
  padding: 14px 31px

.dashboard-13
  color: $fern
  font-family: $font-family-raleway
  font-size: $font-size-xl
  font-weight: 700
  height: 38px
  letter-spacing: 0
  line-height: normal
  min-width: 189px
  text-align: center
</style>
