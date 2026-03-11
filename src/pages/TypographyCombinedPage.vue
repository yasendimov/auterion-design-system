<script setup lang="ts">
import TypographyPage from '@/pages/TypographyPage.vue'
import TypographyUsingTypePage from '@/pages/typography/TypographyUsingTypePage.vue'
import TypographyFormattingPage from '@/pages/typography/TypographyFormattingPage.vue'
</script>

<template>
  <div>
    <section id="type-scale">
      <TypographyPage />
    </section>
    <section id="using-type">
      <TypographyUsingTypePage />
    </section>
    <section id="formatting">
      <TypographyFormattingPage />
    </section>
  </div>
</template>
