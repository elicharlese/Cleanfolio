<template>
  <div :class="[`snippets-10`, className || ``]">
    <div class="overlap-group-41">
      <div class="snippet-of-the-day-12 valign-text-middle raleway-bold-white-36px">Snippet of the Day</div>
      <div class="flex-row-21">
        <div class="subscribe-to-get-access-12 valign-text-middle raleway-bold-white-20px">Subscribe to get access</div>
        <div class="rectangle-6-8"></div>
        <div class="rectangle-7-9"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Snippets",
  props: ["className"],
};
</script>

<style lang="sass">
@import '../../variables'

.snippets-10
  align-items: flex-start
  display: flex
  height: 164px
  margin-left: 52px
  margin-top: 52px
  min-width: 667px

.overlap-group-41
  align-items: flex-start
  background-color: $seagull
  border-radius: 16px
  display: flex
  flex-direction: column
  gap: 21px
  min-height: 164px
  padding: 19px 14px
  width: 663px

.snippet-of-the-day-12
  align-self: center
  height: 51px
  letter-spacing: 0
  line-height: normal
  margin-left: 1.54px
  text-align: center
  width: 367px

.flex-row-21
  align-items: flex-end
  display: flex
  gap: 18px
  min-width: 620px

.subscribe-to-get-access-12
  align-self: flex-start
  height: 49px
  letter-spacing: 0
  line-height: normal
  text-align: center
  width: 167px

.rectangle-6-8
  background-color: $material-themereferrorerror100
  border: 1px none
  border-radius: 16px
  height: 33px
  width: 316px

.rectangle-7-9
  background-color: $white
  border: 1px none
  border-radius: 16px
  height: 33px
  width: 101px

.snippets-10.snippets-11
  margin-left: 179px
  margin-top: unset
</style>
