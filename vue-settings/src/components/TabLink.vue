<template>Link</template>

<script setup lang="ts">
defineProps<{
  currentTab: string;
  tab: {
    name: string;
    label: string;
  }
}>();
defineEmits<{
  click: []
}>();
</script>
