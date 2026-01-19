<script setup>
import MainHome from "~/components/home/MainHome.vue";
import AboutHome from "~/components/home/AboutHome.vue";
import ServicesHome from "~/components/home/ServicesHome.vue";
import SpecialistsHome from "~/components/home/SpecialistsHome.vue";
import { ref, watch, onMounted } from "vue";
import { useApiStore } from "~/stores/api";

const apiStore = useApiStore();
const { data: page } = await useAsyncData("homepage", () =>
  $fetch(`${apiStore.apiUrl}pages/7?acf_fields=true&_embed`)
);

const clientsArray = ref([]);

async function getImageUrl(id) {
  if (!id) return null;
  try {
    const res = await $fetch(`${apiStore.apiUrl}/media/${id}`);
    return res.source_url;
  } catch (error) {
    console.error("Ошибка при получении изображения:", error);
    return null;
  }
}

if (page.value?.acf?.klinety?.length) {
  const imageUrls = await Promise.all(
    page.value.acf.klinety.map((client) => getImageUrl(client.kartinka))
  );
  clientsArray.value = imageUrls.filter(Boolean);
  console.log("clientsArray", clientsArray.value);
}

const mainHomeObject = computed(() => {
  if (!page.value?.acf) return null;
  return {
    title: page.value.acf.title_1,
    buttonLeft: page.value.acf.button_text_left_1,
    buttonRight: page.value.acf.button_text_right_1,
  };
});

const aboutHomeObject = computed(() => {
  if (!page.value?.acf) return null;
  return {
    text: page.value.acf.text_2,
  };
});

const servicesHomeObject = computed(() => {
  if (!page.value?.acf) return null;
  return {
    head: page.value.acf.title_3,
    text: page.value.acf.text_3,
    quote: page.value.acf.quote_4,
  };
});

const expertiseObject = computed(() => {
  if (!page.value?.acf) return null;
  return {
    title: page.value.acf.zagolovok,
    subtitle: page.value.acf.fraza,
    specialist: page.value.acf.specialist,
  };
});

const specialistsBlockObject = ref(null);
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
    page.value.acf.specialists.map(({ specialist }) =>
      getSpecialist(specialist)
    )
  );

  specialistsBlockObject.value = {
    title: page.value.acf.zagolovok || '',
    subtitle: page.value.acf.fraza || '',
    specialists: specialistsData.filter(Boolean),
  };
}
await prepareSpecialistsBlock();
onMounted(() => {
  console.log("homepage", page.value);
});
</script>
<template>

  <Head>
    <Title>ABISRS</Title>
    <Meta name="description" content="Альнс Бальзамировщиков и специалистов ритуального сервиса" />
  </Head>
  <MainHome v-if="mainHomeObject" :mainHomeObject="mainHomeObject" />
  <AboutHome v-if="aboutHomeObject" :aboutHomeObject="aboutHomeObject" />
  <ServicesHome v-if="servicesHomeObject" :servicesHomeObject="servicesHomeObject" />
  <SpecialistsHome v-if="specialistsBlockObject" :specialistsBlockObject="specialistsBlockObject" />
</template>
<style scoped></style>
