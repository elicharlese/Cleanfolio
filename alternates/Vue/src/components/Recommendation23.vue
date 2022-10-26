<template>
  <div :class="[`recommendation-9-1`, className || ``]">
    <img
      class="line-1-27"
      src="https://anima-uploads.s3.amazonaws.com/projects/62fe76f7359e99eee487b330/releases/634ef8f1abca668fdefc42a0/img/line-1-21@2x.png"
      alt="Line 1"
    />
    <div class="overlap-group1-21">
      <div class="article-1-15 raleway-bold-white-36px">{{ article1 }}</div>
      <p class="lorem-ipsum-dolor-si-15 raleway-bold-white-22px">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis eu neque pharetra, gravida ac nisi enim.
        Imperdiet pulvinar vehicula a, urna accumsan sit duis. Sed ullamcorper nunc non enim pharetra maecenas velit ut
        purus. Aliquam ullamcorper.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Recommendation23",
  props: ["article1", "className"],
};
</script>

<style lang="sass">
.recommendation-9-1
  align-items: flex-start
  display: flex
  gap: 19083px
  height: 394px
  min-width: 377px

.line-1-27
  height: 1px
  margin-left: -19345px
  margin-top: -3994px
  width: 262px

.overlap-group1-21
  align-items: center
  background: linear-gradient(180deg, rgb(125, 190, 227) 0%, rgb(36, 18, 106) 100%)
  border-radius: 16px
  display: flex
  flex-direction: column
  gap: 40px
  min-height: 394px
  padding: 33px 0
  width: 373px

.article-1-15
  letter-spacing: 0
  line-height: normal
  margin-left: 3.0px
  min-height: 42px
  min-width: 170px

.lorem-ipsum-dolor-si-15
  letter-spacing: 0
  line-height: normal
  min-height: 238px
  text-align: center
  width: 317px

.recommendation-9-1.recommendation-9 .overlap-group1-21
  background: linear-gradient(180deg, rgb(125, 190, 227) 0%, rgb(36, 18, 106) 100%, rgb(36, 18, 106) 100%)
</style>
