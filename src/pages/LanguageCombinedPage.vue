<script setup lang="ts">
import LanguageVoicePrinciplesPage from '@/pages/language/LanguageVoicePrinciplesPage.vue'
import LanguageWritingPage from '@/pages/language/LanguageWritingPage.vue'
import LanguageProductNamesPage from '@/pages/language/LanguageProductNamesPage.vue'
import LanguageBlogPage from '@/pages/language/LanguageBlogPage.vue'
import LanguageSocialMediaPage from '@/pages/language/LanguageSocialMediaPage.vue'
</script>

<template>
  <div>
    <section id="voice-principles">
      <LanguageVoicePrinciplesPage />
    </section>
    <section id="writing-auterion">
      <LanguageWritingPage />
    </section>
    <section id="product-names">
      <LanguageProductNamesPage />
    </section>
    <section id="blog">
      <LanguageBlogPage />
    </section>
    <section id="social-media">
      <LanguageSocialMediaPage />
    </section>
  </div>
</template>
