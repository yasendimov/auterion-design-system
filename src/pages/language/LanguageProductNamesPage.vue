<script setup lang="ts">
</script>

<template>
  <div>
    <header class="px-8 lg:px-16 pt-16 pb-12">
      <p class="text-[11px] text-dim uppercase tracking-widest font-medium mb-3">Language & Style</p>
      <h1 class="text-5xl font-medium text-high">Product Names</h1>
      <p class="text-base text-low mt-4 max-w-xl leading-relaxed">
        Correct formatting for every Auterion product name. Consistency here signals precision everywhere else.
      </p>
    </header>

    <div class="border-t border-line"></div>

    <section class="px-8 lg:px-16 py-16">
      <h2 class="text-xl font-semibold text-high mb-6">Product Name Reference</h2>
      <div class="overflow-x-auto">
        <table class="w-full text-sm">
          <thead>
            <tr class="border-b border-line-hover  text-left">
              <th class="py-3 pr-6 text-[11px] font-medium text-dim uppercase tracking-widest">Product</th>
              <th class="py-3 pr-6 text-[11px] font-medium text-dim uppercase tracking-widest">Correct Format</th>
              <th class="py-3 pr-6 text-[11px] font-medium text-dim uppercase tracking-widest">Category</th>
              <th class="py-3 text-[11px] font-medium text-dim uppercase tracking-widest">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr class="border-b border-line">
              <td class="py-3 pr-6 font-medium text-high font-mono">AuterionOS</td>
              <td class="py-3 pr-6 text-low">One word, capital A and OS</td>
              <td class="py-3 pr-6 text-low">Software</td>
              <td class="py-3 text-low">Modular operating system for autonomous fleets</td>
            </tr>
            <tr class="border-b border-line">
              <td class="py-3 pr-6 font-medium text-high font-mono">Skynode</td>
              <td class="py-3 pr-6 text-low">One word, capital S</td>
              <td class="py-3 pr-6 text-low">Hardware</td>
              <td class="py-3 text-low">Avionics platform (base name, used generically)</td>
            </tr>
            <tr class="border-b border-line">
              <td class="py-3 pr-6 font-medium text-high font-mono">Skynode X</td>
              <td class="py-3 pr-6 text-low">Space before variant letter</td>
              <td class="py-3 pr-6 text-low">Hardware</td>
              <td class="py-3 text-low">Enterprise avionics with full compute</td>
            </tr>
            <tr class="border-b border-line">
              <td class="py-3 pr-6 font-medium text-high font-mono">Skynode S</td>
              <td class="py-3 pr-6 text-low">Space before variant letter</td>
              <td class="py-3 pr-6 text-low">Hardware</td>
              <td class="py-3 text-low">Compact AI strike autopilot</td>
            </tr>
            <tr class="border-b border-line">
              <td class="py-3 pr-6 font-medium text-high font-mono">Skynode N</td>
              <td class="py-3 pr-6 text-low">Space before variant letter</td>
              <td class="py-3 pr-6 text-low">Hardware</td>
              <td class="py-3 text-low">Navigation-focused autopilot module</td>
            </tr>
            <tr class="border-b border-line">
              <td class="py-3 pr-6 font-medium text-high font-mono">Nemyx</td>
              <td class="py-3 pr-6 text-low">One word, capital N</td>
              <td class="py-3 pr-6 text-low">Software</td>
              <td class="py-3 text-low">Defense swarming and coordination platform</td>
            </tr>
            <tr class="border-b border-line">
              <td class="py-3 pr-6 font-medium text-high font-mono">Trellys</td>
              <td class="py-3 pr-6 text-low">One word, capital T</td>
              <td class="py-3 pr-6 text-low">Software</td>
              <td class="py-3 text-low">Commercial fleet management platform</td>
            </tr>
            <tr class="border-b border-line">
              <td class="py-3 pr-6 font-medium text-high font-mono">PX4</td>
              <td class="py-3 pr-6 text-low">All caps PX, numeral 4</td>
              <td class="py-3 pr-6 text-low">Open Source</td>
              <td class="py-3 text-low">Open-source autopilot framework</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <div class="border-t border-line"></div>

    <section class="px-8 lg:px-16 py-16">
      <h2 class="text-xl font-semibold text-high mb-6">Common Mistakes</h2>
      <div class="space-y-4 max-w-3xl">
        <div class="border-l-2 border-alarm pl-5">
          <p class="text-[11px] text-alarm-text uppercase tracking-widest font-medium mb-1">Wrong</p>
          <p class="text-sm text-high font-medium mb-1">"Auterion OS" or "auterionOS" or "Auterion-OS"</p>
          <p class="text-xs text-low">Always one word: <span class="font-mono font-medium text-high">AuterionOS</span></p>
        </div>
        <div class="border-l-2 border-alarm pl-5">
          <p class="text-[11px] text-alarm-text uppercase tracking-widest font-medium mb-1">Wrong</p>
          <p class="text-sm text-high font-medium mb-1">"SkyNode" or "Sky Node" or "Sky-node"</p>
          <p class="text-xs text-low">One word, single capital: <span class="font-mono font-medium text-high">Skynode</span></p>
        </div>
        <div class="border-l-2 border-alarm pl-5">
          <p class="text-[11px] text-alarm-text uppercase tracking-widest font-medium mb-1">Wrong</p>
          <p class="text-sm text-high font-medium mb-1">"Skynode-S" or "SkynodeS" or "SKYNODE S"</p>
          <p class="text-xs text-low">Space separates variant: <span class="font-mono font-medium text-high">Skynode S</span></p>
        </div>
        <div class="border-l-2 border-alarm pl-5">
          <p class="text-[11px] text-alarm-text uppercase tracking-widest font-medium mb-1">Wrong</p>
          <p class="text-sm text-high font-medium mb-1">"NEMYX" or "nemyx" or "Nemix"</p>
          <p class="text-xs text-low">Capital N, lowercase rest, y not i: <span class="font-mono font-medium text-high">Nemyx</span></p>
        </div>
        <div class="border-l-2 border-alarm pl-5">
          <p class="text-[11px] text-alarm-text uppercase tracking-widest font-medium mb-1">Wrong</p>
          <p class="text-sm text-high font-medium mb-1">"Px4" or "px4" or "PX-4"</p>
          <p class="text-xs text-low">All caps PX, no separator: <span class="font-mono font-medium text-high">PX4</span></p>
        </div>
      </div>
    </section>

    <div class="border-t border-line"></div>

    <section class="px-8 lg:px-16 py-16">
      <h2 class="text-xl font-semibold text-high mb-6">Usage Guidelines</h2>
      <div class="space-y-6 max-w-3xl">
        <div class="border-l-2 border-primary pl-5">
          <h3 class="text-sm font-semibold text-high mb-1">Never Genericize</h3>
          <p class="text-sm text-low leading-relaxed">Product names are proper nouns. Do not use them as verbs or common nouns. Write "a Skynode-powered drone," not "a skynode drone."</p>
        </div>
        <div class="border-l-2 border-primary pl-5">
          <h3 class="text-sm font-semibold text-high mb-1">No Possessive on Products</h3>
          <p class="text-sm text-low leading-relaxed">Write "the AuterionOS architecture" not "AuterionOS's architecture." Rephrase to avoid the possessive form.</p>
        </div>
        <div class="border-l-2 border-primary pl-5">
          <h3 class="text-sm font-semibold text-high mb-1">First Reference Rule</h3>
          <p class="text-sm text-low leading-relaxed">On first reference in any document, use the full product name. After that, a shortened form is acceptable: "Skynode S" then "the S" in subsequent mentions.</p>
        </div>
      </div>
    </section>
  </div>
</template>
