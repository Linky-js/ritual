<script setup>
import bg1 from "~/assets/img/level-1.png";
import bg2 from "~/assets/img/level-2.png";
import bg3 from "~/assets/img/level-3.png";
import ModalCall from "../common/ModalCall.vue";
const levelList = [
  {
    bg: bg1,
    title: 'Уровень 1',
    text: 'При вступлении в первый уровень АБИСРС ваша профессиональная информация будет автоматически отображаться в реестре специалистов. Профиль будет включать информацию о квалификации, опыте и предоставляемых услугах с возможностью редактирования. Это обеспечит видимость среди коллег и потенциальных клиентов, а также позволит получить доступ к базовым ресурсам и информационным продуктам АБИСРС по сфере ритуальных услуг. Информационные продукты охватывают теоретические аспекты необходимые для успешной работы в данной сфере.',
    list: [
      {
        item1: 'Отображение Вашей информации интегрировано в АБИСРС',
        item2: 'Доступ к основным ресурсам и материалам (онлайн-курсы, вебинары, форумы)',
      }
    ],
    price: '5000 ₽',
  },
  {
    bg: bg2,
    title: 'Уровень 2',
    text: 'При вступлении в второй уровень АБИСРС ваша профессиональная информация будет автоматически отображаться в реестре специалистов. Профиль будет включать информацию о квалификации, опыте и предоставляемых услугах с возможностью редактирования. Это обеспечит видимость среди коллег и потенциальных клиентов, а также позволит получить доступ к базовым ресурсам и информационным продуктам АБИСРС по сфере ритуальных услуг. Информационные продукты охватывают теоретические аспекты необходимые для успешной работы в данной сфере, помимо этого, для специалистов второго уровня открываются дополнительные материалы, которые помогут повысить качество знаний и предоставляемых услуг. Участие в закрытых мероприятиях, таких как семинары, конференции и мастер-классы, также входит в второй уровень и станет возможностью для нетворкинга участников ',
    list: [
      {
        item1: 'Отображение Вашей информации интегрировано в АБИСРС',
        item2: 'Доступ к основным ресурсам и материалам (онлайн-курсы, вебинары, форумы)',
        item3: 'Расширенный доступ к материалам и дополнительным ресурсам',
        item4: 'Доступ к закрытым мероприятиям',
      }
    ],
    price: '10 000 ₽',
  },
  {
    bg: bg3,
    title: 'Уровень 3',
    text: 'При вступлении в третий уровень АБИСРС ваша профессиональная информация будет автоматически отображаться в реестре специалистов. Профиль будет включать информацию о квалификации, опыте и предоставляемых услугах с возможностью редактирования. Это обеспечит видимость среди коллег и потенциальных клиентов, а также позволит получить доступ к базовым ресурсам и информационным продуктам АБИСРС по сфере ритуальных услуг. Информационные продукты охватывают теоретические аспекты необходимые для успешной работы в данной сфере, помимо этого, для специалистов второго уровня открываются дополнительные материалы, которые помогут повысить качество знаний и предоставляемых услуг. Участие в закрытых мероприятиях, таких как семинары, конференции и мастер-классы, также входит в второй уровень и станет возможностью для нетворкинга участников. Помимо этого, на третьем уровне будет возможно продвижение ваших услуг в поиске',
    list: [
      {
        item1: 'Отображение Вашей информации интегрировано в АБИСРС',
        item2: 'Доступ к основным ресурсам и материалам (онлайн-курсы, вебинары, форумы)',
        item3: 'Расширенный доступ к материалам и дополнительным ресурсам',
        item4: 'Доступ к закрытым мероприятиям',
        item5: 'Продвижение ваших услуг',
      }
    ],
    price: '15 000 ₽',
  },
]
const showModal = ref(false)
const openModal = () => {
  showModal.value = true
}
</script>
<template>
  <div class="level">
    <h2 class="head level__head container"><span>Три уровня вступления</span></h2>
    <div class="level__item" :style="{ backgroundImage: `url(${item.bg})` }" v-for="(item, i) in levelList" :key="i">
      <div class="container">
        <h2 class="head level__item-head"><span>{{ item.title }}</span></h2>
        <div class="level__item-desk">{{ item.text }}</div>
        <div class="level__item-list" v-for="(list, i) in item.list" :key="i">
          <div class="level__item-i">{{ list.item1 }}</div>
          <div class="level__item-i">{{ list.item2 }}</div>
          <div class="level__item-i" v-if="list.item3">{{ list.item3 }}</div>
          <div class="level__item-i" v-if="list.item4">{{ list.item4 }}</div>
          <div class="level__item-i" v-if="list.item5">{{ list.item5 }}</div>
        </div>
        <div class="level__item-price">{{ item.price }}</div>
        <div class="level__btn">
          <a class="btn btn-call" @click="openModal = true"><span>Вступить</span></a>
        </div>
      </div>
    </div>
  </div>
  <ModalCall v-if="showModal" @close="showModal = false" />
</template>
<style lang="sass" scoped>
.level
  padding-top: 150px
  padding-bottom: 150px
  &__head
    width: max-content
    margin: 0 auto
    margin-bottom: 100px
    font-size: 45px
    line-height: 130%
  &__item
    height: auto
    display: flex
    flex-direction: column
    align-items: center
    justify-content: center
    gap: 45px
    padding: 50px 0
    background-size: cover
    background-position: center
    background-repeat: no-repeat
    &-head
      font-size: 45px
      line-height: 130%
      width: max-content
      margin: 0 auto
      margin-bottom: 50px
    &-desk
      font-size: 25px
      color: #181818
      line-height: 130%
      font-weight: 600
      text-align: center
      margin-bottom: 15px
    &-list
      display: flex
      flex-direction: column
      gap: 15px
    &-i 
      font-size: 25px
      line-height: 130%
      color: #181818
      text-align: center
      font-weight: 600
      position: relative
      display: flex
      align-items: center
      flex-direction: column
      gap: 15px
      &::before
        content: ''
        width: 55px
        height: 60px
        display: inline-block
        background: url('../../assets/img/check-level.svg') no-repeat center
    &-price
      font-size: 48px
      text-align: center
      width: max-content
      position: relative
      line-height: 130%
      color: #181818
      margin: 0 auto
      font-family: "Alethia Pro"
      font-style: italic
      z-index: 2
      margin-top: 50px
      &::before
        content: ''
        width: 100%
        height: 100%
        z-index: -1
        position: absolute
        top: 0
        left: 0
        background: #B3DCDE
        filter: blur(45px)
        border-radius: 50%
  &__btn
    display: flex
    align-items: center
    justify-content: center
    margin-top: 50px
    .btn
      min-width: 300px
</style>