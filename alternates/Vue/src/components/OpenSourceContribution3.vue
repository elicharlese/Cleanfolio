<template>
  <div :class="[`open-source-contribution-1`, className || ``]"><open-source /></div>
</template>

<script>
import OpenSource from "./OpenSource";
export default {
  name: "OpenSourceContribution3",
  components: {
    OpenSource,
  },
  props: ["className"],
};
</script>

<style lang="sass">
@import '../../variables'

.open-source-contribution-1
  background-color: $material-themereferrorerror100
  border: 1px none
  display: flex
  height: 525px
  min-width: 1512px
  position: relative

.open-source-contribution-1.open-source-contribution
  min-width: unset
  width: 1512px
</style>
