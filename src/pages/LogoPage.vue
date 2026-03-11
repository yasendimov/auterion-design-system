<script setup lang="ts">
import LogoIntroductionPage from '@/pages/logo/LogoIntroductionPage.vue'
import LogoBasicsPage from '@/pages/logo/LogoBasicsPage.vue'
import LogoLockupPage from '@/pages/logo/LogoLockupPage.vue'
import LogoScalePage from '@/pages/logo/LogoScalePage.vue'
import LogoBlackWhitePage from '@/pages/logo/LogoBlackWhitePage.vue'
import LogoPlacementPage from '@/pages/logo/LogoPlacementPage.vue'
</script>

<template>
  <div>
    <section id="introduction">
      <LogoIntroductionPage />
    </section>
    <section id="the-basics">
      <LogoBasicsPage />
    </section>
    <section id="lockup">
      <LogoLockupPage />
    </section>
    <section id="scale">
      <LogoScalePage />
    </section>
    <section id="black-and-white">
      <LogoBlackWhitePage />
    </section>
    <section id="placement">
      <LogoPlacementPage />
    </section>
  </div>
</template>
