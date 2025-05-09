<script setup>
import { ref } from "vue";
import ModalCall from "../common/ModalCall.vue";

import bgmain from "../../assets/img/bg-main.jpg";
import { NuxtLink } from "#components";

const props = defineProps({
  mainHomeObject: {
    type: Object,
    default: {},
  },
});

const showModal = ref(false);

const openModal = () => {
  showModal.value = true;
};
</script>
<template>
  <div
    class="main"
    :style="{ background: `url(${bgmain}) center top / cover no-repeat` }"
  >
    <div class="container">
      <h2 class="head">
        <span v-html="mainHomeObject.title"></span>
      </h2>
      <div class="main__btns">
        <NuxtLink to="/specialists" class="btn"
          ><span>{{ mainHomeObject.buttonLeft }}</span></NuxtLink
        >
        <NuxtLink class="btn-border btn-call" to="/join"
          ><span>{{ mainHomeObject.buttonRight }}</span>
        </NuxtLink>
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
@media (max-width: 1024px)
  .main
    padding: 120px 0
  .main__btns
    gap: 10px
  .head
    font-size: 26px
@media (max-width: 620px)
  .main
    padding: 70px 0
  .head
    font-size: 20px
  .main__btns
    flex-direction: column
    margin-top: 50px
    .btn, .btn-border
      max-width: 100%
      width: 100%
</style>