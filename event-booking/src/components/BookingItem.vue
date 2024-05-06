<template>
  <SectionCard>
    <div class="flex justify-between">
      <div>{{ title }}</div>
      <RoundButton variant="danger">Cancel</RoundButton>
    </div>
  </SectionCard>
</template>

<script setup>
defineProps({
  title: String
});
import SectionCard from '@/components/SectionCard.vue';
import RoundButton from '@/components/RoundButton.vue';
</script>
