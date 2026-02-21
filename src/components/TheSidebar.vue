<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import ThemeToggle from '@/components/ThemeToggle.vue'

const route = useRoute()
const router = useRouter()

const sections = [
  {
    title: 'Strategy',
    items: [
      { label: 'Brand Idea', to: '/strategy/brand-idea' },
      { label: 'Voice Principles', to: '/strategy/voice-principles' },
      { label: 'Writing Auterion', to: '/strategy/writing' },
      { label: 'Formatting & Structure', to: '/strategy/formatting' },
    ],
  },
  {
    title: 'Gallery',
    items: [
      { label: 'Introduction', to: '/gallery/introduction' },
      { label: 'Marketing', to: '/gallery/marketing' },
      { label: 'Applications', to: '/gallery/applications' },
    ],
  },
  {
    title: 'Logo',
    items: [
      { label: 'Introduction', to: '/logo/introduction' },
      { label: 'The Basics', to: '/logo/the-basics' },
      { label: 'Lockup', to: '/logo/lockup' },
      { label: 'Scale', to: '/logo/scale' },
      { label: 'Black & White', to: '/logo/black-and-white' },
      { label: 'Placement', to: '/logo/placement' },
    ],
  },
  {
    title: 'Typography',
    items: [
      { label: 'Introduction', to: '/typography/introduction' },
      { label: 'Using Type', to: '/typography/using-type' },
      { label: 'Formatting', to: '/typography/formatting' },
    ],
  },
  {
    title: 'Color',
    items: [
      { label: 'Introduction', to: '/color/introduction' },
      { label: 'Primitives', to: '/color/primitives' },
      { label: 'Semantic Tokens', to: '/color/semantic' },
      { label: 'Black & White', to: '/color/black-and-white' },
    ],
  },
  {
    title: 'Photography',
    items: [
      { label: 'Art Direction', to: '/photography/art-direction' },
      { label: 'YouTube Guide', to: '/photography/youtube' },
      { label: 'Social Media', to: '/photography/social-media' },
      { label: 'Blog Guidelines', to: '/photography/blog' },
    ],
  },
  {
    title: 'Iconography',
    items: [
      { label: 'Introduction', to: '/iconography/introduction' },
      { label: 'Product Symbols', to: '/iconography/product-symbols' },
      { label: 'Functional Icons', to: '/iconography/functional-icons' },
    ],
  },
  {
    title: 'Language & Style',
    items: [
      { label: 'Voice Principles', to: '/language/voice-principles' },
      { label: 'Writing Auterion', to: '/language/writing' },
      { label: 'Product Names', to: '/language/product-names' },
      { label: 'Blog Guidelines', to: '/language/blog' },
      { label: 'Social Media', to: '/language/social-media' },
    ],
  },
]

function isActive(path: string): boolean {
  return route.path === path
}

function sectionHasActiveItem(section: typeof sections[number]): boolean {
  return section.items.some(item => isActive(item.to))
}

// Initialize: open the section that contains the current route
const openSections = ref<Set<string>>(new Set(
  sections.filter(s => sectionHasActiveItem(s)).map(s => s.title)
))

function toggleSection(section: typeof sections[number]) {
  if (openSections.value.has(section.title)) {
    openSections.value.delete(section.title)
  } else {
    openSections.value.clear()
    openSections.value.add(section.title)
    router.push(section.items[0].to)
  }
}

// Auto-open the section when navigating into it (exclusive)
watch(() => route.path, () => {
  for (const section of sections) {
    if (sectionHasActiveItem(section) && !openSections.value.has(section.title)) {
      openSections.value.clear()
      openSections.value.add(section.title)
      break
    }
  }
})

const isSectionOpen = computed(() => (title: string) => openSections.value.has(title))
</script>

<template>
  <aside class="w-64 h-screen sticky top-0 flex flex-col border-r border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 shrink-0">
    <!-- Brand -->
    <div class="h-14 px-5 flex items-center justify-between shrink-0 border-b border-zinc-200 dark:border-zinc-800">
      <router-link to="/" class="flex items-center gap-2.5">
        <svg class="w-5 h-5 shrink-0 text-zinc-900 dark:text-white" viewBox="0 0 380 380" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M327.102 266.371L369 379H285.204C278.221 379 272.087 374.57 269.823 367.973L250.195 310.197L327.102 266.371ZM347.862 213.214L142.336 278.718C133.182 281.64 124.784 272.498 128.37 263.638L175.175 149.972C179.138 140.265 193.01 140.736 196.407 150.632L222.735 228.483L303.511 202.752L232.926 13.0272C230.472 6.3355 224.15 2 216.978 2H166.304C159.416 2 153.188 6.147 150.545 12.556L11.263 355.626C6.7335 366.748 14.9432 379 27.0219 379H72.2227C78.7338 379 85.245 377.304 90.9069 374.005L352.958 224.713C355.695 223.205 356.827 219.906 355.789 216.984C354.657 213.874 351.165 212.178 347.862 213.214Z" fill="currentColor"/>
        </svg>
        <span class="text-sm font-semibold text-zinc-900 dark:text-white tracking-tight">Design System</span>
      </router-link>
      <ThemeToggle />
    </div>

    <!-- Navigation -->
    <nav class="flex-1 overflow-y-auto py-2">
      <!-- Sections -->
      <div v-for="section in sections" :key="section.title" class="mt-1 first:mt-0">
        <button
          @click="toggleSection(section)"
          class="w-full flex items-center gap-2 px-5 py-1.5 text-sm font-semibold transition-colors duration-100"
          :class="isSectionOpen(section.title)
            ? 'text-zinc-900 dark:text-white'
            : 'text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white'"
        >
          <svg
            class="w-3 h-3 shrink-0 transition-transform duration-150"
            :class="isSectionOpen(section.title) ? 'rotate-90' : ''"
            fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
          </svg>
          {{ section.title }}
        </button>
        <div
          class="grid transition-[grid-template-rows] duration-150"
          :class="isSectionOpen(section.title) ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'"
        >
          <ul class="overflow-hidden ml-7 pl-0">
            <li v-for="item in section.items" :key="item.to">
              <router-link
                :to="item.to"
                class="block px-3 py-1 text-sm rounded-md transition-colors duration-100"
                :class="isActive(item.to)
                  ? 'text-zinc-900 dark:text-white font-medium'
                  : 'text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white'"
              >
                {{ item.label }}
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <!-- Footer -->
    <div class="px-6 py-3 border-t border-zinc-200 dark:border-zinc-800 shrink-0">
      <span class="text-xs text-zinc-400 dark:text-zinc-500">v0.1.0</span>
    </div>
  </aside>
</template>
