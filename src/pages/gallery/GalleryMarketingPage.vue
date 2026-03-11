<script setup lang="ts">
</script>

<template>
  <div>
    <header class="px-8 lg:px-16 pt-16 pb-12">
      <p class="text-[11px] text-dim uppercase tracking-widest font-medium mb-3">Gallery</p>
      <h1 class="text-5xl font-medium text-high">Marketing</h1>
      <p class="text-base text-low mt-4 max-w-xl leading-relaxed">
        Trade show materials, presentations, print collateral, and campaign assets showing the design system in physical and digital marketing contexts.
      </p>
    </header>

    <div class="border-t border-line"></div>

    <section class="px-8 lg:px-16 py-16">
      <h2 class="text-xl font-semibold text-high mb-8">Collateral Examples</h2>
      <div class="grid gap-8 sm:grid-cols-2">
        <div>
          <div class="aspect-video bg-surface-1 flex items-center justify-center mb-4">
            <span class="text-sm text-dim">Trade show booth rendering</span>
          </div>
          <h3 class="text-sm font-semibold text-high mb-2">Trade Show Booth</h3>
          <p class="text-sm text-low leading-relaxed mb-3">Large-format application of the brand. Dark background (page-bg dark token), primary blue accent on key messaging, Inter Display for headlines at 72pt+. Logo at minimum clear space on all panels.</p>
          <div class="flex flex-wrap gap-2">
            <span class="px-2 py-1 text-[11px] font-medium text-low bg-surface-1 rounded">Color: page-bg, primary</span>
            <span class="px-2 py-1 text-[11px] font-medium text-low bg-surface-1 rounded">Type: Display scale</span>
            <span class="px-2 py-1 text-[11px] font-medium text-low bg-surface-1 rounded">Logo: Full lockup</span>
          </div>
        </div>
        <div>
          <div class="aspect-video bg-surface-1 flex items-center justify-center mb-4">
            <span class="text-sm text-dim">Presentation deck slide</span>
          </div>
          <h3 class="text-sm font-semibold text-high mb-2">Presentation Deck</h3>
          <p class="text-sm text-low leading-relaxed mb-3">16:9 slides using the dark theme. Section dividers use primary blue full-bleed backgrounds. Data slides use surface-1 cards with border-subtle dividers. Chart colors follow the semantic palette: blue for primary metrics, teal for secondary.</p>
          <div class="flex flex-wrap gap-2">
            <span class="px-2 py-1 text-[11px] font-medium text-low bg-surface-1 rounded">Color: surface-1, primary, accent</span>
            <span class="px-2 py-1 text-[11px] font-medium text-low bg-surface-1 rounded">Type: Heading + Body scales</span>
            <span class="px-2 py-1 text-[11px] font-medium text-low bg-surface-1 rounded">Layout: 16:9 grid</span>
          </div>
        </div>
        <div>
          <div class="aspect-video bg-surface-1 flex items-center justify-center mb-4">
            <span class="text-sm text-dim">Tri-fold brochure layout</span>
          </div>
          <h3 class="text-sm font-semibold text-high mb-2">Printed Brochure</h3>
          <p class="text-sm text-low leading-relaxed mb-3">Tri-fold format. Cover uses dark background with the Auterion wordmark and a single product hero image. Interior panels use light theme for readability with slate-tinted neutrals. Product specs set in JetBrains Mono.</p>
          <div class="flex flex-wrap gap-2">
            <span class="px-2 py-1 text-[11px] font-medium text-low bg-surface-1 rounded">Color: Dark cover, light interior</span>
            <span class="px-2 py-1 text-[11px] font-medium text-low bg-surface-1 rounded">Type: Inter + JetBrains Mono</span>
            <span class="px-2 py-1 text-[11px] font-medium text-low bg-surface-1 rounded">Print: CMYK-safe palette</span>
          </div>
        </div>
        <div>
          <div class="aspect-video bg-surface-1 flex items-center justify-center mb-4">
            <span class="text-sm text-dim">Business card front and back</span>
          </div>
          <h3 class="text-sm font-semibold text-high mb-2">Business Cards</h3>
          <p class="text-sm text-low leading-relaxed mb-3">3.5 x 2 inch standard. Front: dark background, Auterion symbol mark, name in Inter Semibold 9pt, title in Inter Regular 8pt. Back: full dark with wordmark centered. No gradient or texture effects.</p>
          <div class="flex flex-wrap gap-2">
            <span class="px-2 py-1 text-[11px] font-medium text-low bg-surface-1 rounded">Logo: Symbol + wordmark</span>
            <span class="px-2 py-1 text-[11px] font-medium text-low bg-surface-1 rounded">Type: 8-9pt body</span>
            <span class="px-2 py-1 text-[11px] font-medium text-low bg-surface-1 rounded">Color: Dark mono</span>
          </div>
        </div>
      </div>
    </section>

    <div class="border-t border-line"></div>

    <section class="px-8 lg:px-16 py-16">
      <h2 class="text-xl font-semibold text-high mb-8">Event Banners</h2>
      <div class="aspect-3/1 bg-surface-1 flex items-center justify-center mb-4">
        <span class="text-sm text-dim">Wide-format event banner</span>
      </div>
      <div class="grid gap-4 sm:grid-cols-3 mt-6">
        <div class="p-6 border border-line">
          <p class="text-[11px] text-dim uppercase tracking-widest font-medium mb-2">Typography</p>
          <p class="text-sm text-low">Headline in Inter Semibold at maximum legible size for viewing distance. Tagline in Inter Regular, 40-50% of headline size. All text left-aligned.</p>
        </div>
        <div class="p-6 border border-line">
          <p class="text-[11px] text-dim uppercase tracking-widest font-medium mb-2">Color</p>
          <p class="text-sm text-low">Dark background (zinc-950 / page-bg). White text for headlines. Primary blue for accent elements — a single line, bar, or highlight. No gradients.</p>
        </div>
        <div class="p-6 border border-line">
          <p class="text-[11px] text-dim uppercase tracking-widest font-medium mb-2">Layout</p>
          <p class="text-sm text-low">Logo in top-left or bottom-left corner with minimum clear space. Product imagery (if used) on the right third. URL or QR code in bottom-right.</p>
        </div>
      </div>
    </section>
  </div>
</template>
