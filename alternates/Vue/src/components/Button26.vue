<template>
  <div class="button-2-6">
    <div class="dashboard-5 valign-text-middle raleway-bold-seagull-32px">{{ dashboard }}</div>
  </div>
</template>

<script>
export default {
  name: "Button26",
  props: ["dashboard"],
};
</script>

<style lang="sass">
@import '../../variables'

.button-2-6
  align-items: flex-start
  background-color: $material-themereferrorerror100
  border: 1px none
  border-radius: 16px
  box-shadow: 0px 4px 4px #00000040
  display: flex
  height: 68px
  min-width: 257px
  padding: 14px 31px

.dashboard-5
  height: 38px
  letter-spacing: 0
  line-height: normal
  min-width: 189px
  text-align: center
</style>
