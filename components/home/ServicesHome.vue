<script setup>

const props = defineProps({
  servicesHomeObject: {
    type: Object,
    default: {

    }
  }
})
</script>
<template>
  <div class="services">
    <div class="container">
      <div class="services__content">
        <h2 class="head-h2">{{ servicesHomeObject.head }}</h2>
        <div class="subhead" v-html="servicesHomeObject.text"></div>
      </div>
      <div class="services__dop-content">
        <p>
          {{ servicesHomeObject.quote }}
        </p>
      </div>
    </div>
  </div>
</template>
<style lang="sass" scoped>
.services
  background: url('assets/img/services-about.png') left top
  background-repeat: no-repeat
.services__content
  display: flex
  flex-direction: column
  gap: 76px
  align-items: flex-end
  padding: 79px 0 54px
.subhead
  color: #000
  text-align: right
  font-family: Montserrat
  font-size: 25px
  font-style: normal
  font-weight: 600
  line-height: 153.688%
  max-width: 948px
.head-h2
  width: 100%
  max-width: 948px
  text-align: center
  padding-bottom: 16px
  border-bottom: 1px solid #96C1C3
.services__dop-content
  margin-top: 128px
  color: #000
  text-align: center
  font-family: "Alethia Pro"
  font-size: 30px
  font-style: italic
  font-weight: 400
  line-height: 153.688%
  width: 100%
  border-bottom: 1px solid #96C1C3
  border-top: 1px solid #96C1C3
  display: flex
  justify-content: center
  padding: 17px 0
  p 
    max-width: 837px
@media (max-width: 1600px)
  .head-h2
    max-width: max-content
    padding-bottom: 10px
  .subhead
    font-size: 18px
  .services__content
    gap: 30px
  .services__dop-content
    font-size: 22px
@media (max-width: 620px)
  .services
    height: 800px
    background-position: center bottom
    background-size: contain
    padding: 50px 0
    &__content
      flex-direction: column
      align-items: center
      padding: 0
  .subhead
    text-align: center
    font-size: 16px
  .services__dop-content
    margin-top: 20px
</style>