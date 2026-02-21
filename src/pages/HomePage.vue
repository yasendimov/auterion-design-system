<script setup lang="ts">
const sections = [
  { title: 'Strategy', description: 'Brand idea, voice principles, and writing guidelines.', to: '/strategy/brand-idea', count: 4 },
  { title: 'Logo', description: 'Logo usage, lockups, scale, and placement guidelines.', to: '/logo/introduction', count: 6 },
  { title: 'Typography', description: 'Typeface selection, usage, and formatting rules.', to: '/typography/introduction', count: 3 },
  { title: 'Color', description: 'Primitive scales, semantic tokens, and color usage.', to: '/color/introduction', count: 4 },
  { title: 'Photography', description: 'Art direction and platform-specific photo guidelines.', to: '/photography/art-direction', count: 4 },
  { title: 'Iconography', description: 'Product symbols and functional icon library.', to: '/iconography/introduction', count: 3 },
  { title: 'Language & Style', description: 'Writing guidelines, product names, and content standards.', to: '/language/voice-principles', count: 5 },
  { title: 'Gallery', description: 'Visual examples and brand application showcase.', to: '/gallery/introduction', count: 3 },
]
</script>

<template>
  <div>
    <section class="px-8 lg:px-16 pt-24 pb-20">
      <h1 class="text-7xl font-semibold text-zinc-900 dark:text-white leading-none">
        Auterion<br>Design System
      </h1>
      <p class="text-base text-zinc-500 dark:text-zinc-400 mt-8 max-w-md leading-relaxed">
        Design tokens, components, and patterns for Auterion products. Dark-mode-first. Built for aerospace interfaces.
      </p>
    </section>

    <div class="border-t border-zinc-200 dark:border-zinc-800"></div>

    <section class="px-8 lg:px-16 py-16">
      <div class="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        <router-link
          v-for="section in sections"
          :key="section.title"
          :to="section.to"
          class="group block p-6 rounded-lg border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-all duration-150"
        >
          <h3 class="text-sm font-semibold text-zinc-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-150">
            {{ section.title }}
          </h3>
          <p class="text-xs text-zinc-500 dark:text-zinc-400 mt-2 leading-relaxed">{{ section.description }}</p>
          <p class="text-[11px] text-zinc-400 dark:text-zinc-500 mt-4 font-medium">{{ section.count }} {{ section.count === 1 ? 'page' : 'pages' }}</p>
        </router-link>
      </div>
    </section>
  </div>
</template>
