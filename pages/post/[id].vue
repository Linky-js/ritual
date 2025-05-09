<script setup>
import { useRoute } from 'vue-router'
import TitleBlock from "~/components/common/TitleBlock.vue";
import Breadcrumbs from "~/components/common/Breadcrumbs.vue";
import { useApiStore } from '~/stores/api'

const apiStore = useApiStore()
const route = useRoute();

const { data: postData } = await useAsyncData('post', () =>
  $fetch(`${apiStore.apiUrl}posts?slug=${route.params.id}&_embed`)
);

const post = computed(() => postData.value?.[0] || null);
console.log('POST', `${apiStore.apiUrl}posts?slug=${route.params.id}&_embed`);
const title = {
  title: 'Рекомендации по восстановлению после утраты близкого человека',
}
const postDops = [
  {
    title: 'Дайте себе пространство и время для скорби',
    text: 'Не подавляйте свои эмоции. Позвольте себе плакать, говорить о своих чувствах и находить способы их выразить. Будьте готовы, что боль будет уходить, и будет приходить радость.',
  },
  {
    title: 'Обращайтесь за помощью и поддержкой',
    text: 'Обратитесь к близким.Расскажите людям, что вам нужно – если вы этого не сделаете, они могут не знать, как помочь, или они могут чувствовать себя некомфортно, предлагая что-то.',
  },
  {
    title: '',
    text: 'Профессиональная поддержкаОбратитесь к психологу, терапевту, специалисту по гореванию, доуле смерти. Помимо этого можно посетить группы поддержки.',
  },
  {
    title: 'Старайтесь планировать свои дни',
    text: 'Создавайте расписание, чтобы предотвратить ощущение пустоты. Включайте в него любимые занятия и время для отдыха. Вы можете начать заниматься прежними интересами и хобби или подумать о том, чтобы начать новые.',
  },
  {
    title: 'Сохраняйте память',
    text: 'Уважение к памяти о вашем близком может быть неотъемлемой частью процесса проживания горя. Создание или поддержание традиций, которые были важны для вас и вашего близкого, поможет сохранить связь с ним.',
  },
]

</script>

<template>
  <TitleBlock :title="post?.title.rendered" />
  <Breadcrumbs :breadcrumbs="[{ label: 'Материалы', path: '/materials' }, { label: post?.title.rendered, path: '' }]" />
  <div v-if="post" class="post">
    <div class="container">
      <h2>{{ post.title.rendered }}</h2>
      <img class="postImg" :src="post._embedded['wp:featuredmedia'][0].source_url" :alt="post.title.rendered" />
      <div v-html="post.content.rendered" class="post__text"></div>
      <div v-if="post.acf?.text2" v-html="post.acf.text2" class="post__text"></div>
      <div class="post__text3">
        Чем больше мы зависели от умершего в жизни, тем острее ощущаем его отсутствие. Парадокс переживания горя
        заключается в том, что более счастливые и зрелые отношения с ушедшим могут облегчить процесс расставания, хотя
        это не избавляет от душевных страданий.
      </div>

    </div>
  </div>
  <div class="post__dop">
    <div class="container">
      <div class="post__dop-head">{{ title.title }}</div>
      <div class="post__dop-content">
        <img class="post__dop-img" src="/img/news-img.png" alt="">
        <div class="post__dop-box">
          <div class="post__dop-text" v-for="(item, index) in postDops" :key="index">
            <h3>{{ item.title }}</h3>
            <p>{{ item.text }}</p>
          </div>
        </div>
        <img class="post__dop-img" src="/img/news-img.png" alt="">
      </div>
      <div class="post__text4">
        <h2>Поможем пережить утрату</h2>
        <div class="post__btn">
          <NuxtLink to="/specialists" class="btn"><span>Найти специалиста</span></NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>


<style lang="sass">
.post 
 
  &__dop 
    background-color: #fff
    margin-bottom: 100px
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
    h3 
      font-size: 30px
      font-family: 'Alethia Pro'
      font-style: italic
      line-height: 130%
      text-align: center
    p 
      font-size: 25px
      line-height: 130%
      font-weight: 600
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
        h3 
          font-size: 25px
        p 
          font-size: 20px
@media (max-width: 620px)
  .post
    padding-bottom: 30px
    &__text
      font-size: 16px
    &__text3
      font-size: 20px
    &__dop
      &-head
        font-size: 22px
      &-content
        padding: 30px 15px
      &-box 
        gap: 15px
      &-text
        h3 
          font-size: 20px
        p 
          font-size: 16px
  .postImg
    height: 200px
</style>