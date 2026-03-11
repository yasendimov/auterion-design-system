<script setup lang="ts">
import ColorIntroductionPage from '@/pages/color/ColorIntroductionPage.vue'
import ColorsPage from '@/pages/ColorsPage.vue'
import ColorSemanticPage from '@/pages/color/ColorSemanticPage.vue'
import ColorBlackWhitePage from '@/pages/color/ColorBlackWhitePage.vue'
</script>

<template>
  <div>
    <section id="introduction">
      <ColorIntroductionPage />
    </section>
    <section id="primitives">
      <ColorsPage />
    </section>
    <section id="semantic-tokens">
      <ColorSemanticPage />
    </section>
    <section id="black-and-white">
      <ColorBlackWhitePage />
    </section>
  </div>
</template>
