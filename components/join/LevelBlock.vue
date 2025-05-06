<script setup>
import bg1 from "~/assets/img/level-1.png";
import bg2 from "~/assets/img/level-2.png";
import bg3 from "~/assets/img/level-3.png";
import ModalCall from "../common/ModalCall.vue";
const props = defineProps({
  levelBlockArray: {
    type: Array,
    default: [],
  },
})
const showModal = ref(false);
const openModal = () => {
  showModal.value = true;
};

</script>
<template>
  <div class="level">
    <h2 class="head level__head container">
      <span>Три уровня вступления</span>
    </h2>
    <div
      class="level__item"
      :style="{ backgroundImage: `url(${item.photo})` }"
      v-for="(item, i) in levelBlockArray"
      :key="i"
    >
      <div class="container">
        <h2 class="head level__item-head">
          <span>{{ item.title }}</span>
        </h2>
        <div class="level__item-desk">{{ item.text }}</div>
        <div class="level__item-list" v-for="(list, i) in item.list" :key="i">
          <div class="level__item-i">{{ list.preimushhestvo }}</div>
          
        </div>
        <div class="level__item-price">{{ item.price }}</div>
        <div class="level__btn">
          <a class="btn btn-call" @click="openModal"><span>Вступить</span></a>

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
@media (max-width: 1600px)
  .level
    &__head
      font-size: 40px
    &__item
      &-head
        font-size: 40px
      &-price
        font-size: 40px
@media (max-width: 1024px)
  .level
    padding-top: 100px
    padding-bottom: 100px
    &__head
      font-size: 32px
      margin-bottom: 50px
    &__item
      &-head
        font-size: 32px
      &-desk
        font-size: 20px
      &-i
        font-size: 20px
      &-price
        font-size: 32px
@media (max-width: 620px)
  .level
    padding-top: 50px
    padding-bottom: 50px
    &__head
      font-size: 24px
      text-align: center
      max-width: 100%
      width: 100%
      margin-bottom: 0px
    &__item
      &-head
        font-size: 24px
        margin-bottom: 20px
      &-desk
        font-size: 16px
      &-i
        font-size: 16px
        &::before
          width: 40px
          height: 45px
          background-size: cover
      &-price
        font-size: 24px
    &__btn
      .btn
        max-width: 100%
        width: 100%
</style>