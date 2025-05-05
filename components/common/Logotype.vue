<script setup>
defineProps({
  img: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="logo">
    <img :src="img" alt="">
  </div>
</template>


<style lang="sass" scoped>
.logo
  display: flex
  align-items: center
  width: 202px
  height: 202px
  border-radius: 50%
  border: 2px solid #1B6265
  background: #fff
  padding: 12px
  overflow: hidden
  img
    width: 100%
    height: auto

</style>