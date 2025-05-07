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

const { data: specialists } = await useAsyncData('specialists', () =>
  $fetch(`${apiStore.apiUrl}specialist?_embed`)
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
const categorizedSpecialists = [];

specialists.value.forEach((specialist) => {
  const categories = specialist._embedded?.['wp:term']?.[0] || [];

  categories.forEach((category) => {
    const existingCategory = categorizedSpecialists.find(cat => cat.title === category.name);

    if (existingCategory) {
      existingCategory.items.push(specialist);
    } else {
      categorizedSpecialists.push({
        title: category.name,
        slug: category.slug, // если нужно
        id: category.id,     // если нужно
        items: [specialist]
      });
    }
  });
});
console.log('specialistsBlockObject',categorizedSpecialists);

</script>

<template>
  <TitleBlock title="Специалисты ритуального сервиса" />
  <Breadcrumbs />
  <TextBlock :textBlockObject="textBlockObject"/>
  <SpecBlock :specialistsBlockObject="categorizedSpecialists" />
</template>

<style>

</style>