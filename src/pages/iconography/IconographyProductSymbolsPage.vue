<script setup lang="ts">
const vehicleTypes = [
  'Fixed-wing', 'Multirotor', 'VTOL', 'Ground Vehicle', 'Maritime',
]

const missionModes = [
  'Waypoint', 'Orbit', 'Survey', 'RTL', 'Land',
]

const systemStates = [
  'Armed', 'Disarmed', 'GPS Lock', 'No GPS', 'Battery Full', 'Battery Mid', 'Battery Low', 'Battery Critical', 'Signal Strong', 'Signal Weak', 'Signal Lost',
]

const payloads = [
  'Camera', 'Thermal', 'LiDAR', 'Cargo',
]
</script>

<template>
  <div>
    <header class="px-8 lg:px-16 pt-16 pb-12">
      <p class="text-[11px] text-dim uppercase tracking-widest font-medium mb-3">Iconography</p>
      <h1 class="text-5xl font-medium text-high">Product Symbols</h1>
      <p class="text-base text-low mt-4">Custom-designed icons for aerospace-specific concepts. These symbols have no generic equivalent and are built from scratch to communicate operational meaning to drone operators and fleet managers.</p>
    </header>

    <div class="border-t border-line"></div>

    <!-- Vehicle Types -->
    <section class="px-8 lg:px-16 py-16">
      <h2 class="text-xl font-semibold text-high mb-1">Vehicle Types</h2>
      <p class="text-sm text-low mb-8">Each vehicle class has a distinct silhouette icon. These appear in fleet lists, map overlays, and vehicle selection interfaces. The silhouette must be recognizable at 16px for map markers.</p>

      <div class="grid grid-cols-3 sm:grid-cols-5 gap-4">
        <div v-for="icon in vehicleTypes" :key="icon" class="text-center">
          <div class="aspect-square bg-surface-1 flex items-center justify-center">
            <span class="text-xs text-dim">{{ icon }}</span>
          </div>
          <p class="text-xs text-low mt-2">{{ icon }}</p>
        </div>
      </div>

      <div class="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="p-6 border border-line">
          <h3 class="text-sm font-semibold text-high mb-2">Outline Variant</h3>
          <p class="text-sm text-low">Used in lists, sidebars, and secondary contexts where the vehicle is not the primary focus. Outline variants use the standard 1.5px stroke weight.</p>
          <div class="flex gap-3 mt-4">
            <div v-for="icon in vehicleTypes.slice(0, 3)" :key="icon" class="w-10 h-10 bg-surface-1 flex items-center justify-center">
              <span class="text-[10px] text-dim">{{ icon.slice(0, 3) }}</span>
            </div>
          </div>
        </div>
        <div class="p-6 border border-line">
          <h3 class="text-sm font-semibold text-high mb-2">Filled Variant</h3>
          <p class="text-sm text-low">Used on map overlays, selected states, and primary vehicle indicators. Filled variants provide better visibility against complex map backgrounds and satellite imagery.</p>
          <div class="flex gap-3 mt-4">
            <div v-for="icon in vehicleTypes.slice(0, 3)" :key="icon" class="w-10 h-10 bg-surface-2 flex items-center justify-center">
              <span class="text-[10px] text-low">{{ icon.slice(0, 3) }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div class="border-t border-line"></div>

    <!-- Mission Modes -->
    <section class="px-8 lg:px-16 py-16">
      <h2 class="text-xl font-semibold text-high mb-1">Mission Modes</h2>
      <p class="text-sm text-low mb-8">Mission mode icons indicate what a vehicle is currently doing or what a mission plan segment requires. They appear in the mission timeline, vehicle status bars, and map waypoint markers.</p>

      <div class="grid grid-cols-3 sm:grid-cols-5 gap-4">
        <div v-for="icon in missionModes" :key="icon" class="text-center">
          <div class="aspect-square bg-surface-1 flex items-center justify-center">
            <span class="text-xs text-dim">{{ icon }}</span>
          </div>
          <p class="text-xs text-low mt-2">{{ icon }}</p>
        </div>
      </div>

      <div class="mt-8 p-4 bg-page-subtle border border-line">
        <p class="text-sm text-low"><strong class="text-high">RTL (Return to Launch)</strong> uses a distinct home-arrow combination. It must never be confused with a generic "home" icon. The arrow element indicates active movement toward the launch point, distinguishing it from a static home location marker.</p>
      </div>
    </section>

    <div class="border-t border-line"></div>

    <!-- System States -->
    <section class="px-8 lg:px-16 py-16">
      <h2 class="text-xl font-semibold text-high mb-1">System States</h2>
      <p class="text-sm text-low mb-8">State icons communicate vehicle health and readiness. They are displayed in status bars, telemetry panels, and alert notifications. These icons pair with semantic colors from the alert hierarchy (alarm, warning, caution, ok).</p>

      <div class="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
        <div v-for="icon in systemStates" :key="icon" class="text-center">
          <div class="aspect-square bg-surface-1 flex items-center justify-center">
            <span class="text-xs text-dim">{{ icon }}</span>
          </div>
          <p class="text-xs text-low mt-2">{{ icon }}</p>
        </div>
      </div>

      <div class="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="p-6 border border-line">
          <h3 class="text-sm font-semibold text-high mb-2">Armed vs Disarmed</h3>
          <p class="text-sm text-low">The armed state icon must be visually distinct and unambiguous. An armed vehicle has live motors and represents a safety hazard. The icon uses a filled shield shape; disarmed uses an outline shield with a break.</p>
        </div>
        <div class="p-6 border border-line">
          <h3 class="text-sm font-semibold text-high mb-2">Progressive States</h3>
          <p class="text-sm text-low">Battery and signal icons use a progressive fill pattern — the same base shape with varying fill levels. This allows operators to read the state from the silhouette alone, without needing to parse numbers or percentages.</p>
        </div>
      </div>
    </section>

    <div class="border-t border-line"></div>

    <!-- Payloads -->
    <section class="px-8 lg:px-16 py-16">
      <h2 class="text-xl font-semibold text-high mb-1">Payloads</h2>
      <p class="text-sm text-low mb-8">Payload icons identify what sensor or equipment a vehicle is carrying. They appear in vehicle configuration panels, mission planning, and live telemetry views.</p>

      <div class="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div v-for="icon in payloads" :key="icon" class="text-center">
          <div class="aspect-square bg-surface-1 flex items-center justify-center">
            <span class="text-xs text-dim">{{ icon }}</span>
          </div>
          <p class="text-xs text-low mt-2">{{ icon }}</p>
        </div>
      </div>

      <div class="mt-8 p-4 bg-page-subtle border border-line">
        <p class="text-sm text-low"><strong class="text-high">Thermal vs Camera:</strong> The thermal payload icon uses a distinctive crosshair-reticle pattern to differentiate it from the standard camera icon. In mission-critical contexts, confusing a visual camera feed with a thermal feed can lead to incorrect situational assessment.</p>
      </div>
    </section>

    <div class="border-t border-line"></div>

    <!-- Usage Guidelines -->
    <section class="px-8 lg:px-16 py-16">
      <h2 class="text-xl font-semibold text-high mb-1">Filled vs Outline Usage</h2>
      <p class="text-sm text-low mb-8">Every product symbol ships in both outline and filled variants. The choice between them is not aesthetic — it encodes interaction state and visual hierarchy.</p>

      <div class="overflow-x-auto">
        <table class="w-full text-sm">
          <thead>
            <tr class="border-b border-line text-left">
              <th class="py-2 pr-4 text-[11px] font-medium text-dim uppercase tracking-widest">Variant</th>
              <th class="py-2 pr-4 text-[11px] font-medium text-dim uppercase tracking-widest">Context</th>
              <th class="py-2 text-[11px] font-medium text-dim uppercase tracking-widest">Example</th>
            </tr>
          </thead>
          <tbody>
            <tr class="border-b border-line">
              <td class="py-3 pr-4 font-medium text-high">Outline</td>
              <td class="py-3 pr-4 text-low">Default state, lists, secondary UI, inactive items</td>
              <td class="py-3 text-low">Vehicle list sidebar, mission mode selector (unselected)</td>
            </tr>
            <tr class="border-b border-line">
              <td class="py-3 pr-4 font-medium text-high">Filled</td>
              <td class="py-3 pr-4 text-low">Selected state, map markers, primary indicators, active items</td>
              <td class="py-3 text-low">Map vehicle overlay, active mission mode, selected payload</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  </div>
</template>
