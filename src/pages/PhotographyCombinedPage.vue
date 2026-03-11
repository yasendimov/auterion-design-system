<script setup lang="ts">
import PhotographyArtDirectionPage from '@/pages/photography/PhotographyArtDirectionPage.vue'
import PhotographyYouTubePage from '@/pages/photography/PhotographyYouTubePage.vue'
import PhotographySocialMediaPage from '@/pages/photography/PhotographySocialMediaPage.vue'
import PhotographyBlogPage from '@/pages/photography/PhotographyBlogPage.vue'
</script>

<template>
  <div>
    <section id="art-direction">
      <PhotographyArtDirectionPage />
    </section>
    <section id="youtube">
      <PhotographyYouTubePage />
    </section>
    <section id="social-media">
      <PhotographySocialMediaPage />
    </section>
    <section id="blog">
      <PhotographyBlogPage />
    </section>
  </div>
</template>
