<template>
  <main class="max-w-2xl mx-auto px-4">
    <nav class="font-medium text-center text-gray-500 border-b border-gray-200 mb-4">
      <ul class="flex flex-wrap -mb-px">
        <li v-for="tab in tabs" :key="tab.key">
          <TabLink :tab="tab" :currentTab="currentTab" @click="currentTab = tab.key" />
        </li>
      </ul>
    </nav>
    <FadeTransition>
      <KeepAlive>
        <component :is="currentTabComponent" />
      </KeepAlive>
    </FadeTransition>
    <NotificationList />
  </main>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import type { Tab, TabKey } from '@/types';
import TabLink from '@/components/TabLink.vue';
import GeneralSettings from '@/components/GeneralSettings.vue';
import NotificationsSettings from '@/components/NotificationsSettings.vue';
import PrivacySettings from '@/components/PrivacySettings.vue';
import FadeTransition from '@/components/FadeTransition.vue';
import NotificationList from '@/components/NotificationList.vue';

const tabs: Tab[] = [
  {
    key: 'General',
    label: 'General',
    component: GeneralSettings
  },
  {
    key: 'Notifications',
    label: 'Notifications',
    component: NotificationsSettings
  },
  {
    key: 'Privacy',
    label: 'Privacy',
    component: PrivacySettings
  }
];
const currentTab = ref<TabKey>('General');
const currentTabComponent = computed(
  () => tabs.find(
    tab => tab.key === currentTab.value
  )?.component
);
</script>