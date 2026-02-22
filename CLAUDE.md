# Auterion Design System

Single source of truth for all visual and interaction design across Auterion's brand, marketing, and product surfaces. Built in Vue 3 with TailwindCSS and TypeScript. Dark-mode-first.

The system's goal is to be usable enough that anyone at Auterion — designer or developer — can build whatever they need with Claude Code or Figma Make, without breaking visual or brand consistency.

## Commands

- `pnpm dev` — Start dev server (http://localhost:5173)
- `pnpm build` — Type-check and build (`vue-tsc -b && vite build`)
- `pnpm preview` — Preview production build

## Tech Stack

- **Vue 3** + **Vue Router 5** (SPA, client-side history), Composition API with `<script setup>`
- **Vite 6** with `@vitejs/plugin-vue` and `@tailwindcss/vite`
- **Tailwind CSS v4** — CSS-first config via `@theme` in `src/assets/main.css`
- **TypeScript** — Strict mode, `noUnusedLocals`, `noUnusedParameters`
- **pnpm** as package manager
- **Inter Variable** — Self-hosted official woff2 (not @fontsource)
- **Icons:** Font Awesome
- **Colors:** Radix UI color system (primitive tokens) + Auterion custom scales

## Current Project Structure

```
src/
  assets/
    main.css              # Tailwind imports + @theme token bridge
    tokens/colors.css     # Primitive + semantic color tokens (CSS custom props)
    tokens/typography.css # Type scale, weights, line heights, tracking
    fonts/                # Self-hosted InterVariable.woff2
  components/             # Shared Vue components (TheSidebar, ThemeToggle)
  composables/            # Vue composables (useTheme)
  layouts/                # Page layouts (DefaultLayout)
  pages/                  # Route-level page components
  router/index.ts         # All route definitions
```

## Target Architecture

As the system grows, components and pages should follow this structure:

```
src/
├── foundations/          # Token definitions, base styles
│   ├── colors/
│   ├── typography/
│   ├── spacing/
│   └── motion/
├── components/
│   ├── marketing/        # Hero, Feature, CTA, Grid, Pricing, Header,
│   │                     # Newsletter, Stats, Testimonials, Blog, Contact,
│   │                     # Team, Content, Logo Clouds, FAQs, Footers
│   ├── application/      # Shells, Headings, Data Display, Lists, Forms,
│   │                     # Feedback, Navigation, Overlays, Elements, Layout
│   ├── print/
│   ├── social/
│   └── internal/
├── products/
│   ├── suite/
│   ├── mission-control/
│   └── nemyx/
├── guidelines/           # Strategy, Typography, Colors, Photography, etc.
├── examples/             # Full page compositions
│   ├── marketing/        # Landing, Product, About, Blog pages
│   └── application/      # Home, Detail, Settings screens
└── App.vue               # Design system browser / sandbox
```

## Design Language

### Core Philosophy

Auterion's visual language reflects its technology: **engineered precision over decoration**. Every design decision should feel like it was made by people who build systems for operators making real decisions — not by a marketing team chasing trends.

Think: dark interfaces, technical grids, telemetry-inspired layouts. References are DevRev, IBM Design Language, Vercel, Primer.

### Visual Principles

- **Dark-first:** Default to dark backgrounds. Light mode is a secondary expression.
- **Density as a spectrum:** Marketing surfaces are most expressive; application shells are functional; Nemyx UI is maximum information density with zero decoration.
- **At-a-glance clarity:** Any operator should understand the state of the system immediately. Avoid ambiguity in data display.
- **Grid and structure:** Use consistent grid systems. Target grids and contour lines are valid structural elements — not decoration.
- **No generic white:** Avoid default white/light SaaS aesthetics. Our surfaces are active, data-rich, and mission-aware.

### One Design Language, Multiple Expressions

All surfaces — marketing, application, print, Nemyx UI — share the same foundation (tokens, typography, color). They differ only in density and fidelity, not in visual identity.

```
Foundation (tokens, type, color)
    ├── Marketing     → most expressive, brand-forward
    ├── Application   → functional, structured
    ├── Print         → absolute measurements, brand precision
    └── Products      → mission-critical, highest density
         ├── Suite
         ├── Mission Control
         └── Nemyx UI
```

## Design Token Architecture

**Two-layer system:**

1. **Primitives** — Defined in `tokens/colors.css` at `:root` (light) and `[data-theme="dark"]` (dark). Radix-aligned scales with Auterion custom scales (`auterion-blue`, `auterion-gray`, `auterion-mauve`).
2. **Semantic aliases** — Defined once at `:root` using `var()` references to primitives. They auto-resolve when primitives change per theme. Do NOT redefine semantic aliases in `[data-theme="dark"]`.

**Tailwind bridge** — `@theme` block in `main.css` exposes all tokens to Tailwind utilities (e.g., `bg-primary`, `text-text-secondary`).

**Always use semantic tokens in components, never raw primitives.** For example:

- Use `text-primary` not `text-auterion-gray-12`
- Use `bg-surface` not `bg-auterion-gray-1`
- Use `border-subtle` not `border-auterion-gray-6`

### Semantic color groups

Each group has 7 variants: `-subtle`, `-muted`, `-border`, base, `-hover`, `-text`, `on-{name}`.

| Group     | Primitive | Purpose                  |
|-----------|-----------|--------------------------|
| primary   | blue      | Interactive elements     |
| alarm     | red       | Immediate action         |
| warning   | orange    | Prompt action            |
| caution   | amber     | Awareness                |
| ok        | green     | Nominal status           |
| accent    | teal      | Data visualization       |

### Foundation tokens

- **Page:** `--color-page-bg`, `--color-page-bg-subtle`
- **Text:** `--color-text-{primary,secondary,tertiary,disabled,inverse,link}`
- **Borders:** `--color-border-{subtle,default,strong}`
- **Surfaces:** `--color-surface-{1,2,3}` (layered depth)

## Typography

- **Primary typeface:** Inter Variable (self-hosted woff2)
- **Scale:** Follow a strict type scale defined in `tokens/typography.css` — do not use arbitrary font sizes
- **Hierarchy:** Establish clear contrast between headings, body, labels, and data
- **Mono:** Use monospace for telemetry data, code, coordinates, and system values
- **OpenType features** — Enabled globally via `--default-font-feature-settings` in `typography.css`. Don't override unless intentional.

## Component Conventions

### File Structure

Each component lives in its own folder:

```
components/marketing/hero/
├── HeroSection.vue        # Main component
├── HeroSection.types.ts   # Props interface and types
└── index.ts               # Named export
```

### Component Rules

- Use `<script setup lang="ts">` always
- Define all props with TypeScript interfaces in a separate `.types.ts` file
- Use `defineProps<Props>()` with full type safety
- No inline styles — TailwindCSS classes only
- No hardcoded colors — use semantic token classes
- Components must be self-contained and composable
- Prefer slots over deeply nested prop drilling

### Naming Conventions

- Component files: `PascalCase.vue`
- `The` prefix for singleton layout components (TheSidebar, ThemeToggle)
- Page components: `*Page.vue`
- Composables: `useFeatureName.ts`
- Types: `ComponentName.types.ts`
- CSS custom properties: `--color-text-primary`, `--color-bg-surface`
- Tailwind token classes: `text-primary`, `bg-surface`, `border-subtle`
- **Path alias** — `@/` maps to `src/`

### Props Pattern

```typescript
// HeroSection.types.ts
export interface HeroSectionProps {
  headline: string
  subheadline?: string
  ctaLabel?: string
  ctaHref?: string
  variant?: 'default' | 'centered' | 'split'
}
```

```vue
<!-- HeroSection.vue -->
<script setup lang="ts">
import type { HeroSectionProps } from './HeroSection.types'

const props = withDefaults(defineProps<HeroSectionProps>(), {
  variant: 'default',
})
</script>
```

## Conventions

- **Theme switching** — Uses `data-theme` attribute on `<html>`. Dark is the default/primary theme.
- **Placeholder routes** — Use the `placeholder()` helper in `router/index.ts` with `section` and `title` meta. Don't create new page files for placeholder content.
- **Tailwind usage** — Use semantic token classes (`bg-surface-1`, `text-text-primary`, `border-border-subtle`) over raw primitive classes. Keep styles in templates with utility classes; avoid `<style>` blocks unless necessary.
- **No external CSS frameworks** — Everything is built on Tailwind + custom tokens.

## Brand Voice (Applied to UI Copy)

All copy within components — labels, placeholder text, microcopy, example content — should reflect the Auterion brand voice:

- **Clear and direct:** No vague buzzwords. Say what the thing does.
- **Technical authority:** Precise terminology. Not dumbed down, not inaccessible.
- **Mission-aware:** Copy should feel like it belongs in a system where decisions matter.

The storytelling arc for any major surface: **Challenge → Mission → Solution → Outcome**

## Ethics and OPSEC (Visual Content)

When using imagery or illustrative content in components:

- Never depict violence against civilians or civilian structures
- All faces, unit patches, and hardware identifiers must be marked for blur
- Always reflect that humans remain in control of targeting decisions
- Do not suggest autonomous lethal action without human authorization

## Workflow

### When Adding a New Component

1. Identify which category it belongs to (marketing / application / product)
2. Create the folder structure with `.vue`, `.types.ts`, and `index.ts`
3. Use only semantic color tokens — never primitives
4. Build dark-first, then verify light mode
5. Test at multiple viewport widths
6. Export from the category's `index.ts`

### When Modifying Tokens

- Primitives live in `assets/tokens/colors.css` — modify rarely
- Semantic tokens are defined in the same file — this is the primary interface
- The Tailwind bridge in `assets/main.css` exposes tokens to utility classes
- Never remove a token without checking all usages first

### When Building Page Examples

- Compose from existing components only — do not write one-off styles
- Examples should live in `src/examples/`
- Each example should demonstrate a realistic Auterion use case

## Product-Specific Notes

### Nemyx UI

Nemyx is the defense swarming interface. Design constraints:

- Maximum information density — every pixel must earn its place
- No decorative elements
- Color used exclusively for state communication (status, alert, active, inactive)
- Latency and performance are UX features — design should reflect system responsiveness

### Mission Control

Operator-facing command interface. Similar density constraints to Nemyx but with broader workflow context. Navigation and task flow clarity are paramount.

### Suite

Broader platform UI. More breathing room than Mission Control or Nemyx, but still application-density — not marketing-density.
