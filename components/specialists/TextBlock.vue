<script lang="ts" setup>
import bgimg from "~/assets/img/bg-spec-big.png";
</script>
<template>
  <div class="text" :style="{ backgroundImage: `url(${bgimg})` }">
    <div class="container">
      <p> Наша команда специалистов – это не просто сотрудники ритуального сервиса, это чуткие и внимательные люди, готовые оказать вам всестороннюю поддержку и помощь в этот непростой период.</p>
    </div>
  </div>
  <div class="text2">
    <div class="container">
      <p>Доверьтесь нам, и мы сделаем все возможное, чтобы облегчить вашу боль и помочь достойно проводить близкого человека в последний путь.</p>
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
</style>