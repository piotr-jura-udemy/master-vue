<template>
  <div>
    <h1>{{ recipe?.name }}</h1>
    <p>{{ recipe?.description }}</p>
  </div>
</template>

<script setup lang="ts">
import { useRecipeStore } from '@/stores/recipe';
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const recipeStore = useRecipeStore();

const recipe = computed(() => recipeStore.getRecipeById(route.params.id as string));
</script>