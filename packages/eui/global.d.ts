declare module 'vue' {
  export interface GlobalComponents {
    EAlert: typeof import('@spruce-hub/eui')['EAlert']
    EIcon: typeof import('@spruce-hub/eui')['EIcon']
  }
}

export {}
