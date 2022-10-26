<template>
  <div class="recommended-material-8">
    <text2 :className="text2Props.className" />
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
  name: "RecommendedMaterial2",
  components: {
    Text2,
    Posts,
  },
  props: ["text2Props", "postsProps"],
};
</script>

<style lang="sass">
@import '../../variables'

.recommended-material-8,
.recommended-material-9
  background-color: $material-themereferrorerror100
  border: 1px none
  display: flex
  flex-direction: column
  gap: 108px
  height: 863px
  position: relative
  width: 1440px
</style>
