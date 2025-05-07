<template>
  <div class="breadcrumbs">
    <div class="container">
      <NuxtLink to="/">Главная</NuxtLink>
      <template v-for="(crumb, index) in breadcrumbs" :key="index">
        <span> > </span>
        <NuxtLink :to="crumb.path">{{ crumb.label }}</NuxtLink>
      </template>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()

const props = defineProps({
  breadcrumbs: {
    type: Array,
    default: [
      {
        label: 'О компании',
        path: '/about'
      }
    ]
  }
})

function getBreadcrumbLabel(part) {
  const map = {
    about: 'О компании',
    specialists: 'Специалисты',
    news: 'Информационные материалы',
    join: 'Присоединиться как специалист'
  }

  return map[part] || part.charAt(0).toUpperCase() + part.slice(1)
}
</script>

<style lang="sass" scoped>
.breadcrumbs
  padding: 30px 0
  .container
    display: flex
    align-items: center
    gap: 6px
  a
    font-size: 14px
    line-height: 130%
    color: #181818
    &:first-child
      color: #196064
      text-decoration: underline
@media (max-width: 1024px)
  .breadcrumbs
    padding: 15px 0
    a
      font-size: 12px
</style>