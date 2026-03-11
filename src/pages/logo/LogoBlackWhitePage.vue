<script setup lang="ts">
</script>

<template>
  <div>
    <header class="px-8 lg:px-16 pt-16 pb-12">
      <p class="text-[11px] text-dim uppercase tracking-widest font-medium mb-3">Logo</p>
      <h1 class="text-5xl font-medium text-high">Black & White</h1>
      <p class="text-base text-low mt-4">When color reproduction is unavailable or undesirable, use the monochrome versions of the logo. These are not grayscale conversions -- they are purpose-built single-color variants.</p>
    </header>

    <div class="border-t border-line"></div>

    <!-- White Logo -->
    <section class="px-8 lg:px-16 py-16">
      <h2 class="text-xl font-semibold text-high mb-1">White Logo</h2>
      <p class="text-sm text-low mb-8">Use the white logo on dark or saturated backgrounds. This is the most common monochrome variant since Auterion's primary brand context is dark-mode-first.</p>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <div class="aspect-3/1 bg-surface-3 flex items-center justify-center border border-line-active">
            <span class="text-sm text-low">White logo on dark background</span>
          </div>
          <p class="text-xs text-dim mt-2">On dark neutrals (#000 -- #333)</p>
        </div>
        <div>
          <div class="aspect-3/1 bg-primary flex items-center justify-center border border-primary">
            <span class="text-sm text-on-primary">White logo on brand blue</span>
          </div>
          <p class="text-xs text-dim mt-2">On saturated brand colors</p>
        </div>
      </div>

      <div class="mt-6 p-6 border border-line">
        <h3 class="text-sm font-semibold text-high mb-2">When to use</h3>
        <ul class="text-sm text-low space-y-1.5 list-disc list-inside">
          <li>Dark UI backgrounds and dark-mode interfaces</li>
          <li>Photography overlays on dark or busy imagery</li>
          <li>Colored backgrounds where the full-color logo lacks contrast</li>
          <li>Laser-etched hardware labels on dark chassis</li>
          <li>Single-color print processes (white ink on dark stock)</li>
        </ul>
      </div>
    </section>

    <div class="border-t border-line"></div>

    <!-- Black Logo -->
    <section class="px-8 lg:px-16 py-16">
      <h2 class="text-xl font-semibold text-high mb-1">Black Logo</h2>
      <p class="text-sm text-low mb-8">Use the black logo on light backgrounds. This is the standard choice for print documents, contracts, and light-themed contexts.</p>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <div class="aspect-3/1 bg-white flex items-center justify-center border border-line">
            <span class="text-sm text-dim">Black logo on white background</span>
          </div>
          <p class="text-xs text-dim mt-2">On white (#fff)</p>
        </div>
        <div>
          <div class="aspect-3/1 bg-surface-1 flex items-center justify-center border border-line">
            <span class="text-sm text-dim">Black logo on light gray</span>
          </div>
          <p class="text-xs text-dim mt-2">On light neutrals (#eee -- #fff)</p>
        </div>
      </div>

      <div class="mt-6 p-6 border border-line">
        <h3 class="text-sm font-semibold text-high mb-2">When to use</h3>
        <ul class="text-sm text-low space-y-1.5 list-disc list-inside">
          <li>Print documents, letterheads, and invoices</li>
          <li>Legal and compliance materials</li>
          <li>Fax and single-color print output</li>
          <li>Light-mode UI contexts</li>
          <li>Embossed or stamped applications</li>
        </ul>
      </div>
    </section>

    <div class="border-t border-line"></div>

    <!-- Do / Don't -->
    <section class="px-8 lg:px-16 py-16">
      <h2 class="text-xl font-semibold text-high mb-1">Do / Don't</h2>
      <p class="text-sm text-low mb-8">Follow these rules to maintain the integrity of the monochrome logo variants.</p>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <div class="aspect-3/1 bg-surface-3 flex items-center justify-center border-2 border-ok/40">
            <span class="text-sm text-low">White logo on dark background</span>
          </div>
          <p class="text-sm font-medium text-ok-text mt-2">Do: Use white logo on dark backgrounds</p>
        </div>
        <div>
          <div class="aspect-3/1 bg-surface-1 flex items-center justify-center border-2 border-alarm/40">
            <span class="text-sm text-dim">White logo on light background (wrong)</span>
          </div>
          <p class="text-sm font-medium text-alarm-text mt-2">Don't: Use white logo on light backgrounds</p>
        </div>
        <div>
          <div class="aspect-3/1 bg-white flex items-center justify-center border-2 border-ok/40">
            <span class="text-sm text-dim">Black logo on white background</span>
          </div>
          <p class="text-sm font-medium text-ok-text mt-2">Do: Use black logo on light backgrounds</p>
        </div>
        <div>
          <div class="aspect-3/1 bg-surface-3 flex items-center justify-center border-2 border-alarm/40">
            <span class="text-sm text-low">Black logo on dark background (wrong)</span>
          </div>
          <p class="text-sm font-medium text-alarm-text mt-2">Don't: Use black logo on dark backgrounds</p>
        </div>
        <div>
          <div class="aspect-3/1 bg-surface-3 flex items-center justify-center border-2 border-ok/40">
            <span class="text-sm text-low">Full-color logo on neutral background</span>
          </div>
          <p class="text-sm font-medium text-ok-text mt-2">Do: Prefer the full-color logo when color is available</p>
        </div>
        <div>
          <div class="aspect-3/1 bg-surface-2 flex items-center justify-center border-2 border-alarm/40">
            <span class="text-sm text-low">Grayscale conversion of color logo (wrong)</span>
          </div>
          <p class="text-sm font-medium text-alarm-text mt-2">Don't: Convert the color logo to grayscale -- use the purpose-built B&W versions</p>
        </div>
      </div>
    </section>
  </div>
</template>
