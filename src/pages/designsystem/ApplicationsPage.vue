<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <div>
    <header class="px-8 lg:px-16 pt-16 pb-12">
      <p class="text-[11px] text-dim uppercase tracking-widest font-medium mb-3">Design System</p>
      <h1 class="text-5xl font-medium text-high">Applications</h1>
      <p class="text-base text-low mt-4 max-w-xl leading-relaxed">
        How the design system manifests in Auterion product UIs. Dark-mode-first, data-dense, aerospace-grade interfaces built for mission-critical operations.
      </p>
    </header>

    <div class="border-t border-line"></div>

    <!-- Introduction -->
    <section id="introduction" class="px-8 lg:px-16 py-16">
      <h2 class="text-xl font-semibold text-high mb-8">Introduction</h2>
      <div class="max-w-2xl">
        <p class="text-sm text-low leading-relaxed mb-4">
          Auterion's product interfaces are designed for operators managing autonomous systems in high-stakes environments. Every UI decision prioritizes information density, scan-ability, and situational awareness.
        </p>
        <p class="text-sm text-low leading-relaxed mb-4">
          The dark theme is primary -- reducing eye strain during extended operations and maximizing contrast for status indicators. The alert hierarchy (alarm, warning, caution, OK) follows OpenBridge and aviation standards, ensuring operators instantly recognize system state.
        </p>
        <p class="text-sm text-low leading-relaxed">
          Semantic color tokens, layered surfaces, and consistent spacing create interfaces that feel unified across ground control stations, fleet dashboards, and mission planning tools.
        </p>
      </div>
    </section>

    <div class="border-t border-line"></div>

    <!-- Components -->
    <section id="components" class="px-8 lg:px-16 py-16">
      <h2 class="text-xl font-semibold text-high mb-8">Components</h2>
      <div class="grid gap-8 sm:grid-cols-2">
        <!-- Map Overlay Panel -->
        <div class="p-6 border border-line">
          <div class="aspect-video bg-surface-1 flex items-center justify-center mb-4">
            <span class="text-sm text-dim">Map overlay panel</span>
          </div>
          <h3 class="text-sm font-semibold text-high mb-2">Map Overlay Panel</h3>
          <p class="text-sm text-low leading-relaxed mb-3">Semi-transparent surface-1 panel layered over map content. Uses border-subtle for edges, text-primary for headings, text-secondary for metadata. Collapsed and expanded states with smooth transitions.</p>
          <div class="flex flex-wrap gap-2">
            <span class="px-2 py-1 text-[11px] font-medium text-low bg-surface-1 rounded">Surface: surface-1 (80% opacity)</span>
            <span class="px-2 py-1 text-[11px] font-medium text-low bg-surface-1 rounded">Border: border-subtle</span>
            <span class="px-2 py-1 text-[11px] font-medium text-low bg-surface-1 rounded">Text: text-primary, text-secondary</span>
          </div>
        </div>

        <!-- Telemetry Data Card -->
        <div class="p-6 border border-line">
          <div class="aspect-video bg-surface-1 flex items-center justify-center mb-4">
            <span class="text-sm text-dim">Telemetry data card</span>
          </div>
          <h3 class="text-sm font-semibold text-high mb-2">Telemetry Data Card</h3>
          <p class="text-sm text-low leading-relaxed mb-3">Compact card on surface-2 showing a single metric. Value in JetBrains Mono 24pt using text-primary. Label in Inter 11pt text-tertiary. Status color band on left edge uses semantic tokens (ok, caution, warning, alarm).</p>
          <div class="flex flex-wrap gap-2">
            <span class="px-2 py-1 text-[11px] font-medium text-low bg-surface-1 rounded">Surface: surface-2</span>
            <span class="px-2 py-1 text-[11px] font-medium text-low bg-surface-1 rounded">Font: JetBrains Mono 24pt</span>
            <span class="px-2 py-1 text-[11px] font-medium text-low bg-surface-1 rounded">Status: ok, caution, warning, alarm</span>
          </div>
        </div>

        <!-- Status Indicator Bar -->
        <div class="p-6 border border-line">
          <div class="aspect-video bg-surface-1 flex items-center justify-center mb-4">
            <span class="text-sm text-dim">Status indicator bar</span>
          </div>
          <h3 class="text-sm font-semibold text-high mb-2">Status Indicator Bar</h3>
          <p class="text-sm text-low leading-relaxed mb-3">Horizontal bar spanning the top of a panel. Background uses the semantic -subtle variant (e.g., ok-subtle, alarm-subtle). Icon + label in the corresponding -text variant. Follows the OpenBridge alert hierarchy strictly.</p>
          <div class="flex flex-wrap gap-2">
            <span class="px-2 py-1 text-[11px] font-medium text-low bg-surface-1 rounded">Color: {status}-subtle bg</span>
            <span class="px-2 py-1 text-[11px] font-medium text-low bg-surface-1 rounded">Text: {status}-text</span>
            <span class="px-2 py-1 text-[11px] font-medium text-low bg-surface-1 rounded">Pattern: OpenBridge alert hierarchy</span>
          </div>
        </div>

        <!-- Vehicle List Item -->
        <div class="p-6 border border-line">
          <div class="aspect-video bg-surface-1 flex items-center justify-center mb-4">
            <span class="text-sm text-dim">Vehicle list item</span>
          </div>
          <h3 class="text-sm font-semibold text-high mb-2">Vehicle List Item</h3>
          <p class="text-sm text-low leading-relaxed mb-3">Row component on surface-1. Vehicle name in Inter Semibold 14pt, callsign in JetBrains Mono 12pt text-tertiary. Status dot uses semantic ok/warning/alarm fill. Hover state elevates to surface-2 with border-default.</p>
          <div class="flex flex-wrap gap-2">
            <span class="px-2 py-1 text-[11px] font-medium text-low bg-surface-1 rounded">Surface: surface-1, surface-2 (hover)</span>
            <span class="px-2 py-1 text-[11px] font-medium text-low bg-surface-1 rounded">Font: Inter 14pt + Mono 12pt</span>
            <span class="px-2 py-1 text-[11px] font-medium text-low bg-surface-1 rounded">Status: semantic dot indicator</span>
          </div>
        </div>

        <!-- Mission Timeline Strip -->
        <div class="p-6 border border-line sm:col-span-2">
          <div class="aspect-3/1 bg-surface-1 flex items-center justify-center mb-4">
            <span class="text-sm text-dim">Mission timeline strip</span>
          </div>
          <h3 class="text-sm font-semibold text-high mb-2">Mission Timeline Strip</h3>
          <p class="text-sm text-low leading-relaxed mb-3">Horizontal timeline on surface-1. Waypoint markers use primary fill, completed segments use ok-muted, upcoming segments use border-subtle. Time labels in JetBrains Mono 10pt. Active waypoint pulses with primary-hover glow.</p>
          <div class="flex flex-wrap gap-2">
            <span class="px-2 py-1 text-[11px] font-medium text-low bg-surface-1 rounded">Color: primary, ok-muted, border-subtle</span>
            <span class="px-2 py-1 text-[11px] font-medium text-low bg-surface-1 rounded">Font: JetBrains Mono 10pt</span>
            <span class="px-2 py-1 text-[11px] font-medium text-low bg-surface-1 rounded">Layout: Horizontal scroll</span>
          </div>
        </div>
      </div>
    </section>

    <div class="border-t border-line"></div>

    <!-- Examples -->
    <section id="examples" class="px-8 lg:px-16 py-16">
      <h2 class="text-xl font-semibold text-high mb-8">Examples</h2>
      <div class="grid gap-8 sm:grid-cols-2">
        <!-- Live: Home Screen -->
        <RouterLink to="/gallery/applications/home-screen" class="group block">
          <div class="aspect-video bg-surface-1 flex items-center justify-center mb-4 border border-line  group-hover:border-primary-hover transition-colors overflow-hidden relative">
            <div class="absolute inset-0 bg-page flex">
              <!-- Mini preview of the layout -->
              <div class="w-16 bg-surface-3 border-r border-line-active flex flex-col p-2 gap-1.5">
                <div class="w-8 h-1.5 rounded bg-surface-3 mb-2"></div>
                <div class="w-full h-1.5 rounded bg-primary/30"></div>
                <div class="w-full h-1.5 rounded bg-surface-2"></div>
                <div class="w-full h-1.5 rounded bg-surface-2"></div>
                <div class="w-full h-1.5 rounded bg-surface-2"></div>
              </div>
              <div class="flex-1 flex flex-col">
                <div class="h-5 border-b border-line-active flex items-center px-2">
                  <div class="w-16 h-1.5 rounded bg-surface-3"></div>
                </div>
                <div class="flex-1 flex">
                  <div class="flex-1 p-2 space-y-1.5">
                    <div class="flex items-center gap-1.5">
                      <div class="size-1.5 rounded-full bg-ok"></div>
                      <div class="w-20 h-1.5 rounded bg-surface-3"></div>
                    </div>
                    <div class="flex items-center gap-1.5">
                      <div class="size-1.5 rounded-full bg-ok"></div>
                      <div class="w-24 h-1.5 rounded bg-surface-3"></div>
                    </div>
                    <div class="flex items-center gap-1.5">
                      <div class="size-1.5 rounded-full bg-alarm"></div>
                      <div class="w-16 h-1.5 rounded bg-surface-3"></div>
                    </div>
                    <div class="flex items-center gap-1.5">
                      <div class="size-1.5 rounded-full bg-caution"></div>
                      <div class="w-20 h-1.5 rounded bg-surface-3"></div>
                    </div>
                  </div>
                  <div class="w-24 bg-surface-3 border-l border-line-active p-2 space-y-1.5">
                    <div class="w-12 h-1.5 rounded bg-surface-3"></div>
                    <div class="w-full h-1 rounded bg-surface-2"></div>
                    <div class="w-full h-1 rounded bg-surface-2"></div>
                    <div class="w-full h-1 rounded bg-surface-2"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <h3 class="text-sm font-semibold text-high mb-2 group-hover:text-high dark:group-hover:text-white transition-colors">
            Home Screen
            <span class="ml-2 inline-flex items-center px-1.5 py-0.5 text-[10px] font-medium bg-primary-subtle text-primary-text rounded">Live</span>
          </h3>
          <p class="text-sm text-low leading-relaxed">Sidebar navigation with mission deployments list and activity feed. Uses semantic tokens for status indicators (ok, alarm, caution), layered surfaces, and the full OpenBridge alert hierarchy.</p>
        </RouterLink>

        <RouterLink to="/gallery/applications/amc" class="group block">
          <div class="aspect-video bg-surface-1 flex items-center justify-center mb-4 border border-line  group-hover:border-primary-hover transition-colors overflow-hidden relative">
            <div class="absolute inset-0 bg-[#0c1218] flex flex-col">
              <!-- Top bar -->
              <div class="h-3 bg-surface-3 border-b border-line-active flex items-center px-1.5 gap-1">
                <div class="size-1 rounded-full bg-ok"></div>
                <div class="w-8 h-0.5 bg-line-active rounded"></div>
                <div class="w-5 h-1 bg-ok-muted rounded-sm ml-1"></div>
                <div class="flex-1"></div>
                <div class="w-3 h-0.5 bg-surface-3 rounded"></div>
                <div class="w-3 h-0.5 bg-surface-3 rounded"></div>
              </div>
              <div class="flex-1 flex">
                <!-- Left sidebar -->
                <div class="w-4 bg-surface-3/80 border-r border-line-active flex flex-col items-center py-1 gap-0.5">
                  <div class="size-1.5 rounded-sm bg-surface-3"></div>
                  <div class="size-1.5 rounded-sm bg-primary/40"></div>
                  <div class="size-1.5 rounded-sm bg-surface-3"></div>
                  <div class="w-1.5 h-px bg-surface-2 my-0.5"></div>
                  <div class="size-1.5 rounded-sm bg-surface-3"></div>
                  <div class="size-1.5 rounded-sm bg-surface-3"></div>
                </div>
                <!-- Map area -->
                <div class="flex-1 relative">
                  <svg class="absolute inset-0 w-full h-full opacity-6" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <pattern id="amc-prev-grid" width="16" height="16" patternUnits="userSpaceOnUse">
                        <path d="M 16 0 L 0 0 0 16" fill="none" stroke="white" stroke-width="0.3"/>
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#amc-prev-grid)"/>
                  </svg>
                  <!-- Survey area -->
                  <div class="absolute top-[22%] left-[28%] w-[40%] h-[42%] border border-dashed border-primary/20"></div>
                  <!-- Flight path -->
                  <svg class="absolute inset-0 w-full h-full">
                    <polyline points="25,68 32,52 50,40 68,32" fill="none" stroke="#22c55e" stroke-width="1" opacity="0.5"/>
                    <polyline points="68,32 88,32 88,52 68,52" fill="none" stroke="#6b7280" stroke-width="0.7" stroke-dasharray="2 2" opacity="0.25"/>
                  </svg>
                  <!-- Drone -->
                  <div class="absolute" style="top: 28%; left: 56%;">
                    <div class="size-0 border-l-[2.5px] border-r-[2.5px] border-b-4 border-l-transparent border-r-transparent border-b-primary drop-shadow-[0_0_3px_rgba(59,130,246,0.5)]" style="transform: rotate(47deg);"></div>
                  </div>
                  <!-- Video switcher -->
                  <div class="absolute bottom-1 left-1.5 w-10 h-6 bg-black/80 border border-line-active/50 rounded-sm flex items-center justify-center">
                    <div class="size-1.5 border border-neutral-a6 rounded-full"></div>
                  </div>
                  <!-- Telemetry panel -->
                  <div class="absolute bottom-1 right-1.5 w-12 bg-surface-3/80 border border-line-active/40 rounded-sm p-0.5 space-y-0.5">
                    <div class="flex gap-1">
                      <div class="w-4 h-0.5 bg-line-active rounded"></div>
                      <div class="w-3 h-0.5 bg-line-active rounded"></div>
                    </div>
                    <div class="flex gap-1">
                      <div class="w-3 h-0.5 bg-surface-3 rounded"></div>
                      <div class="w-4 h-0.5 bg-surface-3 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <h3 class="text-sm font-semibold text-high mb-2 group-hover:text-high dark:group-hover:text-white transition-colors">
            Auterion Mission Control
            <span class="ml-2 inline-flex items-center px-1.5 py-0.5 text-[10px] font-medium bg-primary-subtle text-primary-text rounded">Live</span>
          </h3>
          <p class="text-sm text-low leading-relaxed">Ground control station with map overlay, HUD telemetry instruments, waypoint mission plan, and vehicle camera feed. Uses semantic tokens for flight data, mission status, and the full OpenBridge alert hierarchy for emergency actions.</p>
        </RouterLink>
        <div>
          <div class="aspect-video bg-surface-1 flex items-center justify-center mb-4">
            <span class="text-sm text-dim">Mission planning interface screenshot</span>
          </div>
          <h3 class="text-sm font-semibold text-high mb-2">Mission Planning Interface</h3>
          <p class="text-sm text-low leading-relaxed">Split view: map left, waypoint editor right. Timeline strip at bottom using primary markers. Waypoint list uses vehicle list item pattern. Selected waypoint highlighted with primary-subtle background and primary-border left accent.</p>
        </div>
        <div>
          <div class="aspect-video bg-surface-1 flex items-center justify-center mb-4">
            <span class="text-sm text-dim">Fleet management view screenshot</span>
          </div>
          <h3 class="text-sm font-semibold text-high mb-2">Fleet Management View</h3>
          <p class="text-sm text-low leading-relaxed">Table layout on surface-1 with border-subtle row dividers. Vehicle status dots use semantic colors (ok green, warning orange, alarm red). Sortable column headers in text-secondary. Selected row uses primary-subtle background.</p>
        </div>
      </div>
    </section>
  </div>
</template>
