import { ref, watch } from 'vue';

interface GeneralSettings {
  username: string;
  email: string;
  about: string;
  gender: string;
  country: string;
}

const general = ref<GeneralSettings>(
  (() => {
    const stored = localStorage.getItem('general');

    return stored !== null
      ? JSON.parse(stored)
      : {
          about: '',
          country: 'USA',
          gender: 'male',
          email: '',
          username: ''
        };
  })()
);

watch(general, (value) => localStorage.setItem('general', JSON.stringify(value)), { deep: true });

interface NotificationsSettings {
  email: boolean;
  sms: boolean;
}

const notifications = ref<NotificationsSettings>({
  email: false,
  sms: false
});

interface PrivacySettings {
  visbility: Visbility;
  searchEngineIndexing: boolean;
}

type Visbility = 'public' | 'private';

const privacy = ref<PrivacySettings>({
  searchEngineIndexing: false,
  visbility: 'public'
});

export function useSettings() {
  return {
    general,
    notifications,
    privacy
  };
}
