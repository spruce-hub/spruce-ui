declare module 'vue' {
  export interface GlobalComponents {
    EHeaderMenu: (typeof import('@spruce-hub/eui'))['EHeaderMenu']
  }
}

export {}
