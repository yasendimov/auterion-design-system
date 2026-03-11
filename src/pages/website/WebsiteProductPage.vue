<script setup lang="ts">
import { ArrowUpRightIcon, ArrowRightIcon } from '@heroicons/vue/24/outline'

const products = [
  {
    name: 'Skynode S',
    tag: 'Autopilot',
    description: 'AI-enabled autopilot that turns any drone into an autonomous node. Resilient against jamming, priced like an Android phone.',
    specs: ['Quad-core ARM processor', 'Integrated IMU and GPS', 'AI accelerator', 'Encrypted datalink'],
    details: 'Skynode S is the brain of every Auterion-powered vehicle. A ruggedized compute module running AuterionOS, it integrates flight control, AI inference, and encrypted communications into a single board smaller than a smartphone. Designed for mass production at commercial price points, it democratizes access to military-grade autonomy.',
  },
  {
    name: 'AuterionOS',
    tag: 'Platform',
    description: 'The operating system for swarms. One common architecture that integrates fleets from multiple manufacturers into a single, interoperable fabric.',
    specs: ['Linux-based RTOS', 'PX4 flight stack', 'Container runtime', 'OTA updates'],
    details: 'Built on top of the PX4 open-source autopilot, AuterionOS provides a containerized runtime that isolates mission applications from flight-critical software. Over-the-air updates, fleet-wide telemetry, and a standardized API layer mean operators manage diverse fleets through a single pane of glass.',
  },
  {
    name: 'Autonomy Suite',
    tag: 'Software',
    description: 'Edge computing and AI applications deployed directly on the drone, enabling target tracking, BVLOS, and mission completion without communications.',
    specs: ['Computer vision', 'Object tracking', 'Path planning', 'Sensor fusion'],
    details: 'The Autonomy Suite runs onboard, not in the cloud. Computer vision models detect and classify targets in real time. Path planning algorithms navigate around obstacles and no-fly zones. When communications are denied, the vehicle continues its mission autonomously and reports back when links are restored.',
  },
]

const integrations = [
  {
    name: 'Ground Control',
    description: 'Unified ground station software for planning, executing, and monitoring multi-vehicle missions across heterogeneous fleets.',
    features: ['Mission planning', 'Real-time telemetry', 'Video streaming', 'Geofencing'],
  },
  {
    name: 'Fleet Manager',
    description: 'Cloud-based fleet management for tracking maintenance schedules, firmware versions, flight logs, and compliance across your entire fleet.',
    features: ['Maintenance tracking', 'Firmware management', 'Flight analytics', 'Compliance reporting'],
  },
  {
    name: 'Developer SDK',
    description: 'Build custom autonomy applications with our SDK. Access vehicle sensors, actuators, and AI accelerators through a clean, documented API.',
    features: ['REST and gRPC APIs', 'Python and C++ SDKs', 'Simulation environment', 'CI/CD pipelines'],
  },
]

const comparison = [
  { feature: 'Open-source flight stack', auterion: true, legacy: false },
  { feature: 'Multi-vendor interoperability', auterion: true, legacy: false },
  { feature: 'Edge AI processing', auterion: true, legacy: false },
  { feature: 'Over-the-air updates', auterion: true, legacy: false },
  { feature: 'Container-based app isolation', auterion: true, legacy: false },
  { feature: 'GPS-denied navigation', auterion: true, legacy: false },
  { feature: 'Swarm coordination', auterion: true, legacy: false },
  { feature: 'Commercial pricing', auterion: true, legacy: false },
]
</script>

