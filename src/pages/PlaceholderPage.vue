<script setup lang="ts">
import { useRoute } from 'vue-router'
import { computed } from 'vue'

const route = useRoute()
const title = route.meta.title as string ?? 'Page'
const section = route.meta.section as string ?? ''
const description = computed(() => (route.meta.description as string) ?? '')
</script>

<template>
  <div>
    <header class="px-8 lg:px-16 pt-16 pb-12">
      <p v-if="section" class="text-[11px] text-dim uppercase tracking-widest font-medium mb-3">{{ section }}</p>
      <h1 class="text-5xl font-medium text-high">{{ title }}</h1>
      <p v-if="description" class="text-base text-low mt-4 max-w-xl leading-relaxed">{{ description }}</p>
    </header>

    <div class="border-t border-line"></div>

    <section class="px-8 lg:px-16 py-16">
      <div class="border border-dashed border-line-hover p-10 text-center">
        <p class="text-sm text-dim">Content coming soon.</p>
      </div>
    </section>
  </div>
</template>
