<script setup lang="ts">
const categories = [
  {
    name: 'Navigation',
    description: 'Control movement through the interface. These icons appear in headers, sidebars, drawers, and modal dialogs.',
    icons: ['Menu', 'Back', 'Forward', 'Close', 'Expand', 'Collapse'],
  },
  {
    name: 'Actions',
    description: 'Trigger operations on data or content. Used in toolbars, context menus, and inline action buttons.',
    icons: ['Add', 'Delete', 'Edit', 'Save', 'Download', 'Upload', 'Share'],
  },
  {
    name: 'Status',
    description: 'Communicate feedback and system state. Paired with semantic colors from the alert hierarchy.',
    icons: ['Check', 'Warning', 'Error', 'Info', 'Loading'],
  },
  {
    name: 'Media',
    description: 'Control playback and recording for camera feeds, video logs, and live telemetry streams.',
    icons: ['Play', 'Pause', 'Stop', 'Record', 'Fullscreen'],
  },
  {
    name: 'Data',
    description: 'Manipulate and configure data views. Common in tables, dashboards, and telemetry panels.',
    icons: ['Filter', 'Sort', 'Search', 'Settings', 'Refresh'],
  },
]
</script>

<template>
  <div>
    <header class="px-8 lg:px-16 pt-16 pb-12">
      <p class="text-[11px] text-dim uppercase tracking-widest font-medium mb-3">Iconography</p>
      <h1 class="text-5xl font-medium text-high">Functional Icons</h1>
      <p class="text-base text-low mt-4">Standard UI icons for navigation, actions, status, and controls. Built on Heroicons as the base set, these cover the universal interaction patterns shared across all software interfaces.</p>
    </header>

    <div class="border-t border-line"></div>

    <!-- Heroicons Base -->
    <section class="px-8 lg:px-16 py-16">
      <h2 class="text-xl font-semibold text-high mb-1">Heroicons Base Set</h2>
      <p class="text-sm text-low mb-8">Functional icons use Heroicons as the foundation. Heroicons provide outline (24px, 1.5px stroke) and solid (24px, filled) variants that align with our grid and stroke specifications. This avoids reinventing standard metaphors and ensures accessibility-tested iconography out of the box.</p>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="p-6 border border-line">
          <p class="text-xs font-mono text-dim mb-2">Package</p>
          <p class="text-sm font-semibold text-high font-mono">@heroicons/vue</p>
          <p class="text-xs text-low mt-1">Vue 3 component library</p>
        </div>
        <div class="p-6 border border-line">
          <p class="text-xs font-mono text-dim mb-2">Outline</p>
          <p class="text-sm font-semibold text-high font-mono">24/outline</p>
          <p class="text-xs text-low mt-1">1.5px stroke, default for most UI</p>
        </div>
        <div class="p-6 border border-line">
          <p class="text-xs font-mono text-dim mb-2">Solid</p>
          <p class="text-sm font-semibold text-high font-mono">24/solid</p>
          <p class="text-xs text-low mt-1">Filled variant for emphasis and active states</p>
        </div>
      </div>
    </section>

    <div class="border-t border-line"></div>

    <!-- Icon Categories -->
    <template v-for="(category, index) in categories" :key="category.name">
      <section class="px-8 lg:px-16 py-16">
        <h2 class="text-xl font-semibold text-high mb-1">{{ category.name }}</h2>
        <p class="text-sm text-low mb-8">{{ category.description }}</p>

        <div class="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 gap-4">
          <div v-for="icon in category.icons" :key="icon" class="text-center">
            <div class="aspect-square bg-surface-1 flex items-center justify-center">
              <span class="text-xs text-dim">{{ icon }}</span>
            </div>
            <p class="text-xs text-low mt-2">{{ icon }}</p>
          </div>
        </div>
      </section>

      <div v-if="index < categories.length - 1" class="border-t border-line"></div>
    </template>

    <div class="border-t border-line"></div>

    <!-- Implementation -->
    <section class="px-8 lg:px-16 py-16">
      <h2 class="text-xl font-semibold text-high mb-1">Implementation</h2>
      <p class="text-sm text-low mb-8">How to use functional icons in Vue components. Icons are imported individually for tree-shaking — never import the entire icon set.</p>

      <div class="p-6 border border-line font-mono text-sm">
        <p class="text-[11px] font-medium text-dim uppercase tracking-widest mb-4 font-sans">Usage example</p>
        <div class="space-y-1 text-low">
          <p><span class="text-dim">// Import from outline (default) or solid</span></p>
          <p>import { MagnifyingGlassIcon } from '@heroicons/vue/24/outline'</p>
          <p>import { MagnifyingGlassIcon } from '@heroicons/vue/24/solid'</p>
          <p class="mt-3"><span class="text-dim">// Template usage</span></p>
          <p>&lt;MagnifyingGlassIcon class="w-5 h-5" /&gt;</p>
        </div>
      </div>

      <div class="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="p-6 border border-line">
          <h3 class="text-sm font-semibold text-high mb-2">Sizing Classes</h3>
          <p class="text-sm text-low mb-3">Use Tailwind width and height classes to set icon size. Always use equal width and height.</p>
          <div class="space-y-2 font-mono text-xs text-low">
            <p><span class="text-dim">16px</span> — w-4 h-4</p>
            <p><span class="text-dim">20px</span> — w-5 h-5</p>
            <p><span class="text-dim">24px</span> — w-6 h-6</p>
            <p><span class="text-dim">32px</span> — w-8 h-8</p>
          </div>
        </div>
        <div class="p-6 border border-line">
          <h3 class="text-sm font-semibold text-high mb-2">Accessibility</h3>
          <p class="text-sm text-low mb-3">Heroicons include <code class="font-mono text-xs">aria-hidden="true"</code> by default. When an icon is the sole content of a button, add an accessible label.</p>
          <div class="space-y-2 font-mono text-xs text-low">
            <p>&lt;button aria-label="Search"&gt;</p>
            <p class="pl-4">&lt;MagnifyingGlassIcon class="w-5 h-5" /&gt;</p>
            <p>&lt;/button&gt;</p>
          </div>
        </div>
      </div>
    </section>

    <div class="border-t border-line"></div>

    <!-- When to Create Custom -->
    <section class="px-8 lg:px-16 py-16">
      <h2 class="text-xl font-semibold text-high mb-1">When to Create Custom Icons</h2>
      <p class="text-sm text-low mb-8">Heroicons covers most functional needs. Before creating a custom icon, confirm that no existing Heroicon serves the purpose.</p>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="p-6 border border-line">
          <p class="text-[11px] font-medium text-dim uppercase tracking-widest mb-3">Use Heroicons when</p>
          <ul class="space-y-2 text-sm text-low">
            <li>The concept is a universal software pattern (search, settings, close)</li>
            <li>Users from any industry would recognize the icon</li>
            <li>The icon represents a generic action, not an aerospace concept</li>
          </ul>
        </div>
        <div class="p-6 border border-line">
          <p class="text-[11px] font-medium text-dim uppercase tracking-widest mb-3">Create custom when</p>
          <ul class="space-y-2 text-sm text-low">
            <li>The concept is specific to drone operations or aerospace</li>
            <li>No Heroicon communicates the meaning accurately</li>
            <li>Misinterpretation could cause an operational error</li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>
