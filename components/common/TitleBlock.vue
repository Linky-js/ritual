<template>
  <div class="title">
    <div class="container">
      <h2>{{ title }}</h2>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true
  }
})
</script>

<style lang="sass" scoped>
.title
  padding: 33px 42px
  background: linear-gradient(90deg, rgba(43, 111, 114, 0.7) 26.04%, rgba(30, 100, 104, 0) 100%)
  h2
    color: #fff
@media (max-width: 1600px)
  .title
    padding-left: 10px
    padding-right: 10px
@media (max-width: 1024px)
  .title
    padding: 15px 10px
</style>