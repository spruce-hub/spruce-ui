declare module 'vue' {
  export interface GlobalComponents {
    CAlert: typeof import('@spruce-hub/cui')['CAlert']
    CFilePreview: typeof import('@spruce-hub/cui')['CFilePreview']
    CIcon: typeof import('@spruce-hub/cui')['CIcon']
  }
}

export {}
