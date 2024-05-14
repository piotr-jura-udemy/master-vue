import { ref } from 'vue';

const bookings = ref([]);
const loading = ref(false);

const fetchBookings = async () => {
  loading.value = true;
  try {
    const response = await fetch('http://localhost:3001/bookings');
    bookings.value = await response.json();
  } finally {
    loading.value = false;
  }
};

export default function useBookings() {
  return {
    bookings,
    loading,
    fetchBookings
  };
}