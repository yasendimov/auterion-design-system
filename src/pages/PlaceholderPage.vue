<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()

const title = route.meta.title as string ?? 'Page'
const section = route.meta.section as string ?? ''
</script>

<template>
  <div class="p-8 max-w-4xl">
    <header class="mb-12">
      <p v-if="section" class="text-xs text-text-tertiary uppercase tracking-wider font-medium mb-2">{{ section }}</p>
      <h1 class="text-3xl font-bold text-text-primary">{{ title }}</h1>
      <p class="text-text-tertiary mt-2">This section is under construction.</p>
    </header>

    <div class="rounded-lg border border-border-subtle bg-surface-1 p-8 text-center">
      <p class="text-text-tertiary text-sm">Content coming soon.</p>
    </div>
  </div>
</template>
