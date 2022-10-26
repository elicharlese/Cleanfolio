<template>
  <div class="avatars-10">
    <div class="overlap-group-86">
      <user7 :ellipse2="user71Props.ellipse2" />
      <user7 :ellipse2="user72Props.ellipse2" :className="user72Props.className" />
      <user7 :ellipse2="user73Props.ellipse2" :className="user73Props.className" />
      <user7 :ellipse2="user74Props.ellipse2" :className="user74Props.className" />
      <user7 :ellipse2="user75Props.ellipse2" :className="user75Props.className" />
      <user7 :ellipse2="user76Props.ellipse2" :className="user76Props.className" />
      <user7 :ellipse2="user77Props.ellipse2" :className="user77Props.className" />
      <img
        class="vector-11"
        src="https://anima-uploads.s3.amazonaws.com/projects/62fe76f7359e99eee487b330/releases/634b1e2b9caf1e7ca700d848/img/vector@1x.png"
        alt="Vector"
      />
    </div>
  </div>
</template>

<script>
import User7 from "./User7";
export default {
  name: "Avatars2",
  components: {
    User7,
  },
  props: ["user71Props", "user72Props", "user73Props", "user74Props", "user75Props", "user76Props", "user77Props"],
};
</script>

<style lang="sass">
.avatars-10,
.avatars-11
  align-items: flex-start
  display: flex
  min-width: 1512px

.overlap-group-86,
.overlap-group-87
  height: 700px
  position: relative
  width: 1512px

.vector-11,
.vector-12
  height: 500px
  left: 0
  position: absolute
  top: 200px
  width: 1512px
</style>
