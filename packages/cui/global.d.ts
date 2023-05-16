declare module 'vue' {
  export interface GlobalComponents {
    CAlert: typeof import('@spruce-hub/cui')['CAlert']
    CIcon: typeof import('@spruce-hub/cui')['CIcon']
    CFilePreview: typeof import('@spruce-hub/cui')['CFilePreview']
  }
}

export {}
