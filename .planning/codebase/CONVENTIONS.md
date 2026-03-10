# Coding Conventions

**Analysis Date:** 2026-03-10

## Naming Patterns

**Files:**
- Vue components: PascalCase, e.g., `TheSidebar.vue`, `ThemeToggle.vue`, `ColorsPage.vue`
- Pages: `*Page.vue` suffix, e.g., `HomePage.vue`, `WritingAuterionPage.vue`
- TypeScript files: camelCase, e.g., `useTheme.ts`, `index.ts`
- Directories: kebab-case, e.g., `src/components/`, `src/pages/`, `src/layouts/`

**Component Naming:**
- Singleton layout components: `The` prefix, e.g., `TheSidebar`, `ThemeToggle`
- Regular components and pages: PascalCase without special prefix
- Composables: `use` prefix in camelCase, e.g., `useTheme`

**Functions:**
- camelCase throughout, e.g., `semanticVarName()`, `sectionHasActiveItem()`, `toggleSection()`
- Boolean functions often prefixed with `is` or `has`, e.g., `isActive()`, `sectionHasActiveItem()`
- Private/internal functions use camelCase like public functions (Vue doesn't have static privacy)

**Variables:**
- Constants: camelCase, e.g., `sections`, `primitiveScales`, `steps`, `semanticGroups`
- Refs and reactive state: camelCase, e.g., `isDark`, `openSections`, `mobileMenuOpen`
- Template bindings: camelCase, e.g., `isSectionOpen()` as a computed function

**Types:**
- Explicit types used for data structures, e.g., `const sections: typeof sections[number]`
- Typescript strict mode enforced (`strict: true` in `tsconfig.app.json`)
- No implicit `any` type allowed

**CSS Custom Properties:**
- Kebab-case with `--color-` or `--font-` prefix, e.g., `--color-primary`, `--font-size-base`, `--tracking-2xl`
- Color token pattern: `--color-{group}-{variant}` for semantic tokens, e.g., `--color-primary-subtle`, `--color-alarm-hover`
- Foundation tokens: `--color-page`, `--color-text-primary`, `--color-border-subtle`, `--color-surface-1`

## Code Style

**Formatting:**
- No explicit formatter configured (Prettier not in dependencies)
- Vue 3 `<script setup lang="ts">` composition API used exclusively
- Inline styles via Tailwind CSS utility classes in templates (no `<style>` blocks except when necessary)
- Consistent spacing and indentation observed in existing files (2-space indentation)

**Vue 3 Composition:**
- `<script setup>` used for all components
- TypeScript enabled on all scripts via `lang="ts"`
- Imports grouped: framework imports first, then local imports, then styles
- Reactive state via `ref()` for simple values, computed properties via `computed()`, watchers via `watch()`

**Template Structure:**
- One root element per component (typical Vue convention)
- Semantic HTML elements when appropriate (`<main>`, `<nav>`, `<section>`, `<aside>`, `<button>`)
- Inline event handlers with `@click`, `@mounted`, etc.
- Conditional rendering via `v-if`, `v-else`, `v-for` with `:key` bindings

## Import Organization

**Order:**
1. Framework/library imports (Vue, vue-router, @headlessui, @heroicons)
2. Local component imports (relative paths with `@/` alias)
3. Style imports (`.css` files)

**Examples from codebase:**

```typescript
// src/components/ThemeToggle.vue
import { onMounted } from 'vue'
import { useTheme } from '@/composables/useTheme'

// src/pages/WebsitePage.vue
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/vue'
import {
  Bars3Icon,
  XMarkIcon,
  ChevronDownIcon,
  ArrowRightIcon,
  ArrowUpRightIcon,
} from '@heroicons/vue/24/outline'
import { useTheme } from '@/composables/useTheme'
```

**Path Aliases:**
- `@/` maps to `src/` (defined in `tsconfig.app.json` and `vite.config.ts`)
- Always use `@/` for imports from `src/`, never relative paths
- Examples: `@/components/TheSidebar.vue`, `@/composables/useTheme`, `@/pages/ColorsPage.vue`

## Error Handling

**Patterns:**
- No explicit error handling infrastructure observed in current codebase
- Functions return `null` or undefined implicitly when no value is present (e.g., `trackingLoose: null`)
- No try-catch blocks or error boundaries currently implemented
- Router uses Vue Router's built-in error handling (no custom error handlers)
- Type safety via TypeScript `strict: true` and `noUnusedLocals`/`noUnusedParameters` enforces correctness at compile time

## Logging

**Framework:** No logging library imported. `console` methods not observed in current code.

**Patterns:**
- No structured logging implemented
- Debugging likely handled via Vue DevTools and browser dev tools
- No telemetry or analytics hooks present

## Comments

**When to Comment:**
- Code structure uses semantic HTML and clear naming instead of comments
- CSS token file (`src/assets/tokens/colors.css`) has extensive block comments documenting architecture
- TSDoc used rarely; existing code relies on clear naming and function signatures

**JSDoc/TSDoc:**
- Not consistently used
- TypeScript strict mode and explicit types provide inline documentation
- No @param/@returns patterns observed

**Examples of comment style:**
```typescript
// src/composables/useTheme.ts - minimal comments
// Theme-switching logic is self-explanatory via function names

// src/assets/tokens/colors.css - extensive documentation
/* ============================================================
   AUTERION DESIGN SYSTEM — COLOR TOKENS
   ... detailed architecture explanation ...
   ============================================================ */
```

## Function Design

**Size:**
- Generally concise, 5-20 lines typical
- `toggleSection()` (TheSidebar.vue): 6 lines with clear intent
- `semanticVarName()` (ColorsPage.vue): 3-line helper that returns a string

**Parameters:**
- Minimal parameter count (1-2 typical)
- Type annotations used in TypeScript: `function placeholder(section: string, title: string)`
- Destructuring used for complex object parameters

**Return Values:**
- Explicit return statements (no implicit undefined)
- Boolean returns used for validation functions: `isActive(path: string): boolean`
- Object returns with multiple values: `return { isDark, initialize, toggle }`

**Examples:**

```typescript
// src/composables/useTheme.ts
export function useTheme() {
  function initialize() {
    isDark.value = document.documentElement.getAttribute('data-theme') === 'dark'
  }

  function toggle() {
    isDark.value = !isDark.value
    document.documentElement.setAttribute('data-theme', isDark.value ? 'dark' : 'light')
  }

  return { isDark, initialize, toggle }
}

// src/router/index.ts
function placeholder(section: string, title: string) {
  return {
    component: PlaceholderPage,
    meta: { section, title },
  }
}

// src/components/TheSidebar.vue
function isActive(path: string): boolean {
  return route.path === path
}
```

## Module Design

**Exports:**
- Default exports used for Vue components (implicit via `<template>`)
- Named exports for composables and helper functions: `export function useTheme() { ... }`
- Router exports single default instance: `export default router`

**Barrel Files:**
- Not used. No `index.ts` barrel files in `src/components/`, `src/pages/`, or `src/composables/`
- Each file imported directly by path
- `src/router/index.ts` is the exception—all routes centralized there

**Component Structure Pattern:**
```typescript
<script setup lang="ts">
// 1. Imports
import { ref, computed, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useTheme } from '@/composables/useTheme'

// 2. Data and state
const route = useRoute()
const isDark = ref(true)
const sections = [...]
const openSections = ref<Set<string>>(new Set())

// 3. Computed properties
const isSectionOpen = computed(() => (title: string) => openSections.value.has(title))

// 4. Watchers
watch(() => route.path, () => { ... })

// 5. Methods
function toggleSection(section: typeof sections[number]) { ... }
function isActive(path: string): boolean { ... }
</script>

<template>
  <!-- Template last -->
</template>
```

## Tailwind CSS Integration

**Utility Classes:**
- All styling via inline Tailwind classes in templates
- Semantic token classes used: `bg-surface-1`, `text-text-primary`, `border-border-subtle`
- Dark mode via `dark:` prefix, e.g., `bg-white dark:bg-zinc-950`, `text-zinc-900 dark:text-white`
- No CSS-in-JS or scoped styles (except for rare dynamic `style` attribute bindings)

**Dynamic Styles:**
- Inline `:style` bindings for color token variables: `:style="{ backgroundColor: \`var(--color-${scale.name}-${s})\` }"`
- Font weight and letter spacing via style object: `:style="{ fontWeight: w.value, letterSpacing: step.trackingLoose }"`
- Conditional classes via `:class` with ternary expressions

## TypeScript Strict Mode

**Enforced Settings:**
- `strict: true` — all strict checks enabled
- `noUnusedLocals: true` — unused variables cause errors
- `noUnusedParameters: true` — unused function parameters cause errors
- `noFallthroughCasesInSwitch: true` — switch cases must have break or return
- `noUncheckedSideEffectImports: true` — side-effect imports must be explicit

**Impact:**
- All function parameters must be used
- All variables must be used or explicitly ignored
- Type safety enforced at compile time (`vue-tsc -b`)

---

*Convention analysis: 2026-03-10*
