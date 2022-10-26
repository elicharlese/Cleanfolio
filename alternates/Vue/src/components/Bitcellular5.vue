<template>
  <div :class="[`bitcellular-1`, className || ``]">
    <bitcellular2 :bitcellSignupProps="bitcellular2Props.bitcellSignupProps" />
  </div>
</template>

<script>
import Bitcellular2 from "./Bitcellular2";
export default {
  name: "Bitcellular5",
  components: {
    Bitcellular2,
  },
  props: ["className", "bitcellular2Props"],
};
</script>

<style lang="sass">
@import '../../variables'

.bitcellular-1
  background-color: $material-themereferrorerror100
  border: 1px none
  display: flex
  height: 401px
  min-width: 1512px
  position: relative

.bitcellular-1.bitcellular
  min-width: unset
  width: 1512px
</style>
