<script setup>
const props = defineProps({
  privacyObject: {
    type: Object,
    default: {}
  }
})
</script>
<template>
  <div class="privacy">
    <div class="container">
      <div class="privacy__text" v-html="privacyObject.content.rendered"></div>
    </div>
  </div>
</template>
<style lang="sass">
.privacy
  padding: 50px 0
.privacy__text
  display: flex
  flex-direction: column
  gap: 10px
  a 
    color: #196064
    text-decoration: underline
  h3 
    font-size: 26px
    font-weight: 500
    line-height: 130%
    margin-top: 10px
  p, li
    font-size: 18px
    line-height: 130%
  ul 
    padding-left: 25px
    li 
      list-style-type: disc
@media (max-width: 1024px)
  .privacy
    padding: 30px 0 
@media (max-width: 620px)
  .privacy
    padding: 20px 0 
    &__text 
      h3 
        font-size: 20px
      p, li 
        font-size: 16px
</style>