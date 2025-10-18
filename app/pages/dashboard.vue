<!-- este componente debe estar al mismo nivel y tener el mismo nombre que el directorio -->

<!-- Ahora todas las rutas que desprendan del directorio dashboard aplicaran este template -->

<script setup lang="ts">
definePageMeta({
  layout: "dashboard-layout",
});
</script>

<template>
  <div>
    <h4>Hola Mundo - Dashboard Page</h4>
    <NuxtPage />
  </div>
</template>
