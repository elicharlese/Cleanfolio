<template>
  <div :class="[`recommendation-2-1`, className || ``]">
    <div class="overlap-group1-5">
      <div class="article-1-6 raleway-bold-white-36px">{{ article1 }}</div>
      <img
        class="line-1-6"
        src="https://anima-uploads.s3.amazonaws.com/projects/62fe76f7359e99eee487b330/releases/634ef8f1abca668fdefc42a0/img/line-1@2x.png"
        alt="Line 1"
      />
      <p class="lorem-ipsum-dolor-si-6 raleway-bold-white-22px">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis eu neque pharetra, gravida ac nisi enim.
        Imperdiet pulvinar vehicula a, urna accumsan sit duis. Sed ullamcorper nunc non enim pharetra maecenas velit ut
        purus. Aliquam ullamcorper.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Recommendation2",
  props: ["article1", "className"],
};
</script>

<style lang="sass">
.recommendation-2-1,
.recommendation-2-1.recommendation,
.recommendation-2-1.recommendation-2,
.recommendation-2-1.recommendation-2-2,
.recommendation-2-1.recommendation-2-3,
.recommendation-2-1.recommendation-2-4,
.recommendation-2-1.recommendation-2-5,
.recommendation-2-1.recommendation-2-6,
.recommendation-2-1.recommendation-2-7
  align-items: flex-start
  display: flex
  height: 394px
  min-width: 377px

.overlap-group1-5
  align-items: center
  background: linear-gradient(180deg, rgb(125, 190, 227) 0%, rgb(36, 18, 106) 100%)
  border-radius: 16px
  display: flex
  flex-direction: column
  gap: 18px
  min-height: 394px
  padding: 33px 0
  width: 373px

.article-1-6
  letter-spacing: 0
  line-height: normal
  margin-left: 3.0px
  min-height: 42px
  min-width: 170px

.line-1-6
  height: 4px
  margin-left: 1.09px
  width: 262px

.lorem-ipsum-dolor-si-6
  letter-spacing: 0
  line-height: normal
  min-height: 238px
  text-align: center
  width: 317px

.recommendation-2-1.recommendation-3-1,
.recommendation-2-1.recommendation-3-2
  cursor: pointer
  transition: all 0.2s ease

.recommendation-2-1.recommendation-3-1:hover,
.recommendation-2-1.recommendation-3-2:hover
  transform: scale(1.1)

.recommendation-2-1.recommendation-3-1 .overlap-group1-5,
.recommendation-2-1.recommendation-3 .overlap-group1-5,
.recommendation-2-1.recommendation .overlap-group1-5,
.recommendation-2-1.recommendation-4 .overlap-group1-5,
.recommendation-2-1.recommendation-5 .overlap-group1-5,
.recommendation-2-1.recommendation-3-2 .overlap-group1-5,
.recommendation-2-1.recommendation-2-3 .overlap-group1-5,
.recommendation-2-1.recommendation-2-4 .overlap-group1-5,
.recommendation-2-1.recommendation-2-5 .overlap-group1-5,
.recommendation-2-1.recommendation-2-6 .overlap-group1-5,
.recommendation-2-1.recommendation-2-7 .overlap-group1-5,
.recommendation-2-1.recommendation-2 .overlap-group1-5
  background: linear-gradient(180deg, rgb(125, 190, 227) 0%, rgb(36, 18, 106) 100%, rgb(36, 18, 106) 100%)

.recommendation-2-1.recommendation-3,
.recommendation-2-1.recommendation-3-3,
.recommendation-2-1.recommendation-4,
.recommendation-2-1.recommendation-4-1,
.recommendation-2-1.recommendation-5,
.recommendation-2-1.recommendation-5-1
  align-items: unset
  display: unset
  margin-right: -4.00px
</style>
