declare module 'vue' {
  export interface GlobalComponents {
    CAlert: typeof import('@spruce-hub/cui')['CAlert']
    CIcon: typeof import('@spruce-hub/cui')['CIcon']
  }
}

export {}