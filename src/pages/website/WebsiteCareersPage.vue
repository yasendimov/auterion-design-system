<script setup lang="ts">
import { ArrowRightIcon, ArrowUpRightIcon } from '@heroicons/vue/24/outline'

const values = [
  {
    title: 'Mission First',
    description: 'We build technology for people who protect freedom. Every feature, every decision, every line of code serves that mission.',
  },
  {
    title: 'Open by Default',
    description: 'We created PX4, the most widely adopted open-source autopilot. Openness is not a strategy, it is who we are.',
  },
  {
    title: 'Move with Urgency',
    description: 'The threats our customers face do not wait. We ship fast, iterate faster, and hold ourselves to frontline timelines.',
  },
  {
    title: 'Own the Outcome',
    description: 'Small teams, big responsibility. Everyone at Auterion has direct impact on products used in the most demanding environments on earth.',
  },
]

const departments = [
  {
    name: 'Engineering',
    roles: [
      { title: 'Senior Embedded Systems Engineer', location: 'Zurich', type: 'Full-time' },
      { title: 'Computer Vision / ML Engineer', location: 'Zurich or Remote', type: 'Full-time' },
      { title: 'Flight Control Systems Engineer', location: 'Zurich', type: 'Full-time' },
      { title: 'Platform Software Engineer (Linux)', location: 'Zurich or Remote', type: 'Full-time' },
      { title: 'Senior Frontend Engineer', location: 'Zurich or Remote', type: 'Full-time' },
      { title: 'Robotics Simulation Engineer', location: 'Zurich', type: 'Full-time' },
    ],
  },
  {
    name: 'Product',
    roles: [
      { title: 'Technical Product Manager, Autonomy', location: 'Arlington or Zurich', type: 'Full-time' },
      { title: 'Product Designer', location: 'Zurich or Remote', type: 'Full-time' },
      { title: 'Developer Advocate', location: 'Remote', type: 'Full-time' },
    ],
  },
  {
    name: 'Operations',
    roles: [
      { title: 'Field Application Engineer', location: 'Arlington', type: 'Full-time' },
      { title: 'Supply Chain Manager', location: 'Zurich', type: 'Full-time' },
      { title: 'Flight Test Pilot / UAS Operator', location: 'Arlington', type: 'Full-time' },
    ],
  },
  {
    name: 'Business',
    roles: [
      { title: 'Defense Programs Director', location: 'Arlington', type: 'Full-time' },
      { title: 'Partner Solutions Architect', location: 'Arlington or Remote', type: 'Full-time' },
      { title: 'Government Relations Manager', location: 'Arlington', type: 'Full-time' },
    ],
  },
]

const benefits = [
  'Competitive salary and equity',
  'Flexible remote and hybrid work',
  'Annual learning and conference budget',
  'Home office and hardware stipend',
  'Generous PTO and local holidays',
  'Relocation support to Zurich or Arlington',
  'Regular team offsites and flight demos',
  'Health, dental, and vision coverage',
]

const locations = [
  {
    city: 'Zurich',
    country: 'Switzerland',
    description: 'Our engineering headquarters. Home to the teams building Skynode, AuterionOS, and the Autonomy Suite. Steps from ETH Zurich and the Swiss robotics ecosystem.',
  },
  {
    city: 'Arlington',
    country: 'Virginia, USA',
    description: 'Our defense and government operations hub. Close to the Pentagon, DARPA, and the defense innovation community. Where field engineering meets policy.',
  },
  {
    city: 'Kyiv',
    country: 'Ukraine',
    description: 'Our frontline integration office. Engineers working directly with operators to harden systems for the most demanding combat environments.',
  },
]
</script>

