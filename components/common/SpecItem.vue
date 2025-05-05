<script setup>
 const props = defineProps({
  name: String,
  description: String,
  img: String
})
</script>

<template>
  <div class="spec__item">
    <div class="spec__item-img">
      <img :src="img" :alt="name" />
    </div>
    <div class="spec__item-text">
      <div class="spec__item-name">{{ name }}</div>
      <div class="spec__item-desk" v-html="description"></div>
    </div>
  </div>
</template>
<style lang="sass" scoped>
.spec__item
  display: flex
  align-items: center
  flex-direction: column
  &-img
    height: 228px
    width: 225px
    border-radius: 30px
    border: 2px solid #155D6161
    z-index: 1
    position: relative
    img
      width: 100%
      height: 100%
      object-fit: cover
      border-radius: 30px
  &-text
    margin-top: -35px
    background: #B1DBDD
    border-radius: 30px
    width: 100%
    display: flex
    align-items: center
    flex-direction: column
    gap: 4px
    padding-top: 40px
    padding-bottom: 12px
    padding-left: 20px
    padding-right: 20px
  &-name
    color: #181818
    font-family: "Alethia Pro"
    font-size: 24px
    font-style: italic
    line-height: 130%
  &-desk
    color: #181818
    font-family: "Alethia Pro"
    font-size: 16px
    font-style: italic
    line-height: 130%
</style>