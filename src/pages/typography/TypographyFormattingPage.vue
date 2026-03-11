<script setup lang="ts">
const numberExamples = [
  { label: 'Altitude', good: '1,240 m', bad: '1240m', note: 'Thousands separator, space before unit' },
  { label: 'Speed', good: '34.2 m/s', bad: '34.2m/s', note: 'Space between number and unit' },
  { label: 'Battery', good: '78 %', bad: '78%', note: 'Space before percent symbol' },
  { label: 'Distance', good: '12.45 km', bad: '12.45KM', note: 'Lowercase SI units' },
  { label: 'Large count', good: '33,000', bad: '33000', note: 'Thousands separator for readability' },
  { label: 'Precision', good: '0.0042', bad: '.0042', note: 'Leading zero for decimals < 1' },
]

const dateFormats = [
  { context: 'Data / logs', format: '2026-03-11T14:32:08Z', standard: 'ISO 8601', note: 'Machine-readable, sortable, unambiguous' },
  { context: 'UI display (full)', format: '11 Mar 2026, 14:32', standard: 'Human-readable', note: 'Day-first, 3-letter month, 24-hour time' },
  { context: 'UI display (short)', format: '11 Mar, 14:32', standard: 'Human-readable', note: 'Drop year when context makes it obvious' },
  { context: 'Relative (recent)', format: '2 min ago', standard: 'Relative', note: 'For events within the last hour' },
  { context: 'Relative (older)', format: '3 hours ago', standard: 'Relative', note: 'For events within the same day' },
  { context: 'Duration', format: '01:23:45', standard: 'HH:MM:SS', note: 'Always zero-pad, use colons' },
]

const coordinateFormats = [
  { label: 'Decimal degrees', example: '47.3769\u00b0 N, 8.5417\u00b0 E', usage: 'Default for UI display and data exchange' },
  { label: 'DMS', example: '47\u00b0 22\u2032 36.8\u2033 N, 8\u00b0 32\u2032 30.1\u2033 E', usage: 'Aviation charts, traditional navigation' },
  { label: 'UTM', example: '32T 465880 5247440', usage: 'Military grid reference, ground operations' },
]

const aerospaceUnits = [
  { quantity: 'Altitude (AGL)', unit: 'm', display: '120 m AGL', note: 'Meters above ground level' },
  { quantity: 'Altitude (MSL)', unit: 'm', display: '1,240 m MSL', note: 'Meters above mean sea level' },
  { quantity: 'Altitude (flight level)', unit: 'FL', display: 'FL 350', note: 'Flight level in hundreds of feet' },
  { quantity: 'Ground speed', unit: 'm/s', display: '34.2 m/s', note: 'SI primary, knots as secondary' },
  { quantity: 'Airspeed', unit: 'kn', display: '65 kn', note: 'Knots for aviation context' },
  { quantity: 'Heading', unit: '\u00b0', display: '247\u00b0', note: 'Degrees true, no space before symbol' },
  { quantity: 'Temperature', unit: '\u00b0C', display: '23 \u00b0C', note: 'Space before degree-Celsius' },
  { quantity: 'Weight', unit: 'kg', display: '2.4 kg', note: 'SI kilograms' },
  { quantity: 'Distance', unit: 'km', display: '12.45 km', note: 'Kilometers for planning' },
  { quantity: 'Wind speed', unit: 'm/s', display: '8.3 m/s', note: 'SI primary' },
]
</script>

