<script setup>
import { onMounted, ref } from "vue"
import { useCookie } from "#app"


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
import defaultAvatar from "~/assets/img/def-spec.jpg"

const readOnly = ref(true)
const inputName = ref("")
const inputPhone = ref("")
const inputCity = ref("")
const inputWork = ref("")
const inputOrganization = ref("")
const inputLevel = ref("")
const inputDop = ref("")
const successForm = ref(false)
const srcPhoto = ref(null)
const phoneRef = ref(null)
const fileName = ref("")
const mediaId = ref(null)

const authToken = useCookie("auth_token")

onMounted(async () => {
  if (!authToken.value) return

  try {
    const user = await $fetch("https://abisrs.ru/wordpress/wp-json/wp/v2/users/me", {
      headers: {
        Authorization: `Bearer ${authToken.value}`,
      },
    })

    console.log("USER", user)

    inputName.value = user.name || ""
    inputPhone.value = user.meta?.phone || ""
    inputCity.value = user.meta?.city || ""
    inputWork.value = user.meta?.occupation || ""
    inputOrganization.value = user.meta?.organization || ""
    inputLevel.value = user.meta?.level || ""
    inputDop.value = user.meta?.extra_info || ""
    srcPhoto.value = user.meta.user_avatar_url || defaultAvatar

  } catch (err) {
    console.error("Ошибка получения профиля:", err)
  }
})
const uploadAvatar = async (file) => {
  const formData = new FormData()
  formData.append("file", file)
  formData.append("title", file.name)

  try {
    const uploaded = await $fetch("https://abisrs.ru/wordpress/wp-json/wp/v2/media", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${authToken.value}`,
      },
      body: formData,
    })

    return uploaded.id // ID медиафайла
  } catch (err) {
    console.error("Ошибка загрузки изображения:", err)
    return null
  }
}
const onFileChange = async (e) => {
  const file = e.target.files[0]
  fileName.value = file.name
  if (!file || !authToken.value) return

  mediaId.value = await uploadAvatar(file)
  if (mediaId.value) {
    // Обновим meta поле
    await $fetch("https://abisrs.ru/wordpress/wp-json/wp/v2/users/me", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${authToken.value}`,
        "Content-Type": "application/json",
      },
      body: {
        meta: {
          user_avatar: mediaId.value,
        },
      },
    })

    // Получаем URL изображения
    const media = await $fetch(`https://abisrs.ru/wordpress/wp-json/wp/v2/media/${mediaId.value}`)
    srcPhoto.value = media.source_url
  }
}

const saveAcc = async () => {
  if (!authToken.value) return

  try {
    const body = {
      name: inputName.value,
      meta: {
        phone: inputPhone.value,
        city: inputCity.value,
        occupation: inputWork.value,
        organization: inputOrganization.value,
        level: inputLevel.value,
        extra_info: inputDop.value,
        user_avatar: mediaId.value
      },
    }

    await $fetch("https://abisrs.ru/wordpress/wp-json/wp/v2/users/me", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${authToken.value}`,
        "Content-Type": "application/json",
      },
      body,
    })

    successForm.value = true
    readOnly.value = true
  } catch (err) {
    console.error("Ошибка сохранения профиля:", err)
  }
}



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
                <img :src="srcPhoto ? srcPhoto : defaultAvatar" alt="avatar" />
                <input :readonly="readOnly" type="file" id="photo" @change="onFileChange" hidden class="hidden-input" required />
                <label for="photo">
                  Загрузить фото
                </label>
              </div>
              <div class="acc__box-list">
                <div class="acc__box-i">
                  <div class="box-input">
                    <input :readonly="readOnly" v-model="inputName" type="text" id="name" placeholder=" " ref="inputRef" required />
                    <label :class="{ hidden: inputName.trim() !== '' }" for="name">ФИО</label>
                  </div>
                  <div class="box-input">
                    <input :readonly="readOnly" v-model="inputOrganization" type="text" id="organization" placeholder=" " ref="inputRef" />
                    <label :class="{ hidden: inputOrganization.trim() !== '' }" for="organization">Наименование
                      организации</label>
                  </div>
                  <div class="box-input">
                    <input :readonly="readOnly" v-model="inputWork" type="text" id="work" placeholder=" " ref="inputRef" required />
                    <label :class="{ hidden: inputWork.trim() !== '' }" for="work">Род деятельности</label>
                  </div>
                </div>
                <div class="acc__box-i">
                  <div class="box-input">
                    <input :readonly="readOnly" v-model="inputPhone" type="text" id="phone" placeholder=" " ref="phoneRef" required />
                    <label :class="{ hidden: inputPhone.trim() !== '' }" for="phone">Номер телефона</label>
                  </div>
                  <div class="box-input">
                    <input :readonly="readOnly" v-model="inputCity" type="text" id="city" placeholder=" " ref="inputRef" required />
                    <label :class="{ hidden: inputCity.trim() !== '' }" for="city">Город</label>
                  </div>
                </div>
              </div>
            </div>
            <div class="box-input box-input__textarea">
              <textarea :readonly="readOnly" v-model="inputDop" name="dop" id="dop" cols="30"></textarea>
              <label :class="{ hidden: inputDop.trim() !== '' }" for="dop">Дополнительная информация о себе</label>
            </div>
          </form>
          <div class="acc__btns">
            <button class="btn" v-show="readOnly" @click="readOnly = false"><span>Редактировать</span></button>
            <button class="btn" @click="saveAcc"><span>Сохранить</span></button>
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