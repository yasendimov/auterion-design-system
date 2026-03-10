# External Integrations

**Analysis Date:** 2026-03-10

## APIs & External Services

**None detected.**

This is a static design system documentation site. No external APIs are integrated. All content is client-side rendered and self-contained.

## Data Storage

**Databases:**
- None - Client-side only SPA with no persistent data storage

**File Storage:**
- Self-hosted only - Static assets stored locally in `src/assets/`
- No cloud storage integration

**Caching:**
- Browser cache only - Handled by HTTP cache headers on static hosting

## Authentication & Identity

**Auth Provider:**
- None - This is a public documentation site with no authentication

**User Management:**
- Not applicable - No user accounts or identity management

## Monitoring & Observability

**Error Tracking:**
- None detected - No error tracking service integration

**Logs:**
- Console logging only via `console.*` (if present in code)
- No centralized log aggregation

**Analytics:**
- Not detected - No tracking or analytics services integrated

## CI/CD & Deployment

**Hosting:**
- Static file hosting required (no runtime)
- Suitable for: Vercel, Netlify, GitHub Pages, AWS S3 + CloudFront, etc.

**CI Pipeline:**
- Not configured - No CI/CD workflows detected
- Suggested: Automated type checking and build validation on PR/push

**Build Output:**
- `vite build` produces static files in `dist/` directory
- All assets (CSS, JS, fonts) bundled by Vite

## Environment Configuration

**Required env vars:**
- None - Client-side only, no server-side configuration needed

**Secrets location:**
- Not applicable - No secrets required

## Webhooks & Callbacks

**Incoming:**
- None - Static site, no webhook endpoints

**Outgoing:**
- None - No external services called from client

## Content & Data Flow

**Data Sources:**
- All design specification content is embedded in Vue pages
- Color tokens: `src/assets/tokens/colors.css` (CSS custom properties)
- Typography tokens: `src/assets/tokens/typography.css` (CSS custom properties)
- Design documentation: Hardcoded in page components in `src/pages/`

**Client-Side Navigation:**
- Vue Router handles all routing (client-side history)
- No server-side routes or API calls
- Route definitions in `src/router/index.ts`

**Theme Storage:**
- Theme preference stored in DOM attribute: `data-theme` on `<html>` element
- No persistent storage (resets on page refresh)
- Managed by `src/composables/useTheme.ts`

## Component Libraries Used

**@headlessui/vue:**
- Purpose: Unstyled, accessible interactive component primitives
- Location: Only used in `src/pages/WebsitePage.vue`
- Components leveraged: Dialog, Menu, Disclosure, Tab, etc. (as needed in gallery page)

**@heroicons/vue:**
- Purpose: Icon library with 24 icon sets
- Location: Only used in `src/pages/WebsitePage.vue`
- Icons imported: `outline` set (`@heroicons/vue/24/outline`)

## Font Resources

**Inter Variable:**
- Source: Self-hosted official font from rsms/inter v4.1
- File: `src/assets/fonts/InterVariable.woff2`
- Features: OpenType features enabled globally
  - Stylistic alternates: ss01, ss07, ss08
  - Character variants: cv02, cv03, cv04, cv06, cv09, cv12, cv13
- Font display: `swap` for optimal rendering

## Third-Party Dependencies Summary

**No external API integrations.** This is a fully self-contained design documentation site. All dependencies are development tools and UI libraries used for rendering the design system documentation in the browser.

---

*Integration audit: 2026-03-10*
