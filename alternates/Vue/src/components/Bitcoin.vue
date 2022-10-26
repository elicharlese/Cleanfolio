<template>
  <div :class="[`bitcoin-5`, className || ``]">
    <img class="bitcoin-6" :src="bitcoin1" alt="Bitcoin" />
    <div class="bitcoin-7 inter-bold-cape-cod-22px">Bitcoin</div>
  </div>
</template>

<script>
export default {
  name: "Bitcoin",
  props: ["bitcoin1", "className"],
};
</script>

<style lang="sass">
.bitcoin-5,
.bitcoin-5.bitcoin,
.bitcoin-5.bitcoin-12,
.bitcoin-5.bitcoin-15,
.bitcoin-5.bitcoin-18,
.bitcoin-5.bitcoin-20,
.bitcoin-5.bitcoin-21,
.bitcoin-5.bitcoin-22,
.bitcoin-5.bitcoin-23,
.bitcoin-5.bitcoin-24,
.bitcoin-5.bitcoin-25,
.bitcoin-5.bitcoin-26,
.bitcoin-5.bitcoin-3,
.bitcoin-5.bitcoin-8
  display: flex
  gap: 15.4px
  width: 160.86px

.bitcoin-6
  height: 45px
  margin-left: 0
  width: 53.35px

.bitcoin-7
  height: 27px
  letter-spacing: 0
  line-height: normal
  margin-top: 9px
  width: 90.1px

.bitcoin-5.bitcoin-11 .bitcoin-6,
.bitcoin-5.bitcoin-14 .bitcoin-6,
.bitcoin-5.bitcoin-8 .bitcoin-6,
.bitcoin-5.bitcoin-3 .bitcoin-6
  margin-left: unset
  width: 53.35px

.bitcoin-5.bitcoin-17 .bitcoin-6,
.bitcoin-5.bitcoin-12 .bitcoin-6
  width: 53.35px

.bitcoin-5.bitcoin-18 .bitcoin-6,
.bitcoin-5.bitcoin-20 .bitcoin-6,
.bitcoin-5.bitcoin-21 .bitcoin-6,
.bitcoin-5.bitcoin-22 .bitcoin-6,
.bitcoin-5.bitcoin-23 .bitcoin-6,
.bitcoin-5.bitcoin-24 .bitcoin-6,
.bitcoin-5.bitcoin-25 .bitcoin-6,
.bitcoin-5.bitcoin-26 .bitcoin-6,
.bitcoin-5.bitcoin .bitcoin-6
  width: 53.35px
</style>
