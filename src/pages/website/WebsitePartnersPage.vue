<script setup lang="ts">
import { ArrowRightIcon } from '@heroicons/vue/24/outline'

const partnerTiers = [
  {
    tier: 'Defense Partners',
    description: 'Government and military organizations deploying Auterion technology in operational theaters worldwide.',
    partners: [
      { name: 'U.S. Department of Defense', detail: '$50M Replicator program contract for autonomous strike systems' },
      { name: 'NATO Allied Forces', detail: 'Interoperability standard for multi-national drone operations' },
      { name: 'Ukraine Ministry of Defence', detail: 'Frontline deployment of GPS-denied autonomous navigation' },
      { name: 'Taiwan NCSIST', detail: 'Asymmetric defense swarm capability development' },
      { name: 'German Bundeswehr', detail: 'Next-generation reconnaissance and surveillance platforms' },
    ],
  },
  {
    tier: 'Industry Partners',
    description: 'UAS manufacturers and defense primes integrating Auterion technology into their platforms.',
    partners: [
      { name: 'Freefly Systems', detail: 'Alta X heavy-lift platform powered by AuterionOS' },
      { name: 'Watts Innovations', detail: 'Prism heavy-lift VTOL with Skynode integration' },
      { name: 'Quantum Systems', detail: 'Trinity F90+ fixed-wing for long-range ISR missions' },
      { name: 'Avy', detail: 'Aera VTOL for medical delivery and search-and-rescue' },
      { name: 'Wingtra', detail: 'WingtraOne survey drone for mapping and inspection' },
    ],
  },
  {
    tier: 'Technology Partners',
    description: 'Sensor, payload, and software companies extending the Auterion ecosystem.',
    partners: [
      { name: 'FLIR Systems', detail: 'Thermal imaging integration for ISR and search-and-rescue' },
      { name: 'Sony Semiconductor', detail: 'Edge AI vision sensors for onboard processing' },
      { name: 'Qualcomm', detail: 'Snapdragon Flight platform for AI compute acceleration' },
      { name: 'AWS', detail: 'Cloud fleet management and data analytics infrastructure' },
    ],
  },
]

const programBenefits = [
  {
    title: 'Technical Integration',
    description: 'Dedicated engineering support, reference designs, and early access to new APIs and capabilities.',
  },
  {
    title: 'Go-to-Market',
    description: 'Joint marketing, co-branded materials, and inclusion in the Auterion partner ecosystem directory.',
  },
  {
    title: 'Training and Certification',
    description: 'Technical training for your engineering team and certification for customer-facing support staff.',
  },
  {
    title: 'Priority Support',
    description: 'Direct access to Auterion engineering for issue resolution, feature requests, and roadmap input.',
  },
]

const stats = [
  { value: '50+', label: 'Partner organizations' },
  { value: '30+', label: 'Certified platforms' },
  { value: '15+', label: 'Countries represented' },
  { value: '1M+', label: 'Combined flight hours' },
]
</script>

