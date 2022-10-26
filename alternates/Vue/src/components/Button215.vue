<template>
  <div class="button-2-15">
    <div class="dashboard-14 raleway-bold-yellow-sunshine-32px">{{ dashboard }}</div>
  </div>
</template>

<script>
export default {
  name: "Button215",
  props: ["dashboard"],
};
</script>

<style lang="sass">
@import '../../variables'

.button-2-15
  align-items: flex-start
  background-color: $material-themereferrorerror100
  border: 1px none
  border-radius: 16px
  box-shadow: 0px 4px 4px #fcf50040
  display: flex
  height: 68px
  min-width: 257px
  padding: 14px 26px

.dashboard-14
  letter-spacing: 0
  line-height: normal
  min-height: 38px
</style>
