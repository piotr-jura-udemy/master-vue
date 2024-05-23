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
