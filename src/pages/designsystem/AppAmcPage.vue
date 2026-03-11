<script setup lang="ts">
import { ref, computed } from 'vue'
import {
  SignalIcon,
  Battery100Icon,
  VideoCameraIcon,
  ArrowPathIcon,
  PlayIcon,
  HomeIcon,
  MapPinIcon,
  Cog6ToothIcon,
  ArrowUpIcon,
  CursorArrowRaysIcon,
} from '@heroicons/vue/24/outline'
import {
  SignalIcon as SignalSolidIcon,
} from '@heroicons/vue/20/solid'

const telemetry = {
  altitude: 80,
  groundSpeed: 8.2,
  heading: 47,
  climbRate: 0.1,
  distToWP: 342,
  distToHome: 1240,
  flightTime: '08:42',
  timeRemaining: '14:18',
  battery: 68,
  voltage: 22.4,
  current: 12.3,
  gpsCount: 18,
  gpsFix: '3D DGPS',
  linkQuality: 94,
  mode: 'Mission',
  armed: true,
  vehicleName: 'SF-Alto-04',
}

// Compass
const compassHeading = ref(47)
const compassRotation = computed(() => `rotate(${-compassHeading.value}deg)`)

// Video switcher
const videoExpanded = ref(false)

// Mission waypoints on map
interface MapWaypoint {
  id: number
  label: string
  x: number  // percentage
  y: number  // percentage
  completed: boolean
  active: boolean
}

const mapWaypoints: MapWaypoint[] = [
  { id: 0, label: 'H', x: 18, y: 75, completed: true, active: false },
  { id: 1, label: '1', x: 22, y: 62, completed: true, active: false },
  { id: 2, label: '2', x: 34, y: 48, completed: true, active: false },
  { id: 3, label: '3', x: 48, y: 38, completed: false, active: true },
  { id: 4, label: '4', x: 62, y: 38, completed: false, active: false },
  { id: 5, label: '5', x: 62, y: 55, completed: false, active: false },
  { id: 6, label: '6', x: 48, y: 55, completed: false, active: false },
  { id: 7, label: '7', x: 48, y: 38, completed: false, active: false },
]

// Drone position (between WP2 and WP3)
const dronePos = { x: 42, y: 42 }
</script>

