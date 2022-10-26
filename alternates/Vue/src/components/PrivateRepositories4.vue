<template>
  <div :class="[`private-repositories-1`, className || ``]"><private-repositories2 /></div>
</template>

<script>
import PrivateRepositories2 from "./PrivateRepositories2";
export default {
  name: "PrivateRepositories4",
  components: {
    PrivateRepositories2,
  },
  props: ["className"],
};
</script>

<style lang="sass">
@import '../../variables'

.private-repositories-1
  background-color: $material-themereferrorerror100
  border: 1px none
  display: flex
  height: 529px
  min-width: 1512px
  position: relative

.private-repositories-1.private-repositories
  margin-top: 2px
  min-width: unset
  width: 1512px
</style>
