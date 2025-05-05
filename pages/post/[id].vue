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
</script>

<template>
  <TitleBlock :title="post?.title.rendered" />
  <Breadcrumbs />
  <div v-if="post" class="post">
    <div class="container">
      <img class="postImg" :src="post._embedded['wp:featuredmedia'][0].source_url" :alt="post.title.rendered" />
      <h2>{{ post.title.rendered }}</h2>
      <div v-html="post.content.rendered" class="post__text"></div>
      <div v-if="post.acf?.text2" v-html="post.acf.text2" class="post__text"></div>
    </div>
  </div>
</template>


<style lang="sass">
.postImg
  max-width: 100%
  width: 100%
  height: auto
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
    hr
      background: #96C1C3
      height: 1px
      width: 100%
      display: block
      margin: 20px 0
  
</style>