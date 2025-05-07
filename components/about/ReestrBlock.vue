
<script setup>
import Logotype from '../common/Logotype.vue';

const props = defineProps({
  reestrBlockObject: {
    type: Array,
    default: []
  }
})
</script>
<template>
  <div class="company">
    <div class="container">
      <h2 class="head-h2">Реестр наших специалистов</h2>
      <p>Реестр служит надежным источником информации о квалифицированных специалистах, их опыте и компетенциях, что позволяет людям в трудный момент сделать осознанный выбор и доверить важную миссию настоящим профессионалам.</p>
      <div class="company__list">
        <Logotype v-for="logo in reestrBlockObject.kartinki" :key="logo.img" :img="logo" />
      </div>
      <div class="company__btn">
        <NuxtLink to="/join" class="btn"><span>Присоединиться к АБИСРС как специалист</span></NuxtLink>
      </div>
    </div>
  </div>
</template>


<style lang="sass" scoped>
.company
  padding-top: 100px
  padding-bottom: 100px
  .container
    display: flex
    flex-direction: column
    gap: 45px
    align-items: center
  h2
    width: max-content
    border-bottom: 1px solid #96C1C3
    padding-bottom: 10px
  p 
    font-size: 25px
    line-height: 130%
    text-align: center
    font-weight: 600
  &__list
    display: flex
    flex-wrap: wrap
    justify-content: center
    gap: 40px
  &__btn
    display: flex
    align-items: center
    justify-content: center
    margin-top: 30px
@media (max-width: 1600px)
  .company
    padding-top: 50px
    p
      font-size: 20px
    &__list
      gap: 20px
@media (max-width: 1024px)
  .company
    .container
      gap: 20px
    p
      font-size: 18px
    &__list
      gap: 10px
@media (max-width: 620px)
  .company
    p 
      font-size: 16px
    h2
      max-width: 100%
      width: 100%
</style>