<script setup lang="ts">
</script>

<template>
  <div>
    <header class="px-8 lg:px-16 pt-16 pb-12">
      <p class="text-[11px] text-zinc-400 dark:text-zinc-500 uppercase tracking-widest font-medium mb-3">Gallery</p>
      <h1 class="text-5xl font-medium text-zinc-900 dark:text-white">Marketing</h1>
      <p class="text-base text-zinc-500 dark:text-zinc-400 mt-4 max-w-xl leading-relaxed">
        Trade show materials, presentations, print collateral, and campaign assets showing the design system in physical and digital marketing contexts.
      </p>
    </header>

    <div class="border-t border-zinc-200 dark:border-zinc-800"></div>

    <section class="px-8 lg:px-16 py-16">
      <h2 class="text-xl font-semibold text-zinc-900 dark:text-white mb-8">Collateral Examples</h2>
      <div class="grid gap-8 sm:grid-cols-2">
        <div>
          <div class="aspect-video bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center mb-4">
            <span class="text-sm text-zinc-400 dark:text-zinc-500">Trade show booth rendering</span>
          </div>
          <h3 class="text-sm font-semibold text-zinc-900 dark:text-white mb-2">Trade Show Booth</h3>
          <p class="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed mb-3">Large-format application of the brand. Dark background (page-bg dark token), primary blue accent on key messaging, Inter Display for headlines at 72pt+. Logo at minimum clear space on all panels.</p>
          <div class="flex flex-wrap gap-2">
            <span class="px-2 py-1 text-[11px] font-medium text-zinc-500 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-800 rounded">Color: page-bg, primary</span>
            <span class="px-2 py-1 text-[11px] font-medium text-zinc-500 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-800 rounded">Type: Display scale</span>
            <span class="px-2 py-1 text-[11px] font-medium text-zinc-500 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-800 rounded">Logo: Full lockup</span>
          </div>
        </div>
        <div>
          <div class="aspect-video bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center mb-4">
            <span class="text-sm text-zinc-400 dark:text-zinc-500">Presentation deck slide</span>
          </div>
          <h3 class="text-sm font-semibold text-zinc-900 dark:text-white mb-2">Presentation Deck</h3>
          <p class="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed mb-3">16:9 slides using the dark theme. Section dividers use primary blue full-bleed backgrounds. Data slides use surface-1 cards with border-subtle dividers. Chart colors follow the semantic palette: blue for primary metrics, teal for secondary.</p>
          <div class="flex flex-wrap gap-2">
            <span class="px-2 py-1 text-[11px] font-medium text-zinc-500 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-800 rounded">Color: surface-1, primary, accent</span>
            <span class="px-2 py-1 text-[11px] font-medium text-zinc-500 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-800 rounded">Type: Heading + Body scales</span>
            <span class="px-2 py-1 text-[11px] font-medium text-zinc-500 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-800 rounded">Layout: 16:9 grid</span>
          </div>
        </div>
        <div>
          <div class="aspect-video bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center mb-4">
            <span class="text-sm text-zinc-400 dark:text-zinc-500">Tri-fold brochure layout</span>
          </div>
          <h3 class="text-sm font-semibold text-zinc-900 dark:text-white mb-2">Printed Brochure</h3>
          <p class="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed mb-3">Tri-fold format. Cover uses dark background with the Auterion wordmark and a single product hero image. Interior panels use light theme for readability with slate-tinted neutrals. Product specs set in JetBrains Mono.</p>
          <div class="flex flex-wrap gap-2">
            <span class="px-2 py-1 text-[11px] font-medium text-zinc-500 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-800 rounded">Color: Dark cover, light interior</span>
            <span class="px-2 py-1 text-[11px] font-medium text-zinc-500 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-800 rounded">Type: Inter + JetBrains Mono</span>
            <span class="px-2 py-1 text-[11px] font-medium text-zinc-500 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-800 rounded">Print: CMYK-safe palette</span>
          </div>
        </div>
        <div>
          <div class="aspect-video bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center mb-4">
            <span class="text-sm text-zinc-400 dark:text-zinc-500">Business card front and back</span>
          </div>
          <h3 class="text-sm font-semibold text-zinc-900 dark:text-white mb-2">Business Cards</h3>
          <p class="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed mb-3">3.5 x 2 inch standard. Front: dark background, Auterion symbol mark, name in Inter Semibold 9pt, title in Inter Regular 8pt. Back: full dark with wordmark centered. No gradient or texture effects.</p>
          <div class="flex flex-wrap gap-2">
            <span class="px-2 py-1 text-[11px] font-medium text-zinc-500 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-800 rounded">Logo: Symbol + wordmark</span>
            <span class="px-2 py-1 text-[11px] font-medium text-zinc-500 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-800 rounded">Type: 8-9pt body</span>
            <span class="px-2 py-1 text-[11px] font-medium text-zinc-500 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-800 rounded">Color: Dark mono</span>
          </div>
        </div>
      </div>
    </section>

    <div class="border-t border-zinc-200 dark:border-zinc-800"></div>

    <section class="px-8 lg:px-16 py-16">
      <h2 class="text-xl font-semibold text-zinc-900 dark:text-white mb-8">Event Banners</h2>
      <div class="aspect-[3/1] bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center mb-4">
        <span class="text-sm text-zinc-400 dark:text-zinc-500">Wide-format event banner</span>
      </div>
      <div class="grid gap-4 sm:grid-cols-3 mt-6">
        <div class="p-6 border border-zinc-200 dark:border-zinc-800">
          <p class="text-[11px] text-zinc-400 dark:text-zinc-500 uppercase tracking-widest font-medium mb-2">Typography</p>
          <p class="text-sm text-zinc-500 dark:text-zinc-400">Headline in Inter Semibold at maximum legible size for viewing distance. Tagline in Inter Regular, 40-50% of headline size. All text left-aligned.</p>
        </div>
        <div class="p-6 border border-zinc-200 dark:border-zinc-800">
          <p class="text-[11px] text-zinc-400 dark:text-zinc-500 uppercase tracking-widest font-medium mb-2">Color</p>
          <p class="text-sm text-zinc-500 dark:text-zinc-400">Dark background (zinc-950 / page-bg). White text for headlines. Primary blue for accent elements — a single line, bar, or highlight. No gradients.</p>
        </div>
        <div class="p-6 border border-zinc-200 dark:border-zinc-800">
          <p class="text-[11px] text-zinc-400 dark:text-zinc-500 uppercase tracking-widest font-medium mb-2">Layout</p>
          <p class="text-sm text-zinc-500 dark:text-zinc-400">Logo in top-left or bottom-left corner with minimum clear space. Product imagery (if used) on the right third. URL or QR code in bottom-right.</p>
        </div>
      </div>
    </section>
  </div>
</template>
