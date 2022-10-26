<template>
  <div :class="[`recommendation-1-1`, className || ``]">
    <div class="overlap-group2-8">
      <div class="article-1-1 valign-text-middle raleway-bold-white-24px">Type-script version 1/4</div>
      <img
        class="line-1-1"
        src="https://anima-uploads.s3.amazonaws.com/projects/62fe76f7359e99eee487b330/releases/634ef8f1abca668fdefc42a0/img/line-1@2x.png"
        alt="Line 1"
      />
      <p class="lorem-ipsum-dolor-si-1 raleway-bold-white-22px">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis eu neque pharetra, gravida ac nisi enim.
        Imperdiet pulvinar vehicula a, urna accumsan sit duis. Sed ullamcorper nunc non enim pharetra maecenas velit ut
        purus. Aliquam ullamcorper.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Recommendation1",
  props: ["className"],
};
</script>

<style lang="sass">
.recommendation-1-1
  align-items: flex-start
  cursor: pointer
  display: flex
  height: 394px
  min-width: 377px
  transition: all 0.2s ease

.recommendation-1-1:hover
  transform: scale(1.1)

.overlap-group2-8
  align-items: center
  background: linear-gradient(180deg, rgb(125, 190, 227) 0%, rgb(36, 18, 106) 100%)
  border-radius: 16px
  display: flex
  flex-direction: column
  min-height: 394px
  padding: 27px 0
  width: 373px

.article-1-1
  height: 53px
  letter-spacing: 0
  line-height: normal
  text-align: center
  width: 267px

.line-1-1
  height: 4px
  margin-left: 1.09px
  margin-top: 13px
  width: 262px

.lorem-ipsum-dolor-si-1
  letter-spacing: 0
  line-height: normal
  margin-top: 18px
  min-height: 238px
  text-align: center
  width: 317px

.recommendation-1-1.recommendation-1-2,
.recommendation-1-1.recommendation-1-4,
.recommendation-1-1.recommendation-1-5
  align-items: unset
  cursor: unset
  display: unset
  margin-right: -4.00px
  transition: unset

.recommendation-1-1.recommendation-1-3,
.recommendation-1-1.recommendation-1
  cursor: unset
  transition: unset
</style>
