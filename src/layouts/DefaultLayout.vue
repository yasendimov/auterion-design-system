<script setup lang="ts">
import TheSidebar from '@/components/TheSidebar.vue'
</script>

<template>
  <div class="flex min-h-screen bg-page-bg text-text-primary transition-colors duration-200">
    <TheSidebar class="w-64 shrink-0" />
    <main class="flex-1 min-w-0 overflow-y-auto">
      <router-view />
    </main>
  </div>
</template>
