<script setup lang="ts">
import { ref } from 'vue'
const contactSubject = ref('')

const timeline = [
  { year: '2017', event: 'Founded in Zurich by PX4 creators Lorenz Meier and Kevin Sartori' },
  { year: '2018', event: 'First enterprise customers deploy AuterionOS on commercial platforms' },
  { year: '2019', event: 'Series A funding. Skynode autopilot enters production' },
  { year: '2020', event: 'U.S. Army selects Auterion for Small UAS program of record' },
  { year: '2021', event: 'AuterionOS certified on 30+ drone platforms from 15+ manufacturers' },
  { year: '2022', event: 'Deployed to Ukraine. GPS-denied autonomy proves critical in combat' },
  { year: '2023', event: '$50M Pentagon Replicator contract for autonomous strike systems' },
  { year: '2024', event: '33,000 strike kits contracted. Swarm orchestration enters service' },
  { year: '2025', event: 'Multi-domain operations: air, land, sea, and subsurface autonomy' },
]

const leadership = [
  { name: 'Lorenz Meier', role: 'CEO and Co-Founder', bio: 'Creator of PX4 and MAVLink. PhD in computer science from ETH Zurich. Built the open-source foundation that powers over 1 million drones worldwide.' },
  { name: 'Kevin Sartori', role: 'CRO and Co-Founder', bio: 'Defense and enterprise go-to-market leader. Previously at Skydio and DJI. Architect of Auterion\'s government programs strategy.' },
  { name: 'Julian Oes', role: 'VP Engineering', bio: 'Core PX4 contributor and MAVSDK creator. 15 years in autonomous systems. Leads the team building Skynode and AuterionOS.' },
  { name: 'Sarah Chen', role: 'VP Product', bio: 'Former product lead at Shield AI. Specializes in translating operational requirements into autonomous capabilities that scale.' },
]

const pressHighlights = [
  { outlet: 'The Wall Street Journal', headline: 'Pentagon Bets on Swiss Drone Startup for Mass Autonomous Warfare', date: 'March 2024' },
  { outlet: 'Bloomberg', headline: 'Auterion Wins $50M Contract Under Pentagon\'s Replicator Initiative', date: 'January 2024' },
  { outlet: 'Defense One', headline: 'How Open-Source Software Is Reshaping Military Drone Operations', date: 'November 2023' },
  { outlet: 'TechCrunch', headline: 'Auterion Raises Series B to Scale Drone Autonomy for Defense', date: 'June 2023' },
]
</script>

