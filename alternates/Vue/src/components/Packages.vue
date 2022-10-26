<template>
  <div :class="[`packages`, className || ``]">
    <div class="overlap-group-68">
      <div class="packages-1 valign-text-middle raleway-normal-cape-cod-54px">{{ packages }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Packages",
  props: ["packages", "className"],
};
</script>

<style lang="sass">
@import '../../variables'

.packages
  align-items: flex-start
  display: flex
  height: 117.06px
  margin-left: 2px
  margin-top: 68px
  min-width: 1371px

.overlap-group-68
  align-items: flex-end
  background-color: $mexican-red-2
  border-radius: 16px
  display: flex
  height: 117px
  min-width: 1369px
  padding: 0 424.0px

.packages-1
  height: 106px
  letter-spacing: 0
  line-height: normal
  margin-bottom: -0.06px
  text-align: center
  width: 521px

.packages.read-me,
.packages.read-me-1,
.packages.read-me-2,
.packages.read-me-3,
.packages.read-me-4,
.packages.read-me-5,
.packages.read-me-6,
.packages.read-me-7,
.packages.read-me-8,
.packages.read-me-9,
.packages.read-me-10,
.packages.read-me-11
  margin-left: unset
  margin-top: 67.9px

.packages.faq,
.packages.faq-1,
.packages.faq-2,
.packages.faq-3,
.packages.faq-4,
.packages.faq-5,
.packages.faq-6,
.packages.faq-7,
.packages.faq-8,
.packages.faq-9,
.packages.faq-10,
.packages.faq-11
  margin-left: 4px
  margin-top: 67.9px

.packages.packages-2 .overlap-group-68,
.packages.read-me-1 .overlap-group-68,
.packages.faq-1 .overlap-group-68
  background-color: $mandy-2

.packages.packages-4 .overlap-group-68,
.packages.read-me-2 .overlap-group-68,
.packages.faq-2 .overlap-group-68
  background-color: $seagull-2

.packages.packages-6 .overlap-group-68,
.packages.read-me-3 .overlap-group-68,
.packages.faq-3 .overlap-group-68
  background-color: $anzac-2

.packages.packages-8 .overlap-group-68,
.packages.read-me-4 .overlap-group-68,
.packages.faq-4 .overlap-group-68
  background-color: $dairy-cream-2

.packages.packages-10 .overlap-group-68,
.packages.read-me-5 .overlap-group-68,
.packages.faq-5 .overlap-group-68
  background-color: $cararra-2

.packages.packages-12 .overlap-group-68,
.packages.read-me-6 .overlap-group-68,
.packages.faq-6 .overlap-group-68
  background-color: $fern-2

.packages.packages-14 .overlap-group-68,
.packages.read-me-7 .overlap-group-68,
.packages.faq-7 .overlap-group-68
  background-color: $yellow-sunshine-2

.packages.packages-16 .overlap-group-68,
.packages.read-me-8 .overlap-group-68,
.packages.faq-8 .overlap-group-68
  background-color: $portage-2

.packages.packages-18 .overlap-group-68,
.packages.read-me-9 .overlap-group-68,
.packages.faq-9 .overlap-group-68
  background-color: $purple-heart-3

.packages.packages-20 .overlap-group-68,
.packages.read-me-10 .overlap-group-68,
.packages.faq-10 .overlap-group-68
  background-color: $orchid-2

.packages.packages-22 .overlap-group-68,
.packages.read-me-11 .overlap-group-68,
.packages.faq-11 .overlap-group-68
  background-color: $turquoise-blue-2
</style>
