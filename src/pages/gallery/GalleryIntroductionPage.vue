<script setup lang="ts">
</script>

<template>
  <div>
    <header class="px-10 lg:px-20 pt-24 pb-16">
      <p class="text-[11px] text-dim uppercase tracking-widest font-medium mb-5">Gallery</p>
      <h1 class="text-5xl font-medium text-high">Introduction</h1>
      <p class="text-base text-low mt-6 max-w-xl leading-relaxed">
        How the Auterion design system manifests in real contexts — from marketing collateral to product interfaces.
      </p>
    </header>

    <div class="border-t border-line"></div>

    <section class="px-10 lg:px-20 py-24">
      <h2 class="text-xl font-semibold text-high mb-2">What the Gallery Shows</h2>
      <p class="text-sm text-low mb-8 max-w-3xl">The gallery demonstrates how color tokens, typography, layout patterns, and voice principles come together in production. Each category shows annotated examples with references back to the design system foundations they use.</p>
      <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <a href="/gallery/marketing" class="group block p-8 border border-line hover:border-line-hover dark:hover:border-line-active transition-colors">
          <div class="aspect-video bg-surface-1 flex items-center justify-center mb-4">
            <span class="text-sm text-dim">Marketing collateral preview</span>
          </div>
          <h3 class="text-sm font-semibold text-high mb-2 group-hover:text-high dark:group-hover:text-white transition-colors">Marketing</h3>
          <p class="text-sm text-low leading-relaxed">Trade show booths, presentation decks, printed brochures, business cards, and event banners. See how the brand system scales from digital to physical.</p>
        </a>
        <a href="/gallery/applications" class="group block p-8 border border-line hover:border-line-hover dark:hover:border-line-active transition-colors">
          <div class="aspect-video bg-surface-1 flex items-center justify-center mb-4">
            <span class="text-sm text-dim">Application UI preview</span>
          </div>
          <h3 class="text-sm font-semibold text-high mb-2 group-hover:text-high dark:group-hover:text-white transition-colors">Applications</h3>
          <p class="text-sm text-low leading-relaxed">Ground control stations, telemetry dashboards, mission planning interfaces, and fleet management views. See how design tokens drive product UI.</p>
        </a>
        <a href="/gallery/website" class="group block p-8 border border-line hover:border-line-hover dark:hover:border-line-active transition-colors">
          <div class="aspect-video bg-surface-1 flex items-center justify-center mb-4">
            <span class="text-sm text-dim">Website design preview</span>
          </div>
          <h3 class="text-sm font-semibold text-high mb-2 group-hover:text-high dark:group-hover:text-white transition-colors">Website</h3>
          <p class="text-sm text-low leading-relaxed">The Auterion website as a living implementation of the design system — homepage, product pages, capabilities, partners, careers, and company.</p>
        </a>
      </div>
    </section>

    <div class="border-t border-line"></div>

    <section class="px-10 lg:px-20 py-24">
      <h2 class="text-xl font-semibold text-high mb-6">How to Use the Gallery</h2>
      <div class="space-y-6 max-w-3xl">
        <div class="border-l-2 border-primary pl-5">
          <h3 class="text-sm font-semibold text-high mb-1">Reference, Not Templates</h3>
          <p class="text-sm text-low leading-relaxed">Gallery items show how design decisions were applied in specific contexts. They are not rigid templates. Use them to understand the intent behind choices, then adapt for your own deliverable.</p>
        </div>
        <div class="border-l-2 border-primary pl-5">
          <h3 class="text-sm font-semibold text-high mb-1">Annotations Matter</h3>
          <p class="text-sm text-low leading-relaxed">Each example is annotated with which tokens, type styles, color decisions, and layout patterns are being demonstrated. Read the annotations to understand why something looks the way it does.</p>
        </div>
        <div class="border-l-2 border-primary pl-5">
          <h3 class="text-sm font-semibold text-high mb-1">Cross-Reference Foundations</h3>
          <p class="text-sm text-low leading-relaxed">Gallery pages reference back to the foundational sections (Color, Typography, Voice). If you want to understand the underlying rules, follow those links.</p>
        </div>
      </div>
    </section>
  </div>
</template>
