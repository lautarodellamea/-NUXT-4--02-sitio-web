<template>
  <!-- para elegir cual layout usar -->
  <!-- <NuxtLayout name="dashboard-layout"> -->
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<!-- si no le ponemos el scope, estos estilos seran globales -->
<style>
/* Al final los estilos globales los ponemos en el archivo main.css y recordar agregar la configuracion en nuxt.config.ts */
/* body {
  background-color: #020420;
  font-family: "Roboto", sans-serif;
  color: #fff;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  color: #00dc82;
} */
</style>
