declare module 'vue' {
  export interface GlobalComponents {
    MAlert: typeof import('@spruce-hub/mui')['MAlert']
  }
}

export {}
