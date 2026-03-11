<script setup lang="ts">
</script>

<template>
  <div>
    <header class="px-8 lg:px-16 pt-16 pb-12">
      <p class="text-[11px] text-zinc-400 dark:text-zinc-500 uppercase tracking-widest font-medium mb-3">Logo</p>
      <h1 class="text-5xl font-medium text-zinc-900 dark:text-white">Black & White</h1>
      <p class="text-base text-zinc-500 dark:text-zinc-400 mt-4">When color reproduction is unavailable or undesirable, use the monochrome versions of the logo. These are not grayscale conversions -- they are purpose-built single-color variants.</p>
    </header>

    <div class="border-t border-zinc-200 dark:border-zinc-800"></div>

    <!-- White Logo -->
    <section class="px-8 lg:px-16 py-16">
      <h2 class="text-xl font-semibold text-zinc-900 dark:text-white mb-1">White Logo</h2>
      <p class="text-sm text-zinc-500 dark:text-zinc-400 mb-8">Use the white logo on dark or saturated backgrounds. This is the most common monochrome variant since Auterion's primary brand context is dark-mode-first.</p>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <div class="aspect-[3/1] bg-zinc-900 flex items-center justify-center border border-zinc-700">
            <span class="text-sm text-zinc-500">White logo on dark background</span>
          </div>
          <p class="text-xs text-zinc-400 dark:text-zinc-500 mt-2">On dark neutrals (#000 -- #333)</p>
        </div>
        <div>
          <div class="aspect-[3/1] bg-blue-600 flex items-center justify-center border border-blue-500">
            <span class="text-sm text-blue-200">White logo on brand blue</span>
          </div>
          <p class="text-xs text-zinc-400 dark:text-zinc-500 mt-2">On saturated brand colors</p>
        </div>
      </div>

      <div class="mt-6 p-6 border border-zinc-200 dark:border-zinc-800">
        <h3 class="text-sm font-semibold text-zinc-900 dark:text-white mb-2">When to use</h3>
        <ul class="text-sm text-zinc-500 dark:text-zinc-400 space-y-1.5 list-disc list-inside">
          <li>Dark UI backgrounds and dark-mode interfaces</li>
          <li>Photography overlays on dark or busy imagery</li>
          <li>Colored backgrounds where the full-color logo lacks contrast</li>
          <li>Laser-etched hardware labels on dark chassis</li>
          <li>Single-color print processes (white ink on dark stock)</li>
        </ul>
      </div>
    </section>

    <div class="border-t border-zinc-200 dark:border-zinc-800"></div>

    <!-- Black Logo -->
    <section class="px-8 lg:px-16 py-16">
      <h2 class="text-xl font-semibold text-zinc-900 dark:text-white mb-1">Black Logo</h2>
      <p class="text-sm text-zinc-500 dark:text-zinc-400 mb-8">Use the black logo on light backgrounds. This is the standard choice for print documents, contracts, and light-themed contexts.</p>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <div class="aspect-[3/1] bg-white flex items-center justify-center border border-zinc-200">
            <span class="text-sm text-zinc-400">Black logo on white background</span>
          </div>
          <p class="text-xs text-zinc-400 dark:text-zinc-500 mt-2">On white (#fff)</p>
        </div>
        <div>
          <div class="aspect-[3/1] bg-zinc-100 flex items-center justify-center border border-zinc-200">
            <span class="text-sm text-zinc-400">Black logo on light gray</span>
          </div>
          <p class="text-xs text-zinc-400 dark:text-zinc-500 mt-2">On light neutrals (#eee -- #fff)</p>
        </div>
      </div>

      <div class="mt-6 p-6 border border-zinc-200 dark:border-zinc-800">
        <h3 class="text-sm font-semibold text-zinc-900 dark:text-white mb-2">When to use</h3>
        <ul class="text-sm text-zinc-500 dark:text-zinc-400 space-y-1.5 list-disc list-inside">
          <li>Print documents, letterheads, and invoices</li>
          <li>Legal and compliance materials</li>
          <li>Fax and single-color print output</li>
          <li>Light-mode UI contexts</li>
          <li>Embossed or stamped applications</li>
        </ul>
      </div>
    </section>

    <div class="border-t border-zinc-200 dark:border-zinc-800"></div>

    <!-- Do / Don't -->
    <section class="px-8 lg:px-16 py-16">
      <h2 class="text-xl font-semibold text-zinc-900 dark:text-white mb-1">Do / Don't</h2>
      <p class="text-sm text-zinc-500 dark:text-zinc-400 mb-8">Follow these rules to maintain the integrity of the monochrome logo variants.</p>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <div class="aspect-[3/1] bg-zinc-900 flex items-center justify-center border-2 border-green-500/40">
            <span class="text-sm text-zinc-500">White logo on dark background</span>
          </div>
          <p class="text-sm font-medium text-green-600 dark:text-green-400 mt-2">Do: Use white logo on dark backgrounds</p>
        </div>
        <div>
          <div class="aspect-[3/1] bg-zinc-100 flex items-center justify-center border-2 border-red-500/40">
            <span class="text-sm text-zinc-400">White logo on light background (wrong)</span>
          </div>
          <p class="text-sm font-medium text-red-600 dark:text-red-400 mt-2">Don't: Use white logo on light backgrounds</p>
        </div>
        <div>
          <div class="aspect-[3/1] bg-white flex items-center justify-center border-2 border-green-500/40">
            <span class="text-sm text-zinc-400">Black logo on white background</span>
          </div>
          <p class="text-sm font-medium text-green-600 dark:text-green-400 mt-2">Do: Use black logo on light backgrounds</p>
        </div>
        <div>
          <div class="aspect-[3/1] bg-zinc-900 flex items-center justify-center border-2 border-red-500/40">
            <span class="text-sm text-zinc-500">Black logo on dark background (wrong)</span>
          </div>
          <p class="text-sm font-medium text-red-600 dark:text-red-400 mt-2">Don't: Use black logo on dark backgrounds</p>
        </div>
        <div>
          <div class="aspect-[3/1] bg-zinc-900 flex items-center justify-center border-2 border-green-500/40">
            <span class="text-sm text-zinc-500">Full-color logo on neutral background</span>
          </div>
          <p class="text-sm font-medium text-green-600 dark:text-green-400 mt-2">Do: Prefer the full-color logo when color is available</p>
        </div>
        <div>
          <div class="aspect-[3/1] bg-zinc-300 flex items-center justify-center border-2 border-red-500/40">
            <span class="text-sm text-zinc-500">Grayscale conversion of color logo (wrong)</span>
          </div>
          <p class="text-sm font-medium text-red-600 dark:text-red-400 mt-2">Don't: Convert the color logo to grayscale -- use the purpose-built B&W versions</p>
        </div>
      </div>
    </section>
  </div>
</template>
