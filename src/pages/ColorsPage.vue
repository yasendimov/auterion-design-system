<script setup lang="ts">
const customScales = [
  { name: 'base', label: 'Base', description: 'Auterion neutral' },
  { name: 'blue', label: 'Blue', description: 'Auterion Blue' },
]

const grayScales = [
  { name: 'gray', label: 'Gray', description: 'Pure neutral' },
  { name: 'mauve', label: 'Mauve', description: 'Purple-tinted' },
  { name: 'slate', label: 'Slate', description: 'Blue-tinted' },
  { name: 'sage', label: 'Sage', description: 'Green-tinted' },
  { name: 'olive', label: 'Olive', description: 'Yellow-green' },
  { name: 'sand', label: 'Sand', description: 'Yellow-tinted' },
]

const colorScales = [
  { name: 'tomato', label: 'Tomato', description: '' },
  { name: 'red', label: 'Red', description: 'Alarm' },
  { name: 'ruby', label: 'Ruby', description: '' },
  { name: 'crimson', label: 'Crimson', description: '' },
  { name: 'pink', label: 'Pink', description: '' },
  { name: 'plum', label: 'Plum', description: '' },
  { name: 'purple', label: 'Purple', description: '' },
  { name: 'violet', label: 'Violet', description: '' },
  { name: 'iris', label: 'Iris', description: '' },
  { name: 'indigo', label: 'Indigo', description: '' },
  { name: 'cyan', label: 'Cyan', description: '' },
  { name: 'teal', label: 'Teal', description: 'Data / accent' },
  { name: 'jade', label: 'Jade', description: '' },
  { name: 'green', label: 'Green', description: 'Ok / running' },
  { name: 'grass', label: 'Grass', description: '' },
  { name: 'bronze', label: 'Bronze', description: '' },
  { name: 'gold', label: 'Gold', description: '' },
  { name: 'brown', label: 'Brown', description: '' },
  { name: 'orange', label: 'Orange', description: 'Warning' },
  { name: 'amber', label: 'Amber', description: 'Caution' },
  { name: 'yellow', label: 'Yellow', description: '' },
  { name: 'lime', label: 'Lime', description: '' },
  { name: 'mint', label: 'Mint', description: '' },
  { name: 'sky', label: 'Sky', description: '' },
]

const steps = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

const semanticGroups = [
  { name: 'primary', label: 'Primary', description: 'Blue — interactive elements', variants: ['subtle', 'muted', 'border', 'default', 'hover', 'text'] },
  { name: 'alarm', label: 'Alarm', description: 'Red — immediate action required', variants: ['subtle', 'muted', 'border', 'default', 'hover', 'text'] },
  { name: 'warning', label: 'Warning', description: 'Orange — prompt action required', variants: ['subtle', 'muted', 'border', 'default', 'hover', 'text'] },
  { name: 'caution', label: 'Caution', description: 'Amber — awareness required', variants: ['subtle', 'muted', 'border', 'default', 'hover', 'text'] },
  { name: 'ok', label: 'Ok', description: 'Green — nominal / running', variants: ['subtle', 'muted', 'border', 'default', 'hover', 'text'] },
  { name: 'accent', label: 'Accent', description: 'Teal — data visualisation', variants: ['subtle', 'muted', 'border', 'default', 'hover', 'text'] },
]

function semanticVarName(group: string, variant: string): string {
  if (variant === 'default') return `--color-${group}`
  return `--color-${group}-${variant}`
}
</script>

