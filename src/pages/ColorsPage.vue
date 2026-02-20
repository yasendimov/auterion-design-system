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
  {
    name: 'primary',
    label: 'Primary',
    description: 'Blue — interactive elements',
    variants: ['subtle', 'muted', 'border', 'default', 'hover', 'text'],
  },
  {
    name: 'alarm',
    label: 'Alarm',
    description: 'Red — immediate action required',
    variants: ['subtle', 'muted', 'border', 'default', 'hover', 'text'],
  },
  {
    name: 'warning',
    label: 'Warning',
    description: 'Orange — prompt action required',
    variants: ['subtle', 'muted', 'border', 'default', 'hover', 'text'],
  },
  {
    name: 'caution',
    label: 'Caution',
    description: 'Amber — awareness required',
    variants: ['subtle', 'muted', 'border', 'default', 'hover', 'text'],
  },
  {
    name: 'ok',
    label: 'Ok',
    description: 'Green — nominal / running',
    variants: ['subtle', 'muted', 'border', 'default', 'hover', 'text'],
  },
  {
    name: 'accent',
    label: 'Accent',
    description: 'Teal — data visualisation',
    variants: ['subtle', 'muted', 'border', 'default', 'hover', 'text'],
  },
]

function semanticVarName(group: string, variant: string): string {
  if (variant === 'default') return `--color-${group}`
  return `--color-${group}-${variant}`
}
</script>

