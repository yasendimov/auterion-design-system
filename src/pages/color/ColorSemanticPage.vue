<script setup lang="ts">
const semanticGroups = [
  {
    name: 'primary',
    label: 'Primary',
    primitive: 'Blue',
    description: 'Interactive elements — buttons, links, focus rings, selected states. The default action color across all Auterion interfaces.',
    alertLevel: null,
  },
  {
    name: 'alarm',
    label: 'Alarm',
    primitive: 'Red',
    description: 'Immediate action required. Critical system failures, emergency stops, loss of vehicle control. Demands instant operator response.',
    alertLevel: 'Immediate action',
  },
  {
    name: 'warning',
    label: 'Warning',
    primitive: 'Orange',
    description: 'Prompt action needed. Degraded link quality, low battery approaching critical, geofence proximity. Requires timely operator attention.',
    alertLevel: 'Prompt action',
  },
  {
    name: 'caution',
    label: 'Caution',
    primitive: 'Amber',
    description: 'Awareness required. Sensor calibration needed, wind advisory, non-critical parameter drift. Operator should be informed but no immediate risk.',
    alertLevel: 'Awareness',
  },
  {
    name: 'ok',
    label: 'Ok',
    primitive: 'Green',
    description: 'Nominal status. Systems operational, mission in progress, GPS lock acquired, battery healthy. Confirms expected state.',
    alertLevel: 'Nominal',
  },
  {
    name: 'accent',
    label: 'Accent',
    primitive: 'Teal',
    description: 'Data visualization and secondary emphasis. Chart series, telemetry highlights, and decorative accents that need to stand apart from status colors.',
    alertLevel: null,
  },
]

const variants = [
  { suffix: 'subtle', step: '1', purpose: 'Background tint for containers and badges' },
  { suffix: 'muted', step: '3', purpose: 'Active/selected background state' },
  { suffix: 'border', step: '7', purpose: 'Borders and focus rings' },
  { suffix: '', step: '9', purpose: 'Solid fill — buttons, indicators, badges' },
  { suffix: 'hover', step: '10', purpose: 'Hovered state for solid fills' },
  { suffix: 'text', step: '11', purpose: 'Text and icons on neutral backgrounds' },
  { suffix: 'on-', step: '—', purpose: 'Text on top of the solid fill (step 9)' },
]

const foundationText = [
  { token: '--color-high', label: 'High contrast', description: 'Primary text — headings, body copy, key values' },
  { token: '--color-low', label: 'Low contrast', description: 'Secondary text — descriptions, captions, metadata' },
  { token: '--color-inverse', label: 'Inverse', description: 'Text on dark fills in light mode, light fills in dark mode' },
  { token: '--color-link', label: 'Link', description: 'Hyperlinks and text-based interactive elements' },
]

const foundationBorders = [
  { token: '--color-line', label: 'Default', description: 'Subtle dividers and card borders' },
  { token: '--color-line-hover', label: 'Hover', description: 'Border on hover for interactive elements' },
  { token: '--color-line-active', label: 'Active', description: 'Focused/active borders and outlines' },
]

const foundationSurfaces = [
  { token: '--color-surface-1', label: 'Surface 1', description: 'Lowest elevation — cards, input fields' },
  { token: '--color-surface-2', label: 'Surface 2', description: 'Middle elevation — dropdowns, popovers' },
  { token: '--color-surface-3', label: 'Surface 3', description: 'Highest elevation — tooltips, overlays' },
]

const foundationPage = [
  { token: '--color-page', label: 'Page', description: 'Primary page background' },
  { token: '--color-page-subtle', label: 'Page subtle', description: 'Secondary page background, alternating sections' },
]

function varName(group: string, suffix: string): string {
  if (suffix === '') return `--color-${group}`
  if (suffix === 'on-') return `--color-on-${group}`
  return `--color-${group}-${suffix}`
}

function displayName(group: string, suffix: string): string {
  if (suffix === '') return group
  if (suffix === 'on-') return `on-${group}`
  return `${group}-${suffix}`
}
</script>

