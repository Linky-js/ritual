<script setup>
import Breadcrumbs from "~/components/common/Breadcrumbs.vue";
import TitleBlock from "~/components/common/TitleBlock.vue";
import PrivacyText from "~/components/common/PrivacyText.vue";
import { useApiStore } from '~/stores/api'

const apiStore = useApiStore()

const { data: privacyObject } = await useAsyncData('privacy', () =>
  $fetch(`${apiStore.apiUrl}pages/297?_embed`) // замени XXX на ID страницы политики
)

</script>
<template>
  <Head>
    <Title>ABISRS - Политика в отношении обработки персональных данных</Title>
    <Meta name="description" content="Альянс бальзамировщиков и специалистов ритуального сервиса" />
  </Head>
  <Breadcrumbs :breadcrumbs="[{ label: privacyObject?.title?.rendered || 'Политика', path: '' }]" />
  <TitleBlock :title="privacyObject?.title?.rendered" />
  <PrivacyText :privacyObject="privacyObject"/>
  
</template>

<style>

</style>