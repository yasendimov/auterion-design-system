<script setup lang="ts">
const primitiveScales = [
  { name: 'gray', label: 'Gray', description: 'Pure achromatic' },
  { name: 'slate', label: 'Slate', description: 'Cool blue-tinted' },
  { name: 'mauve', label: 'Mauve', description: 'Red-tinted' },
  { name: 'sage', label: 'Sage', description: 'Green-tinted' },
  { name: 'sand', label: 'Sand', description: 'Warm khaki' },
  { name: 'blue', label: 'Blue', description: 'Primary accent' },
  { name: 'indigo', label: 'Indigo', description: 'h=268' },
  { name: 'violet', label: 'Violet', description: 'h=295' },
  { name: 'pink', label: 'Pink', description: 'h=335' },
  { name: 'red', label: 'Red', description: 'Alarm' },
  { name: 'orange', label: 'Orange', description: 'Warning' },
  { name: 'amber', label: 'Amber', description: 'Caution' },
  { name: 'green', label: 'Green', description: 'Ok / running' },
  { name: 'lime', label: 'Lime', description: 'h=128' },
  { name: 'teal', label: 'Teal', description: 'Data / accent' },
  { name: 'cyan', label: 'Cyan', description: 'h=200' },
  { name: 'bronze', label: 'Bronze', description: 'Aerospace' },
]

