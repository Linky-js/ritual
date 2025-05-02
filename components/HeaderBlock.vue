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
        <NuxtLink :to="'/'" class="btn"><span>Личный кабинет</span></NuxtLink>
        <NuxtLink :to="'tel:+79990091560'" class="header__phone"><img :src="phoneSvg" alt="">+7 (999) 009-15-60</NuxtLink>
      </div>
    </div>
</template>