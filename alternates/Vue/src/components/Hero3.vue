<template>
  <div class="hero-14">
    <div class="overlap-group5-13">
      <img class="frame-12" :src="frame" alt="Frame" /><hero-info
        :spanText1="heroInfoProps.spanText1"
        :spanText2="heroInfoProps.spanText2"
        :spanText3="heroInfoProps.spanText3"
        :name="heroInfoProps.name"
        :className="heroInfoProps.className"
        :buttonProps="heroInfoProps.buttonProps"
      />
    </div>
  </div>
</template>

<script>
import HeroInfo from "./HeroInfo";
export default {
  name: "Hero3",
  components: {
    HeroInfo,
  },
  props: ["frame", "heroInfoProps"],
};
</script>

<style lang="sass">
@import '../../variables'

.hero-14
  align-items: flex-start
  background-color: $material-themereferrorerror100
  border: 1px none
  display: flex
  padding: 0 79px
  width: 1512px

.overlap-group5-13
  height: 963px
  position: relative
  width: 945px

.frame-12
  height: 963px
  left: 216px
  position: absolute
  top: 0
  width: 729px
</style>
