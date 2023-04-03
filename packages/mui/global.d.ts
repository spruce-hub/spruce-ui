declare module 'vue' {
  export interface GlobalComponents {
    MAlert: typeof import('@spruce-hub/mui')['MAlert']
    MIcon: typeof import('@spruce-hub/mui')['MIcon']
  }
}

export {}
