<script setup>
import logo from "../assets/img/logo.svg";
import phoneSvg from "../assets/img/phone.svg";
import { useCookie } from "#app";
const linkAcc = ref(null);

onMounted(() => {
  let acc = useCookie("auth_token");
  if (acc.value) {
    linkAcc.value = "/account";
  } else {
    linkAcc.value = "/login";
  }
});
</script>
<template>
  <div class="header">
    <NuxtLink :to="'/'" class="logo">
      <img :src="logo" alt="" />
      <div class="logo__text">
        <div class="logo__title">Альянс бальзамировщиков</div>
        <div class="logo__subtitle">и специалистов ритуального сервиса</div>
      </div>
    </NuxtLink>
    <div class="header__menu">
      <NuxtLink :to="'/about'">О нас</NuxtLink>
      <div class="header__menu__link">
        <NuxtLink :to="'/'">Специалисты</NuxtLink>
        <div class="header__submenu">
          <NuxtLink :to="'/specialists'">Найти специалиста</NuxtLink>
          <NuxtLink :to="'/join'">Присоединиться как специалист</NuxtLink>
        </div>
      </div>
      <NuxtLink :to="'/news'">Материалы</NuxtLink>
      <NuxtLink :to="linkAcc" class="btn"><span>Личный кабинет</span></NuxtLink>
      <NuxtLink :to="'tel:+79990091560'" class="header__phone"
        ><img :src="phoneSvg" alt="" />+7 (999) 009-15-60</NuxtLink
      >
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
    &__link
      position: relative
      .header__submenu
        position: absolute
        width: 120%
        top: -15px
        left: 50%
        transform: translateX(-50%)
        display: flex
        flex-direction: column
        gap: 10px
        padding: 50px 1px 30px
        background: linear-gradient(180deg, #B3DEE0 0%, #10595C 100%)
        opacity: 0
        visibility: hidden
        delay: .3s
        transition: .3s all
        z-index: 1
        border-radius: 2px
        a
          color: #FFF
          text-align: center
          font-family: Montserrat
          font-size: 15px
          font-style: normal
          font-weight: 600
          line-height: normal
          &:hover
            color: $black
      &:hover
        .header__submenu
          delay: .9s
          opacity: 1
          visibility: visible
    a
      font-size: 18px
      font-weight: 500
      line-height: 130%
      color: $black
      position: relative
      z-index: 2
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
      width: auto
    &:hover
      color: $base2
    &::after
      display: none
</style>