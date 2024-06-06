<template>
  <div>
    <nav v-if="recipes.length > 0">
      <ul>
        <li v-for="recipe in recipes" :key="recipe.id" class="mb-2">
          <RouterLink :to="{ name: 'recipe', params: { id: recipe.id } }" class="text-amber-600 hover:underline">{{
            recipe.name }}
          </RouterLink>
        </li>
      </ul>
    </nav>

    <div v-else class="text-gray-500">
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