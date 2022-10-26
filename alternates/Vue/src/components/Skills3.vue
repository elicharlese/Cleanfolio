<template>
  <div :class="[`skills-7`, className || ``]">
    <div class="languages-and-experience-6 raleway-bold-cape-cod-16px">
      <div class="text-carousel-6">
        <div class="html-6 valign-text-middle">HTML</div>
        <div class="css-23 valign-text-middle">CSS</div>
        <div class="java-script-6 valign-text-middle">JavaScript</div>
        <div class="react-19 valign-text-middle">React</div>
        <div class="python-6 valign-text-middle">Python</div>
        <div class="text-carousel-item-14 valign-text-middle">SQL</div>
        <div class="c-46 valign-text-middle">C++</div>
        <div class="c-47 valign-text-middle">C#</div>
        <div class="java-21 valign-text-middle">Java</div>
        <div class="swift-19 valign-text-middle">Swift</div>
        <div class="text-carousel-item-14 valign-text-middle">PHP</div>
        <div class="type-script-6 valign-text-middle">TypeScript</div>
        <div class="name-27 valign-text-middle">Ruby</div>
        <div class="go-23 valign-text-middle">Go</div>
        <div class="place-40 valign-text-middle">Kotlin</div>
        <div class="place-41 valign-text-middle">Rust</div>
      </div>
      <div class="experiences-6">
        <div class="web-e-commerce-development-6 valign-text-middle">Web &amp; E-commerce Development</div>
        <div class="project-management-6 valign-text-middle">Project Management</div>
        <div class="salesforce-6 valign-text-middle">Salesforce</div>
        <div class="full-stack-6 valign-text-middle">Full-Stack</div>
        <div class="gis-23 valign-text-middle">GIS</div>
        <div class="blockchain-19 valign-text-middle">Blockchain</div>
        <div class="python-scripting-6 valign-text-middle">Python &amp; Scripting</div>
        <div class="api-integrations-6 valign-text-middle">API &amp; Integrations</div>
        <div class="cloud-development-6 valign-text-middle">Cloud Development</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Skills3",
  props: ["className"],
};
</script>

<style lang="sass">
@import '../../variables'

.skills-7
  background-color: $material-themereferrorerror100
  border: 1px none
  display: flex
  height: 315px
  margin-left: -1px
  width: 769px

.languages-and-experience-6
  display: flex
  flex-direction: column
  gap: 36px
  height: 188px
  margin-top: 72px
  width: 769px

.text-carousel-6
  align-items: center
  border: 1px none
  display: flex
  gap: 20px
  height: 76px
  justify-content: center
  margin-left: 25.9px
  width: 717.15px

.html-6
  height: 108.17px
  letter-spacing: 0
  line-height: normal
  margin-bottom: -15.09px
  margin-left: -322.32px
  margin-top: -17.09px
  text-align: center
  width: 92.93px

.css-23
  height: 108.17px
  letter-spacing: 0
  line-height: normal
  margin-bottom: -15.09px
  margin-left: -209.39px
  margin-top: -17.09px
  text-align: center
  width: 56.28px

.java-script-6
  height: 108.17px
  letter-spacing: 0
  line-height: normal
  margin-bottom: -15.09px
  margin-left: -133.11px
  margin-top: -17.09px
  text-align: center
  width: 128.26px

.react-19
  height: 109.54px
  letter-spacing: 0
  line-height: normal
  margin-bottom: -15.77px
  margin-top: -17.77px
  text-align: center
  width: 69.44px

.python-6
  height: 109.54px
  letter-spacing: 0
  line-height: normal
  margin-bottom: -15.77px
  margin-top: -17.77px
  text-align: center
  width: 83.74px

.text-carousel-item-14
  height: 109.54px
  letter-spacing: 0
  line-height: normal
  margin-bottom: -15.77px
  margin-top: -17.77px
  text-align: center
  width: 49.02px

.c-46
  height: 109.54px
  letter-spacing: 0
  line-height: normal
  margin-bottom: -15.77px
  margin-top: -17.77px
  text-align: center
  width: 38.81px

.c-47
  height: 109.54px
  letter-spacing: 0
  line-height: normal
  margin-bottom: -15.77px
  margin-top: -17.77px
  text-align: center
  width: 34.72px

.java-21
  height: 109.54px
  letter-spacing: 0
  line-height: normal
  margin-bottom: -15.77px
  margin-top: -17.77px
  text-align: center
  width: 53.1px

.swift-19
  height: 109.54px
  letter-spacing: 0
  line-height: normal
  margin-bottom: -15.77px
  margin-top: -17.77px
  text-align: center
  width: 61.27px

.type-script-6
  height: 109.54px
  letter-spacing: 0
  line-height: normal
  margin-bottom: -15.77px
  margin-right: -25.82px
  margin-top: -17.77px
  text-align: center
  width: 128.68px

.name-27
  height: 109.54px
  letter-spacing: 0
  line-height: normal
  margin-bottom: -15.77px
  margin-right: -107.09px
  margin-top: -17.77px
  text-align: center
  width: 61.27px

.go-23
  height: 109.54px
  letter-spacing: 0
  line-height: normal
  margin-bottom: -15.77px
  margin-right: -159.77px
  margin-top: -17.77px
  text-align: center
  width: 32.68px

.place-40
  height: 109.54px
  letter-spacing: 0
  line-height: normal
  margin-bottom: -15.77px
  margin-right: -249.21px
  margin-top: -17.77px
  text-align: center
  width: 69.44px

.place-41
  height: 109.54px
  letter-spacing: 0
  line-height: normal
  margin-bottom: -15.77px
  margin-right: -322.32px
  margin-top: -17.77px
  text-align: center
  width: 53.1px

.experiences-6
  align-items: center
  border: 1px none
  display: flex
  gap: 3px
  height: 76px
  justify-content: center
  padding: 17px 0px
  width: 769px

.web-e-commerce-development-6
  letter-spacing: 0
  line-height: normal
  margin-left: -350.00px
  text-align: center
  width: 299px

.project-management-6
  letter-spacing: 0
  line-height: normal
  margin-left: -48.00px
  text-align: center
  width: 199px

.salesforce-6
  letter-spacing: 0
  line-height: normal
  text-align: center
  width: 118px

.full-stack-6
  letter-spacing: 0
  line-height: normal
  text-align: center
  width: 116px

.gis-23
  letter-spacing: 0
  line-height: normal
  text-align: center
  width: 66px

.blockchain-19
  height: 19px
  letter-spacing: 0
  line-height: normal
  text-align: center
  width: 121px

.python-scripting-6
  letter-spacing: 0
  line-height: normal
  text-align: center
  width: 175px

.api-integrations-6
  letter-spacing: 0
  line-height: normal
  margin-right: -168.00px
  text-align: center
  width: 172px

.cloud-development-6
  letter-spacing: 0
  line-height: normal
  margin-right: -350.00px
  text-align: center
  width: 179px

.skills-7.skills-8
  height: 331px
  left: 0
  margin-left: unset
  position: absolute
  top: 0
</style>
