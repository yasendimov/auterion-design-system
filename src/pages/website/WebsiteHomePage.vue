<script setup lang="ts">
import { ArrowRightIcon, ArrowUpRightIcon } from '@heroicons/vue/24/outline'

const stats = [
  { value: '33,000', label: 'Strike kits contracted' },
  { value: '50+', label: 'Countries deployed' },
  { value: '1M+', label: 'Flight hours logged' },
  { value: '#1', label: 'Open-source autopilot' },
]

const partners = [
  'U.S. Department of Defense',
  'NATO Allied Forces',
  'Ukraine Ministry of Defence',
  'Taiwan NCSIST',
  'German Bundeswehr',
  'Major UAS Manufacturers',
]

const products = [
  {
    name: 'Skynode S',
    tag: 'Autopilot',
    description: 'AI-enabled autopilot that turns any drone into an autonomous node. Resilient against jamming, priced like an Android phone.',
    specs: ['Quad-core ARM processor', 'Integrated IMU and GPS', 'AI accelerator', 'Encrypted datalink'],
  },
  {
    name: 'AuterionOS',
    tag: 'Platform',
    description: 'The operating system for swarms. One common architecture that integrates fleets from multiple manufacturers into a single, interoperable fabric.',
    specs: ['Linux-based RTOS', 'PX4 flight stack', 'Container runtime', 'OTA updates'],
  },
  {
    name: 'Autonomy Suite',
    tag: 'Software',
    description: 'Edge computing and AI applications deployed directly on the drone, enabling target tracking, BVLOS, and mission completion without communications.',
    specs: ['Computer vision', 'Object tracking', 'Path planning', 'Sensor fusion'],
  },
]

const capabilities = [
  {
    number: '01',
    title: 'Swarm Orchestration',
    description: 'One operator, many drones. Scale from a handful to hundreds with coordinated, AI-driven autonomy that adapts in real time.',
  },
  {
    number: '02',
    title: 'Open Architecture',
    description: 'Integrate multiple manufacturers, payloads, and ground stations into a single interoperable system. No vendor lock-in.',
  },
  {
    number: '03',
    title: 'Edge AI',
    description: 'Deploy AI models and applications directly on the vehicle. Compute at the edge, decide at the edge, even without connectivity.',
  },
  {
    number: '04',
    title: 'Battle-Proven Resilience',
    description: 'Lock onto targets and complete missions even when GPS and video links are jammed. Proven in the most demanding environments.',
  },
  {
    number: '05',
    title: 'BVLOS Operations',
    description: 'Beyond-visual-line-of-sight capability with autonomous navigation, obstacle avoidance, and return-to-home failsafes.',
  },
  {
    number: '06',
    title: 'Rapid Deployment',
    description: 'From unboxing to airborne in minutes. Intuitive tap-to-target interface reduces training from weeks to hours.',
  },
]

const verticals = [
  'Defense and Security',
  'Critical Infrastructure',
  'Energy and Utilities',
  'Agriculture',
  'Public Safety',
  'Logistics',
  'Construction and Mining',
  'Maritime',
  'Environmental Monitoring',
  'Government and Policy',
  'Developer Ecosystem',
  'Allied Nations',
]
</script>

