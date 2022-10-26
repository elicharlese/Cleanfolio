<template>
  <div class="time-frame-1">
    <div class="jul-2022 poppins-medium-mountain-mist-13px">
      <span class="poppins-medium-mountain-mist-13px">Jul 2022</span>
    </div>
    <img
      class="toggle"
      src="https://anima-uploads.s3.amazonaws.com/projects/62fe76f7359e99eee487b330/releases/6338ef14129a3c9f74314c25/img/-toggle-1@2x.png"
      alt="toggle"
    />
  </div>
</template>

<script>
export default {
  name: "TimeFrame",
};
</script>

<style lang="sass">
@import '../../variables'

.time-frame-1
  align-items: flex-start
  border: 1px solid
  border-color: $mountain-mist-3
  border-radius: 2px
  display: flex
  gap: 8px
  height: 38px
  margin-left: -1px
  min-width: 89px
  padding: 8px

.jul-2022
  letter-spacing: 0
  line-height: normal
  min-height: 20px
  min-width: 54px

.toggle
  align-self: center
  height: 9px
  margin-bottom: 2.0px
  width: 9px
</style>
