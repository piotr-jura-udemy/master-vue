<script lang="ts" setup>
interface Item {
  id: number;
  name: string;
}
defineProps<{items: Item[]}>()
</script>

<template>
  <ul>
    <li v-for="item in items" :key="item.id">
      <slot name="item" :item="item"></slot>
    </li>
  </ul>
</template>