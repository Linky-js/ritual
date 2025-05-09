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
const { data: fullPage } = await useAsyncData('joinpage', () =>
  $fetch(`${apiStore.apiUrl}pages/176?acf_fields=true&_embed`)
);

const freeMaterials = ref(null)
const payMaterials = ref(null)
const joinMaterials = ref(null)

async function getMaterial(id) {
  if (!id) return null;
  try {
    const res = await $fetch(`${apiStore.apiUrl}materials/${id}?_embed`);
    return res; // если API возвращает массив
  } catch (error) {
    console.error("Ошибка при получении материала:", error);
    return null;
  }
}

async function getMaterials() {
  const ids = fullPage.value?.acf?.materialy?.map((m) => m.material).filter(Boolean);
  if (!ids?.length) return [];

  const materials = await Promise.all(ids.map(getMaterial));
  freeMaterials.value = materials.filter(Boolean); 

  const ids2 = fullPage.value?.acf?.materialy_2?.map((m) => m.material).filter(Boolean);
  if (!ids2?.length) return [];

  const materials2 = await Promise.all(ids2.map(getMaterial));
  payMaterials.value = materials2.filter(Boolean);

  const ids3 = fullPage.value?.acf?.materialy_3?.map((m) => m.material).filter(Boolean);
  if (!ids3?.length) return [];

  const materials3 = await Promise.all(ids3.map(getMaterial));
  joinMaterials.value = materials3.filter(Boolean);
  console.log('joinMaterials', freeMaterials.value);
  
}

await getMaterials();

</script>
<template>
  <TitleBlock title="Информационные материалы" />
  <Breadcrumbs :breadcrumbs="[{ label: 'Материалы', path: '' }]" />
  <NewsBlock :newsList="page" />
  <FreeMaterialBlock v-if="freeMaterials && freeMaterials.length > 0" :freeMaterials="freeMaterials" />
  <PayMaterialBlock :payMaterials="payMaterials" />
  <JoinBlock :joinMaterials="joinMaterials" />
</template>