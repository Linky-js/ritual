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
  text-align: center
  padding: 10px
  background: linear-gradient(90deg, #AFDADC 0%, rgba(175, 218, 220, 0.42) 100%);
  h2
    color: #181818
</style>