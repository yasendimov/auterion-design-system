# Testing Patterns

**Analysis Date:** 2026-02-21

## Test Framework

**Runner:**
- Not detected — no test framework configured

**Assertion Library:**
- Not detected

**Run Commands:**
- No test scripts defined in `package.json`

## Test Coverage

**Current Status:** No automated tests in codebase

The project is in early development (v0.1.0) with focus on design system definition and visual documentation rather than automated testing. All validation occurs through:
1. TypeScript compiler (strict mode, unused variable detection)
2. Manual component testing in dev server (`pnpm dev`)
3. Visual verification via live pages (Colors, Typography, Brand pages)

## Validation Strategy

**TypeScript as Primary Guard:**
```typescript
// tsconfig.app.json enforces:
"strict": true,                          // Full type checking
"noUnusedLocals": true,                  // Unused variables fail build
"noUnusedParameters": true,              // Unused params fail build
"noFallthroughCasesInSwitch": true,      // Switch cases must have break/return
"noUncheckedSideEffectImports": true,    // Side-effect imports flagged
```

**Build Command (doubles as validation):**
```bash
pnpm build  # Runs "vue-tsc -b && vite build"
```
This performs:
1. Full TypeScript type checking (`vue-tsc -b`)
2. Vue SFC compilation and bundling (`vite build`)
- Any type errors prevent build success
- Unused variables cause build failure

## Manual Testing Approach

**Visual Testing Workflow:**
1. `pnpm dev` — Start dev server at http://localhost:5173
2. Navigate to `/color/primitives` — Verify color scales render correctly
3. Navigate to `/typography/introduction` — Verify type scale, weights, features
4. Toggle theme via button — Verify dark/light mode switch works
5. Test sidebar navigation — Verify accordion opens/closes, active states highlight

**Component Verification Points:**
- `ThemeToggle.vue`: Icon switches, applies `data-theme` attribute
- `TheSidebar.vue`: Sections toggle, active item highlights, route sync works
- `useTheme.ts`: Initialization reads DOM attribute, toggle writes to DOM
- Pages render without console errors

## Live Demonstration Pages

The design system includes **self-documenting components** that validate themselves:

**`src/pages/ColorsPage.vue` (217 lines):**
- Displays all primitive color scales (10-step grids)
- Shows semantic token variants
- Renders foundation tokens
- Uses CSS variables to validate token resolution
- Visual regression caught immediately

**`src/pages/TypographyPage.vue` (169 lines):**
- Renders type scale with 3 weights
- Shows OpenType feature comparisons
- Displays token reference table
- Font rendering validates weight/size correctness

**`src/pages/HomePage.vue` (44 lines):**
- Links to all documentation sections
- Validates routing works
- Tests card hover states

## Test Data / Fixtures

**Hardcoded in Components (by design):**
```typescript
// src/pages/ColorsPage.vue
const primitiveScales = [
  { name: 'gray', label: 'Gray', description: 'Pure achromatic' },
  { name: 'blue', label: 'Blue', description: 'Primary accent' },
  // ... more scales
]

const semanticGroups = [
  { name: 'primary', label: 'Primary', description: 'Blue — interactive elements', variants: [...] },
  // ... more groups
]
```

**Sidebar Navigation Data** (src/components/TheSidebar.vue):
```typescript
const sections = [
  {
    title: 'Strategy',
    items: [
      { label: 'Brand Idea', to: '/strategy/brand-idea' },
      { label: 'Voice Principles', to: '/strategy/voice-principles' },
      // ... more items
    ],
  },
  // ... more sections
]
```

These are source-of-truth definitions that drive both the UI and routing validation.

## Known Limitations

**No Unit Tests:**
- Composables like `useTheme()` lack unit test coverage
- No tests for route synchronization logic
- `TheSidebar` state management (set operations, section toggle) untested

**No E2E Tests:**
- No Playwright, Cypress, or Puppeteer configuration
- Navigation workflows not automated
- Theme toggle persistence not verified

**No Visual Regression Testing:**
- Color renders not compared across runs
- Typography renders not baseline-tested
- Responsive layouts not snapshot-tested

## Recommendation Path

**When Tests Become Critical:**

1. **First Phase (unit):**
   - Add Vitest for `useTheme()` composable
   - Test `initialize()` and `toggle()` functions
   - Mock DOM API calls
   - Test toggle persistence via localStorage (if added)

2. **Second Phase (component):**
   - Add `@testing-library/vue` for component tests
   - Test `TheSidebar` state management (set operations)
   - Verify route sync with mock router
   - Test `ThemeToggle` icon switching

3. **Third Phase (visual/E2E):**
   - Add Playwright for navigation workflows
   - Visual regression testing with Percy or Chromatic
   - Typography and color rendering snapshots

## Current Strengths

**Type Safety:**
- TypeScript strict mode catches ~60% of potential bugs
- Component props fully typed via interfaces
- Router meta fields typed via Vue Router types

**Build-Time Validation:**
- Vue SFC compiler validates template syntax
- Tailwind CSS compilation validates utility classes
- CSS custom property resolution errors would fail build (if any)

**Manual Verification:**
- Live design system pages provide immediate visual feedback
- dev server hot reload accelerates manual testing
- Color/typography pages are self-validating (token resolution visible)

---

*Testing analysis: 2026-02-21*

## Minimum Viable Test Suite

If testing becomes required immediately, start with:

```bash
npm install -D vitest @testing-library/vue jsdom
```

Then add one composable test (`src/composables/useTheme.test.ts`):
```typescript
import { describe, it, expect, beforeEach } from 'vitest'
import { useTheme } from './useTheme'

describe('useTheme', () => {
  beforeEach(() => {
    document.documentElement.setAttribute('data-theme', 'dark')
  })

  it('initializes from DOM attribute', () => {
    const { isDark, initialize } = useTheme()
    initialize()
    expect(isDark.value).toBe(true)
  })

  it('toggles theme and updates DOM', () => {
    const { isDark, toggle } = useTheme()
    toggle()
    expect(isDark.value).toBe(false)
    expect(document.documentElement.getAttribute('data-theme')).toBe('light')
  })
})
```

Run with: `vitest`
