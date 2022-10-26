<template>
  <div class="private-repositories-12"><private-repositories2 :className="privateRepositories2Props.className" /></div>
</template>

<script>
import PrivateRepositories2 from "./PrivateRepositories2";
export default {
  name: "PrivateRepositories3",
  components: {
    PrivateRepositories2,
  },
  props: ["privateRepositories2Props"],
};
</script>

<style lang="sass">
@import '../../variables'

.private-repositories-12,
.private-repositories-13
  background-color: $material-themereferrorerror100
  border: 1px none
  display: flex
  height: 529px
  margin-top: 2px
  position: relative
  width: 1440px
</style>
