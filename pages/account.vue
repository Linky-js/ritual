<script setup>
import { onMounted, onBeforeUnmount, ref } from "vue";
import IMask from 'imask'

const inputName = ref("");
const inputEmail = ref("");
const inputPhone = ref("");
const inputCity = ref("");
const inputWork = ref("");
const inputOrganization = ref("");
const inputLevel = ref("");
const inputDop = ref("");
const successForm = ref(false);
const phoneRef = ref(null);
onMounted(() => {
  if (phoneRef.value) {
    IMask(phoneRef.value, {
      mask: '+{7} (000) 000-00-00',
      lazy: false,
    })
  }
});


const activeTab = ref(0)

import img from '../../assets/img/def-spec.jpg'
const matList = [
  {
    img: img,
    title: 'Название Название'
  },
  {
    img: img,
    title: 'Название Название'
  },
  {
    img: img,
    title: 'Название Название'
  },
  {
    img: img,
    title: 'Название Название'
  },
]

</script>
<template>
  <div class="acc">
    <div class="container">
      <div class="acc__side">
        <div class="acc__side-item" :class="{ active: activeTab === 0 }" @click="activeTab = 0">
          Профиль
        </div>
        <div class="acc__side-item" :class="{ active: activeTab === 1 }" @click="activeTab = 1">
          Бесплатные материалы
        </div>
        <div class="acc__side-item" :class="{ active: activeTab === 2 }" @click="activeTab = 2">
          Платные материалы
        </div>
      </div>
      <div class="acc__content">
        <div v-show="activeTab === 0" class="acc__slide">
          <h2 class="acc__head">Профиль</h2>
          <form class="acc__list">
            <div class="acc__box">
              <div class="box-avatar">
                <img src="~/assets/img/def-spec.jpg" alt="avatar" />
                <input type="file" id="photo" @change="onFileChange" hidden class="hidden-input" required />
                <label for="photo">
                  Загрузить фото
                </label>
              </div>
              <div class="acc__box-list">
                <div class="acc__box-i">
                  <div class="box-input">
                    <input v-model="inputName" type="text" id="name" placeholder=" " ref="inputRef" required />
                    <label :class="{ hidden: inputName.trim() !== '' }" for="name">ФИО</label>
                  </div>
                  <div class="box-input">
                    <input v-model="inputEmail" type="text" id="email" placeholder=" " ref="inputRef" required />
                    <label :class="{ hidden: inputEmail.trim() !== '' }" for="email">Email</label>
                  </div>
                </div>
                <div class="acc__box-i">
                  <div class="box-input">
                    <input v-model="inputPhone" type="text" id="phone" placeholder=" " ref="phoneRef" required />
                    <label :class="{ hidden: inputPhone.trim() !== '' }" for="phone">Номер телефона</label>
                  </div>
                  <div class="box-input">
                    <input v-model="inputCity" type="text" id="city" placeholder=" " ref="inputRef" required />
                    <label :class="{ hidden: inputCity.trim() !== '' }" for="city">Город</label>
                  </div>
                </div>
                <div class="acc__box-i">
                  <div class="box-input">
                    <input v-model="inputWork" type="text" id="work" placeholder=" " ref="inputRef" required />
                    <label :class="{ hidden: inputWork.trim() !== '' }" for="work">Род деятельности</label>
                  </div>
                  <div class="box-image">
                    <input type="file" id="photo" @change="onFileChange" hidden class="hidden-input" required />
                    <label for="photo">
                      <svg width="38" height="37" viewBox="0 0 38 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                          d="M2.35 22.2001C2.84065 22.2001 3.31121 22.395 3.65815 22.7419C4.00509 23.0889 4.2 23.5594 4.2 24.0501V31.4501C4.2 31.9407 4.39491 32.4113 4.74185 32.7582C5.0888 33.1052 5.55935 33.3001 6.05 33.3001H31.95C32.4407 33.3001 32.9112 33.1052 33.2581 32.7582C33.6051 32.4113 33.8 31.9407 33.8 31.4501V24.0501C33.8 23.5594 33.9949 23.0889 34.3419 22.7419C34.6888 22.395 35.1594 22.2001 35.65 22.2001C36.1407 22.2001 36.6112 22.395 36.9581 22.7419C37.3051 23.0889 37.5 23.5594 37.5 24.0501V31.4501C37.5 32.922 36.9153 34.3337 35.8744 35.3745C34.8336 36.4154 33.422 37.0001 31.95 37.0001H6.05C4.57805 37.0001 3.16638 36.4154 2.12556 35.3745C1.08473 34.3337 0.5 32.922 0.5 31.4501V24.0501C0.5 23.5594 0.69491 23.0889 1.04185 22.7419C1.38879 22.395 1.85935 22.2001 2.35 22.2001ZM17.6921 0.542143C18.039 0.195322 18.5094 0.000488281 19 0.000488281C19.4906 0.000488281 19.961 0.195322 20.3079 0.542143L29.558 9.79214C29.8949 10.1411 30.0814 10.6084 30.0772 11.0934C30.073 11.5785 29.8784 12.0425 29.5354 12.3855C29.1924 12.7285 28.7284 12.9231 28.2433 12.9273C27.7583 12.9315 27.291 12.745 26.942 12.408L19 4.46599L11.058 12.408C10.709 12.745 10.2417 12.9315 9.75666 12.9273C9.27159 12.9231 8.80759 12.7285 8.46459 12.3855C8.12158 12.0425 7.92702 11.5785 7.9228 11.0934C7.91859 10.6084 8.10506 10.1411 8.44205 9.79214L17.6921 0.542143Z"
                          fill="black" />
                        <path fill-rule="evenodd" clip-rule="evenodd"
                          d="M2.35 22.2001C2.84065 22.2001 3.31121 22.395 3.65815 22.7419C4.00509 23.0889 4.2 23.5594 4.2 24.0501V31.4501C4.2 31.9407 4.39491 32.4113 4.74185 32.7582C5.0888 33.1052 5.55935 33.3001 6.05 33.3001H31.95C32.4407 33.3001 32.9112 33.1052 33.2581 32.7582C33.6051 32.4113 33.8 31.9407 33.8 31.4501V24.0501C33.8 23.5594 33.9949 23.0889 34.3419 22.7419C34.6888 22.395 35.1594 22.2001 35.65 22.2001C36.1407 22.2001 36.6112 22.395 36.9581 22.7419C37.3051 23.0889 37.5 23.5594 37.5 24.0501V31.4501C37.5 32.922 36.9153 34.3337 35.8744 35.3745C34.8336 36.4154 33.422 37.0001 31.95 37.0001H6.05C4.57805 37.0001 3.16638 36.4154 2.12556 35.3745C1.08473 34.3337 0.5 32.922 0.5 31.4501V24.0501C0.5 23.5594 0.69491 23.0889 1.04185 22.7419C1.38879 22.395 1.85935 22.2001 2.35 22.2001ZM17.6921 0.542143C18.039 0.195322 18.5094 0.000488281 19 0.000488281C19.4906 0.000488281 19.961 0.195322 20.3079 0.542143L29.558 9.79214C29.8949 10.1411 30.0814 10.6084 30.0772 11.0934C30.073 11.5785 29.8784 12.0425 29.5354 12.3855C29.1924 12.7285 28.7284 12.9231 28.2433 12.9273C27.7583 12.9315 27.291 12.745 26.942 12.408L19 4.46599L11.058 12.408C10.709 12.745 10.2417 12.9315 9.75666 12.9273C9.27159 12.9231 8.80759 12.7285 8.46459 12.3855C8.12158 12.0425 7.92702 11.5785 7.9228 11.0934C7.91859 10.6084 8.10506 10.1411 8.44205 9.79214L17.6921 0.542143Z"
                          fill="url(#paint0_linear_183_216)" />
                        <path fill-rule="evenodd" clip-rule="evenodd"
                          d="M19.0004 0C19.491 0 19.9616 0.19491 20.3085 0.541852C20.6555 0.888795 20.8504 1.35935 20.8504 1.85V24.05C20.8504 24.5407 20.6555 25.0112 20.3085 25.3581C19.9616 25.7051 19.491 25.9 19.0004 25.9C18.5097 25.9 18.0392 25.7051 17.6922 25.3581C17.3453 25.0112 17.1504 24.5407 17.1504 24.05V1.85C17.1504 1.35935 17.3453 0.888795 17.6922 0.541852C18.0392 0.19491 18.5097 0 19.0004 0Z"
                          fill="black" />
                        <path fill-rule="evenodd" clip-rule="evenodd"
                          d="M19.0004 0C19.491 0 19.9616 0.19491 20.3085 0.541852C20.6555 0.888795 20.8504 1.35935 20.8504 1.85V24.05C20.8504 24.5407 20.6555 25.0112 20.3085 25.3581C19.9616 25.7051 19.491 25.9 19.0004 25.9C18.5097 25.9 18.0392 25.7051 17.6922 25.3581C17.3453 25.0112 17.1504 24.5407 17.1504 24.05V1.85C17.1504 1.35935 17.3453 0.888795 17.6922 0.541852C18.0392 0.19491 18.5097 0 19.0004 0Z"
                          fill="url(#paint1_linear_183_216)" />
                        <defs>
                          <linearGradient id="paint0_linear_183_216" x1="19" y1="0.000488281" x2="19" y2="37.0001"
                            gradientUnits="userSpaceOnUse">
                            <stop stop-color="#59ABAF" />
                            <stop offset="1" stop-color="#10595C" />
                          </linearGradient>
                          <linearGradient id="paint1_linear_183_216" x1="19.0004" y1="0" x2="19.0004" y2="25.9"
                            gradientUnits="userSpaceOnUse">
                            <stop stop-color="#59ABAF" />
                            <stop offset="1" stop-color="#10595C" />
                          </linearGradient>
                        </defs>
                      </svg>
                      <p>{{ fileName || "Удоств. о квалификации" }}</p>
                    </label>
                  </div>
                </div>
                <div class="acc__box-i">
                  <div class="box-input">
                    <input v-model="inputOrganization" type="text" id="organization" placeholder=" " ref="inputRef" />
                    <label :class="{ hidden: inputOrganization.trim() !== '' }" for="organization">Наименование
                      организации</label>
                  </div>
                  <div class="box-input">
                    <input v-model="inputLevel" type="text" id="level" placeholder=" " ref="inputRef" />
                    <label :class="{ hidden: inputLevel.trim() !== '' }" for="level">Уровень вступления</label>
                  </div>
                </div>
              </div>
            </div>
            <div class="box-input box-input__textarea">
              <textarea v-model="inputDop" name="dop" id="dop" cols="30"></textarea>
              <label :class="{ hidden: inputDop.trim() !== '' }" for="dop">Дополнительная информация о себе</label>
            </div>
          </form>
          <div class="acc__btns">
            <button class="btn"><span>Редактировать</span></button>
            <button class="btn"><span>Сохранить</span></button>
          </div>
        </div>
        <div v-show="activeTab === 1" class="acc__slide">
          <h2 class="acc__head">Бесплатные материалы</h2>
          <div class="mat__list">
            <div class="mat__item" v-for="(item, index) in matList" :key="index">
              <img :src="item.img" :alt="item.title" />
              <h3>{{ item.title }}</h3>
            </div>
          </div>
        </div>
        <div v-show="activeTab === 2" class="acc__slide">
          <h2 class="acc__head">Платные материалы</h2>
          <div class="mat__list">
            <div class="mat__item" v-for="(item, index) in matList" :key="index">
              <img :src="item.img" :alt="item.title" />
              <h3>{{ item.title }}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>



