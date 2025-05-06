<script setup>
import TitleMinBlock from "~/components/common/TitleMinBlock.vue";

const props = defineProps({
  newsList: {
    type: Array,
    default: [],
  },
});

onMounted(() => {
  console.log("newsList", props.newsList);
});
</script>
<template>
  <div class="news">
    <div class="container">
      <TitleMinBlock title="Статьи" />
      <div class="news__list">
        <NuxtLink v-for="(item, index) in newsList" :key="index" class="news__item"
          :to="item.slug ? '/post/' + item.slug : ''">
          <img :src="item._embedded['wp:featuredmedia'][0].source_url" :alt="item.title.rendered" />
          <h3>{{ item.title.rendered }}</h3>
          <div class="item-text" v-html="item.excerpt.rendered"></div>
          <div class="btn-arrow">
            <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M11.3536 4.35355C11.5488 4.15829 11.5488 3.84171 11.3536 3.64645L8.17157 0.464466C7.97631 0.269204 7.65973 0.269204 7.46447 0.464466C7.2692 0.659728 7.2692 0.976311 7.46447 1.17157L10.2929 4L7.46447 6.82843C7.2692 7.02369 7.2692 7.34027 7.46447 7.53553C7.65973 7.7308 7.97631 7.7308 8.17157 7.53553L11.3536 4.35355ZM0 4.5H11V3.5H0V4.5Z"
                fill="white" />
            </svg>
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
<style lang="sass" scoped>
.news__list
  margin-top: 30px
  display: grid
  grid-template-columns: repeat(3, 1fr)
  gap: 30px
.news__item
  border: 1px solid #6B9A9C
  background: #fff
  display: flex
  align-items: center
  flex-direction: column
  transition: .3s all
  position: relative
  padding-bottom: 30px
  &:hover
    transform: scale(1.03)
    h3
      color: #96C1C3
    .btn-arrow
      background: #96C1C3
  img
    width: 100%
    height: 234px
    object-fit: cover
    margin-bottom: 20px
  h3
    font-weight: 600
    font-size: 24px
    text-align: center
    padding: 0 10px
    margin-bottom: 8px
    color: #181818
    transition: .3s all
  .item-text
    font-size: 14px
    padding: 0 22px
    line-height: 130%
    color: #181818
    text-align: center
    font-weight: 600
.btn-arrow
  display: flex
  align-items: center
  justify-content: center
  width: 40px
  height: 40px
  background: #6B9A9C
  position: absolute
  left: 50%
  bottom: -20px
  transform: translateX(-50%)
  border-radius: 50%
  transition: .3s all
@media (max-width: 1024px)
  .news__list
    grid-template-columns: repeat(2, 1fr)
  .news__item
    img
      height: 200px
@media (max-width: 620px)
  .news__list
    grid-template-columns: repeat(1, 1fr)
  .news__item
    h3
      font-size: 20px
    img
      height: 150px
</style>