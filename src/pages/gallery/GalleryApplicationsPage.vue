<script setup lang="ts">
</script>

<template>
  <div>
    <header class="px-8 lg:px-16 pt-16 pb-12">
      <p class="text-[11px] text-dim uppercase tracking-widest font-medium mb-3">Gallery</p>
      <h1 class="text-5xl font-medium text-high">Applications</h1>
      <p class="text-base text-low mt-4 max-w-xl leading-relaxed">
        Product UI patterns for ground control, telemetry, mission planning, and fleet management — annotated with the tokens and conventions they use.
      </p>
    </header>

    <div class="border-t border-line"></div>

    <section class="px-8 lg:px-16 py-16">
      <h2 class="text-xl font-semibold text-high mb-8">Ground Control Station</h2>
      <div class="aspect-video bg-surface-1 flex items-center justify-center mb-6">
        <span class="text-sm text-dim">Ground control station interface</span>
      </div>
      <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div class="p-6 border border-line">
          <p class="text-[11px] text-dim uppercase tracking-widest font-medium mb-2">Theme</p>
          <p class="text-sm text-low">Dark-mode primary. Reduces glare in field conditions and cockpit environments. Uses page-bg and surface-1 layering.</p>
        </div>
        <div class="p-6 border border-line">
          <p class="text-[11px] text-dim uppercase tracking-widest font-medium mb-2">Alert Tokens</p>
          <p class="text-sm text-low">Alarm (red), warning (orange), caution (amber), ok (green) following the OpenBridge aviation alert hierarchy. Status badges use the -subtle variant with -text for labels.</p>
        </div>
        <div class="p-6 border border-line">
          <p class="text-[11px] text-dim uppercase tracking-widest font-medium mb-2">Typography</p>
          <p class="text-sm text-low">Inter for all UI text. JetBrains Mono for telemetry values, coordinates, and system codes. Tabular numbers enabled globally.</p>
        </div>
        <div class="p-6 border border-line">
          <p class="text-[11px] text-dim uppercase tracking-widest font-medium mb-2">Layout</p>
          <p class="text-sm text-low">Map-centric with collapsible side panels. Surface-2 panels over the map canvas. Border-subtle between panel sections.</p>
        </div>
      </div>
    </section>

    <div class="border-t border-line"></div>

    <section class="px-8 lg:px-16 py-16">
      <h2 class="text-xl font-semibold text-high mb-8">Telemetry Dashboard</h2>
      <div class="aspect-video bg-surface-1 flex items-center justify-center mb-6">
        <span class="text-sm text-dim">Telemetry dashboard with live data feeds</span>
      </div>
      <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div class="p-6 border border-line">
          <p class="text-[11px] text-dim uppercase tracking-widest font-medium mb-2">Data Visualization</p>
          <p class="text-sm text-low">Charts use the semantic color palette: primary (blue) for main metric, accent (teal) for secondary, and the alert palette for threshold indicators.</p>
        </div>
        <div class="p-6 border border-line">
          <p class="text-[11px] text-dim uppercase tracking-widest font-medium mb-2">Number Display</p>
          <p class="text-sm text-low">Large telemetry values in JetBrains Mono Semibold. Units in Inter Regular at a smaller size. Tabular figures for alignment in columns.</p>
        </div>
        <div class="p-6 border border-line">
          <p class="text-[11px] text-dim uppercase tracking-widest font-medium mb-2">Surface Depth</p>
          <p class="text-sm text-low">Three-layer surface system: page-bg as canvas, surface-1 for widget cards, surface-2 for modal overlays. Border-subtle between sections.</p>
        </div>
        <div class="p-6 border border-line">
          <p class="text-[11px] text-dim uppercase tracking-widest font-medium mb-2">Status Patterns</p>
          <p class="text-sm text-low">Connection status: ok-subtle bg with ok-text. Battery warning: caution-subtle bg with caution-text. System error: alarm-subtle bg with alarm-text.</p>
        </div>
      </div>
    </section>

    <div class="border-t border-line"></div>

    <section class="px-8 lg:px-16 py-16">
      <h2 class="text-xl font-semibold text-high mb-8">Mission Planning</h2>
      <div class="aspect-video bg-surface-1 flex items-center justify-center mb-6">
        <span class="text-sm text-dim">Mission planning interface with waypoints and geofence</span>
      </div>
      <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div class="p-6 border border-line">
          <p class="text-[11px] text-dim uppercase tracking-widest font-medium mb-2">Interactive Elements</p>
          <p class="text-sm text-low">Buttons use primary and primary-hover tokens. Destructive actions (delete waypoint, abort) use alarm and alarm-hover. Focus rings use primary-border.</p>
        </div>
        <div class="p-6 border border-line">
          <p class="text-[11px] text-dim uppercase tracking-widest font-medium mb-2">Map Overlays</p>
          <p class="text-sm text-low">Waypoint paths in primary blue. Geofence boundaries in warning orange. No-fly zones in alarm red with alarm-subtle fill. Active selection ring in primary-border.</p>
        </div>
        <div class="p-6 border border-line">
          <p class="text-[11px] text-dim uppercase tracking-widest font-medium mb-2">Form Controls</p>
          <p class="text-sm text-low">Input fields use surface-1 bg, border-default, and text-primary. Placeholder text in text-tertiary. Validation errors use alarm-text with alarm-border.</p>
        </div>
        <div class="p-6 border border-line">
          <p class="text-[11px] text-dim uppercase tracking-widest font-medium mb-2">Side Panel</p>
          <p class="text-sm text-low">Mission parameters in a surface-2 panel. Section headers use text-secondary at the 11px uppercase label style. Editable fields inline with border-subtle dividers.</p>
        </div>
      </div>
    </section>

    <div class="border-t border-line"></div>

    <section class="px-8 lg:px-16 py-16">
      <h2 class="text-xl font-semibold text-high mb-8">Fleet Management</h2>
      <div class="aspect-video bg-surface-1 flex items-center justify-center mb-6">
        <span class="text-sm text-dim">Fleet management view with vehicle list and status overview</span>
      </div>
      <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div class="p-6 border border-line">
          <p class="text-[11px] text-dim uppercase tracking-widest font-medium mb-2">Table Design</p>
          <p class="text-sm text-low">Vehicle list uses the standard table pattern: 11px uppercase tracking-widest headers, border-subtle row dividers, text-primary for vehicle names, text-secondary for metadata.</p>
        </div>
        <div class="p-6 border border-line">
          <p class="text-[11px] text-dim uppercase tracking-widest font-medium mb-2">Status Badges</p>
          <p class="text-sm text-low">Operational: ok-subtle bg, ok-text. Maintenance: caution-subtle bg, caution-text. Offline: surface-2 bg, text-disabled. Mission active: primary-subtle bg, primary-text.</p>
        </div>
        <div class="p-6 border border-line">
          <p class="text-[11px] text-dim uppercase tracking-widest font-medium mb-2">Multi-Select</p>
          <p class="text-sm text-low">Selected rows use primary-subtle background. Checkbox accents use the primary token. Batch action bar appears in surface-2 with primary action buttons.</p>
        </div>
        <div class="p-6 border border-line">
          <p class="text-[11px] text-dim uppercase tracking-widest font-medium mb-2">Real-Time Updates</p>
          <p class="text-sm text-low">Live position data in JetBrains Mono. Battery and signal indicators use the alert color ramp progressively: ok at full, caution at 30%, warning at 15%, alarm at 5%.</p>
        </div>
      </div>
    </section>
  </div>
</template>
