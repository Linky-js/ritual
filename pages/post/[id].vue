<script setup>
import { useRoute } from 'vue-router'
import { usePosts } from '~/composables/usePosts.js'
import TitleBlock from "~/components/common/TitleBlock.vue";
import Breadcrumbs from "~/components/common/Breadcrumbs.vue";

const route = useRoute()
const posts = usePosts()
const post = posts.find(p => p.id === route.params.id)

</script>
<template>
  <TitleBlock :title="post.title" />
  <Breadcrumbs />
  <div class="post" v-if="post">
    <div class="container">
      <img :src="post.img" :alt="post.title" />
      <h2>{{ post.title }}</h2>
      <div v-html="post.text" class="post__text"></div>
      <div v-if="post.text2" v-html="post.text2" class="post__text"></div>
    </div>
  </div>
  <div v-else>
    <p>Пост не найден</p>
  </div>
</template>


<style lang="sass" scoped>
img
  max-width: 100%
  width: 100%
  height: auto
  margin: 20px 0
.post
  padding-bottom: 100px
  &__text
    padding: 20px 0
    display: flex
    flex-direction: column
    gap: 15px
    border-bottom: 1px solid #96C1C3
    font-size: 22px
    line-height: 130%
    color: #181818
</style>