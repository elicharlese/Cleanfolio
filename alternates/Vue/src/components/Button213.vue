<template>
  <div class="button-2-13">
    <div class="dashboard-12">{{ dashboard }}</div>
  </div>
</template>

<script>
export default {
  name: "Button213",
  props: ["dashboard"],
};
</script>

<style lang="sass">
@import '../../variables'

.button-2-13
  align-items: flex-start
  background-color: $material-themereferrorerror100
  border: 1px none
  border-radius: 16px
  box-shadow: 0px 4px 4px #00000040
  display: flex
  height: 68px
  min-width: 257px
  padding: 14px 26px

.dashboard-12
  color: #7fb684
  font-family: $font-family-raleway
  font-size: $font-size-xl
  font-weight: 700
  letter-spacing: 0
  line-height: normal
  min-height: 38px
</style>
