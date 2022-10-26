<template>
  <div :class="[`text-7`, className || ``]">
    <div class="recommended-material-3 raleway-bold-cape-cod-64px">Recommended Material</div>
    <p class="a-few-of-the-most-re-1 inter-normal-cape-cod-22px">
      A few of the most recent and relevant articles from my personal news feed:
    </p>
  </div>
</template>

<script>
export default {
  name: "Text2",
  props: ["className"],
};
</script>

<style lang="sass">
.text-7,
.text-7.text-6
  display: flex
  flex-direction: column
  gap: 45px
  height: 150px
  margin-left: 352px
  margin-top: 84px
  width: 811px

.recommended-material-3
  height: 78px
  letter-spacing: 0
  line-height: normal
  text-align: center
  width: 807px

.a-few-of-the-most-re-1
  height: 27px
  letter-spacing: 0
  line-height: normal
  margin-left: 13px
  width: 782px

.text-7.text-8,
.text-7.text-10
  margin-left: 317px
  margin-top: 86px

.text-7.text-9
  margin-left: 108px
  margin-top: 88px
</style>
