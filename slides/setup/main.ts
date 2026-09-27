import { useDarkMode } from '@slidev/client'
import { defineAppSetup } from '@slidev/types'

export default defineAppSetup(() => {
  if (typeof window === 'undefined') return

  const initializationKey = 'bio-course-color-initialized'
  if (!window.localStorage.getItem(initializationKey)) {
    const { isDark } = useDarkMode()
    isDark.value = false
    window.localStorage.setItem(initializationKey, 'true')
  }
})
