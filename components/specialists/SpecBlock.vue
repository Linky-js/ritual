<script setup>
import { NuxtLink } from '#components';
import SpecItem from '../common/SpecItem.vue';
import TitleMinBlock from '../common/TitleMinBlock.vue';

const props = defineProps({
  specialistsBlockObject: {
    type: Array,
    default: []
  }
})

</script>
<template>

  <div class="spec">
    <div class="container">

      <TitleMinBlock title="Ритуальные агенты" />
      <div class="spec__blocks--wrapper">
        <div v-for="(specialists, index) in specialistsBlockObject" :key="index" class="spec__block">
          <div class="spec__head">{{ specialists.title }}</div>
          <div class="spec__list">
            <NuxtLink v-for="(item, index) in specialists.items" :key="index" class="spec__item"
              :to="`/specialists/${item.slug}`">
              <SpecItem :name="item.title.rendered"
                :img="item._embedded['wp:featuredmedia'] ? item._embedded['wp:featuredmedia'][0].source_url : ''"
                :description="item.excerpt.rendered" />
            </NuxtLink>
          </div>
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

@media (max-width: 1024px)
  .spec
    padding-top: 50px
    padding-bottom: 50px
    &__list
      margin-top: 20px
      gap: 20px
      grid-template-columns: repeat(2, 1fr)
    &__block
      margin-top: 20px
    &__head
      font-size: 20px
@media (max-width: 620px)
  .spec
    &__list
      grid-template-columns: repeat(1, 1fr)
    &__block
      margin-top: 20px
</style>