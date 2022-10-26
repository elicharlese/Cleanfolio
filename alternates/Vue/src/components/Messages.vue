<template>
  <div class="container-item-1">
    <div class="frame-1-1">
      <img class="envelope" :src="envelope" alt="Envelope" />
      <div class="messages poppins-regular-normal-white-12px">
        <span class="poppins-regular-normal-white-12px">{{ spanText }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Messages",
  props: ["envelope", "spanText"],
};
</script>

<style lang="sass">
.container-item-1
  align-items: center
  border: 1px none
  border-radius: 7px
  display: flex
  height: 44px
  min-width: 158px
  padding: 0 20px

.frame-1-1
  align-items: center
  border: 1px none
  display: flex
  gap: 16px
  min-width: 101px

.envelope,
.circles-four
  height: 24px
  width: 24px

.messages,
.toolboxes
  letter-spacing: 0
  line-height: normal
  margin-bottom: 2.0px
  min-height: 18px
  min-width: 61px
</style>
