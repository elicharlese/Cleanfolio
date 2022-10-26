<template>
  <div :class="[`private-repositories-4`, className || ``]">
    <div class="overlap-group-12">
      <div class="private-repositories-5 valign-text-middle raleway-bold-cape-cod-32px">Private Repositories</div>
      <p class="in-order-to-access-m-1 valign-text-middle raleway-normal-cape-cod-22px">
        <span
          ><span class="span-10 raleway-normal-cape-cod-22px"
            >In order to access my private repositories you must have a token. Learn how to get<br />a token </span
          ><span class="span-10 raleway-bold-cape-cod-22px">here</span
          ><span class="span-10 raleway-normal-cape-cod-22px"> and visit this </span
          ><span class="span-10 raleway-bold-cape-cod-22px">article</span
          ><span class="span-10 raleway-normal-cape-cod-22px"> to learn more about the implementation.</span>
        </span>
      </p>
      <github-link />
    </div>
  </div>
</template>

<script>
import GithubLink from "./GithubLink";
export default {
  name: "PrivateRepositories2",
  components: {
    GithubLink,
  },
  props: ["className"],
};
</script>

<style lang="sass">
@import '../../variables'

.private-repositories-4,
.private-repositories-4.private-repositories-2
  align-items: flex-start
  display: flex
  height: 263px
  margin-left: 129px
  margin-top: 133px
  min-width: 1257px

.overlap-group-12
  align-items: center
  background-color: $seagull-2
  border-radius: 16px
  display: flex
  flex-direction: column
  gap: 29px
  min-height: 263px
  padding: 31px 100px
  position: relative
  width: 1253px

.private-repositories-5
  height: 38px
  letter-spacing: 0
  line-height: normal
  margin-left: 1.0px
  margin-top: 8px
  min-width: 306px
  text-align: center

.in-order-to-access-m-1
  align-self: flex-start
  height: 52px
  letter-spacing: 0
  line-height: normal
  text-align: center
  width: 1052px

.private-repositories-4.private-repositories-6,
.private-repositories-4.private-repositories-8
  margin-left: 94px
</style>
