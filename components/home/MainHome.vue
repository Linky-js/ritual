<script setup>
import bgmain from '../../assets/img/bg-main.jpg'
</script>
<template>
  <div class="main" :style="{ background: `url(${bgmain}) center top / cover no-repeat` }">
    <div class="container">
      <h2 class="head">
        <span>Потеря близкого человека – это испытание, к которому невозможно
          подготовиться, и в этот сложный период вам нужна поддержка
          профессионалов, готовых взять на себя все заботы по организации
          достойного прощания.</span>
      </h2>
      <div class="main__btns">
        <a href="#" class="btn"><span>Найти спецалиста рядом</span></a>
        <a href="#" class="btn-border"><span>Стать специалистом</span></a>
      </div>
    </div>
  </div>
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