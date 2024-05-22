import { ref } from 'vue';

interface GeneralSettings {
  username: string;
  email: string;
  about: string;
  gender: string;
  country: string;
}

const general = ref<GeneralSettings>({
  about: '',
  country: 'USA',
  gender: 'male',
  email: '',
  username: ''
});

export function useSettings() {
  return {
    general
  };
}
