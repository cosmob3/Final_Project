import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  build: {
    transpile: ["#app"],
  },
  buildModules: [
    "@formkit/nuxt",
    "@nuxtjs/tailwindcss",
    ["@storyblok/nuxt", { accessToken: "O6OjI9c1SihrHFfAXTDTqwtt" }],
  ],
});
