<script setup>
import TitleBlock from '~/components/common/TitleBlock.vue';
import Breadcrumbs from '~/components/common/Breadcrumbs.vue';
import TextBlock from '~/components/specialists/TextBlock.vue';
import SpecBlock from '~/components/specialists/SpecBlock.vue';
import { useApiStore } from '~/stores/api'

const apiStore = useApiStore()
const { data: page } = await useAsyncData('specialistspage', () =>
  $fetch(`${apiStore.apiUrl}pages/160?acf_fields=true&_embed`)
);
const textBlockObject = ref(null);
async function getImageUrl(id) {
  if (!id) return null;
  try {
    const res = await $fetch(`${apiStore.apiUrl}media/${id}`);
    return res.source_url;
  } catch (error) {
    console.error("Ошибка при получении изображения:", error);
    return null;
  }
}

async function prepareTextBlock() {
console.log('page', page.value);

  textBlockObject.value = {
    title: page.value.acf.title_1,
    text:page.value.acf.text_1,
    dopText: page.value.acf.text_down_1,
    photo:  await getImageUrl(page.value.acf.fon_1),
   
    doptitle: page.value.acf.title_2
  };
 
  
}
await prepareTextBlock();
</script>

<template>
  <TitleBlock title="Специалисты ритуального сервиса" />
  <Breadcrumbs />
  <TextBlock :textBlockObject="textBlockObject"/>
  <SpecBlock />
</template>

<style>

</style>