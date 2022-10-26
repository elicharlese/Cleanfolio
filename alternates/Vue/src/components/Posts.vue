<template>
  <div :class="[`posts-1`, className || ``]">
    <recommendation1 :className="recommendation1Props.className" />
    <recommendation2 :article1="recommendation21Props.article1" />
    <recommendation2 :article1="recommendation22Props.article1" :className="recommendation22Props.className" />
  </div>
</template>

<script>
import Recommendation1 from "./Recommendation1";
import Recommendation2 from "./Recommendation2";
export default {
  name: "Posts",
  components: {
    Recommendation1,
    Recommendation2,
  },
  props: ["className", "recommendation1Props", "recommendation21Props", "recommendation22Props"],
};
</script>

<style lang="sass">
.posts-1,
.posts-1.posts
  display: flex
  gap: 92px
  height: 394px
  margin-left: 100px
  position: relative
  width: 1311px

.posts-1.posts-2,
.posts-1.posts-3
  margin-left: 65px
</style>
