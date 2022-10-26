<template>
  <div class="frame-15">
    <img class="group-2" :src="group2" alt="Group 2" />
    <div class="place-45 poppins-regular-normal-white-12px">
      <span class="poppins-regular-normal-white-12px">{{ spanText }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Frame12",
  props: ["group2", "spanText"],
};
</script>

<style lang="sass">
.frame-15
  align-items: center
  border: 1px none
  display: flex
  gap: 16px
  min-width: 76px

.group-2,
.cloud-check
  height: 24px
  width: 24px

.place-45
  letter-spacing: 0
  line-height: normal
  margin-bottom: 2.0px
  min-height: 18px
  min-width: 36px
</style>
