<script setup>
import Logotype from '../common/Logotype.vue';

const props = defineProps({
  companyBlockObject: {
    type: Array,
    default: []
  }
})
</script>
<template>
  <div class="company">
    <div class="container">
      <h2 class="head-h2">Компании с которыми мы сотрудничаем</h2>
      <div class="company__list">
        <Logotype v-for="logo in companyBlockObject" :key="logo.img" :img="logo" />
      </div>
    </div>
  </div>
</template>


<style lang="sass" scoped>
.company
  padding-top: 100px
  .container
    display: flex
    flex-direction: column
    gap: 45px
    align-items: center
  h2
    width: max-content
    border-bottom: 1px solid #96C1C3
    padding-bottom: 10px
  &__list
    display: flex
    flex-wrap: wrap
    justify-content: center
    gap: 40px
@media (max-width: 1600px)
  .company
    padding-top: 50px
    .container
      gap: 20px
    &__list
      gap: 20px
@media (max-width: 1024px)
  .company
    &__list
      gap: 10px
@media (max-width: 620px)
  .company
    h2
      max-width: 100%
      width: 100%
</style>