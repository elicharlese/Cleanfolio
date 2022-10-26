<template>
  <div class="classroom-containers-1">
    <div class="t-div-1">
      <salesforce />
      <gis />
      <div class="overlap-group-105">
        <img class="rest-api" :src="restApi" alt="Rest API" />
        <div class="flex-col-23">
          <div class="api-development-1 valign-text-middle raleway-bold-white-36px">{{ apiDevelopment }}</div>
          <p class="work-with-apex-and-b-7 valign-text-middle raleway-bold-white-16px">{{ workWithApexAndB1 }}</p>
        </div>
      </div>
    </div>
    <div class="t-div-1">
      <python :python="pythonProps.python" :pythonDevelopment="pythonProps.pythonDevelopment" />
      <div class="overlap-group1-30">
        <img class="amazon-web-services" :src="amazonWebServices" alt="Amazon Web Services" />
        <div class="flex-col-24">
          <div class="cloud-development-8 valign-text-middle raleway-bold-white-36px">{{ cloudDevelopment }}</div>
          <p class="work-with-apex-and-b-7 valign-text-middle raleway-bold-white-16px">{{ workWithApexAndB2 }}</p>
        </div>
      </div>
      <div class="overlap-group-106">
        <img class="decentralized-network-1" :src="decentralizedNetwork" alt="Decentralized Network" />
        <div class="flex-col-25">
          <div class="web-30-development-1 valign-text-middle raleway-bold-white-36px">{{ web30Development }}</div>
          <p class="work-with-apex-and-b-7 valign-text-middle raleway-bold-white-16px">{{ workWithApexAndB3 }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Salesforce from "./Salesforce";
import Gis from "./Gis";
import Python from "./Python";
export default {
  name: "ClassroomContainers2",
  components: {
    Salesforce,
    Gis,
    Python,
  },
  props: [
    "restApi",
    "apiDevelopment",
    "workWithApexAndB1",
    "amazonWebServices",
    "cloudDevelopment",
    "workWithApexAndB2",
    "decentralizedNetwork",
    "web30Development",
    "workWithApexAndB3",
    "pythonProps",
  ],
};
</script>

<style lang="sass">
.classroom-containers-1
  align-items: flex-start
  align-self: flex-start
  border: 1px none
  display: flex
  gap: 69px
  height: 610px
  margin-top: 60px
  min-width: 1389px

.t-div-1
  align-items: flex-start
  display: flex
  flex-direction: column
  gap: 65px
  min-height: 610px
  position: relative
  width: 660px

.overlap-group-105
  align-items: flex-start
  background: linear-gradient(180deg, rgb(125, 190, 227) 0%, rgb(36, 18, 106) 100%)
  border-radius: 16px
  display: flex
  gap: 29px
  height: 160px
  justify-content: flex-end
  min-width: 660px
  padding: 31.4px 21px

.rest-api,
.amazon-web-services,
.decentralized-network-1
  height: 96px
  width: 96px

.flex-col-23
  align-items: flex-start
  align-self: center
  display: flex
  flex-direction: column
  gap: 12px
  margin-top: 4.09px
  min-height: 73px
  width: 480px

.api-development-1
  height: 42px
  letter-spacing: 0
  line-height: normal
  margin-left: 29px
  min-width: 300px
  text-align: center

.work-with-apex-and-b-7
  height: 19px
  letter-spacing: 0
  line-height: normal
  min-width: 480px
  text-align: center

.overlap-group1-30
  align-items: flex-start
  background: linear-gradient(180deg, rgb(125, 190, 227) 0%, rgb(36, 18, 106) 100%)
  border-radius: 16px
  display: flex
  gap: 22px
  height: 160px
  justify-content: flex-end
  min-width: 660px
  padding: 31.8px 21px

.flex-col-24
  align-items: flex-start
  align-self: center
  display: flex
  flex-direction: column
  gap: 11px
  margin-top: 3.58px
  min-height: 72px
  width: 480px

.cloud-development-8
  height: 42px
  letter-spacing: 0
  line-height: normal
  margin-left: 31px
  min-width: 347px
  text-align: center

.overlap-group-106
  align-items: flex-start
  background: linear-gradient(180deg, rgb(125, 190, 227) 0%, rgb(36, 18, 106) 100%)
  border-radius: 16px
  display: flex
  gap: 22px
  height: 160px
  justify-content: flex-end
  min-width: 660px
  padding: 23.5px 21px

.flex-col-25
  align-items: center
  align-self: center
  display: flex
  flex-direction: column
  gap: 12px
  margin-top: 4.11px
  min-height: 73px
  width: 480px

.web-30-development-1
  height: 42px
  letter-spacing: 0
  line-height: normal
  margin-right: 36.0px
  min-width: 382px
  text-align: center
</style>
