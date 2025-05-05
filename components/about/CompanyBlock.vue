
<script setup>
import Logotype from '../common/Logotype.vue';
import img_1 from '../../assets/img/logo-1.png'
import img_2 from '../../assets/img/logo-2.png'
const logos = [
  {
    img: img_1
  },
  {
    img: img_2
  },
  {
    img: img_1
  },
  {
    img: img_2
  },
  {
    img: img_1
  },
  {
    img: img_2
  },
  {
    img: img_1
  },
  {
    img: img_2
  },
]
</script>
<template>
  <div class="company">
    <div class="container">
      <h2 class="head-h2">Компании с которыми мы сотрудничаем</h2>
      <div class="company__list">
        <Logotype v-for="logo in logos" :img="logo.img" />
      </div>
    </div>
  </div>
</template>


<style lang="sass" scoped>
.company
  padding-top: 100px
  .container
    display: flex
    flex-direction: column
    gap: 45px
    align-items: center
  h2
    width: max-content
    border-bottom: 1px solid #96C1C3
    padding-bottom: 10px
  &__list
    display: flex
    flex-wrap: wrap
    justify-content: center
    gap: 40px
</style>