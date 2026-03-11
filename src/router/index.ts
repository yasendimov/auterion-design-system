import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/pages/HomePage.vue'
import StrategyPage from '@/pages/StrategyPage.vue'
import LogoPage from '@/pages/LogoPage.vue'
import TypographyCombinedPage from '@/pages/TypographyCombinedPage.vue'
import ColorCombinedPage from '@/pages/ColorCombinedPage.vue'
import PhotographyCombinedPage from '@/pages/PhotographyCombinedPage.vue'
import IconographyCombinedPage from '@/pages/IconographyCombinedPage.vue'
import LanguageCombinedPage from '@/pages/LanguageCombinedPage.vue'
import GalleryCombinedPage from '@/pages/GalleryCombinedPage.vue'
import DesignSystemMarketingPage from '@/pages/designsystem/MarketingPage.vue'
import DesignSystemApplicationsPage from '@/pages/designsystem/ApplicationsPage.vue'
import AppHomeScreenPage from '@/pages/designsystem/AppHomeScreenPage.vue'
import AppAmcPage from '@/pages/designsystem/AppAmcPage.vue'
import DesignSystemWebsitePage from '@/pages/designsystem/WebsitePage.vue'
import WebsiteLayout from '@/pages/website/WebsiteLayout.vue'
import WebsiteHomePage from '@/pages/website/WebsiteHomePage.vue'
import WebsiteProductPage from '@/pages/website/WebsiteProductPage.vue'
import WebsiteCapabilitiesPage from '@/pages/website/WebsiteCapabilitiesPage.vue'
import WebsitePartnersPage from '@/pages/website/WebsitePartnersPage.vue'
import WebsiteCareersPage from '@/pages/website/WebsiteCareersPage.vue'
import WebsiteCompanyPage from '@/pages/website/WebsiteCompanyPage.vue'

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior(to) {
    if (to.hash) {
      return { el: to.hash, behavior: 'smooth' }
    }
    return { top: 0 }
  },
  routes: [
    { path: '/', name: 'home', component: HomePage },

    // Content sections — single page per section, anchors for sub-sections
    { path: '/strategy', component: StrategyPage, meta: { section: 'Strategy' } },
    { path: '/logo', component: LogoPage, meta: { section: 'Logo' } },
    { path: '/typography', component: TypographyCombinedPage, meta: { section: 'Typography' } },
    { path: '/color', component: ColorCombinedPage, meta: { section: 'Color' } },
    { path: '/photography', component: PhotographyCombinedPage, meta: { section: 'Photography' } },
    { path: '/iconography', component: IconographyCombinedPage, meta: { section: 'Iconography' } },
    { path: '/language', component: LanguageCombinedPage, meta: { section: 'Language & Style' } },
    { path: '/gallery', component: GalleryCombinedPage, meta: { section: 'Gallery' } },

    // Gallery sub-pages
    { path: '/gallery/marketing', component: DesignSystemMarketingPage, meta: { section: 'Gallery', title: 'Marketing' } },
    { path: '/gallery/applications', component: DesignSystemApplicationsPage, meta: { section: 'Gallery', title: 'Applications' } },
    { path: '/gallery/applications/home-screen', component: AppHomeScreenPage, meta: { section: 'Gallery', title: 'Applications', standalone: true } },
    { path: '/gallery/applications/amc', component: AppAmcPage, meta: { section: 'Gallery', title: 'Applications', standalone: true } },
    { path: '/gallery/website-overview', component: DesignSystemWebsitePage, meta: { section: 'Gallery', title: 'Website' } },

    // Website (nested routes with shared layout)
    {
      path: '/gallery/website',
      component: WebsiteLayout,
      meta: { section: 'Design System', title: 'Website', standalone: true },
      children: [
        { path: '', component: WebsiteHomePage },
        { path: 'product', component: WebsiteProductPage },
        { path: 'capabilities', component: WebsiteCapabilitiesPage },
        { path: 'partners', component: WebsitePartnersPage },
        { path: 'careers', component: WebsiteCareersPage },
        { path: 'company', component: WebsiteCompanyPage },
      ],
    },
  ],
})

export default router