<template>
  <!-- HERO -->
  <section class="mx-auto max-w-full px-6 lg:px-8 pt-32 pb-24 sm:pt-40 sm:pb-32 lg:pt-48 lg:pb-40">
    <p class="text-xs uppercase tracking-[0.2em] text-dim mb-8">Company</p>
    <h1 class="text-[clamp(2rem,0.77rem+5.26vw,5.5rem)] font-medium tracking-[-0.03em] leading-[1.06] text-high max-w-4xl">
      We are engineers and mission partners.
    </h1>
    <div class="mt-12 lg:mt-16 lg:grid lg:grid-cols-12 lg:gap-8">
      <p class="lg:col-span-5 lg:col-start-7 text-lg text-low leading-relaxed">
        Auterion integrates autonomy, open architecture, and battle-proven resilience to deliver measurable impact for defense and commercial operations.
      </p>
    </div>
  </section>

  <!-- Company overview image -->
  <section class="pb-16 lg:pb-24 px-6 lg:px-8">
    <div class="relative aspect-video w-full overflow-hidden bg-surface-1  border border-line">
      <div class="absolute inset-0 flex items-center justify-center">
        <div class="text-center">
          <svg class="mx-auto h-10 w-10 text-dim" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="0.75" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0 0 22.5 18.75V5.25A2.25 2.25 0 0 0 20.25 3H3.75A2.25 2.25 0 0 0 1.5 5.25v13.5A2.25 2.25 0 0 0 3.75 21Z" />
          </svg>
          <p class="mt-3 text-xs uppercase tracking-[0.2em] text-dim">Team / office photo</p>
        </div>
      </div>
    </div>
  </section>

  <!-- ABOUT -->
  <section class="border-t border-line">
    <div class="mx-auto max-w-full px-6 lg:px-8 py-24 lg:py-32">
      <div class="lg:grid lg:grid-cols-12 lg:gap-8">
        <div class="lg:col-span-5">
          <p class="text-xs uppercase tracking-[0.2em] text-dim mb-6">About</p>
          <h2 class="text-[clamp(1.5rem,1.1rem+1.69vw,2.625rem)] font-medium tracking-[-0.015em] leading-[1.12] text-high">
            From open source to open skies.
          </h2>
        </div>
        <div class="lg:col-span-6 lg:col-start-7 mt-10 lg:mt-0">
          <div class="space-y-6 text-base text-low leading-relaxed">
            <p>
              Our roots are in open-source development. Making <span class="text-high">PX4 freely available</span> created the largest developer community for autonomous robots in the world. Over one million drones fly on software our founders wrote.
            </p>
            <p>
              Today we turn that foundation into products that democracies can trust. We feel a <span class="text-high">moral obligation to support liberal democracies</span>. Technology companies should support armed forces protecting freedom.
            </p>
            <p>
              Our systems ensure that human operators always remain in control. Autonomy is a tool that amplifies human judgment, not a replacement for it.
            </p>
          </div>
        </div>
      </div>

      <!-- Fact grid -->
      <div class="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-px bg-line">
        <div class="bg-page p-8">
          <p class="text-[clamp(1.25rem,1.16rem+0.38vw,1.5rem)] font-medium tracking-[-0.01em] leading-[1.15] text-high">2017</p>
          <p class="text-sm text-low mt-2">Founded in Zurich</p>
        </div>
        <div class="bg-page p-8">
          <p class="text-[clamp(1.25rem,1.16rem+0.38vw,1.5rem)] font-medium tracking-[-0.01em] leading-[1.15] text-high">350+</p>
          <p class="text-sm text-low mt-2">Team members</p>
        </div>
        <div class="bg-page p-8">
          <p class="text-[clamp(1.25rem,1.16rem+0.38vw,1.5rem)] font-medium tracking-[-0.01em] leading-[1.15] text-high">PX4</p>
          <p class="text-sm text-low mt-2">Open-source heritage</p>
        </div>
        <div class="bg-page p-8">
          <p class="text-[clamp(1.25rem,1.16rem+0.38vw,1.5rem)] font-medium tracking-[-0.01em] leading-[1.15] text-high">$50M</p>
          <p class="text-sm text-low mt-2">Pentagon contract</p>
        </div>
      </div>
    </div>
  </section>

  <!-- TIMELINE -->
  <section class="border-t border-line">
    <div class="mx-auto max-w-full px-6 lg:px-8 py-24 lg:py-32">
      <div class="lg:grid lg:grid-cols-12 lg:gap-8 mb-20">
        <div class="lg:col-span-5">
          <p class="text-xs uppercase tracking-[0.2em] text-dim mb-6">Timeline</p>
          <h2 class="text-[clamp(1.5rem,1.1rem+1.69vw,2.625rem)] font-medium tracking-[-0.015em] leading-[1.12] text-high">
            From garage to global defense partner.
          </h2>
        </div>
      </div>
      <div class="divide-y divide-line">
        <div
          v-for="item in timeline"
          :key="item.year"
          class="py-6 lg:grid lg:grid-cols-12 lg:gap-8"
        >
          <p class="lg:col-span-2 text-sm font-mono text-dim">{{ item.year }}</p>
          <p class="lg:col-span-8 lg:col-start-4 mt-1 lg:mt-0 text-sm text-low leading-relaxed">{{ item.event }}</p>
        </div>
      </div>
    </div>
  </section>

  <!-- LEADERSHIP -->
  <section class="border-t border-line">
    <div class="mx-auto max-w-full px-6 lg:px-8 py-24 lg:py-32">
      <div class="mb-20">
        <p class="text-xs uppercase tracking-[0.2em] text-dim mb-6">Leadership</p>
        <h2 class="text-[clamp(1.5rem,1.1rem+1.69vw,2.625rem)] font-medium tracking-[-0.015em] leading-[1.12] text-high max-w-2xl">
          The team behind the mission
        </h2>
      </div>
      <div class="grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-4">
        <div
          v-for="person in leadership"
          :key="person.name"
          class="bg-page p-8 lg:p-10"
        >
          <div class="relative aspect-square bg-surface-1  mb-6 overflow-hidden">
            <div class="absolute inset-0 flex items-center justify-center">
              <svg class="h-8 w-8 text-dim" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="0.75" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
              </svg>
            </div>
          </div>
          <h3 class="text-base font-medium text-high">{{ person.name }}</h3>
          <p class="text-xs uppercase tracking-[0.15em] text-dim mt-1 mb-4">{{ person.role }}</p>
          <p class="text-sm text-low leading-relaxed">{{ person.bio }}</p>
        </div>
      </div>
    </div>
  </section>

  <!-- PRESS -->
  <section class="border-t border-line">
    <div class="mx-auto max-w-full px-6 lg:px-8 py-24 lg:py-32">
      <div class="lg:grid lg:grid-cols-12 lg:gap-8 mb-16">
        <div class="lg:col-span-5">
          <p class="text-xs uppercase tracking-[0.2em] text-dim mb-6">In the Press</p>
          <h2 class="text-[clamp(1.5rem,1.1rem+1.69vw,2.625rem)] font-medium tracking-[-0.015em] leading-[1.12] text-high">
            What they are saying
          </h2>
        </div>
      </div>
      <div class="divide-y divide-line">
        <a
          v-for="item in pressHighlights"
          :key="item.headline"
          href="#"
          class="group py-6 lg:grid lg:grid-cols-12 lg:gap-8 block"
        >
          <p class="lg:col-span-2 text-xs uppercase tracking-[0.15em] text-dim">{{ item.outlet }}</p>
          <p class="lg:col-span-7 lg:col-start-4 mt-2 lg:mt-0 text-base font-medium text-high group-hover:underline underline-offset-4">{{ item.headline }}</p>
          <p class="lg:col-span-2 lg:col-start-11 mt-2 lg:mt-0 text-xs text-dim text-right">{{ item.date }}</p>
        </a>
      </div>
    </div>
  </section>

  <!-- CONTACT -->
  <section class="border-t border-line">
    <div class="mx-auto max-w-full px-6 lg:px-8 py-24 lg:py-32">
      <div class="lg:grid lg:grid-cols-12 lg:gap-16">
        <div class="lg:col-span-5">
          <p class="text-xs uppercase tracking-[0.2em] text-dim mb-6">Contact</p>
          <h2 class="text-[clamp(1.5rem,1.1rem+1.69vw,2.625rem)] font-medium tracking-[-0.015em] leading-[1.12] text-high mb-6">
            Let us explore how we can help.
          </h2>
          <p class="text-base text-low leading-relaxed mb-12">
            Whether you are scaling autonomous operations, integrating multi-vendor fleets, or building the next generation of unmanned systems, we would like to hear from you.
          </p>
          <div class="space-y-6 text-sm">
            <div>
              <p class="text-high mb-1">Headquarters</p>
              <p class="text-low">Zurich, Switzerland</p>
              <p class="text-low">Arlington, Virginia</p>
            </div>
            <div>
              <p class="text-high mb-1">Email</p>
              <p class="text-low">contact@auterion.com</p>
            </div>
          </div>
        </div>
        <form class="lg:col-span-6 lg:col-start-7 mt-16 lg:mt-0 space-y-6" @submit.prevent>
          <div class="grid grid-cols-2 gap-6">
            <div>
              <label class="block text-xs uppercase tracking-[0.15em] text-dim mb-2">First name</label>
              <input type="text" class="w-full border-0 border-b border-line bg-transparent px-0 py-2.5 text-sm text-high placeholder:text-dim focus:outline-none focus:border-line-active transition-colors duration-200" />
            </div>
            <div>
              <label class="block text-xs uppercase tracking-[0.15em] text-dim mb-2">Last name</label>
              <input type="text" class="w-full border-0 border-b border-line bg-transparent px-0 py-2.5 text-sm text-high placeholder:text-dim focus:outline-none focus:border-line-active transition-colors duration-200" />
            </div>
          </div>
          <div>
            <label class="block text-xs uppercase tracking-[0.15em] text-dim mb-2">Email</label>
            <input type="email" placeholder="you@organization.com" class="w-full border-0 border-b border-line bg-transparent px-0 py-2.5 text-sm text-high placeholder:text-dim focus:outline-none focus:border-line-active transition-colors duration-200" />
          </div>
          <div>
            <label class="block text-xs uppercase tracking-[0.15em] text-dim mb-2">Subject</label>
            <select v-model="contactSubject" class="w-full border-0 border-b border-line bg-transparent px-0 py-2.5 text-sm text-high focus:outline-none focus:border-line-active transition-colors duration-200">
              <option value="" disabled>Select a topic</option>
              <option>Defense inquiry</option>
              <option>Commercial partnership</option>
              <option>Developer ecosystem</option>
              <option>Press</option>
              <option>Careers</option>
              <option>Other</option>
            </select>
          </div>
          <div>
            <label class="block text-xs uppercase tracking-[0.15em] text-dim mb-2">Message</label>
            <textarea rows="4" placeholder="Tell us about your mission..." class="w-full border-0 border-b border-line bg-transparent px-0 py-2.5 text-sm text-high placeholder:text-dim focus:outline-none focus:border-line-active transition-colors duration-200 resize-none"></textarea>
          </div>
          <button type="submit" class="mt-4 text-sm font-medium text-high border-b border-line-active pb-0.5 hover:border-line-hover transition-colors duration-200">
            Send message
          </button>
        </form>
      </div>
    </div>
  </section>
</template>
