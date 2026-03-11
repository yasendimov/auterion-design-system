<script setup lang="ts">
</script>

<template>
  <div>
    <header class="px-8 lg:px-16 pt-16 pb-12">
      <p class="text-[11px] text-dim uppercase tracking-widest font-medium mb-3">Logo</p>
      <h1 class="text-5xl font-medium text-high">Placement</h1>
      <p class="text-base text-low mt-4">Consistent logo placement builds recognition. These guidelines cover positioning, co-branding, and partner logo relationships across all touchpoints.</p>
    </header>

    <div class="border-t border-line"></div>

    <!-- Positioning -->
    <section class="px-8 lg:px-16 py-16">
      <h2 class="text-xl font-semibold text-high mb-1">Positioning</h2>
      <p class="text-sm text-low mb-8">The Auterion logo has two default positions depending on context. Consistent placement across all materials strengthens brand recognition and creates a professional, unified appearance.</p>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="p-6 border border-line">
          <h3 class="text-sm font-semibold text-high mb-3">Top-Left (Default)</h3>
          <div class="aspect-video bg-surface-1 flex items-start justify-start p-4">
            <div class="w-24 h-6 rounded bg-surface-2 dark:bg-line-active flex items-center justify-center">
              <span class="text-[10px] text-low">Logo</span>
            </div>
          </div>
          <p class="text-sm text-low mt-3">The default position for most applications. Used in website headers, document headers, presentation slides, and product UI. Aligns with left-to-right reading patterns.</p>
        </div>
        <div class="p-6 border border-line">
          <h3 class="text-sm font-semibold text-high mb-3">Centered (Hero)</h3>
          <div class="aspect-video bg-surface-1 flex items-center justify-center">
            <div class="w-32 h-8 rounded bg-surface-2 dark:bg-line-active flex items-center justify-center">
              <span class="text-[10px] text-low">Logo</span>
            </div>
          </div>
          <p class="text-sm text-low mt-3">Reserved for hero contexts where the logo is the focal point. Splash screens, loading states, event backdrops, and landing page hero sections. Use the larger tagline lockup when appropriate.</p>
        </div>
      </div>

      <div class="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="p-6 border border-line">
          <h3 class="text-sm font-semibold text-high mb-3">Bottom-Left (Footer)</h3>
          <div class="aspect-video bg-surface-1 flex items-end justify-start p-4">
            <div class="w-20 h-5 rounded bg-surface-2 dark:bg-line-active flex items-center justify-center">
              <span class="text-[10px] text-low">Logo</span>
            </div>
          </div>
          <p class="text-sm text-low mt-3">Used in website footers and document footers. Typically at a smaller scale than the header placement.</p>
        </div>
        <div class="p-6 border border-line">
          <h3 class="text-sm font-semibold text-high mb-3">Bottom-Right (Badge)</h3>
          <div class="aspect-video bg-surface-1 flex items-end justify-end p-4">
            <div class="w-8 h-8 rounded bg-surface-2 dark:bg-line-active flex items-center justify-center">
              <span class="text-[8px] text-low">S</span>
            </div>
          </div>
          <p class="text-sm text-low mt-3">Symbol-only in bottom-right for "powered by" contexts, video watermarks, and photography attribution.</p>
        </div>
      </div>
    </section>

    <div class="border-t border-line"></div>

    <!-- Co-Branding -->
    <section class="px-8 lg:px-16 py-16">
      <h2 class="text-xl font-semibold text-high mb-1">Co-Branding</h2>
      <p class="text-sm text-low mb-8">When the Auterion logo appears alongside partner or customer logos, specific rules ensure both brands are treated with equal respect and visual balance.</p>

      <div class="aspect-video bg-surface-1 flex items-center justify-center">
        <span class="text-sm text-dim">Co-branding layout: Auterion logo + divider + partner logo, equal optical height</span>
      </div>

      <div class="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="p-6 border border-line">
          <h3 class="text-sm font-semibold text-high mb-2">Rules</h3>
          <ul class="text-sm text-low space-y-1.5 list-disc list-inside">
            <li>Match optical height of both logos (not pixel height)</li>
            <li>Separate with a vertical divider line (1px, 50% opacity)</li>
            <li>Maintain 2x clear space between logos and divider</li>
            <li>Auterion logo appears on the left in LTR contexts</li>
            <li>Both logos use the same color treatment (both full-color or both monochrome)</li>
          </ul>
        </div>
        <div class="p-6 border border-line">
          <h3 class="text-sm font-semibold text-high mb-2">Avoid</h3>
          <ul class="text-sm text-low space-y-1.5 list-disc list-inside">
            <li>Making one logo significantly larger than the other</li>
            <li>Placing logos so close that their clear spaces overlap</li>
            <li>Mixing color treatments (e.g., Auterion in color, partner in grayscale)</li>
            <li>Stacking more than three logos horizontally</li>
          </ul>
        </div>
      </div>
    </section>

    <div class="border-t border-line"></div>

    <!-- Partner Logo Relationships -->
    <section class="px-8 lg:px-16 py-16">
      <h2 class="text-xl font-semibold text-high mb-1">Partner Logo Relationships</h2>
      <p class="text-sm text-low mb-8">Different partnership tiers have different logo placement conventions. Follow these patterns based on the relationship type.</p>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="p-6 border border-line">
          <h3 class="text-sm font-semibold text-high mb-3">Integrated Partner</h3>
          <div class="aspect-3/1 bg-surface-1 flex items-center justify-center border border-line  mb-3">
            <span class="text-xs text-dim">Side-by-side, equal size</span>
          </div>
          <p class="text-sm text-low">Hardware manufacturers and deep integration partners. Logos appear side-by-side at equal optical height.</p>
        </div>
        <div class="p-6 border border-line">
          <h3 class="text-sm font-semibold text-high mb-3">Powered By</h3>
          <div class="aspect-3/1 bg-surface-1 flex items-center justify-center border border-line  mb-3">
            <span class="text-xs text-dim">"Powered by Auterion" badge</span>
          </div>
          <p class="text-sm text-low">When Auterion technology runs inside another product. Use the "Powered by" lockup with the Auterion logo at a smaller scale.</p>
        </div>
        <div class="p-6 border border-line">
          <h3 class="text-sm font-semibold text-high mb-3">Ecosystem</h3>
          <div class="aspect-3/1 bg-surface-1 flex items-center justify-center border border-line  mb-3">
            <span class="text-xs text-dim">Logo grid / wall</span>
          </div>
          <p class="text-sm text-low">For partner ecosystem pages and event materials. Logos appear in a grid with consistent sizing and spacing across all partners.</p>
        </div>
      </div>
    </section>

    <div class="border-t border-line"></div>

    <!-- Spacing Guidelines -->
    <section class="px-8 lg:px-16 py-16">
      <h2 class="text-xl font-semibold text-high mb-1">Spacing Guidelines</h2>
      <p class="text-sm text-low mb-8">Consistent spacing between the logo and surrounding elements reinforces the brand's precision and attention to detail.</p>

      <div class="overflow-x-auto">
        <table class="w-full text-sm">
          <thead>
            <tr class="border-b border-line">
              <th class="text-left py-3 pr-4 font-medium text-high">Context</th>
              <th class="text-left py-3 pr-4 font-medium text-high">Distance from edge</th>
              <th class="text-left py-3 font-medium text-high">Distance from content</th>
            </tr>
          </thead>
          <tbody class="text-low">
            <tr class="border-b border-line">
              <td class="py-3 pr-4">Website header</td>
              <td class="py-3 pr-4">24-32px from left edge</td>
              <td class="py-3">48px from navigation</td>
            </tr>
            <tr class="border-b border-line">
              <td class="py-3 pr-4">Presentation slide</td>
              <td class="py-3 pr-4">5% of slide width from edge</td>
              <td class="py-3">2x logo height from title</td>
            </tr>
            <tr class="border-b border-line">
              <td class="py-3 pr-4">Print document</td>
              <td class="py-3 pr-4">20mm from page edge</td>
              <td class="py-3">15mm from body text</td>
            </tr>
            <tr class="border-b border-line">
              <td class="py-3 pr-4">Email signature</td>
              <td class="py-3 pr-4">Flush left</td>
              <td class="py-3">16px from divider</td>
            </tr>
            <tr>
              <td class="py-3 pr-4">Vehicle livery</td>
              <td class="py-3 pr-4">10% of surface width</td>
              <td class="py-3">3x symbol height from other marks</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  </div>
</template>
