# Coding Conventions

**Analysis Date:** 2026-02-21

## Naming Patterns

**Files:**
- Vue components: `PascalCase.vue` (e.g., `ThemeToggle.vue`, `HomePage.vue`)
- Singleton layout components: `The` prefix (e.g., `TheSidebar.vue`, `TheLayout.vue`)
- Page components: `*Page.vue` (e.g., `HomePage.vue`, `ColorsPage.vue`)
- Composables: `use*` prefix in camelCase (e.g., `useTheme.ts`)
- TypeScript types files: `ComponentName.types.ts` (e.g., `HeroSection.types.ts`)
- CSS token files: lowercase with underscores (e.g., `colors.css`, `typography.css`)

**Functions:**
- Utility functions: camelCase (e.g., `toggleSection()`, `isActive()`, `sectionHasActiveItem()`)
- Boolean predicates: `is*/has*` prefix (e.g., `isActive()`, `sectionHasActiveItem()`)
- Event handlers: `handle*` prefix or inline `@click` directives (e.g., `toggleSection()`)

**Variables:**
- Reactive refs: camelCase (e.g., `isDark`, `openSections`, `isSectionOpen`)
- Constants: camelCase for regular, UPPER_CASE rarely used (e.g., `typeScale`, `sections`, `semanticGroups`)
- Collections: plural nouns (e.g., `sections`, `items`, `primitiveScales`, `steps`)

**Types:**
- TypeScript interfaces: `PascalCase` (e.g., `HeroSectionProps`)
- Generics: single uppercase letter or descriptive (e.g., `T`, `Props`)
- CSS custom properties: `--color-*`, `--font-*`, `--tracking-*` (kebab-case with dashes)

**Routes & Paths:**
- Route paths: kebab-case lowercase (e.g., `/strategy/brand-idea`, `/color/primitives`)
- Router link `to` props: match route paths exactly

## Code Style

**Formatting:**
- No explicit formatter configured (ESLint/Prettier not in dependencies)
- Tabs/spaces: defaults to 2-space indentation (observed in .vue files)
- Max line length: no strict limit, but files kept under 220 characters generally
- Trailing commas: used in objects/arrays (modern ES6 style)

**Linting:**
- TypeScript strict mode enabled in `tsconfig.app.json`
- Compiler options enforce:
  - `strict: true`
  - `noUnusedLocals: true` — unused variables cause build failure
  - `noUnusedParameters: true` — unused parameters cause build failure
  - `noFallthroughCasesInSwitch: true` — switch cases require breaks
  - `noUncheckedSideEffectImports: true` — side-effect imports flagged

**Import Organization:**

Order (as observed in `TheSidebar.vue`):
1. Vue framework imports (`ref`, `computed`, `watch` from 'vue')
2. Router imports (`useRoute`, `useRouter` from 'vue-router')
3. Component imports (from '@/components/', '@/layouts/')
4. Composable imports (from '@/composables/')

Example from `src/components/TheSidebar.vue`:
```typescript
import { ref, computed, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import ThemeToggle from '@/components/ThemeToggle.vue'
```

**Path Aliases:**
- `@/` maps to `src/` (defined in `vite.config.ts` and `tsconfig.app.json`)
- Always use `@/` for imports, never relative paths

## Script Setup Convention

**All Vue files use `<script setup lang="ts">`:**
```vue
<script setup lang="ts">
import type { SomeType } from './Some.types'

const props = withDefaults(defineProps<SomeProps>(), {
  variant: 'default',
})

const state = ref(initialValue)

function handleAction() {
  // ...
}
</script>
```

**Key rules:**
- Always include `lang="ts"` for type safety
- Define props with TypeScript interfaces in separate `.types.ts` files
- Use `defineProps<Props>()` with full type definitions
- Use `withDefaults()` for props with default values
- Reactive state via `ref()` for primitives, `ref({...})` for objects
- Functions defined directly in script (not methods)

## Error Handling

**Pattern:** Implicit error boundaries (no try-catch observed)
- Vue Router handles navigation errors
- No explicit error catching in current codebase (early stage project)
- Type safety via TypeScript strict mode prevents most runtime errors
- Template conditionals guard against null/undefined (e.g., `v-if="section"`)

**Validation:**
- Route metadata uses typed `route.meta` with type assertions:
  ```typescript
  const title = route.meta.title as string ?? 'Page'
  const section = route.meta.section as string ?? ''
  ```

## Logging

**Framework:** `console` only (no logging library)

