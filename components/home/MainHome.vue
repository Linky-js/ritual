<script setup>
import { ref } from 'vue'
import ModalCall from '../common/ModalCall.vue'

import bgmain from '../../assets/img/bg-main.jpg'
import { NuxtLink } from '#components'

const props = defineProps({
  mainHomeObject: {
    type: Object,
    default: {
      
    }
  }
}
)

const showModal = ref(false)

const openModal = () => {
  showModal.value = true
}
</script>
<template>
  <div class="main" :style="{ background: `url(${bgmain}) center top / cover no-repeat` }">
    <div class="container">
      <h2 class="head">
        <span v-html="mainHomeObject.title"></span>
      </h2>
      <div class="main__btns">
        <NuxtLink to="/specialists" class="btn"><span>{{ mainHomeObject.buttonLeft }}</span></NuxtLink>
        <NuxtLink class="btn-border btn-call" @click="openModal"><span>{{ mainHomeObject.buttonRight }}</span></NuxtLink>
      </div>
    </div>
  </div>
  <ModalCall v-if="showModal" @close="showModal = false" />
</template>
<style lang="sass" scoped>
.main
  padding: 184px 0
  &__btns
    display: flex
    align-items: center
    gap: 20px
    margin-top: 150px
</style>