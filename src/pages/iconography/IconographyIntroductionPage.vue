<script setup lang="ts">
const sizes = [
  { label: '16px', use: 'Inline text, compact UI elements, table cells' },
  { label: '20px', use: 'Form inputs, buttons, list items' },
  { label: '24px', use: 'Primary actions, navigation, toolbars (base size)' },
  { label: '32px', use: 'Empty states, onboarding, feature highlights' },
]

const principles = [
  {
    title: 'Clarity Over Decoration',
    description: 'Every icon must be instantly recognizable at its smallest rendered size. Strip away any decorative detail that does not improve comprehension. In mission-critical aerospace interfaces, a misread icon can mean a misread situation.',
  },
  {
    title: 'Consistent Stroke Weight',
    description: 'All icons use a 1.5px stroke weight at the 24px base size. This weight scales proportionally across sizes to maintain visual density. Thinner strokes disappear on low-contrast displays; thicker strokes crowd small containers.',
  },
  {
    title: 'Geometric Foundation',
    description: 'Icons are constructed on a 24px grid using simple geometric primitives — circles, rectangles, and consistent angles. Organic or freehand shapes are avoided. Precision in the icon reflects precision in the product.',
  },
  {
    title: 'Optical Alignment',
    description: 'Icons are optically centered, not mathematically centered. Triangular or asymmetric shapes (like play or forward arrows) are nudged to appear visually balanced within their bounding box. Always verify alignment at the rendered size, not zoomed in.',
  },
]
</script>

