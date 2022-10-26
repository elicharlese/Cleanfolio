<template>
  <div class="hire-me-21">
    <text :className="textProps.className" />
    <img
      class="click-up-2"
      src="https://anima-uploads.s3.amazonaws.com/projects/62fe76f7359e99eee487b330/releases/634ef8f1abca668fdefc42a0/img/-click-up@1x.png"
      alt="click-up"
    />
  </div>
</template>

<script>
import Text from "./Text";
export default {
  name: "HireMe",
  components: {
    Text,
  },
  props: ["textProps"],
};
</script>

<style lang="sass">
@import '../../variables'

.hire-me-21,
.hire-me-22
  background-color: $material-themereferrorerror100
  border: 1px none
  display: flex
  flex-direction: column
  gap: 33px
  height: 1046px
  position: relative
  width: 1440px

.click-up-2,
.click-up-3
  height: 753px
  margin-left: 454px
  object-fit: cover
  width: 533px
</style>
