export type TabKey = 'General' | 'Notifications' | 'Privacy';

export interface Tab {
  key: TabKey;
  label: string;
}
