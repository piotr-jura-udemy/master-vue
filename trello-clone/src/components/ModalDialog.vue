<script lang="ts" setup>
defineProps<{
  isOpen: boolean
}>()
const emit = defineEmits<{
  (e: 'close'): void
}>()
</script>

<template>
  <div v-if="isOpen" @keydown.esc="emit('close')"
  class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center" role="dialog" aria-modal="true">
    <div class="bg-white p-5 rounded max-w-md w-full">
      <h2 class="text-xl font-bold mb-4">Add New Card</h2>
      <input type="text" placeholder="Card Title" aria-label="Card Title" class="w-full p-2 mb-4 border rounded" />
      <textarea class="w-full p-2 mb-4 border rounded" placeholder="Description" aria-label="Card Description"></textarea>

      <div class="flex justify-end gap-2">
        <button class="bg-gray-300 hover:bg-gray-200 text-black px-4 py-2 rounded" @click="emit('close')">Cancel</button>
        <button class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded" @click="emit('close')">Save</button>
      </div>
    </div>
  </div>
</template>