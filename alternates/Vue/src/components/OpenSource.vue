<template>
  <div :class="[`open-source-3`, className || ``]">
    <div class="overlap-group-9">
      <div class="snippets-2"></div>
      <icon-github />
      <p class="view-my-profile-to-s-1 valign-text-middle raleway-normal-cape-cod-22px">
        View my profile to see more about my work on personal projects and on other initiatives I have contributed to:
      </p>
      <div class="open-source-projects-contributions-1 valign-text-middle raleway-bold-cape-cod-32px">
        Open-Source Projects &amp; Contributions
      </div>
      <img
        class="eli-img-1"
        src="https://anima-uploads.s3.amazonaws.com/projects/62fe76f7359e99eee487b330/releases/634ef8f1abca668fdefc42a0/img/-eli-img@2x.png"
        alt="eli-img"
      />
    </div>
  </div>
</template>

<script>
import IconGithub from "./IconGithub";
export default {
  name: "OpenSource",
  components: {
    IconGithub,
  },
  props: ["className"],
};
</script>

<style lang="sass">
@import '../../variables'

.open-source-3,
.open-source-3.open-source-2
  align-items: flex-start
  display: flex
  margin-left: 129px
  margin-top: 93px
  min-width: 1257px

.overlap-group-9
  height: 339px
  position: relative
  width: 1253px

.snippets-2
  background-color: $seagull-2
  border: 1px none
  border-radius: 16px
  height: 261px
  left: 0
  position: absolute
  top: 78px
  width: 1253px

.view-my-profile-to-s-1
  height: 26px
  left: 75px
  letter-spacing: 0
  line-height: normal
  position: absolute
  text-align: center
  top: 235px

.open-source-projects-contributions-1
  height: 38px
  left: 335px
  letter-spacing: 0
  line-height: normal
  position: absolute
  text-align: center
  top: 171px

.eli-img-1
  height: 150px
  left: 552px
  object-fit: cover
  position: absolute
  top: 0
  width: 150px

.open-source-3.open-source-4,
.open-source-3.open-source-5
  margin-left: 94px
</style>