<template>
  <div>
    <header class="px-8 lg:px-16 pt-16 pb-12">
      <p class="text-[11px] text-zinc-400 dark:text-zinc-500 uppercase tracking-widest font-medium mb-3">Iconography</p>
      <h1 class="text-5xl font-medium text-zinc-900 dark:text-white">Introduction</h1>
      <p class="text-base text-zinc-500 dark:text-zinc-400 mt-4">Icons are a critical communication layer in aerospace interfaces. They must be unambiguous at a glance, legible at small sizes, and consistent across every surface of the Auterion platform.</p>
    </header>

    <div class="border-t border-zinc-200 dark:border-zinc-800"></div>

    <!-- Design Principles -->
    <section class="px-8 lg:px-16 py-16">
      <h2 class="text-xl font-semibold text-zinc-900 dark:text-white mb-1">Design Principles</h2>
      <p class="text-sm text-zinc-500 dark:text-zinc-400 mb-8">Four rules that govern every icon in the system. These are non-negotiable — they exist to protect usability in high-stakes operational environments.</p>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div v-for="principle in principles" :key="principle.title" class="p-6 border border-zinc-200 dark:border-zinc-800">
          <h3 class="text-sm font-semibold text-zinc-900 dark:text-white mb-2">{{ principle.title }}</h3>
          <p class="text-sm text-zinc-500 dark:text-zinc-400">{{ principle.description }}</p>
        </div>
      </div>
    </section>

    <div class="border-t border-zinc-200 dark:border-zinc-800"></div>

    <!-- 24px Base Grid -->
    <section class="px-8 lg:px-16 py-16">
      <h2 class="text-xl font-semibold text-zinc-900 dark:text-white mb-1">24px Base Grid</h2>
      <p class="text-sm text-zinc-500 dark:text-zinc-400 mb-8">All icons are designed on a 24 x 24 pixel grid. A 2px padding zone on each edge defines the live area where icon geometry should remain. Corner radii are set to 2px for consistency.</p>

      <div class="aspect-video bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center mb-8">
        <div class="relative">
          <!-- Outer grid representation -->
          <div class="w-48 h-48 border-2 border-dashed border-zinc-300 dark:border-zinc-600 relative">
            <!-- Padding zone -->
            <div class="absolute inset-2 border border-zinc-400 dark:border-zinc-500">
              <span class="absolute inset-0 flex items-center justify-center text-xs text-zinc-400 dark:text-zinc-500">20 x 20 live area</span>
            </div>
            <!-- Labels -->
            <span class="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] text-zinc-400 dark:text-zinc-500 font-mono">24px</span>
            <span class="absolute top-1/2 -left-8 -translate-y-1/2 -rotate-90 text-[10px] text-zinc-400 dark:text-zinc-500 font-mono">24px</span>
            <span class="absolute top-0 left-1/2 -translate-x-1/2 text-[10px] text-zinc-300 dark:text-zinc-600 font-mono mt-0.5">2px pad</span>
          </div>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="p-6 border border-zinc-200 dark:border-zinc-800">
          <p class="text-xs font-mono text-zinc-400 dark:text-zinc-500 mb-2">Grid</p>
          <p class="text-2xl font-semibold text-zinc-900 dark:text-white mb-1">24 x 24</p>
          <p class="text-sm text-zinc-500 dark:text-zinc-400">Base pixel grid for all icon construction</p>
        </div>
        <div class="p-6 border border-zinc-200 dark:border-zinc-800">
          <p class="text-xs font-mono text-zinc-400 dark:text-zinc-500 mb-2">Stroke</p>
          <p class="text-2xl font-semibold text-zinc-900 dark:text-white mb-1">1.5px</p>
          <p class="text-sm text-zinc-500 dark:text-zinc-400">Consistent stroke weight at the base size</p>
        </div>
        <div class="p-6 border border-zinc-200 dark:border-zinc-800">
          <p class="text-xs font-mono text-zinc-400 dark:text-zinc-500 mb-2">Corner Radius</p>
          <p class="text-2xl font-semibold text-zinc-900 dark:text-white mb-1">2px</p>
          <p class="text-sm text-zinc-500 dark:text-zinc-400">Applied to rectangular shapes and open paths</p>
        </div>
      </div>
    </section>

    <div class="border-t border-zinc-200 dark:border-zinc-800"></div>

    <!-- Icon Categories -->
    <section class="px-8 lg:px-16 py-16">
      <h2 class="text-xl font-semibold text-zinc-900 dark:text-white mb-1">Icon Categories</h2>
      <p class="text-sm text-zinc-500 dark:text-zinc-400 mb-8">The icon system is divided into two categories, each with distinct design considerations and usage contexts.</p>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="p-6 border border-zinc-200 dark:border-zinc-800">
          <div class="flex gap-3 mb-4">
            <div class="w-10 h-10 bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center shrink-0">
              <span class="text-[10px] text-zinc-400 dark:text-zinc-500">UAV</span>
            </div>
            <div class="w-10 h-10 bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center shrink-0">
              <span class="text-[10px] text-zinc-400 dark:text-zinc-500">GPS</span>
            </div>
            <div class="w-10 h-10 bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center shrink-0">
              <span class="text-[10px] text-zinc-400 dark:text-zinc-500">RTL</span>
            </div>
          </div>
          <h3 class="text-sm font-semibold text-zinc-900 dark:text-white mb-2">Product Symbols</h3>
          <p class="text-sm text-zinc-500 dark:text-zinc-400">Domain-specific icons representing vehicle types, mission modes, system states, and payloads. These are custom-designed for aerospace contexts and have no generic equivalent. They encode operational meaning that operators must recognize instantly.</p>
        </div>
        <div class="p-6 border border-zinc-200 dark:border-zinc-800">
          <div class="flex gap-3 mb-4">
            <div class="w-10 h-10 bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center shrink-0">
              <span class="text-[10px] text-zinc-400 dark:text-zinc-500">Menu</span>
            </div>
            <div class="w-10 h-10 bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center shrink-0">
              <span class="text-[10px] text-zinc-400 dark:text-zinc-500">Edit</span>
            </div>
            <div class="w-10 h-10 bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center shrink-0">
              <span class="text-[10px] text-zinc-400 dark:text-zinc-500">Save</span>
            </div>
          </div>
          <h3 class="text-sm font-semibold text-zinc-900 dark:text-white mb-2">Functional Icons</h3>
          <p class="text-sm text-zinc-500 dark:text-zinc-400">Standard UI action icons for navigation, editing, status, and media controls. These use Heroicons as the base set, ensuring consistency with widely understood interaction patterns. They handle the generic tasks that every software interface needs.</p>
        </div>
      </div>
    </section>

    <div class="border-t border-zinc-200 dark:border-zinc-800"></div>

    <!-- Sizing -->
    <section class="px-8 lg:px-16 py-16">
      <h2 class="text-xl font-semibold text-zinc-900 dark:text-white mb-1">Sizing</h2>
      <p class="text-sm text-zinc-500 dark:text-zinc-400 mb-8">Four sizes cover all use cases. Icons are always rendered at these exact pixel values — never at arbitrary or interpolated sizes.</p>

      <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
        <div v-for="size in sizes" :key="size.label" class="p-6 border border-zinc-200 dark:border-zinc-800 text-center">
          <div class="flex items-center justify-center mb-4">
            <div
              class="rounded bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center"
              :style="{ width: size.label, height: size.label }"
            >
              <span class="text-[8px] text-zinc-400 dark:text-zinc-500">Ic</span>
            </div>
          </div>
          <p class="text-sm font-semibold text-zinc-900 dark:text-white font-mono">{{ size.label }}</p>
          <p class="text-xs text-zinc-500 dark:text-zinc-400 mt-1">{{ size.use }}</p>
        </div>
      </div>
    </section>

    <div class="border-t border-zinc-200 dark:border-zinc-800"></div>

    <!-- Color Usage -->
    <section class="px-8 lg:px-16 py-16">
      <h2 class="text-xl font-semibold text-zinc-900 dark:text-white mb-1">Color Usage</h2>
      <p class="text-sm text-zinc-500 dark:text-zinc-400 mb-8">Icons inherit the text color of their parent element. They are monochromatic by design — multi-color icons are not permitted in the system.</p>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="p-6 border border-zinc-200 dark:border-zinc-800">
          <p class="text-[11px] font-medium text-zinc-400 dark:text-zinc-500 uppercase tracking-widest mb-4">Correct</p>
          <div class="flex gap-4 items-center">
            <div class="w-10 h-10 bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center">
              <span class="text-xs text-zinc-500 dark:text-zinc-400">Ic</span>
            </div>
            <p class="text-sm text-zinc-500 dark:text-zinc-400">Icon inherits <code class="font-mono text-xs">currentColor</code> from its parent text color. Changes automatically with theme.</p>
          </div>
        </div>
        <div class="p-6 border border-zinc-200 dark:border-zinc-800">
          <p class="text-[11px] font-medium text-zinc-400 dark:text-zinc-500 uppercase tracking-widest mb-4">Incorrect</p>
          <div class="flex gap-4 items-center">
            <div class="w-10 h-10 bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center">
              <span class="text-xs text-red-400">Ic</span>
            </div>
            <p class="text-sm text-zinc-500 dark:text-zinc-400">Never hardcode colors or use multiple colors within a single icon. Semantic color should come from the container, not the icon itself.</p>
          </div>
        </div>
      </div>

      <div class="mt-6 p-4 bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-800">
        <p class="text-sm text-zinc-500 dark:text-zinc-400"><strong class="text-zinc-900 dark:text-white">Exception:</strong> Status indicator icons (alarm, warning, caution, ok) receive their semantic color from their parent context — for example, a red container for alarm states. The icon SVG itself remains monochrome.</p>
      </div>
    </section>

    <div class="border-t border-zinc-200 dark:border-zinc-800"></div>

    <!-- Optical Alignment -->
    <section class="px-8 lg:px-16 py-16">
      <h2 class="text-xl font-semibold text-zinc-900 dark:text-white mb-1">Optical Alignment</h2>
      <p class="text-sm text-zinc-500 dark:text-zinc-400 mb-8">Mathematical centering does not equal visual centering. Icons with directional weight — arrows, play triangles, asymmetric shapes — must be optically adjusted.</p>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="p-6 border border-zinc-200 dark:border-zinc-800">
          <div class="w-16 h-16 bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center mb-4 mx-auto">
            <span class="text-xs text-zinc-400 dark:text-zinc-500">Play</span>
          </div>
          <h3 class="text-sm font-semibold text-zinc-900 dark:text-white mb-1 text-center">Directional Shapes</h3>
          <p class="text-xs text-zinc-500 dark:text-zinc-400 text-center">Triangles and arrows are shifted slightly toward their point direction to appear centered.</p>
        </div>
        <div class="p-6 border border-zinc-200 dark:border-zinc-800">
          <div class="w-16 h-16 bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center mb-4 mx-auto">
            <span class="text-xs text-zinc-400 dark:text-zinc-500">Circle</span>
          </div>
          <h3 class="text-sm font-semibold text-zinc-900 dark:text-white mb-1 text-center">Round Shapes</h3>
          <p class="text-xs text-zinc-500 dark:text-zinc-400 text-center">Circles and rounded forms extend slightly beyond the grid to match the perceived size of square shapes.</p>
        </div>
        <div class="p-6 border border-zinc-200 dark:border-zinc-800">
          <div class="w-16 h-16 bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center mb-4 mx-auto">
            <span class="text-xs text-zinc-400 dark:text-zinc-500">Text+Ic</span>
          </div>
          <h3 class="text-sm font-semibold text-zinc-900 dark:text-white mb-1 text-center">Inline with Text</h3>
          <p class="text-xs text-zinc-500 dark:text-zinc-400 text-center">When placed next to text, icons are vertically centered to the cap height, not the full line height.</p>
        </div>
      </div>
    </section>
  </div>
</template>
