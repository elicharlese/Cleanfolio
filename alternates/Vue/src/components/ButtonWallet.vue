<template>
  <div :class="[`button-wallet-2`, className || ``]">
    <div class="hero-button-20 raleway-bold-white-26px">Wallet</div>
  </div>
</template>

<script>
export default {
  name: "ButtonWallet",
  props: ["className"],
};
</script>

<style lang="sass">
@import '../../variables'

.button-wallet-2
  align-items: flex-start
  background-color: $seagull
  border: 1px none
  border-radius: 16px
  display: flex
  height: 50px
  justify-content: flex-end
  margin-left: 19px
  min-width: 150px
  padding: 6px 22.8px

.hero-button-20
  letter-spacing: 0
  line-height: normal
  min-height: 28px
  text-align: center
  width: 104px

.button-wallet-2.button-wallet-3,
.button-wallet-2.button-wallet
  margin-left: unset

.button-wallet-2.button-wallet-4
  margin-left: 10px

.button-wallet-2.button-wallet-1,
.button-wallet-2.button-wallet-6,
.button-wallet-2.button-wallet-7,
.button-wallet-2.button-wallet-10
  margin-top: 20px

.button-wallet-2.button-wallet-8
  background-color: $mexican-red
  margin-top: 20px

.button-wallet-2.button-wallet-9
  background-color: $mandy
  margin-top: 20px

.button-wallet-2.button-wallet-11
  background-color: $anzac
  margin-top: 20px

.button-wallet-2.button-wallet-12
  background-color: $dairy-cream
  margin-top: 20px

.button-wallet-2.button-wallet-13
  background-color: $mercury
  margin-top: 20px

.button-wallet-2.button-wallet-14
  background-color: $fern
  margin-top: 20px

.button-wallet-2.button-wallet-15
  background-color: $yellow-sunshine
  margin-top: 20px

.button-wallet-2.button-wallet-16
  background-color: $portage
  margin-top: 20px

.button-wallet-2.button-wallet-17
  background-color: $purple-heart
  margin-top: 20px

.button-wallet-2.button-wallet-18
  background-color: $orchid
  margin-top: 20px

.button-wallet-2.button-wallet-19
  background-color: $turquoise-blue
  margin-top: 20px
</style>
