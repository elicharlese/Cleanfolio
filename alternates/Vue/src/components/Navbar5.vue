<template>
  <div class="navbar-8">
    <img class="dashboard-layout-8" :src="dashboardLayout" alt="Dashboard Layout" />
    <div class="links-6 raleway-bold-cape-cod-20px">
      <div class="hire-me-28">{{ hireMe }}</div>
      <div class="github-13">{{ github }}</div>
      <div class="open-source-18">{{ openSource }}</div>
      <div class="organizations-13">{{ organizations }}</div>
      <button-login :className="buttonLoginProps.className" />
      <button-wallet :className="buttonWalletProps.className" />
    </div>
  </div>
</template>

<script>
import ButtonLogin from "./ButtonLogin";
import ButtonWallet from "./ButtonWallet";
export default {
  name: "Navbar5",
  components: {
    ButtonLogin,
    ButtonWallet,
  },
  props: [
    "dashboardLayout",
    "hireMe",
    "github",
    "openSource",
    "organizations",
    "buttonLoginProps",
    "buttonWalletProps",
  ],
};
</script>

<style lang="sass">
@import '../../variables'

.navbar-8
  background-color: $material-themereferrorerror100
  border: 1px none
  display: flex
  gap: 77px
  height: 90px
  width: 1512px

.dashboard-layout-8
  height: 60px
  margin-left: 23px
  margin-top: 15px
  width: 60px

.links-6
  display: flex
  height: 50px
  margin-top: 20px
  position: relative
  width: 844px

.hire-me-28
  height: 23px
  letter-spacing: 0
  line-height: normal
  margin-top: 14px
  text-align: center
  width: 81px

.github-13
  height: 23px
  letter-spacing: 0
  line-height: normal
  margin-left: 12px
  margin-top: 14px
  text-align: center
  width: 77px

.open-source-18
  height: 23px
  letter-spacing: 0
  line-height: normal
  margin-left: 12px
  margin-top: 13px
  text-align: center
  width: 145px

.organizations-13
  height: 23px
  letter-spacing: 0
  line-height: normal
  margin-left: 12px
  margin-top: 14px
  text-align: center
  width: 163px
</style>
