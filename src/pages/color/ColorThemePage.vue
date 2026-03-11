<script setup lang="ts">
import { useTheme } from '@/composables/useTheme'

const { isDark } = useTheme()

const themeComparison = [
  { token: '--color-base-1', label: 'Background', lightHex: '#fcfcfc', darkHex: '#000000' },
  { token: '--color-base-9', label: 'Solid fill', lightHex: '#8c8c8c', darkHex: '#6d6d6d' },
  { token: '--color-base-12', label: 'Text', lightHex: '#1f1f1f', darkHex: '#ffffff' },
  { token: '--color-blue-9', label: 'Accent fill', lightHex: '#1475ff', darkHex: '#1475ff' },
]

const scaleInversion = [
  { step: 1, lightRole: 'App background (lightest)', darkRole: 'App background (darkest)' },
  { step: 3, lightRole: 'UI element bg', darkRole: 'UI element bg' },
  { step: 6, lightRole: 'Subtle border', darkRole: 'Subtle border' },
  { step: 9, lightRole: 'Solid accent fill', darkRole: 'Solid accent fill (same hex)' },
  { step: 11, lightRole: 'Low-contrast text', darkRole: 'Low-contrast text' },
  { step: 12, lightRole: 'High-contrast text (darkest)', darkRole: 'High-contrast text (lightest)' },
]
</script>

