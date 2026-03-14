<script setup lang="ts">
</script>

<template>
  <div>
    <header class="px-10 lg:px-20 pt-24 pb-16">
      <p class="text-[11px] text-dim uppercase tracking-widest font-medium mb-5">Logo</p>
      <h1 class="text-5xl font-medium text-high">Scale & Clear Space</h1>
      <p class="text-base text-low mt-4">Minimum sizes ensure legibility. Clear space protects the logo from visual interference. These rules are non-negotiable.</p>
    </header>

    <div class="border-t border-line"></div>

    <!-- Minimum Sizes -->
    <section class="px-10 lg:px-20 py-24">
      <h2 class="text-xl font-semibold text-high mb-1">Minimum Sizes</h2>
      <p class="text-sm text-low mb-8">Below these thresholds, the logo loses legibility and fine details collapse. If the available space is smaller than the minimum for the primary logo, switch to the symbol-only variant.</p>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="p-8 border border-line">
          <div class="aspect-3/1 bg-surface-1 flex items-center justify-center border border-line  mb-4">
            <span class="text-sm text-dim">Primary logo at minimum size</span>
          </div>
          <h3 class="text-sm font-semibold text-high mb-1">Primary Logo</h3>
          <div class="flex items-baseline gap-2">
            <span class="text-2xl font-semibold text-high">120px</span>
            <span class="text-sm text-low">wide (digital)</span>
          </div>
          <p class="text-xs text-low mt-1">30mm wide for print at 300 DPI</p>
        </div>
        <div class="p-8 border border-line">
          <div class="aspect-square max-h-32 mx-auto bg-surface-1 flex items-center justify-center border border-line  mb-4">
            <span class="text-sm text-dim">Symbol at minimum size</span>
          </div>
          <h3 class="text-sm font-semibold text-high mb-1">Symbol Only</h3>
          <div class="flex items-baseline gap-2">
            <span class="text-2xl font-semibold text-high">24px</span>
            <span class="text-sm text-low">wide (digital)</span>
          </div>
          <p class="text-xs text-low mt-1">6mm wide for print at 300 DPI</p>
        </div>
        <div class="p-8 border border-line">
          <div class="aspect-4/1 bg-surface-1 flex items-center justify-center border border-line  mb-4">
            <span class="text-sm text-dim">Wordmark at minimum size</span>
          </div>
          <h3 class="text-sm font-semibold text-high mb-1">Wordmark Only</h3>
          <div class="flex items-baseline gap-2">
            <span class="text-2xl font-semibold text-high">80px</span>
            <span class="text-sm text-low">wide (digital)</span>
          </div>
          <p class="text-xs text-low mt-1">20mm wide for print at 300 DPI</p>
        </div>
      </div>
    </section>

    <div class="border-t border-line"></div>

    <!-- Clear Space -->
    <section class="px-10 lg:px-20 py-24">
      <h2 class="text-xl font-semibold text-high mb-1">Clear Space</h2>
      <p class="text-sm text-low mb-8">The clear space is a protected area around the logo where no other visual elements may appear. It is measured using the symbol height as the base unit (1x). Maintain at least 1x on all sides of the logo.</p>

      <div class="aspect-video bg-surface-1 flex items-center justify-center">
        <span class="text-sm text-dim">Clear space diagram: 1x symbol height on all sides of primary logo</span>
      </div>

      <div class="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="p-8 border border-line">
          <h3 class="text-sm font-semibold text-high mb-3">Primary Logo Clear Space</h3>
          <div class="aspect-3/1 bg-surface-1 flex items-center justify-center border border-line ">
            <span class="text-sm text-dim">Primary logo with 1x clear space overlay</span>
          </div>
          <p class="text-sm text-low mt-3">1x symbol height minimum on all sides. In hero layouts, increase to 2x for greater visual breathing room.</p>
        </div>
        <div class="p-8 border border-line">
          <h3 class="text-sm font-semibold text-high mb-3">Symbol Clear Space</h3>
          <div class="aspect-square max-h-48 mx-auto bg-surface-1 flex items-center justify-center border border-line ">
            <span class="text-sm text-dim">Symbol with 1x clear space overlay</span>
          </div>
          <p class="text-sm text-low mt-3">1x symbol height minimum on all sides. For app icons, the container itself provides the clear space.</p>
        </div>
      </div>
    </section>

    <div class="border-t border-line"></div>

    <!-- Scale Reference -->
    <section class="px-10 lg:px-20 py-24">
      <h2 class="text-xl font-semibold text-high mb-1">Scale Reference</h2>
      <p class="text-sm text-low mb-8">Common sizing recommendations for typical use cases.</p>

      <div class="overflow-x-auto">
        <table class="w-full text-sm">
          <thead>
            <tr class="border-b border-line">
              <th class="text-left py-3 pr-4 font-medium text-high">Context</th>
              <th class="text-left py-3 pr-4 font-medium text-high">Variant</th>
              <th class="text-left py-3 pr-4 font-medium text-high">Recommended Size</th>
              <th class="text-left py-3 font-medium text-high">Clear Space</th>
            </tr>
          </thead>
          <tbody class="text-low">
            <tr class="border-b border-line">
              <td class="py-3 pr-4">Website header</td>
              <td class="py-3 pr-4">Primary</td>
              <td class="py-3 pr-4">140-160px wide</td>
              <td class="py-3">1x</td>
            </tr>
            <tr class="border-b border-line">
              <td class="py-3 pr-4">Mobile header</td>
              <td class="py-3 pr-4">Primary</td>
              <td class="py-3 pr-4">120px wide</td>
              <td class="py-3">1x</td>
            </tr>
            <tr class="border-b border-line">
              <td class="py-3 pr-4">Favicon</td>
              <td class="py-3 pr-4">Symbol</td>
              <td class="py-3 pr-4">32px / 16px</td>
              <td class="py-3">Container</td>
            </tr>
            <tr class="border-b border-line">
              <td class="py-3 pr-4">App icon</td>
              <td class="py-3 pr-4">Symbol</td>
              <td class="py-3 pr-4">512px (source)</td>
              <td class="py-3">20% padding</td>
            </tr>
            <tr class="border-b border-line">
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
