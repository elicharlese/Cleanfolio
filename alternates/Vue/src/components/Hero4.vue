<template>
  <div :class="[`hero-15-1`, className || ``]">
    <div class="overlap-group5-14">
      <img class="frame-13" :src="frame" alt="Frame" /><hero-info
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
  name: "Hero4",
  components: {
    HeroInfo,
  },
  props: ["frame", "className", "heroInfoProps"],
};
</script>

<style lang="sass">
@import '../../variables'

.hero-15-1
  align-items: flex-start
  background-color: $material-themereferrorerror100
  border: 1px none
  display: flex
  padding: 0 79px
  width: 1512px

.overlap-group5-14
  height: 963px
  position: relative
  width: 1287px

.frame-13
  height: 963px
  left: 216px
  position: absolute
  top: 0
  width: 1071px

.hero-15-1.hero-15 .overlap-group5-14
  width: 1289px

.hero-15-1.hero-15 .frame-13
  width: 1073px
</style>
