<template>
  <div :class="[`button-login-2`, className || ``]"><div class="hero-button-1 raleway-bold-white-26px">Login</div></div>
</template>

<script>
export default {
  name: "ButtonLogin",
  props: ["className"],
};
</script>

<style lang="sass">
@import '../../variables'

.button-login-2
  align-items: flex-start
  background-color: $seagull
  border: 1px none
  border-radius: 16px
  display: flex
  height: 50px
  margin-left: 19px
  min-width: 150px
  padding: 6px 38.2px

.hero-button-1
  letter-spacing: 0
  line-height: normal
  min-height: 28px
  text-align: center
  width: 74px

.button-login-2.button-login-3,
.button-login-2.button-login
  margin-left: unset

.button-login-2.button-login-4
  margin-left: 24px

.button-login-2.button-login-1,
.button-login-2.button-login-6,
.button-login-2.button-login-7,
.button-login-2.button-login-10
  margin-top: 20px

.button-login-2.button-login-8
  background-color: $mexican-red
  margin-top: 20px

.button-login-2.button-login-9
  background-color: $mandy
  margin-top: 20px

.button-login-2.button-login-11
  background-color: $anzac
  margin-top: 20px

.button-login-2.button-login-12
  background-color: $dairy-cream
  margin-top: 20px

.button-login-2.button-login-13
  background-color: $mercury
  margin-top: 20px

.button-login-2.button-login-14
  background-color: $fern
  margin-top: 20px

.button-login-2.button-login-15
  background-color: $yellow-sunshine
  margin-top: 20px

.button-login-2.button-login-16
  background-color: $portage
  margin-top: 20px

.button-login-2.button-login-17
  background-color: $purple-heart
  margin-top: 20px

.button-login-2.button-login-18
  background-color: $orchid
  margin-top: 20px

.button-login-2.button-login-19
  background-color: $turquoise-blue
  margin-top: 20px
</style>