<template>
  <div>
    <header class="px-8 lg:px-16 pt-16 pb-12">
      <p class="text-[11px] text-zinc-400 dark:text-zinc-500 uppercase tracking-widest font-medium mb-3">Typography</p>
      <h1 class="text-5xl font-medium text-zinc-900 dark:text-white">Formatting</h1>
      <p class="text-base text-zinc-500 dark:text-zinc-400 mt-4 max-w-xl leading-relaxed">
        Number formatting, date/time patterns, units, and coordinate conventions for aerospace interfaces. Consistency in data display prevents misreads at critical moments.
      </p>
    </header>

    <div class="border-t border-zinc-200 dark:border-zinc-800"></div>

    <!-- Number Formatting -->
    <section class="px-8 lg:px-16 py-16">
      <h2 class="text-xl font-semibold text-zinc-900 dark:text-white mb-4">Number Formatting</h2>
      <p class="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed max-w-2xl mb-8">
        Always use <strong class="text-zinc-900 dark:text-white font-medium">tabular figures</strong> (enabled by default via OpenType <code class="text-xs font-mono bg-zinc-100 dark:bg-zinc-800 px-1 py-0.5 rounded">ss01</code>) so digits align in columns. Use monospace for numeric readouts in dashboards.
      </p>

      <div class="overflow-x-auto">
        <table class="w-full text-sm">
          <thead>
            <tr class="border-b border-zinc-200 dark:border-zinc-800">
              <th class="text-left py-2 pr-4 text-xs font-medium text-zinc-400 dark:text-zinc-500 uppercase tracking-widest">Value</th>
              <th class="text-left py-2 pr-4 text-xs font-medium text-zinc-400 dark:text-zinc-500 uppercase tracking-widest w-36">Correct</th>
              <th class="text-left py-2 pr-4 text-xs font-medium text-zinc-400 dark:text-zinc-500 uppercase tracking-widest w-36">Incorrect</th>
              <th class="text-left py-2 text-xs font-medium text-zinc-400 dark:text-zinc-500 uppercase tracking-widest">Rule</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in numberExamples" :key="item.label" class="border-b border-zinc-100 dark:border-zinc-800/50">
              <td class="py-2.5 pr-4 text-xs text-zinc-500 dark:text-zinc-400">{{ item.label }}</td>
              <td class="py-2.5 pr-4 font-mono text-xs font-medium" :style="{ color: 'var(--color-ok-text)' }">{{ item.good }}</td>
              <td class="py-2.5 pr-4 font-mono text-xs line-through text-zinc-400 dark:text-zinc-500">{{ item.bad }}</td>
              <td class="py-2.5 text-xs text-zinc-500 dark:text-zinc-400">{{ item.note }}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="mt-8 grid gap-4 sm:grid-cols-2">
        <div class="p-6 border border-zinc-200 dark:border-zinc-800">
          <h3 class="text-sm font-semibold text-zinc-900 dark:text-white mb-2">Thousands Separator</h3>
          <p class="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
            Use commas for numbers with 4+ digits: <span class="font-mono text-zinc-900 dark:text-white">1,240</span> not <span class="font-mono text-zinc-400 dark:text-zinc-500 line-through">1240</span>. For numbers under 10,000 in tight UI contexts (badge counts, table cells), the comma may be omitted if space is constrained.
          </p>
        </div>
        <div class="p-6 border border-zinc-200 dark:border-zinc-800">
          <h3 class="text-sm font-semibold text-zinc-900 dark:text-white mb-2">Decimal Precision</h3>
          <p class="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
            Match precision to the sensor or context. Coordinates need 4-6 decimal places. Altitude needs 0-1. Speed needs 1. Always use a leading zero: <span class="font-mono text-zinc-900 dark:text-white">0.42</span> not <span class="font-mono text-zinc-400 dark:text-zinc-500 line-through">.42</span>.
          </p>
        </div>
      </div>
    </section>

    <div class="border-t border-zinc-200 dark:border-zinc-800"></div>

    <!-- Date & Time -->
    <section class="px-8 lg:px-16 py-16">
      <h2 class="text-xl font-semibold text-zinc-900 dark:text-white mb-4">Date &amp; Time</h2>
      <p class="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed max-w-2xl mb-8">
        Use ISO 8601 for data interchange and logs. Use human-readable formats for UI display. Always use 24-hour time &mdash; AM/PM is ambiguous in multinational operations.
      </p>

      <div class="overflow-x-auto">
        <table class="w-full text-sm">
          <thead>
            <tr class="border-b border-zinc-200 dark:border-zinc-800">
              <th class="text-left py-2 pr-4 text-xs font-medium text-zinc-400 dark:text-zinc-500 uppercase tracking-widest">Context</th>
              <th class="text-left py-2 pr-4 text-xs font-medium text-zinc-400 dark:text-zinc-500 uppercase tracking-widest">Format</th>
              <th class="text-left py-2 pr-4 text-xs font-medium text-zinc-400 dark:text-zinc-500 uppercase tracking-widest">Standard</th>
              <th class="text-left py-2 text-xs font-medium text-zinc-400 dark:text-zinc-500 uppercase tracking-widest">Note</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in dateFormats" :key="item.context" class="border-b border-zinc-100 dark:border-zinc-800/50">
              <td class="py-2.5 pr-4 text-xs text-zinc-900 dark:text-white font-medium">{{ item.context }}</td>
              <td class="py-2.5 pr-4 font-mono text-xs text-zinc-900 dark:text-white">{{ item.format }}</td>
              <td class="py-2.5 pr-4 text-xs text-zinc-500 dark:text-zinc-400">{{ item.standard }}</td>
              <td class="py-2.5 text-xs text-zinc-500 dark:text-zinc-400">{{ item.note }}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="mt-8 p-6 border border-zinc-200 dark:border-zinc-800">
        <h3 class="text-sm font-semibold text-zinc-900 dark:text-white mb-2">Timezone Handling</h3>
        <p class="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed max-w-2xl">
          Store and transmit all timestamps in UTC. Display in the operator's local timezone with an explicit indicator: <span class="font-mono text-zinc-900 dark:text-white">14:32 UTC</span> or <span class="font-mono text-zinc-900 dark:text-white">14:32 (local)</span>. In multi-timezone operations, always show UTC alongside local time.
        </p>
      </div>
    </section>

    <div class="border-t border-zinc-200 dark:border-zinc-800"></div>

    <!-- Units -->
    <section class="px-8 lg:px-16 py-16">
      <h2 class="text-xl font-semibold text-zinc-900 dark:text-white mb-4">Units &amp; Measures</h2>
      <p class="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed max-w-2xl mb-8">
        Always place a space between the number and unit. Use SI units as the primary system. Lowercase for unit symbols (m, km, kg) except where convention dictates otherwise (FL for flight level).
      </p>

      <div class="overflow-x-auto">
        <table class="w-full text-sm">
          <thead>
            <tr class="border-b border-zinc-200 dark:border-zinc-800">
              <th class="text-left py-2 pr-4 text-xs font-medium text-zinc-400 dark:text-zinc-500 uppercase tracking-widest">Quantity</th>
              <th class="text-left py-2 pr-4 text-xs font-medium text-zinc-400 dark:text-zinc-500 uppercase tracking-widest w-16">Unit</th>
              <th class="text-left py-2 pr-4 text-xs font-medium text-zinc-400 dark:text-zinc-500 uppercase tracking-widest">Display</th>
              <th class="text-left py-2 text-xs font-medium text-zinc-400 dark:text-zinc-500 uppercase tracking-widest">Note</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in aerospaceUnits" :key="item.quantity" class="border-b border-zinc-100 dark:border-zinc-800/50">
              <td class="py-2.5 pr-4 text-xs text-zinc-900 dark:text-white font-medium">{{ item.quantity }}</td>
              <td class="py-2.5 pr-4 font-mono text-xs text-zinc-500 dark:text-zinc-400">{{ item.unit }}</td>
              <td class="py-2.5 pr-4 font-mono text-xs text-zinc-900 dark:text-white">{{ item.display }}</td>
              <td class="py-2.5 text-xs text-zinc-500 dark:text-zinc-400">{{ item.note }}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="mt-8 grid gap-4 sm:grid-cols-2">
        <div class="p-6 border-2 border-green-500/30">
          <p class="text-[11px] uppercase tracking-widest font-medium mb-3" :style="{ color: 'var(--color-ok)' }">Do</p>
          <div class="space-y-2 font-mono text-sm text-zinc-900 dark:text-white">
            <p>1,240 m AGL</p>
            <p>34.2 m/s</p>
            <p>23 &deg;C</p>
            <p>247&deg;</p>
          </div>
        </div>
        <div class="p-6 border-2 border-red-500/30">
          <p class="text-[11px] uppercase tracking-widest font-medium mb-3" :style="{ color: 'var(--color-alarm)' }">Don't</p>
          <div class="space-y-2 font-mono text-sm text-zinc-400 dark:text-zinc-500 line-through">
            <p>1240m AGL</p>
            <p>34.2M/S</p>
            <p>23C</p>
            <p>247 degrees</p>
          </div>
        </div>
      </div>
    </section>

    <div class="border-t border-zinc-200 dark:border-zinc-800"></div>

    <!-- Coordinates -->
    <section class="px-8 lg:px-16 py-16">
      <h2 class="text-xl font-semibold text-zinc-900 dark:text-white mb-4">Coordinate Formatting</h2>
      <p class="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed max-w-2xl mb-8">
        Coordinates are critical flight data. Always use monospace, display with the degree symbol (<code class="text-xs font-mono bg-zinc-100 dark:bg-zinc-800 px-1 py-0.5 rounded">&deg;</code>), and include the hemisphere indicator (N/S/E/W).
      </p>

      <div class="space-y-2">
        <div
          v-for="item in coordinateFormats"
          :key="item.label"
          class="p-4 border border-zinc-200 dark:border-zinc-800 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6"
        >
          <div class="shrink-0 w-36">
            <span class="text-sm font-medium text-zinc-900 dark:text-white">{{ item.label }}</span>
          </div>
          <div class="shrink-0">
            <span class="font-mono text-sm text-zinc-900 dark:text-white">{{ item.example }}</span>
          </div>
          <p class="text-xs text-zinc-500 dark:text-zinc-400 flex-1">{{ item.usage }}</p>
        </div>
      </div>

      <div class="mt-8 p-6 border border-zinc-200 dark:border-zinc-800">
        <h3 class="text-sm font-semibold text-zinc-900 dark:text-white mb-2">Precision Guidelines</h3>
        <p class="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed max-w-2xl mb-4">
          The number of decimal places in coordinates determines position accuracy. Match precision to the operational context.
        </p>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <div class="p-3 rounded bg-zinc-50 dark:bg-zinc-900">
            <p class="font-mono text-xs text-zinc-900 dark:text-white">47.38&deg;</p>
            <p class="text-[10px] text-zinc-400 dark:text-zinc-500 mt-1">~1.1 km</p>
          </div>
          <div class="p-3 rounded bg-zinc-50 dark:bg-zinc-900">
            <p class="font-mono text-xs text-zinc-900 dark:text-white">47.377&deg;</p>
            <p class="text-[10px] text-zinc-400 dark:text-zinc-500 mt-1">~110 m</p>
          </div>
          <div class="p-3 rounded bg-zinc-50 dark:bg-zinc-900">
            <p class="font-mono text-xs text-zinc-900 dark:text-white">47.3769&deg;</p>
            <p class="text-[10px] text-zinc-400 dark:text-zinc-500 mt-1">~11 m</p>
          </div>
          <div class="p-3 rounded bg-zinc-50 dark:bg-zinc-900">
            <p class="font-mono text-xs text-zinc-900 dark:text-white">47.37694&deg;</p>
            <p class="text-[10px] text-zinc-400 dark:text-zinc-500 mt-1">~1.1 m</p>
          </div>
        </div>
      </div>
    </section>

    <div class="border-t border-zinc-200 dark:border-zinc-800"></div>

    <!-- Aerospace-Specific Conventions -->
    <section class="px-8 lg:px-16 py-16">
      <h2 class="text-xl font-semibold text-zinc-900 dark:text-white mb-4">Aerospace Conventions</h2>
      <p class="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed max-w-2xl mb-8">
        Domain-specific formatting rules that differ from general-purpose software conventions.
      </p>

      <div class="grid gap-4 sm:grid-cols-2">
        <div class="p-6 border border-zinc-200 dark:border-zinc-800">
          <h3 class="text-sm font-semibold text-zinc-900 dark:text-white mb-2">Heading &amp; Bearing</h3>
          <p class="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed mb-3">
            Always 3 digits, zero-padded. No space before the degree symbol. Use &ldquo;T&rdquo; suffix for true north, &ldquo;M&rdquo; for magnetic when disambiguation is needed.
          </p>
          <div class="flex gap-3 font-mono text-sm">
            <span class="text-zinc-900 dark:text-white">045&deg;</span>
            <span class="text-zinc-900 dark:text-white">247&deg;T</span>
            <span class="text-zinc-900 dark:text-white">003&deg;M</span>
          </div>
        </div>

        <div class="p-6 border border-zinc-200 dark:border-zinc-800">
          <h3 class="text-sm font-semibold text-zinc-900 dark:text-white mb-2">Altitude Qualifiers</h3>
          <p class="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed mb-3">
            Always specify the reference: AGL (above ground level), MSL (above mean sea level), or FL (flight level). Never display altitude without a qualifier.
          </p>
          <div class="flex gap-3 font-mono text-sm">
            <span class="text-zinc-900 dark:text-white">120 m AGL</span>
            <span class="text-zinc-900 dark:text-white">1,240 m MSL</span>
          </div>
        </div>

        <div class="p-6 border border-zinc-200 dark:border-zinc-800">
          <h3 class="text-sm font-semibold text-zinc-900 dark:text-white mb-2">Vehicle Identifiers</h3>
          <p class="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed mb-3">
            Use monospace for vehicle IDs, serial numbers, and callsigns. Keep consistent casing as defined by the source system.
          </p>
          <div class="flex gap-3 font-mono text-sm">
            <span class="text-zinc-900 dark:text-white">AUT-2847</span>
            <span class="text-zinc-900 dark:text-white">SKY-003</span>
          </div>
        </div>

        <div class="p-6 border border-zinc-200 dark:border-zinc-800">
          <h3 class="text-sm font-semibold text-zinc-900 dark:text-white mb-2">Mission Time</h3>
          <p class="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed mb-3">
            Elapsed mission time uses <span class="font-mono">HH:MM:SS</span> format, always zero-padded. For sub-second precision, append milliseconds with a period separator.
          </p>
          <div class="flex gap-3 font-mono text-sm">
            <span class="text-zinc-900 dark:text-white">01:23:45</span>
            <span class="text-zinc-900 dark:text-white">00:02:34.127</span>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