**Pattern:** None currently in production code
- Development logging via browser console available
- No centralized logging infrastructure

## Comments

**When to Comment:**
- CSS token files have extensive architecture documentation (see `colors.css` headers)
- TypeScript/JavaScript: minimal comments — code is self-documenting
- Complex logic: explain the "why", not the "what"

**JSDoc/TSDoc:**
- Not used in current codebase
- Type safety through TypeScript interfaces eliminates need for many comments

**CSS Comments:**
- Block comments with section separators (see `colors.css`)
- Semantic grouping with clear labels:
  ```css
  /* ── Font Family ──────────────────────────────────────────── */
  /* ── Font Feature Settings ────────────────────────────────── */
  ```

## Component Design

**Size:** Keep under 200 lines when possible
- `ThemeToggle.vue`: 25 lines (ideal)
- `TheSidebar.vue`: 180 lines (complex state, acceptable)
- `ColorsPage.vue`: 217 lines (data-heavy, grid display)

**Parameters:**
- Props passed via TypeScript interfaces with `withDefaults()`
- Composition API composables for shared state (e.g., `useTheme()`)
- Avoid deep prop drilling — use composables or slots

**Return Values:**
- Composables return objects with properties and methods:
  ```typescript
  return { isDark, initialize, toggle }
  ```
- Functions return computed values or void for side effects

**Slots:** Used sparingly (not observed in current codebase)

## Module Design

**Exports:**
- `index.ts` files not used (components imported directly)
- Composables exported as named exports:
  ```typescript
  export function useTheme() { ... }
  ```

**Barrel Files:** None currently (early codebase stage)

## Template Patterns

**Directive Usage:**
- `v-for` with `:key` binding (always provide unique keys):
  ```vue
  <div v-for="section in sections" :key="section.title">
  ```
- `v-if` for conditional rendering, `:class` for dynamic classes
- `@click` for click handlers, `@input` for form inputs
- `:style` for computed styles (e.g., background-color from tokens)

**Class Binding:**
- Tailwind utility classes only — no inline styles except via `:style`
- Conditional classes via `:class` with object notation:
  ```vue
  :class="isSectionOpen(section.title)
    ? 'text-zinc-900 dark:text-white'
    : 'text-zinc-500 dark:text-zinc-400'"
  ```

**Computed & Reactive:**
- `computed()` for derived state:
  ```typescript
  const isSectionOpen = computed(() => (title: string) => openSections.value.has(title))
  ```
- `watch()` for side effects:
  ```typescript
  watch(() => route.path, () => {
    // Update state when path changes
  })
  ```

## Color Token Usage

**Rule:** Always use semantic tokens in components, never raw primitives

**Correct:**
- `text-primary` (semantic)
- `bg-surface-1` (semantic)
- `border-subtle` (semantic)

**Incorrect:**
- `text-gray-10` (primitive — use semantic instead)
- `bg-blue-1` (primitive)

**Semantic Token Classes** (Tailwind bridge via `main.css` @theme):
- Text: `text-primary`, `text-secondary`, `text-tertiary`, `text-disabled`, `text-inverse`, `text-link`
- Backgrounds: `bg-primary`, `bg-surface-1`, `bg-surface-2`, `bg-surface-3`
- Borders: `border-subtle`, `border-default`, `border-strong`
- Status colors: `text-alarm`, `bg-warning`, `border-ok`, `text-caution`

## Theme Management

**Theme Switching:**
- Uses `data-theme` attribute on `<html>` element
- Dark mode is default (primary theme)
- Composable `useTheme()` manages state:
  ```typescript
  function toggle() {
    isDark.value = !isDark.value
    document.documentElement.setAttribute('data-theme', isDark.value ? 'dark' : 'light')
  }
  ```
- CSS applies theme via `:root` and `[data-theme="dark"]` selectors
- Semantic tokens auto-resolve across themes (no duplicate definitions)

## Tailwind CSS v4 Integration

**Configuration:**
- `@tailwindcss/vite` plugin in `vite.config.ts`
- `@theme` block in `main.css` exposes all tokens to utilities
- Custom theme colors defined via CSS variables (not Tailwind config)
- Dark mode via `@custom-variant dark` for `[data-theme="dark"]` selector

**Usage:**
- Utility-first approach — all styles in templates, no `<style>` blocks
- Color utilities automatically map to CSS custom properties
- Responsive prefixes: `sm:`, `lg:`, `xl:` for breakpoints

---

*Convention analysis: 2026-02-21*
