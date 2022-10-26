<template>
  <div :class="[`tools`, className || ``]">
    <div class="expand-for-more-information valign-text-middle raleway-normal-cape-cod-66px">
      Expand for more information...
    </div>
    <div class="menus">
      <div class="gitbook">
        <div class="overlap-group3-11">
          <div class="gitbook-1 valign-text-middle raleway-normal-cape-cod-54px">Gitbook</div>
        </div>
      </div>
      <packages :packages="packages1Props.packages" :className="packages1Props.className" />
      <packages :packages="packages2Props.packages" :className="packages2Props.className" />
      <packages :packages="packages3Props.packages" :className="packages3Props.className" />
    </div>
  </div>
</template>

<script>
import Packages from "./Packages";
export default {
  name: "Tools",
  components: {
    Packages,
  },
  props: ["className", "packages1Props", "packages2Props", "packages3Props"],
};
</script>

<style lang="sass">
@import '../../variables'

.tools
  background-color: $material-themereferrorerror100
  border: 1px none
  display: flex
  flex-direction: column
  gap: 76.1px
  height: 982px
  width: 1512px

.expand-for-more-information
  height: 108.9px
  letter-spacing: 0
  line-height: normal
  margin-left: 237px
  margin-top: 62px
  text-align: center
  width: 1042px

.menus
  display: flex
  flex-direction: column
  height: 672.06px
  margin-left: 71px
  position: relative
  width: 1373px

.gitbook
  align-items: flex-start
  display: flex
  margin-left: 2px
  min-width: 1371px

.overlap-group3-11
  align-items: flex-end
  background-color: $mexican-red-2
  border-radius: 16px
  display: flex
  height: 117px
  justify-content: flex-end
  min-width: 1369px
  padding: 0 469px

.gitbook-1
  height: 106px
  letter-spacing: 0
  line-height: normal
  text-align: center
  width: 426px

.tools.tools-1 .overlap-group3-11
  background-color: $mandy-2

.tools.tools-2 .overlap-group3-11
  background-color: $seagull-2

.tools.tools-3 .overlap-group3-11
  background-color: $anzac-2

.tools.tools-4 .overlap-group3-11
  background-color: $dairy-cream-2

.tools.tools-5 .overlap-group3-11
  background-color: $cararra-2

.tools.tools-6 .overlap-group3-11
  background-color: $fern-2

.tools.tools-7 .overlap-group3-11
  background-color: $yellow-sunshine-2

.tools.tools-8 .overlap-group3-11
  background-color: $portage-2

.tools.tools-9 .overlap-group3-11
  background-color: $purple-heart-3

.tools.tools-10 .overlap-group3-11
  background-color: $orchid-2

.tools.tools-11 .overlap-group3-11
  background-color: $turquoise-blue-2
</style>
