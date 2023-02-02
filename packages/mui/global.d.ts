declare module 'vue' {
  export interface GlobalComponents {
    MAlert: typeof import('@spruce/mui')['MAlert']
    MIcon: typeof import('@spruce/mui')['MIcon']
  }
}

export {}
