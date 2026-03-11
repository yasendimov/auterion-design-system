<script setup lang="ts">
</script>

<template>
  <div>
    <header class="px-8 lg:px-16 pt-16 pb-12">
      <p class="text-[11px] text-dim uppercase tracking-widest font-medium mb-3">Logo</p>
      <h1 class="text-5xl font-medium text-high">Lockups</h1>
      <p class="text-base text-low mt-4">Logo lockups define the fixed spatial relationships between the symbol, wordmark, and optional tagline. Never alter the proportions or spacing within a lockup.</p>
    </header>

    <div class="border-t border-line"></div>

    <!-- Horizontal Lockup -->
    <section class="px-8 lg:px-16 py-16">
      <h2 class="text-xl font-semibold text-high mb-1">Horizontal Lockup</h2>
      <p class="text-sm text-low mb-8">The default lockup arrangement. The symbol sits to the left of the wordmark with a fixed gap equal to 50% of the symbol width. Use this in most applications, especially wide formats like website headers, presentation title slides, and signage.</p>

      <div class="aspect-3/1 bg-surface-1 flex items-center justify-center border border-line ">
        <span class="text-sm text-dim">Horizontal lockup with spacing annotations</span>
      </div>

      <div class="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div class="p-6 border border-line">
          <p class="text-xs text-dim uppercase tracking-wider mb-1">Symbol-to-wordmark gap</p>
          <p class="text-sm font-semibold text-high">0.5x symbol width</p>
        </div>
        <div class="p-6 border border-line">
          <p class="text-xs text-dim uppercase tracking-wider mb-1">Vertical alignment</p>
          <p class="text-sm font-semibold text-high">Optical center</p>
        </div>
        <div class="p-6 border border-line">
          <p class="text-xs text-dim uppercase tracking-wider mb-1">Aspect ratio</p>
          <p class="text-sm font-semibold text-high">Approximately 3:1</p>
        </div>
      </div>
    </section>

    <div class="border-t border-line"></div>

    <!-- Vertical Lockup -->
    <section class="px-8 lg:px-16 py-16">
      <h2 class="text-xl font-semibold text-high mb-1">Vertical Lockup</h2>
      <p class="text-sm text-low mb-8">The stacked lockup places the symbol above the wordmark, both centered on the vertical axis. Use this when the layout favors a square or portrait format, such as app splash screens, social media posts, or square promotional materials.</p>

      <div class="max-w-md mx-auto">
        <div class="aspect-square bg-surface-1 flex items-center justify-center border border-line ">
          <span class="text-sm text-dim">Vertical lockup with spacing annotations</span>
        </div>
      </div>

      <div class="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div class="p-6 border border-line">
          <p class="text-xs text-dim uppercase tracking-wider mb-1">Symbol-to-wordmark gap</p>
          <p class="text-sm font-semibold text-high">0.75x symbol height</p>
        </div>
        <div class="p-6 border border-line">
          <p class="text-xs text-dim uppercase tracking-wider mb-1">Alignment</p>
          <p class="text-sm font-semibold text-high">Center-aligned</p>
        </div>
        <div class="p-6 border border-line">
          <p class="text-xs text-dim uppercase tracking-wider mb-1">Aspect ratio</p>
          <p class="text-sm font-semibold text-high">Approximately 1:1</p>
        </div>
      </div>
    </section>

    <div class="border-t border-line"></div>

    <!-- Tagline Lockup -->
    <section class="px-8 lg:px-16 py-16">
      <h2 class="text-xl font-semibold text-high mb-1">Tagline Lockup</h2>
      <p class="text-sm text-low mb-8">The tagline "Platform for Autonomous Mass" can be included below the horizontal lockup. The tagline is set in a lighter weight and smaller size, separated by a thin horizontal rule. Use this only in hero contexts where there is ample space and the brand message needs reinforcement.</p>

      <div class="aspect-3/1 bg-surface-1 flex items-center justify-center border border-line ">
        <span class="text-sm text-dim">Tagline lockup: "Platform for Autonomous Mass"</span>
      </div>

      <div class="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="p-6 border border-line">
          <h3 class="text-sm font-semibold text-high mb-2">Do</h3>
          <ul class="text-sm text-low space-y-1.5 list-disc list-inside">
            <li>Use in hero banners and keynote title slides</li>
            <li>Use in trade show booth backdrops</li>
            <li>Maintain the exact tagline text as written</li>
          </ul>
        </div>
        <div class="p-6 border border-line">
          <h3 class="text-sm font-semibold text-high mb-2">Don't</h3>
          <ul class="text-sm text-low space-y-1.5 list-disc list-inside">
            <li>Use in navigation bars or small UI elements</li>
            <li>Modify the tagline wording</li>
            <li>Combine with the vertical lockup</li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>
