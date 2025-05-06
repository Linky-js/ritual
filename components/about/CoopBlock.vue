<script setup>
const props = defineProps({
  coopBlockkObject: {
    type: Object,
    default: {}
  }
})
</script>
<template>
  <div class="coop">
    <div class="container">
      <h2 class="head-h2">{{ coopBlockkObject.title }}</h2>
      <div class="coop__text">
        {{ coopBlockkObject.text }}
      </div>
    </div>
  </div>
</template>


<style lang="sass" scoped>
.coop
  padding-top: 100px
  .container
    display: flex
    flex-direction: column
    align-items: center
    gap: 35px
  h2
    width: max-content
    padding-bottom: 10px
    border-bottom: 1px solid #96C1C3
  &__text
    background: linear-gradient(90deg, #AFDADC 0%, rgba(175, 218, 220, 0.42) 100%)
    padding: 48px
    font-size: 30px
    color: #181818
    line-height: 130%
    font-weight: 600
    text-align: center
@media (max-width: 1600px)
  .coop__text
    font-size: 24px
@media (max-width: 1024px)
  .coop__text
    font-size: 18px
    padding: 24px
@media (max-width: 620px)
  .coop
    padding-top: 60px
  .coop__text
    font-size: 14px
</style>