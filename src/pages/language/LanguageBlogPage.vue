<script setup lang="ts">
</script>

<template>
  <div>
    <header class="px-8 lg:px-16 pt-16 pb-12">
      <p class="text-[11px] text-zinc-400 dark:text-zinc-500 uppercase tracking-widest font-medium mb-3">Language & Style</p>
      <h1 class="text-5xl font-medium text-zinc-900 dark:text-white">Blog</h1>
      <p class="text-base text-zinc-500 dark:text-zinc-400 mt-4 max-w-xl leading-relaxed">
        Post structure, headline patterns, and editorial conventions for the Auterion blog.
      </p>
    </header>

    <div class="border-t border-zinc-200 dark:border-zinc-800"></div>

    <section class="px-8 lg:px-16 py-16">
      <h2 class="text-xl font-semibold text-zinc-900 dark:text-white mb-2">Post Structure</h2>
      <p class="text-sm text-zinc-500 dark:text-zinc-400 mb-8">Every blog post follows a four-part arc. This structure works for product announcements, technical deep-dives, and thought leadership alike.</p>
      <div class="space-y-4 max-w-3xl">
        <div class="p-6 border border-zinc-200 dark:border-zinc-800">
          <div class="flex items-baseline gap-3 mb-2">
            <span class="text-xs font-mono text-zinc-400 dark:text-zinc-500">01</span>
            <h3 class="text-sm font-semibold text-zinc-900 dark:text-white">Hook</h3>
          </div>
          <p class="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">Open with a concrete fact, statistic, or scenario that creates tension. No "In today's rapidly evolving landscape" openings. State the problem or stakes in one to two sentences.</p>
        </div>
        <div class="p-6 border border-zinc-200 dark:border-zinc-800">
          <div class="flex items-baseline gap-3 mb-2">
            <span class="text-xs font-mono text-zinc-400 dark:text-zinc-500">02</span>
            <h3 class="text-sm font-semibold text-zinc-900 dark:text-white">Context</h3>
          </div>
          <p class="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">Expand on why this matters. Provide background the reader needs to understand the detail section. Keep this to two or three paragraphs. Reference real deployments, partnerships, or technical constraints.</p>
        </div>
        <div class="p-6 border border-zinc-200 dark:border-zinc-800">
          <div class="flex items-baseline gap-3 mb-2">
            <span class="text-xs font-mono text-zinc-400 dark:text-zinc-500">03</span>
            <h3 class="text-sm font-semibold text-zinc-900 dark:text-white">Detail</h3>
          </div>
          <p class="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">The substance of the post. For product announcements: features, specs, what it enables. For thought leadership: analysis, evidence, implications. Use subheadings, bullet lists, and images to break up long sections.</p>
        </div>
        <div class="p-6 border border-zinc-200 dark:border-zinc-800">
          <div class="flex items-baseline gap-3 mb-2">
            <span class="text-xs font-mono text-zinc-400 dark:text-zinc-500">04</span>
            <h3 class="text-sm font-semibold text-zinc-900 dark:text-white">Call to Action</h3>
          </div>
          <p class="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">End with a clear next step: contact sales, read the documentation, attend the event, or explore a product page. Never end a post without directing the reader somewhere.</p>
        </div>
      </div>
    </section>

    <div class="border-t border-zinc-200 dark:border-zinc-800"></div>

    <section class="px-8 lg:px-16 py-16">
      <h2 class="text-xl font-semibold text-zinc-900 dark:text-white mb-6">Headline Patterns</h2>
      <div class="space-y-4 max-w-3xl">
        <div class="border-l-2 border-green-500 pl-5">
          <p class="text-[11px] text-green-600 dark:text-green-400 uppercase tracking-widest font-medium mb-1">Effective</p>
          <p class="text-sm text-zinc-900 dark:text-white font-medium mb-1">"33,000 Skynode Strike Kits: What the Pentagon Contract Means for Autonomous Warfare"</p>
          <p class="text-xs text-zinc-500 dark:text-zinc-400">Specific number, names the product, states the implication.</p>
        </div>
        <div class="border-l-2 border-green-500 pl-5">
          <p class="text-[11px] text-green-600 dark:text-green-400 uppercase tracking-widest font-medium mb-1">Effective</p>
          <p class="text-sm text-zinc-900 dark:text-white font-medium mb-1">"How AuterionOS Unifies a Mixed Fleet of 12 Drone Types"</p>
          <p class="text-xs text-zinc-500 dark:text-zinc-400">How-to framing with a concrete scope.</p>
        </div>
        <div class="border-l-2 border-red-500 pl-5">
          <p class="text-[11px] text-red-600 dark:text-red-400 uppercase tracking-widest font-medium mb-1">Avoid</p>
          <p class="text-sm text-zinc-900 dark:text-white font-medium mb-1">"Exciting News from Auterion!"</p>
          <p class="text-xs text-zinc-500 dark:text-zinc-400">Vague, self-referential, exclamation mark.</p>
        </div>
        <div class="border-l-2 border-red-500 pl-5">
          <p class="text-[11px] text-red-600 dark:text-red-400 uppercase tracking-widest font-medium mb-1">Avoid</p>
          <p class="text-sm text-zinc-900 dark:text-white font-medium mb-1">"The Future of Drones is Here"</p>
          <p class="text-xs text-zinc-500 dark:text-zinc-400">Cliche, says nothing specific about the content.</p>
        </div>
      </div>
    </section>

    <div class="border-t border-zinc-200 dark:border-zinc-800"></div>

    <section class="px-8 lg:px-16 py-16">
      <h2 class="text-xl font-semibold text-zinc-900 dark:text-white mb-6">Meta & Formatting</h2>
      <div class="overflow-x-auto">
        <table class="w-full text-sm">
          <thead>
            <tr class="border-b border-zinc-300 dark:border-zinc-700 text-left">
              <th class="py-3 pr-6 text-[11px] font-medium text-zinc-400 dark:text-zinc-500 uppercase tracking-widest">Element</th>
              <th class="py-3 pr-6 text-[11px] font-medium text-zinc-400 dark:text-zinc-500 uppercase tracking-widest">Guideline</th>
              <th class="py-3 text-[11px] font-medium text-zinc-400 dark:text-zinc-500 uppercase tracking-widest">Example</th>
            </tr>
          </thead>
          <tbody>
            <tr class="border-b border-zinc-200 dark:border-zinc-800">
              <td class="py-3 pr-6 font-medium text-zinc-900 dark:text-white">Meta description</td>
              <td class="py-3 pr-6 text-zinc-500 dark:text-zinc-400">150-160 characters, includes primary keyword</td>
              <td class="py-3 text-zinc-500 dark:text-zinc-400">"Auterion delivers 33,000 Skynode S strike kits under a $50M Pentagon contract, scaling autonomous drone swarms for allied forces."</td>
            </tr>
            <tr class="border-b border-zinc-200 dark:border-zinc-800">
              <td class="py-3 pr-6 font-medium text-zinc-900 dark:text-white">Author attribution</td>
              <td class="py-3 pr-6 text-zinc-500 dark:text-zinc-400">Full name, title, no headshot in byline</td>
              <td class="py-3 text-zinc-500 dark:text-zinc-400">"By Lorenz Meier, CEO & Founder"</td>
            </tr>
            <tr class="border-b border-zinc-200 dark:border-zinc-800">
              <td class="py-3 pr-6 font-medium text-zinc-900 dark:text-white">Tags</td>
              <td class="py-3 pr-6 text-zinc-500 dark:text-zinc-400">2-4 tags per post, lowercase</td>
              <td class="py-3 text-zinc-500 dark:text-zinc-400">autonomy, defense, product-update</td>
            </tr>
            <tr class="border-b border-zinc-200 dark:border-zinc-800">
              <td class="py-3 pr-6 font-medium text-zinc-900 dark:text-white">Categories</td>
              <td class="py-3 pr-6 text-zinc-500 dark:text-zinc-400">One primary category per post</td>
              <td class="py-3 text-zinc-500 dark:text-zinc-400">Product, Engineering, Company, Industry</td>
            </tr>
            <tr class="border-b border-zinc-200 dark:border-zinc-800">
              <td class="py-3 pr-6 font-medium text-zinc-900 dark:text-white">Reading time</td>
              <td class="py-3 pr-6 text-zinc-500 dark:text-zinc-400">Display estimated reading time</td>
              <td class="py-3 text-zinc-500 dark:text-zinc-400">"5 min read"</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  </div>
</template>
