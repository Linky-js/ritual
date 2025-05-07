<script setup>
import bgimg from "~/assets/img/bg-spec-big.png";

const props = defineProps({
  textBlockObject: {
    type: Object,
    default: {}
  }
})
</script>
<template>
  <div class="text" :style="{ backgroundImage: `url(${textBlockObject.photo})` }">
    <div class="container">
      <p>{{ textBlockObject.text }}</p>
    </div>
  </div>
  <div class="text2">
    <div class="container">
      <p>{{ textBlockObject.dopText }}</p>
    </div>
  </div>
</template>

<style lang="sass" scoped>
.text
  height: 660px
  padding-top: 114px
  p
    font-size: 25px
    line-height: 130%
    font-weight: 600
    text-align: center
.text2
  padding-top: 100px
  p
    font-size: 25px
    line-height: 130%
    font-family: "alethia pro"
    font-style: italic
    text-align: center
    position: relative
    padding: 40px 0
    border-top: 1px solid #96C1C3
    border-bottom: 1px solid #96C1C3
    &::before
      content: ''
      position: absolute
      left: 0
      top: 0
      width: 100%
      height: 100%
      background: #B3DCDE
      border-radius: 50%
      filter: blur(45px)
      z-index: -1
@media (max-width: 1024px)
  .text
    padding-top: 50px
    height: auto
    background-image: none !important
    p
      font-size: 20px
  .text2
    padding-top: 50px
    p
      font-size: 20px
@media (max-width: 620px)
  .text
    padding-top: 30px
    height: auto
    background-image: none !important
    p
      font-size: 16px
  .text2
    padding-top: 30px
    p
      font-size: 16px
</style>