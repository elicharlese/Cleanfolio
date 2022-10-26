<template>
  <div :class="[`socials-1`, className || ``]"><icons /></div>
</template>

<script>
import Icons from "./Icons";
export default {
  name: "Socials",
  components: {
    Icons,
  },
  props: ["className"],
};
</script>

<style lang="sass">
@import '../../variables'

.socials-1
  background-color: $material-themereferrorerror100
  border: 1px none
  display: flex
  height: 337px
  min-width: 1512px
  position: relative

.socials-1.socials
  margin-left: -2px
  min-width: unset
  width: 1512px
</style>
