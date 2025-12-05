<script setup lang="ts">
import type { NuxtError } from "#app";

defineProps<{
  error: NuxtError;
}>();

</script>

<template>
  <UError
    :error="error"
    :clear="{
      size: 'xl',
      icon: 'i-lucide-arrow-left',
      class: 'rounded-full',
    }"
    :ui="{
      statusCode: 'text-9xl font-thin',

    }"
  />
  <!-- <UError
    :error="{
      statusCode: 404,
      statusMessage: 'Page not found',
      message: 'The page you are looking for does not exist.'
    }"
  /> -->
</template>
