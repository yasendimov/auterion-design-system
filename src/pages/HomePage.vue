<script setup lang="ts">
import { ref } from 'vue'
import { useScrollReveal } from '@/composables/useScrollReveal'

const pageRef = ref<HTMLElement | null>(null)
useScrollReveal(pageRef)

const foundations = [
  { number: '01', title: 'Strategy', description: 'Mission, positioning, voice principles, and audience-specific messaging frameworks.', to: '/strategy' },
  { number: '02', title: 'Logo', description: 'Primary mark, symbol, lockups, clear space, minimum sizes, and placement rules.', to: '/logo' },
]

const visualLanguage = [
  { number: '03', title: 'Typography', description: 'Inter Variable type scale across 13 steps, weight-aware tracking, and OpenType feature configuration.', to: '/typography' },
  { number: '04', title: 'Color', description: '17 primitive scales with 10 steps each, semantic aliases, alert hierarchy, and contrast guidance.', to: '/color' },
  { number: '05', title: 'Photography', description: 'Art direction principles, YouTube thumbnails, social media imagery, and blog photography.', to: '/photography' },
  { number: '06', title: 'Iconography', description: 'Icon grid, style principles, product symbols, and functional UI icons for aerospace interfaces.', to: '/iconography' },
]

const communication = [
  { number: '07', title: 'Language & Style', description: 'Voice, tone, product terminology, and channel-specific writing rules.', to: '/language' },
  { number: '08', title: 'Gallery', description: 'Annotated examples of the design system applied across marketing, product, and web.', to: '/gallery' },
]

const specs = [
  { label: 'Typeface', value: 'Inter Variable' },
  { label: 'Weights', value: '3' },
  { label: 'Type Steps', value: '13' },
  { label: 'Color Scales', value: '17' },
  { label: 'Scale Steps', value: '10' },
  { label: 'Themes', value: 'Light / Dark' },
]

const designSystem = [
  { title: 'Marketing', description: 'Brand assets, templates, and component patterns for campaigns and collateral.', to: '/gallery/marketing' },
  { title: 'Applications', description: 'UI patterns, component specs, and interaction models for Auterion software products.', to: '/gallery/applications' },
  { title: 'Website', description: 'Page templates, layout patterns, and content components for auterion.com.', to: '/gallery/website-overview' },
]
</script>

