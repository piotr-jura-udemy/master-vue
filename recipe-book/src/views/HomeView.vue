<template>
  <main>
    <h1>Home</h1>
    <nav>
      <ul>
        <li>
          <RouterLink :to="{ name: 'recipe', params: { id: 1 } }">Recipe 1</RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'recipe', params: { id: 2 } }">Recipe 2</RouterLink>
        </li>
      </ul>
    </nav>
  </main>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>
