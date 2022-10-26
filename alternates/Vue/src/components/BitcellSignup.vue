<template>
  <div class="bitcell-signup-1">
    <user-github :children="userGithubProps.children" />
    <div class="user-email-1">
      <div class="overlap-group1-2">
        <div class="email-address-1 valign-text-middle raleway-normal-cape-cod-22px">Email Address</div>
      </div>
    </div>
    <button-signup />
  </div>
</template>

<script>
import UserGithub from "./UserGithub";
import ButtonSignup from "./ButtonSignup";
export default {
  name: "BitcellSignup",
  components: {
    UserGithub,
    ButtonSignup,
  },
  props: ["userGithubProps"],
};
</script>

<style lang="sass">
@import '../../variables'

.bitcell-signup-1,
.bitcell-signup-2,
.bitcell-signup
  display: flex
  margin-top: 51px
  position: relative
  width: 1054px

.user-email-1,
.user-email-2,
.user-email
  align-items: flex-start
  display: flex
  margin-left: 28px
  min-width: 524px

.overlap-group1-2,
.overlap-group1-3,
.overlap-group1-1
  align-items: flex-start
  background-color: $material-themereferrorerror100
  border: 1px solid
  border-color: $cape-cod
  border-radius: 8px
  display: flex
  height: 43px
  min-width: 522px
  padding: 8px 34px

.email-address-1,
.email-address-2,
.email-address
  height: 26px
  letter-spacing: 0
  line-height: normal
  min-width: 144px
  text-align: center
</style>