<template>
  <!-- HERO -->
  <section class="mx-auto max-w-full px-6 lg:px-8 pt-32 pb-24 sm:pt-40 sm:pb-32 lg:pt-48 lg:pb-40">
    <p class="text-xs uppercase tracking-[0.2em] text-dim mb-8">Product</p>
    <h1 class="text-[clamp(2rem,0.77rem+5.26vw,5.5rem)] font-medium tracking-[-0.03em] leading-[1.06] text-high max-w-4xl">
      The complete stack for autonomous operations.
    </h1>
    <div class="mt-12 lg:mt-16 lg:grid lg:grid-cols-12 lg:gap-8">
      <p class="lg:col-span-5 lg:col-start-7 text-lg text-low leading-relaxed">
        From silicon to software, Auterion delivers everything you need to deploy, manage, and scale autonomous fleets. One architecture, any vehicle, any mission.
      </p>
    </div>
  </section>

  <!-- Product overview image -->
  <section class="pb-16 lg:pb-24">
    <div class="relative h-[60vh] lg:h-[75vh] w-full overflow-hidden bg-surface-1  border-y border-line">
      <div class="absolute inset-0 flex items-center justify-center">
        <div class="text-center">
          <svg class="mx-auto h-10 w-10 text-dim" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="0.75" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0 0 22.5 18.75V5.25A2.25 2.25 0 0 0 20.25 3H3.75A2.25 2.25 0 0 0 1.5 5.25v13.5A2.25 2.25 0 0 0 3.75 21Z" />
          </svg>
          <p class="mt-3 text-xs uppercase tracking-[0.2em] text-dim">Product ecosystem overview</p>
        </div>
      </div>
    </div>
  </section>

  <!-- PRODUCT CARDS -->
  <section class="border-t border-line">
    <div class="mx-auto max-w-full px-6 lg:px-8 py-24 lg:py-32">
      <div class="space-y-0">
        <div
          v-for="product in products"
          :key="product.name"
          class="border-t border-line first:border-t-0 py-16 lg:py-24"
        >
          <div class="lg:grid lg:grid-cols-12 lg:gap-16">
            <div class="lg:col-span-5">
              <p class="text-xs uppercase tracking-[0.2em] text-dim mb-6">{{ product.tag }}</p>
              <h2 class="text-[clamp(1.5rem,1.1rem+1.69vw,2.625rem)] font-medium tracking-[-0.015em] leading-[1.12] text-high mb-6">
                {{ product.name }}
              </h2>
              <p class="text-base text-low leading-relaxed mb-8">
                {{ product.description }}
              </p>
              <ul class="space-y-3 mb-10">
                <li v-for="spec in product.specs" :key="spec" class="flex items-center gap-3 text-sm text-low">
                  <span class="h-px w-4 bg-surface-2  shrink-0"></span>
                  {{ spec }}
                </li>
              </ul>
              <a href="#" class="inline-flex items-center gap-1.5 text-sm text-high hover:underline underline-offset-4 transition-all duration-200">
                Technical specifications
                <ArrowUpRightIcon class="h-3.5 w-3.5" />
              </a>
            </div>
            <div class="lg:col-span-6 lg:col-start-7 mt-12 lg:mt-0">
              <div class="relative aspect-4/3 w-full overflow-hidden bg-surface-1  border border-line">
                <div class="absolute inset-0 flex items-center justify-center">
                  <div class="text-center">
                    <svg class="mx-auto h-10 w-10 text-dim" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="0.75" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0 0 22.5 18.75V5.25A2.25 2.25 0 0 0 20.25 3H3.75A2.25 2.25 0 0 0 1.5 5.25v13.5A2.25 2.25 0 0 0 3.75 21Z" />
                    </svg>
                    <p class="mt-3 text-xs uppercase tracking-[0.2em] text-dim">{{ product.name }} — product photo</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- INTEGRATIONS -->
  <section class="border-t border-line">
    <div class="mx-auto max-w-full px-6 lg:px-8 py-24 lg:py-32">
      <div class="mb-20">
        <p class="text-xs uppercase tracking-[0.2em] text-dim mb-6">Ecosystem</p>
        <h2 class="text-[clamp(1.5rem,0.8rem+3vw,3.5rem)] font-medium tracking-[-0.02em] leading-[1.12] text-high max-w-3xl">
          Tools that complete the picture
        </h2>
      </div>
      <div class="grid gap-px bg-line lg:grid-cols-3">
        <div
          v-for="item in integrations"
          :key="item.name"
          class="bg-page p-8 lg:p-10 group"
        >
          <h3 class="text-[clamp(1.125rem,1.08rem+0.19vw,1.25rem)] font-medium tracking-[-0.01em] leading-[1.2] text-high mb-4">{{ item.name }}</h3>
          <p class="text-sm text-low leading-relaxed mb-8">{{ item.description }}</p>
          <ul class="space-y-2.5">
            <li v-for="feature in item.features" :key="feature" class="flex items-center gap-3 text-xs text-low">
              <span class="h-px w-3 bg-surface-2  shrink-0"></span>
              {{ feature }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <!-- COMPARISON -->
  <section class="border-t border-line">
    <div class="mx-auto max-w-full px-6 lg:px-8 py-24 lg:py-32">
      <div class="lg:grid lg:grid-cols-12 lg:gap-8 mb-16">
        <div class="lg:col-span-5">
          <p class="text-xs uppercase tracking-[0.2em] text-dim mb-6">Why Auterion</p>
          <h2 class="text-[clamp(1.5rem,1.1rem+1.69vw,2.625rem)] font-medium tracking-[-0.015em] leading-[1.12] text-high">
            Open beats proprietary.
          </h2>
        </div>
        <div class="lg:col-span-5 lg:col-start-7 mt-6 lg:mt-2">
          <p class="text-base text-low leading-relaxed">
            Legacy drone systems lock you into a single vendor. Auterion gives you choice, interoperability, and the largest open-source ecosystem in autonomous robotics.
          </p>
        </div>
      </div>
      <div class="border border-line">
        <div class="grid grid-cols-3 border-b border-line bg-page-subtle/50">
          <div class="p-4 lg:p-6 text-xs uppercase tracking-[0.15em] text-dim">Feature</div>
          <div class="p-4 lg:p-6 text-xs uppercase tracking-[0.15em] text-high text-center">Auterion</div>
          <div class="p-4 lg:p-6 text-xs uppercase tracking-[0.15em] text-dim text-center">Legacy</div>
        </div>
        <div
          v-for="row in comparison"
          :key="row.feature"
          class="grid grid-cols-3 border-b border-line last:border-b-0"
        >
          <div class="p-4 lg:p-6 text-sm text-low">{{ row.feature }}</div>
          <div class="p-4 lg:p-6 text-center text-sm text-high">
            <span v-if="row.auterion" class="inline-block w-4 h-px bg-surface-3 dark:bg-white"></span>
            <span v-else class="text-dim">&mdash;</span>
          </div>
          <div class="p-4 lg:p-6 text-center text-sm">
            <span v-if="row.legacy" class="inline-block w-4 h-px bg-surface-3 dark:bg-white"></span>
            <span v-else class="text-dim">&mdash;</span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- CTA -->
  <section class="border-t border-line">
    <div class="mx-auto max-w-full px-6 lg:px-8 py-24 lg:py-32 text-center">
      <h2 class="text-[clamp(1.5rem,0.8rem+3vw,3.5rem)] font-medium tracking-[-0.02em] leading-[1.12] text-high mb-6">
        Ready to deploy?
      </h2>
      <p class="text-base text-low leading-relaxed max-w-lg mx-auto mb-10">
        Talk to our team about integrating Auterion into your fleet operations.
      </p>
      <RouterLink
        to="/gallery/website/company"
        class="inline-flex items-center gap-2 text-sm font-medium text-high border-b border-line-active pb-0.5 hover:border-line-hover transition-colors duration-200"
      >
        Contact sales
        <ArrowRightIcon class="h-3.5 w-3.5" />
      </RouterLink>
    </div>
  </section>
</template>
