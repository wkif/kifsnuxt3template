// https://nuxt.com/docs/api/configuration/nuxt-config
// eslint-disable-next-line no-undef
export default defineNuxtConfig({
  modules: ['@unocss/nuxt'],
  unocss: { // icon: https://icones.js.org/   interactive: https://unocss.dev/interactive/
    uno: true,
    icons: true,
    attributify: true,
    shortcuts: {},
    rules: []
  }
})