const steps = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

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
      <p class="text-[11px] text-zinc-400 dark:text-zinc-500 uppercase tracking-widest font-medium mb-3">Color</p>
      <h1 class="text-4xl font-semibold text-zinc-900 dark:text-white">Color Tokens</h1>
      <p class="text-base text-zinc-500 dark:text-zinc-400 mt-4">Primitive scales, semantic aliases, and foundation tokens.</p>
    </header>

    <div class="border-t border-zinc-200 dark:border-zinc-800"></div>

    <!-- Primitive Scales -->
    <section class="px-8 lg:px-16 py-16">
      <h2 class="text-xl font-semibold text-zinc-900 dark:text-white mb-1">Primitive Scales</h2>
      <p class="text-sm text-zinc-500 dark:text-zinc-400 mb-8">10-step chromatic scales. Steps 1-10 go from lightest to darkest (light mode) or darkest to lightest (dark mode).</p>

      <div class="grid gap-1 mb-3" style="grid-template-columns: 140px repeat(10, 1fr)">
        <div></div>
        <div v-for="s in steps" :key="s" class="text-center text-xs text-zinc-400 dark:text-zinc-500 font-mono">{{ s }}</div>
      </div>

      <div
        v-for="scale in primitiveScales"
        :key="scale.name"
        class="grid gap-1 mb-1"
        style="grid-template-columns: 140px repeat(10, 1fr)"
      >
        <div class="flex items-center text-sm">
          <span class="font-medium text-zinc-900 dark:text-white">{{ scale.label }}</span>
          <span class="ml-2 text-xs text-zinc-400 dark:text-zinc-500 hidden sm:inline">{{ scale.description }}</span>
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

    <div class="border-t border-zinc-200 dark:border-zinc-800"></div>

    <!-- Neutral Alpha -->
    <section class="px-8 lg:px-16 py-16">
      <h2 class="text-xl font-semibold text-zinc-900 dark:text-white mb-1">Neutral Alpha</h2>
      <p class="text-sm text-zinc-500 dark:text-zinc-400 mb-8">Semi-transparent overlays. Black in light mode, white in dark mode.</p>

      <div class="grid gap-1" style="grid-template-columns: 140px repeat(10, 1fr)">
        <div></div>
        <div v-for="s in steps" :key="s" class="text-center text-xs text-zinc-400 dark:text-zinc-500 font-mono">{{ s }}</div>
      </div>
      <div class="grid gap-1 mt-1" style="grid-template-columns: 140px repeat(10, 1fr)">
        <div class="flex items-center text-sm font-medium text-zinc-900 dark:text-white">Alpha</div>
        <div
          v-for="s in steps"
          :key="s"
          class="h-10 rounded border border-zinc-200 dark:border-zinc-800"
          :style="{ backgroundColor: `var(--color-neutral-alpha-${s})` }"
          :title="`--color-neutral-alpha-${s}`"
        ></div>
      </div>

      <div class="mt-4">
        <p class="text-xs text-zinc-400 dark:text-zinc-500 mb-2">On patterned background:</p>
        <div
          class="grid gap-1 p-4 rounded-lg"
          style="grid-template-columns: repeat(10, 1fr); background-image: repeating-conic-gradient(#d4d4d8 0% 25%, #e4e4e7 0% 50%); background-size: 16px 16px;"
        >
          <div
            v-for="s in steps"
            :key="s"
            class="h-10 rounded"
            :style="{ backgroundColor: `var(--color-neutral-alpha-${s})` }"
            :title="`--color-neutral-alpha-${s}`"
          ></div>
        </div>
      </div>
    </section>

    <div class="border-t border-zinc-200 dark:border-zinc-800"></div>

    <!-- Semantic Aliases -->
    <section class="px-8 lg:px-16 py-16">
      <h2 class="text-xl font-semibold text-zinc-900 dark:text-white mb-1">Semantic Aliases</h2>
      <p class="text-sm text-zinc-500 dark:text-zinc-400 mb-8">Status and intent tokens. Components should use these, not raw primitives.</p>

      <div class="grid gap-1 mb-3" style="grid-template-columns: 140px repeat(6, 1fr)">
        <div></div>
        <div class="text-center text-xs text-zinc-400 dark:text-zinc-500">subtle</div>
        <div class="text-center text-xs text-zinc-400 dark:text-zinc-500">muted</div>
        <div class="text-center text-xs text-zinc-400 dark:text-zinc-500">border</div>
        <div class="text-center text-xs text-zinc-400 dark:text-zinc-500">default</div>
        <div class="text-center text-xs text-zinc-400 dark:text-zinc-500">hover</div>
        <div class="text-center text-xs text-zinc-400 dark:text-zinc-500">text</div>
      </div>

      <div
        v-for="group in semanticGroups"
        :key="group.name"
        class="grid gap-1 mb-1"
        style="grid-template-columns: 140px repeat(6, 1fr)"
      >
        <div class="flex items-center text-sm">
          <span class="font-medium text-zinc-900 dark:text-white">{{ group.label }}</span>
          <span class="ml-2 text-xs text-zinc-400 dark:text-zinc-500 hidden sm:inline">{{ group.description }}</span>
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

    <div class="border-t border-zinc-200 dark:border-zinc-800"></div>

    <!-- Foundation Tokens -->
    <section class="px-8 lg:px-16 py-16">
      <h2 class="text-xl font-semibold text-zinc-900 dark:text-white mb-1">Foundation Tokens</h2>
      <p class="text-sm text-zinc-500 dark:text-zinc-400 mb-8">Page backgrounds, text colors, borders, and surfaces.</p>

      <div class="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div>
          <p class="text-[11px] text-zinc-400 dark:text-zinc-500 mb-2 font-medium uppercase tracking-widest">Page</p>
          <div class="space-y-1">
            <div class="h-10 rounded border border-zinc-200 dark:border-zinc-800" :style="{ backgroundColor: 'var(--color-page)' }" title="--color-page"></div>
            <p class="text-xs text-zinc-400 dark:text-zinc-500 font-mono">page</p>
            <div class="h-10 rounded border border-zinc-200 dark:border-zinc-800" :style="{ backgroundColor: 'var(--color-page-subtle)' }" title="--color-page-subtle"></div>
            <p class="text-xs text-zinc-400 dark:text-zinc-500 font-mono">page-subtle</p>
          </div>
        </div>

        <div>
          <p class="text-[11px] text-zinc-400 dark:text-zinc-500 mb-2 font-medium uppercase tracking-widest">Text</p>
          <div class="space-y-1">
            <div class="h-10 rounded flex items-center px-3 bg-zinc-50 dark:bg-zinc-900">
              <span class="text-sm" :style="{ color: 'var(--color-high)' }">high</span>
            </div>
            <div class="h-10 rounded flex items-center px-3 bg-zinc-50 dark:bg-zinc-900">
              <span class="text-sm" :style="{ color: 'var(--color-low)' }">low</span>
            </div>
            <div class="h-10 rounded flex items-center px-3 bg-zinc-50 dark:bg-zinc-900">
              <span class="text-sm" :style="{ color: 'var(--color-link)' }">link</span>
            </div>
          </div>
        </div>

        <div>
          <p class="text-[11px] text-zinc-400 dark:text-zinc-500 mb-2 font-medium uppercase tracking-widest">Borders</p>
          <div class="space-y-1">
            <div class="h-10 rounded" :style="{ border: '2px solid var(--color-line)' }">
              <span class="text-xs text-zinc-400 dark:text-zinc-500 font-mono px-3 leading-[36px]">line</span>
            </div>
            <div class="h-10 rounded" :style="{ border: '2px solid var(--color-line-hover)' }">
              <span class="text-xs text-zinc-400 dark:text-zinc-500 font-mono px-3 leading-[36px]">line-hover</span>
            </div>
            <div class="h-10 rounded" :style="{ border: '2px solid var(--color-line-active)' }">
              <span class="text-xs text-zinc-400 dark:text-zinc-500 font-mono px-3 leading-[36px]">line-active</span>
            </div>
          </div>
        </div>

        <div>
          <p class="text-[11px] text-zinc-400 dark:text-zinc-500 mb-2 font-medium uppercase tracking-widest">Surfaces</p>
          <div class="space-y-1">
            <div class="h-10 rounded border border-zinc-200 dark:border-zinc-800" :style="{ backgroundColor: 'var(--color-surface-1)' }" title="--color-surface-1"></div>
            <p class="text-xs text-zinc-400 dark:text-zinc-500 font-mono">surface-1</p>
            <div class="h-10 rounded border border-zinc-200 dark:border-zinc-800" :style="{ backgroundColor: 'var(--color-surface-2)' }" title="--color-surface-2"></div>
            <p class="text-xs text-zinc-400 dark:text-zinc-500 font-mono">surface-2</p>
            <div class="h-10 rounded border border-zinc-200 dark:border-zinc-800" :style="{ backgroundColor: 'var(--color-surface-3)' }" title="--color-surface-3"></div>
            <p class="text-xs text-zinc-400 dark:text-zinc-500 font-mono">surface-3</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
