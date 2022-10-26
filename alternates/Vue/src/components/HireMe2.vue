<template>
  <div :class="[`hire-me-38`, className || ``]">
    <text />
    <img
      class="click-up-14"
      src="https://anima-uploads.s3.amazonaws.com/projects/62fe76f7359e99eee487b330/releases/634ef8f1abca668fdefc42a0/img/-click-up@1x.png"
      alt="click-up"
    />
  </div>
</template>

<script>
import Text from "./Text";
export default {
  name: "HireMe2",
  components: {
    Text,
  },
  props: ["className"],
};
</script>

<style lang="sass">
@import '../../variables'

.hire-me-38
  background-color: $material-themereferrorerror100
  border: 1px none
  display: flex
  flex-direction: column
  gap: 30px
  height: 1046px
  min-width: 1512px
  position: relative

.click-up-14
  height: 753px
  margin-left: 489px
  object-fit: cover
  width: 533px

.hire-me-38.hire-me-37
  min-width: unset
  width: 1512px
</style>
