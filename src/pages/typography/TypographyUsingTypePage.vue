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
      <p class="text-[11px] text-dim uppercase tracking-widest font-medium mb-3">Typography</p>
      <h1 class="text-5xl font-medium text-high">Using Type</h1>
      <p class="text-base text-low mt-4 max-w-xl leading-relaxed">
        When to use each size, weight, and style combination. Clear typographic hierarchy keeps operators focused on mission-critical information.
      </p>
    </header>

    <div class="border-t border-line"></div>

    <!-- Size & Weight Reference -->
    <section class="px-8 lg:px-16 py-16">
      <h2 class="text-xl font-semibold text-high mb-4">Size &amp; Weight Reference</h2>
      <p class="text-sm text-low leading-relaxed max-w-2xl mb-8">
        Three weights &mdash; Regular (400), Medium (500), and SemiBold (600) &mdash; cover every use case. Letter spacing tightens as size increases: -2% at body sizes, -3% at heading sizes, -4% at display sizes.
      </p>

      <div class="space-y-2">
        <div
          v-for="item in sizeRoles"
          :key="item.size + item.weight"
          class="p-4 border border-line flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6"
        >
          <div class="shrink-0 w-16">
            <span class="text-xs font-mono text-dim">{{ item.px }}</span>
          </div>
          <div class="shrink-0 w-20">
            <span class="text-xs font-medium text-high">{{ item.weight }}</span>
          </div>
          <div class="shrink-0 w-36">
            <span class="text-sm font-semibold text-high">{{ item.role }}</span>
          </div>
          <p class="text-xs text-low flex-1">{{ item.usage }}</p>
          <div class="shrink-0 w-20 text-right">
            <span class="text-[10px] font-mono text-dim">{{ item.tracking }}</span>
          </div>
        </div>
      </div>
    </section>

    <div class="border-t border-line"></div>

    <!-- Live Examples -->
    <section class="px-8 lg:px-16 py-16">
      <h2 class="text-xl font-semibold text-high mb-4">Hierarchy in Practice</h2>
      <p class="text-sm text-low leading-relaxed max-w-2xl mb-8">
        A well-structured page uses no more than 3-4 distinct type sizes. Here is how they combine in typical layouts.
      </p>

      <div class="grid gap-6 sm:grid-cols-2">
        <!-- Example: Documentation Page -->
        <div class="p-6 border border-line">
          <p class="text-[11px] text-dim uppercase tracking-widest font-medium mb-3">Documentation Page</p>
          <div class="space-y-3">
            <p class="text-[11px] text-dim uppercase tracking-widest font-medium">Section Label</p>
            <h3 class="text-4xl font-semibold text-high" style="letter-spacing: -1.6px">Page Title</h3>
            <p class="text-base text-low leading-relaxed">Description paragraph using base size regular weight with relaxed line height for comfortable reading.</p>
            <div class="pt-3 border-t border-line">
              <h4 class="text-xl font-semibold text-high">Section Heading</h4>
              <p class="text-sm text-low mt-1">Secondary body text at 14px for compact content areas.</p>
            </div>
          </div>
        </div>

        <!-- Example: Dashboard Card -->
        <div class="p-6 border border-line">
          <p class="text-[11px] text-dim uppercase tracking-widest font-medium mb-3">Dashboard Card</p>
          <div class="space-y-3">
            <div class="flex items-center justify-between">
              <h3 class="text-sm font-semibold text-high">Vehicle Telemetry</h3>
              <span class="text-xs text-dim">Live</span>
            </div>
            <div class="grid grid-cols-3 gap-3">
              <div>
                <p class="text-xs text-dim font-medium uppercase tracking-widest">Altitude</p>
                <p class="text-2xl font-semibold text-high font-mono" style="letter-spacing: -0.72px">1,240<span class="text-sm font-normal text-dim ml-1">m</span></p>
              </div>
              <div>
                <p class="text-xs text-dim font-medium uppercase tracking-widest">Speed</p>
                <p class="text-2xl font-semibold text-high font-mono" style="letter-spacing: -0.72px">34.2<span class="text-sm font-normal text-dim ml-1">m/s</span></p>
              </div>
              <div>
                <p class="text-xs text-dim font-medium uppercase tracking-widest">Battery</p>
                <p class="text-2xl font-semibold font-mono" :style="{ color: 'var(--color-ok)', letterSpacing: '-0.72px' }">78<span class="text-sm font-normal text-dim ml-1">%</span></p>
              </div>
            </div>
            <p class="text-xs text-dim">Last updated 2 seconds ago</p>
          </div>
        </div>

        <!-- Example: Form -->
        <div class="p-6 border border-line">
          <p class="text-[11px] text-dim uppercase tracking-widest font-medium mb-3">Form Pattern</p>
          <div class="space-y-4">
            <div>
              <label class="text-xs font-medium text-high block mb-1">Mission Name</label>
              <div class="h-9 rounded border border-line bg-page-subtle px-3 flex items-center">
                <span class="text-sm text-low">Enter mission name&hellip;</span>
              </div>
              <p class="text-xs text-dim mt-1">Alphanumeric, 3-64 characters</p>
            </div>
            <div>
              <label class="text-xs font-medium text-high block mb-1">Waypoint Count</label>
              <div class="h-9 rounded border border-line bg-page-subtle px-3 flex items-center">
                <span class="text-sm font-mono text-high">24</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Example: Code / Mono -->
        <div class="p-6 border border-line">
          <p class="text-[11px] text-dim uppercase tracking-widest font-medium mb-3">Code &amp; Monospace</p>
          <div class="space-y-3">
            <p class="text-sm text-low">Use monospace for token names, numeric readouts, coordinates, and code.</p>
            <div class="p-4 rounded bg-page-subtle font-mono text-sm leading-relaxed">
              <p class="text-low">
                <span class="text-high">--color-primary</span>: var(--color-blue-7);
              </p>
              <p class="text-low">
                <span class="text-high">--font-size-base</span>: 16px;
              </p>
              <p class="text-low">
                <span class="text-high">--tracking-base</span>: -0.32px;
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div class="border-t border-line"></div>

    <!-- Do / Don't -->
    <section class="px-8 lg:px-16 py-16">
      <h2 class="text-xl font-semibold text-high mb-4">Common Mistakes</h2>
      <p class="text-sm text-low leading-relaxed max-w-2xl mb-8">
        Consistent hierarchy requires discipline. Avoid these patterns that weaken scannability and increase cognitive load.
      </p>

      <div class="grid gap-4 sm:grid-cols-2">
        <!-- Do -->
        <div class="p-6 border-2 border-ok/30">
          <p class="text-[11px] uppercase tracking-widest font-medium mb-4" :style="{ color: 'var(--color-ok)' }">Do</p>
          <div class="space-y-4">
            <div>
              <p class="text-xs text-dim mb-1">Use one weight for headings, one for body</p>
              <h3 class="text-xl font-semibold text-high">SemiBold headings</h3>
              <p class="text-sm text-low">Regular weight for body text keeps clear contrast.</p>
            </div>
            <div>
              <p class="text-xs text-dim mb-1">Use uppercase sparingly for labels only</p>
              <p class="text-[11px] text-dim uppercase tracking-widest font-medium">Section Label</p>
              <h3 class="text-xl font-semibold text-high mt-1">Heading Below</h3>
            </div>
            <div>
              <p class="text-xs text-dim mb-1">Use monospace for numeric data</p>
              <p class="text-lg font-semibold text-high font-mono">47.3815, 8.5421</p>
            </div>
          </div>
        </div>

        <!-- Don't -->
        <div class="p-6 border-2 border-alarm/30">
          <p class="text-[11px] uppercase tracking-widest font-medium mb-4" :style="{ color: 'var(--color-alarm)' }">Don't</p>
          <div class="space-y-4">
            <div>
              <p class="text-xs text-dim mb-1">Mix many weights without clear purpose</p>
              <h3 class="text-xl font-normal text-high">Regular heading</h3>
              <p class="text-sm font-semibold text-low">Semibold body text reverses the hierarchy.</p>
            </div>
            <div>
              <p class="text-xs text-dim mb-1">Use uppercase for long text</p>
              <p class="text-sm text-high uppercase tracking-widest">THIS ENTIRE PARAGRAPH IS SET IN UPPERCASE WHICH SIGNIFICANTLY REDUCES READABILITY</p>
            </div>
            <div>
              <p class="text-xs text-dim mb-1">Use proportional figures for tabular data</p>
              <p class="text-lg font-semibold text-high">1,111 vs 8,888</p>
              <p class="text-xs text-dim">Digits won't align in columns without tabular figures.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div class="border-t border-line"></div>

    <!-- Weight Decision Tree -->
    <section class="px-8 lg:px-16 py-16">
      <h2 class="text-xl font-semibold text-high mb-4">Weight Decision Guide</h2>
      <p class="text-sm text-low leading-relaxed max-w-2xl mb-8">
        Three weights are sufficient for every interface. Adding more creates visual noise that slows operator decision-making.
      </p>

      <div class="grid gap-4 sm:grid-cols-3">
        <div class="p-6 border border-line">
          <p class="text-2xl font-semibold text-high mb-3">Aa</p>
          <h3 class="text-sm font-semibold text-high mb-1">SemiBold (600)</h3>
          <p class="text-xs text-low leading-relaxed">
            Page titles, section headings, card titles, button labels, navigation items, data values in dashboards.
          </p>
        </div>
        <div class="p-6 border border-line">
          <p class="text-2xl font-medium text-high mb-3">Aa</p>
          <h3 class="text-sm font-semibold text-high mb-1">Medium (500)</h3>
          <p class="text-xs text-low leading-relaxed">
            Form labels, table headers, overline section labels, badge text, tabs, breadcrumbs, small interactive elements.
          </p>
        </div>
        <div class="p-6 border border-line">
          <p class="text-2xl font-normal text-high mb-3">Aa</p>
          <h3 class="text-sm font-semibold text-high mb-1">Regular (400)</h3>
          <p class="text-xs text-low leading-relaxed">
            Body text, descriptions, captions, help text, form input values, secondary information, long-form content.
          </p>
        </div>
      </div>
    </section>
  </div>
</template>
