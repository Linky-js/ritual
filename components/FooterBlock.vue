<script setup>
import phoneSvg from '../assets/img/phone.svg'
import mailSvg from '../assets/img/mail.svg'
import logo from '../assets/img/logo.svg'
</script>
<template>
  <div class="footer">
    <div class="footer__title">бальзамировщики</div>
    <div class="footer__content">
      <NuxtLink :to="'/'" class="logo">
        <img :src="logo" alt="">
        <div class="logo__text">
          <div class="logo__title">Альянс бальзамировщиков</div>
          <div class="logo__subtitle">и специалистов ритуального сервиса</div>
        </div>
      </NuxtLink>
      <div class="footer__menu">
        <NuxtLink>©Все права защищены 2025</NuxtLink>
        <NuxtLink :to="'/'">Политика конфиденциальности</NuxtLink>
      </div>
      <div class="footer__soc">
        <NuxtLink :to="'mailto:abisrs@mail.ru'"><img :src="mailSvg" alt="">abisrs@mail.ru</NuxtLink>
        <NuxtLink :to="'tel:+79990091560'"><img :src="phoneSvg" alt="">+7 (999) 009-15-60</NuxtLink>
      </div>
    </div>
  </div>
</template>
<style lang="sass" scoped>
$white: #fff
$black: #090909
$black2: #272727
$base: #B1DBDD
$base2: #196064
.footer
  &__title
    font-size: 8.1vw
    text-align: center
    font-weight: 900
    text-transform: uppercase
    background: linear-gradient(180deg, #59ABAF 0%, #10595C 100%)
    -webkit-background-clip: text
    -webkit-text-fill-color: transparent
    background-clip: text
    text-fill-color: transparent
    margin: 0px 0 -46px
  .logo__title
    color: $white
  .logo__subtitle
    color: $white
  .logo:hover
    .logo__title, .logo__subtitle
      color: $base
    .logo__text::after
      background: $base
  &__content
    background: $black2
    padding: 38px 50px
    color: $white
    display: flex
    align-items: center
    justify-content: space-between
  &__menu
    display: flex
    align-items: center
    gap: 25px
    a
      font-size: 18px
      font-weight: 500
      line-height: 130%
      color: $white
      position: relative
      transition: .3s all
      &:first-child
        cursor: default
        &::after
          display: none
        &:hover
          color: $white
      &::after
        content: ''
        position: absolute
        width: 0
        height: 2px
        background: $base
        left: 0
        bottom: -5px
        transition: all .3s
      &:hover
        color: $base
        &::after
          width: 100%
  &__soc
    display: flex
    align-items: center
    gap: 20px
    a
      display: flex
      align-items: center
      gap: 10px
      font-size: 18px
      font-weight: 500
      color: $white
      line-height: 130%
      transition: .3s all
      &:hover
        color: $base
</style>