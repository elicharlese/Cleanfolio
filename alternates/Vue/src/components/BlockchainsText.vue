<template>
  <div :class="[`blockchains-text-2`, className || ``]">
    <p class="blockchain-bounty-hunting-team-tdto-1 raleway-bold-cape-cod-32px">Blockchain Bounty Hunting: Team TDTO</p>
    <p class="we-have-experience-w-1 inter-normal-cape-cod-22px">We have experience with the following blockchains:</p>
  </div>
</template>

<script>
export default {
  name: "BlockchainsText",
  props: ["className"],
};
</script>

<style lang="sass">
.blockchains-text-2,
.blockchains-text-2.blockchains-text
  display: flex
  flex-direction: column
  gap: 19px
  height: 84px
  margin-top: 52px
  width: 613px

.blockchain-bounty-hunting-team-tdto-1
  height: 38px
  letter-spacing: 0
  line-height: normal
  width: 609px

.we-have-experience-w-1
  height: 27px
  letter-spacing: 0
  line-height: normal
  margin-left: 36px
  width: 535px

.blockchains-text-2.blockchains-text-1
  margin-top: 3196px
</style>
