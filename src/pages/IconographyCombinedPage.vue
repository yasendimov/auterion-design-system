<script setup lang="ts">
import IconographyIntroductionPage from '@/pages/iconography/IconographyIntroductionPage.vue'
import IconographyProductSymbolsPage from '@/pages/iconography/IconographyProductSymbolsPage.vue'
import IconographyFunctionalIconsPage from '@/pages/iconography/IconographyFunctionalIconsPage.vue'
</script>

<template>
  <div>
    <section id="introduction">
      <IconographyIntroductionPage />
    </section>
    <section id="product-symbols">
      <IconographyProductSymbolsPage />
    </section>
    <section id="functional-icons">
      <IconographyFunctionalIconsPage />
    </section>
  </div>
</template>
