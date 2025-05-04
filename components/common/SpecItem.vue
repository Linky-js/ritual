<template>
  <div class="spec__item">
    <div class="spec__item-img">
      <img :src="img" :alt="name">
    </div>
    <div class="spec__item-text">
      <div class="spec__item-name">{{ name }}</div>
      <div class="spec__item-desk">{{ description }}</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  name: string
  description: string
  img: string
}>()
</script>

<style></style>