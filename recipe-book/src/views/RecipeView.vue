<template>
  <div>
    Recipe {{ $route.params.id }}
  </div>
  <nav>
    <ul>
      <li>
        <RouterLink :to="{ name: 'recipe', params: { id: 1 } }">Recipe 1</RouterLink>
      </li>
      <li>
        <RouterLink :to="{ name: 'recipe', params: { id: 3 } }">Recipe 3</RouterLink>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
// /recipe/1
// /recipe/2
import { onMounted, watch } from 'vue';
import { RouterLink, useRoute } from 'vue-router';

const route = useRoute();

console.log(route.params.id);

// onMounted(() => console.log(`Fetching data inside onMounted`));
watch(() => route.params.id, () => console.log(`Fetching inside watch`), { immediate: true });
</script>