<script setup>

const props = defineProps({
  aboutBlockObject: {
    type: Object,
    default: {}
  }
})
onMounted(() => {
  console.log('aboutBlockObject', props.aboutBlockObject);
})

</script>
<template>
  <div class="about">
    <div class="container">
      <div class="about__text">
        {{ aboutBlockObject.text }}
      </div>
    </div>
    <div class="about__list">
      <div class="about__item" v-for="(item, index) in aboutBlockObject.items" :key="index" :style="{ backgroundImage: `url(${item.image})` }">
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