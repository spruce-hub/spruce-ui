declare module 'vue' {
  export interface GlobalComponents {
    CAlert: typeof import('@spruce-hub/cui')['CAlert']
    CFilePreview: typeof import('@spruce-hub/cui')['CFilePreview']
  }
}

export {}
