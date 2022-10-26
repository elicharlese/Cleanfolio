<template>
  <div class="navbar">
    <div class="flex-row raleway-bold-cape-cod-20px">
      <img class="dashboard-layout" :src="dashboardLayout" alt="Dashboard Layout" />
      <div class="hire-me-1">{{ hireMe }}</div>
      <div class="github">{{ github }}</div>
      <div class="open-source">{{ openSource }}</div>
      <div class="organizations">{{ organizations }}</div>
      <button-login />
      <button-wallet />
    </div>
  </div>
</template>

<script>
import ButtonLogin from "./ButtonLogin";
import ButtonWallet from "./ButtonWallet";
export default {
  name: "Navbar",
  components: {
    ButtonLogin,
    ButtonWallet,
  },
  props: ["dashboardLayout", "hireMe", "github", "openSource", "organizations"],
};
</script>

<style lang="sass">
@import '../../variables'

.navbar,
.navbar-1
  background-color: $material-themereferrorerror100
  border: 1px none
  height: 90px
  min-width: 1512px

.flex-row,
.flex-row-1
  align-items: center
  display: flex
  left: 23px
  min-width: 1460px
  position: relative
  top: 15px

.dashboard-layout,
.dashboard-layout-1
  height: 60px
  width: 60px

.hire-me-1,
.hire-me-2
  letter-spacing: 0
  line-height: normal
  margin-bottom: 1.0px
  margin-left: 539px
  min-height: 23px
  min-width: 81px
  text-align: center

.github,
.github-1
  letter-spacing: 0
  line-height: normal
  margin-bottom: 1.0px
  margin-left: 19px
  min-height: 23px
  min-width: 77px
  text-align: center

.open-source,
.open-source-1
  letter-spacing: 0
  line-height: normal
  margin-bottom: 3.0px
  margin-left: 19px
  min-height: 23px
  min-width: 145px
  text-align: center

.organizations,
.organizations-1
  letter-spacing: 0
  line-height: normal
  margin-bottom: 1.0px
  margin-left: 19px
  min-height: 23px
  min-width: 163px
  text-align: center
</style>
