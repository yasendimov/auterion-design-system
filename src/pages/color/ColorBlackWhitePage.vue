<script setup lang="ts">
</script>

<template>
  <div>
    <header class="px-8 lg:px-16 pt-16 pb-12">
      <p class="text-[11px] text-dim uppercase tracking-widest font-medium mb-3">Color</p>
      <h1 class="text-5xl font-medium text-high">Black &amp; White</h1>
      <p class="text-base text-low mt-4 max-w-xl leading-relaxed">
        When and how to use pure black, pure white, and neutral overlays. Clarity under all lighting conditions &mdash; from sunlit tarmacs to blacked-out operations centers.
      </p>
    </header>

    <div class="border-t border-line"></div>

    <!-- Pure Black vs Dark Gray -->
    <section class="px-8 lg:px-16 py-16">
      <h2 class="text-xl font-semibold text-high mb-4">Pure Black vs Dark Gray</h2>
      <p class="text-sm text-low leading-relaxed max-w-2xl mb-8">
        Pure black (<code class="text-xs font-mono bg-surface-1 px-1 py-0.5 rounded">#000000</code>) is the Auterion Black dark mode app background. For most UI surfaces, use base scale steps instead to maintain visual depth.
      </p>

      <div class="grid gap-4 sm:grid-cols-2">
        <div class="p-6 border border-line">
          <h3 class="text-sm font-semibold text-high mb-3">Use pure black for</h3>
          <ul class="space-y-2 text-xs text-low">
            <li class="flex items-start gap-2">
              <span class="w-1 h-1 rounded-full bg-dim mt-1.5 shrink-0"></span>
              Page background in dark mode (<code class="font-mono bg-surface-1 px-1 py-0.5 rounded">--color-page</code>)
            </li>
            <li class="flex items-start gap-2">
              <span class="w-1 h-1 rounded-full bg-dim mt-1.5 shrink-0"></span>
              Maximum contrast text in light mode (<code class="font-mono bg-surface-1 px-1 py-0.5 rounded">--color-base-12</code>)
            </li>
            <li class="flex items-start gap-2">
              <span class="w-1 h-1 rounded-full bg-dim mt-1.5 shrink-0"></span>
              Logo reproduction when color is not available
            </li>
          </ul>
          <div class="mt-4 h-16 bg-black border border-line-active flex items-center justify-center">
            <span class="text-xs text-white font-mono">#000000</span>
          </div>
        </div>

        <div class="p-6 border border-line">
          <h3 class="text-sm font-semibold text-high mb-3">Use dark gray for</h3>
          <ul class="space-y-2 text-xs text-low">
            <li class="flex items-start gap-2">
              <span class="w-1 h-1 rounded-full bg-dim mt-1.5 shrink-0"></span>
              Elevated surfaces in dark mode (<code class="font-mono bg-surface-1 px-1 py-0.5 rounded">--color-surface-1</code> through <code class="font-mono bg-surface-1 px-1 py-0.5 rounded">surface-3</code>)
            </li>
            <li class="flex items-start gap-2">
              <span class="w-1 h-1 rounded-full bg-dim mt-1.5 shrink-0"></span>
              Card backgrounds, sidebars, and panels
            </li>
            <li class="flex items-start gap-2">
              <span class="w-1 h-1 rounded-full bg-dim mt-1.5 shrink-0"></span>
              Input field backgrounds and dropdown menus
            </li>
          </ul>
          <div class="mt-4 flex gap-1">
            <div class="flex-1 h-16 flex items-center justify-center" :style="{ backgroundColor: 'var(--color-base-3)' }">
              <span class="text-[10px] text-dim font-mono">base-3</span>
            </div>
            <div class="flex-1 h-16 flex items-center justify-center" :style="{ backgroundColor: 'var(--color-base-4)' }">
              <span class="text-[10px] text-dim font-mono">base-4</span>
            </div>
            <div class="flex-1 h-16 flex items-center justify-center" :style="{ backgroundColor: 'var(--color-base-5)' }">
              <span class="text-[10px] text-dim font-mono">base-5</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div class="border-t border-line"></div>

    <!-- Pure White vs Off-White -->
    <section class="px-8 lg:px-16 py-16">
      <h2 class="text-xl font-semibold text-high mb-4">Pure White vs Off-White</h2>
      <p class="text-sm text-low leading-relaxed max-w-2xl mb-8">
        Pure white (<code class="text-xs font-mono bg-surface-1 px-1 py-0.5 rounded">#ffffff</code>) is the light mode page background and the text color on solid fills. Off-white tones create visual layering without the harshness of pure white on every surface.
      </p>

      <div class="grid gap-4 sm:grid-cols-2">
        <div class="p-6 border border-line">
          <h3 class="text-sm font-semibold text-high mb-3">Use pure white for</h3>
          <ul class="space-y-2 text-xs text-low">
            <li class="flex items-start gap-2">
              <span class="w-1 h-1 rounded-full bg-dim mt-1.5 shrink-0"></span>
              Page background in light mode
            </li>
            <li class="flex items-start gap-2">
              <span class="w-1 h-1 rounded-full bg-dim mt-1.5 shrink-0"></span>
              Text on solid color fills (<code class="font-mono bg-surface-1 px-1 py-0.5 rounded">--color-on-primary</code>)
            </li>
            <li class="flex items-start gap-2">
              <span class="w-1 h-1 rounded-full bg-dim mt-1.5 shrink-0"></span>
              High-contrast text in dark mode (<code class="font-mono bg-surface-1 px-1 py-0.5 rounded">--color-base-12</code> resolves to white in dark mode)
            </li>
          </ul>
          <div class="mt-4 h-16 bg-white border border-line flex items-center justify-center">
            <span class="text-xs text-black font-mono">#ffffff</span>
          </div>
        </div>

        <div class="p-6 border border-line">
          <h3 class="text-sm font-semibold text-high mb-3">Use off-white for</h3>
          <ul class="space-y-2 text-xs text-low">
            <li class="flex items-start gap-2">
              <span class="w-1 h-1 rounded-full bg-dim mt-1.5 shrink-0"></span>
              Subtle page background (<code class="font-mono bg-surface-1 px-1 py-0.5 rounded">--color-page-subtle</code>)
            </li>
            <li class="flex items-start gap-2">
              <span class="w-1 h-1 rounded-full bg-dim mt-1.5 shrink-0"></span>
              Card and surface backgrounds in light mode
            </li>
            <li class="flex items-start gap-2">
              <span class="w-1 h-1 rounded-full bg-dim mt-1.5 shrink-0"></span>
              Alternating row stripes and zebra patterns
            </li>
          </ul>
          <div class="mt-4 flex gap-1">
            <div class="flex-1 h-16 border border-line flex items-center justify-center" :style="{ backgroundColor: 'var(--color-base-3)' }">
              <span class="text-[10px] text-low font-mono">base-3</span>
            </div>
            <div class="flex-1 h-16 border border-line flex items-center justify-center" :style="{ backgroundColor: 'var(--color-base-4)' }">
              <span class="text-[10px] text-low font-mono">base-4</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div class="border-t border-line"></div>

    <!-- Text on Backgrounds -->
    <section class="px-8 lg:px-16 py-16">
      <h2 class="text-xl font-semibold text-high mb-4">Text on Backgrounds</h2>
      <p class="text-sm text-low leading-relaxed max-w-2xl mb-8">
        Maintain readable contrast ratios in all environments. Aerospace UIs must remain legible under direct sunlight, low-light conditions, and night vision mode.
      </p>

      <div class="grid gap-4 sm:grid-cols-2">
        <!-- Do -->
        <div class="p-6 border-2 border-green-500/30">
          <p class="text-[11px] uppercase tracking-widest font-medium mb-4" :style="{ color: 'var(--color-ok)' }">Do</p>
          <div class="space-y-3">
            <div class="h-12 bg-black flex items-center px-4">
              <span class="text-sm text-white font-medium">White text on black</span>
            </div>
            <div class="h-12 bg-white border border-line flex items-center px-4">
              <span class="text-sm text-black font-medium">Near-black text on white</span>
            </div>
            <div class="h-12 flex items-center px-4" :style="{ backgroundColor: 'var(--color-primary)' }">
              <span class="text-sm text-white font-medium">White text on accent fills</span>
            </div>
            <div class="h-12 flex items-center px-4" :style="{ backgroundColor: 'var(--color-primary-subtle)' }">
              <span class="text-sm font-medium" :style="{ color: 'var(--color-primary-text)' }">Semantic text on subtle bg</span>
            </div>
          </div>
        </div>

        <!-- Don't -->
        <div class="p-6 border-2 border-red-500/30">
          <p class="text-[11px] uppercase tracking-widest font-medium mb-4" :style="{ color: 'var(--color-alarm)' }">Don't</p>
          <div class="space-y-3">
            <div class="h-12 bg-surface-1 flex items-center px-4">
              <span class="text-sm text-dim font-medium">Low-contrast gray on gray</span>
            </div>
            <div class="h-12 flex items-center px-4" :style="{ backgroundColor: 'var(--color-caution)' }">
              <span class="text-sm text-white font-medium">White text on amber</span>
            </div>
            <div class="h-12 bg-white border border-line flex items-center px-4">
              <span class="text-sm font-medium" :style="{ color: 'var(--color-caution)' }">Yellow text on white</span>
            </div>
            <div class="h-12 bg-black flex items-center px-4">
              <span class="text-sm font-medium" :style="{ color: 'var(--color-primary)' }">Blue text on pure black</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div class="border-t border-line"></div>

    <!-- Contrast Rules -->
    <section class="px-8 lg:px-16 py-16">
      <h2 class="text-xl font-semibold text-high mb-4">Contrast Rules</h2>
      <p class="text-sm text-low leading-relaxed max-w-2xl mb-8">
        Minimum contrast ratios for aerospace applications. WCAG AA compliance is the baseline; critical flight data should exceed it.
      </p>

      <div class="space-y-2">
        <div class="p-4 border border-line flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6">
          <div class="shrink-0 w-24">
            <span class="text-sm font-mono font-semibold text-high">4.5 : 1</span>
          </div>
          <div class="shrink-0 w-32">
            <span class="text-sm font-medium text-high">Normal text</span>
          </div>
          <p class="text-xs text-low flex-1">Body copy, labels, descriptions. Use <code class="font-mono bg-surface-1 px-1 py-0.5 rounded">--color-high</code> or <code class="font-mono bg-surface-1 px-1 py-0.5 rounded">--color-low</code> for text on page backgrounds.</p>
        </div>
        <div class="p-4 border border-line flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6">
          <div class="shrink-0 w-24">
            <span class="text-sm font-mono font-semibold text-high">3 : 1</span>
          </div>
          <div class="shrink-0 w-32">
            <span class="text-sm font-medium text-high">Large text</span>
          </div>
          <p class="text-xs text-low flex-1">Headings at 18px+ semibold or 24px+ regular. Semantic text tokens (step 9) meet this against their subtle backgrounds (step 1).</p>
        </div>
        <div class="p-4 border border-line flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6">
          <div class="shrink-0 w-24">
            <span class="text-sm font-mono font-semibold text-high">3 : 1</span>
          </div>
          <div class="shrink-0 w-32">
            <span class="text-sm font-medium text-high">UI components</span>
          </div>
          <p class="text-xs text-low flex-1">Borders, icons, and form controls. Border tokens (steps 4-6) meet this threshold against adjacent surfaces.</p>
        </div>
        <div class="p-4 border border-line flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6">
          <div class="shrink-0 w-24">
            <span class="text-sm font-mono font-semibold text-high">7 : 1</span>
          </div>
          <div class="shrink-0 w-32">
            <span class="text-sm font-medium text-high">Critical data</span>
          </div>
          <p class="text-xs text-low flex-1">Altitude readouts, speed indicators, warning text. Use high-contrast tokens and avoid relying on color alone to convey critical state.</p>
        </div>
      </div>
    </section>
  </div>
</template>
