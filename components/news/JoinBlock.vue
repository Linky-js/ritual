<script setup>
import img from '../../assets/img/def-spec.jpg'
const joinList = [
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
  <div class="join">
    <div class="container">
      <div class="join__head">
        <div class="join__head-img"><img src="~/assets/img/rose.png" alt=""></div>
        <h2>Вступить в АБИСРС <br>для полного доступа к материалам</h2>
        <div class="join__head-img"><img src="~/assets/img/rose.png" alt=""></div>
      </div>
      <p>Предусмотрена возможность выборочного приобретения платных материалов. Это позволяет вам самостоятельно выбрать
        те ресурсы, которые наиболее актуальны и полезны для вашей деятельности, обеспечивая гибкость и доступность
        знаний.</p>
      <div class="join__list">
        <div class="join__item" v-for="(item, index) in joinList" :key="index">
          <img :src="item.img" :alt="item.title" />
          <h3>{{ item.title }}</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="sass" scoped>
.join
  padding-top: 150px
  padding-bottom: 150px
  &__head
    display: flex
    align-items: center
    justify-content: center
    h2 
      text-align: center
      padding: 20px
      max-width: 1000px
      font-style: italic
      width: 100%
      color: #155D61
      border-radius: 60px
      border: 1px solid #155D61
      background: #fff
      z-index: 2
    &-img 
      position: relative
      &::before
        content: ''
        width: 100%
        height: 100%
        background: #AFDADC
        position: absolute
        border-radius: 50%
        z-index: -1
        filter: blur(45px)
    &-img:first-child
      margin-right: -10px
    &-img:nth-child(3)
      transform: rotate(180deg)
      margin-left: -10px
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
        
</style>