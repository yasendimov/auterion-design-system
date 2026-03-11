<script setup lang="ts">
const scaleZones = [
  { steps: '1 - 3', purpose: 'Backgrounds', detail: 'Subtle, hovered, and active/selected states', example: 'subtle / muted / active' },
  { steps: '4 - 6', purpose: 'Borders', detail: 'Subtle dividers, default borders, and hovered borders', example: 'border / focus ring / hover' },
  { steps: '7 - 8', purpose: 'Solid fills', detail: 'Accent color and its hover state. Step 7 stays the same across light and dark themes.', example: 'button fill / hover fill' },
  { steps: '9 - 10', purpose: 'Text', detail: 'Low-contrast secondary text and high-contrast primary text', example: 'caption / heading' },
]

const flowSteps = [
  { layer: 'Primitive', token: '--color-blue-7', description: 'Raw scale value. Changes per theme.' },
  { layer: 'Semantic', token: '--color-primary', description: 'Intent-based alias. Defined once via var().' },
  { layer: 'Component', token: 'bg-primary', description: 'Tailwind class or style consuming the token.' },
]
</script>

<template>
  <div>
    <header class="px-8 lg:px-16 pt-16 pb-12">
      <p class="text-[11px] text-zinc-400 dark:text-zinc-500 uppercase tracking-widest font-medium mb-3">Color</p>
      <h1 class="text-5xl font-medium text-zinc-900 dark:text-white">Introduction</h1>
      <p class="text-base text-zinc-500 dark:text-zinc-400 mt-4 max-w-xl leading-relaxed">
        The two-layer color architecture that powers every surface, border, and text element across Auterion products &mdash; from ground control stations to swarm telemetry dashboards.
      </p>
    </header>

    <div class="border-t border-zinc-200 dark:border-zinc-800"></div>

    <!-- Two-Layer Architecture -->
    <section class="px-8 lg:px-16 py-16">
      <h2 class="text-xl font-semibold text-zinc-900 dark:text-white mb-4">Two-Layer Architecture</h2>
      <p class="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed max-w-2xl mb-10">
        Colors are organized into two layers. The first layer, <strong class="text-zinc-900 dark:text-white font-medium">primitives</strong>, defines the raw chromatic scales &mdash; 17 hues with 10 steps each. The second layer, <strong class="text-zinc-900 dark:text-white font-medium">semantic aliases</strong>, maps intent-based names to those primitives. Components always consume semantic tokens, never raw scale values.
      </p>

      <div class="grid gap-4 sm:grid-cols-2">
        <div class="p-6 border border-zinc-200 dark:border-zinc-800">
          <p class="text-[11px] text-zinc-400 dark:text-zinc-500 uppercase tracking-widest font-medium mb-3">Layer 1</p>
          <h3 class="text-sm font-semibold text-zinc-900 dark:text-white mb-2">Primitives</h3>
          <p class="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed mb-4">
            Raw scale values defined as CSS custom properties. Each hue has 10 steps going from lightest backgrounds to darkest text. In dark mode, these steps invert &mdash; light values become dark, dark values become light.
          </p>
          <div class="flex gap-1">
            <div v-for="s in 10" :key="s" class="flex-1 h-8 rounded" :style="{ backgroundColor: `var(--color-blue-${s})` }"></div>
          </div>
          <p class="text-xs text-zinc-400 dark:text-zinc-500 font-mono mt-2">--color-blue-1 &hellip; --color-blue-10</p>
        </div>

        <div class="p-6 border border-zinc-200 dark:border-zinc-800">
          <p class="text-[11px] text-zinc-400 dark:text-zinc-500 uppercase tracking-widest font-medium mb-3">Layer 2</p>
          <h3 class="text-sm font-semibold text-zinc-900 dark:text-white mb-2">Semantic Aliases</h3>
          <p class="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed mb-4">
            Named tokens that reference primitives via <code class="text-xs font-mono bg-zinc-100 dark:bg-zinc-800 px-1 py-0.5 rounded">var()</code>. Defined once at <code class="text-xs font-mono bg-zinc-100 dark:bg-zinc-800 px-1 py-0.5 rounded">:root</code>. When dark mode overrides the primitives, all aliases resolve automatically. No duplication needed.
          </p>
          <div class="flex gap-1">
            <div class="flex-1 h-8 rounded" :style="{ backgroundColor: 'var(--color-primary-subtle)' }"></div>
            <div class="flex-1 h-8 rounded" :style="{ backgroundColor: 'var(--color-primary-muted)' }"></div>
            <div class="flex-1 h-8 rounded" :style="{ backgroundColor: 'var(--color-primary-border)' }"></div>
            <div class="flex-1 h-8 rounded" :style="{ backgroundColor: 'var(--color-primary)' }"></div>
            <div class="flex-1 h-8 rounded" :style="{ backgroundColor: 'var(--color-primary-hover)' }"></div>
            <div class="flex-1 h-8 rounded" :style="{ backgroundColor: 'var(--color-primary-text)' }"></div>
          </div>
          <p class="text-xs text-zinc-400 dark:text-zinc-500 font-mono mt-2">--color-primary-subtle &hellip; --color-primary-text</p>
        </div>
      </div>
    </section>

    <div class="border-t border-zinc-200 dark:border-zinc-800"></div>

    <!-- Token Flow Diagram -->
    <section class="px-8 lg:px-16 py-16">
      <h2 class="text-xl font-semibold text-zinc-900 dark:text-white mb-4">Token Flow</h2>
      <p class="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed max-w-2xl mb-8">
        Colors flow from raw primitives through semantic aliases to the components that render them. This indirection lets us change an entire theme by swapping primitives alone.
      </p>

      <div class="flex flex-col sm:flex-row gap-4 items-stretch">
        <div v-for="(step, i) in flowSteps" :key="step.layer" class="flex-1 flex flex-col">
          <div class="p-6 border border-zinc-200 dark:border-zinc-800 flex-1">
            <div class="flex items-center gap-3 mb-3">
              <span class="text-xs font-mono text-zinc-400 dark:text-zinc-500">{{ i + 1 }}</span>
              <h3 class="text-sm font-semibold text-zinc-900 dark:text-white">{{ step.layer }}</h3>
            </div>
            <p class="text-xs font-mono mb-2 px-2 py-1 rounded bg-zinc-100 dark:bg-zinc-800" :style="step.layer === 'Primitive' || step.layer === 'Semantic' ? { color: 'var(--color-primary)' } : {}">{{ step.token }}</p>
            <p class="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">{{ step.description }}</p>
          </div>
          <div v-if="i < flowSteps.length - 1" class="hidden sm:flex justify-center text-zinc-300 dark:text-zinc-600 text-lg py-1 -rotate-90 sm:rotate-0 sm:absolute sm:right-0">
          </div>
        </div>
      </div>

      <div class="mt-6 flex items-center gap-2 text-xs text-zinc-400 dark:text-zinc-500">
        <span class="font-mono">Primitive</span>
        <span>&rarr;</span>
        <span class="font-mono">Semantic</span>
        <span>&rarr;</span>
        <span class="font-mono">Component</span>
      </div>
    </section>

    <div class="border-t border-zinc-200 dark:border-zinc-800"></div>

    <!-- How Themes Work -->
    <section class="px-8 lg:px-16 py-16">
      <h2 class="text-xl font-semibold text-zinc-900 dark:text-white mb-4">How Themes Work</h2>
      <p class="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed max-w-2xl mb-8">
        Dark mode is the primary theme. Light mode is secondary. Theme switching uses the <code class="text-xs font-mono bg-zinc-100 dark:bg-zinc-800 px-1 py-0.5 rounded">data-theme</code> attribute on <code class="text-xs font-mono bg-zinc-100 dark:bg-zinc-800 px-1 py-0.5 rounded">&lt;html&gt;</code>.
      </p>

      <div class="grid gap-4 sm:grid-cols-3">
        <div class="p-6 border border-zinc-200 dark:border-zinc-800">
          <h3 class="text-sm font-semibold text-zinc-900 dark:text-white mb-2">Primitives Invert</h3>
          <p class="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
            In dark mode, light steps become dark and dark steps become light. Step 1 in light mode is near-white; in dark mode it is near-black.
          </p>
        </div>
        <div class="p-6 border border-zinc-200 dark:border-zinc-800">
          <h3 class="text-sm font-semibold text-zinc-900 dark:text-white mb-2">Step 7 Is Stable</h3>
          <p class="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
            The accent fill (step 7) remains the same hex value across both themes. This ensures brand colors like <span class="font-mono" :style="{ color: 'var(--color-blue-7)' }">#5982ff</span> stay recognizable.
          </p>
        </div>
        <div class="p-6 border border-zinc-200 dark:border-zinc-800">
          <h3 class="text-sm font-semibold text-zinc-900 dark:text-white mb-2">Aliases Auto-Resolve</h3>
          <p class="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
            Semantic tokens are defined once using <code class="text-xs font-mono bg-zinc-100 dark:bg-zinc-800 px-1 py-0.5 rounded">var()</code> references. When dark mode swaps the primitives, every alias updates automatically. Never redefine semantic aliases per theme.
          </p>
        </div>
      </div>
    </section>

    <div class="border-t border-zinc-200 dark:border-zinc-800"></div>

    <!-- 10-Step Scale -->
    <section class="px-8 lg:px-16 py-16">
      <h2 class="text-xl font-semibold text-zinc-900 dark:text-white mb-4">10-Step Scale</h2>
      <p class="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed max-w-2xl mb-8">
        Every chromatic scale follows the same 10-step structure. Each step has a defined purpose, ensuring consistent usage across every hue.
      </p>

      <!-- Visual scale bar -->
      <div class="mb-8">
        <div class="flex gap-1 mb-2">
          <div v-for="s in 10" :key="s" class="flex-1 h-12 rounded relative" :style="{ backgroundColor: `var(--color-blue-${s})` }">
            <span class="absolute inset-0 flex items-center justify-center text-xs font-mono font-medium" :class="s <= 5 ? 'text-zinc-900 dark:text-white' : s <= 8 ? 'text-white' : 'text-white dark:text-zinc-900'">{{ s }}</span>
          </div>
        </div>
        <div class="flex gap-1 text-[10px] text-zinc-400 dark:text-zinc-500">
          <div class="flex-[3] text-center">Backgrounds</div>
          <div class="flex-[3] text-center">Borders</div>
          <div class="flex-[2] text-center">Fills</div>
          <div class="flex-[2] text-center">Text</div>
        </div>
      </div>

      <!-- Detail table -->
      <div class="space-y-2">
        <div
          v-for="zone in scaleZones"
          :key="zone.steps"
          class="p-4 border border-zinc-200 dark:border-zinc-800 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6"
        >
          <div class="shrink-0 w-20">
            <span class="text-sm font-mono font-medium text-zinc-900 dark:text-white">{{ zone.steps }}</span>
          </div>
          <div class="shrink-0 w-28">
            <span class="text-sm font-semibold text-zinc-900 dark:text-white">{{ zone.purpose }}</span>
          </div>
          <div class="flex-1">
            <p class="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">{{ zone.detail }}</p>
          </div>
          <div class="shrink-0">
            <span class="text-xs font-mono text-zinc-400 dark:text-zinc-500">{{ zone.example }}</span>
          </div>
        </div>
      </div>
    </section>

    <div class="border-t border-zinc-200 dark:border-zinc-800"></div>

    <!-- Brand Character -->
    <section class="px-8 lg:px-16 py-16">
      <h2 class="text-xl font-semibold text-zinc-900 dark:text-white mb-4">Brand Character</h2>
      <p class="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed max-w-2xl mb-8">
        Auterion's color identity is built on a monochrome foundation with focused chromatic accents. The palette reflects the precision and clarity demanded by aerospace systems.
      </p>

      <div class="grid gap-4 sm:grid-cols-2">
        <div class="p-6 border border-zinc-200 dark:border-zinc-800">
          <h3 class="text-sm font-semibold text-zinc-900 dark:text-white mb-2">Monochrome Foundation</h3>
          <p class="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed mb-4">
            Pure achromatic gray (no hue tint) serves as the primary neutral. Slate (h=240) is available as a cool blue-tinted option for UI chrome.
          </p>
          <div class="flex gap-1">
            <div v-for="s in 10" :key="s" class="flex-1 h-6 rounded" :style="{ backgroundColor: `var(--color-gray-${s})` }"></div>
          </div>
          <p class="text-xs text-zinc-400 dark:text-zinc-500 font-mono mt-1">gray</p>
        </div>

        <div class="p-6 border border-zinc-200 dark:border-zinc-800">
          <h3 class="text-sm font-semibold text-zinc-900 dark:text-white mb-2">Primary Accent</h3>
          <p class="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed mb-4">
            Blue is the primary accent color, used for interactive elements, links, and focus states. Status colors (red, orange, amber, green) are reserved for alerts following the OpenBridge aviation standard.
          </p>
          <div class="flex gap-1">
            <div v-for="s in 10" :key="s" class="flex-1 h-6 rounded" :style="{ backgroundColor: `var(--color-blue-${s})` }"></div>
          </div>
          <p class="text-xs text-zinc-400 dark:text-zinc-500 font-mono mt-1">blue</p>
        </div>
      </div>
    </section>
  </div>
</template>