<template>
  <div>
    <header class="px-8 lg:px-16 pt-16 pb-12">
      <p class="text-[11px] text-dim uppercase tracking-widest font-medium mb-3">Color</p>
      <h1 class="text-5xl font-medium text-high">Primitives</h1>
      <p class="text-base text-low mt-4">Full Radix 12-step palette. 2 custom Auterion scales, 6 gray scales, and 24 chromatic scales.</p>
    </header>

    <div class="border-t border-line"></div>

    <!-- Custom Scales (Auterion) -->
    <section class="px-8 lg:px-16 py-16">
      <h2 class="text-xl font-semibold text-high mb-1">Custom Scales</h2>
      <p class="text-sm text-low mb-8">Auterion-specific scales designed in Figma. Base is pure achromatic, Blue uses #1475ff at step 9.</p>

      <div class="grid gap-1 mb-3" style="grid-template-columns: 140px repeat(12, 1fr)">
        <div></div>
        <div v-for="s in steps" :key="s" class="text-center text-xs text-dim font-mono">{{ s }}</div>
      </div>

      <div
        v-for="scale in customScales"
        :key="scale.name"
        class="grid gap-1 mb-1"
        style="grid-template-columns: 140px repeat(12, 1fr)"
      >
        <div class="flex items-center text-sm">
          <span class="font-medium text-high">{{ scale.label }}</span>
          <span class="ml-2 text-xs text-dim hidden sm:inline">{{ scale.description }}</span>
        </div>
        <div
          v-for="s in steps"
          :key="s"
          class="h-10 rounded"
          :style="{ backgroundColor: `var(--color-${scale.name}-${s})` }"
          :title="`--color-${scale.name}-${s}`"
        ></div>
      </div>
    </section>

    <div class="border-t border-line"></div>

    <!-- Gray Scales -->
    <section class="px-8 lg:px-16 py-16">
      <h2 class="text-xl font-semibold text-high mb-1">Gray Scales</h2>
      <p class="text-sm text-low mb-8">6 Radix gray variants, each with a different hue tint. Use these for neutral backgrounds, text, and borders.</p>

      <div class="grid gap-1 mb-3" style="grid-template-columns: 140px repeat(12, 1fr)">
        <div></div>
        <div v-for="s in steps" :key="s" class="text-center text-xs text-dim font-mono">{{ s }}</div>
      </div>

      <div
        v-for="scale in grayScales"
        :key="scale.name"
        class="grid gap-1 mb-1"
        style="grid-template-columns: 140px repeat(12, 1fr)"
      >
        <div class="flex items-center text-sm">
          <span class="font-medium text-high">{{ scale.label }}</span>
          <span class="ml-2 text-xs text-dim hidden sm:inline">{{ scale.description }}</span>
        </div>
        <div
          v-for="s in steps"
          :key="s"
          class="h-10 rounded"
          :style="{ backgroundColor: `var(--color-${scale.name}-${s})` }"
          :title="`--color-${scale.name}-${s}`"
        ></div>
      </div>
    </section>

    <div class="border-t border-line"></div>

    <!-- Chromatic Scales -->
    <section class="px-8 lg:px-16 py-16">
      <h2 class="text-xl font-semibold text-high mb-1">Chromatic Scales</h2>
      <p class="text-sm text-low mb-8">24 stock Radix color scales. Steps 1-12 go from lightest to darkest (light mode) or darkest to lightest (dark mode).</p>

      <div class="grid gap-1 mb-3" style="grid-template-columns: 140px repeat(12, 1fr)">
        <div></div>
        <div v-for="s in steps" :key="s" class="text-center text-xs text-dim font-mono">{{ s }}</div>
      </div>

      <div
        v-for="scale in colorScales"
        :key="scale.name"
        class="grid gap-1 mb-1"
        style="grid-template-columns: 140px repeat(12, 1fr)"
      >
        <div class="flex items-center text-sm">
          <span class="font-medium text-high">{{ scale.label }}</span>
          <span v-if="scale.description" class="ml-2 text-xs text-dim hidden sm:inline">{{ scale.description }}</span>
        </div>
        <div
          v-for="s in steps"
          :key="s"
          class="h-10 rounded"
          :style="{ backgroundColor: `var(--color-${scale.name}-${s})` }"
          :title="`--color-${scale.name}-${s}`"
        ></div>
      </div>
    </section>

    <div class="border-t border-line"></div>

    <!-- Semantic Aliases -->
    <section class="px-8 lg:px-16 py-16">
      <h2 class="text-xl font-semibold text-high mb-1">Semantic Aliases</h2>
      <p class="text-sm text-low mb-8">Status and intent tokens. Components should use these, not raw primitives.</p>

      <div class="grid gap-1 mb-3" style="grid-template-columns: 140px repeat(6, 1fr)">
        <div></div>
        <div class="text-center text-xs text-dim">subtle</div>
        <div class="text-center text-xs text-dim">muted</div>
        <div class="text-center text-xs text-dim">border</div>
        <div class="text-center text-xs text-dim">default</div>
        <div class="text-center text-xs text-dim">hover</div>
        <div class="text-center text-xs text-dim">text</div>
      </div>

      <div
        v-for="group in semanticGroups"
        :key="group.name"
        class="grid gap-1 mb-1"
        style="grid-template-columns: 140px repeat(6, 1fr)"
      >
        <div class="flex items-center text-sm">
          <span class="font-medium text-high">{{ group.label }}</span>
          <span class="ml-2 text-xs text-dim hidden sm:inline">{{ group.description }}</span>
        </div>
        <div
          v-for="variant in group.variants"
          :key="variant"
          class="h-10 rounded"
          :style="{ backgroundColor: `var(${semanticVarName(group.name, variant)})` }"
          :title="semanticVarName(group.name, variant)"
        ></div>
      </div>
    </section>

    <div class="border-t border-line"></div>

    <!-- Foundation Tokens -->
    <section class="px-8 lg:px-16 py-16">
      <h2 class="text-xl font-semibold text-high mb-1">Foundation Tokens</h2>
      <p class="text-sm text-low mb-8">Page backgrounds, text colors, borders, and surfaces.</p>

      <div class="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div>
          <p class="text-[11px] text-dim mb-2 font-medium uppercase tracking-widest">Page</p>
          <div class="space-y-1">
            <div class="h-10 rounded border border-line" :style="{ backgroundColor: 'var(--color-page)' }" title="--color-page"></div>
            <p class="text-xs text-dim font-mono">page</p>
            <div class="h-10 rounded border border-line" :style="{ backgroundColor: 'var(--color-page-subtle)' }" title="--color-page-subtle"></div>
            <p class="text-xs text-dim font-mono">page-subtle</p>
          </div>
        </div>

        <div>
          <p class="text-[11px] text-dim mb-2 font-medium uppercase tracking-widest">Text</p>
          <div class="space-y-1">
            <div class="h-10 rounded flex items-center px-3 bg-surface-1">
              <span class="text-sm" :style="{ color: 'var(--color-high)' }">high</span>
            </div>
            <div class="h-10 rounded flex items-center px-3 bg-surface-1">
              <span class="text-sm" :style="{ color: 'var(--color-low)' }">low</span>
            </div>
            <div class="h-10 rounded flex items-center px-3 bg-surface-1">
              <span class="text-sm" :style="{ color: 'var(--color-link)' }">link</span>
            </div>
          </div>
        </div>

        <div>
          <p class="text-[11px] text-dim mb-2 font-medium uppercase tracking-widest">Borders</p>
          <div class="space-y-1">
            <div class="h-10 rounded" :style="{ border: '2px solid var(--color-line)' }">
              <span class="text-xs text-dim font-mono px-3 leading-[36px]">line</span>
            </div>
            <div class="h-10 rounded" :style="{ border: '2px solid var(--color-line-hover)' }">
              <span class="text-xs text-dim font-mono px-3 leading-[36px]">line-hover</span>
            </div>
            <div class="h-10 rounded" :style="{ border: '2px solid var(--color-line-active)' }">
              <span class="text-xs text-dim font-mono px-3 leading-[36px]">line-active</span>
            </div>
          </div>
        </div>

        <div>
          <p class="text-[11px] text-dim mb-2 font-medium uppercase tracking-widest">Surfaces</p>
          <div class="space-y-1">
            <div class="h-10 rounded border border-line" :style="{ backgroundColor: 'var(--color-surface-1)' }" title="--color-surface-1"></div>
            <p class="text-xs text-dim font-mono">surface-1</p>
            <div class="h-10 rounded border border-line" :style="{ backgroundColor: 'var(--color-surface-2)' }" title="--color-surface-2"></div>
            <p class="text-xs text-dim font-mono">surface-2</p>
            <div class="h-10 rounded border border-line" :style="{ backgroundColor: 'var(--color-surface-3)' }" title="--color-surface-3"></div>
            <p class="text-xs text-dim font-mono">surface-3</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
