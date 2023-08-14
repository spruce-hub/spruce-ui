declare module 'vue' {
  export interface GlobalComponents {
    EAlert: (typeof import('@spruce-hub/eui'))['EAlert']
    ECountDown: (typeof import('@spruce-hub/eui'))['ECountDown']
    EHeaderMenu: (typeof import('@spruce-hub/eui'))['EHeaderMenu']
  }
}

export {}
