<script setup lang="ts">
import { ref, watchEffect } from 'vue'
import { useRoute } from 'vue-router'
import ThemeToggle from '@/components/ThemeToggle.vue'

const route = useRoute()

interface NavItem {
  label: string
  to?: string
  children?: NavItem[]
}

const navigation: NavItem[] = [
  { label: 'Home', to: '/' },
  {
    label: 'Strategy',
    children: [
      { label: 'Brand Idea', to: '/strategy/brand-idea' },
      { label: 'Voice Principles', to: '/strategy/voice-principles' },
      { label: 'Writing Auterion', to: '/strategy/writing' },
      { label: 'Formatting & Structure', to: '/strategy/formatting' },
    ],
  },
  {
    label: 'Logo',
    children: [
      { label: 'Introduction', to: '/logo/introduction' },
      { label: 'The Basics', to: '/logo/the-basics' },
      { label: 'Lockup', to: '/logo/lockup' },
      { label: 'Scale', to: '/logo/scale' },
      { label: 'Black & White', to: '/logo/black-and-white' },
      { label: 'Placement', to: '/logo/placement' },
    ],
  },
  {
    label: 'Typography',
    children: [
      { label: 'Introduction', to: '/typography/introduction' },
      { label: 'Using Type', to: '/typography/using-type' },
      { label: 'Formatting & Structure', to: '/typography/formatting' },
    ],
  },
  {
    label: 'Color',
    children: [
      { label: 'Introduction', to: '/color/introduction' },
      { label: 'Primitives', to: '/color/primitives' },
      { label: 'Semantic Tokens', to: '/color/semantic' },
      { label: 'Black & White', to: '/color/black-and-white' },
    ],
  },
  {
    label: 'Photography',
    children: [
      { label: 'Art Direction', to: '/photography/art-direction' },
      { label: 'YouTube Guide', to: '/photography/youtube' },
      { label: 'Social Media', to: '/photography/social-media' },
      { label: 'Blog Guidelines', to: '/photography/blog' },
    ],
  },
  {
    label: 'Iconography',
    children: [
      { label: 'Introduction', to: '/iconography/introduction' },
      { label: 'Product Symbols', to: '/iconography/product-symbols' },
      { label: 'Functional Icons', to: '/iconography/functional-icons' },
    ],
  },
  {
    label: 'Language & Style',
    children: [
      { label: 'Voice Principles', to: '/language/voice-principles' },
      { label: 'Writing Auterion', to: '/language/writing' },
      { label: 'Product Names', to: '/language/product-names' },
      { label: 'Blog Guidelines', to: '/language/blog' },
      { label: 'Social Media', to: '/language/social-media' },
    ],
  },
  { label: 'Gallery', to: '/gallery' },
]

const expandedSections = ref<Set<string>>(new Set())

function toggleSection(label: string) {
  if (expandedSections.value.has(label)) {
    expandedSections.value.delete(label)
  } else {
    expandedSections.value.add(label)
  }
}

function isActive(path: string): boolean {
  return route.path === path
}

// Auto-expand section containing the active route
watchEffect(() => {
  for (const item of navigation) {
    if (item.children?.some(child => child.to === route.path)) {
      expandedSections.value.add(item.label)
    }
  }
})
</script>

<template>
  <aside class="h-screen sticky top-0 flex flex-col border-r border-border-subtle bg-surface-1">
    <!-- Brand header -->
    <div class="p-4 border-b border-border-subtle">
      <router-link to="/" class="block">
        <h1 class="text-sm font-bold text-text-primary">
          Auterion Design System
        </h1>
      </router-link>
      <ThemeToggle class="mt-3" />
    </div>

    <!-- Navigation -->
    <nav class="flex-1 overflow-y-auto p-3">
      <ul class="space-y-0.5">
        <template v-for="item in navigation" :key="item.label">
          <!-- Leaf link -->
          <li v-if="!item.children">
            <router-link
              :to="item.to!"
              class="block px-3 py-2 rounded-lg text-sm transition-colors"
              :class="isActive(item.to!)
                ? 'bg-primary-subtle text-primary-text font-medium'
                : 'text-text-secondary hover:bg-surface-2 hover:text-text-primary'"
            >
              {{ item.label }}
            </router-link>
          </li>

          <!-- Collapsible section -->
          <li v-else>
            <button
              @click="toggleSection(item.label)"
              class="w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm text-text-secondary hover:bg-surface-2 hover:text-text-primary transition-colors"
            >
              <span class="font-medium">{{ item.label }}</span>
              <svg
                class="w-4 h-4 transition-transform"
                :class="expandedSections.has(item.label) ? 'rotate-90' : ''"
                fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"
              >
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>

            <ul
              v-show="expandedSections.has(item.label)"
              class="mt-0.5 ml-3 pl-3 border-l border-border-subtle space-y-0.5"
            >
              <li v-for="child in item.children" :key="child.label">
                <router-link
                  :to="child.to!"
                  class="block px-3 py-1.5 rounded-lg text-sm transition-colors"
                  :class="isActive(child.to!)
                    ? 'bg-primary-subtle text-primary-text font-medium'
                    : 'text-text-tertiary hover:bg-surface-2 hover:text-text-primary'"
                >
                  {{ child.label }}
                </router-link>
              </li>
            </ul>
          </li>
        </template>
      </ul>
    </nav>

    <!-- Footer -->
    <div class="p-4 border-t border-border-subtle">
      <p class="text-xs text-text-tertiary">v0.1.0</p>
    </div>
  </aside>
</template>
