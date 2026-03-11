<script setup lang="ts">
</script>

<template>
  <div>
    <header class="px-8 lg:px-16 pt-16 pb-12">
      <p class="text-[11px] text-dim uppercase tracking-widest font-medium mb-3">Language & Style</p>
      <h1 class="text-5xl font-medium text-high">Voice Principles</h1>
      <p class="text-base text-low mt-4 max-w-xl leading-relaxed">
        Practical writing guidance for tone, register, and audience — how to sound like Auterion in every sentence.
      </p>
    </header>

    <div class="border-t border-line"></div>

    <section class="px-8 lg:px-16 py-16">
      <h2 class="text-xl font-semibold text-high mb-2">Tone Spectrum</h2>
      <p class="text-sm text-low mb-8">Auterion's voice lives in a deliberate range. Every piece of copy should land somewhere on these spectrums.</p>
      <div class="space-y-6 max-w-3xl">
        <div class="p-6 border border-line">
          <div class="flex items-center justify-between mb-3">
            <span class="text-sm font-medium text-high">Technical</span>
            <span class="text-sm font-medium text-high">Approachable</span>
          </div>
          <div class="h-2 rounded-full bg-surface-1 relative">
            <div class="absolute left-[30%] right-[20%] h-full rounded-full bg-primary/30"></div>
            <div class="absolute left-[40%] top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-primary ring-2 ring-white ring-page"></div>
          </div>
          <p class="text-xs text-dim mt-3">We lean technical. We know our subject matter deeply and it shows — but we never use jargon as a barrier.</p>
        </div>
        <div class="p-6 border border-line">
          <div class="flex items-center justify-between mb-3">
            <span class="text-sm font-medium text-high">Confident</span>
            <span class="text-sm font-medium text-high">Humble</span>
          </div>
          <div class="h-2 rounded-full bg-surface-1 relative">
            <div class="absolute left-[15%] right-[40%] h-full rounded-full bg-primary/30"></div>
            <div class="absolute left-[30%] top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-primary ring-2 ring-white ring-page"></div>
          </div>
          <p class="text-xs text-dim mt-3">We state what we know directly. We don't hedge with "we believe" or "we think" — but we never overstate or disparage competitors.</p>
        </div>
        <div class="p-6 border border-line">
          <div class="flex items-center justify-between mb-3">
            <span class="text-sm font-medium text-high">Urgent</span>
            <span class="text-sm font-medium text-high">Measured</span>
          </div>
          <div class="h-2 rounded-full bg-surface-1 relative">
            <div class="absolute left-[20%] right-[30%] h-full rounded-full bg-primary/30"></div>
            <div class="absolute left-[35%] top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-primary ring-2 ring-white ring-page"></div>
          </div>
          <p class="text-xs text-dim mt-3">Our mission matters and timelines are real. We convey stakes without resorting to hype or alarm.</p>
        </div>
        <div class="p-6 border border-line">
          <div class="flex items-center justify-between mb-3">
            <span class="text-sm font-medium text-high">Direct</span>
            <span class="text-sm font-medium text-high">Diplomatic</span>
          </div>
          <div class="h-2 rounded-full bg-surface-1 relative">
            <div class="absolute left-[10%] right-[45%] h-full rounded-full bg-primary/30"></div>
            <div class="absolute left-[25%] top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-primary ring-2 ring-white ring-page"></div>
          </div>
          <p class="text-xs text-dim mt-3">Say what you mean. Short sentences, active voice, no filler — but stay respectful of the reader's perspective.</p>
        </div>
      </div>
    </section>

    <div class="border-t border-line"></div>

    <section class="px-8 lg:px-16 py-16">
      <h2 class="text-xl font-semibold text-high mb-2">Audience Register</h2>
      <p class="text-sm text-low mb-8">Formality and vocabulary shift depending on who you are writing for. The core voice stays the same — only the register changes.</p>
      <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <div class="p-6 border border-line">
          <h3 class="text-sm font-semibold text-high mb-2">Defense & Government</h3>
          <p class="text-[11px] text-dim uppercase tracking-widest font-medium mb-3">Formal</p>
          <p class="text-sm text-low leading-relaxed">Use precise military and regulatory terminology. Reference compliance standards by name (NDAA, ITAR). Avoid casual phrasing. Spell out acronyms on first use even when the audience likely knows them — it signals rigor.</p>
        </div>
        <div class="p-6 border border-line">
          <h3 class="text-sm font-semibold text-high mb-2">Commercial & Enterprise</h3>
          <p class="text-[11px] text-dim uppercase tracking-widest font-medium mb-3">Professional</p>
          <p class="text-sm text-low leading-relaxed">Focus on outcomes — productivity gains, cost reduction, reliability. Use industry terms but explain aerospace-specific concepts. Keep sentences concise and benefit-oriented.</p>
        </div>
        <div class="p-6 border border-line">
          <h3 class="text-sm font-semibold text-high mb-2">Developers & Engineers</h3>
          <p class="text-[11px] text-dim uppercase tracking-widest font-medium mb-3">Technical-casual</p>
          <p class="text-sm text-low leading-relaxed">Be direct and specific. Use technical terms freely (API, SDK, MAVLink, ROS 2). Code examples speak louder than marketing copy. Skip the pitch — lead with what it does and how.</p>
        </div>
      </div>
    </section>

    <div class="border-t border-line"></div>

    <section class="px-8 lg:px-16 py-16">
      <h2 class="text-xl font-semibold text-high mb-6">Do / Don't</h2>
      <div class="space-y-4 max-w-3xl">
        <div class="border-l-2 border-ok pl-5">
          <p class="text-[11px] text-ok-text uppercase tracking-widest font-medium mb-1">Do</p>
          <p class="text-sm text-high font-medium mb-1">"Skynode S enables autonomous target tracking when GPS and comms links are denied."</p>
          <p class="text-xs text-low">Direct, specific, states the capability and condition clearly.</p>
        </div>
        <div class="border-l-2 border-alarm pl-5">
          <p class="text-[11px] text-alarm-text uppercase tracking-widest font-medium mb-1">Don't</p>
          <p class="text-sm text-high font-medium mb-1">"Our amazing next-gen AI-powered solution revolutionizes the battlefield!"</p>
          <p class="text-xs text-low">Hyperbolic, vague, uses buzzwords without substance.</p>
        </div>
        <div class="border-l-2 border-ok pl-5">
          <p class="text-[11px] text-ok-text uppercase tracking-widest font-medium mb-1">Do</p>
          <p class="text-sm text-high font-medium mb-1">"AuterionOS runs on hardware from multiple manufacturers, giving operators a single interface for mixed fleets."</p>
          <p class="text-xs text-low">Explains interoperability in concrete terms the reader can picture.</p>
        </div>
        <div class="border-l-2 border-alarm pl-5">
          <p class="text-[11px] text-alarm-text uppercase tracking-widest font-medium mb-1">Don't</p>
          <p class="text-sm text-high font-medium mb-1">"We leverage synergies across the ecosystem to deliver best-in-class interoperability."</p>
          <p class="text-xs text-low">Corporate filler. Says nothing actionable.</p>
        </div>
        <div class="border-l-2 border-ok pl-5">
          <p class="text-[11px] text-ok-text uppercase tracking-widest font-medium mb-1">Do</p>
          <p class="text-sm text-high font-medium mb-1">"The PX4 autopilot is open-source. Inspect it, modify it, contribute to it."</p>
          <p class="text-xs text-low">Short, imperative, developer-friendly. Shows transparency.</p>
        </div>
        <div class="border-l-2 border-alarm pl-5">
          <p class="text-[11px] text-alarm-text uppercase tracking-widest font-medium mb-1">Don't</p>
          <p class="text-sm text-high font-medium mb-1">"We believe in the power of community-driven innovation to shape the future of autonomy."</p>
          <p class="text-xs text-low">Passive, vague "we believe" hedging. Sounds like a mission statement, not useful information.</p>
        </div>
      </div>
    </section>
  </div>
</template>
