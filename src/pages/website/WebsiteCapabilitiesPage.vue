<script setup lang="ts">
import { ArrowRightIcon } from '@heroicons/vue/24/outline'

const capabilities = [
  {
    number: '01',
    title: 'Swarm Orchestration',
    description: 'One operator, many drones. Scale from a handful to hundreds with coordinated, AI-driven autonomy that adapts in real time.',
    detail: 'Auterion swarm technology lets a single operator control dozens or hundreds of vehicles simultaneously. The system distributes tasks, adapts formations, and reassigns roles dynamically when vehicles are added or lost. Built on mesh networking with automatic failover, swarms maintain coordination even under jamming.',
  },
  {
    number: '02',
    title: 'Open Architecture',
    description: 'Integrate multiple manufacturers, payloads, and ground stations into a single interoperable system. No vendor lock-in.',
    detail: 'Our architecture separates hardware from software. Any drone running AuterionOS joins the same fleet management system, regardless of manufacturer. Standardized payload interfaces mean new sensors and effectors integrate in days, not months. Open APIs let third-party developers extend the platform.',
  },
  {
    number: '03',
    title: 'Edge AI',
    description: 'Deploy AI models and applications directly on the vehicle. Compute at the edge, decide at the edge, even without connectivity.',
    detail: 'Neural networks run natively on Skynode S hardware accelerators. Object detection, classification, and tracking happen in real time at the point of collection. Models update over-the-air as threats evolve. Edge processing eliminates latency and removes dependency on communication links.',
  },
  {
    number: '04',
    title: 'Battle-Proven Resilience',
    description: 'Lock onto targets and complete missions even when GPS and video links are jammed. Proven in the most demanding environments.',
    detail: 'Tested across active conflict zones, Auterion systems navigate using visual-inertial odometry when GPS is denied. Encrypted mesh links resist electronic warfare. The vehicle stores waypoints locally and continues its mission profile autonomously, reporting results when connectivity is restored.',
  },
  {
    number: '05',
    title: 'BVLOS Operations',
    description: 'Beyond-visual-line-of-sight capability with autonomous navigation, obstacle avoidance, and return-to-home failsafes.',
    detail: 'Fly missions tens of kilometers from the operator. Onboard sense-and-avoid systems detect obstacles using computer vision and lidar fusion. Automated return-to-home triggers on low battery, signal loss, or geofence breach. Compliant with evolving regulatory frameworks worldwide.',
  },
  {
    number: '06',
    title: 'Rapid Deployment',
    description: 'From unboxing to airborne in minutes. Intuitive tap-to-target interface reduces training from weeks to hours.',
    detail: 'Auterion systems are designed for soldiers, not engineers. The tablet-based interface uses a tap-to-target paradigm: tap a point on the map, and the vehicle plans and executes the mission autonomously. New operators achieve proficiency in a single afternoon of training.',
  },
]

const useCases = [
  {
    title: 'Reconnaissance',
    description: 'Autonomous ISR missions with real-time target detection and classification. Multi-sensor fusion provides actionable intelligence without human-in-the-loop delays.',
    metrics: '80% reduction in sensor-to-shooter time',
  },
  {
    title: 'Strike',
    description: 'Coordinated swarm attacks with autonomous target assignment and battle damage assessment. Each vehicle selects optimal approach vectors and deconflicts with the swarm.',
    metrics: '33,000 strike kits contracted',
  },
  {
    title: 'Logistics',
    description: 'Point-to-point cargo delivery in contested environments. Vehicles navigate autonomously using terrain-following radar and visual navigation in GPS-denied zones.',
    metrics: '50+ countries deployed',
  },
  {
    title: 'Perimeter Security',
    description: 'Persistent surveillance with automated threat detection. Swarms patrol defined perimeters, hand off tracking between vehicles, and alert operators to anomalies.',
    metrics: '24/7 autonomous patrol capability',
  },
]
</script>

