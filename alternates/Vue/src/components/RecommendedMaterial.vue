<template>
  <div :class="[`recommended-material-1`, className || ``]">
    <text2 />
    <posts
      :className="postsProps.className"
      :recommendation1Props="postsProps.recommendation1Props"
      :recommendation21Props="postsProps.recommendation21Props"
      :recommendation22Props="postsProps.recommendation22Props"
    />
  </div>
</template>

<script>
import Text2 from "./Text2";
import Posts from "./Posts";
export default {
  name: "RecommendedMaterial",
  components: {
    Text2,
    Posts,
  },
  props: ["className", "postsProps"],
};
</script>

<style lang="sass">
@import '../../variables'

.recommended-material-1
  background-color: $material-themereferrorerror100
  border: 1px none
  display: flex
  flex-direction: column
  gap: 114px
  height: 863px
  min-width: 1512px
  position: relative

.recommended-material-1.recommended-material
  min-width: unset
  width: 1512px
</style>
