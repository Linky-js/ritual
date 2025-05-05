<script setup>
import bgimg from "~/assets/img/bg-spec.png";
</script>
<template>
  <div class="top">
    <div class="container top__top">
      <h2 class="head"><span>Стать частью АБИСРС</span></h2>
      <p>Альянс бальзамировщиков и специалистов ритуального сервиса представляет собой уникальную платформу, которая объединяет профессионалов, стремящихся к повышению стандартов своей деятельности. </p>
    </div>
    <div class="top__item" :style="{ backgroundImage: `url(${bgimg})` }">
      <div class="container">
        <p>Присоединяясь к альянсу каждый специалист получает возможность быть частью сообщества, которое ценит качество и этику в своей работе — таких важных аспектов, делающих нашу профессию достойной и необходимой в обществе.</p>
      </div>
    </div>
    <div class="top__bot">
      <div class="container">
        <p>АБИСРС служит не только местом для обмена знаниями, но и площадкой для обсуждения актуальных вопросов отрасли и внедрения лучших практик. В условиях постоянных изменений и роста требований клиентов критически важно быть в курсе новинок и поддерживать высокий уровень профессионализма.</p>
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
</style>