<template>
  <section class="grid grid-cols-2 gap-8">
    <template v-if="!loading">
      <template v-if="events.length">
        <EventCard
          v-for="event in events"
          :key="event.id"
          :title="event.title"
          :when="event.date"
          :description="event.description"
          @register="$emit('register', event)"
        />
      </template>
      <template v-else>
        <div class="col-span-2 text-center text-gray-500">No events yet.</div>
      </template>
    </template>
    <template v-else>
      <LoadingEventCard v-for="i in 4" :key="i" />
    </template>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import EventCard from '@/components/EventCard.vue';
import LoadingEventCard from '@/components/LoadingEventCard.vue';

defineEmits(['register']);

const events = ref([]);
const loading = ref(false);

const fetchEvents = async () => {
  loading.value = true;
  try {
    const response = await fetch('http://localhost:3001/events');
    events.value = await response.json();
  } finally {
    loading.value = false;
  }
};

onMounted(() => fetchEvents());
</script>
