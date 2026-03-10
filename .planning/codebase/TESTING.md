# Testing Patterns

**Analysis Date:** 2026-03-10

## Test Framework

**Runner:**
- No test runner installed. `package.json` lists no testing dependencies (Jest, Vitest, etc.)

**Assertion Library:**
- Not applicable. Testing infrastructure not present.

**Run Commands:**
```bash
# No test commands defined in package.json
# Available scripts:
pnpm dev       # Start dev server (http://localhost:5174)
pnpm build     # Type-check and build (vue-tsc -b && vite build)
pnpm preview   # Preview production build
```

## Type Safety as Primary Quality Assurance

In absence of unit/integration tests, the project relies on **TypeScript strict mode** for quality assurance:

**Enforced Checks (tsconfig.app.json):**
- `strict: true` — All strict checks enabled
- `noUnusedLocals: true` — Unused variables cause build failure
- `noUnusedParameters: true` — Unused function parameters cause build failure
- `noFallthroughCasesInSwitch: true` — Switch cases must have break/return
- `noUncheckedSideEffectImports: true` — Side-effect imports must be explicit
- `noEmit: true` — Type-checking only, no JavaScript output

**Build Verification:**
```bash
pnpm build          # Runs vue-tsc -b && vite build
vue-tsc -b         # Type-checks entire project before build
```

This ensures:
- Type errors caught at build time
- No unused code reaches production
- Function signatures validated against all call sites
- React component rendering verified for prop types

## Test File Organization

**Status:** Not implemented. No test files found in codebase.

**Hypothetical Convention (if testing were added):**
- Co-located: `*Page.vue` would have `*.test.ts` sibling
- Directory: Tests could be placed in `src/__tests__/` alongside source
- Naming: `ComponentName.test.ts`, `composable.test.ts`

## Manual Testing Strategy

The project follows a **manual testing via development workflow**:

**Development Server:**
```bash
pnpm dev
# Opens http://localhost:5174
# Hot reload on file changes
# Vue DevTools available for component inspection
```

**Testing Approach:**
1. Start dev server (`pnpm dev`)
2. Navigate routes in browser to verify router behavior
3. Toggle theme (`ThemeToggle` button) to verify dark/light mode switching
4. Inspect component state via Vue DevTools
5. Check color tokens display correctly on `ColorsPage.vue`
6. Verify responsive layouts via browser dev tools

## Component Testing Pattern (Manual)

**ThemeToggle Component (`src/components/ThemeToggle.vue`):**
- Manual test: Click button → verify `isDark` state toggles → check `data-theme` attribute updates
- Verification: Browser inspector shows `<html data-theme="dark">` or `<html data-theme="light">`
- CSS reflects immediately via Tailwind `dark:` prefix classes

**TheSidebar Component (`src/components/TheSidebar.vue`):**
- Manual test: Click section accordion → verify `openSections` Set updates → check section items expand/collapse
- Route navigation: Click sidebar links → verify `route.path` matches clicked item
- Active state: Current route highlights with different color class

**Router (`src/router/index.ts`):**
- Manual test: Navigate to each route → verify correct component renders
- Meta testing: Inspect `route.meta.section` and `route.meta.title` via Vue DevTools
- Standalone mode: `/gallery/website` route has `standalone: true` meta → renders without sidebar

## Composable Testing Pattern (Manual)

**useTheme (`src/composables/useTheme.ts`):**

Manual verification steps:
1. Reload page → `initialize()` reads `document.documentElement.getAttribute('data-theme')`
2. Default state: `isDark.value = true` (dark mode is primary)
3. Click toggle → `isDark.value` flips → `document.documentElement.setAttribute('data-theme', ...)` updates
4. Verify CSS tokens resolve correctly per theme via browser inspector

**Expected behavior:**

```typescript
// On mount
initialize()  // Sets isDark.value based on DOM attribute

// On toggle click
toggle()      // Flips isDark, updates data-theme attribute
              // All --color-* and --font-* tokens resolve via CSS theme layers
```

## Page Component Testing (Manual)

**ColorsPage (`src/pages/ColorsPage.vue`):**
- Manual test: Verify all 16 primitive scales render with 10 steps each
- Semantic tokens: Check 6 semantic groups display with correct variants
- Color display: Inspect `style="{ backgroundColor: \`var(--color-${name}-${step})\` }"` renders correct color
- Light/dark toggle: Verify colors invert appropriately

