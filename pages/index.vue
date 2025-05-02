<script setup>
import MainHome from "~/components/home/MainHome.vue";
import AboutHome from "~/components/home/AboutHome.vue";
import ServicesHome from "~/components/home/ServicesHome.vue";
import { ref, watch, onMounted } from "vue";
import { useApiStore } from '~/stores/api'

const apiStore = useApiStore()
const { data: page } = await useAsyncData('homepage', () =>
  $fetch(`${apiStore.apiUrl}pages/9?acf_fields=true&_embed`)
);

const { data: projects } = await useAsyncData('projects', () =>
  $fetch(`${apiStore.apiUrl}project?per_page=4&_embed&acf_fields=true`)
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

const pergamentObject = computed(() =>
  page.value ? {
    suptitle: page.value.acf.tajtl,
    summary: page.value.acf.tekst_o_kompanii
  } : null
);
const servicesLinks = computed(() =>
  page.value ? {
    servicesLinks: page.value.acf.uslugi,
    
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
    <MainHome />
    <AboutHome  />
    <ServicesHome />
  </div>
</template>
<style scoped>
</style>
