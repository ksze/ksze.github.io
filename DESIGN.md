---
name: Kal Sze — Demo Floor
description: Convention-hall wayfinding portfolio — four open booths of shipped software on a demo-day floor.
colors:
  concrete: "#efebe3"
  concrete-deep: "#e4ddcd"
  ink: "#1b1c18"
  ink-soft: "#43453c"
  safety-orange: "#e84e0f"
  safety-orange-deep: "#b23a06"
  teal: "#0d5f56"
  paper: "#f7f4ec"
  line: "#b9b19d"
  booth-hover-warm: "#ffefe2"
typography:
  display:
    fontFamily: "Overpass, 'Trebuchet MS', sans-serif"
    fontSize: "clamp(2.4rem, 5.5vw, 4.2rem)"
    fontWeight: 900
    lineHeight: 1.02
    letterSpacing: "-0.03em"
  headline:
    fontFamily: "Overpass, 'Trebuchet MS', sans-serif"
    fontSize: "clamp(2rem, 4.5vw, 3.2rem)"
    fontWeight: 900
    lineHeight: 1.55
    letterSpacing: "-0.025em"
  lede:
    fontFamily: "Overpass, 'Trebuchet MS', sans-serif"
    fontSize: "1.15em"
    fontWeight: 400
    lineHeight: 1.55
  body:
    fontFamily: "Overpass, 'Trebuchet MS', sans-serif"
    fontSize: "clamp(1rem, 0.96rem + 0.4vw, 1.1875rem)"
    fontWeight: 400
    lineHeight: 1.55
    fontFeature: '"tnum" 1'
  label:
    fontFamily: "Overpass, 'Trebuchet MS', sans-serif"
    fontSize: "0.72rem"
    fontWeight: 800
    letterSpacing: "0.14em"
rounded:
  sm: "3px"
  md: "4px"
  lg: "6px"
  xl: "10px"
spacing:
  xs: "0.7rem"
  sm: "1.2rem"
  md: "1.6rem"
  lg: "clamp(1.5rem, 4vw, 4rem)"
  xl: "clamp(4rem, 12vh, 8rem)"
components:
  button-primary:
    backgroundColor: "{colors.safety-orange}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: "0.7rem 1.25rem"
  button-primary-hover:
    backgroundColor: "{colors.safety-orange-deep}"
    textColor: "{colors.paper}"
  button-secondary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    rounded: "{rounded.md}"
    padding: "0.7rem 1.25rem"
  signage-nav-item:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    padding: "0.7rem 1rem"
  signage-nav-item-hover:
    backgroundColor: "{colors.safety-orange}"
    textColor: "{colors.ink}"
  bay-chip:
    textColor: "{colors.paper}"
    rounded: "{rounded.sm}"
    padding: "0.1rem 0.45rem"
  open-badge:
    backgroundColor: "{colors.safety-orange}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: "0.08rem 0.6rem"
  evidence-card:
    backgroundColor: "{colors.paper}"
    rounded: "{rounded.lg}"
---

# Design System: Kal Sze — Demo Floor

## Overview

**Creative North Star: "The Demo-Day Floor Plan"**

This page is a convention hall, not a website with cards. The visitor enters a lobby, reads a directory board beside an SVG floor plan of Hall A, sees four booths all open right now, and walks booth to booth along dashed aisle lines — each stop a deep-linked section with live proof. The world's material logic is borrowed wholesale from real exhibition wayfinding: polished-concrete ivory ground, near-black signage ink overhead, safety-orange marking live entry points, paper-white booth plates, and a highway-signage typeface (Overpass) that would look at home on an interstate exit sign. Everything reads as printed and posted — dense, purposeful, zero decoration — because signage never apologizes for itself.

Density is medium-high and typographic, the way a real directory board is: bay numbers (B-01…B-04), uppercase micro-labels with wide tracking, tabular numerals, and booth names in heavy weight do the wayfinding work that imagery would normally do. The single authored illustration — the floor plan — is linework, not art: stroked outlines, dashed aisles, a door swing, an orange YOU ARE HERE dot. The memorable moment is the one orchestrated event: on load, every OPEN badge squashes to its hinge and flips from quiet concrete to safety orange together (700ms, one shot, honored `prefers-reduced-motion`).

