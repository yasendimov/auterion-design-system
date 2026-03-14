# Visual Style — Auterion Design System

## Design Philosophy

The Auterion visual style is **functional authority** — it needs to look like it controls things that fly.

Every choice traces back to one tension: the product operates in high-stakes, real-time environments (drone operations, fleet management, mission planning), but it also needs to sell to enterprise buyers and defense procurement. The style has to feel simultaneously *operational* and *premium*.

**Dark-mode-first.** Not because it's trendy — because operators work in low-light environments (ground stations, field ops, vehicle interiors). Dark backgrounds reduce glare and eye strain during extended missions. Light mode exists for documentation and marketing contexts, but dark is the native state.

**Density over whitespace.** Aerospace interfaces pack information. The tight tracking, compact type scale, and restrained spacing all serve information density without feeling cramped. A dashboard showing 12 telemetry values needs to be scannable in a glance — generous whitespace is a luxury this domain can't afford.

**Color as signal, not decoration.** The semantic color system (alarm/warning/caution/ok) maps directly to aviation severity levels. Red means act now. Orange means act soon. Amber means be aware. Green means nominal. These aren't brand colors — they're borrowed from cockpit annunciators. The blue primary sits outside this severity spectrum so interactive elements never get confused with status indicators.

**Restraint as identity.** Three font weights. One typeface. No gradients. No shadows. No rounded corners on data. The visual identity comes from what's *removed*, not what's added. This reads as confidence — the product doesn't need to perform visually because it performs operationally.

**Monospace as truth.** When data shifts from sans-serif to monospace, it signals: this is a real value from a real sensor. It's the typographic equivalent of switching from narration to direct quote. Coordinates, telemetry, timestamps, vehicle IDs — all monospace. Everything else — labels, descriptions, navigation — stays in Inter.

The overall effect is closer to Bloomberg Terminal or Garmin avionics than to a typical SaaS product. It says: *this is a tool built by people who understand the domain, for people who work in it.*

---

## Typography

Auterion's typographic style is **Swiss precision applied to aerospace**. Every rule exists because someone might be reading it during a live mission. The aesthetic is not decorative — it is the result of eliminating ambiguity under pressure.

---

## Typographic Principles

### One Typeface, Three Weights

Inter Variable does everything. No decorative fonts, no expressive choices. The restriction *is* the style.

- **SemiBold (600)** — Hierarchy. Titles, headings, navigation, data values.
- **Medium (500)** — Structure. Labels, tabs, breadcrumbs, table headers.
- **Regular (400)** — Content. Body text, descriptions, captions, help text.

Adding a fourth weight creates visual noise. Visual noise slows decision-making. In aerospace, that matters.

### Negative Tracking Everywhere

Every size in the scale pulls letters tighter than default. This is the single most distinctive trait of the Auterion type style. It gives text a dense, engineered feel — the difference between "website" and "precision instrument."

The tighter the tracking, the larger the size: -2% at body, -3% at headings, -4% at display. Text feels machined, not typeset.

### Monospace as Semantic Signal

JetBrains Mono is not just for code. It marks anything that is a **value** — coordinates, serial numbers, callsigns, timestamps, telemetry readouts. When you see monospace, you know it's data you might need to read back, compare, or act on.

This creates a visual type system on top of the typographic one: sans-serif is language, monospace is data.

### Numbers Are First-Class Citizens

Tabular figures are mandatory. Leading zeros are mandatory. Zero-padding on headings (`045°`) and mission time (`01:23:45`) is mandatory.

In aerospace, `45` and `045` are different levels of ambiguity. The formatting rules treat numbers with the same rigor as code style — because in this domain, they are operational data.

### Time and Space Are Unambiguous

24-hour time. UTC storage. ISO 8601 in logs. Day-first display. Always-present altitude references (AGL / MSL / FL). Every rule eliminates a class of misreading.

No AM/PM. No bare altitude. No timezone guessing. No proportional figures in columns.

---

## The Aesthetic in One Line

**Technical minimalism with aerospace discipline** — tight, restrained, monospaced where it matters, and hostile to ambiguity.

---

## Influences

- **Swiss International Style** — Grid discipline, sans-serif purity, content over decoration.
- **Aviation instrumentation** — Zero-padded numerals, qualified units, monospace readouts.
- **Engineering documentation** — Precision over personality, consistency over expression.

The result is typography that looks like it belongs on a heads-up display, not a marketing site — even when it is on a marketing site.
