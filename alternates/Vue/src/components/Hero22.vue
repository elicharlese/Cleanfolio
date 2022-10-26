<template>
  <div class="hero">
    <div class="hero-i-container">
      <img
        class="hero-image"
        src="https://anima-uploads.s3.amazonaws.com/projects/62fe76f7359e99eee487b330/releases/634ef8f1abca668fdefc42a0/img/-hero-image@1x.png"
        alt="hero-image"
      />
      <hero-info
        :spanText1="heroInfoProps.spanText1"
        :spanText2="heroInfoProps.spanText2"
        :spanText3="heroInfoProps.spanText3"
        :name="heroInfoProps.name"
        :buttonProps="heroInfoProps.buttonProps"
      />
    </div>
  </div>
</template>

<script>
import HeroInfo from "./HeroInfo";
export default {
  name: "Hero22",
  components: {
    HeroInfo,
  },
  props: ["heroInfoProps"],
};
</script>

<style lang="sass">
@import '../../variables'

.hero,
.hero-1
  background-color: $material-themereferrorerror100
  border: 1px none
  height: 963px
  min-width: 1512px

.hero-i-container,
.hero-i-container-1
  height: 804px
  left: 79px
  position: relative
  top: 77px
  width: 1433px

.hero-image,
.hero-image-1
  height: 804px
  left: 214px
  position: absolute
  top: 0
  width: 1219px
</style>
