<script setup lang="ts">
const sections = [
  {
    title: 'Strategy',
    description: 'Brand idea, voice principles, and writing guidelines.',
    items: [
      { label: 'Brand Idea', to: '/strategy/brand-idea', description: 'Core brand positioning and mission.' },
      { label: 'Voice Principles', to: '/strategy/voice-principles', description: 'How the brand sounds and communicates.' },
    ],
  },
  {
    title: 'Logo',
    description: 'Logo usage, lockups, scale, and placement guidelines.',
    items: [
      { label: 'The Basics', to: '/logo/the-basics', description: 'Core logo rules and usage.' },
      { label: 'Lockup', to: '/logo/lockup', description: 'Logo lockup variations.' },
    ],
  },
  {
    title: 'Typography',
    description: 'Typeface selection, usage, and formatting rules.',
    items: [
      { label: 'Using Type', to: '/typography/using-type', description: 'Type hierarchy and application.' },
    ],
  },
  {
    title: 'Color',
    description: 'Primitive scales, semantic tokens, and color usage.',
    items: [
      { label: 'Primitives', to: '/color/primitives', description: '17 chromatic scales with 10 steps each.' },
      { label: 'Semantic Tokens', to: '/color/semantic', description: 'Status, text, border, and surface tokens.' },
    ],
  },
  {
    title: 'Photography',
    description: 'Art direction, platform-specific guidelines.',
    items: [
      { label: 'Art Direction', to: '/photography/art-direction', description: 'Photography style and composition.' },
    ],
  },
  {
    title: 'Iconography',
    description: 'Product symbols and functional icon library.',
    items: [
      { label: 'Product Symbols', to: '/iconography/product-symbols', description: 'App and feature iconography.' },
      { label: 'Functional Icons', to: '/iconography/functional-icons', description: 'UI and interaction icons.' },
    ],
  },
  {
    title: 'Language & Style',
    description: 'Writing guidelines, product names, and content standards.',
    items: [
      { label: 'Voice Principles', to: '/language/voice-principles', description: 'Tone and messaging guidelines.' },
      { label: 'Product Names', to: '/language/product-names', description: 'Naming conventions and usage.' },
    ],
  },
]
</script>

<template>
  <div class="p-8 max-w-4xl">
    <header class="mb-12">
      <h1 class="text-3xl font-bold text-text-primary">
        Auterion Design System
      </h1>
      <p class="text-text-secondary mt-2 text-lg">
        Design tokens, components, and patterns for Auterion products.
      </p>
      <p class="text-text-tertiary mt-1 text-sm">
        Dark mode primary. Built for aerospace interfaces.
      </p>
    </header>

    <div v-for="section in sections" :key="section.title" class="mb-10">
      <h2 class="text-lg font-semibold text-text-primary mb-1">{{ section.title }}</h2>
      <p class="text-sm text-text-tertiary mb-4">{{ section.description }}</p>

      <div class="grid gap-3 sm:grid-cols-2">
        <router-link
          v-for="item in section.items"
          :key="item.label"
          :to="item.to"
          class="block p-4 rounded-lg border border-border-subtle bg-surface-1
                 hover:border-border-default hover:bg-surface-2 transition-colors group"
        >
          <h3 class="text-sm font-medium text-text-primary group-hover:text-primary-text">
            {{ item.label }}
          </h3>
          <p class="text-xs text-text-tertiary mt-1">{{ item.description }}</p>
        </router-link>
      </div>
    </div>
  </div>
</template>
