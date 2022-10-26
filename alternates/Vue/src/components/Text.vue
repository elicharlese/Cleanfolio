<template>
  <div :class="[`text-2`, className || ``]">
    <p class="got-a-question-fill-1 raleway-bold-cape-cod-36px">
      <span class="span-7 raleway-bold-cape-cod-36px">Got a question? Fill out the </span
      ><span class="span1-1 raleway-bold-cape-cod-36px">Query Form</span
      ><span class="span-7 raleway-bold-cape-cod-36px"> below.</span>
    </p>
    <p class="if-you-have-any-curi-1 valign-text-middle raleway-normal-cape-cod-22px">
      If you have any curiousities about a possible job, my qualifications or a general question, please fill out the
      form below. I will respond as soon as I can.
    </p>
  </div>
</template>

<script>
export default {
  name: "Text",
  props: ["className"],
};
</script>

<style lang="sass">
.text-2,
.text-2.text
  display: flex
  flex-direction: column
  gap: 35px
  height: 129px
  margin-left: 222px
  margin-top: 96px
  width: 1071px

.got-a-question-fill-1
  height: 42px
  letter-spacing: 0
  line-height: normal
  margin-left: 138px
  width: 792px

.span1-1
  text-decoration: underline

.if-you-have-any-curi-1
  height: 52px
  letter-spacing: 0
  line-height: normal
  text-align: center
  width: 1067px

.text-2.text-3,
.text-2.text-4
  margin-left: 187px
  margin-top: 97px

.text-2.text-1
  margin-left: unset
</style>
