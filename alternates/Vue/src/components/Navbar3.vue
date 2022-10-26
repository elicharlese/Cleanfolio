<template>
  <div class="navbar-4">
    <img
      class="dashboard-layout-4"
      src="https://anima-uploads.s3.amazonaws.com/projects/62fe76f7359e99eee487b330/releases/634ef8f1abca668fdefc42a0/img/dashboard-layout@2x.png"
      alt="Dashboard Layout"
    />
    <links :buttonLoginProps="linksProps.buttonLoginProps" :buttonWalletProps="linksProps.buttonWalletProps" />
  </div>
</template>

<script>
import Links from "./Links";
export default {
  name: "Navbar3",
  components: {
    Links,
  },
  props: ["linksProps"],
};
</script>

<style lang="sass">
@import '../../variables'

.navbar-4,
.navbar-5
  background-color: $material-themereferrorerror100
  border: 1px none
  display: flex
  gap: 465px
  height: 90px
  position: relative
  width: 1440px

.dashboard-layout-4,
.dashboard-layout-5
  height: 60px
  margin-left: 23px
  margin-top: 15px
  width: 60px
</style>
