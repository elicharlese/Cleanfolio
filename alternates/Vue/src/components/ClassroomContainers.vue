<template>
  <div class="classroom-containers">
    <div class="t-div">
      <salesforce />
      <gis />
      <div class="api-integrations-8">
        <div class="overlap-group-61">
          <img class="icon-settings" :src="iconSettings" alt="icon-settings" />
          <div class="flex-col-2">
            <div class="api-development valign-text-middle raleway-bold-white-36px">{{ apiDevelopment }}</div>
            <p class="work-with-apex-and-b valign-text-middle raleway-bold-white-16px">{{ workWithApexAndB1 }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="t-div">
      <python :python="python1Props.python" :pythonDevelopment="python1Props.pythonDevelopment" />
      <python
        :python="python2Props.python"
        :pythonDevelopment="python2Props.pythonDevelopment"
        :className="python2Props.className"
      />
      <div class="web30">
        <div class="overlap-group-62">
          <img class="decentralized-network" :src="decentralizedNetwork" alt="Decentralized Network" />
          <div class="flex-col-3">
            <div class="web-30-development valign-text-middle raleway-bold-white-36px">{{ web30Development }}</div>
            <p class="work-with-apex-and-b valign-text-middle raleway-bold-white-16px">{{ workWithApexAndB2 }}</p>
          </div>
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
  name: "ClassroomContainers",
  components: {
    Salesforce,
    Gis,
    Python,
  },
  props: [
    "iconSettings",
    "apiDevelopment",
    "workWithApexAndB1",
    "decentralizedNetwork",
    "web30Development",
    "workWithApexAndB2",
    "python1Props",
    "python2Props",
  ],
};
</script>

<style lang="sass">
.classroom-containers
  align-items: flex-start
  border: 1px none
  display: flex
  gap: 69px
  height: 610.42px
  margin-left: 61px
  margin-top: 74px
  min-width: 1389px

.t-div
  align-items: flex-start
  display: flex
  flex-direction: column
  gap: 65px
  min-height: 610px
  position: relative
  width: 660px

.api-integrations-8,
.web30
  align-items: flex-start
  cursor: pointer
  display: flex
  min-width: 664px
  transition: all 0.2s ease

.api-integrations-8:hover,
.web30:hover
  transform: scale(1.1)

.overlap-group-61
  align-items: flex-start
  background: linear-gradient(180deg, rgb(125, 190, 227) 0%, rgb(36, 18, 106) 100%)
  border-radius: 16px
  display: flex
  gap: 29px
  height: 160px
  justify-content: flex-end
  min-width: 660px
  padding: 31.4px 21px

.icon-settings,
.decentralized-network
  height: 96px
  width: 96px

.flex-col-2
  align-items: flex-start
  align-self: center
  display: flex
  flex-direction: column
  gap: 12px
  margin-top: 4.09px
  min-height: 73px
  width: 480px

.api-development
  height: 42px
  letter-spacing: 0
  line-height: normal
  margin-left: 29px
  min-width: 300px
  text-align: center

.work-with-apex-and-b
  height: 19px
  letter-spacing: 0
  line-height: normal
  min-width: 480px
  text-align: center

.overlap-group-62
  align-items: flex-start
  background: linear-gradient(180deg, rgb(125, 190, 227) 0%, rgb(36, 18, 106) 100%)
  border-radius: 16px
  display: flex
  gap: 22px
  height: 160px
  justify-content: flex-end
  min-width: 660px
  padding: 23.5px 21px

.flex-col-3
  align-items: center
  align-self: center
  display: flex
  flex-direction: column
  gap: 12px
  margin-top: 4.11px
  min-height: 73px
  width: 480px

.web-30-development
  height: 42px
  letter-spacing: 0
  line-height: normal
  margin-right: 36.0px
  min-width: 382px
  text-align: center
</style>
