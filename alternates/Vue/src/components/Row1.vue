<template>
  <div :class="[`row-1 raleway-normal-cape-cod-22px`, className || ``]">
    <div class="httpsgithubcome-2 valign-text-middle">
      <span><span class="span-28 raleway-normal-cape-cod-22px">https://github.com/elicharlese/monday-crm</span> </span>
    </div>
    <p class="built-a-crm-pipeline valign-text-middle">
      <span
        ><span class="span-28 raleway-normal-cape-cod-22px">Built a CRM pipeline using React and backend Node.js</span>
      </span>
    </p>
  </div>
</template>

<script>
export default {
  name: "Row1",
  props: ["className"],
};
</script>

<style lang="sass">
.row-1
  align-items: flex-start
  display: flex
  margin-top: 31px
  min-width: 1028px

.httpsgithubcome-2
  height: 31px
  letter-spacing: 0
  line-height: normal
  margin-top: -1px
  width: 470px

.built-a-crm-pipeline
  height: 31px
  letter-spacing: 0
  line-height: normal
  margin-top: -1px
  width: 554px

.row-1.row-1-1
  margin-left: 2.0px
  margin-top: unset
</style>
