<template>
  <div :class="[`t-div-item-1`, className || ``]">
    <div class="overlap-group2-20">
      <img class="python-8" :src="python" alt="Python" />
      <div class="flex-col-8">
        <div class="python-development valign-text-middle raleway-bold-white-36px">{{ pythonDevelopment }}</div>
        <p class="work-with-apex-and-b-5 valign-text-middle raleway-bold-white-16px">
          Work with APEX and build custom Lightning Web Components.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Python",
  props: ["python", "pythonDevelopment", "className"],
};
</script>

<style lang="sass">
.t-div-item-1
  align-items: flex-start
  cursor: pointer
  display: flex
  min-width: 664px
  transition: all 0.2s ease

.t-div-item-1:hover
  transform: scale(1.1)

.overlap-group2-20
  align-items: center
  background: linear-gradient(180deg, rgb(125, 190, 227) 0%, rgb(36, 18, 106) 100%)
  border-radius: 16px
  display: flex
  gap: 22px
  height: 160px
  justify-content: flex-end
  min-width: 660px
  padding: 31.9px 21px

.python-8
  align-self: flex-end
  height: 96px
  width: 96px

.flex-col-8
  align-items: center
  display: flex
  flex-direction: column
  gap: 11px
  margin-top: 4.06px
  min-height: 72px
  width: 480px

.python-development
  height: 42px
  letter-spacing: 0
  line-height: normal
  margin-right: 53.0px
  min-width: 365px
  text-align: center

.work-with-apex-and-b-5
  height: 19px
  letter-spacing: 0
  line-height: normal
  min-width: 480px
  text-align: center

.t-div-item-1.t-div-item .overlap-group2-20
  align-items: flex-start
  padding: 31.8px 21px

.t-div-item-1.t-div-item .python-8
  align-self: unset

.t-div-item-1.t-div-item .flex-col-8
  align-items: flex-start
  align-self: center
  margin-top: 3.58px

.t-div-item-1.t-div-item .python-development
  margin-left: 31px
  margin-right: unset
  min-width: 347px
</style>
