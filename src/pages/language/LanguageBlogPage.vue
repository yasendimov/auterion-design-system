<script setup lang="ts">
</script>

<template>
  <div>
    <header class="px-10 lg:px-20 pt-24 pb-16">
      <p class="text-[11px] text-dim uppercase tracking-widest font-medium mb-5">Language & Style</p>
      <h1 class="text-5xl font-medium text-high">Blog</h1>
      <p class="text-base text-low mt-6 max-w-xl leading-relaxed">
        Post structure, headline patterns, and editorial conventions for the Auterion blog.
      </p>
    </header>

    <div class="border-t border-line"></div>

    <section class="px-10 lg:px-20 py-24">
      <h2 class="text-xl font-semibold text-high mb-2">Post Structure</h2>
      <p class="text-sm text-low mb-8">Every blog post follows a four-part arc. This structure works for product announcements, technical deep-dives, and thought leadership alike.</p>
      <div class="space-y-4 max-w-3xl">
        <div class="p-8 border border-line">
          <div class="flex items-baseline gap-3 mb-2">
            <span class="text-xs font-mono text-dim">01</span>
            <h3 class="text-sm font-semibold text-high">Hook</h3>
          </div>
          <p class="text-sm text-low leading-relaxed">Open with a concrete fact, statistic, or scenario that creates tension. No "In today's rapidly evolving landscape" openings. State the problem or stakes in one to two sentences.</p>
        </div>
        <div class="p-8 border border-line">
          <div class="flex items-baseline gap-3 mb-2">
            <span class="text-xs font-mono text-dim">02</span>
            <h3 class="text-sm font-semibold text-high">Context</h3>
          </div>
          <p class="text-sm text-low leading-relaxed">Expand on why this matters. Provide background the reader needs to understand the detail section. Keep this to two or three paragraphs. Reference real deployments, partnerships, or technical constraints.</p>
        </div>
        <div class="p-8 border border-line">
          <div class="flex items-baseline gap-3 mb-2">
            <span class="text-xs font-mono text-dim">03</span>
            <h3 class="text-sm font-semibold text-high">Detail</h3>
          </div>
          <p class="text-sm text-low leading-relaxed">The substance of the post. For product announcements: features, specs, what it enables. For thought leadership: analysis, evidence, implications. Use subheadings, bullet lists, and images to break up long sections.</p>
        </div>
        <div class="p-8 border border-line">
          <div class="flex items-baseline gap-3 mb-2">
            <span class="text-xs font-mono text-dim">04</span>
            <h3 class="text-sm font-semibold text-high">Call to Action</h3>
          </div>
          <p class="text-sm text-low leading-relaxed">End with a clear next step: contact sales, read the documentation, attend the event, or explore a product page. Never end a post without directing the reader somewhere.</p>
        </div>
      </div>
    </section>

    <div class="border-t border-line"></div>

    <section class="px-10 lg:px-20 py-24">
      <h2 class="text-xl font-semibold text-high mb-6">Headline Patterns</h2>
      <div class="space-y-4 max-w-3xl">
        <div class="border-l-2 border-ok pl-5">
          <p class="text-[11px] text-ok-text uppercase tracking-widest font-medium mb-1">Effective</p>
          <p class="text-sm text-high font-medium mb-1">"33,000 Skynode Strike Kits: What the Pentagon Contract Means for Autonomous Warfare"</p>
          <p class="text-xs text-low">Specific number, names the product, states the implication.</p>
        </div>
        <div class="border-l-2 border-ok pl-5">
          <p class="text-[11px] text-ok-text uppercase tracking-widest font-medium mb-1">Effective</p>
          <p class="text-sm text-high font-medium mb-1">"How AuterionOS Unifies a Mixed Fleet of 12 Drone Types"</p>
          <p class="text-xs text-low">How-to framing with a concrete scope.</p>
        </div>
        <div class="border-l-2 border-alarm pl-5">
          <p class="text-[11px] text-alarm-text uppercase tracking-widest font-medium mb-1">Avoid</p>
          <p class="text-sm text-high font-medium mb-1">"Exciting News from Auterion!"</p>
          <p class="text-xs text-low">Vague, self-referential, exclamation mark.</p>
        </div>
        <div class="border-l-2 border-alarm pl-5">
          <p class="text-[11px] text-alarm-text uppercase tracking-widest font-medium mb-1">Avoid</p>
          <p class="text-sm text-high font-medium mb-1">"The Future of Drones is Here"</p>
          <p class="text-xs text-low">Cliche, says nothing specific about the content.</p>
        </div>
      </div>
    </section>

    <div class="border-t border-line"></div>

    <section class="px-10 lg:px-20 py-24">
      <h2 class="text-xl font-semibold text-high mb-6">Meta & Formatting</h2>
      <div class="overflow-x-auto">
        <table class="w-full text-sm">
          <thead>
            <tr class="border-b border-line-hover  text-left">
              <th class="py-3 pr-6 text-[11px] font-medium text-dim uppercase tracking-widest">Element</th>
              <th class="py-3 pr-6 text-[11px] font-medium text-dim uppercase tracking-widest">Guideline</th>
              <th class="py-3 text-[11px] font-medium text-dim uppercase tracking-widest">Example</th>
            </tr>
          </thead>
          <tbody>
            <tr class="border-b border-line">
              <td class="py-3 pr-6 font-medium text-high">Meta description</td>
              <td class="py-3 pr-6 text-low">150-160 characters, includes primary keyword</td>
              <td class="py-3 text-low">"Auterion delivers 33,000 Skynode S strike kits under a $50M Pentagon contract, scaling autonomous drone swarms for allied forces."</td>
            </tr>
            <tr class="border-b border-line">
              <td class="py-3 pr-6 font-medium text-high">Author attribution</td>
              <td class="py-3 pr-6 text-low">Full name, title, no headshot in byline</td>
              <td class="py-3 text-low">"By Lorenz Meier, CEO & Founder"</td>
            </tr>
            <tr class="border-b border-line">
              <td class="py-3 pr-6 font-medium text-high">Tags</td>
              <td class="py-3 pr-6 text-low">2-4 tags per post, lowercase</td>
              <td class="py-3 text-low">autonomy, defense, product-update</td>
            </tr>
            <tr class="border-b border-line">
              <td class="py-3 pr-6 font-medium text-high">Categories</td>
              <td class="py-3 pr-6 text-low">One primary category per post</td>
              <td class="py-3 text-low">Product, Engineering, Company, Industry</td>
            </tr>
            <tr class="border-b border-line">
              <td class="py-3 pr-6 font-medium text-high">Reading time</td>
              <td class="py-3 pr-6 text-low">Display estimated reading time</td>
              <td class="py-3 text-low">"5 min read"</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  </div>
</template>
