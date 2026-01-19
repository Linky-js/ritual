<script setup>
import { useRoute } from "vue-router";
import TitleBlock from "~/components/common/TitleBlock.vue";
import Breadcrumbs from "~/components/common/Breadcrumbs.vue";
import { useApiStore } from "~/stores/api";

const apiStore = useApiStore();
const route = useRoute();

const { data: postData } = await useAsyncData("post", () =>
  $fetch(`${apiStore.apiUrl}posts?slug=${route.params.id}&_embed`)
);

const post = computed(() => postData.value?.[0] || null);
console.log("POST", post);
</script>

<template>

  <Head>
    <Title>ABISRS - {{ post?.title.rendered }}</Title>
    <Meta name="description"
      :content="post?.acf?.metadescription ? post.acf.metadescription : 'Альянс бальзамировщиков и специалистов ритуального сервиса'" />
  </Head>
  <TitleBlock :title="post?.title.rendered" />
  <Breadcrumbs :breadcrumbs="[
    { label: 'Материалы', path: '/materials' },
    { label: post?.title.rendered, path: '' },
  ]" />
  <div v-if="post" class="post">
    <div class="container">
      <h2>{{ post.title.rendered }}</h2>
      <img v-if="post._embedded['wp:featuredmedia']" class="postImg"
        :src="post._embedded['wp:featuredmedia'][0].source_url" :alt="post.title.rendered" />
      <div v-html="post.content.rendered" class="post__text"></div>
      <div v-if="post.acf?.text2" v-html="post.acf.text2" class="post__text"></div>
      <div class="post__text3">
        {{ post.acf.czitata }}
      </div>
    </div>
  </div>
  <div v-if="post.acf.title" class="post__dop">
    <div class="container">
      <div class="post__dop-head">{{ post.acf.title }}</div>
      <div class="post__dop-content">
        <img class="post__dop-img" src="/img/news-img.png" alt="" />
        <div class="post__dop-box">
          <div class="post__dop-text" v-html="post.acf.text"></div>
        </div>
        <img class="post__dop-img" src="/img/news-img.png" alt="" />
      </div>
      <div class="post__text4">
        <h2>{{ post.acf.title_down }}</h2>
      </div>
    </div>
  </div>
  <div class="post__bot" v-if="post?.acf?.text_down">
    <div class="container">
      <div class="post__bot-text" v-html="post.acf.text_down"></div>
    </div>
  </div>
  <div class="post__btn">
    <div class="container">
      <NuxtLink to="/specialists" class="btn"><span>Найти специалиста</span></NuxtLink>
    </div>
  </div>
</template>


<style lang="sass">
.post
  &__dop
    background-color: #fff
    margin-bottom: 30px
  &__bot 
    margin-bottom: 40px
    &-text 
      display: flex
      flex-direction: column
      gap: 15px
      font-size: 22px
      line-height: 130%
  &__btn 
    margin-bottom: 100px
    display: flex
    align-items: center
    justify-content: center
  &__dop-head
    font-size: 40px
    line-height: 130%
    color: #155D61
    text-align: center
    font-style: italic
    font-family: 'Alethia Pro'
    max-width: 740px
    margin: 0 auto 30px
  &__dop-content
    position: relative
    background: linear-gradient(180deg, rgba(175, 218, 220, 0.7) 0%, rgba(175, 218, 220, 0.07) 66.12%)
    border-radius: 300px
    padding-top: 40px
    padding-bottom: 40px
  &__dop-img
    position: absolute
    top: -187px
    &:fitst-child
      left: 0
    &:last-child
      right: 0
      transform: scale(-1, 1)
  &__dop-box
    display: flex
    align-items: center
    flex-direction: column
    gap: 30px
    max-width: 760px
    width: 100%
    margin: 0 auto
  &__dop-text
    display: flex
    flex-direction: column
    gap: 12px
    font-size: 25px
    line-height: 130%
    font-weight: 600
    text-align: center
    h3
      font-size: 30px
      font-family: 'Alethia Pro'
      font-style: italic
      line-height: 130%
      font-weight: normal
      text-align: center
.postImg
  max-width: 100%
  width: 100%
  height: 300px
  object-fit: cover
  margin: 20px 0
.post
  padding-bottom: 100px
  &__text
    display: flex
    flex-direction: column
    gap: 15px
    font-size: 22px
    line-height: 130%
    color: #181818
    img 
      max-width: 700px
      border-radius: 15px
      width: 100%
      height: auto
    h2
      margin-bottom: 15px
    hr
      background: #96C1C3
      height: 1px
      width: 100%
      display: block
      margin: 20px 0
  &__text3
    font-size: 25px
    line-height: 130%
    font-family: 'Alethia Pro'
    color: #155D61
    font-style: italic
    border-top: 1px solid #96C1C3
    border-bottom: 1px solid #96C1C3
    padding: 30px 0
    text-align: center
    margin-top: 30px
  &__text4
    display: flex
    flex-direction: column
    gap: 20px
    h2
      border-top: 1px solid #96C1C3
      border-bottom: 1px solid #96C1C3
      padding: 30px 0
      text-align: center
      margin-top: 30px
      color: #155D61
@media (max-width: 1024px)
  .post
    padding-bottom: 50px
    &__text
      font-size: 18px
      line-height: 130%
      hr
        margin: 10px 0
    &__bot-text 
      font-size: 20px
    &__text3
      font-size: 20px
    &__dop
      &-head
        font-size: 30px
      &-img
        display: none
      &-content
        border-radius: 35px
      &-text
        font-size: 20px
        h3
          font-size: 25px
@media (max-width: 620px)
  .post__text4 h2 
    padding: 15px 0
  .post
    padding-bottom: 30px
    &__text
      font-size: 16px
    &__text3
      font-size: 20px
    &__bot-text
      font-size: 16px
    &__dop
      &-head
        font-size: 22px
      &-content
        padding: 30px 15px
      &-box
        gap: 15px
      &-text
        font-size: 16px
        h3
          font-size: 20px

  .postImg
    height: 200px
</style>