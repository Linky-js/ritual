<script setup>
import bgimg from "~/assets/img/bg-spec.png";

const props = defineProps({
  topBlockObject: {
    type: Object,
    default: {}
  }
})
const img1 = bgimg
</script>
<template>
  <div class="top">
    <div class="container top__top">
      <h2 class="head"><span>{{topBlockObject.title}}</span></h2>
      <p>{{topBlockObject.text}}</p>
    </div>
    <div class="top__item" :style="{ backgroundImage: `url(${topBlockObject.photo})` }">
      <div class="container">
        <p>{{topBlockObject.dopText}}
        </p>
      </div>
    </div>
    <div class="top__bot">
      <div class="container">
        <p>{{topBlockObject.dopText2}}</p>
      </div>
    </div>
  </div>
</template>

<style lang="sass" scoped>
.top
  &__top
    display: flex
    align-items: center
    justify-content: center
    flex-direction: column
    .head
      margin-bottom: 20px
      font-size: 48px
      width: max-content
      text-align: center
    p
      font-size: 25px
      line-height: 130%
      text-align: center
      font-weight: 600
  &__item
    background-size: contain
    background-position: right center
    background-repeat: no-repeat
    height: 553px
    display: flex
    align-items: center
    margin-top: 50px
    p
      max-width: 723px
      font-family: "alethia pro"
      font-size: 25px
      line-height: 130%
      font-style: italic
      position: relative
      z-index: 2
      text-align: center
      &::before
        position: absolute
        background: #B3DCDE
        filter: blur(45px)
        border-radius: 50%
        width: 100%
        height: 100%
        content: ''
        top: 0
        left: -25px
        z-index: -1 
.top__bot
  padding-top: 50px
  p
    font-size: 25px
    font-weight: 600
    line-height: 130%
    text-align: center
@media (max-width: 1600px)
  .top
    &__top
      .head
        font-size: 40px
      p
        font-size: 20px
    &__item
      height: 400px
      p
        font-size: 20px
    &__bot
      p
        font-size: 20px
@media (max-width: 1024px)
  .top
    &__top
      .head
        font-size: 32px
      p
        font-size: 16px
    &__item
      height: 300px
      p
        font-size: 16px
    &__bot
      p
        font-size: 16px
@media (max-width: 620px)
  .top
    padding-top: 30px
    &__top
      .head
        font-size: 24px
      p
        font-size: 14px
    &__item
      height: 300px
      background-size: contain
      background-position: right bottom
      align-items: flex-start
      p
        font-size: 14px
    &__bot
      p
        font-size: 14px
</style>