<template>
  <div>Add form</div>
  <form @submit.prevent="addRecipe">
    <div>
      <input type="text" placeholder="Recipe name" v-model="name" required />
    </div>
    <div>
      <textarea v-model="description" placeholder="Recipe description" required></textarea>
    </div>
    <button type="submit">
      Add
    </button>
  </form>
</template>

<script setup lang="ts">
import { useRecipeStore } from '@/stores/recipe';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
const store = useRecipeStore();
const name = ref('');
const description = ref('');
const router = useRouter();
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