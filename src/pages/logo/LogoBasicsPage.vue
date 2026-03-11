<script setup lang="ts">
</script>

<template>
  <div>
    <header class="px-8 lg:px-16 pt-16 pb-12">
      <p class="text-[11px] text-dim uppercase tracking-widest font-medium mb-3">Logo</p>
      <h1 class="text-5xl font-medium text-high">Basics</h1>
      <p class="text-base text-low mt-4">The Auterion logo exists in three forms. Choose the right variant based on context, available space, and surrounding content.</p>
    </header>

    <div class="border-t border-line"></div>

    <!-- Primary Logo -->
    <section class="px-8 lg:px-16 py-16">
      <h2 class="text-xl font-semibold text-high mb-1">Primary Logo</h2>
      <p class="text-sm text-low mb-8">The primary logo combines the symbol and wordmark. This is the preferred form and should be used whenever space allows. It provides the strongest brand recognition and should appear on all primary touchpoints.</p>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <div class="aspect-[3/1] bg-surface-1 flex items-center justify-center border border-line ">
            <span class="text-sm text-dim">Primary logo, dark background</span>
          </div>
          <p class="text-xs text-dim mt-2">On dark backgrounds</p>
        </div>
        <div>
          <div class="aspect-[3/1] bg-surface-1 flex items-center justify-center border border-line ">
            <span class="text-sm text-dim">Primary logo, light background</span>
          </div>
          <p class="text-xs text-dim mt-2">On light backgrounds</p>
        </div>
      </div>

      <div class="mt-6 p-6 border border-line">
        <h3 class="text-sm font-semibold text-high mb-2">When to use</h3>
        <ul class="text-sm text-low space-y-1.5 list-disc list-inside">
          <li>Website headers and footers</li>
          <li>Presentations and pitch decks</li>
          <li>Marketing collateral and print materials</li>
          <li>Trade show displays and signage</li>
          <li>Product packaging and documentation</li>
        </ul>
      </div>
    </section>

    <div class="border-t border-line"></div>

    <!-- Symbol Only -->
    <section class="px-8 lg:px-16 py-16">
      <h2 class="text-xl font-semibold text-high mb-1">Symbol Only</h2>
      <p class="text-sm text-low mb-8">The symbol can be used independently when the Auterion brand is already established in context or when space is limited. It should never replace the primary logo as a first introduction to the brand.</p>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <div class="aspect-square bg-surface-1 flex items-center justify-center border border-line ">
            <span class="text-sm text-dim">Symbol, full color</span>
          </div>
          <p class="text-xs text-dim mt-2">Full color</p>
        </div>
        <div>
          <div class="aspect-square bg-surface-1 flex items-center justify-center border border-line ">
            <span class="text-sm text-dim">Symbol, white</span>
          </div>
          <p class="text-xs text-dim mt-2">White (on dark)</p>
        </div>
        <div>
          <div class="aspect-square bg-surface-1 flex items-center justify-center border border-line ">
            <span class="text-sm text-dim">Symbol, black</span>
          </div>
          <p class="text-xs text-dim mt-2">Black (on light)</p>
        </div>
      </div>

      <div class="mt-6 p-6 border border-line">
        <h3 class="text-sm font-semibold text-high mb-2">When to use</h3>
        <ul class="text-sm text-low space-y-1.5 list-disc list-inside">
          <li>App icons and favicons</li>
          <li>Social media profile images</li>
          <li>Hardware badges and physical labels</li>
          <li>Watermarks on imagery and video</li>
          <li>Contexts where the brand name already appears nearby</li>
        </ul>
      </div>
    </section>

    <div class="border-t border-line"></div>

    <!-- Wordmark Only -->
    <section class="px-8 lg:px-16 py-16">
      <h2 class="text-xl font-semibold text-high mb-1">Wordmark Only</h2>
      <p class="text-sm text-low mb-8">The wordmark without the symbol is used in rare cases where a text-only treatment is required, such as inline text references or narrow horizontal spaces where the full logo would be too small.</p>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <div class="aspect-[4/1] bg-surface-1 flex items-center justify-center border border-line ">
            <span class="text-sm text-dim">Wordmark, dark background</span>
          </div>
          <p class="text-xs text-dim mt-2">On dark backgrounds</p>
        </div>
        <div>
          <div class="aspect-[4/1] bg-surface-1 flex items-center justify-center border border-line ">
            <span class="text-sm text-dim">Wordmark, light background</span>
          </div>
          <p class="text-xs text-dim mt-2">On light backgrounds</p>
        </div>
      </div>

      <div class="mt-6 p-6 border border-line">
        <h3 class="text-sm font-semibold text-high mb-2">When to use</h3>
        <ul class="text-sm text-low space-y-1.5 list-disc list-inside">
          <li>Legal documents and contracts</li>
          <li>Narrow navigation bars where the symbol is already present elsewhere</li>
          <li>Text-heavy editorial contexts</li>
        </ul>
      </div>
    </section>
  </div>
</template>
