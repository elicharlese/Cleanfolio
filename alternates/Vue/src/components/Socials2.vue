<template>
  <div class="socials-3"><icons :className="iconsProps.className" /></div>
</template>

<script>
import Icons from "./Icons";
export default {
  name: "Socials2",
  components: {
    Icons,
  },
  props: ["iconsProps"],
};
</script>

<style lang="sass">
@import '../../variables'

.socials-3,
.socials-4
  background-color: $material-themereferrorerror100
  border: 1px none
  display: flex
  height: 337px
  margin-left: -2px
  position: relative
  width: 1442px
</style>
