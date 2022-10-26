<template>
  <div :class="[`navbar-2`, className || ``]">
    <img
      class="dashboard-layout-2"
      src="https://anima-uploads.s3.amazonaws.com/projects/62fe76f7359e99eee487b330/releases/634ef8f1abca668fdefc42a0/img/dashboard-layout@2x.png"
      alt="Dashboard Layout"
    />
    <img
      class="menu"
      src="https://anima-uploads.s3.amazonaws.com/projects/62fe76f7359e99eee487b330/releases/634ef8f1abca668fdefc42a0/img/menu@2x.png"
      alt="Menu"
    />
  </div>
</template>

<script>
export default {
  name: "Navbar2",
  props: ["className"],
};
</script>

<style lang="sass">
@import '../../variables'

.navbar-2
  background-color: $material-themereferrorerror100
  border: 1px none
  display: flex
  gap: 262px
  height: 90px
  width: 427px

.dashboard-layout-2
  height: 60px
  margin-left: 23px
  margin-top: 15px
  width: 60px

.menu
  height: 60px
  margin-top: 15px
  width: 60px

.navbar-2.navbar-3
  margin-left: 2px
  width: 426px
</style>
