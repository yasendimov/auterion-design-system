<script setup lang="ts">
const sizeRoles = [
  { size: '7xl', px: '80px', weight: 'SemiBold', role: 'Hero display', usage: 'Landing pages, splash screens. One per page maximum.', tracking: '-3.2px' },
  { size: '5xl', px: '48px', weight: 'SemiBold', role: 'Page title (large)', usage: 'Full-page headers on marketing pages and dashboards.', tracking: '-1.92px' },
  { size: '4xl', px: '40px', weight: 'SemiBold', role: 'Page title', usage: 'Standard page headers across all documentation and product views.', tracking: '-1.6px' },
  { size: '2xl', px: '24px', weight: 'SemiBold', role: 'Section heading', usage: 'Major content sections, modal titles, sidebar group labels.', tracking: '-0.72px' },
  { size: 'xl', px: '20px', weight: 'SemiBold', role: 'Subsection heading', usage: 'Card titles, panel headers, form group labels.', tracking: '-0.6px' },
  { size: 'base', px: '16px', weight: 'Regular', role: 'Body text', usage: 'Primary reading content, descriptions, documentation paragraphs.', tracking: '-0.32px' },
  { size: 'sm', px: '14px', weight: 'Regular', role: 'Secondary body', usage: 'Compact body text, table cells, list items, form descriptions.', tracking: '-0.28px' },
  { size: 'xs', px: '12px', weight: 'Medium', role: 'Label', usage: 'Form labels, badge text, metadata, table headers.', tracking: '-0.24px' },
  { size: 'xs', px: '12px', weight: 'Regular', role: 'Caption', usage: 'Timestamps, footnotes, help text, tertiary information.', tracking: '-0.24px' },
  { size: '[11px]', px: '11px', weight: 'Medium', role: 'Section label', usage: 'Uppercase tracking-widest overline labels above headings.', tracking: '—' },
]
</script>

