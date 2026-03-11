<script setup lang="ts">
</script>

<template>
  <div>
    <header class="px-8 lg:px-16 pt-16 pb-12">
      <p class="text-[11px] text-zinc-400 dark:text-zinc-500 uppercase tracking-widest font-medium mb-3">Language & Style</p>
      <h1 class="text-5xl font-medium text-zinc-900 dark:text-white">Social Media</h1>
      <p class="text-base text-zinc-500 dark:text-zinc-400 mt-4 max-w-xl leading-relaxed">
        Platform-specific copy guidelines for LinkedIn, X/Twitter, and YouTube.
      </p>
    </header>

    <div class="border-t border-zinc-200 dark:border-zinc-800"></div>

    <section class="px-8 lg:px-16 py-16">
      <h2 class="text-xl font-semibold text-zinc-900 dark:text-white mb-2">LinkedIn</h2>
      <p class="text-sm text-zinc-500 dark:text-zinc-400 mb-8">Professional audience. Thought leadership, product launches, partnerships, and hiring.</p>
      <div class="grid gap-4 sm:grid-cols-2">
        <div class="space-y-4">
          <div class="p-6 border border-zinc-200 dark:border-zinc-800">
            <h3 class="text-sm font-semibold text-zinc-900 dark:text-white mb-2">Format Rules</h3>
            <ul class="space-y-2 text-sm text-zinc-500 dark:text-zinc-400">
              <li class="flex gap-2"><span class="text-zinc-400 dark:text-zinc-500">--</span>Max 1,300 characters per post</li>
              <li class="flex gap-2"><span class="text-zinc-400 dark:text-zinc-500">--</span>Lead with the strongest sentence (visible before "see more")</li>
              <li class="flex gap-2"><span class="text-zinc-400 dark:text-zinc-500">--</span>Use line breaks between paragraphs for readability</li>
              <li class="flex gap-2"><span class="text-zinc-400 dark:text-zinc-500">--</span>End with a clear CTA or question to drive engagement</li>
              <li class="flex gap-2"><span class="text-zinc-400 dark:text-zinc-500">--</span>2-4 hashtags max, placed at the end</li>
            </ul>
          </div>
          <div class="p-6 border border-zinc-200 dark:border-zinc-800">
            <h3 class="text-sm font-semibold text-zinc-900 dark:text-white mb-2">Tone</h3>
            <p class="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">Professional but not corporate. Share substance, not slogans. Data points, milestones, and technical insights perform best. Avoid "excited to announce" and "thrilled to share."</p>
          </div>
        </div>
        <div class="p-6 border border-zinc-200 dark:border-zinc-800 h-fit">
          <h3 class="text-sm font-semibold text-zinc-900 dark:text-white mb-3">Example Post</h3>
          <div class="p-4 rounded bg-zinc-50 dark:bg-zinc-800/50 text-sm text-zinc-900 dark:text-white leading-relaxed font-mono space-y-3">
            <p>33,000 AI strike kits. One contract. That's the scale the Pentagon just ordered from Auterion.</p>
            <p>Skynode S costs about as much as an Android phone, but it gives any drone autonomous target tracking, GPS-denied navigation, and swarm coordination.</p>
            <p>This isn't a prototype. It's production at a scale that changes what autonomous mass means for allied forces.</p>
            <p class="text-zinc-400 dark:text-zinc-500">#autonomy #defense #drones #auterion</p>
          </div>
        </div>
      </div>
    </section>

    <div class="border-t border-zinc-200 dark:border-zinc-800"></div>

    <section class="px-8 lg:px-16 py-16">
      <h2 class="text-xl font-semibold text-zinc-900 dark:text-white mb-2">X / Twitter</h2>
      <p class="text-sm text-zinc-500 dark:text-zinc-400 mb-8">Fast, technical, news-driven. Reach developers, defense analysts, and aerospace press.</p>
      <div class="grid gap-4 sm:grid-cols-2">
        <div class="space-y-4">
          <div class="p-6 border border-zinc-200 dark:border-zinc-800">
            <h3 class="text-sm font-semibold text-zinc-900 dark:text-white mb-2">Format Rules</h3>
            <ul class="space-y-2 text-sm text-zinc-500 dark:text-zinc-400">
              <li class="flex gap-2"><span class="text-zinc-400 dark:text-zinc-500">--</span>280 characters per tweet (aim for under 240 for retweet room)</li>
              <li class="flex gap-2"><span class="text-zinc-400 dark:text-zinc-500">--</span>Use threads for longer narratives (max 5 tweets)</li>
              <li class="flex gap-2"><span class="text-zinc-400 dark:text-zinc-500">--</span>1-2 hashtags max, only if they add discoverability</li>
              <li class="flex gap-2"><span class="text-zinc-400 dark:text-zinc-500">--</span>Tag partners and relevant accounts when appropriate</li>
            </ul>
          </div>
          <div class="p-6 border border-zinc-200 dark:border-zinc-800">
            <h3 class="text-sm font-semibold text-zinc-900 dark:text-white mb-2">Tone</h3>
            <p class="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">Concise and direct. Technical facts over marketing language. Short declarative sentences. Numbers and specifics always outperform abstractions.</p>
          </div>
        </div>
        <div class="p-6 border border-zinc-200 dark:border-zinc-800 h-fit">
          <h3 class="text-sm font-semibold text-zinc-900 dark:text-white mb-3">Example Posts</h3>
          <div class="space-y-4">
            <div class="p-4 rounded bg-zinc-50 dark:bg-zinc-800/50 text-sm text-zinc-900 dark:text-white leading-relaxed font-mono">
              <p>Skynode S: autonomous target lock, GPS-denied nav, swarm-ready. Fits in your hand. Costs less than a phone.</p>
            </div>
            <div class="p-4 rounded bg-zinc-50 dark:bg-zinc-800/50 text-sm text-zinc-900 dark:text-white leading-relaxed font-mono">
              <p>AuterionOS now runs on 14 airframe types from 6 manufacturers. One operator interface for the entire fleet.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div class="border-t border-zinc-200 dark:border-zinc-800"></div>

    <section class="px-8 lg:px-16 py-16">
      <h2 class="text-xl font-semibold text-zinc-900 dark:text-white mb-2">YouTube</h2>
      <p class="text-sm text-zinc-500 dark:text-zinc-400 mb-8">Long-form content: product demos, conference talks, field footage, technical explainers.</p>
      <div class="space-y-4 max-w-3xl">
        <div class="p-6 border border-zinc-200 dark:border-zinc-800">
          <h3 class="text-sm font-semibold text-zinc-900 dark:text-white mb-2">Description Template</h3>
          <div class="p-4 rounded bg-zinc-50 dark:bg-zinc-800/50 text-sm text-zinc-900 dark:text-white leading-relaxed font-mono space-y-3">
            <p>[One-sentence summary of the video content]</p>
            <p>[2-3 sentences expanding on what the viewer will learn or see]</p>
            <p class="text-zinc-400 dark:text-zinc-500">Chapters:</p>
            <p>0:00 Introduction<br>1:30 [Topic 1]<br>4:00 [Topic 2]<br>7:15 [Topic 3]<br>10:00 Summary</p>
            <p class="text-zinc-400 dark:text-zinc-500">Links:</p>
            <p>Product page: [URL]<br>Documentation: [URL]<br>Blog post: [URL]</p>
          </div>
        </div>
        <div class="p-6 border border-zinc-200 dark:border-zinc-800">
          <h3 class="text-sm font-semibold text-zinc-900 dark:text-white mb-2">Chapter Markers</h3>
          <p class="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">Always include chapter markers for videos over 3 minutes. Start with "0:00 Introduction." Use descriptive labels, not generic ones ("Skynode S Field Test" not "Demo").</p>
        </div>
        <div class="p-6 border border-zinc-200 dark:border-zinc-800">
          <h3 class="text-sm font-semibold text-zinc-900 dark:text-white mb-2">Title Conventions</h3>
          <p class="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">Title case. Lead with the product or topic name. Include a descriptor after a colon or dash. Keep under 60 characters to avoid truncation.</p>
          <div class="mt-3 space-y-2">
            <div class="border-l-2 border-green-500 pl-5">
              <p class="text-xs text-zinc-900 dark:text-white font-medium">"Skynode S: Autonomous Target Tracking Demo"</p>
            </div>
            <div class="border-l-2 border-red-500 pl-5">
              <p class="text-xs text-zinc-900 dark:text-white font-medium">"Check Out Our Amazing New Product!!!"</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div class="border-t border-zinc-200 dark:border-zinc-800"></div>

    <section class="px-8 lg:px-16 py-16">
      <h2 class="text-xl font-semibold text-zinc-900 dark:text-white mb-6">Hashtag Reference</h2>
      <div class="overflow-x-auto">
        <table class="w-full text-sm">
          <thead>
            <tr class="border-b border-zinc-300 dark:border-zinc-700 text-left">
              <th class="py-3 pr-6 text-[11px] font-medium text-zinc-400 dark:text-zinc-500 uppercase tracking-widest">Category</th>
              <th class="py-3 pr-6 text-[11px] font-medium text-zinc-400 dark:text-zinc-500 uppercase tracking-widest">Hashtags</th>
              <th class="py-3 text-[11px] font-medium text-zinc-400 dark:text-zinc-500 uppercase tracking-widest">Usage</th>
            </tr>
          </thead>
          <tbody>
            <tr class="border-b border-zinc-200 dark:border-zinc-800">
              <td class="py-3 pr-6 font-medium text-zinc-900 dark:text-white">Brand</td>
              <td class="py-3 pr-6 text-zinc-500 dark:text-zinc-400 font-mono">#auterion</td>
              <td class="py-3 text-zinc-500 dark:text-zinc-400">Every post</td>
            </tr>
            <tr class="border-b border-zinc-200 dark:border-zinc-800">
              <td class="py-3 pr-6 font-medium text-zinc-900 dark:text-white">Industry</td>
              <td class="py-3 pr-6 text-zinc-500 dark:text-zinc-400 font-mono">#drones #autonomy #UAV</td>
              <td class="py-3 text-zinc-500 dark:text-zinc-400">When relevant to content</td>
            </tr>
            <tr class="border-b border-zinc-200 dark:border-zinc-800">
              <td class="py-3 pr-6 font-medium text-zinc-900 dark:text-white">Sector</td>
              <td class="py-3 pr-6 text-zinc-500 dark:text-zinc-400 font-mono">#defense #aerospace</td>
              <td class="py-3 text-zinc-500 dark:text-zinc-400">Defense-related content only</td>
            </tr>
            <tr class="border-b border-zinc-200 dark:border-zinc-800">
              <td class="py-3 pr-6 font-medium text-zinc-900 dark:text-white">Technical</td>
              <td class="py-3 pr-6 text-zinc-500 dark:text-zinc-400 font-mono">#PX4 #opensource #robotics</td>
              <td class="py-3 text-zinc-500 dark:text-zinc-400">Developer and engineering content</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  </div>
</template>
