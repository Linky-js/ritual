import { defineStore } from 'pinia'

export const useApiStore = defineStore('api', () => {
  const apiUrl = ref('https://abisrs.ru/wordpress/wp-json/wp/v2/')

  const setApiUrl = (url: string) => {
    apiUrl.value = url
  }

  return { apiUrl, setApiUrl }
})