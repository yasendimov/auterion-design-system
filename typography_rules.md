# Typography Rules — Auterion Design System

This document outlines the typographic rules, hierarchy, and formatting conventions for Auterion interfaces. These rules ensure consistency and clarity in mission-critical aerospace environments.

## 1. Primary Typeface

**Inter Variable** is the sole typeface for all UI and marketing communications.
- **Sans-serif:** Used for all interfaces.
- **Monospace (JetBrains Mono):** Reserved for technical specifications, token names, numeric readouts, coordinates, and code.
- **OpenType Features:** Enabled via `--font-features-sans` (includes `ss01` for tabular figures).

---

## 2. Type Scale & Usage

The system uses a 13-step scale from 12px to 128px. Below are the primary roles for each size.

| Size | PX | Weight | Role | Usage | Tracking |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **7xl** | 80px | SemiBold | Hero display | Landing pages, splash screens. One per page max. | -3.2px |
| **5xl** | 48px | SemiBold | Page title (large) | Full-page headers on marketing pages. | -1.92px |
| **4xl** | 40px | SemiBold | Page title | Standard page headers across all documentation. | -1.60px |
| **2xl** | 24px | SemiBold | Section heading | Major sections, modal titles, sidebar groups. | -0.72px |
| **xl** | 20px | SemiBold | Subsection heading | Card titles, panel headers, form group labels. | -0.60px |
| **base** | 16px | Regular | Body text | Primary reading content, descriptions. | -0.32px |
| **sm** | 14px | Regular | Secondary body | Compact body, table cells, form descriptions. | -0.28px |
| **xs** | 12px | Medium | Label | Form labels, badge text, metadata. | -0.24px |
| **xs** | 12px | Regular | Caption | Timestamps, footnotes, help text. | -0.24px |
| **[11px]**| 11px | Medium | Section label | Uppercase tracking-widest overline labels. | — |

---

## 3. Weight Guidelines

Limit usage to these three weights to minimize visual noise.

- **SemiBold (600):** Page titles, section headings, card titles, button labels, navigation items, dashboard values.
- **Medium (500):** Form labels, table headers, overline section labels, badge text, tabs, breadcrumbs.
- **Regular (400):** Body text, descriptions, captions, help text, form input values, secondary information.

---

## 4. Formatting Conventions

### Number Formatting
- **Tabular Figures:** Always use tabular figures so digits align in columns (`font-variant-numeric: tabular-nums`).
- **Thousands Separator:** Use commas for numbers with 4+ digits (e.g., `1,240`).
- **Decimal Precision:**
    - Coordinates: 4–6 decimal places (`47.3769`).
    - Altitude: 0–1 decimal places (`1,240`).
    - Speed: 1 decimal place (`34.2`).
    - **Leading Zero:** Always include a leading zero for decimals < 1 (e.g., `0.42` not `.42`).

### Units & Measures
- **Spacing:** Always place a space between the number and unit (e.g., `34.2 m/s`, `23 °C`).
- **Degree Symbol:** No space before the degree symbol when used alone (e.g., `247°`).
- **Casing:** Use lowercase for SI unit symbols (`m`, `km`, `kg`) unless convention dictates otherwise (e.g., `FL` for Flight Level).

### Date & Time
- **System Logs:** Use ISO 8601 (`2026-03-11T14:32:08Z`).
- **UI Display:** `11 Mar 2026, 14:32` (Day-first, 3-letter month, 24-hour time).
- **24-Hour Time:** Always use 24-hour time to avoid AM/PM ambiguity.
- **Timezones:** Store/transmit in UTC. Display in local time with an indicator: `14:32 (local)`.

### Coordinate Formatting
- **Font:** Always use monospace.
- **Components:** Include degree symbol and hemisphere indicator (N/S/E/W).
- **Examples:**
    - `47.3769° N, 8.5417° E` (Decimal Degrees - Default)
    - `47° 22′ 36.8″ N, 8° 32′ 30.1″ E` (DMS - Aviation/Traditional)

---

## 5. Aerospace-Specific Rules

- **Heading & Bearing:** Always 3 digits, zero-padded (e.g., `045°`, `003°M`).
- **Altitude Qualifiers:** Never display altitude without a reference:
    - `AGL`: Above Ground Level.
    - `MSL`: Above Mean Sea Level.
    - `FL`: Flight Level (e.g., `FL 350`).
- **Mission Time:** Use `HH:MM:SS` format, always zero-padded (e.g., `01:23:45`).
- **Vehicle Identifiers:** Use monospace for serial numbers and callsigns (e.g., `AUT-2847`).

---

## 6. Common Mistakes (Do / Don't)

- **Do:** Use SemiBold for headings and Regular for body text.
- **Do:** Use monospace for numeric data and technical tokens.
- **Don't:** Use uppercase for long paragraphs (reduces readability).
- **Don't:** Mix too many weights without a clear hierarchy.
- **Don't:** Use proportional figures for tabular data (columns won't align).
