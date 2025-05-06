<script setup>
import logo from "../assets/img/logo.svg";
import phoneSvg from "../assets/img/phone.svg";
import phoneSvgWhite from "../assets/img/phone-white.svg";
import userSvg from "../assets/img/user.svg";
import { useCookie } from "#app";
const linkAcc = ref(null);


import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const isMenuOpen = ref(false)
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const route = useRoute()

watch(route, () => {
  isMenuOpen.value = false
})

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
    <div class="header__menu" :class="{ active: isMenuOpen }">
      <NuxtLink :to="'/about'">О нас</NuxtLink>
      <div class="header__menu__link">
        <NuxtLink :to="'/'" class="desktop">Специалисты</NuxtLink>
        <div class="header__submenu">
          <NuxtLink :to="'/specialists'">Найти специалиста</NuxtLink>
          <NuxtLink :to="'/join'">Присоединиться как специалист</NuxtLink>
        </div>
      </div>
      <NuxtLink :to="'/news'">Материалы</NuxtLink>
      <NuxtLink :to="linkAcc" class="btn"><span>Личный кабинет</span></NuxtLink>
      <NuxtLink :to="'tel:+79990091560'" class="header__phone"><img :src="phoneSvg" alt="" />+7 (999) 009-15-60
      </NuxtLink>
    </div>
    <div class="mob">
      <NuxtLink :to="linkAcc" class="user"><img :src="userSvg" alt=""></NuxtLink>
      <NuxtLink :to="'tel:+79990091560'" class="phone"><img :src="phoneSvgWhite" alt="" /></NuxtLink>
      <div class="burger" :class="{ active: isMenuOpen }" @click="toggleMenu">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  </div>
</template>

<style lang="sass" scoped>
$black: #090909
$base2: #196064
.mob 
  display: none
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
        top: 30px
        left: 50%
        transform: translateX(-50%)
        display: flex
        flex-direction: column
        gap: 10px
        padding: 15px 5px 25px
        background: #10595C 
        border-radius: 15px
        opacity: 0
        visibility: hidden
        delay: .3s
        transition: .3s all
        z-index: 1
        a
          color: #FFF
          text-align: center
          font-size: 16px
          font-style: normal
          line-height: normal
          &:hover
            color: #fff
      &:hover
        a 
          &::after
            background: #fff
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
@media (max-width: 1600px)
  .header
    padding: 15px 10px
    &__menu
      gap: 15px
      a
        font-size: 14px
  .header__menu__link .header__submenu a
    font-size: 11px
@media (max-width: 1024px)
  .header__menu
    position: fixed
    z-index: -1
    top: 0
    opacity: 0
    left: 0
    right: 0
    width: 100%
    height: 100%
    flex-direction: column
    align-items: center
    justify-content: center
    gap: 20px
    background: #fff
    transition: .3s all
    visibility: hidden
    .desktop
      display: none
    a
      font-size: 14px
    &.active
      z-index: 9
      opacity: 1
      visibility: visible
      left: 0
  .mob
    display: flex
    align-items: center
    gap: 15px
  .phone, .user
    width: 40px
    height: 40px
    border-radius: 8px
    display: flex
    align-items: center
    justify-content: center
    background: #10595C
    img 
      width: 20px
      height: 20px
  .burger
    display: flex
    flex-direction: column
    gap: 8px
    width: 30px
    height: 24px
    cursor: pointer
    position: relative
    z-index: 1001
    span
      width: 100%
      height: 2px
      background: #181818
      border-radius: 2px
      transition: all 0.3s ease
    &.active
      position: fixed
      top: 27px
      right: 10px
      span:nth-child(1)
        transform: translateY(10px) rotate(45deg)
      span:nth-child(2)
        opacity: 0
      span:nth-child(3)
        transform: translateY(-10px) rotate(-45deg)
  .header__menu__link
    display: flex
    flex-direction: column
    gap: 15px
    align-items: center
    .header__submenu
      position: relative
      width: 100%
      top: 0
      left: 0
      transform: translateX(0)
      display: flex
      flex-direction: column
      gap: 10px
      padding: 15px 5px 25px
      background: #10595C 
      border-radius: 15px
      opacity: 1
      visibility: visible
      z-index: 1
      background: transparent
      text-align: center
      align-items: center
      padding: 0
      gap: 15px
      a
        color: #181818
        font-size: 14px

</style>