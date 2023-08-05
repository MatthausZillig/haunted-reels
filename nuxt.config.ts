// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@unocss/nuxt',
    '@vueuse/nuxt',
    '@pinia/nuxt',
    'nuxt-vitest'
  ],
  css: [
    '@/assets/styles/main.css'
  ],
  unocss: {
    uno: true,
    icons: true,
    attributify: true,
    shortcuts: {},
    rules: [],
  },
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