<style lang="sass" scoped>
.acc
  padding: 50px 0 100px
  &__head
    margin-bottom: 40px
  .container
    display: flex
    gap: 50px
  &__side
    display: flex
    flex-direction: column
    max-width: 300px
    width: 100%
    flex-shrink: 0
    gap: 10px
    &-item
      display: flex
      align-items: center
      justify-content: flex-start
      padding: 15px
      border-radius: 7px
      font-size: 18px
      line-height: 130%
      transition: .3s all
      cursor: pointer
      background: #B1DBDD
      &.active, &:hover
        background: #196064
        color: #fff

  &__content 
    width: 100%
.box-input__textarea
  grid-column: 1 / 3
  width: 100%
  position: relative
.box-image
  input
    position: absolute
    opacity: 0
    z-index: -1
    width: 0
    height: 0
  label
    display: flex
    align-items: center
    gap: 10px
    padding: 15px
    border: 1px solid #d7f2f3
    border-radius: 15px
    font-size: 18px
    line-height: 130%
    width: 100%
    max-width: 100%
    transition: .3s all
    cursor: pointer
    svg
      width: 30px
      height: 30px
      path
        transition: .3s all
    &:hover
      border-color: #196064
    p
      color: #b9b9b9
.box-avatar 
  border: 1px solid #196064
  border-radius: 15px
  max-width: 250px
  width: 100%
  overflow: hidden
  position: relative
  flex-shrink: 0
  height: auto
  display: flex
  flex-direction: column
  background: #fff
  img 
    height: 230px
    width: 100%
    object-fit: cover
    border-radius: 15px
  label
    margin-top: auto
    font-size: 16px
    line-height: 130%
    color: #fff
    text-align: center
    display: block
    padding: 10px 0
    cursor: pointer
    background: #196064
.acc__box
  display: flex
  gap: 20px
  margin-bottom: 20px
  &-list
    display: flex
    flex-wrap: wrap
    width: 100%
    gap: 20px
  &-i
    max-width: 390px
    width: 100%
    display: flex
    flex-direction: column
    gap: 20px
.acc__btns
  display: flex
  align-items: center
  justify-content: flex-end
  gap: 20px
  margin-top: 30px
.mat
  &__list
    display: grid
    grid-template-columns: repeat(3, 1fr)
    gap: 20px
  &__item
    display: flex
    flex-direction: column
    transition: .3s all
    img
      width: 100%
      height: 350px
      object-fit: cover
      border-radius: 15px
      margin-bottom: 15px
    h3
      font-size: 25px
      color: #181818
      line-height: 130%
      font-weight: 600
      text-align: center
      transition: .3s all
    &:hover
      transform: scale(1.03)
      h3 
        color: #96C1C3
</style>