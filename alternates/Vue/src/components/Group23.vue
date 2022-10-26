<template>
  <div :class="[`group-23`, className || ``]">
    <div class="number-2 poppins-regular-normal-mountain-mist-12px">
      <span class="span-24 poppins-regular-normal-mountain-mist-12px">{{ spanText }}</span>
    </div>
    <img
      class="line-1-31"
      src="https://anima-uploads.s3.amazonaws.com/projects/62fe76f7359e99eee487b330/releases/6338ef14129a3c9f74314c25/img/line-12-2@2x.png"
      alt="Line 12"
    />
  </div>
</template>

<script>
export default {
  name: "Group23",
  props: ["spanText", "className"],
};
</script>

<style lang="sass">
.group-23
  align-items: flex-start
  display: flex
  gap: 16px
  height: 18px
  min-width: 309px

.number-2
  letter-spacing: 0
  line-height: normal
  margin-top: -1px
  text-align: center
  width: 28px

.line-1-31
  align-self: center
  height: 1px
  margin-bottom: 2.0px
  width: 263px

.group-23.group-24
  margin-left: 1px

.group-23.group-25
  margin-left: 2px
</style>
