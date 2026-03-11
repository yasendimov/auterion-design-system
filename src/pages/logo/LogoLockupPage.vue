<script setup lang="ts">
</script>

<template>
  <div>
    <header class="px-8 lg:px-16 pt-16 pb-12">
      <p class="text-[11px] text-zinc-400 dark:text-zinc-500 uppercase tracking-widest font-medium mb-3">Logo</p>
      <h1 class="text-5xl font-medium text-zinc-900 dark:text-white">Lockups</h1>
      <p class="text-base text-zinc-500 dark:text-zinc-400 mt-4">Logo lockups define the fixed spatial relationships between the symbol, wordmark, and optional tagline. Never alter the proportions or spacing within a lockup.</p>
    </header>

    <div class="border-t border-zinc-200 dark:border-zinc-800"></div>

    <!-- Horizontal Lockup -->
    <section class="px-8 lg:px-16 py-16">
      <h2 class="text-xl font-semibold text-zinc-900 dark:text-white mb-1">Horizontal Lockup</h2>
      <p class="text-sm text-zinc-500 dark:text-zinc-400 mb-8">The default lockup arrangement. The symbol sits to the left of the wordmark with a fixed gap equal to 50% of the symbol width. Use this in most applications, especially wide formats like website headers, presentation title slides, and signage.</p>

      <div class="aspect-[3/1] bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center border border-zinc-200 dark:border-zinc-700">
        <span class="text-sm text-zinc-400 dark:text-zinc-500">Horizontal lockup with spacing annotations</span>
      </div>

      <div class="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div class="p-6 border border-zinc-200 dark:border-zinc-800">
          <p class="text-xs text-zinc-400 dark:text-zinc-500 uppercase tracking-wider mb-1">Symbol-to-wordmark gap</p>
          <p class="text-sm font-semibold text-zinc-900 dark:text-white">0.5x symbol width</p>
        </div>
        <div class="p-6 border border-zinc-200 dark:border-zinc-800">
          <p class="text-xs text-zinc-400 dark:text-zinc-500 uppercase tracking-wider mb-1">Vertical alignment</p>
          <p class="text-sm font-semibold text-zinc-900 dark:text-white">Optical center</p>
        </div>
        <div class="p-6 border border-zinc-200 dark:border-zinc-800">
          <p class="text-xs text-zinc-400 dark:text-zinc-500 uppercase tracking-wider mb-1">Aspect ratio</p>
          <p class="text-sm font-semibold text-zinc-900 dark:text-white">Approximately 3:1</p>
        </div>
      </div>
    </section>

    <div class="border-t border-zinc-200 dark:border-zinc-800"></div>

    <!-- Vertical Lockup -->
    <section class="px-8 lg:px-16 py-16">
      <h2 class="text-xl font-semibold text-zinc-900 dark:text-white mb-1">Vertical Lockup</h2>
      <p class="text-sm text-zinc-500 dark:text-zinc-400 mb-8">The stacked lockup places the symbol above the wordmark, both centered on the vertical axis. Use this when the layout favors a square or portrait format, such as app splash screens, social media posts, or square promotional materials.</p>

      <div class="max-w-md mx-auto">
        <div class="aspect-square bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center border border-zinc-200 dark:border-zinc-700">
          <span class="text-sm text-zinc-400 dark:text-zinc-500">Vertical lockup with spacing annotations</span>
        </div>
      </div>

      <div class="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div class="p-6 border border-zinc-200 dark:border-zinc-800">
          <p class="text-xs text-zinc-400 dark:text-zinc-500 uppercase tracking-wider mb-1">Symbol-to-wordmark gap</p>
          <p class="text-sm font-semibold text-zinc-900 dark:text-white">0.75x symbol height</p>
        </div>
        <div class="p-6 border border-zinc-200 dark:border-zinc-800">
          <p class="text-xs text-zinc-400 dark:text-zinc-500 uppercase tracking-wider mb-1">Alignment</p>
          <p class="text-sm font-semibold text-zinc-900 dark:text-white">Center-aligned</p>
        </div>
        <div class="p-6 border border-zinc-200 dark:border-zinc-800">
          <p class="text-xs text-zinc-400 dark:text-zinc-500 uppercase tracking-wider mb-1">Aspect ratio</p>
          <p class="text-sm font-semibold text-zinc-900 dark:text-white">Approximately 1:1</p>
        </div>
      </div>
    </section>

    <div class="border-t border-zinc-200 dark:border-zinc-800"></div>

    <!-- Tagline Lockup -->
    <section class="px-8 lg:px-16 py-16">
      <h2 class="text-xl font-semibold text-zinc-900 dark:text-white mb-1">Tagline Lockup</h2>
      <p class="text-sm text-zinc-500 dark:text-zinc-400 mb-8">The tagline "Platform for Autonomous Mass" can be included below the horizontal lockup. The tagline is set in a lighter weight and smaller size, separated by a thin horizontal rule. Use this only in hero contexts where there is ample space and the brand message needs reinforcement.</p>

      <div class="aspect-[3/1] bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center border border-zinc-200 dark:border-zinc-700">
        <span class="text-sm text-zinc-400 dark:text-zinc-500">Tagline lockup: "Platform for Autonomous Mass"</span>
      </div>

      <div class="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="p-6 border border-zinc-200 dark:border-zinc-800">
          <h3 class="text-sm font-semibold text-zinc-900 dark:text-white mb-2">Do</h3>
          <ul class="text-sm text-zinc-500 dark:text-zinc-400 space-y-1.5 list-disc list-inside">
            <li>Use in hero banners and keynote title slides</li>
            <li>Use in trade show booth backdrops</li>
            <li>Maintain the exact tagline text as written</li>
          </ul>
        </div>
        <div class="p-6 border border-zinc-200 dark:border-zinc-800">
          <h3 class="text-sm font-semibold text-zinc-900 dark:text-white mb-2">Don't</h3>
          <ul class="text-sm text-zinc-500 dark:text-zinc-400 space-y-1.5 list-disc list-inside">
            <li>Use in navigation bars or small UI elements</li>
            <li>Modify the tagline wording</li>
            <li>Combine with the vertical lockup</li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>
