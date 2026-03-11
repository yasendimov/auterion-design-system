<script setup lang="ts">
</script>

<template>
  <div>
    <header class="px-8 lg:px-16 pt-16 pb-12">
      <p class="text-[11px] text-zinc-400 dark:text-zinc-500 uppercase tracking-widest font-medium mb-3">Gallery</p>
      <h1 class="text-5xl font-medium text-zinc-900 dark:text-white">Introduction</h1>
      <p class="text-base text-zinc-500 dark:text-zinc-400 mt-4 max-w-xl leading-relaxed">
        How the Auterion design system manifests in real contexts — from marketing collateral to product interfaces.
      </p>
    </header>

    <div class="border-t border-zinc-200 dark:border-zinc-800"></div>

    <section class="px-8 lg:px-16 py-16">
      <h2 class="text-xl font-semibold text-zinc-900 dark:text-white mb-2">What the Gallery Shows</h2>
      <p class="text-sm text-zinc-500 dark:text-zinc-400 mb-8 max-w-3xl">The gallery demonstrates how color tokens, typography, layout patterns, and voice principles come together in production. Each category shows annotated examples with references back to the design system foundations they use.</p>
      <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <a href="/gallery/marketing" class="group block p-6 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors">
          <div class="aspect-video bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center mb-4">
            <span class="text-sm text-zinc-400 dark:text-zinc-500">Marketing collateral preview</span>
          </div>
          <h3 class="text-sm font-semibold text-zinc-900 dark:text-white mb-2 group-hover:text-zinc-900 dark:group-hover:text-white transition-colors">Marketing</h3>
          <p class="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">Trade show booths, presentation decks, printed brochures, business cards, and event banners. See how the brand system scales from digital to physical.</p>
        </a>
        <a href="/gallery/applications" class="group block p-6 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors">
          <div class="aspect-video bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center mb-4">
            <span class="text-sm text-zinc-400 dark:text-zinc-500">Application UI preview</span>
          </div>
          <h3 class="text-sm font-semibold text-zinc-900 dark:text-white mb-2 group-hover:text-zinc-900 dark:group-hover:text-white transition-colors">Applications</h3>
          <p class="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">Ground control stations, telemetry dashboards, mission planning interfaces, and fleet management views. See how design tokens drive product UI.</p>
        </a>
        <a href="/gallery/website" class="group block p-6 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors">
          <div class="aspect-video bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center mb-4">
            <span class="text-sm text-zinc-400 dark:text-zinc-500">Website design preview</span>
          </div>
          <h3 class="text-sm font-semibold text-zinc-900 dark:text-white mb-2 group-hover:text-zinc-900 dark:group-hover:text-white transition-colors">Website</h3>
          <p class="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">The Auterion website as a living implementation of the design system — homepage, product pages, capabilities, partners, careers, and company.</p>
        </a>
      </div>
    </section>

    <div class="border-t border-zinc-200 dark:border-zinc-800"></div>

    <section class="px-8 lg:px-16 py-16">
      <h2 class="text-xl font-semibold text-zinc-900 dark:text-white mb-6">How to Use the Gallery</h2>
      <div class="space-y-6 max-w-3xl">
        <div class="border-l-2 border-blue-500 pl-5">
          <h3 class="text-sm font-semibold text-zinc-900 dark:text-white mb-1">Reference, Not Templates</h3>
          <p class="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">Gallery items show how design decisions were applied in specific contexts. They are not rigid templates. Use them to understand the intent behind choices, then adapt for your own deliverable.</p>
        </div>
        <div class="border-l-2 border-blue-500 pl-5">
          <h3 class="text-sm font-semibold text-zinc-900 dark:text-white mb-1">Annotations Matter</h3>
          <p class="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">Each example is annotated with which tokens, type styles, color decisions, and layout patterns are being demonstrated. Read the annotations to understand why something looks the way it does.</p>
        </div>
        <div class="border-l-2 border-blue-500 pl-5">
          <h3 class="text-sm font-semibold text-zinc-900 dark:text-white mb-1">Cross-Reference Foundations</h3>
          <p class="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">Gallery pages reference back to the foundational sections (Color, Typography, Voice). If you want to understand the underlying rules, follow those links.</p>
        </div>
      </div>
    </section>
  </div>
</template>
