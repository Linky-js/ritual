<script setup>
import img from '../../assets/img/def-spec.jpg'
import SpecItem from '~/components/common/SpecItem.vue'

const props = defineProps({
  specialistsBlockObject: {
    type: Object,
    default: {}
  }
})
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
  <div class="spechome">
    <div class="container">
      <div class="spechome__list">
        <SpecItem v-for="(spec, index) in specialistsBlockObject.specialists" :key="index" :name="spec.title.rendered"
          :description="spec.excerpt.rendered" :img="spec._embedded['wp:featuredmedia'][0].source_url" />
      </div>
      <div class="spechome__btn">
        <NuxtLink to="/specialists" class="btn"><span>Найти спецалиста рядом</span></NuxtLink>
      </div>
    </div>
  </div>
</template>
<style lang="sass" scoped>
.spechome
  padding: 100px 0
  &__list
    display: grid
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr))
    gap: 40px
    margin-bottom: 50px
  &__btn
    display: flex
    align-items: center
    justify-content: center
@media (max-width: 620px)
  .spechome
    padding-bottom: 50px
    &__list
      margin-bottom: 30px
      gap: 20px
  .spechome__btn
    .btn
      max-width: 100%
      width: 100%
</style>