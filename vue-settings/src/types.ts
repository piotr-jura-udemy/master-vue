import type { Component } from 'vue';

export type TabKey = 'General' | 'Notifications' | 'Privacy';

export interface Tab {
  key: TabKey;
  label: string;
  component: Component;
}
