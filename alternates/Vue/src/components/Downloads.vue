<template>
  <div :class="[`downloads-12`, className || ``]">
    <img
      class="downloads-item"
      src="https://anima-uploads.s3.amazonaws.com/projects/62fe76f7359e99eee487b330/releases/634b1e2b9caf1e7ca700d848/img/mac-client@2x.png"
      alt="Mac Client"
    />
    <img
      class="downloads-item variant-1"
      src="https://anima-uploads.s3.amazonaws.com/projects/62fe76f7359e99eee487b330/releases/634b1e2b9caf1e7ca700d848/img/windows-client@2x.png"
      alt="Windows Client"
    />
    <img
      class="downloads-item variant-2"
      src="https://anima-uploads.s3.amazonaws.com/projects/62fe76f7359e99eee487b330/releases/634b1e2b9caf1e7ca700d848/img/app-symbol@2x.png"
      alt="App Symbol"
    />
    <img
      class="downloads-item variant-3"
      src="https://anima-uploads.s3.amazonaws.com/projects/62fe76f7359e99eee487b330/releases/634b1e2b9caf1e7ca700d848/img/playstore@2x.png"
      alt="Playstore"
    />
    <img
      class="downloads-item variant-4"
      src="https://anima-uploads.s3.amazonaws.com/projects/62fe76f7359e99eee487b330/releases/634b1e2b9caf1e7ca700d848/img/apple-watch@2x.png"
      alt="Apple Watch"
    />
    <img
      class="downloads-item variant-5"
      src="https://anima-uploads.s3.amazonaws.com/projects/62fe76f7359e99eee487b330/releases/634b1e2b9caf1e7ca700d848/img/command-line@2x.png"
      alt="Command Line"
    />
  </div>
</template>

<script>
export default {
  name: "Downloads",
  props: ["className"],
};
</script>

<style lang="sass">
.downloads-12
  align-items: flex-start
  border: 1px none
  display: flex
  gap: 43px
  height: 98.67px
  margin-top: 58.9px
  min-width: 1390px

.downloads-item
  height: 99px
  margin-top: 0
  width: 195px

.downloads-12.downloads-14,
.downloads-12.downloads-19,
.downloads-12.downloads-23
  align-items: center

.downloads-12.downloads-14 .downloads-item,
.downloads-12.downloads-19 .downloads-item,
.downloads-12.downloads-23 .downloads-item
  margin-top: unset

.downloads-12.downloads-14 .downloads-item.variant-1,
.downloads-12.downloads-14 .downloads-item.variant-2,
.downloads-12.downloads-14 .downloads-item.variant-3,
.downloads-12.downloads-14 .downloads-item.variant-4,
.downloads-12.downloads-14 .downloads-item.variant-5,
.downloads-12.downloads-19 .downloads-item.variant-1,
.downloads-12.downloads-19 .downloads-item.variant-2,
.downloads-12.downloads-19 .downloads-item.variant-3,
.downloads-12.downloads-19 .downloads-item.variant-4,
.downloads-12.downloads-19 .downloads-item.variant-5,
.downloads-12.downloads-23 .downloads-item.variant-1,
.downloads-12.downloads-23 .downloads-item.variant-2,
.downloads-12.downloads-23 .downloads-item.variant-3,
.downloads-12.downloads-23 .downloads-item.variant-4,
.downloads-12.downloads-23 .downloads-item.variant-5
  height: 99px
  width: 195px
</style>
