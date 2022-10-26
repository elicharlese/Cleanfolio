<template>
  <div :class="[`step-4`, className || ``]">
    <img class="source-code" :src="sourceCode" alt="Source Code" />
    <p class="get-paid-to-be-a-developer valign-text-middle raleway-normal-cape-cod-26px">
      {{ getPaidToBeADeveloper }}
    </p>
  </div>
</template>

<script>
export default {
  name: "Step4",
  props: ["sourceCode", "getPaidToBeADeveloper", "className"],
};
</script>

<style lang="sass">
.step-4
  display: flex
  flex-direction: column
  gap: 10.7px
  height: 245px
  left: 1006px
  position: absolute
  top: 604px
  width: 247px

.source-code
  height: 178.83px
  margin-left: 44.7px
  width: 154.09px

.get-paid-to-be-a-developer
  height: 55.44px
  letter-spacing: 0
  line-height: normal
  text-align: center
  width: 245px

.step-4.step-3
  left: 0
  top: 454px

.step-4.step-3 .get-paid-to-be-a-developer
  margin-left: 0

.step-4.step-2
  top: 89px

.step-4.step-1
  left: 0
  top: 0
</style>
