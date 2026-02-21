# External Integrations

**Analysis Date:** 2026-02-21

## APIs & External Services

**Not detected** - This is a design system UI with no external API integrations. All functionality is client-side.

## Data Storage

**Databases:** Not applicable - No persistent backend or database layer.

**File Storage:** Local filesystem only - No cloud storage integration.

**Caching:** Browser-based only - Uses browser local storage for theme preference (via `data-theme` attribute).

## Authentication & Identity

**Auth Provider:** Not applicable - No authentication system. Design system is publicly accessible.

## Monitoring & Observability

**Error Tracking:** Not detected

**Logs:** Client-side console logging only (standard JavaScript `console` API if needed in components)

## CI/CD & Deployment

**Hosting:** Not specified in codebase - Designed for static hosting (SPA output from `pnpm build` outputs to `dist/`)

**CI Pipeline:** Not detected - No CI/CD configuration files found in repository

## Environment Configuration

**Required env vars:** None - Application runs with zero environment variable dependencies.

**Secrets location:** Not applicable

## Webhooks & Callbacks

**Incoming:** Not applicable

**Outgoing:** Not applicable

## Theme Persistence

**Storage:** Browser's HTML `data-theme` attribute (read/write via DOM)

**Mechanism:**
- Initial state: `data-theme="dark"` set in `index.html` (dark-first design)
- Toggle: `useTheme()` composable in `src/composables/useTheme.ts` manages state
- Sync: Reads/writes to `document.documentElement.getAttribute('data-theme')`
- CSS integration: Custom variant `&:where([data-theme="dark"], [data-theme="dark"] *)` targets dark theme in `src/assets/main.css`

## Design Token System (Internal)

**Token architecture:** Two-layer CSS custom properties system

**Primitives:** Defined in `src/assets/tokens/colors.css` at `:root` (light) and `[data-theme="dark"]` (dark)

**Semantic aliases:** Defined once at `:root` using `var()` references (automatically resolve per theme)

**Tailwind bridge:** `@theme` block in `src/assets/main.css` exposes tokens to Tailwind utility classes

**No external token management service** - All tokens are CSS custom properties in committed source files

## Font CDN

**Font delivery:** Self-hosted only - No external font service (e.g., Google Fonts)

- Inter Variable woff2 file: `src/assets/fonts/InterVariable.woff2` (352 KB)
- Declared with `font-display: swap` for optimal load performance

## Routing

**Router:** Client-side Vue Router 5.0.3

**History mode:** Web History API (not hash-based)

**Navigation:** Fully client-side, no server routing required

---

*Integration audit: 2026-02-21*
