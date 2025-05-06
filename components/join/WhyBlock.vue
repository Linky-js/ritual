<script setup>
import icon1 from "~/assets/img/why-1.svg";
import icon2 from "~/assets/img/why-2.svg";
import icon3 from "~/assets/img/why-3.svg";
import icon4 from "~/assets/img/why-4.svg";
import icon5 from "~/assets/img/why-5.svg";
import icon6 from "~/assets/img/why-6.svg";
import bg from "~/assets/img/why-bg.jpg";
const whyList = [
  {
    img: icon1,
    title: 'Новые деловые связи'
  },
  {
    img: icon2,
    title: 'Доступ к широкой сети профессионалов'
  },
  {
    img: icon3,
    title: 'Обмен опытом '
  },
  {
    img: icon4,
    title: 'Совместное планирование и координация действий'
  },
  {
    img: icon5,
    title: 'Повышение видимости услуг на рынке'
  },
  {
    img: icon6,
    title: 'Новые знания и профессиональный рост'
  },
]
</script>
<template>
  <div class="why">
    <div class="container">
      <h2 class="head"><span>Почему стоит присоединиться</span></h2>
      <div class="why__list">
        <div class="why__item" v-for="(item, index) in whyList" :key="index">
          <img :src="item.img" :alt="item.title">
          <p>{{ item.title }}</p>
        </div>
      </div>
    </div>
    <div class="why__bg">
      <img :src="bg" alt="">
    </div>
  </div>
</template>
<style lang="sass" scoped>
.why
  padding-top: 100px
  .container
    display: flex
    align-items: center
    flex-direction: column
    gap: 50px
  .head
    width: max-content
    font-size: 48px
  &__list
    display: grid
    grid-template-columns: repeat(3, 1fr)
    gap: 20px
    margin-bottom: 100px
  &__item
    display: flex
    flex-direction: column
    gap: 20px
    align-items: center
    text-align: center
    img
      height: 140px
      width: auto
      object-fit: cover
    p 
      font-size: 25px
      line-height: 130%
      font-weight: 600
      color: #181818
      padding: 0 15px
  &__bg 
    img
      width: 100%
      height: 250px
      object-fit: cover
@media (max-width: 1600px)
  .why 
    .head 
      font-size: 40px
    &__item 
      img 
        height: 120px
      p 
        font-size: 20px
@media (max-width: 1024px)
  .why 
    .head 
      font-size: 36px
    &__list
      gap: 20px
      grid-template-columns: repeat(2, 1fr)
    &__item 
      img 
        height: 100px
      p 
        font-size: 18px
@media (max-width: 620px)
  .why 
    .head 
      font-size: 24px
      width: 100%
      max-width: 100%
      text-align: center
    &__list
      grid-template-columns: repeat(1, 1fr)
      margin-bottom: 30px
    &__item 
      img 
        height: 40px
      p 
        font-size: 16px
</style>