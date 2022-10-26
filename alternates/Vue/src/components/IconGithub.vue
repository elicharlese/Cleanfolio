<template>
  <div :class="[`icon-github-1`, className || ``]">
    <img
      class="git-hub-2"
      src="https://anima-uploads.s3.amazonaws.com/projects/62fe76f7359e99eee487b330/releases/634ef8f1abca668fdefc42a0/img/github@2x.png"
      alt="GitHub"
    />
    <div class="git-hub-3 valign-text-middle raleway-bold-cape-cod-16px">GitHub</div>
  </div>
</template>

<script>
export default {
  name: "IconGithub",
  props: ["className"],
};
</script>

<style lang="sass">
.icon-github-1,
.icon-github-1.icon-github
  display: flex
  gap: 7px
  height: 30px
  left: 576px
  position: absolute
  top: 286px
  width: 93px

.git-hub-2
  height: 30px
  width: 30px

.git-hub-3
  height: 19px
  letter-spacing: 0
  line-height: normal
  margin-top: 5px
  text-align: center
  width: 54px

.icon-github-1.icon-github-2
  left: 138px
  top: 521px

.icon-github-1.icon-github-4
  left: 288px
  top: 367px

.icon-github-1.icon-github-5
  height: unset
  left: unset
  margin-left: 1.0px
  position: unset
  top: unset
</style>
