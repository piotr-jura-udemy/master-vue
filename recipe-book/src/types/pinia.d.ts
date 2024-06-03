import 'pinia';

declare module 'pinia' {
  export interface PiniaCustomProperties {
    secret: string;
  }
}
