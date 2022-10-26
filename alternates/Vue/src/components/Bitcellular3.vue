<template>
  <div class="bitcellular-8">
    <bitcellular2 :className="bitcellular2Props.className" :bitcellSignupProps="bitcellular2Props.bitcellSignupProps" />
  </div>
</template>

<script>
import Bitcellular2 from "./Bitcellular2";
export default {
  name: "Bitcellular3",
  components: {
    Bitcellular2,
  },
  props: ["bitcellular2Props"],
};
</script>

<style lang="sass">
@import '../../variables'

.bitcellular-8,
.bitcellular-9
  background-color: $material-themereferrorerror100
  border: 1px none
  display: flex
  height: 401px
  position: relative
  width: 1440px
</style>
