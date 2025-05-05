<script setup>
import SpecItem from '~/components/common/SpecItem.vue'

const props = defineProps({
  specialistsBlockObject: {
    type: Object,
    default: {}
  }
})

</script>

<template>
  <div class="spec">
    <div class="container">
      <div class="spec__head">
        <h2 class="head-h2">{{ specialistsBlockObject.title }}</h2>
        <p>{{ specialistsBlockObject.text }}</p>
      </div>
      <div class="spec__title2">{{ specialistsBlockObject.dopText }}</div>
      <div class="spec__list">
        <SpecItem v-for="(spec, index) in specialistsBlockObject.specialists" :key="index" :name="spec.title.rendered" :description="spec.excerpt.rendered"
          :img="spec._embedded['wp:featuredmedia'][0].source_url" />

      </div>
      <div class="spec__btn">
        <NuxtLink :to="'/specialists'" class="btn"><span>Найти спецалиста рядом</span></NuxtLink>
      </div>
    </div>
  </div>
</template>



<style lang="sass" scoped>
.spec
  padding-top: 150px
  &__title2
    color: #155D61
    font-size: 36px
    max-width: 1085px
    margin: 16px auto 0
    text-align: center
    font-family: "Alethia Pro", sans-serif
    font-style: italic
  &__head
    padding-bottom: 16px
    display: flex
    flex-direction: column
    gap: 20px
    align-items: center
    h2 
      border-bottom: 1px solid #96C1C3
      max-width: max-content
    p
      font-size: 22px
      line-height: 130%
      font-weight: 500
      width: 100%
      text-align: center
  &__list
    display: grid
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr))
    gap: 20px
    margin-top: 40px
  &__btn
    display: flex
    align-items: center
    justify-content: center
    margin-top: 35px
</style>