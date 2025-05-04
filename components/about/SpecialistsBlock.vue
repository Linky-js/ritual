<template>
  <div class="spec">
    <div class="container">
      <div class="spec__head">
        <h2 class="head-h2">Наши специалисты</h2>
        <p>Специалисты, объединённые в альянс, отличаются тем, что проходят строгий отбор и придерживаются высоких
          стандартов качества. Они регулярно повышают квалификацию, участвуют в обучающих программах и обмениваются
          опытом с коллегами. Это позволяет им предоставлять более комплексные и качественные услуги. Наши специалисты
          имеют поддержку сообщества и возможность совместной работы над особыми запросами.</p>
      </div>
      <div class="spec__title2">Клиенты могут быть уверены, что получат чуткое и профессиональное сопровождение</div>
      <div class="spec__list">
        <SpecItem v-for="(spec, index) in specialists" :key="index" :name="spec.name" :description="spec.description"
          :img="spec.img" />

      </div>
      <div class="spec__btn">
        <NuxtLink :to="'/specialists'" class="btn"><span>Найти спецалиста рядом</span></NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import SpecItem from '~/components/common/SpecItem.vue'
import def_spec from '~/assets/img/def-spec.jpg'
const specialists = [
  {
    name: 'Наталья Иванова',
    description: 'Психолог, стаж 10 лет',
    img: def_spec,
  },
  {
    name: 'Игорь Смирнов',
    description: 'Ритуальный агент',
    img: def_spec,
  },
  {
    name: 'Игорь Смирнов',
    description: 'Ритуальный агент',
    img: def_spec,
  },
  {
    name: 'Игорь Смирнов',
    description: 'Ритуальный агент',
    img: def_spec,
  },
]
</script>

<style lang="sass" scoped>
.spec
  padding-top: 150px
  &__title2
    color: #155D61
    font-size: 36px
    max-width: 1085px
    margin: 16px auto 0
    text-align: center
    font-family: "Alethia Pro", sans-serif
    font-style: italic
  &__head
    padding-bottom: 16px
    display: flex
    flex-direction: column
    gap: 20px
    align-items: center
    h2 
      border-bottom: 1px solid #96C1C3
      max-width: max-content
    p
      font-size: 22px
      line-height: 130%
      font-weight: 500
      width: 100%
      text-align: center
  &__list
    display: grid
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr))
    gap: 20px
    margin-top: 40px
  &__btn
    display: flex
    align-items: center
    justify-content: center
    margin-top: 35px
</style>