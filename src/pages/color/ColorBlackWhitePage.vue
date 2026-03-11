<script setup lang="ts">
const neutralAlphaSteps = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
</script>

<template>
  <div>
    <header class="px-8 lg:px-16 pt-16 pb-12">
      <p class="text-[11px] text-zinc-400 dark:text-zinc-500 uppercase tracking-widest font-medium mb-3">Color</p>
      <h1 class="text-5xl font-medium text-zinc-900 dark:text-white">Black &amp; White</h1>
      <p class="text-base text-zinc-500 dark:text-zinc-400 mt-4 max-w-xl leading-relaxed">
        When and how to use pure black, pure white, and neutral alpha overlays. Clarity under all lighting conditions &mdash; from sunlit tarmacs to blacked-out operations centers.
      </p>
    </header>

    <div class="border-t border-zinc-200 dark:border-zinc-800"></div>

    <!-- Pure Black vs Dark Gray -->
    <section class="px-8 lg:px-16 py-16">
      <h2 class="text-xl font-semibold text-zinc-900 dark:text-white mb-4">Pure Black vs Dark Gray</h2>
      <p class="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed max-w-2xl mb-8">
        Pure black (<code class="text-xs font-mono bg-zinc-100 dark:bg-zinc-800 px-1 py-0.5 rounded">#000000</code>) is used sparingly. It serves as the dark mode page background and for maximum-contrast text. For most UI surfaces, use gray scale steps instead to maintain visual depth.
      </p>

      <div class="grid gap-4 sm:grid-cols-2">
        <div class="p-6 border border-zinc-200 dark:border-zinc-800">
          <h3 class="text-sm font-semibold text-zinc-900 dark:text-white mb-3">Use pure black for</h3>
          <ul class="space-y-2 text-xs text-zinc-500 dark:text-zinc-400">
            <li class="flex items-start gap-2">
              <span class="w-1 h-1 rounded-full bg-zinc-400 dark:bg-zinc-500 mt-1.5 shrink-0"></span>
              Page background in dark mode (<code class="font-mono bg-zinc-100 dark:bg-zinc-800 px-1 py-0.5 rounded">--color-background-1</code>)
            </li>
            <li class="flex items-start gap-2">
              <span class="w-1 h-1 rounded-full bg-zinc-400 dark:bg-zinc-500 mt-1.5 shrink-0"></span>
              Maximum contrast text in light mode (<code class="font-mono bg-zinc-100 dark:bg-zinc-800 px-1 py-0.5 rounded">--color-gray-10</code>)
            </li>
            <li class="flex items-start gap-2">
              <span class="w-1 h-1 rounded-full bg-zinc-400 dark:bg-zinc-500 mt-1.5 shrink-0"></span>
              Logo reproduction when color is not available
            </li>
          </ul>
          <div class="mt-4 h-16 bg-black border border-zinc-700 flex items-center justify-center">
            <span class="text-xs text-white font-mono">#000000</span>
          </div>
        </div>

        <div class="p-6 border border-zinc-200 dark:border-zinc-800">
          <h3 class="text-sm font-semibold text-zinc-900 dark:text-white mb-3">Use dark gray for</h3>
          <ul class="space-y-2 text-xs text-zinc-500 dark:text-zinc-400">
            <li class="flex items-start gap-2">
              <span class="w-1 h-1 rounded-full bg-zinc-400 dark:bg-zinc-500 mt-1.5 shrink-0"></span>
              Elevated surfaces in dark mode (<code class="font-mono bg-zinc-100 dark:bg-zinc-800 px-1 py-0.5 rounded">--color-surface-1</code> through <code class="font-mono bg-zinc-100 dark:bg-zinc-800 px-1 py-0.5 rounded">surface-3</code>)
            </li>
            <li class="flex items-start gap-2">
              <span class="w-1 h-1 rounded-full bg-zinc-400 dark:bg-zinc-500 mt-1.5 shrink-0"></span>
              Card backgrounds, sidebars, and panels
            </li>
            <li class="flex items-start gap-2">
              <span class="w-1 h-1 rounded-full bg-zinc-400 dark:bg-zinc-500 mt-1.5 shrink-0"></span>
              Input field backgrounds and dropdown menus
            </li>
          </ul>
          <div class="mt-4 flex gap-1">
            <div class="flex-1 h-16 flex items-center justify-center" :style="{ backgroundColor: 'var(--color-gray-1)' }">
              <span class="text-[10px] text-zinc-400 dark:text-zinc-500 font-mono">gray-1</span>
            </div>
            <div class="flex-1 h-16 flex items-center justify-center" :style="{ backgroundColor: 'var(--color-gray-2)' }">
              <span class="text-[10px] text-zinc-400 dark:text-zinc-500 font-mono">gray-2</span>
            </div>
            <div class="flex-1 h-16 flex items-center justify-center" :style="{ backgroundColor: 'var(--color-gray-3)' }">
              <span class="text-[10px] text-zinc-400 dark:text-zinc-500 font-mono">gray-3</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div class="border-t border-zinc-200 dark:border-zinc-800"></div>

    <!-- Pure White vs Off-White -->
    <section class="px-8 lg:px-16 py-16">
      <h2 class="text-xl font-semibold text-zinc-900 dark:text-white mb-4">Pure White vs Off-White</h2>
      <p class="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed max-w-2xl mb-8">
        Pure white (<code class="text-xs font-mono bg-zinc-100 dark:bg-zinc-800 px-1 py-0.5 rounded">#ffffff</code>) is the light mode page background and the text color on solid fills. Off-white tones create visual layering without the harshness of pure white on every surface.
      </p>

      <div class="grid gap-4 sm:grid-cols-2">
        <div class="p-6 border border-zinc-200 dark:border-zinc-800">
          <h3 class="text-sm font-semibold text-zinc-900 dark:text-white mb-3">Use pure white for</h3>
          <ul class="space-y-2 text-xs text-zinc-500 dark:text-zinc-400">
            <li class="flex items-start gap-2">
              <span class="w-1 h-1 rounded-full bg-zinc-400 dark:bg-zinc-500 mt-1.5 shrink-0"></span>
              Page background in light mode
            </li>
            <li class="flex items-start gap-2">
              <span class="w-1 h-1 rounded-full bg-zinc-400 dark:bg-zinc-500 mt-1.5 shrink-0"></span>
              Text on solid color fills (<code class="font-mono bg-zinc-100 dark:bg-zinc-800 px-1 py-0.5 rounded">--color-on-primary</code>)
            </li>
            <li class="flex items-start gap-2">
              <span class="w-1 h-1 rounded-full bg-zinc-400 dark:bg-zinc-500 mt-1.5 shrink-0"></span>
              High-contrast text in dark mode (<code class="font-mono bg-zinc-100 dark:bg-zinc-800 px-1 py-0.5 rounded">--color-gray-10</code> resolves near-white)
            </li>
          </ul>
          <div class="mt-4 h-16 bg-white border border-zinc-200 flex items-center justify-center">
            <span class="text-xs text-zinc-900 font-mono">#ffffff</span>
          </div>
        </div>

        <div class="p-6 border border-zinc-200 dark:border-zinc-800">
          <h3 class="text-sm font-semibold text-zinc-900 dark:text-white mb-3">Use off-white for</h3>
          <ul class="space-y-2 text-xs text-zinc-500 dark:text-zinc-400">
            <li class="flex items-start gap-2">
              <span class="w-1 h-1 rounded-full bg-zinc-400 dark:bg-zinc-500 mt-1.5 shrink-0"></span>
              Subtle page background (<code class="font-mono bg-zinc-100 dark:bg-zinc-800 px-1 py-0.5 rounded">--color-background-2: #fafafa</code>)
            </li>
            <li class="flex items-start gap-2">
              <span class="w-1 h-1 rounded-full bg-zinc-400 dark:bg-zinc-500 mt-1.5 shrink-0"></span>
              Card and surface backgrounds in light mode
            </li>
            <li class="flex items-start gap-2">
              <span class="w-1 h-1 rounded-full bg-zinc-400 dark:bg-zinc-500 mt-1.5 shrink-0"></span>
              Alternating row stripes and zebra patterns
            </li>
          </ul>
          <div class="mt-4 flex gap-1">
            <div class="flex-1 h-16 border border-zinc-200 flex items-center justify-center" :style="{ backgroundColor: 'var(--color-gray-1)' }">
              <span class="text-[10px] text-zinc-500 font-mono">gray-1</span>
            </div>
            <div class="flex-1 h-16 border border-zinc-200 flex items-center justify-center" :style="{ backgroundColor: 'var(--color-gray-2)' }">
              <span class="text-[10px] text-zinc-500 font-mono">gray-2</span>
            </div>
            <div class="flex-1 h-16 border border-zinc-200 flex items-center justify-center" style="background-color: #fafafa">
              <span class="text-[10px] text-zinc-500 font-mono">#fafafa</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div class="border-t border-zinc-200 dark:border-zinc-800"></div>

    <!-- Text on Backgrounds -->
    <section class="px-8 lg:px-16 py-16">
      <h2 class="text-xl font-semibold text-zinc-900 dark:text-white mb-4">Text on Backgrounds</h2>
      <p class="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed max-w-2xl mb-8">
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
            <div class="h-12 bg-white border border-zinc-200 flex items-center px-4">
              <span class="text-sm text-zinc-900 font-medium">Near-black text on white</span>
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
            <div class="h-12 bg-zinc-100 dark:bg-zinc-800 flex items-center px-4">
              <span class="text-sm text-zinc-300 dark:text-zinc-600 font-medium">Low-contrast gray on gray</span>
            </div>
            <div class="h-12 flex items-center px-4" :style="{ backgroundColor: 'var(--color-caution)' }">
              <span class="text-sm text-white font-medium">White text on amber</span>
            </div>
            <div class="h-12 bg-white border border-zinc-200 flex items-center px-4">
              <span class="text-sm font-medium" :style="{ color: 'var(--color-caution)' }">Yellow text on white</span>
            </div>
            <div class="h-12 bg-black flex items-center px-4">
              <span class="text-sm font-medium" :style="{ color: 'var(--color-primary)' }">Blue text on pure black</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div class="border-t border-zinc-200 dark:border-zinc-800"></div>

    <!-- Neutral Alpha Scale -->
    <section class="px-8 lg:px-16 py-16">
      <h2 class="text-xl font-semibold text-zinc-900 dark:text-white mb-4">Neutral Alpha Scale</h2>
      <p class="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed max-w-2xl mb-8">
        Semi-transparent overlays that adapt to any background. In light mode, they use <code class="text-xs font-mono bg-zinc-100 dark:bg-zinc-800 px-1 py-0.5 rounded">rgba(0,0,0,&hellip;)</code>. In dark mode, <code class="text-xs font-mono bg-zinc-100 dark:bg-zinc-800 px-1 py-0.5 rounded">rgba(255,255,255,&hellip;)</code>. Use these for scrim overlays, hover states on images, and backdrop effects.
      </p>

      <div class="space-y-6">
        <!-- On solid background -->
        <div>
          <p class="text-xs text-zinc-400 dark:text-zinc-500 mb-2">On solid background</p>
          <div class="flex gap-1">
            <div
              v-for="s in neutralAlphaSteps"
              :key="s"
              class="flex-1 h-12 border border-zinc-200 dark:border-zinc-800"
              :style="{ backgroundColor: `var(--color-neutral-alpha-${s})` }"
            >
              <span class="flex items-center justify-center h-full text-[10px] font-mono text-zinc-500 dark:text-zinc-400">{{ s }}</span>
            </div>
          </div>
        </div>

        <!-- On image / pattern -->
        <div>
          <p class="text-xs text-zinc-400 dark:text-zinc-500 mb-2">On patterned background</p>
          <div
            class="flex gap-1 p-4"
            style="background-image: repeating-conic-gradient(#d4d4d8 0% 25%, #e4e4e7 0% 50%); background-size: 16px 16px;"
          >
            <div
              v-for="s in neutralAlphaSteps"
              :key="s"
              class="flex-1 h-12"
              :style="{ backgroundColor: `var(--color-neutral-alpha-${s})` }"
            ></div>
          </div>
        </div>
      </div>

      <div class="mt-8 grid gap-4 sm:grid-cols-3">
        <div class="p-6 border border-zinc-200 dark:border-zinc-800">
          <h3 class="text-sm font-semibold text-zinc-900 dark:text-white mb-2">Scrim Overlays</h3>
          <p class="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
            Use steps 7-9 for modal backdrops, image overlays, and loading scrims. The semi-transparency maintains context while focusing attention.
          </p>
        </div>
        <div class="p-6 border border-zinc-200 dark:border-zinc-800">
          <h3 class="text-sm font-semibold text-zinc-900 dark:text-white mb-2">Hover States</h3>
          <p class="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
            Steps 1-3 work well for subtle hover highlights on interactive elements. They tint toward the surface underneath, creating a natural effect.
          </p>
        </div>
        <div class="p-6 border border-zinc-200 dark:border-zinc-800">
          <h3 class="text-sm font-semibold text-zinc-900 dark:text-white mb-2">Theme Adaptation</h3>
          <p class="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
            Alpha tokens automatically switch between black and white overlays per theme. A single token works correctly in both light and dark contexts.
          </p>
        </div>
      </div>
    </section>

    <div class="border-t border-zinc-200 dark:border-zinc-800"></div>

    <!-- Contrast Rules -->
    <section class="px-8 lg:px-16 py-16">
      <h2 class="text-xl font-semibold text-zinc-900 dark:text-white mb-4">Contrast Rules</h2>
      <p class="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed max-w-2xl mb-8">
        Minimum contrast ratios for aerospace applications. WCAG AA compliance is the baseline; critical flight data should exceed it.
      </p>

      <div class="space-y-2">
        <div class="p-4 border border-zinc-200 dark:border-zinc-800 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6">
          <div class="shrink-0 w-24">
            <span class="text-sm font-mono font-semibold text-zinc-900 dark:text-white">4.5 : 1</span>
          </div>
          <div class="shrink-0 w-32">
            <span class="text-sm font-medium text-zinc-900 dark:text-white">Normal text</span>
          </div>
          <p class="text-xs text-zinc-500 dark:text-zinc-400 flex-1">Body copy, labels, descriptions. Use <code class="font-mono bg-zinc-100 dark:bg-zinc-800 px-1 py-0.5 rounded">--color-high</code> or <code class="font-mono bg-zinc-100 dark:bg-zinc-800 px-1 py-0.5 rounded">--color-low</code> for text on page backgrounds.</p>
        </div>
        <div class="p-4 border border-zinc-200 dark:border-zinc-800 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6">
          <div class="shrink-0 w-24">
            <span class="text-sm font-mono font-semibold text-zinc-900 dark:text-white">3 : 1</span>
          </div>
          <div class="shrink-0 w-32">
            <span class="text-sm font-medium text-zinc-900 dark:text-white">Large text</span>
          </div>
          <p class="text-xs text-zinc-500 dark:text-zinc-400 flex-1">Headings at 18px+ semibold or 24px+ regular. Semantic text tokens (step 9) meet this against their subtle backgrounds (step 1).</p>
        </div>
        <div class="p-4 border border-zinc-200 dark:border-zinc-800 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6">
          <div class="shrink-0 w-24">
            <span class="text-sm font-mono font-semibold text-zinc-900 dark:text-white">3 : 1</span>
          </div>
          <div class="shrink-0 w-32">
            <span class="text-sm font-medium text-zinc-900 dark:text-white">UI components</span>
          </div>
          <p class="text-xs text-zinc-500 dark:text-zinc-400 flex-1">Borders, icons, and form controls. Border tokens (steps 4-6) meet this threshold against adjacent surfaces.</p>
        </div>
        <div class="p-4 border border-zinc-200 dark:border-zinc-800 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6">
          <div class="shrink-0 w-24">
            <span class="text-sm font-mono font-semibold text-zinc-900 dark:text-white">7 : 1</span>
          </div>
          <div class="shrink-0 w-32">
            <span class="text-sm font-medium text-zinc-900 dark:text-white">Critical data</span>
          </div>
          <p class="text-xs text-zinc-500 dark:text-zinc-400 flex-1">Altitude readouts, speed indicators, warning text. Use high-contrast tokens and avoid relying on color alone to convey critical state.</p>
        </div>
      </div>
    </section>
  </div>
</template>
