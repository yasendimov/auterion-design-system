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
    <header class="px-8 lg:px-16 pt-16 pb-12">
      <p class="text-[11px] text-zinc-400 dark:text-zinc-500 uppercase tracking-widest font-medium mb-3">Typography</p>
      <h1 class="text-4xl font-semibold text-zinc-900 dark:text-white">Typography</h1>
      <p class="text-base text-zinc-500 dark:text-zinc-400 mt-4">Inter Variable — type scale, weights, and OpenType features.</p>
    </header>

    <div class="border-t border-zinc-200 dark:border-zinc-800"></div>

    <section class="px-8 lg:px-16 py-16">
      <h2 class="text-xl font-semibold text-zinc-900 dark:text-white mb-1">Type Scale</h2>
      <p class="text-sm text-zinc-500 dark:text-zinc-400 mb-8">13 steps from xs (12px) to 9xl (128px). Three weight columns: SemiBold, Medium, Regular.</p>

      <div class="grid gap-6 mb-4" style="grid-template-columns: 100px repeat(3, 1fr)">
        <div></div>
        <div v-for="w in weights" :key="w.label" class="text-xs text-zinc-400 dark:text-zinc-500">
          {{ w.label }} ({{ w.value }})
        </div>
      </div>

      <div
        v-for="step in typeScale"
        :key="step.token"
        class="grid gap-6 border-t border-zinc-200 dark:border-zinc-800 py-3"
        style="grid-template-columns: 100px repeat(3, 1fr)"
      >
        <div class="flex flex-col justify-center">
          <span class="text-xs font-medium text-zinc-900 dark:text-white font-mono">{{ step.token }}</span>
          <span class="text-xs text-zinc-400 dark:text-zinc-500">{{ step.size }}</span>
        </div>
        <div
          v-for="w in weights"
          :key="w.label"
          class="min-w-0 overflow-hidden"
        >
          <p
            class="truncate text-zinc-800 dark:text-zinc-100"
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

    <div class="border-t border-zinc-200 dark:border-zinc-800"></div>

    <section class="px-8 lg:px-16 py-16">
      <h2 class="text-xl font-semibold text-zinc-900 dark:text-white mb-1">Token Reference</h2>
      <p class="text-sm text-zinc-500 dark:text-zinc-400 mb-8">CSS custom properties and their values.</p>

      <div class="overflow-x-auto">
        <table class="w-full text-sm">
          <thead>
            <tr class="border-b border-zinc-300 dark:border-zinc-700 text-left">
              <th class="py-2 pr-4 text-[11px] font-medium text-zinc-400 dark:text-zinc-500 uppercase tracking-widest">Token</th>
              <th class="py-2 pr-4 text-[11px] font-medium text-zinc-400 dark:text-zinc-500 uppercase tracking-widest">Size</th>
              <th class="py-2 pr-4 text-[11px] font-medium text-zinc-400 dark:text-zinc-500 uppercase tracking-widest">Line Height</th>
              <th class="py-2 pr-4 text-[11px] font-medium text-zinc-400 dark:text-zinc-500 uppercase tracking-widest">Tracking</th>
              <th class="py-2 text-[11px] font-medium text-zinc-400 dark:text-zinc-500 uppercase tracking-widest">Tracking (Regular)</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="step in typeScale" :key="step.token" class="border-b border-zinc-200 dark:border-zinc-800">
              <td class="py-2 pr-4 font-mono text-zinc-900 dark:text-white">--font-size-{{ step.token }}</td>
              <td class="py-2 pr-4 text-zinc-500 dark:text-zinc-400">{{ step.size }}</td>
              <td class="py-2 pr-4 text-zinc-500 dark:text-zinc-400">{{ step.lineHeight }}</td>
              <td class="py-2 pr-4 font-mono text-zinc-500 dark:text-zinc-400">{{ step.tracking }}</td>
              <td class="py-2 font-mono text-zinc-500 dark:text-zinc-400">{{ step.trackingLoose ?? '—' }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <div class="border-t border-zinc-200 dark:border-zinc-800"></div>

    <section class="px-8 lg:px-16 py-16">
      <h2 class="text-xl font-semibold text-zinc-900 dark:text-white mb-1">Weights</h2>
      <p class="text-sm text-zinc-500 dark:text-zinc-400 mb-8">Three weights available across the entire scale.</p>

      <div class="grid gap-4 sm:grid-cols-3">
        <div v-for="w in weights" :key="w.label" class="p-6 rounded-lg border border-zinc-200 dark:border-zinc-800">
          <p
            class="text-2xl text-zinc-900 dark:text-white mb-3"
            :style="{ fontWeight: w.value, letterSpacing: 'var(--tracking-2xl)' }"
          >
            Aa Bb Cc 123
          </p>
          <p class="text-xs text-zinc-500 dark:text-zinc-400">
            <span class="font-mono">{{ w.label }}</span> — {{ w.value }}
          </p>
          <p class="text-xs text-zinc-400 dark:text-zinc-500 font-mono">--font-weight-{{ w.label === 'SemiBold' ? 'semibold' : w.label === 'Medium' ? 'medium' : 'normal' }}</p>
        </div>
      </div>
    </section>

    <div class="border-t border-zinc-200 dark:border-zinc-800"></div>

    <section class="px-8 lg:px-16 py-16">
      <h2 class="text-xl font-semibold text-zinc-900 dark:text-white mb-1">OpenType Features</h2>
      <p class="text-sm text-zinc-500 dark:text-zinc-400 mb-8">Enabled by default via <code class="font-mono text-zinc-500 dark:text-zinc-400">--font-features-sans</code>.</p>

      <div class="grid gap-4 sm:grid-cols-2">
        <div class="p-6 rounded-lg border border-zinc-200 dark:border-zinc-800">
          <p class="text-[11px] font-medium text-zinc-400 dark:text-zinc-500 uppercase tracking-widest mb-3">Features enabled</p>
          <div class="flex flex-wrap gap-2">
            <span
              v-for="f in features"
              :key="f"
              class="px-2 py-1 rounded bg-zinc-100 dark:bg-zinc-800 text-xs font-mono text-zinc-600 dark:text-zinc-300"
            >
              {{ f }}
            </span>
          </div>
        </div>

        <div class="p-6 rounded-lg border border-zinc-200 dark:border-zinc-800">
          <p class="text-[11px] font-medium text-zinc-400 dark:text-zinc-500 uppercase tracking-widest mb-3">Sample comparison</p>
          <div class="space-y-2">
            <div>
              <p class="text-xs text-zinc-400 dark:text-zinc-500 mb-1">With features:</p>
              <p class="text-xl text-zinc-900 dark:text-white" style="letter-spacing: -0.6px">0123456789 Il1 agy</p>
            </div>
            <div>
              <p class="text-xs text-zinc-400 dark:text-zinc-500 mb-1">Without features:</p>
              <p class="text-xl text-zinc-900 dark:text-white" style="font-feature-settings: normal; letter-spacing: -0.6px">0123456789 Il1 agy</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
