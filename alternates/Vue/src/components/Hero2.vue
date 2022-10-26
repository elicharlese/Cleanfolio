<template>
  <div class="hero-3">
    <div class="hero-i-container-2">
      <img
        class="hero-image-2"
        src="https://anima-uploads.s3.amazonaws.com/projects/62fe76f7359e99eee487b330/releases/634ef8f1abca668fdefc42a0/img/-hero-image-2@1x.png"
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
  name: "Hero2",
  components: {
    HeroInfo,
  },
  props: ["heroInfoProps"],
};
</script>

<style lang="sass">
@import '../../variables'

.hero-3,
.hero-4
  align-items: flex-start
  background-color: $material-themereferrorerror100
  border: 1px none
  display: flex
  height: 963px
  padding: 77.5px 0
  width: 1440px

.hero-i-container-2,
.hero-i-container-3
  height: 804px
  margin-left: 79px
  position: relative
  width: 1361px

.hero-image-2,
.hero-image-3
  height: 804px
  left: 214px
  position: absolute
  top: 0
  width: 1147px
</style>
