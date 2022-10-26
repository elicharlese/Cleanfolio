<template>
  <div :class="[`products`, className || ``]">
    <div class="product-management raleway-bold-white-22px">
      <div class="flex-row-39">
        <img
          class="kanban"
          src="https://anima-uploads.s3.amazonaws.com/projects/62fe76f7359e99eee487b330/releases/634b1e2b9caf1e7ca700d848/img/kanban@2x.png"
          alt="Kanban"
        />
        <div class="product-management-1 raleway-bold-white-100px">Product Management</div>
      </div>
      <p class="lorem-ipsum-dolor-si-18 valign-text-middle">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit dapibus at feugiat ante mollis faucibus tellus
        ante. Tristique habitant turpis ut turpis ut. Aliquet scelerisque vitae, mattis purus est. Sapien, vitae,
        euismod vel eleifend id. Felis suspendisse mattis aliquet praesent dolor augue. Nunc, in ornare arcu in etiam
        tristique cum felis. Dignissim vestibulum tincidunt facilisi egestas amet enim aenean. Posuere risus sapien, sit
        pulvinar habitant.
      </p>
      <div class="learn-more valign-text-middle">Learn More</div>
    </div>
    <div class="downloads">
      <div class="platforms-available-for-download raleway-bold-white-54px">Platforms Available for Download</div>
      <downloads :className="downloadsProps.className" />
      <div class="car-application">
        <img
          class="car-top-view"
          src="https://anima-uploads.s3.amazonaws.com/projects/62fe76f7359e99eee487b330/releases/634b1e2b9caf1e7ca700d848/img/car-top-view@2x.png"
          alt="Car Top View"
        />
        <p class="soon-to-be-car-application valign-text-middle raleway-bold-white-36px">
          Soon to be car application...
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import Downloads from "./Downloads";
export default {
  name: "Products",
  components: {
    Downloads,
  },
  props: ["className", "downloadsProps"],
};
</script>

<style lang="sass">
@import '../../variables'

.products
  background-color: $mexican-red
  border: 1px none
  display: flex
  flex-direction: column
  gap: 99px
  height: 1000px
  width: 1512px

.product-management
  align-items: center
  display: flex
  flex-direction: column
  margin-left: 86px
  margin-top: 68px
  min-height: 336px
  padding: 0 0.0px
  width: 1346px

.flex-row-39
  align-items: center
  display: flex
  gap: 45px
  height: 109px
  margin-right: 17.0px
  min-width: 1183px

.kanban
  height: 89px
  margin-bottom: 0.93px
  width: 96px

.product-management-1
  letter-spacing: 0
  line-height: normal
  min-height: 109px
  width: 1042px

.lorem-ipsum-dolor-si-18
  height: 97px
  letter-spacing: 0
  line-height: normal
  margin-right: 6.0px
  margin-top: 47px
  text-align: center
  width: 1340px

.learn-more
  height: 24px
  letter-spacing: 0
  line-height: normal
  margin-right: 6.0px
  margin-top: 59px
  text-align: center
  text-decoration: underline
  width: 120px

.downloads
  display: flex
  flex-direction: column
  height: 444px
  margin-left: 61px
  position: relative
  width: 1392px

.platforms-available-for-download
  height: 69.07px
  letter-spacing: 0
  line-height: normal
  margin-left: 262px
  width: 866px

.car-application
  display: flex
  gap: 74px
  margin-left: 50px
  margin-top: 112.1px
  width: 1051px

.car-top-view
  height: 105.24px
  width: 96px

.soon-to-be-car-application
  height: 46.04px
  letter-spacing: 0
  line-height: normal
  margin-top: 29.6px
  width: 879px

.products.products-1
  background-color: $mandy
  height: 982px

.products.products-2
  background-color: $seagull
  height: 982px

.products.products-2 .car-application,
.products.products-7 .car-application,
.products.products-11 .car-application
  height: 105.24px

.products.products-2 .car-top-view,
.products.products-7 .car-top-view,
.products.products-11 .car-top-view
  height: 105.24px
  margin-top: 0

.products.products-3
  background-color: $anzac
  height: 982px

.products.products-4
  background-color: $peach-yellow
  height: 982px

.products.products-5
  background-color: #00000033
  height: 982px

.products.products-6
  background-color: $fern
  height: 982px

.products.products-7
  background-color: $yellow-sunshine
  height: 982px

.products.products-8
  background-color: $portage
  height: 982px

.products.products-9
  background-color: $purple-heart
  height: 982px

.products.products-10
  background-color: $orchid
  height: 982px

.products.products-11
  background-color: $turquoise-blue
  height: 982px
</style>