<template>
  <div>
    <header class="px-8 lg:px-16 pt-16 pb-12">
      <p class="text-[11px] text-dim uppercase tracking-widest font-medium mb-3">Color</p>
      <h1 class="text-5xl font-medium text-high">Theme</h1>
      <p class="text-base text-low mt-4 max-w-xl leading-relaxed">
        How light and dark modes are implemented using the two-layer token architecture. Dark mode is primary.
      </p>
    </header>

    <div class="border-t border-line"></div>

    <!-- Current Theme -->
    <section class="px-8 lg:px-16 py-16">
      <h2 class="text-xl font-semibold text-high mb-4">Current Theme</h2>
      <p class="text-sm text-low leading-relaxed max-w-2xl mb-8">
        The active theme is controlled by the <code class="text-xs font-mono bg-surface-1 px-1 py-0.5 rounded">data-theme</code> attribute on the <code class="text-xs font-mono bg-surface-1 px-1 py-0.5 rounded">&lt;html&gt;</code> element. Toggle the theme using the switch in the sidebar header to see tokens update live.
      </p>

      <div class="inline-flex items-center gap-3 px-4 py-3 border border-line rounded">
        <div class="w-3 h-3 rounded-full" :style="{ backgroundColor: isDark ? '#fff' : '#000' }"></div>
        <span class="text-sm font-medium text-high">{{ isDark ? 'Dark' : 'Light' }} mode active</span>
        <code class="text-xs font-mono text-dim">data-theme="{{ isDark ? 'dark' : 'light' }}"</code>
      </div>
    </section>

    <div class="border-t border-line"></div>

    <!-- How Inversion Works -->
    <section class="px-8 lg:px-16 py-16">
      <h2 class="text-xl font-semibold text-high mb-4">Scale Inversion</h2>
      <p class="text-sm text-low leading-relaxed max-w-2xl mb-8">
        In dark mode, primitive scales invert &mdash; step 1 becomes the darkest value and step 12 becomes the lightest. The purpose of each step stays the same: step 1 is always the background, step 12 is always text. Only the luminance flips.
      </p>

      <div class="space-y-2">
        <div class="grid gap-4" style="grid-template-columns: 60px 1fr 1fr 80px">
          <div class="text-[11px] text-dim uppercase tracking-widest font-medium">Step</div>
          <div class="text-[11px] text-dim uppercase tracking-widest font-medium">Light Mode Role</div>
          <div class="text-[11px] text-dim uppercase tracking-widest font-medium">Dark Mode Role</div>
          <div class="text-[11px] text-dim uppercase tracking-widest font-medium">Preview</div>
        </div>
        <div
          v-for="item in scaleInversion"
          :key="item.step"
          class="grid gap-4 py-2 border-t border-line"
          style="grid-template-columns: 60px 1fr 1fr 80px"
        >
          <div class="text-sm font-mono font-medium text-high">{{ item.step }}</div>
          <div class="text-sm text-low">{{ item.lightRole }}</div>
          <div class="text-sm text-low">{{ item.darkRole }}</div>
          <div class="h-8 rounded" :style="{ backgroundColor: `var(--color-blue-${item.step})` }"></div>
        </div>
      </div>
    </section>

    <div class="border-t border-line"></div>

    <!-- Side-by-Side Comparison -->
    <section class="px-8 lg:px-16 py-16">
      <h2 class="text-xl font-semibold text-high mb-4">Token Comparison</h2>
      <p class="text-sm text-low leading-relaxed max-w-2xl mb-8">
        Key tokens and their resolved values across both themes. Note how <code class="text-xs font-mono bg-surface-1 px-1 py-0.5 rounded">blue-9</code> stays constant &mdash; the accent fill is stable across themes.
      </p>

      <div class="space-y-2">
        <div class="grid gap-4" style="grid-template-columns: 200px 1fr 100px 1fr 100px">
          <div class="text-[11px] text-dim uppercase tracking-widest font-medium">Token</div>
          <div class="text-[11px] text-dim uppercase tracking-widest font-medium">Light</div>
          <div class="text-[11px] text-dim uppercase tracking-widest font-medium">Hex</div>
          <div class="text-[11px] text-dim uppercase tracking-widest font-medium">Dark</div>
          <div class="text-[11px] text-dim uppercase tracking-widest font-medium">Hex</div>
        </div>
        <div
          v-for="item in themeComparison"
          :key="item.token"
          class="grid gap-4 py-2 border-t border-line items-center"
          style="grid-template-columns: 200px 1fr 100px 1fr 100px"
        >
          <div class="text-xs font-mono text-high">{{ item.token }}</div>
          <div class="h-8 rounded border border-line" :style="{ backgroundColor: item.lightHex }"></div>
          <div class="text-xs font-mono text-dim">{{ item.lightHex }}</div>
          <div class="h-8 rounded border border-line" :style="{ backgroundColor: item.darkHex }"></div>
          <div class="text-xs font-mono text-dim">{{ item.darkHex }}</div>
        </div>
      </div>
    </section>

    <div class="border-t border-line"></div>

    <!-- Theme Implementation -->
    <section class="px-8 lg:px-16 py-16">
      <h2 class="text-xl font-semibold text-high mb-4">Implementation</h2>
      <p class="text-sm text-low leading-relaxed max-w-2xl mb-8">
        Theming is handled entirely through CSS custom properties. No JavaScript runtime cost for color resolution.
      </p>

      <div class="grid gap-4 sm:grid-cols-3">
        <div class="p-6 border border-line">
          <h3 class="text-sm font-semibold text-high mb-2">1. Primitives Per Theme</h3>
          <p class="text-xs text-low leading-relaxed mb-3">
            <code class="text-xs font-mono bg-surface-1 px-1 py-0.5 rounded">:root</code> defines light mode primitives. <code class="text-xs font-mono bg-surface-1 px-1 py-0.5 rounded">[data-theme="dark"]</code> overrides them with dark values.
          </p>
          <div class="p-3 bg-surface-1 rounded text-xs font-mono text-low leading-relaxed">
            :root {<br>
            &nbsp;&nbsp;--color-blue-1: #fcfdff;<br>
            }<br>
            [data-theme="dark"] {<br>
            &nbsp;&nbsp;--color-blue-1: #03060b;<br>
            }
          </div>
        </div>

        <div class="p-6 border border-line">
          <h3 class="text-sm font-semibold text-high mb-2">2. Aliases Defined Once</h3>
          <p class="text-xs text-low leading-relaxed mb-3">
            Semantic aliases use <code class="text-xs font-mono bg-surface-1 px-1 py-0.5 rounded">var()</code> references. They resolve automatically when primitives change per theme. Never redefine aliases in the dark theme block.
          </p>
          <div class="p-3 bg-surface-1 rounded text-xs font-mono text-low leading-relaxed">
            :root {<br>
            &nbsp;&nbsp;--color-primary:<br>
            &nbsp;&nbsp;&nbsp;&nbsp;var(--color-blue-9);<br>
            }
          </div>
        </div>

        <div class="p-6 border border-line">
          <h3 class="text-sm font-semibold text-high mb-2">3. Toggle via Attribute</h3>
          <p class="text-xs text-low leading-relaxed mb-3">
            Theme switching sets <code class="text-xs font-mono bg-surface-1 px-1 py-0.5 rounded">data-theme</code> on <code class="text-xs font-mono bg-surface-1 px-1 py-0.5 rounded">&lt;html&gt;</code>. All tokens cascade instantly. No class list manipulation.
          </p>
          <div class="p-3 bg-surface-1 rounded text-xs font-mono text-low leading-relaxed">
            document.documentElement<br>
            &nbsp;&nbsp;.setAttribute(<br>
            &nbsp;&nbsp;&nbsp;&nbsp;'data-theme', 'dark'<br>
            &nbsp;&nbsp;);
          </div>
        </div>
      </div>
    </section>

    <div class="border-t border-line"></div>

    <!-- Live Preview -->
    <section class="px-8 lg:px-16 py-16">
      <h2 class="text-xl font-semibold text-high mb-4">Live Preview</h2>
      <p class="text-sm text-low leading-relaxed max-w-2xl mb-8">
        Toggle the theme to see all tokens update in real time. The blue accent strip stays constant across themes.
      </p>

      <div class="grid gap-4 sm:grid-cols-2">
        <!-- Surfaces preview -->
        <div class="p-6 border border-line">
          <h3 class="text-sm font-semibold text-high mb-4">Surfaces &amp; Text</h3>
          <div class="space-y-2">
            <div class="p-4 rounded" :style="{ backgroundColor: 'var(--color-page)' }">
              <span class="text-sm" :style="{ color: 'var(--color-high)' }">Page background + high text</span>
            </div>
            <div class="p-4 rounded" :style="{ backgroundColor: 'var(--color-page-subtle)' }">
              <span class="text-sm" :style="{ color: 'var(--color-low)' }">Subtle background + low text</span>
            </div>
            <div class="p-4 rounded" :style="{ backgroundColor: 'var(--color-surface-1)' }">
              <span class="text-sm" :style="{ color: 'var(--color-dim)' }">Surface-1 + dim text</span>
            </div>
          </div>
        </div>

        <!-- Status colors preview -->
        <div class="p-6 border border-line">
          <h3 class="text-sm font-semibold text-high mb-4">Status Colors</h3>
          <div class="space-y-2">
            <div class="flex gap-2">
              <div class="flex-1 h-10 rounded flex items-center justify-center text-xs font-medium" :style="{ backgroundColor: 'var(--color-primary)', color: 'var(--color-on-primary)' }">Primary</div>
              <div class="flex-1 h-10 rounded flex items-center justify-center text-xs font-medium" :style="{ backgroundColor: 'var(--color-alarm)', color: 'var(--color-on-alarm)' }">Alarm</div>
            </div>
            <div class="flex gap-2">
              <div class="flex-1 h-10 rounded flex items-center justify-center text-xs font-medium" :style="{ backgroundColor: 'var(--color-warning)', color: 'var(--color-on-warning)' }">Warning</div>
              <div class="flex-1 h-10 rounded flex items-center justify-center text-xs font-medium" :style="{ backgroundColor: 'var(--color-caution)', color: 'var(--color-on-caution)' }">Caution</div>
            </div>
            <div class="flex gap-2">
              <div class="flex-1 h-10 rounded flex items-center justify-center text-xs font-medium" :style="{ backgroundColor: 'var(--color-ok)', color: 'var(--color-on-ok)' }">Ok</div>
              <div class="flex-1 h-10 rounded flex items-center justify-center text-xs font-medium" :style="{ backgroundColor: 'var(--color-accent)', color: 'var(--color-on-accent)' }">Accent</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
