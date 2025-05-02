<script setup>
import MainHome from "~/components/home/MainHome.vue";
import AboutHome from "~/components/home/AboutHome.vue";
import ServicesHome from "~/components/home/ServicesHome.vue";
import { ref, watch, onMounted } from "vue";
import { useApiStore } from '~/stores/api'

const apiStore = useApiStore()
const { data: page } = await useAsyncData('homepage', () =>
  $fetch(`${apiStore.apiUrl}pages/7?acf_fields=true&_embed`)
);


const clientsArray = ref([]);

async function getImageUrl(id) {
  if (!id) return null;
  try {
    const res = await $fetch(
      `${apiStore.apiUrl}/media/${id}`
    );
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
  console.log('clientsArray',clientsArray.value);
  
}

const mainHomeObject = computed(() =>
  page.value ? {
    title: page.value.acf.title_1,
    buttonLeft: page.value.acf.button_text_left_1,
    buttonRight: page.value.acf.button_text_right_1
  } : null
);

const aboutHomeObject = computed(() =>
  page.value ? {
    text: page.value.acf.text_2,
  } : null
);
const servicesHomeObject = computed(() =>
  page.value ? {
    head: page.value.acf.title_3,
    text: page.value.acf.text_3,
    quote: page.value.acf.quote_4
  } : null
);
const expertiseObject = computed(() =>
  page.value ? {
    title: page.value.acf.zagolovok,
    subtitle: page.value.acf.fraza
    
  } : null
);

onMounted(() => {
  console.log('homepage',page.value);
});
</script>
<template>
  <div>
    <MainHome :mainHomeObject="mainHomeObject" />
    <AboutHome :aboutHomeObject="aboutHomeObject"  />
    <ServicesHome :servicesHomeObject="servicesHomeObject" />
  </div>
</template>
<style scoped>
</style>
