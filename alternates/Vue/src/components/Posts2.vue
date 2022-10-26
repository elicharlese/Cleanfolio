<template>
  <div :class="[`posts-4`, className || ``]">
    <recommendation1 :className="recommendation1Props.className" />
    <recommendation2 :article1="recommendation21Props.article1" :className="recommendation21Props.className" />
    <recommendation2 :article1="recommendation22Props.article1" :className="recommendation22Props.className" />
  </div>
</template>

<script>
import Recommendation1 from "./Recommendation1";
import Recommendation2 from "./Recommendation2";
export default {
  name: "Posts2",
  components: {
    Recommendation1,
    Recommendation2,
  },
  props: ["className", "recommendation1Props", "recommendation21Props", "recommendation22Props"],
};
</script>

<style lang="sass">
.posts-4
  align-items: center
  border: 1px none
  display: flex
  flex-direction: column
  gap: 96px
  height: 1374px
  margin-left: 27px
  position: relative
  width: 373px

.posts-4.posts-5
  justify-content: center
  margin-left: 198px

.posts-4.posts-6
  justify-content: center
  margin-left: 325px
</style>
