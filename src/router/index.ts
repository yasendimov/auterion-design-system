import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/pages/HomePage.vue'
import ColorsPage from '@/pages/ColorsPage.vue'
import TypographyPage from '@/pages/TypographyPage.vue'
import PlaceholderPage from '@/pages/PlaceholderPage.vue'
import BrandIdeaPage from '@/pages/BrandIdeaPage.vue'
import VoicePrinciplesPage from '@/pages/VoicePrinciplesPage.vue'
import WritingAuterionPage from '@/pages/WritingAuterionPage.vue'
import FormattingPage from '@/pages/FormattingPage.vue'

function placeholder(section: string, title: string) {
  return {
    component: PlaceholderPage,
    meta: { section, title },
  }
}

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
    },

    // Strategy
    { path: '/strategy/brand-idea', component: BrandIdeaPage, meta: { section: 'Strategy', title: 'Brand Idea' } },
    { path: '/strategy/voice-principles', component: VoicePrinciplesPage, meta: { section: 'Strategy', title: 'Voice Principles' } },
    { path: '/strategy/writing', component: WritingAuterionPage, meta: { section: 'Strategy', title: 'Writing Auterion' } },
    { path: '/strategy/formatting', component: FormattingPage, meta: { section: 'Strategy', title: 'Formatting & Structure' } },

    // Logo
    { path: '/logo/introduction', ...placeholder('Logo', 'Introduction') },
    { path: '/logo/the-basics', ...placeholder('Logo', 'The Basics') },
    { path: '/logo/lockup', ...placeholder('Logo', 'Lockup') },
    { path: '/logo/scale', ...placeholder('Logo', 'Scale') },
    { path: '/logo/black-and-white', ...placeholder('Logo', 'Black & White') },
    { path: '/logo/placement', ...placeholder('Logo', 'Placement') },

    // Typography
    {
      path: '/typography/introduction',
      name: 'typography',
      component: TypographyPage,
      meta: { section: 'Typography', title: 'Introduction' },
    },
    { path: '/typography/using-type', ...placeholder('Typography', 'Using Type') },
    { path: '/typography/formatting', ...placeholder('Typography', 'Formatting & Structure') },

    // Color
    { path: '/color/introduction', ...placeholder('Color', 'Introduction') },
    {
      path: '/color/primitives',
      name: 'color-primitives',
      component: ColorsPage,
      meta: { section: 'Color', title: 'Primitives' },
    },
    { path: '/color/semantic', ...placeholder('Color', 'Semantic Tokens') },
    { path: '/color/black-and-white', ...placeholder('Color', 'Black & White') },

    // Photography
    { path: '/photography/art-direction', ...placeholder('Photography', 'Art Direction') },
    { path: '/photography/youtube', ...placeholder('Photography', 'YouTube Guide') },
    { path: '/photography/social-media', ...placeholder('Photography', 'Social Media') },
    { path: '/photography/blog', ...placeholder('Photography', 'Blog Guidelines') },

    // Iconography
    { path: '/iconography/introduction', ...placeholder('Iconography', 'Introduction') },
    { path: '/iconography/product-symbols', ...placeholder('Iconography', 'Product Symbols') },
    { path: '/iconography/functional-icons', ...placeholder('Iconography', 'Functional Icons') },

    // Language & Style
    { path: '/language/voice-principles', ...placeholder('Language & Style', 'Voice Principles') },
    { path: '/language/writing', ...placeholder('Language & Style', 'Writing Auterion') },
    { path: '/language/product-names', ...placeholder('Language & Style', 'Product Names') },
    { path: '/language/blog', ...placeholder('Language & Style', 'Blog Guidelines') },
    { path: '/language/social-media', ...placeholder('Language & Style', 'Social Media') },

    // Gallery
    { path: '/gallery/introduction', ...placeholder('Gallery', 'Introduction') },
    { path: '/gallery/marketing', ...placeholder('Gallery', 'Marketing') },
    { path: '/gallery/applications', ...placeholder('Gallery', 'Applications') },
  ],
})

export default router