<template>
  <!-- HERO -->
  <section class="mx-auto max-w-full px-6 lg:px-8 pt-32 pb-24 sm:pt-40 sm:pb-32 lg:pt-48 lg:pb-40">
    <h1 class="text-[clamp(2rem,0.77rem+5.26vw,5.5rem)] font-medium tracking-[-0.03em] leading-[1.06] text-zinc-900 dark:text-white max-w-5xl">
      We build the platform for autonomous mass.
    </h1>
    <div class="mt-12 lg:mt-16 lg:grid lg:grid-cols-12 lg:gap-8">
      <p class="lg:col-span-5 lg:col-start-7 text-lg text-zinc-500 dark:text-zinc-400 leading-relaxed">
        Open architecture that transforms individual drones into coordinated swarms across air, land, and sea. Protecting democracies with scalable, interoperable autonomy.
      </p>
    </div>
    <div class="mt-12 flex items-center gap-x-8">
      <RouterLink to="/gallery/website/company" class="text-sm font-medium text-zinc-900 dark:text-white border-b border-zinc-900 dark:border-white pb-0.5 hover:border-zinc-400 dark:hover:border-zinc-500 transition-colors duration-200">Request a demo</RouterLink>
      <RouterLink to="/gallery/website/capabilities" class="group inline-flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors duration-200">
        Explore capabilities
        <ArrowRightIcon class="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
      </RouterLink>
    </div>
  </section>

  <!-- Hero image — full bleed -->
  <section class="pb-16 lg:pb-24">
    <div class="relative h-[70vh] lg:h-[85vh] w-full overflow-hidden bg-zinc-100 dark:bg-zinc-900/80 border-y border-zinc-200 dark:border-zinc-800">
      <div class="absolute inset-0 flex items-center justify-center">
        <div class="text-center">
          <svg class="mx-auto h-10 w-10 text-zinc-300 dark:text-zinc-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="0.75" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0 0 22.5 18.75V5.25A2.25 2.25 0 0 0 20.25 3H3.75A2.25 2.25 0 0 0 1.5 5.25v13.5A2.25 2.25 0 0 0 3.75 21Z" />
          </svg>
          <p class="mt-3 text-xs uppercase tracking-[0.2em] text-zinc-400 dark:text-zinc-500">Hero — drone swarm formation</p>
        </div>
      </div>
    </div>
  </section>

  <!-- STATS -->
  <section class="border-t border-zinc-200 dark:border-zinc-800">
    <div class="mx-auto max-w-full px-6 lg:px-8 py-16 lg:py-20">
      <div class="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
        <div v-for="stat in stats" :key="stat.label">
          <p class="text-[clamp(2rem,1.65rem+1.5vw,3rem)] font-medium tracking-[-0.025em] leading-[1.1] text-zinc-900 dark:text-white">{{ stat.value }}</p>
          <p class="mt-2 text-sm text-zinc-500 dark:text-zinc-500">{{ stat.label }}</p>
        </div>
      </div>
    </div>
  </section>

  <!-- PARTNERS -->
  <section class="border-t border-zinc-200 dark:border-zinc-800">
    <div class="mx-auto max-w-full px-6 lg:px-8 py-16 lg:py-20">
      <p class="text-xs uppercase tracking-[0.2em] text-zinc-400 dark:text-zinc-500 mb-10">Trusted by</p>
      <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-y-8 gap-x-12">
        <span v-for="partner in partners" :key="partner" class="text-sm text-zinc-400 dark:text-zinc-500">{{ partner }}</span>
      </div>
    </div>
  </section>

  <!-- PRODUCT -->
  <section class="border-t border-zinc-200 dark:border-zinc-800">
    <div class="mx-auto max-w-full px-6 lg:px-8 py-24 lg:py-32">
      <div class="lg:grid lg:grid-cols-12 lg:gap-8 mb-20">
        <h2 class="lg:col-span-7 text-[clamp(1.5rem,0.8rem+3vw,3.5rem)] font-medium tracking-[-0.02em] leading-[1.12] text-zinc-900 dark:text-white">
          Everything you need to deploy autonomous fleets
        </h2>
        <p class="lg:col-span-4 lg:col-start-9 mt-6 lg:mt-2 text-base text-zinc-500 dark:text-zinc-400 leading-relaxed">
          From silicon to software, Auterion provides the complete stack, purpose-built for swarm operations at scale.
        </p>
      </div>
      <div class="grid gap-px bg-zinc-200 dark:bg-zinc-800 lg:grid-cols-3">
        <div
          v-for="product in products"
          :key="product.name"
          class="bg-white dark:bg-zinc-950 p-8 lg:p-10 group"
        >
          <p class="text-xs uppercase tracking-[0.2em] text-zinc-400 dark:text-zinc-500 mb-6">{{ product.tag }}</p>
          <h3 class="text-[clamp(1.125rem,1.08rem+0.19vw,1.25rem)] font-medium tracking-[-0.01em] leading-[1.2] text-zinc-900 dark:text-white mb-4">{{ product.name }}</h3>
          <p class="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed mb-8">{{ product.description }}</p>
          <ul class="space-y-2.5 mb-8">
            <li v-for="spec in product.specs" :key="spec" class="flex items-center gap-3 text-xs text-zinc-500 dark:text-zinc-500">
              <span class="h-px w-3 bg-zinc-300 dark:bg-zinc-700 shrink-0"></span>
              {{ spec }}
            </li>
          </ul>
          <a href="#" class="inline-flex items-center gap-1.5 text-sm text-zinc-900 dark:text-white group-hover:underline underline-offset-4 transition-all duration-200">
            Learn more
            <ArrowUpRightIcon class="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </div>
  </section>

  <!-- CAPABILITIES -->
  <section class="border-t border-zinc-200 dark:border-zinc-800">
    <div class="mx-auto max-w-full px-6 lg:px-8 py-24 lg:py-32">
      <div class="mb-20">
        <p class="text-xs uppercase tracking-[0.2em] text-zinc-400 dark:text-zinc-500 mb-6">Capabilities</p>
        <h2 class="text-[clamp(1.5rem,0.8rem+3vw,3.5rem)] font-medium tracking-[-0.02em] leading-[1.12] text-zinc-900 dark:text-white max-w-3xl">
          Built for the demands of autonomous operations
        </h2>
      </div>
      <div class="grid gap-px bg-zinc-200 dark:bg-zinc-800 sm:grid-cols-2 lg:grid-cols-3">
        <div
          v-for="cap in capabilities"
          :key="cap.number"
          class="bg-white dark:bg-zinc-950 p-8 lg:p-10"
        >
          <p class="text-xs font-mono text-zinc-300 dark:text-zinc-600 mb-6">{{ cap.number }}</p>
          <h3 class="text-base font-medium text-zinc-900 dark:text-white mb-3">{{ cap.title }}</h3>
          <p class="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">{{ cap.description }}</p>
        </div>
      </div>
    </div>
  </section>

  <!-- ABOUT -->
  <section class="border-t border-zinc-200 dark:border-zinc-800">
    <div class="mx-auto max-w-full px-6 lg:px-8 py-24 lg:py-32">
      <div class="lg:grid lg:grid-cols-12 lg:gap-8">
        <div class="lg:col-span-5">
          <p class="text-xs uppercase tracking-[0.2em] text-zinc-400 dark:text-zinc-500 mb-6">About</p>
          <h2 class="text-[clamp(1.5rem,1.1rem+1.69vw,2.625rem)] font-medium tracking-[-0.015em] leading-[1.12] text-zinc-900 dark:text-white">
            We are engineers and mission partners.
          </h2>
        </div>
        <div class="lg:col-span-6 lg:col-start-7 mt-10 lg:mt-0">
          <div class="space-y-6 text-base text-zinc-500 dark:text-zinc-400 leading-relaxed">
            <p>
              Auterion integrates <span class="text-zinc-900 dark:text-white">autonomy, open architecture, and battle-proven resilience</span> to deliver measurable impact for defense and commercial operations.
            </p>
            <p>
              Our roots are in open-source development. Making PX4 freely available created the largest developer community for autonomous robots in the world. Today we turn that foundation into products that democracies can trust.
            </p>
            <p>
              We feel a moral obligation to support liberal democracies. Technology companies should support armed forces protecting freedom. Our systems ensure that human operators always remain in control.
            </p>
          </div>
        </div>
      </div>

      <!-- Fact grid -->
      <div class="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-px bg-zinc-200 dark:bg-zinc-800">
        <div class="bg-white dark:bg-zinc-950 p-8">
          <p class="text-[clamp(1.25rem,1.16rem+0.38vw,1.5rem)] font-medium tracking-[-0.01em] leading-[1.15] text-zinc-900 dark:text-white">2017</p>
          <p class="text-sm text-zinc-500 dark:text-zinc-500 mt-2">Founded in Zurich</p>
        </div>
        <div class="bg-white dark:bg-zinc-950 p-8">
          <p class="text-[clamp(1.25rem,1.16rem+0.38vw,1.5rem)] font-medium tracking-[-0.01em] leading-[1.15] text-zinc-900 dark:text-white">350+</p>
          <p class="text-sm text-zinc-500 dark:text-zinc-500 mt-2">Team members</p>
        </div>
        <div class="bg-white dark:bg-zinc-950 p-8">
          <p class="text-[clamp(1.25rem,1.16rem+0.38vw,1.5rem)] font-medium tracking-[-0.01em] leading-[1.15] text-zinc-900 dark:text-white">PX4</p>
          <p class="text-sm text-zinc-500 dark:text-zinc-500 mt-2">Open-source heritage</p>
        </div>
        <div class="bg-white dark:bg-zinc-950 p-8">
          <p class="text-[clamp(1.25rem,1.16rem+0.38vw,1.5rem)] font-medium tracking-[-0.01em] leading-[1.15] text-zinc-900 dark:text-white">$50M</p>
          <p class="text-sm text-zinc-500 dark:text-zinc-500 mt-2">Pentagon contract</p>
        </div>
      </div>
    </div>
  </section>

  <!-- VERTICALS -->
  <section class="border-t border-zinc-200 dark:border-zinc-800">
    <div class="mx-auto max-w-full px-6 lg:px-8 py-24 lg:py-32">
      <div class="lg:grid lg:grid-cols-12 lg:gap-8 mb-16">
        <div class="lg:col-span-5">
          <p class="text-xs uppercase tracking-[0.2em] text-zinc-400 dark:text-zinc-500 mb-6">Industries</p>
          <h2 class="text-[clamp(1.5rem,1.1rem+1.69vw,2.625rem)] font-medium tracking-[-0.015em] leading-[1.12] text-zinc-900 dark:text-white">
            Autonomous systems for every domain
          </h2>
        </div>
      </div>
      <div class="grid sm:grid-cols-2 lg:grid-cols-3">
        <a
          v-for="vertical in verticals"
          :key="vertical"
          href="#"
          class="group flex items-center justify-between py-5 border-t border-zinc-100 dark:border-zinc-900 text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors duration-200"
        >
          <span class="text-sm">{{ vertical }}</span>
          <ArrowRightIcon class="h-3.5 w-3.5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
        </a>
      </div>
    </div>
  </section>

  <!-- CAREERS -->
  <section>
    <div class="bg-zinc-900 dark:bg-white" data-nav-dark>
      <div class="mx-auto max-w-full px-6 lg:px-8 py-24 lg:py-32 lg:grid lg:grid-cols-12 lg:gap-8">
        <div class="lg:col-span-7">
          <h2 class="text-[clamp(1.5rem,0.8rem+3vw,3.5rem)] font-medium tracking-[-0.02em] leading-[1.12] text-white dark:text-zinc-900">
            Join the mission.
          </h2>
          <p class="mt-6 text-base text-zinc-400 dark:text-zinc-500 leading-relaxed max-w-lg">
            We are building the future of autonomous systems. If you want to work on technology that matters, for defense, for democracies, for the world, we would love to meet you.
          </p>
          <RouterLink
            to="/gallery/website/careers"
            class="mt-10 inline-flex items-center gap-2 text-sm font-medium text-white dark:text-zinc-900 border-b border-white dark:border-zinc-900 pb-0.5 hover:border-zinc-500 transition-colors duration-200"
          >
            View open positions
            <ArrowRightIcon class="h-3.5 w-3.5" />
          </RouterLink>
        </div>
      </div>
    </div>
  </section>
</template>
