<template>
  <h1 class="text-2xl font-bold mb-4">Add form</h1>
  <form @submit.prevent="addRecipe" class="space-y-4">
    <div>
      <input type="text" placeholder="Recipe name" v-model="name" required class="p-2 border rounded w-full" />
    </div>
    <div>
      <textarea v-model="description" placeholder="Recipe description" required
        class="p-2 border rounded w-full"></textarea>
    </div>
    <button type="submit" class="px-4 py-2 bg-orange-600 text-white rounded hover:bg-orange-700">
      Add
    </button>
  </form>
</template>

<script setup lang="ts">
import { useRecipeStore } from '@/stores/recipe';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
const store = useRecipeStore();
const router = useRouter();

const name = ref('');
const description = ref('');

const addRecipe = () => {
  const recipe = store.addRecipe({
    name: name.value,
    description: description.value
  });
  router.push({
    name: 'recipe',
    params: {
      id: recipe.id
    }
  })
}
</script>