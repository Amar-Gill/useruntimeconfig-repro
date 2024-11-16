// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  runtimeConfig: {
    backendTest: process.env.NUXT_BACKEND_TEST,
    public: { clientTest: process.env.NUXT_PUBLIC_CLIENT_TEST },
  },
});
