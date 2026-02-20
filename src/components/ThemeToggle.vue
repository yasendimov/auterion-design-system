<script setup lang="ts">
import { onMounted } from 'vue'
import { useTheme } from '@/composables/useTheme'

const { isDark, initialize, toggle } = useTheme()

onMounted(() => {
  initialize()
})
</script>

<template>
  <button
    @click="toggle"
    class="w-full px-3 py-1.5 rounded-lg bg-surface-2 border border-border-default
           text-text-primary hover:bg-surface-3 transition-colors text-xs font-medium
           text-left"
  >
    {{ isDark ? 'Light mode' : 'Dark mode' }}
  </button>
</template>
