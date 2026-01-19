<script setup>
import phoneSvg from '../assets/img/phone.svg'
import mailSvg from '../assets/img/mail.svg'
import logo from '../assets/img/logo.svg'
import telegram from '../assets/img/telegram.svg'
</script>
<template>
  <div class="footer">
    <div class="footer__title">бальзамировщики</div>
    <div class="footer__content">
      <div class="footer__left">
        <NuxtLink :to="'/'" class="logo">
          <img :src="logo" alt="">
          <div class="logo__text">
            <div class="logo__title">Альянс бальзамировщиков</div>
            <div class="logo__subtitle">и специалистов ритуального сервиса</div>
          </div>
        </NuxtLink>
        <p>
          ИП Харитонова-Мельцис Александра Вячеславовна <br>
          ИНН 782618296347 ОГРНИП 325784700143492
        </p>
      </div>
      <div class="footer__menu">
        <a href="/doc/oferta.pdf" target="_blank">Договор Оферта</a>
        <NuxtLink :to="'/privacy'">Политика конфиденциальности</NuxtLink>
        <p>©Все права защищены 2025</p>
      </div>
      <div class="footer__soc">
        <NuxtLink :to="'mailto:abisrs@mail.ru'"><img :src="mailSvg" alt="">abisrs@mail.ru</NuxtLink>
        <NuxtLink :to="'tel:+79990091560'"><img :src="phoneSvg" alt="">+7 (999) 009-15-60</NuxtLink>
        <NuxtLink target="_blank" :to="'https://t.me/abisrs_ru'"><img :src="telegram" alt="">@abisrs_ru</NuxtLink>
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
  &__left 
    display: flex
    flex-direction: column
    gap: 10px
    p 
      font-size: 18px
      line-height: 130%
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
    display: grid
    grid-template-columns: repeat(2, 1fr)
    gap: 10px
    p 
      grid-column: span 2
      &::after
        display: none !important
    a, p
      text-align: center
      font-size: 18px
      font-weight: 500
      line-height: 130%
      color: $white
      position: relative
      transition: .3s all
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
    justify-content: flex-end
    gap: 20px
    flex-wrap: wrap
    max-width: 410px
    width: 100%
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
@media (max-width: 1600px)
  .footer
    &__content
      flex-wrap: wrap
      justify-content: center
      gap: 30px
    &__menu
      a, p
        font-size: 16px
    &__soc
      max-width: 100%
      justify-content: center
      a
        font-size: 16px
@media (max-width: 1024px)
  .footer__title
    margin-bottom: -15px
@media (max-width: 620px)
  .footer__title
    margin-bottom: -5px
  .footer__content 
    padding: 30px 10px
  .footer__left 
    align-items: center
    p 
      text-align: center
      font-size: 14px
  .footer__menu
    order: 2  
    grid-template-columns: repeat(1, 1fr)
    p 
      grid-column: span 1
    a, p
      text-align: center
      font-size: 14px
  .footer__soc
    flex-wrap: wrap
    align-items: center
    justify-content: center
    text-align: center
    img
      width: 25px
      height: 25px
    a 
      font-size: 14px
</style>