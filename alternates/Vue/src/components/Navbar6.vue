<template>
  <div class="navbar-11">
    <img class="dashboard-layout-10" :src="dashboardLayout" alt="Dashboard Layout" /><links
      :buttonLoginProps="linksProps.buttonLoginProps"
      :buttonWalletProps="linksProps.buttonWalletProps"
    />
  </div>
</template>

<script>
import Links from "./Links";
export default {
  name: "Navbar6",
  components: {
    Links,
  },
  props: ["dashboardLayout", "linksProps"],
};
</script>

<style lang="sass">
@import '../../variables'

.navbar-11
  background-color: $material-themereferrorerror100
  border: 1px none
  display: flex
  gap: 185px
  height: 90px
  position: relative
  width: 1152px

.dashboard-layout-10
  height: 60px
  margin-left: 23px
  margin-top: 15px
  width: 60px
</style>
