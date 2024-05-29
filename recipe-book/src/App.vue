<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <header>
    <nav>
      <ul>
        <li>
          <RouterLink :to="{ name: 'home' }">Home</RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'favorites' }">Favorites</RouterLink>
        </li>
      </ul>
    </nav>
  </header>

  <RouterView />
</template>