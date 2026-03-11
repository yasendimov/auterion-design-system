<script setup lang="ts">
</script>

<template>
  <div>
    <header class="px-8 lg:px-16 pt-16 pb-12">
      <p class="text-[11px] text-zinc-400 dark:text-zinc-500 uppercase tracking-widest font-medium mb-3">Photography</p>
      <h1 class="text-5xl font-medium text-zinc-900 dark:text-white">YouTube</h1>
      <p class="text-base text-zinc-500 dark:text-zinc-400 mt-4 max-w-xl leading-relaxed">
        Thumbnail templates, video stills, title cards, and motion graphics guidelines for Auterion's YouTube presence.
      </p>
    </header>

    <div class="border-t border-zinc-200 dark:border-zinc-800"></div>

    <section class="px-8 lg:px-16 py-16">
      <h2 class="text-xl font-semibold text-zinc-900 dark:text-white mb-4">Thumbnail Specifications</h2>
      <p class="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed max-w-2xl mb-8">
        Thumbnails are the single most important visual for video discovery. They must be readable at mobile size (approximately 168x94px rendered) and convey the video topic in under two seconds.
      </p>
      <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div class="p-6 border border-zinc-200 dark:border-zinc-800">
          <p class="text-[11px] text-zinc-400 dark:text-zinc-500 uppercase tracking-widest font-medium mb-2">Resolution</p>
          <p class="text-lg font-semibold text-zinc-900 dark:text-white">1280 x 720</p>
          <p class="text-xs text-zinc-500 dark:text-zinc-400 mt-1">16:9 aspect ratio, minimum width 640px</p>
        </div>
        <div class="p-6 border border-zinc-200 dark:border-zinc-800">
          <p class="text-[11px] text-zinc-400 dark:text-zinc-500 uppercase tracking-widest font-medium mb-2">File Format</p>
          <p class="text-lg font-semibold text-zinc-900 dark:text-white">JPG / PNG</p>
          <p class="text-xs text-zinc-500 dark:text-zinc-400 mt-1">Under 2 MB file size</p>
        </div>
        <div class="p-6 border border-zinc-200 dark:border-zinc-800">
          <p class="text-[11px] text-zinc-400 dark:text-zinc-500 uppercase tracking-widest font-medium mb-2">Text Limit</p>
          <p class="text-lg font-semibold text-zinc-900 dark:text-white">3-5 Words</p>
          <p class="text-xs text-zinc-500 dark:text-zinc-400 mt-1">Bold, high-contrast, readable at 168px wide</p>
        </div>
        <div class="p-6 border border-zinc-200 dark:border-zinc-800">
          <p class="text-[11px] text-zinc-400 dark:text-zinc-500 uppercase tracking-widest font-medium mb-2">Safe Zone</p>
          <p class="text-lg font-semibold text-zinc-900 dark:text-white">Bottom-right</p>
          <p class="text-xs text-zinc-500 dark:text-zinc-400 mt-1">Avoid — YouTube overlays timestamp here</p>
        </div>
      </div>
    </section>

    <div class="border-t border-zinc-200 dark:border-zinc-800"></div>

    <section class="px-8 lg:px-16 py-16">
      <h2 class="text-xl font-semibold text-zinc-900 dark:text-white mb-6">Thumbnail Templates</h2>
      <p class="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed max-w-2xl mb-8">
        Three standard thumbnail layouts cover the majority of Auterion video content. Maintain consistency by using these templates as the starting point for every video.
      </p>
      <div class="grid gap-6 sm:grid-cols-3">
        <div>
          <div class="aspect-video bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center">
            <span class="text-sm text-zinc-400 dark:text-zinc-500">Product Demo — drone left, title right</span>
          </div>
          <h3 class="text-sm font-semibold text-zinc-900 dark:text-white mt-3">Product Demo</h3>
          <p class="text-xs text-zinc-500 dark:text-zinc-400 mt-1">Product on the left third, bold title text on the right. Dark gradient background. Auterion logo badge top-left.</p>
        </div>
        <div>
          <div class="aspect-video bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center">
            <span class="text-sm text-zinc-400 dark:text-zinc-500">Mission Footage — full-bleed aerial, text overlay</span>
          </div>
          <h3 class="text-sm font-semibold text-zinc-900 dark:text-white mt-3">Mission Footage</h3>
          <p class="text-xs text-zinc-500 dark:text-zinc-400 mt-1">Full-bleed aerial photograph with text overlay in the upper half. Slight dark vignette for text legibility.</p>
        </div>
        <div>
          <div class="aspect-video bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center">
            <span class="text-sm text-zinc-400 dark:text-zinc-500">Interview / Talk — speaker with name lower-third</span>
          </div>
          <h3 class="text-sm font-semibold text-zinc-900 dark:text-white mt-3">Interview / Talk</h3>
          <p class="text-xs text-zinc-500 dark:text-zinc-400 mt-1">Speaker portrait on right two-thirds, topic title on left. Clean background or bokeh environment.</p>
        </div>
      </div>
    </section>

    <div class="border-t border-zinc-200 dark:border-zinc-800"></div>

    <section class="px-8 lg:px-16 py-16">
      <h2 class="text-xl font-semibold text-zinc-900 dark:text-white mb-4">Title Cards</h2>
      <p class="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed max-w-2xl mb-8">
        Title cards appear in the first 2-3 seconds of a video and at chapter transitions. They set the visual tone and reinforce brand identity.
      </p>
      <div class="space-y-6 max-w-3xl">
        <div class="border-l-2 border-blue-500 pl-5">
          <h3 class="text-sm font-semibold text-zinc-900 dark:text-white mb-1">Opening Title</h3>
          <p class="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">Dark background (#0a0a0a). Auterion wordmark centered, followed by video title in Inter Semibold. Duration: 2 seconds with fade.</p>
        </div>
        <div class="border-l-2 border-blue-500 pl-5">
          <h3 class="text-sm font-semibold text-zinc-900 dark:text-white mb-1">Chapter Cards</h3>
          <p class="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">Same dark background. Chapter number in small caps above the section title. Transition: 0.5s crossfade from live footage.</p>
        </div>
        <div class="border-l-2 border-blue-500 pl-5">
          <h3 class="text-sm font-semibold text-zinc-900 dark:text-white mb-1">Typography</h3>
          <p class="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">Inter Variable for all on-screen text. Titles at 48-64px, subtitles at 24-32px. White (#ffffff) on dark backgrounds. Tracking: normal to +0.02em.</p>
        </div>
      </div>
    </section>

    <div class="border-t border-zinc-200 dark:border-zinc-800"></div>

    <section class="px-8 lg:px-16 py-16">
      <h2 class="text-xl font-semibold text-zinc-900 dark:text-white mb-4">Video Still Guidelines</h2>
      <p class="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed max-w-2xl mb-8">
        Video stills pulled for press, social media, or documentation should meet the same art direction standards as dedicated photography.
      </p>
      <div class="grid gap-4 sm:grid-cols-2">
        <div class="p-6 border border-zinc-200 dark:border-zinc-800">
          <h3 class="text-sm font-semibold text-zinc-900 dark:text-white mb-2">Resolution</h3>
          <p class="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">Export at 1920x1080 minimum. For print use, pull from 4K source footage when available.</p>
        </div>
        <div class="p-6 border border-zinc-200 dark:border-zinc-800">
          <h3 class="text-sm font-semibold text-zinc-900 dark:text-white mb-2">Frame Selection</h3>
          <p class="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">Choose frames with minimal motion blur. Pause on composition-strong moments — formation shots, operator interactions, product reveals.</p>
        </div>
        <div class="p-6 border border-zinc-200 dark:border-zinc-800">
          <h3 class="text-sm font-semibold text-zinc-900 dark:text-white mb-2">Color Correction</h3>
          <p class="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">Apply the standard Auterion color grade (desaturated base, selective color) to match the photography system. Do not use the raw video LUT.</p>
        </div>
        <div class="p-6 border border-zinc-200 dark:border-zinc-800">
          <h3 class="text-sm font-semibold text-zinc-900 dark:text-white mb-2">Overlay Removal</h3>
          <p class="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">Remove any on-screen UI, timestamps, or watermarks before using a video still as a standalone image.</p>
        </div>
      </div>
    </section>

    <div class="border-t border-zinc-200 dark:border-zinc-800"></div>

    <section class="px-8 lg:px-16 py-16">
      <h2 class="text-xl font-semibold text-zinc-900 dark:text-white mb-4">Lower-Third Graphics</h2>
      <p class="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed max-w-2xl mb-8">
        Lower thirds identify speakers and display contextual information. They should be minimal and not compete with the video content.
      </p>
      <div class="aspect-video bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center relative mb-6">
        <span class="text-sm text-zinc-400 dark:text-zinc-500">Video frame with lower-third overlay</span>
        <div class="absolute bottom-6 left-6 bg-zinc-900/80 dark:bg-zinc-100/10 backdrop-blur-sm rounded px-4 py-2">
          <p class="text-xs font-semibold text-white">Speaker Name</p>
          <p class="text-[10px] text-zinc-400">Title, Auterion</p>
        </div>
      </div>
      <div class="grid gap-4 sm:grid-cols-3 max-w-3xl">
        <div class="p-6 border border-zinc-200 dark:border-zinc-800">
          <h3 class="text-sm font-semibold text-zinc-900 dark:text-white mb-2">Position</h3>
          <p class="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">Bottom-left, 48px from edge. Never bottom-right (reserved for YouTube controls).</p>
        </div>
        <div class="p-6 border border-zinc-200 dark:border-zinc-800">
          <h3 class="text-sm font-semibold text-zinc-900 dark:text-white mb-2">Style</h3>
          <p class="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">Semi-transparent dark background with backdrop blur. Name in semibold, title in regular weight.</p>
        </div>
        <div class="p-6 border border-zinc-200 dark:border-zinc-800">
          <h3 class="text-sm font-semibold text-zinc-900 dark:text-white mb-2">Duration</h3>
          <p class="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">Display for 4-5 seconds. Fade in 0.3s, fade out 0.3s. Show once per speaker per segment.</p>
        </div>
      </div>
    </section>

    <div class="border-t border-zinc-200 dark:border-zinc-800"></div>

    <section class="px-8 lg:px-16 py-16">
      <h2 class="text-xl font-semibold text-zinc-900 dark:text-white mb-4">End Screen Layout</h2>
      <p class="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed max-w-2xl mb-8">
        The last 20 seconds of every video include a branded end screen with subscribe and next-video elements. YouTube end screen elements must fit within designated zones.
      </p>
      <div class="aspect-video bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center relative mb-6">
        <span class="text-sm text-zinc-400 dark:text-zinc-500">End screen — logo center, two video slots right</span>
      </div>
      <div class="space-y-6 max-w-3xl">
        <div class="border-l-2 border-blue-500 pl-5">
          <h3 class="text-sm font-semibold text-zinc-900 dark:text-white mb-1">Background</h3>
          <p class="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">Dark gradient or slowed/frozen final video frame with 60% dark overlay. Auterion wordmark centered in the upper third.</p>
        </div>
        <div class="border-l-2 border-blue-500 pl-5">
          <h3 class="text-sm font-semibold text-zinc-900 dark:text-white mb-1">Element Placement</h3>
          <p class="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">Subscribe button centered below the logo. Two video/playlist slots stacked on the right third. Keep elements within YouTube's designated safe zone grid.</p>
        </div>
        <div class="border-l-2 border-blue-500 pl-5">
          <h3 class="text-sm font-semibold text-zinc-900 dark:text-white mb-1">Duration</h3>
          <p class="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">Minimum 5 seconds, maximum 20 seconds. Elements appear 1 second into the end screen sequence.</p>
        </div>
      </div>
    </section>
  </div>
</template>
