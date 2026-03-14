<script setup lang="ts">
const typeScale = [
  { token: '9xl',  size: '128px', lineHeight: '1',    tracking: '-5.12px', trackingLoose: '-6.4px' },
  { token: '8xl',  size: '96px',  lineHeight: '1',    tracking: '-3.84px', trackingLoose: '-4.8px' },
  { token: '7xl',  size: '80px',  lineHeight: '1',    tracking: '-3.2px',  trackingLoose: '-4px' },
  { token: '6xl',  size: '60px',  lineHeight: '1.1',  tracking: '-2.4px',  trackingLoose: null },
  { token: '5xl',  size: '48px',  lineHeight: '1.15', tracking: '-1.92px', trackingLoose: null },
  { token: '4xl',  size: '40px',  lineHeight: '1.15', tracking: '-1.6px',  trackingLoose: '-2px' },
  { token: '3xl',  size: '30px',  lineHeight: '1.25', tracking: '-1.2px',  trackingLoose: '-1.5px' },
  { token: '2xl',  size: '24px',  lineHeight: '1.25', tracking: '-0.72px', trackingLoose: '-1.2px' },
  { token: 'xl',   size: '20px',  lineHeight: '1.4',  tracking: '-0.6px',  trackingLoose: null },
  { token: 'lg',   size: '18px',  lineHeight: '1.4',  tracking: '-0.36px', trackingLoose: null },
  { token: 'base', size: '16px',  lineHeight: '1.4',  tracking: '-0.32px', trackingLoose: null },
  { token: 'sm',   size: '14px',  lineHeight: '1.4',  tracking: '-0.28px', trackingLoose: null },
  { token: 'xs',   size: '12px',  lineHeight: '1.4',  tracking: '-0.24px', trackingLoose: null },
]

const weights = [
  { label: 'SemiBold', value: 600 },
  { label: 'Medium', value: 500 },
  { label: 'Regular', value: 400 },
]

const features = [
  'ss01', 'ss07', 'ss08',
  'cv02', 'cv03', 'cv04', 'cv06', 'cv09', 'cv12', 'cv13',
]
</script>

