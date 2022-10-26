<template>
  <div class="button-2-23">
    <div class="dashboard-22 raleway-bold-turquoise-blue-32px">{{ dashboard }}</div>
  </div>
</template>

<script>
export default {
  name: "Button223",
  props: ["dashboard"],
};
</script>

<style lang="sass">
@import '../../variables'

.button-2-23
  align-items: flex-start
  background-color: $material-themereferrorerror100
  border: 1px none
  border-radius: 16px
  box-shadow: 0px 4px 4px #00000040
  display: flex
  height: 68px
  min-width: 257px
  padding: 14px 26px

.dashboard-22
  letter-spacing: 0
  line-height: normal
  min-height: 38px
</style>
