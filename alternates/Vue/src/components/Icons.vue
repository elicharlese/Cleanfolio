<template>
  <div :class="[`icons-1`, className || ``]">
    <img
      class="icons-item"
      src="https://anima-uploads.s3.amazonaws.com/projects/62fe76f7359e99eee487b330/releases/634ef8f1abca668fdefc42a0/img/mail@2x.png"
      alt="icon-mail"
    />
    <img
      class="icons-item"
      src="https://anima-uploads.s3.amazonaws.com/projects/62fe76f7359e99eee487b330/releases/634ef8f1abca668fdefc42a0/img/linkedin@2x.png"
      alt="icon-linkedin"
    />
    <img
      class="icons-item"
      src="https://anima-uploads.s3.amazonaws.com/projects/62fe76f7359e99eee487b330/releases/634ef8f1abca668fdefc42a0/img/telegram-app@2x.png"
      alt="icon-paper_plane"
    />
    <img
      class="discord-new-1"
      src="https://anima-uploads.s3.amazonaws.com/projects/62fe76f7359e99eee487b330/releases/634ef8f1abca668fdefc42a0/img/discord-new@2x.png"
      alt="Discord New"
    />
    <img
      class="icons-item"
      src="https://anima-uploads.s3.amazonaws.com/projects/62fe76f7359e99eee487b330/releases/634ef8f1abca668fdefc42a0/img/twitch@2x.png"
      alt="Twitch"
    />
  </div>
</template>

<script>
export default {
  name: "Icons",
  props: ["className"],
};
</script>

<style lang="sass">
.icons-1,
.icons-1.icons
  display: flex
  gap: 220px
  margin-left: 136px
  margin-top: 129px
  width: 1240px

.icons-item
  height: 70px
  margin-top: 10px
  width: 70px

.discord-new-1
  height: 80px
  width: 80px

.icons-1.icons-2,
.icons-1.icons-3
  margin-left: 101px
</style>
