<script setup>
import { useRoute } from "vue-router";
import TitleBlock from "~/components/common/TitleBlock.vue";
import Breadcrumbs from "~/components/common/Breadcrumbs.vue";
import { useApiStore } from "~/stores/api";

const route = useRoute()
const apiStore = useApiStore()
const { data: postData } = useAsyncData('post', async () => {
  if (!route.params.id) return null
  try {
    return await $fetch(`${apiStore.apiUrl}specialist?slug=${route.params.id}&_embed`)
  } catch (e) {
    console.error('Ошибка запроса:', e)
    return null
  }
})

const post = computed(() => postData.value?.[0] || null);
console.log('slug из маршрута:', route.params.id);
console.log('postData:', postData.value);

const portfolioImages = ref([])
const udoImage = ref(null)
watchEffect(async () => {
  if (post.value?.acf?.portfolio?.length) {
    const ids = post.value.acf.portfolio
    // Получаем все изображения по ID (одним запросом через include)
    const images = await $fetch(`${apiStore.apiUrl}media?include=${ids.join(',')}`)
    portfolioImages.value = images
  }
  const udoId = post.value?.acf?.udo
  if (udoId) {
    const image = await $fetch(`${apiStore.apiUrl}media/${udoId}`)
    udoImage.value = image
  }
})
</script>

<template>

  <Head>
    <Title>ABISRS </Title>
  </Head>
  <TitleBlock :title="post?.title.rendered" />
  <Breadcrumbs :breadcrumbs="[
    { label: 'Специалисты ритуального сервиса', path: '/specialists' },
    { label: post?.title.rendered, path: '' },
  ]" />
  <div class="spec">
    <div class="container">
      <div class="spec__top">
        <div class="spec__top-img">
          <img :src="post?._embedded?.['wp:featuredmedia']?.[0]?.source_url" :alt="post?.title?.rendered" />
        </div>
        <div class="spec__top-text">
          <div class="spec__top-text-one">
            <h3>{{ post?.title.rendered }}</h3>
            <p v-html="post?.excerpt.rendered"></p>
          </div>
          <div class="spec__top-text-two" v-if="post?.acf.time">
            <p>{{ post?.acf?.time }}</p>
            <p>{{ post?.acf?.experience }}</p>
          </div>
          <div class="spec__btns">
            <a v-if="post?.acf?.phone" :href="`tel:${post.acf.phone}`" class="btn">
              <span>Позвонить</span>
            </a>
            <a v-if="post?.acf?.whatsapp" :href="`${post.acf.whatsapp}`" class="btn" target="_blank">
              <span>Написать</span>
            </a>
          </div>
        </div>
      </div>
      <div class="spec__mid">
        <div class="spec__mid-text" v-html="post?.content.rendered"></div>
        <div class="spec__mid-udo" v-if="udoImage">
          <img v-if="udoImage" :src="udoImage.source_url" alt="udo" />
          <p>Удостоверение о квалификации</p>
        </div>
      </div>
      <div class="port" v-if="portfolioImages.length">
        <h2 class="head-h2">Портфолио</h2>
        <div class="port__list">
          <img v-for="(image, index) in portfolioImages" :key="index" :src="image.source_url"
            :alt="image.alt_text || 'portfolio image'" />
        </div>
        
      </div>
      <div class="spec__btn">
          <NuxtLink to="/specialists" class="btn"><span>Вернуться</span></NuxtLink>
        </div>

    </div>
  </div>
</template>


<style lang="sass">
.spec 
  margin-bottom: 80px
  &__top
    display: flex
    align-items: flex-start
    gap: 20px
  &__top-img 
    max-width: 580px
    width: 100%
    height: 404px
    img 
      width: 100%
      height: 100%
      object-fit: cover
      border-radius: 15px
  &__top-text 
    display: flex
    flex-direction: column
    gap: 20px
    height: 100%
  &__top-text-one 
    display: flex
    flex-direction: column
    gap: 3px
    h3 
      font-size: 48px
      line-height: 130%
      font-weight: 600
    p 
      font-size: 26px
      line-height: 130%
      font-weight: 500
  &__top-text-two 
    display: flex
    flex-direction: column
    gap: 3px
    p 
      color: #1B1B1B
      font-size: 20px
      line-height: 130%
  &__btns 
    display: flex
    gap: 20px
    align-items: center
    margin-top: 20px

  &__mid 
    display: flex
    align-items: flex-start
    justify-content: center
    margin-top: 50px
    gap: 20px
  &__mid-text 
    display: flex
    flex-direction: column
    gap: 20px
    font-size: 20px
    line-height: 130%
    width: 100%
  &__mid-udo 
    display: flex
    flex-direction: column
    gap: 10px
    align-items: center
    text-align: center
    max-width: 580px
    width: 100%
    img 
      width: 100%
      object-fit: cover
      height: auto
      border-radius: 15px
    p 
      font-weight: 500
      font-size: 18px
.spec__btn
  display: flex
  justify-content: center
  align-items: center
  margin-top: 30px
.port 
  display: flex
  flex-direction: column
  align-items: center
  text-align: center
  gap: 30px
  margin-top: 50px
  &__list 
    width: 100%
    display: grid
    grid-template-columns: repeat(4, 1fr)
    gap: 20px
  img 
    width: 100%
    border-radius: 15px
    height: 300px
    object-fit: cover
    transition: .3s all
    &:hover 
      transform: scale(1.03)
@media (max-width: 1024px)
  .spec 
    &__top-img 
      max-width: 150px
      height: 150px
    &__top-text 
      gap: 15px
    &__btns 
      margin-top: 0
      gap: 10px
    &__top-text-one 
      h3 
        font-size: 22px
      p 
        font-size: 18px
    &__top-text-two
      p 
        font-size: 16px 
    &__mid 
      flex-direction: column
      &-text 
        font-size: 16px
      &-udo 
        max-width: 100%
        img 
          height: 300px
        p 
          font-size: 16px
  .port 
    &__list 
      grid-template-columns: repeat(2, 1fr)
    img 
      height: 300px
@media (max-width: 620px)
  .spec__top
    gap: 10px
  .spec__top-img
    flex-shrink: 0
    width: 100px
    height: 100px
  .spec__btns
    flex-direction: column
    .btn 
      width: 100%
      max-width: 100%
  .port__list
    grid-template-columns: repeat(1, 1fr)
    gap: 10px
</style>