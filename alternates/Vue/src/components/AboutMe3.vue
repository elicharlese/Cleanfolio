<template>
  <div :class="[`about-me-20`, className || ``]">
    <about-me22 />
    <snippets2 :className="snippets2Props.className" />
  </div>
</template>

<script>
import AboutMe22 from "./AboutMe22";
import Snippets2 from "./Snippets2";
export default {
  name: "AboutMe3",
  components: {
    AboutMe22,
    Snippets2,
  },
  props: ["className", "snippets2Props"],
};
</script>

<style lang="sass">
@import '../../variables'

.about-me-20
  background-color: $material-themereferrorerror100
  border: 1px none
  display: flex
  flex-direction: column
  gap: 118.3px
  height: 982px
  min-width: 1512px
  position: relative

.about-me-20.about-me-19
  min-width: unset
  width: 1512px
</style>
