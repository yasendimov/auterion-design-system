<script setup lang="ts">
</script>

<template>
  <div>
    <header class="px-8 lg:px-16 pt-16 pb-12">
      <p class="text-[11px] text-zinc-400 dark:text-zinc-500 uppercase tracking-widest font-medium mb-3">Photography</p>
      <h1 class="text-5xl font-medium text-zinc-900 dark:text-white">Art Direction</h1>
      <p class="text-base text-zinc-500 dark:text-zinc-400 mt-4 max-w-xl leading-relaxed">
        Photographic style, mood, lighting, and composition principles for Auterion imagery — technical precision meets human purpose.
      </p>
    </header>

    <div class="border-t border-zinc-200 dark:border-zinc-800"></div>

    <section class="px-8 lg:px-16 py-16">
      <h2 class="text-xl font-semibold text-zinc-900 dark:text-white mb-4">Visual Mood</h2>
      <p class="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed max-w-2xl mb-8">
        Auterion photography bridges the gap between cutting-edge technology and meaningful human impact. Every image should convey quiet confidence, operational clarity, and the scale of autonomous systems working in concert. Avoid overly dramatic or cinematic looks — the technology speaks for itself.
      </p>
      <div class="grid gap-6 sm:grid-cols-2">
        <div>
          <div class="aspect-video bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center">
            <span class="text-sm text-zinc-400 dark:text-zinc-500">Swarm in formation over terrain — calm, controlled, precise</span>
          </div>
          <p class="text-xs text-zinc-500 dark:text-zinc-400 mt-2">Conveys operational confidence and technological mastery.</p>
        </div>
        <div>
          <div class="aspect-video bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center">
            <span class="text-sm text-zinc-400 dark:text-zinc-500">Operator reviewing fleet data at sunrise</span>
          </div>
          <p class="text-xs text-zinc-500 dark:text-zinc-400 mt-2">Human element grounds the technology in purpose and context.</p>
        </div>
      </div>
    </section>

    <div class="border-t border-zinc-200 dark:border-zinc-800"></div>

    <section class="px-8 lg:px-16 py-16">
      <h2 class="text-xl font-semibold text-zinc-900 dark:text-white mb-4">Lighting</h2>
      <p class="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed max-w-2xl mb-8">
        Natural light is strongly preferred. Golden hour and overcast conditions produce the most authentic results. Avoid heavy studio setups, artificial color gels, or over-processed HDR. When shooting indoors (labs, control rooms), use available ambient light supplemented with soft fill only where necessary.
      </p>
      <div class="grid gap-4 sm:grid-cols-3">
        <div class="p-6 border border-zinc-200 dark:border-zinc-800">
          <h3 class="text-sm font-semibold text-zinc-900 dark:text-white mb-2">Golden Hour</h3>
          <p class="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">Warm, directional light that adds depth to outdoor drone operations. Preferred for hero and marketing imagery.</p>
        </div>
        <div class="p-6 border border-zinc-200 dark:border-zinc-800">
          <h3 class="text-sm font-semibold text-zinc-900 dark:text-white mb-2">Overcast / Diffused</h3>
          <p class="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">Even, soft light ideal for product detail shots and documentation photography. Reduces harsh shadows on hardware.</p>
        </div>
        <div class="p-6 border border-zinc-200 dark:border-zinc-800">
          <h3 class="text-sm font-semibold text-zinc-900 dark:text-white mb-2">Ambient Indoor</h3>
          <p class="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">Screen glow and workspace lighting for control room and lab environments. Keep it authentic, not staged.</p>
        </div>
      </div>
    </section>

    <div class="border-t border-zinc-200 dark:border-zinc-800"></div>

    <section class="px-8 lg:px-16 py-16">
      <h2 class="text-xl font-semibold text-zinc-900 dark:text-white mb-4">Composition Principles</h2>
      <p class="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed max-w-2xl mb-8">
        Strong compositions create visual hierarchy and leave room for typography and brand elements. Every image should feel intentional and structured.
      </p>
      <div class="space-y-6 max-w-3xl">
        <div class="border-l-2 border-blue-500 pl-5">
          <h3 class="text-sm font-semibold text-zinc-900 dark:text-white mb-1">Rule of Thirds</h3>
          <p class="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">Place primary subjects at intersection points. Drones and operators should rarely be dead center unless conveying direct confrontation or symmetry.</p>
        </div>
        <div class="border-l-2 border-blue-500 pl-5">
          <h3 class="text-sm font-semibold text-zinc-900 dark:text-white mb-1">Negative Space for Text Overlay</h3>
          <p class="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">When shooting for marketing use, ensure at least one third of the frame is clean sky, ground, or blurred background suitable for headline placement.</p>
        </div>
        <div class="border-l-2 border-blue-500 pl-5">
          <h3 class="text-sm font-semibold text-zinc-900 dark:text-white mb-1">Depth and Layers</h3>
          <p class="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">Use foreground elements (terrain, equipment, people) to create depth. Swarms in the mid-ground with landscape beyond conveys scale.</p>
        </div>
        <div class="border-l-2 border-blue-500 pl-5">
          <h3 class="text-sm font-semibold text-zinc-900 dark:text-white mb-1">Leading Lines</h3>
          <p class="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">Runways, roads, flight paths, and formation lines naturally guide the viewer's eye toward the subject.</p>
        </div>
      </div>
    </section>

    <div class="border-t border-zinc-200 dark:border-zinc-800"></div>

    <section class="px-8 lg:px-16 py-16">
      <h2 class="text-xl font-semibold text-zinc-900 dark:text-white mb-4">Color Grading</h2>
      <p class="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed max-w-2xl mb-8">
        Desaturated base with selective color emphasis. The environment should feel grounded and real while Auterion's brand blue and product accents naturally stand out. Let the product and brand colors pop against a muted backdrop.
      </p>
      <div class="grid gap-6 sm:grid-cols-2">
        <div class="p-6 border border-zinc-200 dark:border-zinc-800">
          <h3 class="text-sm font-semibold text-zinc-900 dark:text-white mb-2">Base Treatment</h3>
          <p class="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">Slightly desaturated, with lifted blacks and a cool-neutral tone. Reduce vibrancy of greens and browns in landscapes by 15-20%. Preserve skin tones.</p>
        </div>
        <div class="p-6 border border-zinc-200 dark:border-zinc-800">
          <h3 class="text-sm font-semibold text-zinc-900 dark:text-white mb-2">Selective Color</h3>
          <p class="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">Keep blues and teals at full saturation. LED indicators, UI screens, and brand elements should retain their original vibrancy against the muted background.</p>
        </div>
      </div>
    </section>

    <div class="border-t border-zinc-200 dark:border-zinc-800"></div>

    <section class="px-8 lg:px-16 py-16">
      <h2 class="text-xl font-semibold text-zinc-900 dark:text-white mb-6">Subject Matter Hierarchy</h2>
      <p class="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed max-w-2xl mb-8">
        Not all subjects carry equal weight. This hierarchy guides what to prioritize when planning shoots and selecting imagery for campaigns.
      </p>
      <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div class="p-6 border border-zinc-200 dark:border-zinc-800">
          <p class="text-[11px] text-zinc-400 dark:text-zinc-500 uppercase tracking-widest font-medium mb-2">Priority 1</p>
          <h3 class="text-sm font-semibold text-zinc-900 dark:text-white mb-2">Drones in Operation</h3>
          <p class="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">Swarms in flight, autonomous missions, coordinated formations. The core of what Auterion enables.</p>
          <div class="aspect-video bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center mt-4">
            <span class="text-sm text-zinc-400 dark:text-zinc-500">Swarm formation flight</span>
          </div>
        </div>
        <div class="p-6 border border-zinc-200 dark:border-zinc-800">
          <p class="text-[11px] text-zinc-400 dark:text-zinc-500 uppercase tracking-widest font-medium mb-2">Priority 2</p>
          <h3 class="text-sm font-semibold text-zinc-900 dark:text-white mb-2">Operators & People</h3>
          <p class="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">Ground control operators, field teams, engineers. Humans in control of autonomous systems.</p>
          <div class="aspect-video bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center mt-4">
            <span class="text-sm text-zinc-400 dark:text-zinc-500">Operator with ground station</span>
          </div>
        </div>
        <div class="p-6 border border-zinc-200 dark:border-zinc-800">
          <p class="text-[11px] text-zinc-400 dark:text-zinc-500 uppercase tracking-widest font-medium mb-2">Priority 3</p>
          <h3 class="text-sm font-semibold text-zinc-900 dark:text-white mb-2">Landscapes & Environments</h3>
          <p class="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">Operational theaters — deserts, coastlines, urban, industrial. Establishes scale and context.</p>
          <div class="aspect-video bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center mt-4">
            <span class="text-sm text-zinc-400 dark:text-zinc-500">Desert terrain from altitude</span>
          </div>
        </div>
        <div class="p-6 border border-zinc-200 dark:border-zinc-800">
          <p class="text-[11px] text-zinc-400 dark:text-zinc-500 uppercase tracking-widest font-medium mb-2">Priority 4</p>
          <h3 class="text-sm font-semibold text-zinc-900 dark:text-white mb-2">Close-Up Hardware</h3>
          <p class="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">Skynode boards, connectors, sensors, propulsion details. Conveys engineering precision.</p>
          <div class="aspect-video bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center mt-4">
            <span class="text-sm text-zinc-400 dark:text-zinc-500">Skynode PCB macro detail</span>
          </div>
        </div>
      </div>
    </section>

    <div class="border-t border-zinc-200 dark:border-zinc-800"></div>

    <section class="px-8 lg:px-16 py-16">
      <h2 class="text-xl font-semibold text-zinc-900 dark:text-white mb-6">Do / Don't</h2>
      <div class="grid gap-6 sm:grid-cols-2">
        <div>
          <div class="aspect-video bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-900 flex items-center justify-center">
            <span class="text-sm text-green-600 dark:text-green-400">Natural light, real environment, muted grade</span>
          </div>
          <div class="flex items-center gap-2 mt-3">
            <span class="inline-flex items-center justify-center w-5 h-5 rounded-full bg-green-100 dark:bg-green-900/50 text-green-600 dark:text-green-400 text-xs font-bold">&#10003;</span>
            <p class="text-sm font-medium text-zinc-900 dark:text-white">Do: Authentic field conditions</p>
          </div>
          <p class="text-xs text-zinc-500 dark:text-zinc-400 mt-1 ml-7">Real operational environments with natural lighting. Desaturated backgrounds that let brand colors stand out.</p>
        </div>
        <div>
          <div class="aspect-video bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-900 flex items-center justify-center">
            <span class="text-sm text-red-600 dark:text-red-400">Heavy HDR, neon color grading, stock photo look</span>
          </div>
          <div class="flex items-center gap-2 mt-3">
            <span class="inline-flex items-center justify-center w-5 h-5 rounded-full bg-red-100 dark:bg-red-900/50 text-red-600 dark:text-red-400 text-xs font-bold">&#10007;</span>
            <p class="text-sm font-medium text-zinc-900 dark:text-white">Don't: Over-processed imagery</p>
          </div>
          <p class="text-xs text-zinc-500 dark:text-zinc-400 mt-1 ml-7">Avoid heavy HDR, dramatic color grading, artificial lens flares, or generic stock photography aesthetics.</p>
        </div>
        <div>
          <div class="aspect-video bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-900 flex items-center justify-center">
            <span class="text-sm text-green-600 dark:text-green-400">Clear negative space, rule-of-thirds subject</span>
          </div>
          <div class="flex items-center gap-2 mt-3">
            <span class="inline-flex items-center justify-center w-5 h-5 rounded-full bg-green-100 dark:bg-green-900/50 text-green-600 dark:text-green-400 text-xs font-bold">&#10003;</span>
            <p class="text-sm font-medium text-zinc-900 dark:text-white">Do: Intentional composition</p>
          </div>
          <p class="text-xs text-zinc-500 dark:text-zinc-400 mt-1 ml-7">Structured framing with clear focal points, breathing room for text overlays, and layered depth.</p>
        </div>
        <div>
          <div class="aspect-video bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-900 flex items-center justify-center">
            <span class="text-sm text-red-600 dark:text-red-400">Cluttered frame, no clear subject, dutch angle</span>
          </div>
          <div class="flex items-center gap-2 mt-3">
            <span class="inline-flex items-center justify-center w-5 h-5 rounded-full bg-red-100 dark:bg-red-900/50 text-red-600 dark:text-red-400 text-xs font-bold">&#10007;</span>
            <p class="text-sm font-medium text-zinc-900 dark:text-white">Don't: Chaotic framing</p>
          </div>
          <p class="text-xs text-zinc-500 dark:text-zinc-400 mt-1 ml-7">Avoid cluttered compositions, tilted angles, or images where the primary subject is unclear or competing with background elements.</p>
        </div>
      </div>
    </section>
  </div>
</template>
