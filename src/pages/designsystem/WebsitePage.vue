<script setup lang="ts">
</script>

<template>
  <div>
    <header class="px-8 lg:px-16 pt-16 pb-12">
      <p class="text-[11px] text-dim uppercase tracking-widest font-medium mb-3">Design System</p>
      <h1 class="text-5xl font-medium text-high">Website</h1>
      <p class="text-base text-low mt-4 max-w-xl leading-relaxed">
        The Auterion website as an expression of the design system. How brand tokens translate to web layouts, components, and page structures.
      </p>
    </header>

    <div class="border-t border-line"></div>

    <!-- Introduction -->
    <section id="introduction" class="px-8 lg:px-16 py-16">
      <h2 class="text-xl font-semibold text-high mb-8">Introduction</h2>
      <div class="max-w-2xl">
        <p class="text-sm text-low leading-relaxed mb-4">
          The Auterion website bridges the aerospace-grade precision of the product design system with the storytelling needs of a public-facing brand. It uses the same token architecture -- primitives, semantic aliases, and themed surfaces -- ensuring visual consistency from marketing site to product UI.
        </p>
        <p class="text-sm text-low leading-relaxed mb-4">
          Dark mode remains the default, reinforcing the brand's technical identity. Typography follows the Inter type scale with generous whitespace for scanning. Primary blue drives all interactive elements and calls to action, while the full semantic palette appears in product feature sections and data visualizations.
        </p>
        <p class="text-sm text-low leading-relaxed">
          Every website component is built from the same building blocks available to product teams, creating a seamless experience when visitors transition from the marketing site into the application.
        </p>
      </div>
    </section>

    <div class="border-t border-line"></div>

    <!-- Components -->
    <section id="components" class="px-8 lg:px-16 py-16">
      <h2 class="text-xl font-semibold text-high mb-8">Components</h2>
      <div class="grid gap-8 sm:grid-cols-2">
        <!-- Hero Section -->
        <div class="p-6 border border-line sm:col-span-2">
          <div class="aspect-3/1 bg-surface-1 flex items-center justify-center mb-4">
            <span class="text-sm text-dim">Hero section -- full-bleed with text overlay</span>
          </div>
          <h3 class="text-sm font-semibold text-high mb-2">Hero Section</h3>
          <p class="text-sm text-low leading-relaxed mb-3">Full-bleed container on page-bg. Headline in Inter Semibold 56-72pt (responsive), subheadline in Inter Regular 20pt text-secondary. CTA button uses primary fill with on-primary text. Optional background image with dark gradient overlay to maintain text contrast.</p>
          <div class="flex flex-wrap gap-2">
            <span class="px-2 py-1 text-[11px] font-medium text-low bg-surface-1 rounded">Layout: Full-bleed, max-w-7xl content</span>
            <span class="px-2 py-1 text-[11px] font-medium text-low bg-surface-1 rounded">Font: Inter 56-72pt headline</span>
            <span class="px-2 py-1 text-[11px] font-medium text-low bg-surface-1 rounded">Color: page-bg, primary CTA</span>
          </div>
        </div>

        <!-- Feature Card -->
        <div class="p-6 border border-line">
          <div class="aspect-video bg-surface-1 flex items-center justify-center mb-4">
            <span class="text-sm text-dim">Feature card with icon</span>
          </div>
          <h3 class="text-sm font-semibold text-high mb-2">Feature Card</h3>
          <p class="text-sm text-low leading-relaxed mb-3">Card on surface-1 with border-subtle. 24px Heroicon in primary color, title in Inter Semibold 18pt, description in text-secondary 14pt. Hover state elevates with subtle shadow and border-default transition.</p>
          <div class="flex flex-wrap gap-2">
            <span class="px-2 py-1 text-[11px] font-medium text-low bg-surface-1 rounded">Surface: surface-1</span>
            <span class="px-2 py-1 text-[11px] font-medium text-low bg-surface-1 rounded">Icon: 24px Heroicon, primary</span>
            <span class="px-2 py-1 text-[11px] font-medium text-low bg-surface-1 rounded">Hover: shadow + border transition</span>
          </div>
        </div>

        <!-- Product Spec Table -->
        <div class="p-6 border border-line">
          <div class="aspect-video bg-surface-1 flex items-center justify-center mb-4">
            <span class="text-sm text-dim">Product specification table</span>
          </div>
          <h3 class="text-sm font-semibold text-high mb-2">Product Spec Table</h3>
          <p class="text-sm text-low leading-relaxed mb-3">Striped table alternating page-bg and surface-1 rows. Labels in text-secondary Inter 13pt, values in text-primary JetBrains Mono 13pt for tabular alignment. Column headers use text-tertiary uppercase 11px tracking-widest.</p>
          <div class="flex flex-wrap gap-2">
            <span class="px-2 py-1 text-[11px] font-medium text-low bg-surface-1 rounded">Surface: alternating rows</span>
            <span class="px-2 py-1 text-[11px] font-medium text-low bg-surface-1 rounded">Font: Inter labels + Mono values</span>
            <span class="px-2 py-1 text-[11px] font-medium text-low bg-surface-1 rounded">Text: text-secondary, text-primary</span>
          </div>
        </div>

        <!-- CTA Button -->
        <div class="p-6 border border-line">
          <div class="aspect-video bg-surface-1 flex items-center justify-center mb-4">
            <span class="text-sm text-dim">CTA button variants</span>
          </div>
          <h3 class="text-sm font-semibold text-high mb-2">CTA Buttons</h3>
          <p class="text-sm text-low leading-relaxed mb-3">Primary: primary fill, on-primary text,, px-6 py-3. Secondary: transparent with primary border, primary text. Hover uses primary-hover fill. Focus ring uses primary-border. Inter Semibold 14pt label.</p>
          <div class="flex flex-wrap gap-2">
            <span class="px-2 py-1 text-[11px] font-medium text-low bg-surface-1 rounded">Color: primary, primary-hover</span>
            <span class="px-2 py-1 text-[11px] font-medium text-low bg-surface-1 rounded">Font: Inter Semibold 14pt</span>
            <span class="px-2 py-1 text-[11px] font-medium text-low bg-surface-1 rounded">Focus: primary-border ring</span>
          </div>
        </div>

        <!-- Navigation Bar -->
        <div class="p-6 border border-line">
          <div class="aspect-video bg-surface-1 flex items-center justify-center mb-4">
            <span class="text-sm text-dim">Navigation bar</span>
          </div>
          <h3 class="text-sm font-semibold text-high mb-2">Navigation Bar</h3>
          <p class="text-sm text-low leading-relaxed mb-3">Fixed top bar on page-bg with backdrop blur. Logo left-aligned, nav links in Inter Medium 14pt text-secondary. Active link uses text-primary with primary underline. Mobile: hamburger icon triggers slide-out panel on surface-1.</p>
          <div class="flex flex-wrap gap-2">
            <span class="px-2 py-1 text-[11px] font-medium text-low bg-surface-1 rounded">Surface: page-bg + backdrop-blur</span>
            <span class="px-2 py-1 text-[11px] font-medium text-low bg-surface-1 rounded">Font: Inter Medium 14pt</span>
            <span class="px-2 py-1 text-[11px] font-medium text-low bg-surface-1 rounded">Active: text-primary + primary underline</span>
          </div>
        </div>

        <!-- Footer -->
        <div class="p-6 border border-line sm:col-span-2">
          <div class="aspect-4/1 bg-surface-1 flex items-center justify-center mb-4">
            <span class="text-sm text-dim">Footer layout</span>
          </div>
          <h3 class="text-sm font-semibold text-high mb-2">Footer</h3>
          <p class="text-sm text-low leading-relaxed mb-3">Full-width on surface-1 with border-t border-subtle. Four-column link grid using text-secondary 13pt, hover to text-primary. Bottom bar with copyright in text-tertiary 12pt. Wordmark logo at top-left of footer. Social icons in text-tertiary, hover to text-secondary.</p>
          <div class="flex flex-wrap gap-2">
            <span class="px-2 py-1 text-[11px] font-medium text-low bg-surface-1 rounded">Surface: surface-1</span>
            <span class="px-2 py-1 text-[11px] font-medium text-low bg-surface-1 rounded">Layout: 4-column grid</span>
            <span class="px-2 py-1 text-[11px] font-medium text-low bg-surface-1 rounded">Text: text-secondary links, text-tertiary meta</span>
          </div>
        </div>
      </div>
    </section>

    <div class="border-t border-line"></div>

    <!-- Examples -->
    <section id="examples" class="px-8 lg:px-16 py-16">
      <h2 class="text-xl font-semibold text-high mb-8">Examples</h2>
      <div class="grid gap-8 sm:grid-cols-2">
        <div>
          <div class="aspect-video bg-surface-1 flex items-center justify-center mb-4">
            <span class="text-sm text-dim">Homepage screenshot</span>
          </div>
          <h3 class="text-sm font-semibold text-high mb-2">Homepage</h3>
          <p class="text-sm text-low leading-relaxed">Full-bleed hero with dark gradient overlay. Stats bar using JetBrains Mono for figures. Feature card grid on surface-1. CTA sections with primary blue buttons. Footer with four-column link layout. All typography from the Inter scale.</p>
        </div>
        <div>
          <div class="aspect-video bg-surface-1 flex items-center justify-center mb-4">
            <span class="text-sm text-dim">Product page screenshot</span>
          </div>
          <h3 class="text-sm font-semibold text-high mb-2">Product Page</h3>
          <p class="text-sm text-low leading-relaxed">Product hero with spec highlights in JetBrains Mono. Tabbed feature sections using primary underline for active state. Spec table with alternating surface rows. Comparison grid using border-subtle dividers and semantic status indicators.</p>
        </div>
        <div>
          <div class="aspect-video bg-surface-1 flex items-center justify-center mb-4">
            <span class="text-sm text-dim">Capabilities page screenshot</span>
          </div>
          <h3 class="text-sm font-semibold text-high mb-2">Capabilities Page</h3>
          <p class="text-sm text-low leading-relaxed">Numbered capability sections with alternating image/text layout. Each section uses the feature card pattern. Data visualization callouts use accent (teal) for secondary metrics. Pull quotes in Inter Light 24pt with primary-border left accent.</p>
        </div>
        <div>
          <div class="aspect-video bg-surface-1 flex items-center justify-center mb-4">
            <span class="text-sm text-dim">Careers page screenshot</span>
          </div>
          <h3 class="text-sm font-semibold text-high mb-2">Careers Page</h3>
          <p class="text-sm text-low leading-relaxed">Team photo hero with dark overlay. Values section using feature cards with primary-tinted icons. Open positions list using the vehicle list item pattern adapted for job listings. Location tags in text-tertiary with border-subtle pill styling.</p>
        </div>
      </div>
    </section>
  </div>
</template>
