<script setup lang="ts">
import {reactive} from 'vue'

interface Card {
  id: number;
  title: string;
  description: string;
}

interface List {
  id: number;
  title: string;
  cards: Card[];
}

const lists = reactive<List[]>([
  {
    id: 1,
    title: 'To Do',
    cards: [
      { id: 1, title: 'Task 1', description: 'Description for Task 1' },
      { id: 2, title: 'Task 2', description: 'Description for Task 2' }
    ]
  },
  {
    id: 2,
    title: 'In Progress',
    cards: [
      { id: 3, title: 'Task 3', description: 'Description for Task 3' },
      { id: 4, title: 'Task 4', description: 'Description for Task 4' }
    ]
  },
  {
    id: 3,
    title: 'Done',
    cards: [{ id: 5, title: 'Task 5', description: 'Description for Task 5' }]
  }
])
</script>

<template>
  <main class="p-5 font-sans">
    <div class="flex gap-5 py-5 overflow-x-auto">
      <div class="bg-gray-100 p-3 rounded-lg min-w-[250px] flex flex-col" v-for="list in lists" :key="list.id">
        <h2 class="font-medium mb-2">{{ list.title }}</h2>
        <div class="bg-white p-2 my-2 rounded shadow cursor-pointer" v-for="card in list.cards" :key="card.id">
          <span class="text-sm font-medium">{{ card.title }}</span>
          <p class="text-xs text-gray-400">
            {{ card.description }}
          </p>
        </div>

        <button class="w-full bg-transparent rounded hover:bg-white text-gray-500 p-2 text-left mt-2 text-sm font-medium">
          + Add Card
        </button>
      </div>
    </div>
  </main>
</template>