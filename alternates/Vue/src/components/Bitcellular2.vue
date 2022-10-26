<template>
  <div :class="[`bitcellular-3`, className || ``]">
    <img
      class="blockchain-new-logo-1"
      src="https://anima-uploads.s3.amazonaws.com/projects/62fe76f7359e99eee487b330/releases/634ef8f1abca668fdefc42a0/img/blockchain-new-logo@2x.png"
      alt="Blockchain New Logo"
    />
    <p class="build-a-bitcell-and-1 valign-text-middle raleway-bold-cape-cod-32px">
      Build a Bitcell and join the rest of the Metaverse!
    </p>
    <bitcell-signup :userGithubProps="bitcellSignupProps.userGithubProps" />
  </div>
</template>

<script>
import BitcellSignup from "./BitcellSignup";
export default {
  name: "Bitcellular2",
  components: {
    BitcellSignup,
  },
  props: ["className", "bitcellSignupProps"],
};
</script>

<style lang="sass">
.bitcellular-3,
.bitcellular-3.bitcellular-2
  display: flex
  flex-direction: column
  height: 254px
  margin-left: 229px
  margin-top: 74px
  position: relative
  width: 1056px

.blockchain-new-logo-1
  height: 90px
  margin-left: 482px
  width: 90px

.build-a-bitcell-and-1
  height: 38px
  letter-spacing: 0
  line-height: normal
  margin-left: 156px
  margin-top: 32px
  text-align: center
  width: 742px

.bitcellular-3.bitcellular-4,
.bitcellular-3.bitcellular-5
  margin-left: 193px
</style>
