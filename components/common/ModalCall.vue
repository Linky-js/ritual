<template>
  <div class="modal" id="modal-call">
    <div class="modal__content">
      <div class="modal__close">
        <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M2.36629 30.6335C2.46206 30.7294 2.5758 30.8054 2.70099 30.8573C2.82618 30.9092 2.96037 30.936 3.0959 30.936C3.23142 30.936 3.36561 30.9092 3.4908 30.8573C3.61599 30.8054 3.72973 30.7294 3.8255 30.6335L16.4996 17.9594L29.1788 30.6335C29.3723 30.827 29.6347 30.9357 29.9084 30.9357C30.1821 30.9357 30.4445 30.827 30.638 30.6335C30.8315 30.44 30.9402 30.1775 30.9402 29.9039C30.9402 29.6302 30.8315 29.3678 30.638 29.1743L17.9588 16.5002L30.6328 3.821C30.8264 3.6275 30.9351 3.36505 30.9351 3.09139C30.9351 2.81774 30.8264 2.55529 30.6328 2.36178C30.4393 2.16828 30.1769 2.05957 29.9032 2.05957C29.6296 2.05957 29.3671 2.16828 29.1736 2.36178L16.4996 15.041L3.82035 2.36694C3.62307 2.19799 3.3693 2.10971 3.10976 2.11974C2.85022 2.12976 2.60402 2.23736 2.42036 2.42102C2.2367 2.60468 2.12911 2.85088 2.11908 3.11042C2.10906 3.36996 2.19734 3.62372 2.36629 3.821L15.0403 16.5002L2.36629 29.1794C2.17421 29.3727 2.06641 29.634 2.06641 29.9065C2.06641 30.1789 2.17421 30.4403 2.36629 30.6335Z"
            fill="#212121" />
        </svg>

      </div>
      <div class="modal__head">
        <h2>Оставьте заявку на вступление</h2>
        <p>Мы рассмотрим ее в течении дня и свяжемся с вами </p>
      </div>
      <form action="#" class="modal__form">
        <div class="box-input">
          <input v-model="inputName" type="text" id="name" placeholder=" " ref="inputRef" />
          <label :class="{ hidden: inputName.trim() !== '' }" for="name">ФИО</label>
        </div>
        <div class="box-input">
          <input v-model="inputEmail" type="text" id="email" placeholder=" " ref="inputRef" />
          <label :class="{ hidden: inputEmail.trim() !== '' }" for="email">Email</label>
        </div>
        <div class="box-input">
          <input v-model="inputPhone" type="text" id="phone" placeholder=" " ref="inputRef" />
          <label :class="{ hidden: inputPhone.trim() !== '' }" for="phone">Номер телефона</label>
        </div>
        <div class="box-input">
          <input v-model="inputCity" type="text" id="city" placeholder=" " ref="inputRef" />
          <label :class="{ hidden: inputCity.trim() !== '' }" for="city">Город</label>
        </div>
        <div class="box-input">
          <input v-model="inputWork" type="text" id="work" placeholder=" " ref="inputRef" />
          <label :class="{ hidden: inputWork.trim() !== '' }" for="work">Род деятельности</label>
        </div>
        <div class="box-input">
          <input v-model="inputPhoto" type="text" id="work" placeholder=" " ref="inputRef" />
          <label :class="{ hidden: inputPhoto.trim() !== '' }" for="work">Удоств. о квалификации</label>
        </div>
        <div class="box-input">
          <input v-model="inputOrganization" type="text" id="organization" placeholder=" " ref="inputRef" />
          <label :class="{ hidden: inputOrganization.trim() !== '' }" for="organization">Наименование
            организации</label>
        </div>
        <div class="box-input">
          <input v-model="inputLevel" type="text" id="level" placeholder=" " ref="inputRef" />
          <label :class="{ hidden: inputLevel.trim() !== '' }" for="level">Уровень вступления</label>
        </div>
        <div class="box-input box-input__textarea">
          <textarea v-model="inputDop" name="dop" id="dop" cols="30"></textarea>
          <label :class="{ hidden: inputDop.trim() !== '' }" for="dop">Дополнительная информация о себе</label>
        </div>
        <div class="check">
          <input type="checkbox" name="check" id="check">
          <label for="check">
            <p>Я даю согласие на обработку персональных данных</p>
          </label>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const inputName = ref('')
const inputEmail = ref('')
const inputPhone = ref('')
const inputCity = ref('')
const inputWork = ref('')
const inputPhoto = ref('')
const inputOrganization = ref('')
const inputLevel = ref('')
const inputDop = ref('')
</script>

<style lang="sass" scoped>
.modal
  position: fixed
  top: 0
  left: 0
  right: 0
  bottom: 0
  background-color: rgba(0, 0, 0, 0.5)
  z-index: 10
  padding: 25px
  display: flex
  justify-content: center
  align-items: center
  &__content
    max-width: 1100px
    width: 100%
    background-color: #fff
    border-radius: 15px
    padding: 50px
    position: relative
  &__close
    position: absolute
    top: 15px
    right: 15px
    cursor: pointer
    transition: .3s all
    &:hover
      svg 
        transform: rotate(180deg) 
      svg path
        fill: #196064
    svg 
      width: 30px
      height: 30px
      transition: .3s all
      path
        transition: .3s all
  &__head
    text-align: center
    display: flex
    flex-direction: column
    gap: 10px
    margin-bottom: 40px
    h2
      font-size: 42px
    p
      font-size: 22px
      line-height: 130%
  &__form
    display: grid
    grid-template-columns: repeat(2, 1fr)
    gap: 20px
.box-input__textarea
  grid-column: 1 / 3
  width: 100%
  position: relative
.check
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
    cursor: pointer
    &::before
      content: ''
      width: 30px
      height: 30px
      border: 1px solid #d7f2f3
      border-radius: 4px
    p
      font-size: 16px
      line-height: 130%
      color: #181818
      font-weight: 500
  input:checked + label::before
    background-color: #10595C
    background-image: url('data:image/svg+xml,<svg width="17" height="12" viewBox="0 0 17 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.1571 0.352941C15.7 -0.117647 15.0143 -0.117647 14.5571 0.352941L5.98571 9.17647L2.44286 5.52941C1.98571 5.05882 1.3 5.05882 0.842857 5.52941C0.385714 6 0.385714 6.70588 0.842857 7.17647L5.18571 11.6471C5.41429 11.8824 5.64286 12 5.98571 12C6.32857 12 6.55714 11.8824 6.78571 11.6471L16.1571 2C16.6143 1.52941 16.6143 0.823529 16.1571 0.352941Z" fill="white"/></svg>')
    background-size: 50%
    background-repeat: no-repeat
    background-position: center


</style>