<template>
  <div class="p-8">
    <header class="mb-12">
      <h1 class="text-3xl font-bold">Color Tokens</h1>
      <p class="text-text-secondary mt-1">Primitive scales, semantic aliases, and foundation tokens.</p>
    </header>

    <!-- Primitive Scales -->
    <section class="mb-16">
      <h2 class="text-xl font-semibold mb-1">Primitive Scales</h2>
      <p class="text-text-tertiary text-sm mb-6">10-step chromatic scales. Steps 1-10 go from lightest to darkest (light mode) or darkest to lightest (dark mode).</p>

      <!-- Step legend -->
      <div class="grid gap-1 mb-3" style="grid-template-columns: 140px repeat(10, 1fr)">
        <div></div>
        <div v-for="s in steps" :key="s" class="text-center text-xs text-text-tertiary font-mono">{{ s }}</div>
      </div>

      <!-- Scale rows -->
      <div
        v-for="scale in primitiveScales"
        :key="scale.name"
        class="grid gap-1 mb-1"
        style="grid-template-columns: 140px repeat(10, 1fr)"
      >
        <div class="flex items-center text-sm">
          <span class="font-medium text-text-primary">{{ scale.label }}</span>
          <span class="ml-2 text-xs text-text-tertiary hidden sm:inline">{{ scale.description }}</span>
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

    <!-- Neutral Alpha -->
    <section class="mb-16">
      <h2 class="text-xl font-semibold mb-1">Neutral Alpha</h2>
      <p class="text-text-tertiary text-sm mb-6">Semi-transparent overlays. Black in light mode, white in dark mode.</p>

      <div class="grid gap-1" style="grid-template-columns: 140px repeat(10, 1fr)">
        <div></div>
        <div v-for="s in steps" :key="s" class="text-center text-xs text-text-tertiary font-mono">{{ s }}</div>
      </div>
      <div class="grid gap-1 mt-1" style="grid-template-columns: 140px repeat(10, 1fr)">
        <div class="flex items-center text-sm font-medium text-text-primary">Alpha</div>
        <div
          v-for="s in steps"
          :key="s"
          class="h-10 rounded border border-border-subtle"
          :style="{ backgroundColor: `var(--color-neutral-alpha-${s})` }"
          :title="`--color-neutral-alpha-${s}`"
        ></div>
      </div>

      <!-- Checkerboard demo -->
      <div class="mt-4">
        <p class="text-xs text-text-tertiary mb-2">On patterned background:</p>
        <div
          class="grid gap-1 p-4 rounded-lg"
          style="grid-template-columns: repeat(10, 1fr); background-image: repeating-conic-gradient(var(--color-gray-3) 0% 25%, var(--color-gray-1) 0% 50%); background-size: 16px 16px;"
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

    <!-- Semantic Aliases -->
    <section class="mb-16">
      <h2 class="text-xl font-semibold mb-1">Semantic Aliases</h2>
      <p class="text-text-tertiary text-sm mb-6">Status and intent tokens. Components should use these, not raw primitives.</p>

      <!-- Variant legend -->
      <div class="grid gap-1 mb-3" style="grid-template-columns: 140px repeat(6, 1fr)">
        <div></div>
        <div class="text-center text-xs text-text-tertiary">subtle</div>
        <div class="text-center text-xs text-text-tertiary">muted</div>
        <div class="text-center text-xs text-text-tertiary">border</div>
        <div class="text-center text-xs text-text-tertiary">default</div>
        <div class="text-center text-xs text-text-tertiary">hover</div>
        <div class="text-center text-xs text-text-tertiary">text</div>
      </div>

      <div
        v-for="group in semanticGroups"
        :key="group.name"
        class="grid gap-1 mb-1"
        style="grid-template-columns: 140px repeat(6, 1fr)"
      >
        <div class="flex items-center text-sm">
          <span class="font-medium text-text-primary">{{ group.label }}</span>
          <span class="ml-2 text-xs text-text-tertiary hidden sm:inline">{{ group.description }}</span>
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

    <!-- Foundation Tokens -->
    <section class="mb-16">
      <h2 class="text-xl font-semibold mb-1">Foundation Tokens</h2>
      <p class="text-text-tertiary text-sm mb-6">Page backgrounds, text colors, borders, and surfaces.</p>

      <div class="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <!-- Page -->
        <div>
          <p class="text-xs text-text-tertiary mb-2 font-medium uppercase tracking-wider">Page</p>
          <div class="space-y-1">
            <div class="h-10 rounded border border-border-subtle bg-page-bg" title="--color-page-bg"></div>
            <p class="text-xs text-text-tertiary font-mono">page-bg</p>
            <div class="h-10 rounded border border-border-subtle bg-page-bg-subtle" title="--color-page-bg-subtle"></div>
            <p class="text-xs text-text-tertiary font-mono">page-bg-subtle</p>
          </div>
        </div>

        <!-- Text -->
        <div>
          <p class="text-xs text-text-tertiary mb-2 font-medium uppercase tracking-wider">Text</p>
          <div class="space-y-1">
            <div class="h-10 rounded flex items-center px-3 bg-surface-1">
              <span class="text-sm text-text-primary">Primary</span>
            </div>
            <div class="h-10 rounded flex items-center px-3 bg-surface-1">
              <span class="text-sm text-text-secondary">Secondary</span>
            </div>
            <div class="h-10 rounded flex items-center px-3 bg-surface-1">
              <span class="text-sm text-text-tertiary">Tertiary</span>
            </div>
            <div class="h-10 rounded flex items-center px-3 bg-surface-1">
              <span class="text-sm text-text-disabled">Disabled</span>
            </div>
            <div class="h-10 rounded flex items-center px-3 bg-surface-1">
              <span class="text-sm text-text-link">Link</span>
            </div>
          </div>
        </div>

        <!-- Borders -->
        <div>
          <p class="text-xs text-text-tertiary mb-2 font-medium uppercase tracking-wider">Borders</p>
          <div class="space-y-1">
            <div class="h-10 rounded border-2 border-border-subtle flex items-center px-3">
              <span class="text-xs text-text-tertiary font-mono">subtle</span>
            </div>
            <div class="h-10 rounded border-2 border-border-default flex items-center px-3">
              <span class="text-xs text-text-tertiary font-mono">default</span>
            </div>
            <div class="h-10 rounded border-2 border-border-strong flex items-center px-3">
              <span class="text-xs text-text-tertiary font-mono">strong</span>
            </div>
          </div>
        </div>

        <!-- Surfaces -->
        <div>
          <p class="text-xs text-text-tertiary mb-2 font-medium uppercase tracking-wider">Surfaces</p>
          <div class="space-y-1">
            <div class="h-10 rounded border border-border-subtle bg-surface-1" title="--color-surface-1"></div>
            <p class="text-xs text-text-tertiary font-mono">surface-1</p>
            <div class="h-10 rounded border border-border-subtle bg-surface-2" title="--color-surface-2"></div>
            <p class="text-xs text-text-tertiary font-mono">surface-2</p>
            <div class="h-10 rounded border border-border-subtle bg-surface-3" title="--color-surface-3"></div>
            <p class="text-xs text-text-tertiary font-mono">surface-3</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
