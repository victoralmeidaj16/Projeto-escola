```markdown
# Design System Strategy: The Joyful Archivist

## 1. Overview & Creative North Star
This design system moves away from the "standard" educational template of flat grids and primary colors. Instead, it embraces **"The Joyful Archivist"**—a creative North Star that blends the structure of high-end editorial layouts with the tactile, vibrant energy of a modern learning space. 

The goal is to move beyond "cute" into "premium intentionality." We achieve this through a signature visual identity characterized by **intentional asymmetry**, **oversized rounded geometry**, and **layered tonal depth**. By utilizing high-contrast typography scales and overlapping elements, we create an experience that feels curated and authoritative yet deeply welcoming.

---

## 2. Colors & Surface Logic

The palette is anchored in high-energy berries and sophisticated neutrals. We utilize these not just as accents, but as structural tools to define the environment.

### The "No-Line" Rule
To maintain a high-end feel, **1px solid borders for sectioning are strictly prohibited.** Boundaries must be defined solely through background color shifts. For example, a `surface-container-low` section sitting on a `surface` background creates a clean, architectural break without the visual "noise" of a line.

### Surface Hierarchy & Nesting
Treat the UI as a series of physical layers. Use the surface-container tiers to create nested depth:
*   **Surface (Base):** The foundation of the page.
*   **Surface-Container-Low:** For large, secondary content blocks.
*   **Surface-Container-Highest:** For high-priority interactive cards or "hero" containers.
By stacking these (e.g., a `surface-container-lowest` card on a `surface-container-low` section), we create a soft, natural lift that mimics fine stationery.

### The "Glass & Gradient" Rule
Flat colors can feel static. To inject "visual soul," use:
*   **Signature Gradients:** Transitioning from `primary` (#b10048) to `primary_container` (#df005d) for hero backgrounds or CTAs.
*   **Glassmorphism:** For floating navigation or modal overlays, use semi-transparent `surface` colors with a 12px–20px backdrop-blur to allow underlying colors to bleed through, softening the interface.

---

## 3. Typography: Editorial Authority
The system pairs **Plus Jakarta Sans** for expressive impact with **Lexend** for rhythmic legibility.

*   **Display & Headlines (Plus Jakarta Sans):** These are the "voice" of the system. Large, bold, and confident. Use `display-lg` (3.5rem) with tight letter-spacing for editorial impact in hero sections.
*   **Body & Titles (Lexend):** Lexend was designed specifically to improve reading fluency. It provides a friendly, open-source feel that balances the sharpness of the headlines.
*   **Hierarchy as Identity:** By using a massive scale shift between `display-lg` and `body-md`, we create a "poster-like" aesthetic that feels custom-designed rather than generated from a kit.

---

## 4. Elevation & Depth: Tonal Layering
Traditional drop shadows are often a crutch for poor layout. This system prioritizes **Tonal Layering**.

*   **The Layering Principle:** Place lighter elements on darker surfaces (and vice-versa) to create a sense of height. A `surface-container-lowest` card on a `surface-container-low` section creates a "pillowy" effect.
*   **Ambient Shadows:** If a floating effect is required (e.g., for a Modal), use an extra-diffused shadow: `blur: 40px`, `opacity: 6%`, tinted with the `on_surface` color. Never use pure black shadows.
*   **The "Ghost Border" Fallback:** If containment is required for accessibility, use a "Ghost Border": the `outline_variant` token at **15% opacity**. This provides a hint of structure without interrupting the fluid aesthetic.

---

## 5. Components

### Buttons
*   **Primary:** A gradient from `primary` to `primary_container`. Shape: `full` (pill-shaped). High-impact padding (16px top/bottom, 32px sides).
*   **Secondary:** `surface-container-highest` background with `primary` text. No border.
*   **Interaction:** On hover, apply a subtle scale-up (1.02) rather than a simple color change to maintain the "tactile" feel.

### Chips & Tags
*   **Style:** Use `tertiary_fixed` for a soft, playful background. 
*   **Geometry:** Always `full` roundedness. These should look like smooth river stones.

### Input Fields
*   **Style:** `surface-container-lowest` background with a `md` (1.5rem) corner radius. 
*   **Focus State:** Instead of a heavy border, use a 2px "Ghost Border" of `primary` at 30% opacity and a subtle background shift to `surface_bright`.

### Cards & Lists
*   **Rule:** Divider lines are forbidden.
*   **Separation:** Use vertical white space from the spacing scale (minimum 32px between list items) or alternating background tones (`surface-container-low` vs `surface-container-lowest`).

### Floating Action Elements (Signature Component)
*   **The "Playful Orbit":** Use overlapping circles and `xl` (3rem) rounded containers that break the grid. For example, a "Featured Resource" card might have a circular image that hangs 20px off the top-left edge of the container.

---

## 6. Do’s and Don’ts

### Do
*   **DO** use whitespace as a structural element. If a layout feels cluttered, increase the gap between sections to 80px or 120px.
*   **DO** use the `xl` (3rem) corner radius for main content containers to reinforce the "friendly/educational" vibe.
*   **DO** lean into "the tilt." Occasionally rotate decorative elements (like background shapes) by 2-3 degrees to create a sense of movement.

### Don’t
*   **DON'T** use 100% black (#000000). Always use `on_surface` (#1b1c1c) for text to keep the contrast high-end rather than jarring.
*   **DON'T** use standard 4px or 8px "web-default" corner radii. It breaks the signature "soft-premium" look of the system.
*   **DON'T** use shadows to define cards. Use color-blocking and tonal shifts instead. Shadows are for "floating" states only.

---
*Note: This system is designed to be a living document. Every interaction should feel like a deliberate choice, prioritizing the user's emotional connection to the educational content.*```