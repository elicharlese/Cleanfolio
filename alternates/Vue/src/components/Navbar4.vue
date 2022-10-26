<template>
  <div class="navbar-6">
    <img
      class="dashboard-layout-6"
      src="https://anima-uploads.s3.amazonaws.com/projects/62fe76f7359e99eee487b330/releases/634ef8f1abca668fdefc42a0/img/dashboard-layout@2x.png"
      alt="Dashboard Layout"
    />
    <img
      class="menu-2"
      src="https://anima-uploads.s3.amazonaws.com/projects/62fe76f7359e99eee487b330/releases/634ef8f1abca668fdefc42a0/img/menu@2x.png"
      alt="Menu"
    />
  </div>
</template>

<script>
export default {
  name: "Navbar4",
};
</script>

<style lang="sass">
@import '../../variables'

.navbar-6,
.navbar-7
  background-color: $material-themereferrorerror100
  border: 1px none
  display: flex
  gap: 605px
  height: 90px
  width: 769px

.dashboard-layout-6,
.dashboard-layout-7
  height: 60px
  margin-left: 23px
  margin-top: 15px
  width: 60px

.menu-2,
.menu-3
  height: 60px
  margin-top: 15px
  width: 60px
</style>
