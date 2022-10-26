<template>
  <div :class="[`blockchain-4`, className || ``]">
    <blockchain2
      :ethereumProps="blockchain2Props.ethereumProps"
      :bitcoinProps="blockchain2Props.bitcoinProps"
      :xButtonProps="blockchain2Props.xButtonProps"
    />
  </div>
</template>

<script>
import Blockchain2 from "./Blockchain2";
export default {
  name: "Blockchain",
  components: {
    Blockchain2,
  },
  props: ["className", "blockchain2Props"],
};
</script>

<style lang="sass">
@import '../../variables'

.blockchain-4
  background-color: $material-themereferrorerror100
  border: 1px none
  display: flex
  height: 610px
  min-width: 1512px
  position: relative

.blockchain-4.blockchain-3
  margin-top: 2px
  min-width: unset
  width: 1512px
</style>
