<script setup lang="ts">
import TheSidebar from '@/components/TheSidebar.vue'
</script>

<template>
  <div class="flex min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-white">
    <TheSidebar />
    <main class="flex-1 min-w-0 overflow-y-auto">
      <router-view />
    </main>
  </div>
</template>
