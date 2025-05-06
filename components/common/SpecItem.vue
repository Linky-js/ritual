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
    overflow: hidden
    img
      width: 100%
      height: 100%
      object-fit: cover
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
    text-align: center
  &-desk
    color: #181818
    font-family: "Alethia Pro"
    font-size: 16px
    font-style: italic
    line-height: 130%
    text-align: center
@media (max-width: 1024px)
  .spec__item
    &-name
      font-size: 20px
    &-desk
      font-size: 16px
</style>