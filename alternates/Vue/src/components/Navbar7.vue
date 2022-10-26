<template>
  <div :class="[`navbar-14 raleway-bold-cape-cod-20px`, className || ``]">
    <img
      class="dashboard-layout-13"
      src="https://anima-uploads.s3.amazonaws.com/projects/62fe76f7359e99eee487b330/releases/633e379a38caf9c281884c8d/img/dashboard-layout@2x.png"
      alt="Dashboard Layout"
    />
    <a href="https://www.figma.com/file/mD0yvjYHYqH6N4HpsdePGR/Cleanfolio?node-id=2%3A3" target="_blank"
      ><div class="hire-me-46 raleway-bold-cape-cod-20px">HIRE ME</div>
    </a>
    <div class="github-23">GITHUB</div>
    <div class="open-source-35">OPEN-SOURCE</div>
    <router-link to="/organizations"
      ><div class="organizations-25 raleway-bold-cape-cod-20px">ORGANIZATIONS</div> </router-link
    ><button-login :className="buttonLoginProps.className" />
    <button-wallet :className="buttonWalletProps.className" />
  </div>
</template>

<script>
import ButtonLogin from "./ButtonLogin";
import ButtonWallet from "./ButtonWallet";
export default {
  name: "Navbar7",
  components: {
    ButtonLogin,
    ButtonWallet,
  },
  props: ["className", "buttonLoginProps", "buttonWalletProps"],
};
</script>

<style lang="sass">
@import '../../variables'

.navbar-14
  background-color: $material-themereferrorerror100
  border: 1px none
  display: flex
  height: 90px
  position: relative
  width: 1512px

.dashboard-layout-13
  height: 60px
  margin-left: 23px
  margin-top: 15px
  width: 60px

.hire-me-46
  cursor: pointer
  height: 23px
  letter-spacing: 0
  line-height: normal
  margin-left: 539px
  margin-top: 34px
  text-align: center
  width: 81px

.github-23
  height: 23px
  letter-spacing: 0
  line-height: normal
  margin-left: 19px
  margin-top: 34px
  text-align: center
  width: 77px

.open-source-35
  height: 23px
  letter-spacing: 0
  line-height: normal
  margin-left: 19px
  margin-top: 33px
  text-align: center
  width: 145px

.organizations-25
  cursor: pointer
  height: 23px
  letter-spacing: 0
  line-height: normal
  margin-left: 19px
  margin-top: 34px
  text-align: center
  width: 163px

.navbar-14.navbar-16 .hire-me-46,
.navbar-14.navbar-17 .hire-me-46,
.navbar-14.navbar-18 .hire-me-46,
.navbar-14.navbar-19 .hire-me-46,
.navbar-14.navbar-20 .hire-me-46,
.navbar-14.navbar-21 .hire-me-46,
.navbar-14.navbar-22 .hire-me-46,
.navbar-14.navbar-23 .hire-me-46,
.navbar-14.navbar-24 .hire-me-46,
.navbar-14.navbar-25 .hire-me-46
  cursor: unset
</style>