<template>
  <div>
    <header class="px-10 lg:px-20 pt-24 pb-16">
      <p class="text-[11px] text-dim uppercase tracking-widest font-medium mb-5">Typography</p>
      <h1 class="text-5xl font-medium text-high">Type Scale</h1>
      <p class="text-base text-low mt-4">Inter Variable — 13-step scale from 12px to 128px with weight-aware tracking.</p>
    </header>

    <div class="border-t border-line"></div>

    <section class="px-10 lg:px-20 py-24">
      <h2 class="text-xl font-semibold text-high mb-1">Type Scale</h2>
      <p class="text-sm text-low mb-8">13 steps from xs (12px) to 9xl (128px). Three weight columns: SemiBold, Medium, Regular.</p>

      <div class="grid gap-6 mb-4" style="grid-template-columns: 100px repeat(3, 1fr)">
        <div></div>
        <div v-for="w in weights" :key="w.label" class="text-xs text-dim">
          {{ w.label }} ({{ w.value }})
        </div>
      </div>

      <div
        v-for="step in typeScale"
        :key="step.token"
        class="grid gap-6 border-t border-line py-3"
        style="grid-template-columns: 100px repeat(3, 1fr)"
      >
        <div class="flex flex-col justify-center">
          <span class="text-xs font-medium text-high font-mono">{{ step.token }}</span>
          <span class="text-xs text-dim">{{ step.size }}</span>
        </div>
        <div
          v-for="w in weights"
          :key="w.label"
          class="min-w-0 overflow-hidden"
        >
          <p
            class="truncate text-high"
            :style="{
              fontSize: `var(--font-size-${step.token})`,
              fontWeight: w.value,
              lineHeight: step.lineHeight,
              letterSpacing: w.value === 400 && step.trackingLoose ? step.trackingLoose : step.tracking,
            }"
          >
            Inter {{ step.size.replace('px', '') }}
          </p>
        </div>
      </div>
    </section>

    <div class="border-t border-line"></div>

    <section class="px-10 lg:px-20 py-24">
      <h2 class="text-xl font-semibold text-high mb-1">Token Reference</h2>
      <p class="text-sm text-low mb-8">CSS custom properties and their values.</p>

      <div class="overflow-x-auto">
        <table class="w-full text-sm">
          <thead>
            <tr class="border-b border-line-hover  text-left">
              <th class="py-2 pr-4 text-[11px] font-medium text-dim uppercase tracking-widest">Token</th>
              <th class="py-2 pr-4 text-[11px] font-medium text-dim uppercase tracking-widest">Size</th>
              <th class="py-2 pr-4 text-[11px] font-medium text-dim uppercase tracking-widest">Line Height</th>
              <th class="py-2 pr-4 text-[11px] font-medium text-dim uppercase tracking-widest">Tracking</th>
              <th class="py-2 text-[11px] font-medium text-dim uppercase tracking-widest">Tracking (Regular)</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="step in typeScale" :key="step.token" class="border-b border-line">
              <td class="py-2 pr-4 font-mono text-high">--font-size-{{ step.token }}</td>
              <td class="py-2 pr-4 text-low">{{ step.size }}</td>
              <td class="py-2 pr-4 text-low">{{ step.lineHeight }}</td>
              <td class="py-2 pr-4 font-mono text-low">{{ step.tracking }}</td>
              <td class="py-2 font-mono text-low">{{ step.trackingLoose ?? '—' }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <div class="border-t border-line"></div>

    <section class="px-10 lg:px-20 py-24">
      <h2 class="text-xl font-semibold text-high mb-1">Weights</h2>
      <p class="text-sm text-low mb-8">Three weights available across the entire scale.</p>

      <div class="grid gap-4 sm:grid-cols-3">
        <div v-for="w in weights" :key="w.label" class="p-8 border border-line">
          <p
            class="text-2xl text-high mb-3"
            :style="{ fontWeight: w.value, letterSpacing: 'var(--tracking-2xl)' }"
          >
            Aa Bb Cc 123
          </p>
          <p class="text-xs text-low">
            <span class="font-mono">{{ w.label }}</span> — {{ w.value }}
          </p>
          <p class="text-xs text-dim font-mono">--font-weight-{{ w.label === 'SemiBold' ? 'semibold' : w.label === 'Medium' ? 'medium' : 'normal' }}</p>
        </div>
      </div>
    </section>

    <div class="border-t border-line"></div>

    <section class="px-10 lg:px-20 py-24">
      <h2 class="text-xl font-semibold text-high mb-1">OpenType Features</h2>
      <p class="text-sm text-low mb-8">Enabled by default via <code class="font-mono text-low">--font-features-sans</code>.</p>

      <div class="grid gap-4 sm:grid-cols-2">
        <div class="p-8 border border-line">
          <p class="text-[11px] font-medium text-dim uppercase tracking-widest mb-3">Features enabled</p>
          <div class="flex flex-wrap gap-2">
            <span
              v-for="f in features"
              :key="f"
              class="px-2 py-1 rounded bg-surface-1 text-xs font-mono text-low"
            >
              {{ f }}
            </span>
          </div>
        </div>

        <div class="p-8 border border-line">
          <p class="text-[11px] font-medium text-dim uppercase tracking-widest mb-3">Sample comparison</p>
          <div class="space-y-2">
            <div>
              <p class="text-xs text-dim mb-1">With features:</p>
              <p class="text-xl text-high" style="letter-spacing: -0.6px">0123456789 Il1 agy</p>
            </div>
            <div>
              <p class="text-xs text-dim mb-1">Without features:</p>
              <p class="text-xl text-high" style="font-feature-settings: normal; letter-spacing: -0.6px">0123456789 Il1 agy</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
