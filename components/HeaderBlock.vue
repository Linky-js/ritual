<script setup>
import logo from '../assets/img/logo.svg'
import phoneSvg from '../assets/img/phone.svg'

</script>
<template>
  <div class="header">
    <NuxtLink :to="'/'" class="logo">
      <img :src="logo" alt="">
      <div class="logo__text">
        <div class="logo__title">Альянс бальзамировщиков</div>
        <div class="logo__subtitle">и специалистов ритуального сервиса</div>
      </div>
    </NuxtLink>
    <div class="header__menu">
      <NuxtLink :to="'/'">О нас</NuxtLink>
      <NuxtLink :to="'/'">Специалисты</NuxtLink>
      <NuxtLink :to="'/'">Материалы</NuxtLink>
      <NuxtLink :to="'/login'" class="btn"><span>Личный кабинет</span></NuxtLink>
      <NuxtLink :to="'tel:+79990091560'" class="header__phone"><img :src="phoneSvg" alt="">+7 (999) 009-15-60</NuxtLink>
    </div>
  </div>
</template>

<style lang="sass" scoped>
$black: #090909
$base2: #196064
.header
  padding: 16px 50px
  display: flex
  align-items: center
  justify-content: space-between
  gap: 15px
  &__menu
    display: flex
    align-items: center
    gap: 35px
    a
      font-size: 18px
      font-weight: 500
      line-height: 130%
      color: $black
      position: relative
      transition: .3s all
      &::after
        content: ''
        position: absolute
        width: 0
        height: 2px
        background: $base2
        left: 0
        bottom: -5px
        transition: all .3s
      &:hover
        color: $base2
        &::after
          width: 100%
  &__phone
    display: flex
    align-items: center
    gap: 10px
    font-size: 24px
    font-weight: 600
    line-height: 130%
    img
      height: 2cap
    &:hover
      color: $base2
    &::after
      display: none
</style>