**TypographyPage (`src/pages/TypographyPage.vue`):**
- Manual test: Verify type scale renders 13 steps (xs to 9xl)
- Weights: Check 3 columns (SemiBold, Medium, Regular) display
- Font application: Inspect computed styles show correct `font-size`, `font-weight`, `letter-spacing`
- OpenType features: Verify ss01, ss07, ss08, cv02... are applied via font-feature-settings

## Data Structure Testing (Manual via DevTools)

**Router Configuration:**
```typescript
// Verify structure via Vue DevTools Router tab
const route = useRoute()
console.log(route.path)                // Current path
console.log(route.meta.section)        // Section name
console.log(route.meta.title)          // Page title
console.log(route.meta.standalone)     // Boolean for layout
```

**Component State:**
```typescript
// TheSidebar openSections Set
const openSections = ref<Set<string>>(new Set(['Strategy']))
// Verify in Vue DevTools → Inspect expanded sections
```

## Linting and Type Checking

**Type Checking:**
```bash
pnpm build     # Runs vue-tsc -b before vite build
               # Fails if any type errors detected
```

**No Linting Tools:**
- No ESLint, Prettier, or code quality tools configured
- Code follows conventions by consistency, not automation
- TypeScript strict mode is the only automated quality gate

## Build Process as Quality Gate

**Pre-flight Checks:**
```bash
vue-tsc -b              # Type-check all .ts and .vue files
                        # Fails on type errors, unused variables, unused parameters
                        # Verifies all imports resolve correctly
```

**Build Output:**
```bash
vite build              # Creates dist/
                        # Output: optimized JS, CSS, assets
```

**What's Verified:**
- All TypeScript compiles without errors
- All imports are resolvable
- All routes are defined
- All composables export correctly
- No unused code in source (caught by `noUnusedLocals`)

## Color Token Testing (Content-based)

**ColorsPage (`src/pages/ColorsPage.vue`) as executable documentation:**
- Page displays all 16 primitive scales × 10 steps = 160 color swatches
- Each swatch is titled with CSS var name: `:title="\`--color-\${scale.name}-\${s}\`"`
- Clicking/hovering swatches in browser inspector verifies correct color value
- Semantic token section displays 6 groups × 6 variants = 36 swatches
- Dark mode toggle verifies theme switching works for all tokens

**Typography Page (`src/pages/TypographyPage.vue`) as executable documentation:**
- Displays type scale visually with actual font rendering
- Each step shows 3 weights, verifiable by inspecting computed styles
- Token reference table shows actual CSS var names and values
- OpenType features section displays samples with/without features enabled

## Asset and Configuration Testing

**Manual Verification:**
- Font loading: Open Network tab → verify InterVariable.woff2 loads successfully
- Tailwind tokens: Inspect page → verify Tailwind `@theme` bridge applies font sizes/weights
- Color tokens: Inspect CSS → verify --color-* custom properties exist at `:root` and `[data-theme="dark"]`
- Router history: Use browser back/forward → verify client-side history works without page reload

## Error Scenarios (Not Tested)

The following edge cases lack automated tests:

**Router:**
- Invalid route navigation
- Missing route handler
- Race conditions in navigation guards

**Components:**
- Missing props
- Invalid data types passed to components
- Async state updates during unmount

**Composables:**
- Edge cases in theme detection (browser doesn't support `setAttribute`)
- Rapid toggle clicks on theme switcher

**Build:**
- Tree-shaking of unused imports
- Critical CSS extraction

## Coverage

**Requirements:** None enforced.

**Effective Coverage:**
- Type safety via TypeScript: 100% of code paths checked at compile time
- Manual functional testing: Developer-dependent
- E2E testing: Not implemented

## Notes on Testing Approach

1. **Type Safety First**: TypeScript strict mode (`noUnusedLocals`, `noUnusedParameters`) catches most bugs before runtime
2. **Composition API Simplicity**: `ref()` and `computed()` are easier to reason about manually than complex state management
3. **Visual Components**: Pages like `ColorsPage.vue` and `TypographyPage.vue` are inherently self-testing—if colors/fonts render, the tokens work
4. **Small Codebase**: Total source is ~1000 lines—manual testing is practical
5. **Documentation as Tests**: Extensive comments in `colors.css` and README serve as specification and test oracle

---

*Testing analysis: 2026-03-10*
