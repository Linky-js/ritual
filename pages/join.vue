<script setup>
import TitleBlock from '~/components/common/TitleBlock.vue';
import Breadcrumbs from '~/components/common/Breadcrumbs.vue';
import TopBlock from '~/components/join/TopBlock.vue';
import WhyBlock from '~/components/join/WhyBlock.vue';
import LevelBlock from '~/components/join/LevelBlock.vue';
import { useApiStore } from '~/stores/api'

const apiStore = useApiStore()
const { data: page } = await useAsyncData('joinpage', () =>
  $fetch(`${apiStore.apiUrl}pages/119?acf_fields=true&_embed`)
);
const topBlockObject = ref(null);
const whyBlockObject = ref(null);
const levelBlockArray = ref(null);


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

async function prepareTopBlock() {

  topBlockObject.value = {
    title: page.value.acf.zagolovok_1,
    text:page.value.acf.opisanie_1,
    photo:  await getImageUrl(page.value.acf.kartinka_1),
    dopText: page.value.acf.czitata,
    dopText2: page.value.acf.dop_tekst
  };
 
  
}
async function prepareWhyBlock() {
  const items = page.value.acf.itemy;

  const whyList = await Promise.all(
    items.map(async (item) => {
      const photo = await getImageUrl(item.ikonka); // передаётся ID
      return {
        title: item.tekst,
        photo,
      };
    })
  );
    
    
  whyBlockObject.value = {
    items: whyList,
    bg: await getImageUrl(page.value.acf.bekgraund)
  };
 
}

async function prepareLevelBlock() {

  const items = page.value.acf.urovni;
  const itemsList = await Promise.all(
    items.map(async (item) => {
      const photo = await getImageUrl(item.bekgraund);
      return {
        title: item.nazvanie,
        text: item.opisanie,
        photo,
        list: item.preimushhestva,
        price: item.czena
      };
    })
  )

  levelBlockArray.value = itemsList;
console.log('levelBlockArray', levelBlockArray.value);

}

await prepareTopBlock();
await prepareWhyBlock();
await prepareLevelBlock();
</script>



<template>
  <Head>
    <Title>ABISRS - Присоединиться как специалист</Title>
    <Meta name="description" content="Альянс бальзамировщиков и специалистов ритуального сервиса представляет собой уникальную платформу, которая объединяет профессионалов, стремящихся к повышению стандартов своей деятельности." />
  </Head>
  <TitleBlock title="Присоединиться как специалист" />
  <Breadcrumbs :breadcrumbs="[{ label: 'Присоединиться как специалист', path: '' }]" />

  <TopBlock :topBlockObject="topBlockObject" />
  <WhyBlock :whyBlockObject="whyBlockObject" />
  <LevelBlock :levelBlockArray="levelBlockArray" />
</template>

<style>

</style>