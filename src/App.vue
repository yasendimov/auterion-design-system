<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import DefaultLayout from '@/layouts/DefaultLayout.vue'

const route = useRoute()
const isStandalone = computed(() => route.meta.standalone === true)
</script>

<template>
  <DefaultLayout v-if="!isStandalone" />
  <router-view v-else />
</template>