<template>
  <div>
    <header class="px-10 lg:px-20 pt-24 pb-16">
      <p class="text-[11px] text-dim uppercase tracking-widest font-medium mb-5">Color</p>
      <h1 class="text-5xl font-medium text-high">Semantic Tokens</h1>
      <p class="text-base text-low mt-6 max-w-xl leading-relaxed">
        Named aliases for intent. Components consume these tokens &mdash; never raw primitives. Each group provides 7 variants covering backgrounds, borders, fills, and text.
      </p>
    </header>

    <div class="border-t border-line"></div>

    <!-- Variant Reference -->
    <section class="px-10 lg:px-20 py-24">
      <h2 class="text-xl font-semibold text-high mb-4">Variant Pattern</h2>
      <p class="text-sm text-low leading-relaxed max-w-2xl mb-8">
        Every semantic group follows the same 7-variant structure. This consistency means learning one group teaches you all of them.
      </p>

      <div class="overflow-x-auto">
        <table class="w-full text-sm">
          <thead>
            <tr class="border-b border-line">
              <th class="text-left py-2 pr-4 text-xs font-medium text-dim uppercase tracking-widest">Variant</th>
              <th class="text-left py-2 pr-4 text-xs font-medium text-dim uppercase tracking-widest">Step</th>
              <th class="text-left py-2 text-xs font-medium text-dim uppercase tracking-widest">Purpose</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="v in variants" :key="v.suffix" class="border-b border-line">
              <td class="py-2.5 pr-4 font-mono text-xs text-high">{{ v.suffix || '(base)' }}</td>
              <td class="py-2.5 pr-4 font-mono text-xs text-dim">{{ v.step }}</td>
              <td class="py-2.5 text-xs text-low">{{ v.purpose }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <div class="border-t border-line"></div>

    <!-- Semantic Groups -->
    <section class="px-10 lg:px-20 py-24">
      <h2 class="text-xl font-semibold text-high mb-1">Semantic Groups</h2>
      <p class="text-sm text-low mb-8">Six groups covering primary interaction, four alert levels (aligned with OpenBridge / aviation standards), and data visualization.</p>

      <div class="space-y-6">
        <div
          v-for="group in semanticGroups"
          :key="group.name"
          class="p-8 border border-line"
        >
          <div class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
            <div>
              <h3 class="text-sm font-semibold text-high">
                {{ group.label }}
                <span class="ml-2 text-xs font-normal text-dim">{{ group.primitive }}</span>
              </h3>
              <p class="text-xs text-low leading-relaxed mt-1 max-w-lg">{{ group.description }}</p>
            </div>
            <span
              v-if="group.alertLevel"
              class="shrink-0 text-[10px] font-medium uppercase tracking-widest px-2 py-1 rounded"
              :style="{ backgroundColor: `var(--color-${group.name}-subtle)`, color: `var(--color-${group.name}-text)` }"
            >
              {{ group.alertLevel }}
            </span>
          </div>

          <!-- Swatch row -->
          <div class="grid grid-cols-7 gap-2">
            <div v-for="v in variants" :key="v.suffix" class="flex flex-col items-center">
              <div
                class="w-full aspect-square border border-line"
                :style="{ backgroundColor: `var(${varName(group.name, v.suffix)})` }"
              ></div>
              <p class="text-[10px] font-mono text-dim mt-1.5 text-center leading-tight truncate w-full">{{ displayName(group.name, v.suffix) }}</p>
            </div>
          </div>

          <!-- Usage example bar -->
          <div class="mt-4 flex items-center gap-2">
            <div class="h-8 px-4 rounded flex items-center text-xs font-medium" :style="{ backgroundColor: `var(--color-${group.name})`, color: `var(--color-on-${group.name})` }">
              Button
            </div>
            <div class="h-8 px-4 rounded flex items-center text-xs font-medium border-2" :style="{ borderColor: `var(--color-${group.name}-border)`, color: `var(--color-${group.name}-text)` }">
              Outlined
            </div>
            <div class="h-8 px-4 rounded flex items-center text-xs font-medium" :style="{ backgroundColor: `var(--color-${group.name}-subtle)`, color: `var(--color-${group.name}-text)` }">
              Subtle
            </div>
          </div>
        </div>
      </div>
    </section>

    <div class="border-t border-line"></div>

    <!-- Foundation Tokens -->
    <section class="px-10 lg:px-20 py-24">
      <h2 class="text-xl font-semibold text-high mb-1">Foundation Tokens</h2>
      <p class="text-sm text-low mb-8">Page backgrounds, text hierarchy, border states, and layered surfaces. These tokens form the structural backbone of every layout.</p>

      <div class="grid gap-8 sm:grid-cols-2">
        <!-- Page Backgrounds -->
        <div>
          <p class="text-[11px] text-dim uppercase tracking-widest font-medium mb-4">Page Backgrounds</p>
          <div class="space-y-3">
            <div v-for="item in foundationPage" :key="item.token" class="flex items-center gap-3">
              <div class="w-12 h-12 border border-line shrink-0" :style="{ backgroundColor: `var(${item.token})` }"></div>
              <div>
                <p class="text-xs font-mono text-high">{{ item.token }}</p>
                <p class="text-xs text-low">{{ item.description }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Text Colors -->
        <div>
          <p class="text-[11px] text-dim uppercase tracking-widest font-medium mb-4">Text Colors</p>
          <div class="space-y-3">
            <div v-for="item in foundationText" :key="item.token" class="flex items-center gap-3">
              <div class="w-12 h-12 border border-line shrink-0 flex items-center justify-center bg-surface-1">
                <span class="text-sm font-semibold" :style="{ color: `var(${item.token})` }">Aa</span>
              </div>
              <div>
                <p class="text-xs font-mono text-high">{{ item.token }}</p>
                <p class="text-xs text-low">{{ item.description }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Borders -->
        <div>
          <p class="text-[11px] text-dim uppercase tracking-widest font-medium mb-4">Borders</p>
          <div class="space-y-3">
            <div v-for="item in foundationBorders" :key="item.token" class="flex items-center gap-3">
              <div class="w-12 h-12 shrink-0" :style="{ border: `2px solid var(${item.token})` }"></div>
              <div>
                <p class="text-xs font-mono text-high">{{ item.token }}</p>
                <p class="text-xs text-low">{{ item.description }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Surfaces -->
        <div>
          <p class="text-[11px] text-dim uppercase tracking-widest font-medium mb-4">Surfaces</p>
          <div class="space-y-3">
            <div v-for="item in foundationSurfaces" :key="item.token" class="flex items-center gap-3">
              <div class="w-12 h-12 border border-line shrink-0" :style="{ backgroundColor: `var(${item.token})` }"></div>
              <div>
                <p class="text-xs font-mono text-high">{{ item.token }}</p>
                <p class="text-xs text-low">{{ item.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
