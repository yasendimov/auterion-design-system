<script setup lang="ts">
</script>

<template>
  <div>
    <header class="px-8 lg:px-16 pt-16 pb-12">
      <p class="text-[11px] text-dim uppercase tracking-widest font-medium mb-3">Language & Style</p>
      <h1 class="text-5xl font-medium text-high">Writing Auterion</h1>
      <p class="text-base text-low mt-4 max-w-xl leading-relaxed">
        Capitalization, punctuation, sentence structure, and formatting conventions for all Auterion communications.
      </p>
    </header>

    <div class="border-t border-line"></div>

    <section class="px-8 lg:px-16 py-16">
      <h2 class="text-xl font-semibold text-high mb-6">Capitalization</h2>
      <div class="space-y-4 max-w-3xl">
        <div class="p-6 border border-line">
          <h3 class="text-sm font-semibold text-high mb-2">Sentence Case for Product UI</h3>
          <p class="text-sm text-low leading-relaxed mb-3">All buttons, labels, menu items, tooltips, and error messages use sentence case. Only the first word and proper nouns are capitalized.</p>
          <div class="space-y-2">
            <div class="border-l-2 border-ok pl-5">
              <p class="text-[11px] text-ok-text uppercase tracking-widest font-medium mb-1">Do</p>
              <p class="text-sm text-high font-medium">"Upload flight plan" / "Mission complete" / "Connect to Skynode"</p>
            </div>
            <div class="border-l-2 border-alarm pl-5">
              <p class="text-[11px] text-alarm-text uppercase tracking-widest font-medium mb-1">Don't</p>
              <p class="text-sm text-high font-medium">"Upload Flight Plan" / "Mission Complete" / "Connect To Skynode"</p>
            </div>
          </div>
        </div>
        <div class="p-6 border border-line">
          <h3 class="text-sm font-semibold text-high mb-2">Title Case for Marketing</h3>
          <p class="text-sm text-low leading-relaxed mb-3">Headlines, page titles, and marketing materials use title case. Capitalize all words except articles (a, an, the), conjunctions (and, but, or), and short prepositions (in, on, at, for, to) unless they start the title.</p>
          <div class="space-y-2">
            <div class="border-l-2 border-ok pl-5">
              <p class="text-[11px] text-ok-text uppercase tracking-widest font-medium mb-1">Do</p>
              <p class="text-sm text-high font-medium">"Autonomous Swarms at Scale" / "The Future of Fleet Operations"</p>
            </div>
            <div class="border-l-2 border-alarm pl-5">
              <p class="text-[11px] text-alarm-text uppercase tracking-widest font-medium mb-1">Don't</p>
              <p class="text-sm text-high font-medium">"Autonomous swarms at scale" / "THE FUTURE OF FLEET OPERATIONS"</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div class="border-t border-line"></div>

    <section class="px-8 lg:px-16 py-16">
      <h2 class="text-xl font-semibold text-high mb-6">Punctuation</h2>
      <div class="overflow-x-auto">
        <table class="w-full text-sm">
          <thead>
            <tr class="border-b border-line-hover  text-left">
              <th class="py-3 pr-6 text-[11px] font-medium text-dim uppercase tracking-widest">Rule</th>
              <th class="py-3 pr-6 text-[11px] font-medium text-dim uppercase tracking-widest">Convention</th>
              <th class="py-3 text-[11px] font-medium text-dim uppercase tracking-widest">Example</th>
            </tr>
          </thead>
          <tbody>
            <tr class="border-b border-line">
              <td class="py-3 pr-6 font-medium text-high">Oxford comma</td>
              <td class="py-3 pr-6 text-low">Always use</td>
              <td class="py-3 text-low">"Air, land, and sea"</td>
            </tr>
            <tr class="border-b border-line">
              <td class="py-3 pr-6 font-medium text-high">Exclamation marks</td>
              <td class="py-3 pr-6 text-low">Never in product UI</td>
              <td class="py-3 text-low">"Mission complete." not "Mission complete!"</td>
            </tr>
            <tr class="border-b border-line">
              <td class="py-3 pr-6 font-medium text-high">Em dashes</td>
              <td class="py-3 pr-6 text-low">No spaces around</td>
              <td class="py-3 text-low">"Skynode S&thinsp;&mdash;&thinsp;the smallest autopilot"</td>
            </tr>
            <tr class="border-b border-line">
              <td class="py-3 pr-6 font-medium text-high">Ellipses</td>
              <td class="py-3 pr-6 text-low">Avoid in formal copy</td>
              <td class="py-3 text-low">Use only for truncation in UI: "Loading mission data..."</td>
            </tr>
            <tr class="border-b border-line">
              <td class="py-3 pr-6 font-medium text-high">Periods in lists</td>
              <td class="py-3 pr-6 text-low">Full sentences get periods; fragments do not</td>
              <td class="py-3 text-low">"Autonomous flight" (no period) vs. "The drone flies autonomously." (period)</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <div class="border-t border-line"></div>

    <section class="px-8 lg:px-16 py-16">
      <h2 class="text-xl font-semibold text-high mb-6">Abbreviations & Acronyms</h2>
      <div class="space-y-6 max-w-3xl">
        <div class="border-l-2 border-primary pl-5">
          <h3 class="text-sm font-semibold text-high mb-1">Spell Out on First Use</h3>
          <p class="text-sm text-low leading-relaxed">Always spell out the full term on first use with the abbreviation in parentheses. Use the abbreviation alone after that. Example: "Beyond Visual Line of Sight (BVLOS) operations require... BVLOS-capable aircraft..."</p>
        </div>
        <div class="border-l-2 border-primary pl-5">
          <h3 class="text-sm font-semibold text-high mb-1">Exceptions</h3>
          <p class="text-sm text-low leading-relaxed">Universally known abbreviations do not need expansion: API, GPS, AI, USB, WiFi. Product names (PX4, MAVLink, ROS 2) are never expanded.</p>
        </div>
        <div class="border-l-2 border-primary pl-5">
          <h3 class="text-sm font-semibold text-high mb-1">Per-Page Rule</h3>
          <p class="text-sm text-low leading-relaxed">Each page or document stands alone. Re-expand on first use even if the same term was expanded on a different page.</p>
        </div>
      </div>
    </section>

    <div class="border-t border-line"></div>

    <section class="px-8 lg:px-16 py-16">
      <h2 class="text-xl font-semibold text-high mb-6">Sentence Structure</h2>
      <div class="grid gap-4 sm:grid-cols-2">
        <div class="p-6 border border-line">
          <h3 class="text-sm font-semibold text-high mb-2">Active Voice</h3>
          <p class="text-sm text-low leading-relaxed mb-3">Default to active voice. The subject performs the action.</p>
          <div class="space-y-2">
            <div class="border-l-2 border-ok pl-5">
              <p class="text-xs text-high font-medium">"AuterionOS unifies mixed fleets."</p>
            </div>
            <div class="border-l-2 border-alarm pl-5">
              <p class="text-xs text-high font-medium">"Mixed fleets are unified by AuterionOS."</p>
            </div>
          </div>
        </div>
        <div class="p-6 border border-line">
          <h3 class="text-sm font-semibold text-high mb-2">Sentence Length</h3>
          <p class="text-sm text-low leading-relaxed mb-3">Aim for 15-25 words per sentence. Mix short and medium sentences for rhythm. Break any sentence over 30 words into two.</p>
          <div class="space-y-2">
            <div class="border-l-2 border-ok pl-5">
              <p class="text-xs text-high font-medium">"Deploy AI models at the edge. Skynode processes data on the drone, reducing latency and bandwidth."</p>
            </div>
            <div class="border-l-2 border-alarm pl-5">
              <p class="text-xs text-high font-medium">"By deploying AI models at the edge, which means processing data directly on the drone using Skynode's onboard compute, you can significantly reduce latency and bandwidth requirements while maintaining autonomous capabilities."</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
