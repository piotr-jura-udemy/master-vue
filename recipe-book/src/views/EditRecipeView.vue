<template>
  <h1 class="text-2xl font-bold mb-4">Edit form</h1>
  <form @submit.prevent="updateRecipe" class="space-y-4">
    <div>
      <input type="text" placeholder="Recipe name" v-model="name" required class="p-2 border rounded w-full" />
    </div>
    <div>
      <textarea v-model="description" placeholder="Recipe description" required
        class="p-2 border rounded w-full"></textarea>
    </div>
    <button type="submit" class="px-4 py-2 bg-orange-600 text-white rounded hover:bg-orange-700">
      Edit
    </button>
  </form>
</template>

<script setup lang="ts">
import { useRecipeStore } from '@/stores/recipe';
import { onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
const store = useRecipeStore();
const router = useRouter();
const route = useRoute();

const name = ref('');
const description = ref('');

const fetchRecipe = () => {
  const id = route.params.id as string;
  const recipe = store.getRecipeById(id);
  if (recipe) {
    name.value = recipe.name;
    description.value = recipe.description;
  } else {
    router.push({ name: 'not-found' })
  }
}

onMounted(fetchRecipe);

const updateRecipe = () => {
  store.editRecipe({
    id: route.params.id as string,
    name: name.value,
    description: description.value
  });
  router.push({
    name: 'recipe',
    params: {
      id: route.params.id as string
    }
  })
}
</script>