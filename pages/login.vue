<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useCookie } from "#app";

const inputValue = ref("");
const inputPassword = ref("");
const errorMsg = ref("");

const router = useRouter();

const login = async () => {
  errorMsg.value = "";

  try {
    const response = await $fetch(
      "https://abisrs.ru/wordpress/wp-json/jwt-auth/v1/token",
      {
        method: "POST",
        body: {
          username: inputValue.value,
          password: inputPassword.value,
        },
      }
    );

    console.log("response", response);

    const token = response.token;
    const cookie = useCookie("auth_token");
    cookie.value = token;

    // Перенаправление
    router.push("/account");
  } catch (e) {
    errorMsg.value = "Неверный логин или пароль";
    console.error("Ошибка входа:", e);
  }
};
</script>

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
          <button class="btn" @click.prevent="login"><span>Вход</span></button>
          <p v-if="errorMsg" class="error">{{ errorMsg }}</p>
        </div>
      </div>
    </div>
  </div>
</template>


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
@media (max-width: 1024px)
  .login__head
    font-size: 32px
@media (max-width: 620px)
  .login__head
    font-size: 24px
  .login__content 
    padding: 40px
    gap: 20px
  .login__form
    gap: 20px
</style>