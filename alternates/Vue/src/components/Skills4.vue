<template>
  <div :class="[`skills-2`, className || ``]"><languages-and-experience /></div>
</template>

<script>
import LanguagesAndExperience from "./LanguagesAndExperience";
export default {
  name: "Skills4",
  components: {
    LanguagesAndExperience,
  },
  props: ["className"],
};
</script>

<style lang="sass">
@import '../../variables'

.skills-2
  background-color: $material-themereferrorerror100
  border: 1px none
  display: flex
  height: 331px
  min-width: 1512px
  position: relative

.skills-2.skills
  min-width: unset
  width: 1512px

.skills-2.skills-1
  margin-left: 2px
  min-width: unset
  width: 1512px
</style>
