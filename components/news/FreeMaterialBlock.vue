<script setup>
import TitleMinBlock from '../common/TitleMinBlock.vue';
const props = defineProps({
  freeMaterials: {
    type: Array,
    default: []
  }
})
onMounted(() => {
  console.log('freeMaterials', props.freeMaterials);
})
</script>

<template>
  <div class="mat">
    <div class="container">
      <TitleMinBlock title="Бесплатные материалы для специалистов ритуального сервиса" />
      <div class="mat__list">
        <NuxtLink class="mat__item" v-for="(item, index) in freeMaterials" :key="index" :to="item.acf.url">
          <img v-if="item?._embedded['wp:featuredmedia']" :src="item?._embedded['wp:featuredmedia'][0].source_url" :alt="item.title.rendered" />
          <h3>{{ item.title.rendered }}</h3>
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
@media (max-width: 1024px)
  .mat
    padding-top: 60px
  .mat__list
    grid-template-columns: repeat(2, 1fr)
    gap: 20px
@media (max-width: 620px)
  .mat__list
    grid-template-columns: repeat(1, 1fr)
  .mat__item
    img
      height: 250px
      
    h3
      font-size: 18px
</style>