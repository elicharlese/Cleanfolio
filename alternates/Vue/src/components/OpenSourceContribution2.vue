<template>
  <div class="open-source-contribution-3"><open-source :className="openSourceProps.className" /></div>
</template>

<script>
import OpenSource from "./OpenSource";
export default {
  name: "OpenSourceContribution2",
  components: {
    OpenSource,
  },
  props: ["openSourceProps"],
};
</script>

<style lang="sass">
@import '../../variables'

.open-source-contribution-3,
.open-source-contribution-4
  background-color: $material-themereferrorerror100
  border: 1px none
  display: flex
  height: 525px
  position: relative
  width: 1440px
</style>
