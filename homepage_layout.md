# Homepage Layout

The homepage is a vertical scroll of distinct content bands, separated by full-width hairline dividers. No hero image. No illustration. The page itself is the proof of the system -- every section demonstrates the design language it describes.

## Structure (top to bottom)

1. **Hero** -- Oversized brand name (80px / 96px), medium weight, tight tracking. A monospace version label sits above it (12px, 0.2em tracking, dim). One short paragraph below (18px, low contrast, max-width around 512px). No button. No CTA. The confidence is in saying less.

2. **Specs strip** -- A 6-column grid of key-value pairs (Typeface, Weights, Type Steps, Color Scales, Scale Steps, Themes). Monospace uppercase labels (12px, dim), medium-weight values below (16px). The grid uses 1px gaps with a darker parent background -- the gap creates hairline dividers between cells without explicit borders. This is the signature grid technique throughout the page.

3. **Foundation** -- Section label in monospace uppercase (12px, dim, 0.2em tracking, 48px margin below). Two-column grid of numbered links (01 Strategy, 02 Logo). Each card is a horizontal flex: a monospace number on the left (12px, dim, tabular), title and description on the right. Title is 24px, medium weight. Description is 16px, low contrast, max-width around 448px. Hover underlines the title 4px below baseline.

4. **Visual Language** -- Same label pattern. Four-column grid of taller cards (min-height 256px). Each card is a vertical flex with justify-between: number and title at top, description at bottom. Title drops to 18px. Catalog feel -- items are scannable without reading descriptions.

5. **Communication** -- Same layout as Foundation (2-column, horizontal cards). Items 07 and 08.

6. **Applied Design System** -- Three-column grid of vertical cards (min-height 208px). An em-dash replaces the number (these are not sequential). Same top/bottom split layout as Visual Language.

7. **Colophon** -- Four-column grid of key-value pairs (Primary Typeface, Primary Accent, Neutral Hue, Default Theme). Same monospace-label-over-value pattern as the specs strip. The accent value (#1475FF) is displayed in monospace.

## Spacing System

- Horizontal padding: 32px default, 64px on large screens.
- Vertical section rhythm: Hero 112/80px. Foundation 80/24px. Visual Language 56/24px. Applied 80/80px. Colophon 64/64px. Decreasing top padding creates acceleration.
- Section label to content: Always 48px.
- Card internal padding: 32px for vertical cards. 40px for horizontal cards.
- Grid gaps: 1px gap with darker surface parent creates hairline dividers.

## Visual Techniques

- Hairline grid dividers: Cards sit on page background. 1px gap exposes darker parent. Structural, not decorative.
- Numbered navigation: 01 through 08 in monospace tabular figures. Table-of-contents feel.
- Hover underline: No color change. Underline appears 4px below baseline.
- Scroll reveal: Opacity 0 to 1, 14px upward translation. Subtle.
- No images: Text and structure only. The grid is the visual.

## What Makes It Feel Like This

The homepage reads like a technical specification that happens to be navigable. Numbered sections, monospace labels, hairline grids, and no imagery create engineered precision. Generous vertical spacing prevents spreadsheet feel. Tight tracking prevents marketing-site feel.
