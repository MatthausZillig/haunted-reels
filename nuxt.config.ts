// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@unocss/nuxt',
    '@vueuse/nuxt',
    'nuxt-vitest'
  ],
  css: [
    '@/assets/styles/main.css'
  ],
  runtimeConfig: {
    apiKey: '',
    apiBaseUrl: '',
    apiToken: '',
    public: {
      imgBaseUrl: '',
    }
  },
  devtools: { enabled: true }
})