<template>
  <!-- HERO -->
  <section class="mx-auto max-w-full px-6 lg:px-8 pt-32 pb-24 sm:pt-40 sm:pb-32 lg:pt-48 lg:pb-40">
    <p class="text-xs uppercase tracking-[0.2em] text-zinc-400 dark:text-zinc-500 mb-8">Partners</p>
    <h1 class="text-[clamp(2rem,0.77rem+5.26vw,5.5rem)] font-medium tracking-[-0.03em] leading-[1.06] text-zinc-900 dark:text-white max-w-4xl">
      Trusted by those who protect democracies.
    </h1>
    <div class="mt-12 lg:mt-16 lg:grid lg:grid-cols-12 lg:gap-8">
      <p class="lg:col-span-5 lg:col-start-7 text-lg text-zinc-500 dark:text-zinc-400 leading-relaxed">
        From the Pentagon to the frontlines of Ukraine, Auterion technology is deployed by organizations that demand mission-critical reliability.
      </p>
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

  <!-- PARTNER TIERS -->
  <section
    v-for="tier in partnerTiers"
    :key="tier.tier"
    class="border-t border-zinc-200 dark:border-zinc-800"
  >
    <div class="mx-auto max-w-full px-6 lg:px-8 py-24 lg:py-32">
      <div class="lg:grid lg:grid-cols-12 lg:gap-8 mb-16">
        <div class="lg:col-span-5">
          <p class="text-xs uppercase tracking-[0.2em] text-zinc-400 dark:text-zinc-500 mb-6">{{ tier.tier }}</p>
          <p class="text-base text-zinc-500 dark:text-zinc-400 leading-relaxed">{{ tier.description }}</p>
        </div>
      </div>
      <div class="divide-y divide-zinc-100 dark:divide-zinc-900">
        <div
          v-for="partner in tier.partners"
          :key="partner.name"
          class="py-6 lg:grid lg:grid-cols-12 lg:gap-8 group"
        >
          <h3 class="lg:col-span-4 text-base font-medium text-zinc-900 dark:text-white">{{ partner.name }}</h3>
          <p class="lg:col-span-7 lg:col-start-6 mt-2 lg:mt-0 text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">{{ partner.detail }}</p>
        </div>
      </div>
    </div>
  </section>

  <!-- PARTNER PROGRAM -->
  <section class="border-t border-zinc-200 dark:border-zinc-800">
    <div class="mx-auto max-w-full px-6 lg:px-8 py-24 lg:py-32">
      <div class="lg:grid lg:grid-cols-12 lg:gap-8 mb-20">
        <div class="lg:col-span-5">
          <p class="text-xs uppercase tracking-[0.2em] text-zinc-400 dark:text-zinc-500 mb-6">Partner Program</p>
          <h2 class="text-[clamp(1.5rem,1.1rem+1.69vw,2.625rem)] font-medium tracking-[-0.015em] leading-[1.12] text-zinc-900 dark:text-white">
            Build on the world's most deployed open drone platform.
          </h2>
        </div>
        <div class="lg:col-span-5 lg:col-start-7 mt-6 lg:mt-2">
          <p class="text-base text-zinc-500 dark:text-zinc-400 leading-relaxed">
            Join the ecosystem of manufacturers, integrators, and developers building the next generation of autonomous systems on Auterion.
          </p>
        </div>
      </div>
      <div class="grid gap-px bg-zinc-200 dark:bg-zinc-800 sm:grid-cols-2 lg:grid-cols-4">
        <div
          v-for="benefit in programBenefits"
          :key="benefit.title"
          class="bg-white dark:bg-zinc-950 p-8 lg:p-10"
        >
          <h3 class="text-base font-medium text-zinc-900 dark:text-white mb-4">{{ benefit.title }}</h3>
          <p class="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">{{ benefit.description }}</p>
        </div>
      </div>
    </div>
  </section>

  <!-- CTA -->
  <section class="border-t border-zinc-200 dark:border-zinc-800">
    <div class="mx-auto max-w-full px-6 lg:px-8 py-24 lg:py-32 text-center">
      <h2 class="text-[clamp(1.5rem,0.8rem+3vw,3.5rem)] font-medium tracking-[-0.02em] leading-[1.12] text-zinc-900 dark:text-white mb-6">
        Become a partner.
      </h2>
      <p class="text-base text-zinc-500 dark:text-zinc-400 leading-relaxed max-w-lg mx-auto mb-10">
        Whether you build platforms, integrate payloads, or develop applications, there is a place for you in the Auterion ecosystem.
      </p>
      <RouterLink
        to="/gallery/website/company"
        class="inline-flex items-center gap-2 text-sm font-medium text-zinc-900 dark:text-white border-b border-zinc-900 dark:border-white pb-0.5 hover:border-zinc-400 dark:hover:border-zinc-500 transition-colors duration-200"
      >
        Get in touch
        <ArrowRightIcon class="h-3.5 w-3.5" />
      </RouterLink>
    </div>
  </section>
</template>
