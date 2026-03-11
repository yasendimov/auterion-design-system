import { onMounted, onUnmounted, watch, ref, type Ref } from 'vue'
import { useRoute } from 'vue-router'

/**
 * Auto-discovers elements inside `containerRef` and animates them
 * as they scroll into view using IntersectionObserver.
 *
 * Targets:
 *  - Every <section> gets `data-reveal`
 *  - Grids (.grid) and dividers (.divide-y) inside sections get `data-reveal-stagger`
 */
export function useScrollReveal(containerRef: Ref<HTMLElement | null>) {
  let observer: IntersectionObserver | null = null
  const route = useRoute()
  const isSetup = ref(false)

  function setup() {
    cleanup()

    const container = containerRef.value
    if (!container) return

    observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed')
            observer?.unobserve(entry.target)
          }
        }
      },
      { threshold: 0.05, rootMargin: '0px 0px -60px 0px' }
    )

    // Mark sections for reveal
    const sections = container.querySelectorAll('section')
    for (const section of sections) {
      // Find the inner content wrapper (first child div or the section itself)
      const inner = section.querySelector(':scope > div') || section
      inner.setAttribute('data-reveal', '')
      observer.observe(inner)

      // Find grids and lists for stagger animation
      const grids = inner.querySelectorAll('.grid, .divide-y')
      for (const grid of grids) {
        grid.setAttribute('data-reveal-stagger', '')
        observer.observe(grid)
      }
    }

    isSetup.value = true
  }

  function cleanup() {
    if (observer) {
      observer.disconnect()
      observer = null
    }

    const container = containerRef.value
    if (container) {
      const revealed = container.querySelectorAll('[data-reveal], [data-reveal-stagger]')
      for (const el of revealed) {
        el.classList.remove('revealed')
        el.removeAttribute('data-reveal')
        el.removeAttribute('data-reveal-stagger')
      }
    }

    isSetup.value = false
  }

  onMounted(() => {
    // Small delay to let the initial page render
    requestAnimationFrame(() => setup())
  })

  // Re-run on route change (for sub-page navigation)
  watch(
    () => route.path,
    () => {
      // Wait for Vue to render the new page
      requestAnimationFrame(() => {
        requestAnimationFrame(() => setup())
      })
    }
  )

  onUnmounted(() => cleanup())
}
