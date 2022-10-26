<template>
  <div :class="[`snippets-17-1`, className || ``]">
    <div class="overlap-group4-7">
      <div class="overlap-group2-17">
        <div class="subscribe-to-get-access-17 valign-text-middle raleway-bold-white-20px">Subscribe to get access</div>
        <div class="overlap-group-53">
          <div class="enter-your-email-7 valign-text-middle raleway-bold-seagull-20px">Enter your email</div>
        </div>
        <div class="overlap-group1-19">
          <div class="submit-7 valign-text-middle raleway-bold-white-20px">Submit</div>
        </div>
      </div>
      <div class="overlap-group3-9">
        <p class="function-snippets-7 raleway-bold-white-16px">
          function snippets() =&gt; {<br />Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />Est senectus
          placerat est sem malesuada interdum.&nbsp;&nbsp;Morbi at aliquam ac nunc adipiscing ut.<br />}
        </p>
      </div>
      <div class="snippet-of-the-day-17 valign-text-middle raleway-bold-white-36px">Snippet of the Day</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Snippets2",
  props: ["className"],
};
</script>

<style lang="sass">
@import '../../variables'

.snippets-17-1
  align-items: flex-start
  display: flex
  margin-left: 129px
  min-width: 1255px

.overlap-group4-7
  border-radius: 16px
  height: 371px
  position: relative
  width: 1253px

.overlap-group2-17
  align-items: flex-end
  background-color: $seagull
  border-radius: 16px
  display: flex
  height: 371px
  justify-content: flex-end
  left: 0
  min-width: 1253px
  padding: 42.8px 54.6px
  position: absolute
  top: 0

.subscribe-to-get-access-17
  height: 31px
  letter-spacing: 0
  line-height: normal
  margin-bottom: 12.14px
  text-align: center
  width: 296px

.overlap-group-53
  align-items: flex-start
  background-color: $material-themereferrorerror100
  border-radius: 16px
  display: flex
  height: 57px
  margin-left: 71px
  min-width: 559px
  padding: 12.4px 35.6px

.enter-your-email-7
  height: 31px
  letter-spacing: 0
  line-height: normal
  width: 296px

.overlap-group1-19
  align-items: flex-end
  background-color: $white
  border-radius: 16px
  display: flex
  height: 57px
  justify-content: flex-end
  margin-left: 38px
  min-width: 179px
  padding: 6.2px 23.4px

.submit-7
  height: 44px
  letter-spacing: 0
  line-height: normal
  text-align: center
  width: 132px

.overlap-group3-9
  align-items: flex-end
  background-color: $white
  border-radius: 16px
  display: flex
  height: 124px
  left: 84px
  min-width: 1102px
  padding: 12.8px 27.3px
  position: absolute
  top: 120px

.function-snippets-7
  letter-spacing: 0
  line-height: normal
  min-height: 97px
  width: 1046px

.snippet-of-the-day-17
  height: 51px
  left: 444px
  letter-spacing: 0
  line-height: normal
  position: absolute
  text-align: center
  top: 35px
  width: 367px

.snippets-17-1.snippets-18
  margin-left: 95px
</style>
