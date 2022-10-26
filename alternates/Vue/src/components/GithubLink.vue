<template>
  <div :class="[`github-link-1`, className || ``]">
    <img
      class="git-hub-14"
      src="https://anima-uploads.s3.amazonaws.com/projects/62fe76f7359e99eee487b330/releases/634ef8f1abca668fdefc42a0/img/github-1@2x.png"
      alt="GitHub"
    />
    <div class="git-hub-15 valign-text-middle raleway-bold-cape-cod-22px">GitHub</div>
  </div>
</template>

<script>
export default {
  name: "GithubLink",
  props: ["className"],
};
</script>

<style lang="sass">
.github-link-1,
.github-link-1.github-link
  display: flex
  gap: 10px
  width: 131px

.git-hub-14
  height: 45px
  width: 45px

.git-hub-15
  height: 26px
  letter-spacing: 0
  line-height: normal
  margin-top: 10px
  text-align: center
  width: 74px

.github-link-1.github-link-2
  margin-left: 1.0px
  margin-top: 10px

.github-link-1.github-link-4
  margin-left: 1.0px

.github-link-1.github-link-5
  height: 45px
  left: 461px
  position: absolute
  top: 187px
</style>
