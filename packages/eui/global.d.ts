declare module 'vue' {
  export interface GlobalComponents {
    EAlert: typeof import('@spruce-hub/eui')['EAlert']
    ECountDown: typeof import('@spruce-hub/eui')['ECountDown']
    EIcon: typeof import('@spruce-hub/eui')['EIcon']
  }
}

export {}
