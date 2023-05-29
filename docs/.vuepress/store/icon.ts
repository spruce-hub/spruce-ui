import { reactive } from 'vue'

const getCookie = (name: string) => {
  const cookies = document.cookie.split(';')
  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].trim()
    if (cookie.startsWith(name + '=')) {
      return cookie.substring(name.length + 1)
    }
  }
  setCookie('libType', 'CUI')
  return 'CUI'
}

const setCookie = (name: string, value: string) => {
  const date = new Date()
  date.setTime(date.getTime() + 2 * 24 * 60 * 60 * 1000)
  const expires = date.toUTCString()
  document.cookie = `${name}=${value}; expires=${expires}; path=/`
}

export const iconStore = reactive({
  libType: getCookie('libType'),
  setLibType(type: string) {
    setCookie('libType', type)
    this.libType = type
  },
})
