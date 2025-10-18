// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },

  css: ["~/assets/main.css"],

  // Metadatos de la aplicación - globalmente
  app: {
    head: {
      title: "Mi tienda de productos",
      meta: [
        { name: "description", content: "Bienvenido a mi tienda de productos" },
      ],
    },
  },

  modules: ["@nuxt/eslint", "@nuxt/fonts", "@nuxt/icon", "@nuxt/image"],

  // Esto es para que nuxt genere un sitio estatico
  // SPA - Single Page Application
  // ssr: false,
  // nitro: {
  //   preset: "static",
  //   static: true,
  // },

  // Prerender de todo el sitio
  nitro: {
    prerender: {
      routes: ["/", "/about", "/contact", "/pricing", "/products"],
      ignore: ["dashboard", "/dashboard/**"], // suele ser generado por el usuario del lado del cliente

      // Habilitar el crawling  para descubrir enlaces, asi los bots de los buscadores o quien sea que entre a nuestro sitio web, puedan encontrar los enlaces a esas paginas prerenderizadas
      crawlLinks: true,
    },
  },
});
