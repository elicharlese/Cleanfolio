<template>
  <div class="avatars">
    <div class="overlap-group-69">
      <img
        class="vector-1"
        src="https://anima-uploads.s3.amazonaws.com/projects/62fe76f7359e99eee487b330/releases/634b1e2b9caf1e7ca700d848/img/vector-1@1x.svg"
        alt="Vector"
      />
      <user7 :ellipse2="user71Props.ellipse2" />
      <user7 :ellipse2="user72Props.ellipse2" :className="user72Props.className" />
      <user7 :ellipse2="user73Props.ellipse2" :className="user73Props.className" />
      <user7 :ellipse2="user74Props.ellipse2" :className="user74Props.className" />
      <user7 :ellipse2="user75Props.ellipse2" :className="user75Props.className" />
      <user7 :ellipse2="user76Props.ellipse2" :className="user76Props.className" />
      <user7 :ellipse2="user77Props.ellipse2" :className="user77Props.className" />
    </div>
  </div>
</template>

<script>
import User7 from "./User7";
export default {
  name: "Avatars",
  components: {
    User7,
  },
  props: ["user71Props", "user72Props", "user73Props", "user74Props", "user75Props", "user76Props", "user77Props"],
};
</script>

<style lang="sass">
.avatars,
.avatars-1,
.avatars-2,
.avatars-3,
.avatars-4,
.avatars-5,
.avatars-6,
.avatars-7,
.avatars-8
  align-items: flex-start
  display: flex
  min-width: 1512px

.overlap-group-69,
.overlap-group-70,
.overlap-group-71,
.overlap-group-72,
.overlap-group-73,
.overlap-group-74,
.overlap-group-75,
.overlap-group-76,
.overlap-group-77
  height: 700px
  position: relative
  width: 1512px

.vector-1,
.vector-2,
.vector-3,
.vector-4,
.vector-5,
.vector-6,
.vector-7,
.vector-8,
.vector-9
  height: 500px
  left: 0
  position: absolute
  top: 200px
  width: 1512px
</style>
