<script setup>
import TitleBlock from "~/components/common/TitleBlock.vue";
import Breadcrumbs from "~/components/common/Breadcrumbs.vue";
import AboutBlock from "~/components/about/AboutBlock.vue";
import SpecialistsBlock from "~/components/about/SpecialistsBlock.vue";
import CoopBlock from "~/components/about/CoopBlock.vue";
import CompanyBlock from "~/components/about/CompanyBlock.vue";
import ReestrBlock from "~/components/about/ReestrBlock.vue";
import { useApiStore } from '~/stores/api'

const apiStore = useApiStore()

const { data: page } = await useAsyncData('aboutpage', () =>
  $fetch(`${apiStore.apiUrl}pages/47?acf_fields=true&_embed`)
);

const clientsArray = ref([]);
const aboutBlockObject = ref(null);
const specialistsBlockObject = ref(null);
const coopBlockkObject = ref(null);
const companyBlockObject = ref(null);
const reestrBlockObject = ref({});
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

async function prepareAboutBlock() {
  if (!page.value) return;

  const [img1, img2, img3] = await Promise.all([
    getImageUrl(page.value.acf.kartinka_1),
    getImageUrl(page.value.acf.kartinka_2),
    getImageUrl(page.value.acf.kartinka_3),
  ]);

  aboutBlockObject.value = {
    text: page.value.acf.opisanie_o_kompanii,
    items: [
      {
        title: page.value.acf.zagolovok_1,
        text: page.value.acf.opisanie_1,
        image: img1,
      },
      {
        title: page.value.acf.zagolovok_2,
        text: page.value.acf.opisanie_2,
        image: img2,
      },
      {
        title: page.value.acf.zagolovok_3,
        text: page.value.acf.opisanie_3,
        image: img3,
      }
    ]
  };
}



async function getSpecialist(id) {
  if (!id) return null;
  try {
    const res = await $fetch(`${apiStore.apiUrl}specialist/${id}?_embed`);
    return res;
  } catch (error) {
    console.error("Ошибка при получении специалиста:", error);
    return null;
  }
}

async function prepareSpecialistsBlock() {
  if (!page.value?.acf?.specialists?.length) return;

  const specialistsData = await Promise.all(
    page.value.acf.specialists.map(({ specialist }) => getSpecialist(specialist))
  );

  specialistsBlockObject.value = {
    title: page.value.acf.zagolovok_4,
    text: page.value.acf.opisanie_4,
    specialists: specialistsData.filter(Boolean),
    dopText: page.value.acf.dop_zagolovok

  };
}
async function prepareCoopBlock() {

  coopBlockkObject.value = {
    title: page.value.acf.zagolovok_5,
    text: page.value.acf.opisanie_5,
  };
}

async function prepareCompanyBlock() {
  if (!page.value?.acf?.kompanii) return [];

  const imagePromises = page.value.acf.kompanii.map((kartinka) => getImageUrl(kartinka.kartinka));
  const images = await Promise.all(imagePromises);

  companyBlockObject.value = images.filter(Boolean);
  
}

async function prepareReestrBlock() {
  if (!page.value?.acf?.reestr) return [];

  const imagePromises = page.value.acf.reestr.map((kartinka) => getImageUrl(kartinka.kartinka));
  const images = await Promise.all(imagePromises);

  reestrBlockObject.value.kartinki = images.filter(Boolean);
  reestrBlockObject.value.text = page.value.acf.opisanie_6;
  reestrBlockObject.value.title = page.value.acf.zagolovok_7;
  console.log('reestrBlockObject', reestrBlockObject.value);
}
await prepareCompanyBlock();
await prepareSpecialistsBlock();
await prepareAboutBlock();
await prepareCoopBlock();
await prepareReestrBlock();

onMounted(() => {
  console.log('aboutpage', page.value);
});
</script>

<template>
  <TitleBlock title="О компании" />
  <Breadcrumbs />
  <AboutBlock v-if="aboutBlockObject" :aboutBlockObject="aboutBlockObject" />
  <SpecialistsBlock :specialistsBlockObject="specialistsBlockObject" />
  <CoopBlock :coopBlockkObject="coopBlockkObject" />
  <CompanyBlock :companyBlockObject="companyBlockObject" />
  <ReestrBlock :reestrBlockObject="reestrBlockObject" />
</template>

<style>
</style>