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

const emit = defineEmits(["close"]);
const modalContentRef = ref(null);

const handleKeydown = (event) => {
  if (event.key === "Escape") {
    emit("close");
  }
};

const handleClickOutside = (event) => {
  if (modalContentRef.value && !modalContentRef.value.contains(event.target)) {
    emit("close");
  }
};

onMounted(() => {
  if (phoneRef.value) {
    IMask(phoneRef.value, {
      mask: '+{7} (000) 000-00-00',
      lazy: true,
    })
  }
  document.addEventListener("click", handleClickOutside);
  document.addEventListener("keydown", handleKeydown);
});

onBeforeUnmount(() => {
  document.removeEventListener("click", handleClickOutside);
  document.removeEventListener("keydown", handleKeydown);
});

const show = ref(true);
const loading = ref(false);
const error = ref("");
const success = ref(false);
const fileName = ref(null);
const form = ref({
  fio: "",
  email: "",
  phone: "",
  city: "",
  occupation: "",
  org_name: "",
  join_level: "",
  extra_info: "",
  file: null,
});

function onFileChange(e) {
  const files = e.target.files;

  form.value.file = files && files.length ? files[0] : null;
  fileName.value = files && files.length ? files[0].name : null;
  error.value = "";
}

async function onSubmit() {
  // if (!form.value.file ) {
  //   error.value = "Пожалуйста, выберите файл";
  //   return;
  // }
  form.value.fio = inputName.value;
  form.value.email = inputEmail.value;
  form.value.phone = inputPhone.value;
  form.value.city = inputCity.value;
  form.value.occupation = inputWork.value;
  form.value.org_name = inputOrganization.value;
  form.value.join_level = inputLevel.value;
  form.value.extra_info = inputDop.value;
  error.value = "";
  success.value = false;

  if (!form.value.fio || !form.value.email) {
    error.value = "Пожалуйста, заполните обязательные поля";
    return;
  }

  const fd = new FormData();
  Object.entries(form.value).forEach(([key, val]) => {
    if (val !== null && val !== undefined) {
      fd.append(key, val);
    }
  });

  loading.value = true;
  try {
    const response = await fetch(
      "https://abisrs.ru/wordpress/wp-json/custom/v1/register",
      {
        method: "POST",
        body: fd,
      }
    );

    const data = await response.json();

    if (!response.ok || !data.success) {
      throw new Error(data?.message || "Ошибка сервера");
    }

    success.value = true;
    successForm.value = true
    form.value = {
      fio: "",
      email: "",
      phone: "",
      city: "",
      occupation: "",
      org_name: "",
      join_level: "",
      extra_info: "",
      file: null,
    };
  } catch (err) {
    error.value = err.message;
  } finally {
    loading.value = false;
  }
}
</script>


