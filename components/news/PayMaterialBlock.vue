<script setup>
import TitleMinBlock from '../common/TitleMinBlock.vue';
import img from '../../assets/img/def-spec.jpg'
const matList = [
  {
    img: img,
    title: 'Название Название'
  },
  {
    img: img,
    title: 'Название Название'
  },
  {
    img: img,
    title: 'Название Название'
  },
  {
    img: img,
    title: 'Название Название'
  },
]
</script>

<template>
  <div class="mat">
    <div class="container">
      <TitleMinBlock title="Платные материалы для специалистов ритуального сервиса" />
      <p>Платные материалы для специалистов ритуального сервиса доступны для всех, кто вступает в наш Альянс. Это уникальная возможность погрузиться в мир профессиональных знаний и навыков, которые помогут вам выделиться на рынке и поднять качество предоставляемых услуг на новый уровень.</p>
      <div class="mat__list">
        <div class="mat__item" v-for="(item, index) in matList" :key="index">
          <img :src="item.img" :alt="item.title" />
          <h3>{{ item.title }}</h3>
        </div>
      </div>
    </div>
  </div>
</template>



<style lang="sass" scoped>
.mat
  padding-top: 150px
  p 
    font-size: 25px
    line-height: 130%
    margin-top: 20px
    margin-bottom: 20px
    color: #181818
    font-weight: 600
    text-align: center
  &__list
    display: grid
    grid-template-columns: repeat(4, 1fr)
    gap: 20px
  &__item
    display: flex
    flex-direction: column
    transition: .3s all
    img
      width: 100%
      height: 350px
      object-fit: cover
      border-radius: 15px
      margin-bottom: 15px
    h3
      font-size: 25px
      color: #181818
      line-height: 130%
      font-weight: 600
      text-align: center
      transition: .3s all
    &:hover
      transform: scale(1.03)
      h3 
        color: #96C1C3
@media (max-width: 1024px)
  .mat
    padding-top: 60px
  .mat p 
    font-size: 20px
  .mat__list
    grid-template-columns: repeat(2, 1fr)
    gap: 20px
@media (max-width: 620px)
  .mat p 
    font-size: 16px
  .mat__list
    grid-template-columns: repeat(1, 1fr)
  .mat__item
    img
      height: 250px
    h3
      font-size: 18px
</style>