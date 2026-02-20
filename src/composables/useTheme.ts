import { ref } from 'vue'

const isDark = ref(true)

export function useTheme() {
  function initialize() {
    isDark.value = document.documentElement.getAttribute('data-theme') === 'dark'
  }

  function toggle() {
    isDark.value = !isDark.value
    document.documentElement.setAttribute('data-theme', isDark.value ? 'dark' : 'light')
  }

  return { isDark, initialize, toggle }
}