<template>
  <!-- HERO -->
  <section class="mx-auto max-w-full px-6 lg:px-8 pt-32 pb-24 sm:pt-40 sm:pb-32 lg:pt-48 lg:pb-40">
    <p class="text-xs uppercase tracking-[0.2em] text-dim mb-8">Capabilities</p>
    <h1 class="text-[clamp(2rem,0.77rem+5.26vw,5.5rem)] font-medium tracking-[-0.03em] leading-[1.06] text-high max-w-4xl">
      Built for the demands of autonomous operations.
    </h1>
    <div class="mt-12 lg:mt-16 lg:grid lg:grid-cols-12 lg:gap-8">
      <p class="lg:col-span-5 lg:col-start-7 text-lg text-low leading-relaxed">
        Six core technology pillars that enable everything from single-vehicle reconnaissance to coordinated multi-domain swarm operations.
      </p>
    </div>
  </section>

  <!-- Capabilities overview image -->
  <section class="pb-16 lg:pb-24 px-6 lg:px-8">
    <div class="relative aspect-21/9 w-full overflow-hidden bg-surface-1  border border-line">
      <div class="absolute inset-0 flex items-center justify-center">
        <div class="text-center">
          <svg class="mx-auto h-10 w-10 text-dim" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="0.75" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0 0 22.5 18.75V5.25A2.25 2.25 0 0 0 20.25 3H3.75A2.25 2.25 0 0 0 1.5 5.25v13.5A2.25 2.25 0 0 0 3.75 21Z" />
          </svg>
          <p class="mt-3 text-xs uppercase tracking-[0.2em] text-dim">System architecture diagram</p>
        </div>
      </div>
    </div>
  </section>

  <!-- CAPABILITIES DEEP DIVE -->
  <section class="border-t border-line">
    <div class="mx-auto max-w-full px-6 lg:px-8">
      <div
        v-for="cap in capabilities"
        :key="cap.number"
        class="border-b border-line last:border-b-0 py-20 lg:py-28"
      >
        <div class="lg:grid lg:grid-cols-12 lg:gap-16">
          <div class="lg:col-span-5">
            <p class="text-xs font-mono text-dim mb-6">{{ cap.number }}</p>
            <h2 class="text-[clamp(1.5rem,1.1rem+1.69vw,2.625rem)] font-medium tracking-[-0.015em] leading-[1.12] text-high mb-6">
              {{ cap.title }}
            </h2>
            <p class="text-base text-low leading-relaxed">
              {{ cap.description }}
            </p>
          </div>
          <div class="lg:col-span-6 lg:col-start-7 mt-12 lg:mt-0">
            <div class="relative aspect-4/3 w-full overflow-hidden bg-surface-1  border border-line">
              <div class="absolute inset-0 flex items-center justify-center">
                <div class="text-center">
                  <svg class="mx-auto h-10 w-10 text-dim" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="0.75" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0 0 22.5 18.75V5.25A2.25 2.25 0 0 0 20.25 3H3.75A2.25 2.25 0 0 0 1.5 5.25v13.5A2.25 2.25 0 0 0 3.75 21Z" />
                  </svg>
                  <p class="mt-3 text-xs uppercase tracking-[0.2em] text-dim">{{ cap.title }} — illustration</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- USE CASES -->
  <section class="border-t border-line">
    <div class="mx-auto max-w-full px-6 lg:px-8 py-24 lg:py-32">
      <div class="mb-20">
        <p class="text-xs uppercase tracking-[0.2em] text-dim mb-6">Mission Profiles</p>
        <h2 class="text-[clamp(1.5rem,0.8rem+3vw,3.5rem)] font-medium tracking-[-0.02em] leading-[1.12] text-high max-w-3xl">
          From concept to completion
        </h2>
      </div>
      <div class="grid gap-px bg-line sm:grid-cols-2">
        <div
          v-for="uc in useCases"
          :key="uc.title"
          class="bg-page p-8 lg:p-12"
        >
          <h3 class="text-[clamp(1.125rem,1.08rem+0.19vw,1.25rem)] font-medium tracking-[-0.01em] leading-[1.2] text-high mb-4">{{ uc.title }}</h3>
          <p class="text-sm text-low leading-relaxed mb-8">{{ uc.description }}</p>
          <p class="text-xs uppercase tracking-[0.15em] text-dim">{{ uc.metrics }}</p>
        </div>
      </div>
    </div>
  </section>

  <!-- CTA -->
  <section class="border-t border-line">
    <div class="mx-auto max-w-full px-6 lg:px-8 py-24 lg:py-32 text-center">
      <h2 class="text-[clamp(1.5rem,0.8rem+3vw,3.5rem)] font-medium tracking-[-0.02em] leading-[1.12] text-high mb-6">
        See it in action.
      </h2>
      <p class="text-base text-low leading-relaxed max-w-lg mx-auto mb-10">
        Schedule a demonstration tailored to your operational requirements.
      </p>
      <RouterLink
        to="/gallery/website/company"
        class="inline-flex items-center gap-2 text-sm font-medium text-high border-b border-line-active pb-0.5 hover:border-line-hover transition-colors duration-200"
      >
        Request a demo
        <ArrowRightIcon class="h-3.5 w-3.5" />
      </RouterLink>
    </div>
  </section>
</template>
