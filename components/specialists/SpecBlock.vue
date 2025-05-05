<script setup>
import SpecItem from '../common/SpecItem.vue';
import TitleMinBlock from '../common/TitleMinBlock.vue';
import img from '../../assets/img/def-spec.jpg'
const specialists = [
  {
    name: 'Наталья Иванова',
    img: img,
    description: 'Психолог, стаж 10 лет'
  },
  {
    name: 'Игорь Смирнов',
    img: img,
    description: 'Ритуальный агент'
  },
  {
    name: 'Наталья Иванова',
    img: img,
    description: 'Психолог, стаж 10 лет'
  },
  {
    name: 'Игорь Смирнов',
    img: img,
    description: 'Ритуальный агент'
  },
  {
    name: 'Наталья Иванова',
    img: img,
    description: 'Психолог, стаж 10 лет'
  },
  {
    name: 'Игорь Смирнов',
    img: img,
    description: 'Ритуальный агент'
  },
  {
    name: 'Наталья Иванова',
    img: img,
    description: 'Психолог, стаж 10 лет'
  },
  {
    name: 'Игорь Смирнов',
    img: img,
    description: 'Ритуальный агент'
  },
]
</script>
<template>

  <div class="spec">
    <div class="container">
      <TitleMinBlock title="Ритуальные агенты" />
      <div class="spec__block">
        <div class="spec__head">Санкт-Петербург</div>
        <div class="spec__list">
          <SpecItem v-for="(item, index) in specialists" :key="index" :name="item.name" :img="item.img"
            :description="item.description" />
        </div>
      </div>
      <div class="spec__block">
        <div class="spec__head">Москва</div>
        <div class="spec__list">
          <SpecItem v-for="(item, index) in specialists" :key="index" :name="item.name" :img="item.img"
            :description="item.description" />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="sass" scoped>
.spec
  padding-top: 100px
  padding-bottom: 150px
  &__list
    margin-top: 40px
    display: grid
    grid-template-columns: repeat(4, 1fr)
    gap: 40px
  &__block
    display: flex
    flex-direction: column
    gap: 20px
    margin-top: 50px
  &__head
    background: linear-gradient(90deg, rgba(43, 111, 114, 0.7) 26.04%, rgba(30, 100, 104, 0) 100%)
    font-size: 30px
    line-height: 130%
    padding: 10px 20px
    color: #fff
</style>