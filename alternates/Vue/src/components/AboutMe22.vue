<template>
  <div :class="[`about-me-2`, className || ``]">
    <img
      class="globe-1"
      src="https://anima-uploads.s3.amazonaws.com/projects/62fe76f7359e99eee487b330/releases/634ef8f1abca668fdefc42a0/img/globe@2x.png"
      alt="Globe"
    />
    <div class="well-rounded-and-highly-grounded-1 valign-text-middle raleway-bold-cape-cod-32px">
      Well-Rounded and Highly-Grounded
    </div>
    <p class="a-self-taught-web-de-1 valign-text-middle raleway-normal-cape-cod-22px">
      A self-taught web developer with a passion for e-commerce and blockchain applications. I have a background in
      Geographic Information Systems, ESRI products and Databases. I have a strong interest in the blockchain space and
      am currently working on developing a blockchain based e-commerce platform which relies of AWS infrastructures.
      <br />
      <br />I just completed my undergrad at the University of California, Santa Barbara and plan on persuing a
      certification as a Salesforce Developer and Administrator, with future plans for a Master’s degree in Business
      (emphasizing in Location Analysis).
    </p>
  </div>
</template>

<script>
export default {
  name: "AboutMe22",
  props: ["className"],
};
</script>

<style lang="sass">
.about-me-2,
.about-me-2.about-me-1
  display: flex
  flex-direction: column
  height: 386.71px
  margin-left: 160px
  margin-top: 18px
  width: 1195px

.globe-1
  height: 49px
  margin-left: 572px
  width: 48px

.well-rounded-and-highly-grounded-1
  height: 54.01px
  letter-spacing: 0
  line-height: normal
  margin-left: 310px
  margin-top: 33px
  text-align: center
  width: 572.17px

.a-self-taught-web-de-1
  height: 221.71px
  letter-spacing: 0
  line-height: normal
  margin-top: 29.0px
  text-align: center
  width: 1191px

.about-me-2.about-me-3,
.about-me-2.about-me-4
  margin-left: 125px
  margin-top: 25px
</style>
