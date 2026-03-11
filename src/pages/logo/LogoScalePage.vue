<script setup lang="ts">
</script>

<template>
  <div>
    <header class="px-8 lg:px-16 pt-16 pb-12">
      <p class="text-[11px] text-zinc-400 dark:text-zinc-500 uppercase tracking-widest font-medium mb-3">Logo</p>
      <h1 class="text-5xl font-medium text-zinc-900 dark:text-white">Scale & Clear Space</h1>
      <p class="text-base text-zinc-500 dark:text-zinc-400 mt-4">Minimum sizes ensure legibility. Clear space protects the logo from visual interference. These rules are non-negotiable.</p>
    </header>

    <div class="border-t border-zinc-200 dark:border-zinc-800"></div>

    <!-- Minimum Sizes -->
    <section class="px-8 lg:px-16 py-16">
      <h2 class="text-xl font-semibold text-zinc-900 dark:text-white mb-1">Minimum Sizes</h2>
      <p class="text-sm text-zinc-500 dark:text-zinc-400 mb-8">Below these thresholds, the logo loses legibility and fine details collapse. If the available space is smaller than the minimum for the primary logo, switch to the symbol-only variant.</p>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="p-6 border border-zinc-200 dark:border-zinc-800">
          <div class="aspect-[3/1] bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center border border-zinc-200 dark:border-zinc-700 mb-4">
            <span class="text-sm text-zinc-400 dark:text-zinc-500">Primary logo at minimum size</span>
          </div>
          <h3 class="text-sm font-semibold text-zinc-900 dark:text-white mb-1">Primary Logo</h3>
          <div class="flex items-baseline gap-2">
            <span class="text-2xl font-semibold text-zinc-900 dark:text-white">120px</span>
            <span class="text-sm text-zinc-500 dark:text-zinc-400">wide (digital)</span>
          </div>
          <p class="text-xs text-zinc-500 dark:text-zinc-400 mt-1">30mm wide for print at 300 DPI</p>
        </div>
        <div class="p-6 border border-zinc-200 dark:border-zinc-800">
          <div class="aspect-square max-h-32 mx-auto bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center border border-zinc-200 dark:border-zinc-700 mb-4">
            <span class="text-sm text-zinc-400 dark:text-zinc-500">Symbol at minimum size</span>
          </div>
          <h3 class="text-sm font-semibold text-zinc-900 dark:text-white mb-1">Symbol Only</h3>
          <div class="flex items-baseline gap-2">
            <span class="text-2xl font-semibold text-zinc-900 dark:text-white">24px</span>
            <span class="text-sm text-zinc-500 dark:text-zinc-400">wide (digital)</span>
          </div>
          <p class="text-xs text-zinc-500 dark:text-zinc-400 mt-1">6mm wide for print at 300 DPI</p>
        </div>
        <div class="p-6 border border-zinc-200 dark:border-zinc-800">
          <div class="aspect-[4/1] bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center border border-zinc-200 dark:border-zinc-700 mb-4">
            <span class="text-sm text-zinc-400 dark:text-zinc-500">Wordmark at minimum size</span>
          </div>
          <h3 class="text-sm font-semibold text-zinc-900 dark:text-white mb-1">Wordmark Only</h3>
          <div class="flex items-baseline gap-2">
            <span class="text-2xl font-semibold text-zinc-900 dark:text-white">80px</span>
            <span class="text-sm text-zinc-500 dark:text-zinc-400">wide (digital)</span>
          </div>
          <p class="text-xs text-zinc-500 dark:text-zinc-400 mt-1">20mm wide for print at 300 DPI</p>
        </div>
      </div>
    </section>

    <div class="border-t border-zinc-200 dark:border-zinc-800"></div>

    <!-- Clear Space -->
    <section class="px-8 lg:px-16 py-16">
      <h2 class="text-xl font-semibold text-zinc-900 dark:text-white mb-1">Clear Space</h2>
      <p class="text-sm text-zinc-500 dark:text-zinc-400 mb-8">The clear space is a protected area around the logo where no other visual elements may appear. It is measured using the symbol height as the base unit (1x). Maintain at least 1x on all sides of the logo.</p>

      <div class="aspect-video bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center">
        <span class="text-sm text-zinc-400 dark:text-zinc-500">Clear space diagram: 1x symbol height on all sides of primary logo</span>
      </div>

      <div class="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="p-6 border border-zinc-200 dark:border-zinc-800">
          <h3 class="text-sm font-semibold text-zinc-900 dark:text-white mb-3">Primary Logo Clear Space</h3>
          <div class="aspect-[3/1] bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center border border-zinc-200 dark:border-zinc-700">
            <span class="text-sm text-zinc-400 dark:text-zinc-500">Primary logo with 1x clear space overlay</span>
          </div>
          <p class="text-sm text-zinc-500 dark:text-zinc-400 mt-3">1x symbol height minimum on all sides. In hero layouts, increase to 2x for greater visual breathing room.</p>
        </div>
        <div class="p-6 border border-zinc-200 dark:border-zinc-800">
          <h3 class="text-sm font-semibold text-zinc-900 dark:text-white mb-3">Symbol Clear Space</h3>
          <div class="aspect-square max-h-48 mx-auto bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center border border-zinc-200 dark:border-zinc-700">
            <span class="text-sm text-zinc-400 dark:text-zinc-500">Symbol with 1x clear space overlay</span>
          </div>
          <p class="text-sm text-zinc-500 dark:text-zinc-400 mt-3">1x symbol height minimum on all sides. For app icons, the container itself provides the clear space.</p>
        </div>
      </div>
    </section>

    <div class="border-t border-zinc-200 dark:border-zinc-800"></div>

    <!-- Scale Reference -->
    <section class="px-8 lg:px-16 py-16">
      <h2 class="text-xl font-semibold text-zinc-900 dark:text-white mb-1">Scale Reference</h2>
      <p class="text-sm text-zinc-500 dark:text-zinc-400 mb-8">Common sizing recommendations for typical use cases.</p>

      <div class="overflow-x-auto">
        <table class="w-full text-sm">
          <thead>
            <tr class="border-b border-zinc-200 dark:border-zinc-800">
              <th class="text-left py-3 pr-4 font-medium text-zinc-900 dark:text-white">Context</th>
              <th class="text-left py-3 pr-4 font-medium text-zinc-900 dark:text-white">Variant</th>
              <th class="text-left py-3 pr-4 font-medium text-zinc-900 dark:text-white">Recommended Size</th>
              <th class="text-left py-3 font-medium text-zinc-900 dark:text-white">Clear Space</th>
            </tr>
          </thead>
          <tbody class="text-zinc-500 dark:text-zinc-400">
            <tr class="border-b border-zinc-200 dark:border-zinc-800">
              <td class="py-3 pr-4">Website header</td>
              <td class="py-3 pr-4">Primary</td>
              <td class="py-3 pr-4">140-160px wide</td>
              <td class="py-3">1x</td>
            </tr>
            <tr class="border-b border-zinc-200 dark:border-zinc-800">
              <td class="py-3 pr-4">Mobile header</td>
              <td class="py-3 pr-4">Primary</td>
              <td class="py-3 pr-4">120px wide</td>
              <td class="py-3">1x</td>
            </tr>
            <tr class="border-b border-zinc-200 dark:border-zinc-800">
              <td class="py-3 pr-4">Favicon</td>
              <td class="py-3 pr-4">Symbol</td>
              <td class="py-3 pr-4">32px / 16px</td>
              <td class="py-3">Container</td>
            </tr>
            <tr class="border-b border-zinc-200 dark:border-zinc-800">
              <td class="py-3 pr-4">App icon</td>
              <td class="py-3 pr-4">Symbol</td>
              <td class="py-3 pr-4">512px (source)</td>
              <td class="py-3">20% padding</td>
            </tr>
            <tr class="border-b border-zinc-200 dark:border-zinc-800">
              <td class="py-3 pr-4">Presentation title</td>
              <td class="py-3 pr-4">Primary</td>
              <td class="py-3 pr-4">200-240px wide</td>
              <td class="py-3">2x</td>
            </tr>
            <tr>
              <td class="py-3 pr-4">Vehicle label</td>
              <td class="py-3 pr-4">Symbol</td>
              <td class="py-3 pr-4">10mm minimum</td>
              <td class="py-3">1x</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  </div>
</template>
