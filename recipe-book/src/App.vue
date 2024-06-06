<template>
  <header>
    <nav>
      <ul class="flex gap-4 p-8 bg-orange-200 text-orange-800">
        <li>
          <RouterLink :to="{ name: 'home' }" class="hover:underline">Home</RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'favorites' }" class="hover:underline">Favorites</RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'add-recipe' }" class="hover:underline">Add Recipe</RouterLink>
        </li>
      </ul>
    </nav>
  </header>

  <main class="bg-orange-100 h-screen p-4">
    <RouterView />
  </main>
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
</script>