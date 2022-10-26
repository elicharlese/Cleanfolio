<template>
  <div :class="[`user-github-1`, className || ``]">
    <div class="overlap-group-16">
      <div class="git-hub-username-1 valign-text-middle raleway-normal-cape-cod-22px">{{ children }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserGithub",
  props: ["children", "className"],
};
</script>

<style lang="sass">
@import '../../variables'

.user-github-1,
.user-github-1.user-github
  align-items: flex-start
  display: flex
  min-width: 320px

.overlap-group-16
  align-items: flex-start
  background-color: $material-themereferrorerror100
  border: 1px solid
  border-color: $cape-cod
  border-radius: 8px
  display: flex
  height: 43px
  min-width: 318px
  padding: 8px 19px

.git-hub-username-1
  height: 26px
  letter-spacing: 0
  line-height: normal
  min-width: 182px
  text-align: center

.user-github-1.user-github-2,
.user-github-1.user,
.user-github-1.user-1,
.user-github-1.user-github-4
  align-items: unset
  display: unset
  height: 43px
  margin-right: -2.00px

.user-github-1.user .git-hub-username-1
  min-width: unset
  width: 159px
</style>
