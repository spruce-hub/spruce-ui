declare module 'vue' {
  export interface GlobalComponents {
    CAlert: typeof import('@spruce/cui')['CAlert']
    CIcon: typeof import('@spruce/cui')['CIcon']
  }
}

export {}
