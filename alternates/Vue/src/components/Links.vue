<template>
  <div class="links-2 raleway-bold-cape-cod-20px">
    <div class="hire-me-20">HIRE ME</div>
    <div class="github-9">GITHUB</div>
    <div class="open-source-13">OPEN-SOURCE</div>
    <div class="organizations-9">ORGANIZATIONS</div>
    <button-login :className="buttonLoginProps.className" />
    <button-wallet :className="buttonWalletProps.className" />
  </div>
</template>

<script>
import ButtonLogin from "./ButtonLogin";
import ButtonWallet from "./ButtonWallet";
export default {
  name: "Links",
  components: {
    ButtonLogin,
    ButtonWallet,
  },
  props: ["buttonLoginProps", "buttonWalletProps"],
};
</script>

<style lang="sass">
.links-2,
.links-1
  display: flex
  gap: 19px
  height: 50px
  margin-top: 20px
  position: relative
  width: 869px

.hire-me-20,
.hire-me-19
  height: 23px
  letter-spacing: 0
  line-height: normal
  margin-top: 14px
  text-align: center
  width: 81px

.github-9,
.github-8
  height: 23px
  letter-spacing: 0
  line-height: normal
  margin-top: 14px
  text-align: center
  width: 77px

.open-source-13,
.open-source-12
  height: 23px
  letter-spacing: 0
  line-height: normal
  margin-top: 13px
  text-align: center
  width: 145px

.organizations-9,
.organizations-8
  height: 23px
  letter-spacing: 0
  line-height: normal
  margin-top: 14px
  text-align: center
  width: 163px
</style>