**Key Characteristics:**
- Convention-hall metaphor carried end-to-end: overhead signage nav → directory + floor plan lobby → numbered booths → site office (about) → hall close (footer)
- Safety orange is strictly a live-entry marker: OPEN badges, primary action buttons, hover fills, YOU ARE HERE
- One variable font (Overpass, 300–900) does everything; weight and tracking are the only hierarchy dials
- Depth via posted-paper layering and one soft shadow, not ambient elevation
- Linework drawing (SVG floor plan) as the only illustration; screenshots are evidence in framed plates
- Motion budget: one 700ms synchronized flip on load; otherwise 120–150ms state responses only

## Colors

The palette is exhibition-hall materials, not a brand gradient: warm mineral neutrals (concrete, paper, line) carry the ground, one near-black ink signs everything, and exactly two accents — safety orange (primary, the "live door" color) and deep teal (secondary, informational links) — do all the pointing.

### Primary
- **Safety Orange** (#e84e0f): The live-door marker. Every OPEN badge (SVG map badges and the HTML chips riding booth headings), the primary "Enter the live app" buttons, nav-item hover fill, booth-rect hover warm-up, the YOU ARE HERE entrance dot, text selection, and the 3px focus ring. Its presence always means "something is running behind here."
- **Safety Orange Deep** (#b23a06): The pressed/print variant. Primary-button hover ground (with paper text), and all bay-number lettering (B-01…B-04) on both the map and inline booth headings.

### Secondary
- **Hall Teal** (#0d5f56): The information color, never the action color. All "open it yourself" / source links (`.link-src`, figcaption links, hall-note links) — bold, 2px underline, offset 3px, turning ink on hover. Orange walks you in; teal tells you where the facts are.

### Neutral
- **Concrete Ivory** (#efebe3): The polished-concrete ground. Body background, and the pre-flip OPEN badge face.
- **Concrete Deep** (#e4ddcd): The troweled variant. Hall interior fill on the floor plan, aisle color against the ground, figcaption divider, scrollbar track, pre-flip HTML badge chip ground.
- **Signage Ink** (#1b1c18): The universal signage color. Overhead nav bar, hall-close footer, primary (dark) button, all text at rest, floor-plan linework (7px hall stroke, 4px booth strokes, 2px badge strokes), ink-swap target for the badge flip. Also the browser chrome: `theme-color` and scrollbar thumb.
- **Ink Soft** (#43453c): Receded ink. Secondary text (captions, hall notes, booth subtitles), fixture outlines and micro-labels on the map, pre-flip badge lettering.
- **Paper** (#f7f4ec): Posted-paper surfaces. Booth plates and the INFO fixture on the map, evidence-figure background, nav/footer text color, focus-visible ring on paper, text on ink surfaces.
- **Line** (#b9b19d): The pencil-line neutral. Dashed aisle lines, dashed door swing, and the 3px dashed `border-top` that separates booths like taped floor lanes.

### Named Rules
**The Orange Door Rule.** Safety orange appears only where a real, clickable, running thing lives — badges, live-demo buttons, hover fills, you-are-here, focus rings, selection. If a surface can't be walked into, it doesn't get orange.

**The Two-Hands Rule.** Orange acts, teal informs. Teal never marks an entry to a live app, and orange never marks a reference link.

**The No-New-Hue Rule.** The only non-palette colors allowed are the flip-midpoint swaps of existing tokens and the 6% orange tint (rgba(232, 78, 15, 0.06)) used to tint a booth section when its map plate is hovered. No third accent, ever.

## Typography

**Display Font:** Overpass (variable, 300–900, self-hosted WOFF2 with latin + latin-ext, `font-display: swap`), fallback Trebuchet MS, sans-serif
**Body Font:** Same face — Overpass is both display and body
**Label/Mono Font:** None; labels are Overpass at heavy weights with wide tracking. `kbd` explicitly inherits the body face.

**Character:** Highway-signage heritage: heavy extended letterforms with tight negative tracking at display sizes (−0.03em) flipping to wide positive tracking (0.12–0.22em) on uppercase micro-labels. Tabular numerals are forced globally (`"tnum" 1`) because bay numbers and booth counts must align like a printed board.

### Hierarchy
- **Display** (900, clamp(2.4rem, 5.5vw, 4.2rem), 1.02): The directory-board headline only — "Four booths. All open today."
- **Headline** (900, clamp(2rem, 4.5vw, 3.2rem), −0.025em): Booth names (h2) and the office heading; each carries its inline bay chip and OPEN badge on the same line.
- **Lede** (400, 1.15em, capped at 34rem): The lobby pitch. The booth variant (`.pitch`, 1.12em, capped at 38rem) leads every section.
- **Body** (400, clamp(1rem, 0.96rem + 0.4vw, 1.1875rem), 1.55): All running text. Emphasis inside a pitch is weight-800 with no italics.
- **Label** (800–900, 0.72–0.78rem, 0.12–0.22em tracking, uppercase): Bay chips (B-01), OPEN badges, aisle labels, fixture tags. Map-drawn labels run larger in SVG units (booth no. 21px/900, booth name 27px/800, sub 16px/500).

### Named Rules
**The One Signage Face Rule.** Overpass carries every glyph on the page. Hierarchy is made with weight (400 → 700 → 800 → 900) and tracking, never with a second family.

**The Chip-Rides-The-Line Rule.** Bay numbers ride inline with the heading they label (bordered chip, raised 0.18em) — never as an eyebrow label floating above it.

## Layout

The page is one vertical hall. A sticky overhead signage strip (ink bar, full-width) sits at the top: hall ID on the left, scrollable booth signs with bay chips, separated by 1px paper rules at 14–25% opacity. Below it, the lobby is a two-column grid — directory text (minmax(320px, 5fr)) beside the floor plan (7fr), gap clamp(1.5rem, 4vw, 4rem), max-width 1180px, sized to fill the first viewport (min-height calc(100vh − 3.2rem)).

Booths run as centered single-column sections, max-width 980px, with generous vertical rhythm: padding clamp(4rem, 12vh, 8rem) top/bottom, separated by a 3px dashed line rule. Section content nests a consistent internal stack: heading line (name + bay + OPEN) → pitch (max 38rem) → evidence plate → proof line → action row (flex, 1.2rem gap).

Responsive: at ≤900px the lobby collapses to one column (plan under directory, forced min-height off, headline `<br>` suppressed). At ≤640px the overhead nav stacks (hall ID above the signs), signs become a nowrap horizontal scroller with a 64px ink fade-out gradient on the right edge, and booth padding tightens (2.25rem/3.5rem). Spacing steps: 0.7rem (nav), 1.2rem (page gutter clamp), 1.6rem (content block rhythm), clamp(1.5rem, 4vw, 4rem) (lobby gap), clamp(4rem, 12vh, 8rem) (booth cadence).

## Elevation & Depth

Depth is physical, not atmospheric: surfaces are layers of posted material on a flat concrete floor. There is exactly one shadow value in the system — `0 2px 10px rgba(27, 28, 24, 0.14)` (as `--shadow`) — and it is structural: it marks things mounted overhead (the sticky signage bar) or hung on a wall (the evidence plate), plus primary buttons as a hover lift (translateY(−2px) + shadow). Everything else is flat, separated by linework, dashed rules, and tonal steps between concrete, concrete-deep, and paper. Focus is always the 3px safety-orange ring at 3px offset, radius 2px.

### Shadow Vocabulary
- **Fixture shadow** (`box-shadow: 0 2px 10px rgba(27, 28, 24, 0.14)`): Sticky overhead nav at rest, evidence figures at rest, button hover lift. The only shadow value; never scaled, never layered.

### Named Rules
**The Mounted-Thing Rule.** A shadow says "this object is physically mounted," not "this card is interactive." Flat ground things (booth sections, the plan) never cast shadows; things at rest with shadows are fixtures.

## Shapes

The form language is rounded-rectangle signage with stroked outlines. A four-step radius scale: 3px for small stamped chips (bay chips in the nav, `kbd`), 4px for badges and buttons (OPEN badges, hall ID elements, bay chips on headings, all `.btn`), 6px for plates (booth rectangles on the plan, evidence figures), 10px for the hall outline itself (the plan's outer wall). Borders are heavy and printed: 1.5px on small chips and `kbd`, 2px on badges and buttons, 3px on the evidence plate, 4px on map booth strokes, 7px on the hall wall. Dashed strokes (10 8 aisles, 5 5 door swing, 3px dashed section dividers, 1.5px chip borders in outline form) signal circulation and boundaries, mirroring taped lanes on a real floor. Nothing is circular except the YOU ARE HERE dot and the door-swing arc — the two literal floor markings.

## Components

### Buttons
- **Shape:** Near-square signage plate (4px radius), 2px solid ink border, weight-800 label, inline icon at 1.05em.
- **Primary (`.btn-live`):** Safety-orange ground, ink text, padding 0.7rem 1.25rem — "Enter the live app." Hover: ground deepens to #b23a06, text flips to paper, whole button lifts translateY(−2px) with the fixture shadow; active returns to rest.
- **Secondary (`.btn-walk`):** Ink ground, paper text, same geometry — the lobby's "Start at B-01."
- **Focus:** 3px safety-orange outline, 3px offset (global `:focus-visible`).

### OPEN Badge
The signature mark, in two renderings: an SVG group on the map (64×22 rect, 2px ink stroke, 14px/900/0.16em lettering) and an HTML chip (`.openbadge.flip`, 2px ink border, 4px radius, 0.78rem/900 lettering) riding each booth heading. At rest after the flip: orange ground, ink text. Pre-flip: concrete/concrete-deep ground, ink-soft text. On load all badges squash to scaleX(0.04) and back (700ms, cubic-bezier(0.2, 0.7, 0.3, 1)) while ground and lettering swap at the 46–54% midpoint — one synchronized event, triggered by `body.floor-open` after fonts load (1.5s failsafe), fully disabled under `prefers-reduced-motion`. Never animated again after the first flip.

### Floor Plan (signature)
A 640×540 authored SVG: hall wall (concrete-deep fill, 7px ink stroke, 10px radius), central aisle over the ground, dashed aisle lines, four 216×168 booth plates (paper fill, 4px ink stroke, 6px radius) each carrying bay number (orange-deep), name, sub-line, and OPEN badge. Booth plates warm to #ffefe2 on hover/focus; hovering or focusing a plate also tints its target section with a 6% orange wash. INFO fixture, entrance door gap with dashed swing arc, orange YOU ARE HERE dot (ink stroke). Every booth is an `<a>` with a full text `aria-label`.

### Evidence Plate
The screenshot frame: paper ground, 3px solid ink border, 6px radius, fixture shadow, image full-bleed inside, figcaption (0.85em, ink-soft, 2px concrete-deep top border) carrying the capture date and a teal "open it yourself" link.

### Signage Nav (overhead)
Sticky ink bar. Hall ID: 900 weight, 0.22em tracking, paper on ink, 1px paper-rule right border. Signs: weight-600 paper links, bay chip inside (0.72rem/800, 0.14em tracking, 1.5px currentColor border, 3px radius). Hover: the whole sign turns safety orange with ink text — a lit exit sign. At ≤640px it becomes a horizontal scroller with a right-edge ink fade.

### Source Link
Teal, weight-700, 2px-thick underline offset 3px; turns ink on hover. The only link style for repos and external proof.

### kbd
Inline key cap: 1.5px currentColor border, 3px radius, 0 0.3em padding, 0.85em, inheriting the body face — used for the j/k procession hint.

## Do's and Don'ts

### Do:
- **Do** reserve safety orange for live entry points: OPEN badges, primary buttons, hover fills, focus rings, YOU ARE HERE, selection. (The Orange Door Rule)
- **Do** use teal for every informational/source link — weight-700, 2px underline, 3px offset. (The Two-Hands Rule)
- **Do** draw all wayfinding numbers with tabular numerals and 0.12–0.22em tracking on uppercase labels.
- **Do** keep the shadow vocabulary at exactly one value (`0 2px 10px rgba(27, 28, 24, 0.14)`) on mounted fixtures only.
- **Do** honor `prefers-reduced-motion`: the badge flip, plan badge animations, and smooth scrolling all switch off.
- **Do** carry bay numbers inline with their headings as bordered chips, never as eyebrow labels.

### Don't:
- **Don't** introduce a second typeface — Overpass at different weights/tracking covers display through labels. (The One Signage Face Rule)
- **Don't** add a third accent hue, gradients, or glass/blur effects; the system's material set is concrete, paper, ink, orange, teal.
- **Don't** loop or re-trigger the OPEN flip; it is a single 700ms load event, synchronized across all badges.
- **Don't** shadow flat ground surfaces or use elevation to mean "hoverable" — lift only buttons, and only on hover.
- **Don't** restyle the floor plan as an illustration (fills, shading, decoration): it stays linework with token strokes.
- **Don't** place a live-app link in teal or a reference link in orange.
