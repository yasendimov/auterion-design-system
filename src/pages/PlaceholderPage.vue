<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()
const title = route.meta.title as string ?? 'Page'
const section = route.meta.section as string ?? ''
</script>

<template>
  <div>
    <header class="px-8 lg:px-16 pt-16 pb-12">
      <p v-if="section" class="text-[11px] text-zinc-400 dark:text-zinc-500 uppercase tracking-widest font-medium mb-3">{{ section }}</p>
      <h1 class="text-4xl font-semibold text-zinc-900 dark:text-white">{{ title }}</h1>
      <p class="text-base text-zinc-500 dark:text-zinc-400 mt-4">This section is under construction.</p>
    </header>

    <div class="border-t border-zinc-200 dark:border-zinc-800"></div>

    <section class="px-8 lg:px-16 py-16">
      <div class="rounded-lg border border-zinc-200 dark:border-zinc-800 p-10 text-center">
        <p class="text-sm text-zinc-400 dark:text-zinc-500">Content coming soon.</p>
      </div>
    </section>
  </div>
</template>