<template>
  <div class="modal active" id="modal-call" @click.self="emit('close')">
    <div class="modal__content">
      <div class="modal__close" @click="$emit('close')">
        <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M2.36629 30.6335C2.46206 30.7294 2.5758 30.8054 2.70099 30.8573C2.82618 30.9092 2.96037 30.936 3.0959 30.936C3.23142 30.936 3.36561 30.9092 3.4908 30.8573C3.61599 30.8054 3.72973 30.7294 3.8255 30.6335L16.4996 17.9594L29.1788 30.6335C29.3723 30.827 29.6347 30.9357 29.9084 30.9357C30.1821 30.9357 30.4445 30.827 30.638 30.6335C30.8315 30.44 30.9402 30.1775 30.9402 29.9039C30.9402 29.6302 30.8315 29.3678 30.638 29.1743L17.9588 16.5002L30.6328 3.821C30.8264 3.6275 30.9351 3.36505 30.9351 3.09139C30.9351 2.81774 30.8264 2.55529 30.6328 2.36178C30.4393 2.16828 30.1769 2.05957 29.9032 2.05957C29.6296 2.05957 29.3671 2.16828 29.1736 2.36178L16.4996 15.041L3.82035 2.36694C3.62307 2.19799 3.3693 2.10971 3.10976 2.11974C2.85022 2.12976 2.60402 2.23736 2.42036 2.42102C2.2367 2.60468 2.12911 2.85088 2.11908 3.11042C2.10906 3.36996 2.19734 3.62372 2.36629 3.821L15.0403 16.5002L2.36629 29.1794C2.17421 29.3727 2.06641 29.634 2.06641 29.9065C2.06641 30.1789 2.17421 30.4403 2.36629 30.6335Z"
            fill="#212121" />
        </svg>
      </div>
      <div v-if="!successForm" class="modal__head">
        <h2>Оставьте заявку на вступление</h2>
        <p>Мы рассмотрим ее в течении дня и свяжемся с вами</p>
      </div>
      <div v-if="error && !successForm && error !== 'Заявка отправлена' && error !== ''" class="error">{{ error }}</div>
      <form @submit.prevent="onSubmit" v-if="!successForm" class="modal__form">
        <div class="box-input">
          <input v-model="inputName" type="text" id="name" placeholder=" " ref="inputRef" required />
          <label :class="{ hidden: inputName.trim() !== '' }" for="name">ФИО</label>
        </div>
        <div class="box-input">
          <input v-model="inputEmail" type="text" id="email" placeholder=" " ref="inputRef" required />
          <label :class="{ hidden: inputEmail.trim() !== '' }" for="email">Email</label>
        </div>
        <div class="box-input">
          <input v-model="inputPhone" type="text" id="phone" ref="phoneRef" required />
          <label :class="{ hidden: inputPhone.trim() !== '' }" for="phone">Номер телефона</label>
        </div>
        <div class="box-input">
          <input v-model="inputCity" type="text" id="city" placeholder=" " ref="inputRef" required />
          <label :class="{ hidden: inputCity.trim() !== '' }" for="city">Город</label>
        </div>
        <div class="box-input box-input-work">
          <input v-model="inputWork" type="text" id="work" placeholder=" " ref="inputRef" required />
          <label :class="{ hidden: inputWork.trim() !== '' }" for="work">Род деятельности</label>
        </div>
        <div class="box-image">
          <input type="file" id="photo" @change="onFileChange" hidden class="hidden-input" />
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
        <div class="box-input box-input-org">
          <input v-model="inputOrganization" type="text" id="organization" placeholder=" " ref="inputRef" />
          <label :class="{ hidden: inputOrganization.trim() !== '' }" for="organization">Наименование
            организации</label>
        </div>
        <div class="box-input box-input-level">
          <input v-model="inputLevel" type="text" id="level" placeholder=" " ref="inputRef" />
          <label :class="{ hidden: inputLevel.trim() !== '' }" for="level">Уровень вступления</label>
        </div>
        <div class="box-input box-input__textarea">
          <textarea v-model="inputDop" name="dop" id="dop" cols="30"></textarea>
          <label :class="{ hidden: inputDop.trim() !== '' }" for="dop">Дополнительная информация о себе</label>
        </div>
        <div class="check">
          <input type="checkbox" name="check" id="check" required />
          <label for="check">
            <p>Я даю согласие на обработку персональных данных, оферту и политику конфиденциальности</p>
          </label>
        </div>
        <button class="btn"><span>Отправить</span></button>
      </form>
      <div v-if="successForm" class="modal__head">
        <h2>Ваша заявка отправлена</h2>
        <p>Вы получите письмо, по результату рассмотрения</p>
      </div>
    </div>
  </div>
</template>

<style lang="sass" scoped>
.error
  color: red
  font-size: 12px
  padding: 5px
  border-radius: 5px
  border: 1px solid red
  width: max-content
  margin: 0 auto
  margin-bottom: 10px
.modal
  position: fixed
  top: 0
  left: 0
  right: 0
  bottom: 0
  background-color: rgba(0, 0, 0, 0.5)
  z-index: 999
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
    .btn
      grid-column: 1 / 3
.box-input__textarea
  grid-column: 1 / 3
  width: 100%
  position: relative
.check
  grid-column: 1 / 3
  width: 100%
  input
    position: absolute
    opacity: 0
    z-index: -1
    width: 0
    height: 0
  label
    width: 100%
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
      width: 25px
      height: 25px
      path
        transition: .3s all
    &:hover
      border-color: #196064
    p
      color: #b9b9b9
@media (max-width: 1024px)
  .modal__head
    gap: 10px
    h2
      font-size: 25px
    p
      font-size: 16px
  .box-image
    label
      font-size: 14px
      svg 
        width: 15px
        height: 15px
        flex-shrink: 0
@media (max-width: 620px)
  .modal__head
    gap: 10px
    h2
      font-size: 20px
    p
      font-size: 14px
  .modal 
    overflow-y: scroll
    height: 100%
    background: #fff
  .modal__content
    padding: 30px 15px
    height: 100%
  .modal__close
    right: 10px
    top: 10px
    svg
      height: 20px
      width: 20px
  .modal 
    padding: 0
  .modal__form
    gap: 10px
  .box-image, .box-input-work, .box-input-org, .box-input-level
    grid-column: 1 / 3
  .check
    label
      p
        font-size: 14px
</style>