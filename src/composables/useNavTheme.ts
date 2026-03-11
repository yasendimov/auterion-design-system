import { ref, onMounted, onUnmounted, watch } from 'vue'
import { useRoute } from 'vue-router'

/**
 * Detects whether the navbar overlaps a dark section and exposes
 * a reactive `navOnDark` boolean for styling.
 *
 * Mark any section that is dark in light mode with `data-nav-dark`.
 * In dark theme, these sections invert (become light), so the logic flips.
 */
export function useNavTheme() {
  const navOnDark = ref(false)
  const route = useRoute()
  const NAV_HEIGHT = 64

  let rafId = 0

  function isDarkTheme() {
    return document.documentElement.getAttribute('data-theme') === 'dark'
  }

  function check() {
    const darkSections = document.querySelectorAll('[data-nav-dark]')
    let overlapping = false

    for (const el of darkSections) {
      const rect = el.getBoundingClientRect()
      if (rect.top < NAV_HEIGHT && rect.bottom > 0) {
        overlapping = true
        break
      }
    }

    // In dark theme, the marked sections are actually light (they invert),
    // so overlapping means the nav is on a light section — navOnDark stays false.
    // In light theme, overlapping means the nav is on a dark section.
    navOnDark.value = isDarkTheme() ? false : overlapping
  }

  function onScroll() {
    cancelAnimationFrame(rafId)
    rafId = requestAnimationFrame(check)
  }

  // Watch for theme changes via MutationObserver on data-theme attribute
  let themeObserver: MutationObserver | null = null

  onMounted(() => {
    window.addEventListener('scroll', onScroll, { passive: true })
    requestAnimationFrame(check)

    themeObserver = new MutationObserver(check)
    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme'],
    })
  })

  watch(
    () => route.path,
    () => {
      requestAnimationFrame(() => {
        requestAnimationFrame(check)
      })
    }
  )

  onUnmounted(() => {
    window.removeEventListener('scroll', onScroll)
    cancelAnimationFrame(rafId)
    themeObserver?.disconnect()
  })

  return { navOnDark }
}
