<template>
  <div>
    <nav v-if="recipes.length > 0">
      <ul>
        <li v-for="recipe in recipes" :key="recipe.id">
          <RouterLink :to="{ name: 'recipe', params: { id: recipe.id } }">{{ recipe.name }}</RouterLink>
        </li>
      </ul>
    </nav>

    <div v-else>
      No recipes found!
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Recipe } from '@/stores/recipe';
import { RouterLink } from 'vue-router';
defineProps<{
  recipes: Recipe[]
}>();
</script>