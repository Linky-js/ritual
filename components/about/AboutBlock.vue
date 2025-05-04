<script setup>
import about_1 from '~/assets/img/about-1.png'
import about_2 from '~/assets/img/about-2.png'
import about_3 from '~/assets/img/about-3.png'
const items = [
  {
    title: 'Мировозрение',
    text: '<p>АБИСРС основан на глубоком уважении к человеческой жизни и важности достойного прощания с усопшими. Мы понимаем, что смерть — это неизбежная часть человеческого существования, и считаем своей задачей обеспечить максимально бережное и профессиональное сопровождение этого сложного процесса для родственников и близких.</p>',
    image: about_1,
  },
  {
    title: 'Наши цели',
    text: '<p>Повышение стандартов качества услуг, связанных с бальзамированием и ритуальным сервисом, что включает использование современных технологий и методов.</p> <p>Обеспечение соблюдения моральных и этических стандартов в работе со скорбящими семьями и в процессе оказания услуг.</p> <p>Сбор и распространение актуальной информации о новейших достижениях и тенденциях в области бальзамирования и ритуальных услуг.</p>',
    image: about_2,
  },
  {
    title: 'Мы создаем будущее...',
    text: '<p>Альянс бальзамировщиков и специалистов ритуального сервиса — это первый шаг к созданию сильного профессионального сообщества, способного поднимать уровень ритуальных услуг и менять отношение общества к важнейшей части похоронного дела.</p>',
    image: about_3,
  },
]
</script>
<template>
  <div class="about">
    <div class="container">
      <div class="about__text">
        Альянс бальзамировщиков и специалистов ритуального сервиса представляет собой уникальную платформу, которая
        объединяет профессионалов, стремящихся к повышению стандартов своей деятельности.
      </div>
    </div>
    <div class="about__list">
      <div class="about__item" v-for="(item, index) in items" :key="index" :style="{ backgroundImage: `url(${item.image})` }">
        <div class="container">
          <div class="about__item-content">
            <div class="about__item-head head"><span>{{ item.title }}</span></div>
            <div class="about__item-text" v-html="item.text"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="sass" scoped>
.about__text
  padding: 50px 0
  text-align: center
  font-size: 35px
  font-family: "Alethia Pro"
  font-style: italic
  line-height: 120%
.about__list
  display: flex
  flex-direction: column
  gap: 50px
.about__item
  padding: 50px 0
  width: 100%
  min-height: 600px
  display: flex
  align-items: center
  justify-content: center
  background-size: contain
  background-repeat: no-repeat
  &:nth-child(1)
    background-position: center left
    
  &:nth-child(2)
    background-position: center right
  &:nth-child(3)
    background-position: center left
    .about__item-content
      display: flex
      flex-direction: column-reverse
      gap: 50px
    .about__item-head
      border-bottom: none
  &:nth-child(odd)
    .container
      display: flex
      flex-direction: row-reverse
  &-head
    padding-bottom: 20px
    margin-bottom: 20px
    border-bottom: 2px solid #96C1C3
    width: max-content
    font-size: 48px
  &-text
    display: flex
    flex-direction: column
    gap: 10px
    font-size: 20px
    line-height: 130%
    font-weight: 500
    z-index: 2
    position: relative
    max-width: 700px
  
</style>