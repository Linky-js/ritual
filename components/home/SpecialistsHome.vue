<script setup>
import { NuxtLink } from '#components'
import SpecItem from '~/components/common/SpecItem.vue'
import { useApiStore } from '~/stores/api'

const apiStore = useApiStore()

const { data: specialists, error } = await useAsyncData('specialists', () =>
  $fetch(`${apiStore.apiUrl}specialist?_embed`)
)
</script>

<template>
  <div class="spechome">
    <div class="container">
      <div class="spechome__list">
        <NuxtLink v-for="(item, index) in specialists || []" :key="index" :to="`/specialists/${item.slug}`">
          <SpecItem :name="item.title?.rendered || 'Без имени'" :description="item.excerpt?.rendered || ''"
            :img="item._embedded?.['wp:featuredmedia']?.[0]?.source_url || ''" />
        </NuxtLink>
      </div>
      <div class="spechome__btn">
        <NuxtLink to="/specialists" class="btn">
          <span>Найти специалиста рядом</span>
        </NuxtLink>
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