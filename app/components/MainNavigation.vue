<template>
  <!-- se aconceja siempre devolver un unico elemento por ejemplo no se recomienda tener el main y el nav en el mismo archivo -->
  <nav>
    <ul>
      <li>
        <NuxtLink to="/">Home</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/products">Products</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/about">About</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/pricing">Pricing</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/pricing/planes">Planes</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/dashboard">Dashboard</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/contact">Contact</NuxtLink>
      </li>
    </ul>
  </nav>

  <!-- <main></main> -->
</template>

<style scoped>
@import "../assets/MainNavigation.css";
</style>
