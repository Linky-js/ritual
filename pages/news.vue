<script setup>
import TitleBlock from '~/components/common/TitleBlock.vue';
import Breadcrumbs from '~/components/common/Breadcrumbs.vue';
import NewsBlock from '~/components/news/NewsBlock.vue';
import FreeMaterialBlock from '~/components/news/FreeMaterialBlock.vue';
import PayMaterialBlock from '~/components/news/PayMaterialBlock.vue';
import JoinBlock from '~/components/news/JoinBlock.vue';
import { useApiStore } from '~/stores/api'

const apiStore = useApiStore()
const { data: page } = await useAsyncData('news', () =>
$fetch(`${apiStore.apiUrl}posts?categories=1&_embed`)
);

</script>
<template>
  <TitleBlock title="Информационные материалы" />
  <Breadcrumbs />
  <NewsBlock :newsList="page" />
  <FreeMaterialBlock />
  <PayMaterialBlock />
  <JoinBlock />
</template>