<template>
  <!-- HERO -->
  <section>
    <div class="bg-zinc-900 dark:bg-white" data-nav-dark>
      <div class="mx-auto max-w-full px-6 lg:px-8 pt-32 pb-24 sm:pt-40 sm:pb-32 lg:pt-48 lg:pb-40">
        <h1 class="text-[clamp(2rem,0.77rem+5.26vw,5.5rem)] font-medium tracking-[-0.03em] leading-[1.06] text-white dark:text-zinc-900 max-w-4xl">
          Build technology that protects freedom.
        </h1>
        <div class="mt-12 lg:mt-16 lg:grid lg:grid-cols-12 lg:gap-8">
          <p class="lg:col-span-5 lg:col-start-7 text-lg text-zinc-400 dark:text-zinc-500 leading-relaxed">
            We are engineers, operators, and mission partners building the autonomous systems that democracies need. If you want your work to matter, you belong here.
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- Team image -->
  <section class="pb-16 lg:pb-24 px-6 lg:px-8">
    <div class="relative aspect-video w-full overflow-hidden bg-zinc-100 dark:bg-zinc-900/80 border border-zinc-200 dark:border-zinc-800">
      <div class="absolute inset-0 flex items-center justify-center">
        <div class="text-center">
          <svg class="mx-auto h-10 w-10 text-zinc-300 dark:text-zinc-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="0.75" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0 0 22.5 18.75V5.25A2.25 2.25 0 0 0 20.25 3H3.75A2.25 2.25 0 0 0 1.5 5.25v13.5A2.25 2.25 0 0 0 3.75 21Z" />
          </svg>
          <p class="mt-3 text-xs uppercase tracking-[0.2em] text-zinc-400 dark:text-zinc-500">Team photo — office or offsite</p>
        </div>
      </div>
    </div>
  </section>

  <!-- VALUES -->
  <section class="border-t border-zinc-200 dark:border-zinc-800">
    <div class="mx-auto max-w-full px-6 lg:px-8 py-24 lg:py-32">
      <div class="mb-20">
        <p class="text-xs uppercase tracking-[0.2em] text-zinc-400 dark:text-zinc-500 mb-6">Our Values</p>
        <h2 class="text-[clamp(1.5rem,0.8rem+3vw,3.5rem)] font-medium tracking-[-0.02em] leading-[1.12] text-zinc-900 dark:text-white max-w-3xl">
          What we believe
        </h2>
      </div>
      <div class="grid gap-px bg-zinc-200 dark:bg-zinc-800 sm:grid-cols-2 lg:grid-cols-4">
        <div
          v-for="value in values"
          :key="value.title"
          class="bg-white dark:bg-zinc-950 p-8 lg:p-10"
        >
          <h3 class="text-base font-medium text-zinc-900 dark:text-white mb-4">{{ value.title }}</h3>
          <p class="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">{{ value.description }}</p>
        </div>
      </div>
    </div>
  </section>

  <!-- OPEN POSITIONS -->
  <section class="border-t border-zinc-200 dark:border-zinc-800">
    <div class="mx-auto max-w-full px-6 lg:px-8 py-24 lg:py-32">
      <div class="lg:grid lg:grid-cols-12 lg:gap-8 mb-20">
        <div class="lg:col-span-5">
          <p class="text-xs uppercase tracking-[0.2em] text-zinc-400 dark:text-zinc-500 mb-6">Open Positions</p>
          <h2 class="text-[clamp(1.5rem,1.1rem+1.69vw,2.625rem)] font-medium tracking-[-0.015em] leading-[1.12] text-zinc-900 dark:text-white">
            Find your role.
          </h2>
        </div>
        <div class="lg:col-span-5 lg:col-start-7 mt-6 lg:mt-2">
          <p class="text-base text-zinc-500 dark:text-zinc-400 leading-relaxed">
            We are always looking for exceptional people. If you do not see a perfect fit, reach out anyway. We hire for talent and drive.
          </p>
        </div>
      </div>

      <div v-for="dept in departments" :key="dept.name" class="mb-16 last:mb-0">
        <h3 class="text-xs uppercase tracking-[0.2em] text-zinc-400 dark:text-zinc-500 mb-6 pb-4 border-b border-zinc-200 dark:border-zinc-800">{{ dept.name }}</h3>
        <div class="divide-y divide-zinc-100 dark:divide-zinc-900">
          <a
            v-for="role in dept.roles"
            :key="role.title"
            href="#"
            class="group flex flex-col sm:flex-row sm:items-center justify-between py-5 -mx-4 px-4 transition-colors duration-200"
          >
            <div class="flex items-center gap-4">
              <span class="text-sm font-medium text-zinc-900 dark:text-white group-hover:underline underline-offset-4">{{ role.title }}</span>
            </div>
            <div class="flex items-center gap-6 mt-2 sm:mt-0">
              <span class="text-xs text-zinc-400 dark:text-zinc-500">{{ role.location }}</span>
              <span class="text-xs text-zinc-300 dark:text-zinc-600">{{ role.type }}</span>
              <ArrowUpRightIcon class="h-3.5 w-3.5 text-zinc-300 dark:text-zinc-600 group-hover:text-zinc-900 dark:group-hover:text-white transition-colors duration-200" />
            </div>
          </a>
        </div>
      </div>
    </div>
  </section>

  <!-- BENEFITS -->
  <section class="border-t border-zinc-200 dark:border-zinc-800">
    <div class="mx-auto max-w-full px-6 lg:px-8 py-24 lg:py-32">
      <div class="lg:grid lg:grid-cols-12 lg:gap-8">
        <div class="lg:col-span-5">
          <p class="text-xs uppercase tracking-[0.2em] text-zinc-400 dark:text-zinc-500 mb-6">Benefits</p>
          <h2 class="text-[clamp(1.5rem,1.1rem+1.69vw,2.625rem)] font-medium tracking-[-0.015em] leading-[1.12] text-zinc-900 dark:text-white">
            We take care of our people.
          </h2>
        </div>
        <div class="lg:col-span-6 lg:col-start-7 mt-10 lg:mt-0">
          <div class="grid sm:grid-cols-2 gap-y-4 gap-x-12">
            <div v-for="benefit in benefits" :key="benefit" class="flex items-center gap-3 py-3 border-b border-zinc-100 dark:border-zinc-900">
              <span class="h-px w-4 bg-zinc-300 dark:bg-zinc-700 shrink-0"></span>
              <span class="text-sm text-zinc-500 dark:text-zinc-400">{{ benefit }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- LOCATIONS -->
  <section class="border-t border-zinc-200 dark:border-zinc-800">
    <div class="mx-auto max-w-full px-6 lg:px-8 py-24 lg:py-32">
      <div class="mb-20">
        <p class="text-xs uppercase tracking-[0.2em] text-zinc-400 dark:text-zinc-500 mb-6">Locations</p>
        <h2 class="text-[clamp(1.5rem,1.1rem+1.69vw,2.625rem)] font-medium tracking-[-0.015em] leading-[1.12] text-zinc-900 dark:text-white max-w-2xl">
          Where we work
        </h2>
      </div>
      <div class="grid gap-px bg-zinc-200 dark:bg-zinc-800 lg:grid-cols-3">
        <div
          v-for="loc in locations"
          :key="loc.city"
          class="bg-white dark:bg-zinc-950"
        >
          <div class="relative aspect-video w-full overflow-hidden bg-zinc-50 dark:bg-zinc-900">
            <div class="absolute inset-0 flex items-center justify-center">
              <svg class="h-8 w-8 text-zinc-300 dark:text-zinc-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="0.75" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0 0 22.5 18.75V5.25A2.25 2.25 0 0 0 20.25 3H3.75A2.25 2.25 0 0 0 1.5 5.25v13.5A2.25 2.25 0 0 0 3.75 21Z" />
              </svg>
            </div>
          </div>
          <div class="p-8 lg:p-10">
            <h3 class="text-[clamp(1.125rem,1.08rem+0.19vw,1.25rem)] font-medium tracking-[-0.01em] leading-[1.2] text-zinc-900 dark:text-white mb-1">{{ loc.city }}</h3>
            <p class="text-xs uppercase tracking-[0.15em] text-zinc-400 dark:text-zinc-500 mb-6">{{ loc.country }}</p>
            <p class="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">{{ loc.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- CTA -->
  <section class="border-t border-zinc-200 dark:border-zinc-800">
    <div class="mx-auto max-w-full px-6 lg:px-8 py-24 lg:py-32 text-center">
      <h2 class="text-[clamp(1.5rem,0.8rem+3vw,3.5rem)] font-medium tracking-[-0.02em] leading-[1.12] text-zinc-900 dark:text-white mb-6">
        Do not see your role?
      </h2>
      <p class="text-base text-zinc-500 dark:text-zinc-400 leading-relaxed max-w-lg mx-auto mb-10">
        Send us your resume. We are always looking for talented people who share our mission.
      </p>
      <a
        href="#"
        class="inline-flex items-center gap-2 text-sm font-medium text-zinc-900 dark:text-white border-b border-zinc-900 dark:border-white pb-0.5 hover:border-zinc-400 dark:hover:border-zinc-500 transition-colors duration-200"
      >
        Send open application
        <ArrowRightIcon class="h-3.5 w-3.5" />
      </a>
    </div>
  </section>
</template>
