<template>
  <div class="blockchain-16">
    <blockchain2
      :className="blockchain2Props.className"
      :ethereumProps="blockchain2Props.ethereumProps"
      :bitcoinProps="blockchain2Props.bitcoinProps"
      :xButtonProps="blockchain2Props.xButtonProps"
    />
  </div>
</template>

<script>
import Blockchain2 from "./Blockchain2";
export default {
  name: "Blockchain3",
  components: {
    Blockchain2,
  },
  props: ["blockchain2Props"],
};
</script>

<style lang="sass">
@import '../../variables'

.blockchain-16,
.blockchain-17
  background-color: $material-themereferrorerror100
  border: 1px none
  display: flex
  height: 610px
  margin-top: 2px
  position: relative
  width: 1440px
</style>
