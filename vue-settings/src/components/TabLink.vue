<template>Link</template>

<script setup lang="ts">
import type { Tab } from '@/types';

defineProps<{
  currentTab: string;
  tab: Tab
}>();
defineEmits<{
  click: []
}>();
</script>