<template>
  <div>
    <header class="px-8 lg:px-16 pt-16 pb-12">
      <p class="text-[11px] text-zinc-400 dark:text-zinc-500 uppercase tracking-widest font-medium mb-3">Typography</p>
      <h1 class="text-5xl font-medium text-zinc-900 dark:text-white">Using Type</h1>
      <p class="text-base text-zinc-500 dark:text-zinc-400 mt-4 max-w-xl leading-relaxed">
        When to use each size, weight, and style combination. Clear typographic hierarchy keeps operators focused on mission-critical information.
      </p>
    </header>

    <div class="border-t border-zinc-200 dark:border-zinc-800"></div>

    <!-- Size & Weight Reference -->
    <section class="px-8 lg:px-16 py-16">
      <h2 class="text-xl font-semibold text-zinc-900 dark:text-white mb-4">Size &amp; Weight Reference</h2>
      <p class="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed max-w-2xl mb-8">
        Three weights &mdash; Regular (400), Medium (500), and SemiBold (600) &mdash; cover every use case. Letter spacing tightens as size increases: -2% at body sizes, -3% at heading sizes, -4% at display sizes.
      </p>

      <div class="space-y-2">
        <div
          v-for="item in sizeRoles"
          :key="item.size + item.weight"
          class="p-4 border border-zinc-200 dark:border-zinc-800 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6"
        >
          <div class="shrink-0 w-16">
            <span class="text-xs font-mono text-zinc-400 dark:text-zinc-500">{{ item.px }}</span>
          </div>
          <div class="shrink-0 w-20">
            <span class="text-xs font-medium text-zinc-900 dark:text-white">{{ item.weight }}</span>
          </div>
          <div class="shrink-0 w-36">
            <span class="text-sm font-semibold text-zinc-900 dark:text-white">{{ item.role }}</span>
          </div>
          <p class="text-xs text-zinc-500 dark:text-zinc-400 flex-1">{{ item.usage }}</p>
          <div class="shrink-0 w-20 text-right">
            <span class="text-[10px] font-mono text-zinc-400 dark:text-zinc-500">{{ item.tracking }}</span>
          </div>
        </div>
      </div>
    </section>

    <div class="border-t border-zinc-200 dark:border-zinc-800"></div>

    <!-- Live Examples -->
    <section class="px-8 lg:px-16 py-16">
      <h2 class="text-xl font-semibold text-zinc-900 dark:text-white mb-4">Hierarchy in Practice</h2>
      <p class="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed max-w-2xl mb-8">
        A well-structured page uses no more than 3-4 distinct type sizes. Here is how they combine in typical layouts.
      </p>

      <div class="grid gap-6 sm:grid-cols-2">
        <!-- Example: Documentation Page -->
        <div class="p-6 border border-zinc-200 dark:border-zinc-800">
          <p class="text-[11px] text-zinc-400 dark:text-zinc-500 uppercase tracking-widest font-medium mb-3">Documentation Page</p>
          <div class="space-y-3">
            <p class="text-[11px] text-zinc-400 dark:text-zinc-500 uppercase tracking-widest font-medium">Section Label</p>
            <h3 class="text-4xl font-semibold text-zinc-900 dark:text-white" style="letter-spacing: -1.6px">Page Title</h3>
            <p class="text-base text-zinc-500 dark:text-zinc-400 leading-relaxed">Description paragraph using base size regular weight with relaxed line height for comfortable reading.</p>
            <div class="pt-3 border-t border-zinc-100 dark:border-zinc-800/50">
              <h4 class="text-xl font-semibold text-zinc-900 dark:text-white">Section Heading</h4>
              <p class="text-sm text-zinc-500 dark:text-zinc-400 mt-1">Secondary body text at 14px for compact content areas.</p>
            </div>
          </div>
        </div>

        <!-- Example: Dashboard Card -->
        <div class="p-6 border border-zinc-200 dark:border-zinc-800">
          <p class="text-[11px] text-zinc-400 dark:text-zinc-500 uppercase tracking-widest font-medium mb-3">Dashboard Card</p>
          <div class="space-y-3">
            <div class="flex items-center justify-between">
              <h3 class="text-sm font-semibold text-zinc-900 dark:text-white">Vehicle Telemetry</h3>
              <span class="text-xs text-zinc-400 dark:text-zinc-500">Live</span>
            </div>
            <div class="grid grid-cols-3 gap-3">
              <div>
                <p class="text-xs text-zinc-400 dark:text-zinc-500 font-medium uppercase tracking-widest">Altitude</p>
                <p class="text-2xl font-semibold text-zinc-900 dark:text-white font-mono" style="letter-spacing: -0.72px">1,240<span class="text-sm font-normal text-zinc-400 dark:text-zinc-500 ml-1">m</span></p>
              </div>
              <div>
                <p class="text-xs text-zinc-400 dark:text-zinc-500 font-medium uppercase tracking-widest">Speed</p>
                <p class="text-2xl font-semibold text-zinc-900 dark:text-white font-mono" style="letter-spacing: -0.72px">34.2<span class="text-sm font-normal text-zinc-400 dark:text-zinc-500 ml-1">m/s</span></p>
              </div>
              <div>
                <p class="text-xs text-zinc-400 dark:text-zinc-500 font-medium uppercase tracking-widest">Battery</p>
                <p class="text-2xl font-semibold font-mono" :style="{ color: 'var(--color-ok)', letterSpacing: '-0.72px' }">78<span class="text-sm font-normal text-zinc-400 dark:text-zinc-500 ml-1">%</span></p>
              </div>
            </div>
            <p class="text-xs text-zinc-400 dark:text-zinc-500">Last updated 2 seconds ago</p>
          </div>
        </div>

        <!-- Example: Form -->
        <div class="p-6 border border-zinc-200 dark:border-zinc-800">
          <p class="text-[11px] text-zinc-400 dark:text-zinc-500 uppercase tracking-widest font-medium mb-3">Form Pattern</p>
          <div class="space-y-4">
            <div>
              <label class="text-xs font-medium text-zinc-900 dark:text-white block mb-1">Mission Name</label>
              <div class="h-9 rounded border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 px-3 flex items-center">
                <span class="text-sm text-zinc-500 dark:text-zinc-400">Enter mission name&hellip;</span>
              </div>
              <p class="text-xs text-zinc-400 dark:text-zinc-500 mt-1">Alphanumeric, 3-64 characters</p>
            </div>
            <div>
              <label class="text-xs font-medium text-zinc-900 dark:text-white block mb-1">Waypoint Count</label>
              <div class="h-9 rounded border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 px-3 flex items-center">
                <span class="text-sm font-mono text-zinc-900 dark:text-white">24</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Example: Code / Mono -->
        <div class="p-6 border border-zinc-200 dark:border-zinc-800">
          <p class="text-[11px] text-zinc-400 dark:text-zinc-500 uppercase tracking-widest font-medium mb-3">Code &amp; Monospace</p>
          <div class="space-y-3">
            <p class="text-sm text-zinc-500 dark:text-zinc-400">Use monospace for token names, numeric readouts, coordinates, and code.</p>
            <div class="p-4 rounded bg-zinc-50 dark:bg-zinc-900 font-mono text-sm leading-relaxed">
              <p class="text-zinc-500 dark:text-zinc-400">
                <span class="text-zinc-900 dark:text-white">--color-primary</span>: var(--color-blue-7);
              </p>
              <p class="text-zinc-500 dark:text-zinc-400">
                <span class="text-zinc-900 dark:text-white">--font-size-base</span>: 16px;
              </p>
              <p class="text-zinc-500 dark:text-zinc-400">
                <span class="text-zinc-900 dark:text-white">--tracking-base</span>: -0.32px;
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div class="border-t border-zinc-200 dark:border-zinc-800"></div>

    <!-- Do / Don't -->
    <section class="px-8 lg:px-16 py-16">
      <h2 class="text-xl font-semibold text-zinc-900 dark:text-white mb-4">Common Mistakes</h2>
      <p class="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed max-w-2xl mb-8">
        Consistent hierarchy requires discipline. Avoid these patterns that weaken scannability and increase cognitive load.
      </p>

      <div class="grid gap-4 sm:grid-cols-2">
        <!-- Do -->
        <div class="p-6 border-2 border-green-500/30">
          <p class="text-[11px] uppercase tracking-widest font-medium mb-4" :style="{ color: 'var(--color-ok)' }">Do</p>
          <div class="space-y-4">
            <div>
              <p class="text-xs text-zinc-400 dark:text-zinc-500 mb-1">Use one weight for headings, one for body</p>
              <h3 class="text-xl font-semibold text-zinc-900 dark:text-white">SemiBold headings</h3>
              <p class="text-sm text-zinc-500 dark:text-zinc-400">Regular weight for body text keeps clear contrast.</p>
            </div>
            <div>
              <p class="text-xs text-zinc-400 dark:text-zinc-500 mb-1">Use uppercase sparingly for labels only</p>
              <p class="text-[11px] text-zinc-400 dark:text-zinc-500 uppercase tracking-widest font-medium">Section Label</p>
              <h3 class="text-xl font-semibold text-zinc-900 dark:text-white mt-1">Heading Below</h3>
            </div>
            <div>
              <p class="text-xs text-zinc-400 dark:text-zinc-500 mb-1">Use monospace for numeric data</p>
              <p class="text-lg font-semibold text-zinc-900 dark:text-white font-mono">47.3815, 8.5421</p>
            </div>
          </div>
        </div>

        <!-- Don't -->
        <div class="p-6 border-2 border-red-500/30">
          <p class="text-[11px] uppercase tracking-widest font-medium mb-4" :style="{ color: 'var(--color-alarm)' }">Don't</p>
          <div class="space-y-4">
            <div>
              <p class="text-xs text-zinc-400 dark:text-zinc-500 mb-1">Mix many weights without clear purpose</p>
              <h3 class="text-xl font-normal text-zinc-900 dark:text-white">Regular heading</h3>
              <p class="text-sm font-semibold text-zinc-500 dark:text-zinc-400">Semibold body text reverses the hierarchy.</p>
            </div>
            <div>
              <p class="text-xs text-zinc-400 dark:text-zinc-500 mb-1">Use uppercase for long text</p>
              <p class="text-sm text-zinc-900 dark:text-white uppercase tracking-widest">THIS ENTIRE PARAGRAPH IS SET IN UPPERCASE WHICH SIGNIFICANTLY REDUCES READABILITY</p>
            </div>
            <div>
              <p class="text-xs text-zinc-400 dark:text-zinc-500 mb-1">Use proportional figures for tabular data</p>
              <p class="text-lg font-semibold text-zinc-900 dark:text-white">1,111 vs 8,888</p>
              <p class="text-xs text-zinc-400 dark:text-zinc-500">Digits won't align in columns without tabular figures.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div class="border-t border-zinc-200 dark:border-zinc-800"></div>

    <!-- Weight Decision Tree -->
    <section class="px-8 lg:px-16 py-16">
      <h2 class="text-xl font-semibold text-zinc-900 dark:text-white mb-4">Weight Decision Guide</h2>
      <p class="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed max-w-2xl mb-8">
        Three weights are sufficient for every interface. Adding more creates visual noise that slows operator decision-making.
      </p>

      <div class="grid gap-4 sm:grid-cols-3">
        <div class="p-6 border border-zinc-200 dark:border-zinc-800">
          <p class="text-2xl font-semibold text-zinc-900 dark:text-white mb-3">Aa</p>
          <h3 class="text-sm font-semibold text-zinc-900 dark:text-white mb-1">SemiBold (600)</h3>
          <p class="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
            Page titles, section headings, card titles, button labels, navigation items, data values in dashboards.
          </p>
        </div>
        <div class="p-6 border border-zinc-200 dark:border-zinc-800">
          <p class="text-2xl font-medium text-zinc-900 dark:text-white mb-3">Aa</p>
          <h3 class="text-sm font-semibold text-zinc-900 dark:text-white mb-1">Medium (500)</h3>
          <p class="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
            Form labels, table headers, overline section labels, badge text, tabs, breadcrumbs, small interactive elements.
          </p>
        </div>
        <div class="p-6 border border-zinc-200 dark:border-zinc-800">
          <p class="text-2xl font-normal text-zinc-900 dark:text-white mb-3">Aa</p>
          <h3 class="text-sm font-semibold text-zinc-900 dark:text-white mb-1">Regular (400)</h3>
          <p class="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
            Body text, descriptions, captions, help text, form input values, secondary information, long-form content.
          </p>
        </div>
      </div>
    </section>
  </div>
</template>
