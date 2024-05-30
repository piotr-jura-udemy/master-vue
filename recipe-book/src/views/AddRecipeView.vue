<template>
  <div>Add form</div>
  <form @submit.prevent="addRecipe">
    <button type="submit">
      Add
    </button>
  </form>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
const router = useRouter();
const addRecipe = () => {
  router.push({
    name: 'recipe',
    params: {
      id: 1
    }
  })
}
</script>