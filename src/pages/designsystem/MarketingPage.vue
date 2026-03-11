<script setup lang="ts">
</script>

<template>
  <div>
    <header class="px-8 lg:px-16 pt-16 pb-12">
      <p class="text-[11px] text-zinc-400 dark:text-zinc-500 uppercase tracking-widest font-medium mb-3">Design System</p>
      <h1 class="text-5xl font-medium text-zinc-900 dark:text-white">Marketing</h1>
      <p class="text-base text-zinc-500 dark:text-zinc-400 mt-4 max-w-xl leading-relaxed">
        What Auterion marketing materials look like and how the design system shapes the visual language across trade shows, presentations, and print collateral.
      </p>
    </header>

    <div class="border-t border-zinc-200 dark:border-zinc-800"></div>

    <!-- Introduction -->
    <section id="introduction" class="px-8 lg:px-16 py-16">
      <h2 class="text-xl font-semibold text-zinc-900 dark:text-white mb-8">Introduction</h2>
      <div class="max-w-2xl">
        <p class="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed mb-4">
          Auterion's marketing materials extend the design system into physical and digital touchpoints. Every piece of collateral -- from a conference slide deck to a trade show banner -- uses the same token architecture, type scale, and color palette that drives the product UI.
        </p>
        <p class="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed mb-4">
          The dark-mode-first approach carries into marketing: dark backgrounds with primary blue accents create immediate visual recognition. Inter serves as the sole typeface across all materials, with JetBrains Mono reserved for technical specifications and data callouts.
        </p>
        <p class="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
          This consistency ensures that whether someone encounters Auterion at a trade show, in a printed brochure, or on a presentation screen, the brand feels unified and aerospace-grade.
        </p>
      </div>
    </section>

    <div class="border-t border-zinc-200 dark:border-zinc-800"></div>

    <!-- Components -->
    <section id="components" class="px-8 lg:px-16 py-16">
      <h2 class="text-xl font-semibold text-zinc-900 dark:text-white mb-8">Components</h2>
      <div class="grid gap-8 sm:grid-cols-2">
        <!-- Title Slide Template -->
        <div class="p-6 border border-zinc-200 dark:border-zinc-800">
          <div class="aspect-video bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center mb-4">
            <span class="text-sm text-zinc-400 dark:text-zinc-500">Title slide template</span>
          </div>
          <h3 class="text-sm font-semibold text-zinc-900 dark:text-white mb-2">Presentation: Title Slide</h3>
          <p class="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed mb-3">16:9 (1920x1080). Dark background using page-bg token. Headline in Inter Semibold 48pt, subtitle in Inter Regular 24pt. Auterion wordmark bottom-left with minimum clear space.</p>
          <div class="flex flex-wrap gap-2">
            <span class="px-2 py-1 text-[11px] font-medium text-zinc-500 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-800 rounded">1920 x 1080</span>
            <span class="px-2 py-1 text-[11px] font-medium text-zinc-500 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-800 rounded">Font: Inter Semibold 48pt</span>
            <span class="px-2 py-1 text-[11px] font-medium text-zinc-500 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-800 rounded">Color: page-bg, primary</span>
          </div>
        </div>

        <!-- Content Slide Template -->
        <div class="p-6 border border-zinc-200 dark:border-zinc-800">
          <div class="aspect-video bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center mb-4">
            <span class="text-sm text-zinc-400 dark:text-zinc-500">Content slide template</span>
          </div>
          <h3 class="text-sm font-semibold text-zinc-900 dark:text-white mb-2">Presentation: Content Slide</h3>
          <p class="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed mb-3">16:9 (1920x1080). Two-column layout on surface-1 background. Heading in Inter Semibold 32pt, body in Inter Regular 18pt. Bullet points use primary blue markers. Image area right-aligned.</p>
          <div class="flex flex-wrap gap-2">
            <span class="px-2 py-1 text-[11px] font-medium text-zinc-500 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-800 rounded">1920 x 1080</span>
            <span class="px-2 py-1 text-[11px] font-medium text-zinc-500 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-800 rounded">Font: Inter Regular 18pt</span>
            <span class="px-2 py-1 text-[11px] font-medium text-zinc-500 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-800 rounded">Color: surface-1, text-primary</span>
          </div>
        </div>

        <!-- Data Slide Template -->
        <div class="p-6 border border-zinc-200 dark:border-zinc-800">
          <div class="aspect-video bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center mb-4">
            <span class="text-sm text-zinc-400 dark:text-zinc-500">Data slide template</span>
          </div>
          <h3 class="text-sm font-semibold text-zinc-900 dark:text-white mb-2">Presentation: Data Slide</h3>
          <p class="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed mb-3">16:9 (1920x1080). Chart-focused layout with surface-2 card containers. Data labels in JetBrains Mono 14pt. Chart colors follow semantic palette: blue for primary metrics, teal for secondary, amber for caution indicators.</p>
          <div class="flex flex-wrap gap-2">
            <span class="px-2 py-1 text-[11px] font-medium text-zinc-500 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-800 rounded">1920 x 1080</span>
            <span class="px-2 py-1 text-[11px] font-medium text-zinc-500 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-800 rounded">Font: JetBrains Mono 14pt</span>
            <span class="px-2 py-1 text-[11px] font-medium text-zinc-500 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-800 rounded">Color: primary, accent, caution</span>
          </div>
        </div>

        <!-- Brochure Layout -->
        <div class="p-6 border border-zinc-200 dark:border-zinc-800">
          <div class="aspect-video bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center mb-4">
            <span class="text-sm text-zinc-400 dark:text-zinc-500">Tri-fold brochure layout</span>
          </div>
          <h3 class="text-sm font-semibold text-zinc-900 dark:text-white mb-2">Brochure Layout</h3>
          <p class="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed mb-3">Tri-fold, 11x8.5 inches unfolded. Cover panel uses dark background with wordmark and hero image. Interior panels use light theme with slate neutrals. Specs in JetBrains Mono. CMYK-safe palette throughout.</p>
          <div class="flex flex-wrap gap-2">
            <span class="px-2 py-1 text-[11px] font-medium text-zinc-500 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-800 rounded">11 x 8.5 in (unfolded)</span>
            <span class="px-2 py-1 text-[11px] font-medium text-zinc-500 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-800 rounded">Font: Inter + JetBrains Mono</span>
            <span class="px-2 py-1 text-[11px] font-medium text-zinc-500 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-800 rounded">Print: CMYK-safe</span>
          </div>
        </div>

        <!-- Business Card -->
        <div class="p-6 border border-zinc-200 dark:border-zinc-800">
          <div class="aspect-video bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center mb-4">
            <span class="text-sm text-zinc-400 dark:text-zinc-500">Business card front and back</span>
          </div>
          <h3 class="text-sm font-semibold text-zinc-900 dark:text-white mb-2">Business Card</h3>
          <p class="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed mb-3">3.5 x 2 inches. Front: dark background, symbol mark, name in Inter Semibold 9pt, title in Inter Regular 8pt, contact in 7pt. Back: full dark with centered wordmark. No gradients or textures.</p>
          <div class="flex flex-wrap gap-2">
            <span class="px-2 py-1 text-[11px] font-medium text-zinc-500 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-800 rounded">3.5 x 2 in</span>
            <span class="px-2 py-1 text-[11px] font-medium text-zinc-500 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-800 rounded">Font: Inter 7-9pt</span>
            <span class="px-2 py-1 text-[11px] font-medium text-zinc-500 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-800 rounded">Color: Dark mono</span>
          </div>
        </div>

        <!-- Trade Show Banner -->
        <div class="p-6 border border-zinc-200 dark:border-zinc-800">
          <div class="aspect-video bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center mb-4">
            <span class="text-sm text-zinc-400 dark:text-zinc-500">Trade show banner specs</span>
          </div>
          <h3 class="text-sm font-semibold text-zinc-900 dark:text-white mb-2">Trade Show Banner</h3>
          <p class="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed mb-3">Wide-format 10x3 feet. Dark background, headline in Inter Semibold at maximum legible size for 15ft viewing distance. Primary blue accent stripe. Logo at minimum 8% of banner width.</p>
          <div class="flex flex-wrap gap-2">
            <span class="px-2 py-1 text-[11px] font-medium text-zinc-500 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-800 rounded">10 x 3 ft</span>
            <span class="px-2 py-1 text-[11px] font-medium text-zinc-500 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-800 rounded">Font: Inter Display</span>
            <span class="px-2 py-1 text-[11px] font-medium text-zinc-500 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-800 rounded">Color: page-bg, primary</span>
          </div>
        </div>
      </div>
    </section>

    <div class="border-t border-zinc-200 dark:border-zinc-800"></div>

    <!-- Examples -->
    <section id="examples" class="px-8 lg:px-16 py-16">
      <h2 class="text-xl font-semibold text-zinc-900 dark:text-white mb-8">Examples</h2>
      <div class="grid gap-8 sm:grid-cols-2">
        <div>
          <div class="aspect-video bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center mb-4">
            <span class="text-sm text-zinc-400 dark:text-zinc-500">Trade show booth rendering</span>
          </div>
          <h3 class="text-sm font-semibold text-zinc-900 dark:text-white mb-2">Trade Show Booth</h3>
          <p class="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">Dark background panels using page-bg token. Primary blue accent on key messaging. Inter Display for headlines at 72pt+. Full lockup logo on all panels with minimum clear space enforced.</p>
        </div>
        <div>
          <div class="aspect-video bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center mb-4">
            <span class="text-sm text-zinc-400 dark:text-zinc-500">Conference presentation screenshot</span>
          </div>
          <h3 class="text-sm font-semibold text-zinc-900 dark:text-white mb-2">Conference Presentation</h3>
          <p class="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">Section dividers use primary blue full-bleed backgrounds. Data slides use surface-1 cards with border-subtle dividers. Chart colors follow the semantic palette: blue for primary, teal for secondary metrics.</p>
        </div>
        <div>
          <div class="aspect-video bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center mb-4">
            <span class="text-sm text-zinc-400 dark:text-zinc-500">Printed brochure spread</span>
          </div>
          <h3 class="text-sm font-semibold text-zinc-900 dark:text-white mb-2">Printed Brochure</h3>
          <p class="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">Cover uses dark theme; interior panels switch to light theme for print readability. Slate-tinted neutrals maintain the aerospace feel. Technical specs set in JetBrains Mono for visual differentiation.</p>
        </div>
        <div>
          <div class="aspect-video bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center mb-4">
            <span class="text-sm text-zinc-400 dark:text-zinc-500">Business card detail</span>
          </div>
          <h3 class="text-sm font-semibold text-zinc-900 dark:text-white mb-2">Business Cards</h3>
          <p class="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">Minimal dark-on-dark design. Symbol mark on front, wordmark on back. Type hierarchy uses weight contrast only (Semibold name, Regular title). No color accents -- pure dark mono palette.</p>
        </div>
        <div class="sm:col-span-2">
          <div class="aspect-[3/1] bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center mb-4">
            <span class="text-sm text-zinc-400 dark:text-zinc-500">Wide-format event banner</span>
          </div>
          <h3 class="text-sm font-semibold text-zinc-900 dark:text-white mb-2">Event Banner</h3>
          <p class="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">Wide-format banner demonstrating distance-optimized typography. Primary blue accent stripe creates visual hierarchy. Headline sized for 15ft legibility. Logo placement follows the minimum 8% width rule.</p>
        </div>
      </div>
    </section>
  </div>
</template>
