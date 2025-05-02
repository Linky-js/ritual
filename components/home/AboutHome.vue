<script setup>

const props = defineProps({
  aboutHomeObject: {
    type: Object,
    default: {
      
    }
  }
})
const text =
  "Альянс бальзамировщиков и специалистов ритуального сервиса – это объединение профессионалов по всей России, чья деятельность посвящена организации похорон. Специалисты АБИСРС обладают знаниями и навыками по подготовке необходимой документации, траурной флористике, проведении церемоний прощаний и косметической подготовке тела, что позволяет обеспечить достойные похороны для ваших близких <br /><br />Специалисты альянса помогают семьям в трудный момент утраты, облегчают бремя организации похорон и оказывают психологическую поддержку, позволяя родственникам сосредоточиться на прощании с близким человеком.";
</script>
<template>
  <div class="about">
    <div class="container">
      <div class="about__content" v-html="aboutHomeObject.text"></div>
    </div>
  </div>
</template>
<style lang="sass" scoped>
.about
    padding-bottom: 82px
.about__content
    display: flex
    max-width: 1200px
    color: #000

    font-family: Montserrat
    font-size: 25px
    font-style: normal
    font-weight: 400
    line-height: 153.688%
    position: relative
    padding-left: 30px
    &::before
        content: ''
        width: 2px
        height: 110%
        background-color: #1E6568
        position: absolute
        left: 0
        top: 50%
        transform: translateY(-50%)
</style>