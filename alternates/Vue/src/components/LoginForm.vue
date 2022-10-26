<template>
  <div class="login-form screen"><login-form2 /></div>
</template>

<script>
import LoginForm2 from "./LoginForm2";
export default {
  name: "LoginForm",
  components: {
    LoginForm2,
  },
};
</script>

<style lang="sass">
@import '../../variables'

.login-form
  background-color: $material-themereferrorerror100
  border: 1px none
  display: flex
  height: 100vh
  min-height: 663px
  min-width: 565px
  position: relative
  width: 100%
</style>
