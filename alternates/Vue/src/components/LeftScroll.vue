<template>
  <div :class="[`left-scroll`, className || ``]"><img class="chevron" :src="src" alt="Chevron Left" /></div>
</template>

<script>
export default {
  name: "LeftScroll",
  props: ["src", "className"],
};
</script>

<style lang="sass">
@import '../../variables'

.left-scroll
  align-items: flex-start
  background-color: $seagull
  border-radius: 30px
  display: flex
  height: 60px
  min-width: 60px
  padding: 12px 11px

.chevron
  height: 35px
  width: 38px

.left-scroll.right-scroll
  margin-left: 67px
</style>