<template>
  <div class="h-full bg-[#0a0f14] text-[--color-high] flex flex-col overflow-hidden select-none">

    <!-- ===== TOP BAR ===== -->
    <div class="h-11 bg-[--color-surface-1]/95 backdrop-blur border-b border-[--color-line] flex items-center shrink-0 z-30 relative">
      <!-- Flight time remaining bar (background) -->
      <div class="absolute inset-0 flex items-end pointer-events-none">
        <div class="h-[2px] bg-[--color-ok]/40 transition-all" style="width: 68%"></div>
      </div>
      <!-- RTL marker on the bar -->
      <div class="absolute bottom-0 h-[2px] pointer-events-none" style="left: 25%;">
        <div class="absolute -top-1.5 left-0 size-0 border-l-[3px] border-r-[3px] border-b-[4px] border-l-transparent border-r-transparent border-b-[--color-warning]"></div>
      </div>

      <!-- Left: vehicle selector -->
      <div class="flex items-center gap-2 px-3 h-full border-r border-[--color-line]">
        <div class="size-2 rounded-full bg-[--color-ok]"></div>
        <span class="text-xs font-semibold text-[--color-high]">{{ telemetry.vehicleName }}</span>
      </div>

      <!-- Flight mode -->
      <div class="flex items-center h-full px-3 border-r border-[--color-line]">
        <span class="px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider rounded-sm bg-[--color-ok-subtle] text-[--color-ok-text]">
          {{ telemetry.mode }}
        </span>
      </div>

      <!-- Armed state -->
      <div class="flex items-center h-full px-3 border-r border-[--color-line]">
        <span class="px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider rounded-sm bg-[--color-alarm-subtle] text-[--color-alarm-text]">
          Armed
        </span>
      </div>

      <div class="flex-1"></div>

      <!-- Right: status indicators -->
      <div class="flex items-center gap-1 h-full">
        <!-- GPS -->
        <div class="flex items-center gap-1.5 px-3 h-full border-l border-[--color-line]">
          <svg class="size-3.5 text-[--color-ok]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M12 2v4m0 12v4M2 12h4m12 0h4"/></svg>
          <span class="text-[11px] font-mono text-[--color-low] tabular-nums">{{ telemetry.gpsCount }}</span>
        </div>
        <!-- Radio link -->
        <div class="flex items-center gap-1.5 px-3 h-full border-l border-[--color-line]">
          <SignalIcon class="size-3.5 text-[--color-ok]" />
          <span class="text-[11px] font-mono text-[--color-low] tabular-nums">{{ telemetry.linkQuality }}%</span>
        </div>
        <!-- LTE -->
        <div class="flex items-center gap-1.5 px-3 h-full border-l border-[--color-line]">
          <SignalSolidIcon class="size-3.5 text-[--color-ok]" />
        </div>
        <!-- Battery -->
        <div class="flex items-center gap-1.5 px-3 h-full border-l border-[--color-line]">
          <Battery100Icon class="size-3.5 text-[--color-ok]" />
          <span class="text-[11px] font-mono text-[--color-low] tabular-nums">{{ telemetry.battery }}%</span>
        </div>
      </div>
    </div>

    <!-- ===== MAIN AREA ===== -->
    <div class="flex-1 flex min-h-0 relative">

      <!-- ===== LEFT SIDEBAR ===== -->
      <div class="w-14 bg-[--color-surface-1]/80 backdrop-blur-sm border-r border-[--color-line] flex flex-col items-center py-3 gap-2 shrink-0 z-20">
        <!-- Quick actions -->
        <button class="size-10 rounded-lg flex items-center justify-center text-[--color-low] hover:bg-[--color-surface-2] hover:text-[--color-high] transition-colors group relative" title="Takeoff">
          <ArrowUpIcon class="size-5" />
        </button>
        <button class="size-10 rounded-lg flex items-center justify-center bg-[--color-primary-subtle] text-[--color-primary] ring-1 ring-[--color-primary-border] transition-colors group relative" title="Start Mission">
          <PlayIcon class="size-5" />
        </button>
        <button class="size-10 rounded-lg flex items-center justify-center text-[--color-low] hover:bg-[--color-surface-2] hover:text-[--color-high] transition-colors group relative" title="Return to Launch">
          <HomeIcon class="size-5" />
        </button>

        <div class="w-6 h-px bg-[--color-line] my-1"></div>

        <!-- Vehicle actions -->
        <button class="size-10 rounded-lg flex items-center justify-center text-[--color-low] hover:bg-[--color-surface-2] hover:text-[--color-high] transition-colors" title="Go To">
          <CursorArrowRaysIcon class="size-5" />
        </button>
        <button class="size-10 rounded-lg flex items-center justify-center text-[--color-low] hover:bg-[--color-surface-2] hover:text-[--color-high] transition-colors" title="Orbit">
          <ArrowPathIcon class="size-5" />
        </button>

        <div class="w-6 h-px bg-[--color-line] my-1"></div>

        <!-- Map tools -->
        <button class="size-10 rounded-lg flex items-center justify-center text-[--color-low] hover:bg-[--color-surface-2] hover:text-[--color-high] transition-colors" title="Map Tools">
          <MapPinIcon class="size-5" />
        </button>
        <button class="size-10 rounded-lg flex items-center justify-center text-[--color-low] hover:bg-[--color-surface-2] hover:text-[--color-high] transition-colors" title="Settings">
          <Cog6ToothIcon class="size-5" />
        </button>

        <div class="flex-1"></div>

        <!-- Compass rose -->
        <div class="relative size-12 mb-1">
          <div class="absolute inset-0 rounded-full border border-[--color-line] bg-[--color-surface-1]/60">
            <!-- Rotating compass dial -->
            <div class="absolute inset-1 rounded-full" :style="{ transform: compassRotation }">
              <!-- Cardinal directions -->
              <span class="absolute top-0 left-1/2 -translate-x-1/2 text-[8px] font-bold text-[--color-alarm]" style="line-height: 1;">N</span>
              <span class="absolute bottom-0 left-1/2 -translate-x-1/2 text-[8px] font-medium text-[--color-gray-6]" style="line-height: 1;">S</span>
              <span class="absolute left-0 top-1/2 -translate-y-1/2 text-[8px] font-medium text-[--color-gray-6]" style="line-height: 1;">W</span>
              <span class="absolute right-0 top-1/2 -translate-y-1/2 text-[8px] font-medium text-[--color-gray-6]" style="line-height: 1;">E</span>
              <!-- Tick marks -->
              <div class="absolute top-1 left-1/2 -translate-x-1/2 w-px h-1 bg-[--color-alarm]"></div>
              <div class="absolute bottom-1 left-1/2 -translate-x-1/2 w-px h-1 bg-[--color-gray-6]"></div>
              <div class="absolute left-1 top-1/2 -translate-y-1/2 h-px w-1 bg-[--color-gray-6]"></div>
              <div class="absolute right-1 top-1/2 -translate-y-1/2 h-px w-1 bg-[--color-gray-6]"></div>
            </div>
            <!-- Fixed heading indicator (top triangle) -->
            <div class="absolute -top-0.5 left-1/2 -translate-x-1/2 size-0 border-l-[3px] border-r-[3px] border-t-[5px] border-l-transparent border-r-transparent border-t-white"></div>
          </div>
          <!-- Altitude readout below compass -->
          <div class="absolute -bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap text-[9px] font-mono text-[--color-low] tabular-nums">
            {{ telemetry.altitude }}m
          </div>
        </div>
      </div>

      <!-- ===== MAP (full background) ===== -->
      <div class="flex-1 relative overflow-hidden">
        <!-- Dark map background -->
        <div class="absolute inset-0 bg-[#0c1218]">
          <!-- Grid -->
          <svg class="absolute inset-0 w-full h-full opacity-[0.05]" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="amc-grid" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" stroke-width="0.5"/>
              </pattern>
              <pattern id="amc-grid-lg" width="300" height="300" patternUnits="userSpaceOnUse">
                <path d="M 300 0 L 0 0 0 300" fill="none" stroke="white" stroke-width="0.8"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#amc-grid)"/>
            <rect width="100%" height="100%" fill="url(#amc-grid-lg)"/>
          </svg>

          <!-- Terrain blobs -->
          <div class="absolute top-[10%] left-[15%] w-[40%] h-[35%] rounded-[40%] bg-[#1a2332] opacity-60 blur-2xl"></div>
          <div class="absolute top-[45%] left-[35%] w-[30%] h-[40%] rounded-[35%] bg-[#1a2332] opacity-40 blur-2xl"></div>
          <div class="absolute top-[20%] left-[55%] w-[25%] h-[25%] rounded-[50%] bg-[#162029] opacity-50 blur-xl"></div>

          <!-- Survey area box -->
          <div class="absolute border border-dashed border-[--color-primary]/25 bg-[--color-primary]/[0.02]" style="top: 28%; left: 30%; width: 38%; height: 35%;">
            <div class="absolute -top-5 left-1 text-[9px] font-mono text-[--color-primary]/50 uppercase tracking-widest">Survey Area A</div>
          </div>

          <!-- Flight path SVG -->
          <svg class="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <!-- Historical path (completed - green) -->
            <polyline
              points="18%,75% 22%,62% 34%,48% 42%,42%"
              fill="none"
              stroke="var(--color-ok)"
              stroke-width="2.5"
              opacity="0.6"
              vector-effect="non-scaling-stroke"
            />
            <!-- Active leg (blue, animated) -->
            <line x1="42%" y1="42%" x2="48%" y2="38%"
              stroke="var(--color-primary)"
              stroke-width="2.5"
              stroke-dasharray="8 4"
              opacity="0.8"
              vector-effect="non-scaling-stroke"
            >
              <animate attributeName="stroke-dashoffset" from="24" to="0" dur="1.5s" repeatCount="indefinite"/>
            </line>
            <!-- Planned path (gray dashed) -->
            <polyline
              points="48%,38% 62%,38% 62%,55% 48%,55% 48%,38%"
              fill="none"
              stroke="var(--color-gray-6)"
              stroke-width="1.5"
              stroke-dasharray="6 4"
              opacity="0.3"
              vector-effect="non-scaling-stroke"
            />
          </svg>

          <!-- Home position marker -->
          <div class="absolute z-10" :style="{ left: '18%', top: '75%', transform: 'translate(-50%, -50%)' }">
            <div class="size-7 rounded-full border-2 border-[--color-ok] bg-[--color-ok]/15 flex items-center justify-center">
              <HomeIcon class="size-3.5 text-[--color-ok]" />
            </div>
            <div class="absolute -bottom-4 left-1/2 -translate-x-1/2 text-[9px] font-mono text-[--color-ok]/70 whitespace-nowrap">HOME</div>
          </div>

          <!-- Completed waypoint markers -->
          <div
            v-for="wp in mapWaypoints.filter(w => w.completed && w.id !== 0)"
            :key="'c-' + wp.id"
            class="absolute z-10"
            :style="{ left: wp.x + '%', top: wp.y + '%', transform: 'translate(-50%, -50%)' }"
          >
            <div class="size-5 rounded-full border-[1.5px] border-[--color-ok]/60 bg-[--color-ok]/10 flex items-center justify-center">
              <span class="text-[9px] font-bold text-[--color-ok]/80">{{ wp.label }}</span>
            </div>
          </div>

          <!-- Active waypoint -->
          <div
            v-for="wp in mapWaypoints.filter(w => w.active)"
            :key="'a-' + wp.id"
            class="absolute z-10"
            :style="{ left: wp.x + '%', top: wp.y + '%', transform: 'translate(-50%, -50%)' }"
          >
            <div class="size-6 rounded-full border-2 border-[--color-primary] bg-[--color-primary]/15 flex items-center justify-center">
              <span class="text-[9px] font-bold text-[--color-primary]">{{ wp.label }}</span>
            </div>
            <!-- Label -->
            <div class="absolute -top-6 left-1/2 -translate-x-1/2 whitespace-nowrap px-1.5 py-0.5 bg-[--color-primary]/15 border border-[--color-primary]/30 rounded text-[9px] font-mono text-[--color-primary]">
              WP-{{ wp.label }} &middot; 80m
            </div>
            <!-- Pulsing ring -->
            <div class="absolute inset-0 rounded-full border border-[--color-primary]/40 animate-ping"></div>
          </div>

          <!-- Pending waypoint markers -->
          <div
            v-for="wp in mapWaypoints.filter(w => !w.completed && !w.active)"
            :key="'p-' + wp.id"
            class="absolute z-10"
            :style="{ left: wp.x + '%', top: wp.y + '%', transform: 'translate(-50%, -50%)' }"
          >
            <div class="size-5 rounded-full border border-[--color-gray-5]/50 bg-[--color-gray-5]/5 flex items-center justify-center">
              <span class="text-[9px] text-[--color-gray-6]">{{ wp.label }}</span>
            </div>
          </div>

          <!-- DRONE VEHICLE MARKER -->
          <div class="absolute z-20" :style="{ left: dronePos.x + '%', top: dronePos.y + '%', transform: 'translate(-50%, -50%)' }">
            <div class="relative" :style="{ transform: `rotate(${telemetry.heading}deg)` }">
              <!-- Heading line -->
              <div class="absolute bottom-full left-1/2 -translate-x-1/2 w-[2px] h-6 bg-gradient-to-t from-[--color-primary] to-transparent"></div>
              <!-- Vehicle triangle -->
              <div class="size-0 border-l-[8px] border-r-[8px] border-b-[14px] border-l-transparent border-r-transparent border-b-[--color-primary] drop-shadow-[0_0_8px_var(--color-primary)]"></div>
            </div>
          </div>
        </div>

        <!-- ===== VIDEO SWITCHER (bottom-left) ===== -->
        <div class="absolute bottom-3 left-3 z-20" :class="videoExpanded ? 'w-72' : 'w-52'">
          <div class="bg-black/90 border border-[--color-line] rounded overflow-hidden shadow-xl cursor-pointer" @click="videoExpanded = !videoExpanded">
            <div :class="videoExpanded ? 'aspect-video' : 'aspect-video'" class="relative flex items-center justify-center">
              <!-- Simulated camera feed -->
              <div class="absolute inset-0 bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] opacity-80"></div>
              <!-- Horizon line -->
              <div class="absolute inset-x-0 top-[45%] h-px bg-white/10"></div>
              <!-- Crosshair -->
              <div class="relative z-10">
                <div class="w-px h-8 bg-white/30 absolute left-1/2 -top-4 -translate-x-1/2"></div>
                <div class="h-px w-8 bg-white/30 absolute top-1/2 -left-4 -translate-y-1/2"></div>
                <div class="size-4 border border-white/30 rounded-full"></div>
              </div>
              <!-- Camera info -->
              <div class="absolute top-1.5 left-2 flex items-center gap-1">
                <VideoCameraIcon class="size-2.5 text-white/40" />
                <span class="text-[8px] font-mono text-white/40 uppercase">Sony ILX-LR1</span>
              </div>
              <!-- Gimbal angle -->
              <div class="absolute top-1.5 right-2">
                <span class="text-[8px] font-mono text-white/40">-90.0&deg;</span>
              </div>
              <!-- Recording indicator -->
              <div class="absolute bottom-1.5 left-2 flex items-center gap-1">
                <div class="size-1.5 rounded-full bg-[--color-alarm] animate-pulse"></div>
                <span class="text-[8px] font-mono text-white/40">REC 08:42</span>
              </div>
              <!-- Image count -->
              <div class="absolute bottom-1.5 right-2">
                <span class="text-[8px] font-mono text-white/40">247 imgs</span>
              </div>
              <!-- Swap icon -->
              <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-6 rounded-full bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                <svg class="size-3 text-white/70" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M15.312 11.424a5.5 5.5 0 01-9.379 2.671l-1.406 1.024A7 7 0 0017 11h-1.688zm-10.624-2.85A5.5 5.5 0 0114.067 5.9l1.406-1.024A7 7 0 003 9h1.688z" clip-rule="evenodd" /></svg>
              </div>
            </div>
          </div>
        </div>

        <!-- ===== TELEMETRY PANEL (bottom-right) ===== -->
        <div class="absolute bottom-3 right-3 z-20">
          <div class="bg-[--color-surface-1]/90 backdrop-blur-sm border border-[--color-line] rounded p-3 min-w-[260px]">
            <div class="grid grid-cols-3 gap-x-5 gap-y-2.5">
              <!-- Speed -->
              <div>
                <div class="text-[9px] uppercase tracking-wider text-[--color-gray-6] mb-0.5">Speed</div>
                <div class="flex items-baseline gap-0.5">
                  <span class="text-lg font-mono font-semibold text-[--color-high] tabular-nums leading-none">{{ telemetry.groundSpeed }}</span>
                  <span class="text-[9px] text-[--color-gray-6]">m/s</span>
                </div>
              </div>
              <!-- Altitude -->
              <div>
                <div class="text-[9px] uppercase tracking-wider text-[--color-gray-6] mb-0.5">Alt</div>
                <div class="flex items-baseline gap-0.5">
                  <span class="text-lg font-mono font-semibold text-[--color-high] tabular-nums leading-none">{{ telemetry.altitude }}</span>
                  <span class="text-[9px] text-[--color-gray-6]">m</span>
                </div>
              </div>
              <!-- Heading -->
              <div>
                <div class="text-[9px] uppercase tracking-wider text-[--color-gray-6] mb-0.5">Hdg</div>
                <div class="flex items-baseline gap-0.5">
                  <span class="text-lg font-mono font-semibold text-[--color-high] tabular-nums leading-none">{{ telemetry.heading }}&deg;</span>
                </div>
              </div>
              <!-- Dist to home -->
              <div>
                <div class="text-[9px] uppercase tracking-wider text-[--color-gray-6] mb-0.5">Dist Home</div>
                <div class="flex items-baseline gap-0.5">
                  <span class="text-sm font-mono text-[--color-low] tabular-nums leading-none">{{ (telemetry.distToHome / 1000).toFixed(1) }}</span>
                  <span class="text-[9px] text-[--color-gray-6]">km</span>
                </div>
              </div>
              <!-- Flight time -->
              <div>
                <div class="text-[9px] uppercase tracking-wider text-[--color-gray-6] mb-0.5">Flight</div>
                <div class="flex items-baseline">
                  <span class="text-sm font-mono text-[--color-low] tabular-nums leading-none">{{ telemetry.flightTime }}</span>
                </div>
              </div>
              <!-- Time remaining -->
              <div>
                <div class="text-[9px] uppercase tracking-wider text-[--color-gray-6] mb-0.5">Remain</div>
                <div class="flex items-baseline">
                  <span class="text-sm font-mono text-[--color-low] tabular-nums leading-none">{{ telemetry.timeRemaining }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- ===== CONFIRMATION BAR (bottom center) ===== -->
        <div class="absolute bottom-3 left-1/2 -translate-x-1/2 z-20">
          <div class="bg-[--color-surface-1]/90 backdrop-blur-sm border border-[--color-line] rounded px-3 py-2 flex items-center gap-3">
            <span class="text-xs text-[--color-low]">WP 3 of 7</span>
            <div class="w-px h-4 bg-[--color-line]"></div>
            <span class="text-xs font-mono text-[--color-high] tabular-nums">ETA 4:32</span>
            <div class="w-px h-4 bg-[--color-line]"></div>
            <span class="text-xs text-[--color-ok]">On Track</span>
          </div>
        </div>

        <!-- ===== MAP CONTROLS (right side of map) ===== -->
        <div class="absolute right-3 top-1/2 -translate-y-1/2 z-20 flex flex-col gap-1">
          <button class="size-8 rounded bg-[--color-surface-1]/80 border border-[--color-line] flex items-center justify-center text-[--color-low] hover:bg-[--color-surface-2] hover:text-[--color-high] transition-colors text-sm font-medium">+</button>
          <button class="size-8 rounded bg-[--color-surface-1]/80 border border-[--color-line] flex items-center justify-center text-[--color-low] hover:bg-[--color-surface-2] hover:text-[--color-high] transition-colors text-sm font-medium">&minus;</button>
        </div>

        <!-- Map scale -->
        <div class="absolute bottom-3 right-[290px] z-10 text-[9px] font-mono text-[--color-gray-6] flex items-center gap-1.5">
          <div class="w-10 h-px bg-[--color-gray-6]/50"></div>
          <span>200m</span>
        </div>
      </div>
    </div>
  </div>
</template>
