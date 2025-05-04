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
      <TitleMinBlock title="Бесплатные материалы для специалистов ритуального сервиса" />
      <div class="mat__list">
        <NuxtLink class="mat__item" v-for="(item, index) in matList" :key="index">
          <img :src="item.img" :alt="item.title" />
          <h3>{{ item.title }}</h3>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>



<style lang="sass" scoped>
.mat
  padding-top: 150px
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
      
</style>