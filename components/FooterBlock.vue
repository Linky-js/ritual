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