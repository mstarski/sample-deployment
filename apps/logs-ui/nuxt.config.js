// https://v3.nuxtjs.org/api/configuration/nuxt.config

export default defineNuxtConfig({
  runtimeConfig: {
    logsApiUrl: process.env.NUXT_LOGS_API_URL ?? "",

    public: {
      appName: process.env.NUXT_PUBLIC_APP_NAME ?? "",
      appMode: process.env.NUXT_PUBLIC_APP_MODE ?? "",
    },
  },

  app: {
    head: {
      charset: "utf-16",
      viewport: "width=500, initial-scale=1",
      title: "My Logs ☕",
      meta: [
        // <meta name="description" content="My amazing site">
        { name: "description", content: "My amazing site." },
      ],
    },
  },

  css: ["~/assets/css/main.css"],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
