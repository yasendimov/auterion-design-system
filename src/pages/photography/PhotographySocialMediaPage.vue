<script setup lang="ts">
</script>

<template>
  <div>
    <header class="px-10 lg:px-20 pt-24 pb-16">
      <p class="text-[11px] text-dim uppercase tracking-widest font-medium mb-5">Photography</p>
      <h1 class="text-5xl font-medium text-high">Social Media</h1>
      <p class="text-base text-low mt-6 max-w-xl leading-relaxed">
        Platform-specific image specs, text overlay rules, and visual standards for Auterion's social media presence.
      </p>
    </header>

    <div class="border-t border-line"></div>

    <section class="px-10 lg:px-20 py-24">
      <h2 class="text-xl font-semibold text-high mb-6">Platform Specifications</h2>
      <p class="text-sm text-low leading-relaxed max-w-2xl mb-8">
        Each platform has distinct image dimensions and viewing contexts. Always export at the exact recommended resolution to avoid compression artifacts and cropping issues.
      </p>
      <div class="overflow-x-auto">
        <table class="w-full text-sm">
          <thead>
            <tr class="border-b border-line-hover  text-left">
              <th class="py-3 pr-6 text-[11px] font-medium text-dim uppercase tracking-widest">Platform</th>
              <th class="py-3 pr-6 text-[11px] font-medium text-dim uppercase tracking-widest">Dimensions</th>
              <th class="py-3 pr-6 text-[11px] font-medium text-dim uppercase tracking-widest">Aspect Ratio</th>
              <th class="py-3 text-[11px] font-medium text-dim uppercase tracking-widest">Format</th>
            </tr>
          </thead>
          <tbody>
            <tr class="border-b border-line">
              <td class="py-3 pr-6 font-medium text-high">LinkedIn</td>
              <td class="py-3 pr-6 text-low">1200 x 627</td>
              <td class="py-3 pr-6 text-low">1.91:1</td>
              <td class="py-3 text-low">JPG or PNG, under 5 MB</td>
            </tr>
            <tr class="border-b border-line">
              <td class="py-3 pr-6 font-medium text-high">X / Twitter</td>
              <td class="py-3 pr-6 text-low">1600 x 900</td>
              <td class="py-3 pr-6 text-low">16:9</td>
              <td class="py-3 text-low">JPG or PNG, under 5 MB</td>
            </tr>
            <tr class="border-b border-line">
              <td class="py-3 pr-6 font-medium text-high">Instagram</td>
              <td class="py-3 pr-6 text-low">1080 x 1080</td>
              <td class="py-3 pr-6 text-low">1:1</td>
              <td class="py-3 text-low">JPG or PNG, under 8 MB</td>
            </tr>
            <tr class="border-b border-line">
              <td class="py-3 pr-6 font-medium text-high">Instagram Stories</td>
              <td class="py-3 pr-6 text-low">1080 x 1920</td>
              <td class="py-3 pr-6 text-low">9:16</td>
              <td class="py-3 text-low">JPG or PNG, under 8 MB</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <div class="border-t border-line"></div>

    <section class="px-10 lg:px-20 py-24">
      <h2 class="text-xl font-semibold text-high mb-6">Platform Examples</h2>
      <div class="grid gap-8 sm:grid-cols-3">
        <div>
          <h3 class="text-sm font-semibold text-high mb-3">LinkedIn (1200 x 627)</h3>
          <div class="bg-surface-1 flex items-center justify-center" style="aspect-ratio: 1200/627;">
            <span class="text-sm text-dim">Swarm deployment with headline overlay</span>
          </div>
          <p class="text-xs text-low mt-2">Best for thought leadership, product announcements, and company milestones. Text overlays should be minimal and positioned in the upper-left quadrant.</p>
        </div>
        <div>
          <h3 class="text-sm font-semibold text-high mb-3">X / Twitter (1600 x 900)</h3>
          <div class="aspect-video bg-surface-1 flex items-center justify-center">
            <span class="text-sm text-dim">Drone flight test with Auterion logo badge</span>
          </div>
          <p class="text-xs text-low mt-2">High-impact visuals for engagement. Keep text to a bold headline only — the post copy provides context. Logo badge in top-left corner.</p>
        </div>
        <div>
          <h3 class="text-sm font-semibold text-high mb-3">Instagram (1080 x 1080)</h3>
          <div class="aspect-square bg-surface-1 flex items-center justify-center">
            <span class="text-sm text-dim">Hardware close-up, centered subject</span>
          </div>
          <p class="text-xs text-low mt-2">Square crop favors centered compositions. Best for hardware detail shots, team photos, and behind-the-scenes content.</p>
        </div>
      </div>
    </section>

    <div class="border-t border-line"></div>

    <section class="px-10 lg:px-20 py-24">
      <h2 class="text-xl font-semibold text-high mb-4">Text Overlay Rules</h2>
      <p class="text-sm text-low leading-relaxed max-w-2xl mb-8">
        Text on social images must be immediately legible at mobile viewport widths. Less is always more — let the image do the work.
      </p>
      <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <div class="p-8 border border-line">
          <h3 class="text-sm font-semibold text-high mb-2">Maximum Word Count</h3>
          <p class="text-xs text-low leading-relaxed">No more than 6-8 words on any social image. If you need more context, put it in the post copy.</p>
        </div>
        <div class="p-8 border border-line">
          <h3 class="text-sm font-semibold text-high mb-2">Font Size</h3>
          <p class="text-xs text-low leading-relaxed">Headlines: minimum 48px on the 1200px canvas. Subheadings: minimum 24px. Inter Semibold for all text.</p>
        </div>
        <div class="p-8 border border-line">
          <h3 class="text-sm font-semibold text-high mb-2">Contrast</h3>
          <p class="text-xs text-low leading-relaxed">White text over a dark gradient overlay, or dark text on light image areas. Never place text directly on complex imagery without a backing gradient or solid bar.</p>
        </div>
        <div class="p-8 border border-line">
          <h3 class="text-sm font-semibold text-high mb-2">Alignment</h3>
          <p class="text-xs text-low leading-relaxed">Left-aligned for LinkedIn and X. Centered for Instagram square posts. Never right-aligned or justified.</p>
        </div>
        <div class="p-8 border border-line">
          <h3 class="text-sm font-semibold text-high mb-2">Safe Margins</h3>
          <p class="text-xs text-low leading-relaxed">Keep all text at least 60px from any edge. Account for platform UI overlaps (like/share buttons, profile pics in previews).</p>
        </div>
        <div class="p-8 border border-line">
          <h3 class="text-sm font-semibold text-high mb-2">No Hashtags on Image</h3>
          <p class="text-xs text-low leading-relaxed">Hashtags belong in the post copy only. Never render hashtags as text overlays on the image itself.</p>
        </div>
      </div>
    </section>

    <div class="border-t border-line"></div>

    <section class="px-10 lg:px-20 py-24">
      <h2 class="text-xl font-semibold text-high mb-4">Brand Element Placement</h2>
      <p class="text-sm text-low leading-relaxed max-w-2xl mb-8">
        The Auterion logo and brand elements should be present but never dominant. They serve as a signature, not a watermark.
      </p>
      <div class="space-y-6 max-w-3xl">
        <div class="border-l-2 border-primary pl-5">
          <h3 class="text-sm font-semibold text-high mb-1">Logo Badge</h3>
          <p class="text-sm text-low leading-relaxed">Small Auterion symbol (not wordmark) in the top-left corner. White on dark images, dark on light images. Size: approximately 5% of image width. 24px margin from edges.</p>
        </div>
        <div class="border-l-2 border-primary pl-5">
          <h3 class="text-sm font-semibold text-high mb-1">URL / CTA Bar</h3>
          <p class="text-sm text-low leading-relaxed">For campaign images only. Thin strip at bottom with auterion.com or a short CTA. Height: 40-48px. Background: brand blue (#1475ff) or semi-transparent dark.</p>
        </div>
        <div class="border-l-2 border-primary pl-5">
          <h3 class="text-sm font-semibold text-high mb-1">Co-Branding</h3>
          <p class="text-sm text-low leading-relaxed">When partner logos appear, Auterion logo goes first (left or top). Equal sizing. Minimum 32px spacing between logos. Separate with a thin vertical or horizontal rule if needed.</p>
        </div>
      </div>
    </section>

    <div class="border-t border-line"></div>

    <section class="px-10 lg:px-20 py-24">
      <h2 class="text-xl font-semibold text-high mb-4">Image Filter & Treatment</h2>
      <p class="text-sm text-low leading-relaxed max-w-2xl mb-8">
        Social media images follow the same color grading principles as all Auterion photography, with minor platform-specific adjustments.
      </p>
      <div class="grid gap-6 sm:grid-cols-2">
        <div class="p-8 border border-line">
          <h3 class="text-sm font-semibold text-high mb-2">Standard Treatment</h3>
          <p class="text-xs text-low leading-relaxed">Desaturated base with selective color preservation (blues and teals). Slightly lifted blacks for a modern, editorial feel. Apply consistently across all posts.</p>
        </div>
        <div class="p-8 border border-line">
          <h3 class="text-sm font-semibold text-high mb-2">High-Engagement Posts</h3>
          <p class="text-xs text-low leading-relaxed">For product launches or milestones, slightly boost contrast and saturation (10-15%) to stand out in feeds. Keep the desaturated background principle but let the subject pop more.</p>
        </div>
        <div class="p-8 border border-line">
          <h3 class="text-sm font-semibold text-high mb-2">Avoid</h3>
          <p class="text-xs text-low leading-relaxed">No Instagram-style filters, no heavy vignettes, no artificial bokeh, no AI-generated imagery presented as photography. Keep it authentic.</p>
        </div>
        <div class="p-8 border border-line">
          <h3 class="text-sm font-semibold text-high mb-2">Dark Mode Awareness</h3>
          <p class="text-xs text-low leading-relaxed">Many users browse in dark mode. Avoid images with large pure-white areas that create visual glare. Test images against both light and dark app backgrounds.</p>
        </div>
      </div>
    </section>
  </div>
</template>