<template>
  <div ref="pageRef">
    <!-- Hero -->
    <section class="px-8 lg:px-16 pt-28 pb-20" data-reveal>
      <p class="text-xs text-dim uppercase tracking-[0.2em] font-mono mb-8">Design System &mdash; v0.1.0</p>
      <h1 class="text-7xl lg:text-8xl font-medium text-high leading-none tracking-tight">
        Auterion
      </h1>
      <div class="mt-10 max-w-lg">
        <p class="text-lg text-low leading-relaxed">
          The unified design language for Auterion products, interfaces, and communications. Dark-mode-first. Built for aerospace.
        </p>
      </div>
    </section>

    <!-- Specs strip -->
    <div class="border-t border-line"></div>
    <section class="px-8 lg:px-16" data-reveal>
      <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-y-px bg-surface-3">
        <div v-for="spec in specs" :key="spec.label" class="bg-page py-7 pr-8">
          <p class="text-xs text-dim uppercase tracking-[0.2em] font-mono">{{ spec.label }}</p>
          <p class="text-base font-medium text-high mt-3">{{ spec.value }}</p>
        </div>
      </div>
    </section>

    <!-- Foundation -->
    <div class="border-t border-line"></div>
    <section class="px-8 lg:px-16 pt-20 pb-6" data-reveal>
      <p class="text-xs text-dim uppercase tracking-[0.2em] font-mono mb-12">Foundation</p>
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-y-px bg-surface-3">
        <router-link
          v-for="section in foundations"
          :key="section.number"
          :to="section.to"
          class="group bg-page py-10 pr-10 lg:pr-16 flex gap-8"
        >
          <span class="text-xs font-mono text-dim tabular-nums pt-1.5 shrink-0">{{ section.number }}</span>
          <div>
            <h3 class="text-2xl font-medium text-high group-hover:underline underline-offset-4 decoration-line">
              {{ section.title }}
            </h3>
            <p class="text-base text-low mt-4 leading-relaxed max-w-md">{{ section.description }}</p>
          </div>
        </router-link>
      </div>
    </section>

    <!-- Visual Language -->
    <section class="px-8 lg:px-16 pt-14 pb-6" data-reveal>
      <p class="text-xs text-dim uppercase tracking-[0.2em] font-mono mb-12">Visual Language</p>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-px bg-surface-3">
        <router-link
          v-for="section in visualLanguage"
          :key="section.number"
          :to="section.to"
          class="group bg-page p-8 flex flex-col justify-between min-h-64"
        >
          <div>
            <span class="text-xs font-mono text-dim tabular-nums">{{ section.number }}</span>
            <h3 class="text-lg font-medium text-high mt-4 group-hover:underline underline-offset-4 decoration-line">
              {{ section.title }}
            </h3>
          </div>
          <p class="text-sm text-low mt-6 leading-relaxed">{{ section.description }}</p>
        </router-link>
      </div>
    </section>

    <!-- Communication -->
    <section class="px-8 lg:px-16 pt-14 pb-6" data-reveal>
      <p class="text-xs text-dim uppercase tracking-[0.2em] font-mono mb-12">Communication</p>
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-y-px bg-surface-3">
        <router-link
          v-for="section in communication"
          :key="section.number"
          :to="section.to"
          class="group bg-page py-10 pr-10 lg:pr-16 flex gap-8"
        >
          <span class="text-xs font-mono text-dim tabular-nums pt-1.5 shrink-0">{{ section.number }}</span>
          <div>
            <h3 class="text-2xl font-medium text-high group-hover:underline underline-offset-4 decoration-line">
              {{ section.title }}
            </h3>
            <p class="text-base text-low mt-4 leading-relaxed max-w-md">{{ section.description }}</p>
          </div>
        </router-link>
      </div>
    </section>

    <!-- Design System -->
    <div class="border-t border-line mt-10"></div>
    <section class="px-8 lg:px-16 py-20" data-reveal>
      <p class="text-xs text-dim uppercase tracking-[0.2em] font-mono mb-12">Applied &mdash; Design System</p>
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-y-px bg-surface-3">
        <router-link
          v-for="item in designSystem"
          :key="item.title"
          :to="item.to"
          class="group bg-page p-8 flex flex-col justify-between min-h-52"
        >
          <div>
            <span class="text-xs font-mono text-dim tabular-nums">&mdash;</span>
            <h3 class="text-lg font-medium text-high mt-4 group-hover:underline underline-offset-4 decoration-line">
              {{ item.title }}
            </h3>
          </div>
          <p class="text-sm text-low mt-6 leading-relaxed">{{ item.description }}</p>
        </router-link>
      </div>
    </section>

    <!-- Colophon -->
    <div class="border-t border-line"></div>
    <section class="px-8 lg:px-16 py-16" data-reveal>
      <div class="grid grid-cols-2 sm:grid-cols-4 gap-y-8 gap-x-10">
        <div>
          <p class="text-xs text-dim uppercase tracking-[0.2em] font-mono">Primary Typeface</p>
          <p class="text-base text-high mt-3">Inter Variable</p>
        </div>
        <div>
          <p class="text-xs text-dim uppercase tracking-[0.2em] font-mono">Primary Accent</p>
          <p class="text-base text-high mt-3 font-mono">#1475FF</p>
        </div>
        <div>
          <p class="text-xs text-dim uppercase tracking-[0.2em] font-mono">Neutral Hue</p>
          <p class="text-base text-high mt-3">Slate (h=240°)</p>
        </div>
        <div>
          <p class="text-xs text-dim uppercase tracking-[0.2em] font-mono">Default Theme</p>
          <p class="text-base text-high mt-3">Dark</p>
        </div>
      </div>
    </section>
  </div>
</template>
