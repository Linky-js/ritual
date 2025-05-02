<template>
  <div class="login">
    <div class="container">
      <div class="login__content">
        <h2 class="login__head">
          <span>Личный кабинет</span>
        </h2>
        <div class="login__form">
          <div class="box-input">
            <input v-model="inputValue" type="text" id="login" placeholder=" " ref="inputRef" />
            <label :class="{ hidden: inputValue.trim() !== '' }" for="login">Логин</label>
          </div>
          <div class="box-input">
            <input v-model="inputPassword" type="password" id="password" placeholder=" " ref="inputRef" />
            <label :class="{ hidden: inputPassword.trim() !== '' }" for="password">Пароль</label>
          </div>
          <button class="btn"><span>Вход</span></button>
        </div>
      </div>
    </div>
  </div>
  <ModalCall />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import ModalCall from '~/components/common/ModalCall.vue'

const inputValue = ref('')
const inputPassword = ref('')
const inputRef = ref()



</script>

<style lang="sass" scoped>
.container
  display: flex
  align-items: center
  justify-content: center
  height: calc( 100vh - 355px )
.login__content
  background: #fff
  max-width: 650px
  width: 100%
  border-radius: 30px
  padding: 80px
  display: flex
  align-items: center
  justify-content: center
  flex-direction: column
  gap: 40px
  box-shadow: 0px 15px 20px rgba(0, 0, 0, 0.05)
.login__head
  text-align: center
  font-size: 48px
.login__form
  display: flex
  flex-direction: column
  gap: 25px
  width: 100%
</style>