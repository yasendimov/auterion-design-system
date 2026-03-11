<script setup lang="ts">
</script>

<template>
  <div>
    <header class="px-8 lg:px-16 pt-16 pb-12">
      <p class="text-[11px] text-zinc-400 dark:text-zinc-500 uppercase tracking-widest font-medium mb-3">Photography</p>
      <h1 class="text-5xl font-medium text-zinc-900 dark:text-white">Blog</h1>
      <p class="text-base text-zinc-500 dark:text-zinc-400 mt-4 max-w-xl leading-relaxed">
        Hero images, inline photography, caption formatting, and editorial image standards for the Auterion blog.
      </p>
    </header>

    <div class="border-t border-zinc-200 dark:border-zinc-800"></div>

    <section class="px-8 lg:px-16 py-16">
      <h2 class="text-xl font-semibold text-zinc-900 dark:text-white mb-4">Hero Image Specifications</h2>
      <p class="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed max-w-2xl mb-8">
        Every blog post opens with a full-width hero image that sets the visual tone. The hero is the first thing readers see and the image used in social sharing previews.
      </p>
      <div class="bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center mb-6" style="aspect-ratio: 1440/600;">
        <span class="text-sm text-zinc-400 dark:text-zinc-500">Hero image — 1440 x 600, full-width, edge-to-edge</span>
      </div>
      <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div class="p-6 border border-zinc-200 dark:border-zinc-800">
          <p class="text-[11px] text-zinc-400 dark:text-zinc-500 uppercase tracking-widest font-medium mb-2">Dimensions</p>
          <p class="text-lg font-semibold text-zinc-900 dark:text-white">1440 x 600</p>
          <p class="text-xs text-zinc-500 dark:text-zinc-400 mt-1">2.4:1 aspect ratio, full-width</p>
        </div>
        <div class="p-6 border border-zinc-200 dark:border-zinc-800">
          <p class="text-[11px] text-zinc-400 dark:text-zinc-500 uppercase tracking-widest font-medium mb-2">File Format</p>
          <p class="text-lg font-semibold text-zinc-900 dark:text-white">WebP / JPG</p>
          <p class="text-xs text-zinc-500 dark:text-zinc-400 mt-1">WebP preferred, JPEG fallback, under 300 KB</p>
        </div>
        <div class="p-6 border border-zinc-200 dark:border-zinc-800">
          <p class="text-[11px] text-zinc-400 dark:text-zinc-500 uppercase tracking-widest font-medium mb-2">Focal Point</p>
          <p class="text-lg font-semibold text-zinc-900 dark:text-white">Center</p>
          <p class="text-xs text-zinc-500 dark:text-zinc-400 mt-1">Subject centered vertically — image crops from edges on smaller viewports</p>
        </div>
        <div class="p-6 border border-zinc-200 dark:border-zinc-800">
          <p class="text-[11px] text-zinc-400 dark:text-zinc-500 uppercase tracking-widest font-medium mb-2">Text Overlay</p>
          <p class="text-lg font-semibold text-zinc-900 dark:text-white">None</p>
          <p class="text-xs text-zinc-500 dark:text-zinc-400 mt-1">Post title is rendered in HTML below the hero, never burned into the image</p>
        </div>
      </div>
    </section>

    <div class="border-t border-zinc-200 dark:border-zinc-800"></div>

    <section class="px-8 lg:px-16 py-16">
      <h2 class="text-xl font-semibold text-zinc-900 dark:text-white mb-4">Inline Image Sizing</h2>
      <p class="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed max-w-2xl mb-8">
        Images within blog post body content use three standard widths. Choose based on the image content and its role in the narrative.
      </p>
      <div class="space-y-8 max-w-3xl">
        <div>
          <h3 class="text-sm font-semibold text-zinc-900 dark:text-white mb-3">Full-Width (100% content area)</h3>
          <div class="bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center" style="aspect-ratio: 16/9;">
            <span class="text-sm text-zinc-400 dark:text-zinc-500">Full-width inline — 16:9, max 1200px rendered</span>
          </div>
          <p class="text-xs text-zinc-500 dark:text-zinc-400 mt-2">Use for hero-level imagery within the post — mission shots, aerial panoramas, and product reveal moments. Export at 2400px wide for retina displays.</p>
        </div>
        <div>
          <h3 class="text-sm font-semibold text-zinc-900 dark:text-white mb-3">Medium (75% content area)</h3>
          <div class="w-3/4 bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center" style="aspect-ratio: 4/3;">
            <span class="text-sm text-zinc-400 dark:text-zinc-500">Medium inline — 4:3, centered</span>
          </div>
          <p class="text-xs text-zinc-500 dark:text-zinc-400 mt-2">Product photos, team shots, event photography. Centered within the content column. Export at 1800px wide.</p>
        </div>
        <div>
          <h3 class="text-sm font-semibold text-zinc-900 dark:text-white mb-3">Side-by-Side (50% each)</h3>
          <div class="grid grid-cols-2 gap-4">
            <div class="aspect-square bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center">
              <span class="text-sm text-zinc-400 dark:text-zinc-500">Before / comparison A</span>
            </div>
            <div class="aspect-square bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center">
              <span class="text-sm text-zinc-400 dark:text-zinc-500">After / comparison B</span>
            </div>
          </div>
          <p class="text-xs text-zinc-500 dark:text-zinc-400 mt-2">Before/after comparisons, product variants, or complementary views. Each image at 1200px wide. 16px gap between.</p>
        </div>
      </div>
    </section>

    <div class="border-t border-zinc-200 dark:border-zinc-800"></div>

    <section class="px-8 lg:px-16 py-16">
      <h2 class="text-xl font-semibold text-zinc-900 dark:text-white mb-4">Caption Formatting</h2>
      <p class="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed max-w-2xl mb-8">
        Captions provide essential context and attribution. Every image in a blog post should have a caption unless it is purely decorative.
      </p>
      <div class="max-w-3xl">
        <div class="aspect-video bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center">
          <span class="text-sm text-zinc-400 dark:text-zinc-500">Skynode S integrated into an FPV airframe</span>
        </div>
        <p class="text-xs text-zinc-500 dark:text-zinc-400 mt-2 italic">Skynode S mounted on a custom FPV frame during integration testing at Auterion's Zurich R&D facility. Photo: Auterion / J. Mueller</p>
      </div>
      <div class="grid gap-4 sm:grid-cols-2 mt-8 max-w-3xl">
        <div class="p-6 border border-zinc-200 dark:border-zinc-800">
          <h3 class="text-sm font-semibold text-zinc-900 dark:text-white mb-2">Style</h3>
          <p class="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">12px (text-xs), italic, zinc-500/400 color. Left-aligned beneath the image. Maximum two sentences.</p>
        </div>
        <div class="p-6 border border-zinc-200 dark:border-zinc-800">
          <h3 class="text-sm font-semibold text-zinc-900 dark:text-white mb-2">Content</h3>
          <p class="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">Describe what the image shows in factual terms. Avoid marketing language in captions. Include location and context when available.</p>
        </div>
        <div class="p-6 border border-zinc-200 dark:border-zinc-800">
          <h3 class="text-sm font-semibold text-zinc-900 dark:text-white mb-2">Credit Format</h3>
          <p class="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">Append credit after the description: "Photo: Auterion / Photographer Name" or "Photo: Partner Org". Always credit third-party photographers.</p>
        </div>
        <div class="p-6 border border-zinc-200 dark:border-zinc-800">
          <h3 class="text-sm font-semibold text-zinc-900 dark:text-white mb-2">Spacing</h3>
          <p class="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">8px gap between image bottom and caption (mt-2). 32px gap between caption and next content block.</p>
        </div>
      </div>
    </section>

    <div class="border-t border-zinc-200 dark:border-zinc-800"></div>

    <section class="px-8 lg:px-16 py-16">
      <h2 class="text-xl font-semibold text-zinc-900 dark:text-white mb-4">Alt Text Guidelines</h2>
      <p class="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed max-w-2xl mb-8">
        Every image requires meaningful alt text for accessibility and SEO. Alt text should describe what the image shows, not what it means or how it should make the reader feel.
      </p>
      <div class="space-y-6 max-w-3xl">
        <div class="border-l-2 border-blue-500 pl-5">
          <h3 class="text-sm font-semibold text-zinc-900 dark:text-white mb-1">Be Specific and Factual</h3>
          <p class="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">Describe the subject, action, and context. "A formation of six drones flying over a desert landscape at sunset" is better than "Auterion's amazing drone swarm."</p>
        </div>
        <div class="border-l-2 border-blue-500 pl-5">
          <h3 class="text-sm font-semibold text-zinc-900 dark:text-white mb-1">Include Product Names</h3>
          <p class="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">When hardware is visible, name it: "Skynode S autopilot board with connected GPS and telemetry modules." This aids both accessibility and search indexing.</p>
        </div>
        <div class="border-l-2 border-blue-500 pl-5">
          <h3 class="text-sm font-semibold text-zinc-900 dark:text-white mb-1">Length</h3>
          <p class="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">Keep alt text between 50 and 150 characters. Long enough to be useful, short enough that screen readers don't overwhelm the listener.</p>
        </div>
        <div class="border-l-2 border-blue-500 pl-5">
          <h3 class="text-sm font-semibold text-zinc-900 dark:text-white mb-1">Skip Decorative Images</h3>
          <p class="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">Use empty alt="" for purely decorative dividers or background textures. If the image adds meaning, it needs a description.</p>
        </div>
      </div>
    </section>

    <div class="border-t border-zinc-200 dark:border-zinc-800"></div>

    <section class="px-8 lg:px-16 py-16">
      <h2 class="text-xl font-semibold text-zinc-900 dark:text-white mb-4">Image Credits Format</h2>
      <p class="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed max-w-2xl mb-8">
        Proper attribution protects Auterion legally and maintains professional relationships with photographers and partners.
      </p>
      <div class="overflow-x-auto max-w-3xl">
        <table class="w-full text-sm">
          <thead>
            <tr class="border-b border-zinc-300 dark:border-zinc-700 text-left">
              <th class="py-3 pr-6 text-[11px] font-medium text-zinc-400 dark:text-zinc-500 uppercase tracking-widest">Source</th>
              <th class="py-3 text-[11px] font-medium text-zinc-400 dark:text-zinc-500 uppercase tracking-widest">Credit Format</th>
            </tr>
          </thead>
          <tbody>
            <tr class="border-b border-zinc-200 dark:border-zinc-800">
              <td class="py-3 pr-6 font-medium text-zinc-900 dark:text-white">In-house photographer</td>
              <td class="py-3 text-zinc-500 dark:text-zinc-400">Photo: Auterion / First Last</td>
            </tr>
            <tr class="border-b border-zinc-200 dark:border-zinc-800">
              <td class="py-3 pr-6 font-medium text-zinc-900 dark:text-white">Freelance / contracted</td>
              <td class="py-3 text-zinc-500 dark:text-zinc-400">Photo: First Last for Auterion</td>
            </tr>
            <tr class="border-b border-zinc-200 dark:border-zinc-800">
              <td class="py-3 pr-6 font-medium text-zinc-900 dark:text-white">Partner organization</td>
              <td class="py-3 text-zinc-500 dark:text-zinc-400">Photo: Partner Name</td>
            </tr>
            <tr class="border-b border-zinc-200 dark:border-zinc-800">
              <td class="py-3 pr-6 font-medium text-zinc-900 dark:text-white">Stock / licensed</td>
              <td class="py-3 text-zinc-500 dark:text-zinc-400">Photo: Source Name (license type)</td>
            </tr>
            <tr class="border-b border-zinc-200 dark:border-zinc-800">
              <td class="py-3 pr-6 font-medium text-zinc-900 dark:text-white">Video still</td>
              <td class="py-3 text-zinc-500 dark:text-zinc-400">Still from: Video Title, Auterion</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <div class="border-t border-zinc-200 dark:border-zinc-800"></div>

    <section class="px-8 lg:px-16 py-16">
      <h2 class="text-xl font-semibold text-zinc-900 dark:text-white mb-6">Layout Examples</h2>
      <p class="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed max-w-2xl mb-8">
        Two standard blog post layouts demonstrate how hero and inline images work together within the content flow.
      </p>
      <div class="grid gap-8 sm:grid-cols-2">
        <div class="p-6 border border-zinc-200 dark:border-zinc-800">
          <h3 class="text-sm font-semibold text-zinc-900 dark:text-white mb-4">Standard Post</h3>
          <div class="space-y-3">
            <div class="rounded bg-zinc-100 dark:bg-zinc-800 h-16 flex items-center justify-center">
              <span class="text-[10px] text-zinc-400 dark:text-zinc-500">Hero 1440x600</span>
            </div>
            <div class="h-2 bg-zinc-200 dark:bg-zinc-700 rounded w-2/3"></div>
            <div class="h-2 bg-zinc-200 dark:bg-zinc-700 rounded w-full"></div>
            <div class="h-2 bg-zinc-200 dark:bg-zinc-700 rounded w-5/6"></div>
            <div class="rounded bg-zinc-100 dark:bg-zinc-800 h-24 flex items-center justify-center">
              <span class="text-[10px] text-zinc-400 dark:text-zinc-500">Full-width inline</span>
            </div>
            <div class="h-1 bg-zinc-200 dark:bg-zinc-700 rounded w-1/2"></div>
            <div class="h-2 bg-zinc-200 dark:bg-zinc-700 rounded w-full"></div>
            <div class="h-2 bg-zinc-200 dark:bg-zinc-700 rounded w-4/5"></div>
          </div>
          <p class="text-xs text-zinc-500 dark:text-zinc-400 mt-4">Hero followed by text, then a full-width inline image breaking up long content blocks.</p>
        </div>
        <div class="p-6 border border-zinc-200 dark:border-zinc-800">
          <h3 class="text-sm font-semibold text-zinc-900 dark:text-white mb-4">Visual Feature Post</h3>
          <div class="space-y-3">
            <div class="rounded bg-zinc-100 dark:bg-zinc-800 h-16 flex items-center justify-center">
              <span class="text-[10px] text-zinc-400 dark:text-zinc-500">Hero 1440x600</span>
            </div>
            <div class="h-2 bg-zinc-200 dark:bg-zinc-700 rounded w-3/4"></div>
            <div class="h-2 bg-zinc-200 dark:bg-zinc-700 rounded w-full"></div>
            <div class="grid grid-cols-2 gap-2">
              <div class="rounded bg-zinc-100 dark:bg-zinc-800 h-16 flex items-center justify-center">
                <span class="text-[10px] text-zinc-400 dark:text-zinc-500">Side A</span>
              </div>
              <div class="rounded bg-zinc-100 dark:bg-zinc-800 h-16 flex items-center justify-center">
                <span class="text-[10px] text-zinc-400 dark:text-zinc-500">Side B</span>
              </div>
            </div>
            <div class="h-2 bg-zinc-200 dark:bg-zinc-700 rounded w-full"></div>
            <div class="rounded bg-zinc-100 dark:bg-zinc-800 h-20 w-3/4 flex items-center justify-center">
              <span class="text-[10px] text-zinc-400 dark:text-zinc-500">Medium inline</span>
            </div>
            <div class="h-1 bg-zinc-200 dark:bg-zinc-700 rounded w-1/2"></div>
          </div>
          <p class="text-xs text-zinc-500 dark:text-zinc-400 mt-4">Image-heavy layout with side-by-side comparisons and mixed sizing for visual storytelling.</p>
        </div>
      </div>
    </section>
  </div>
</template>
