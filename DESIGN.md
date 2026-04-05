# Design System Specification: High-End Editorial Healthcare

## 1. Overview & Creative North Star
### Creative North Star: "The Clinical Curator"
Most healthcare platforms feel cold, clinical, or cluttered. This design system moves away from the "utility-first" template and toward a "curated-editorial" experience. We prioritize calm over density. By utilizing intentional asymmetry, expansive whitespace, and sophisticated tonal layering, we create an environment that feels authoritative yet deeply human. 

The goal is to move the user’s eye through the interface like a well-designed medical journal—important data is elevated through scale and depth, while secondary information recedes into the background architecture. We don't just show data; we curate a feeling of safety and precision.

---

## 2. Color & Surface Architecture
We define space through light and tone, not through lines. The palette is rooted in a deep, trustworthy `primary` (#004ac6) and supported by a clinical `tertiary` green (#006242) for moments of success and health.

### The "No-Line" Rule
**Explicit Instruction:** Do not use 1px solid borders to section off the UI. Containers must be defined solely by background shifts. Use `surface-container-low` sections sitting on a `surface` background to create natural boundaries.

### Surface Hierarchy & Nesting
Treat the interface as a series of physical, stacked layers.
*   **Base Level:** `surface` (#f7f9fb) — The foundation of the application.
*   **Section Level:** `surface-container-low` (#f2f4f6) — Use for large layout blocks.
*   **Component Level:** `surface-container-lowest` (#ffffff) — Use for cards and interactive modules to make them "pop" against the lower tiers.
*   **High-Emphasis Level:** `surface-container-high` (#e6e8ea) — Use for inset elements like search bars or navigation sidebars to create a sense of structural "anchoring."

### The "Glass & Gradient" Rule
To avoid a flat, "SaaS-kit" look, main CTA backgrounds and hero sections should utilize a subtle linear gradient: `primary` (#004ac6) to `primary-container` (#2563eb) at a 135-degree angle. This adds a "lithographic" soul to the digital surface. For floating navigation or modals, use `surface-container-lowest` at 80% opacity with a `20px` backdrop-blur to create a "frosted glass" effect.

---

## 3. Typography
The system uses a dual-font strategy to balance authority with accessibility.

*   **Display & Headlines (Manrope):** We use Manrope for its geometric clarity and modern warmth. Large `display-lg` (3.5rem) and `headline-md` (1.75rem) scales should be used with generous leading (1.2) to create an editorial feel.
*   **Body & UI (Inter):** Inter is the workhorse. It provides maximum legibility for patient records and scheduling data. 
*   **The Hierarchy of Trust:** Use `title-lg` (1.375rem) for section headers to provide clear "anchors." Keep `label-sm` (0.6875rem) strictly for metadata, ensuring it never competes with primary content.

---

## 4. Elevation & Depth
Depth is a functional tool, not a decoration. We achieve hierarchy through **Tonal Layering**.

### The Layering Principle
Instead of shadows, prioritize stacking. A `surface-container-lowest` card placed on a `surface-container-low` background creates a "soft lift" that feels natural and accessible.

### Ambient Shadows
When an element must float (e.g., a dropdown or a critical modal), use an **Ambient Shadow**:
*   **Shadow Color:** Use a tinted version of `on-surface` (#191c1e) at 6% opacity.
*   **Blur:** Use a high diffusion (32px to 48px) with a small Y-offset (8px). 
*   **Result:** The element should look like it is caught in soft, overhead clinic lighting, not hovering in a void.

### The "Ghost Border" Fallback
If a border is required for accessibility (e.g., high-contrast mode), use a **Ghost Border**: `outline-variant` (#c3c6d7) at **15% opacity**. Never use a 100% opaque border.

---

## 5. Components

### Buttons
*   **Primary:** Gradient fill (`primary` to `primary-container`), `xl` (1.5rem) rounded corners. Text is `on-primary`.
*   **Secondary:** `surface-container-highest` background. No border. High-contrast `on-surface` text.
*   **Tertiary/Ghost:** No background. `primary` text. Used for low-priority actions to reduce cognitive load.

### Cards & Lists
*   **Strict Rule:** No dividers. Separate list items using `3.5` (1.2rem) of vertical white space or by alternating background tones between `surface-container-lowest` and `surface-container-low`.
*   **Rounding:** Use the `xl` (1.5rem) token for all container cards to reinforce the "soft minimalism" aesthetic.

### Input Fields
*   **Base State:** `surface-container-high` background with `xl` rounding. 
*   **Focus State:** Shift background to `surface-container-lowest` and apply the "Ghost Border" at 40% opacity. This "lights up" the input field for the user.

### High-End Components for Healthcare
*   **The Availability Ripple:** Use the `tertiary` (#006242) color in a soft, pulse-animation chip to denote real-time doctor availability.
*   **The Progress Track:** For multi-step bookings, use a "thin-to-thick" progress bar using `primary-fixed` as the track and `primary` as the indicator, avoiding heavy blocks of color.

---

## 6. Do’s and Don’ts

### Do
*   **Do** use asymmetrical layouts. For example, a wide 8-column card next to a 4-column informational sidebar creates a "magazine" feel.
*   **Do** use the `24` (8.5rem) spacing token for top-level page margins to let the content breathe.
*   **Do** use `tertiary-container` for success states to keep the palette sophisticated and "organic."

### Don't
*   **Don’t** use pure black (#000000). Always use `on-surface` (#191c1e) for text to maintain a premium, soft-contrast look.
*   **Don’t** use "Drop Shadows" on cards. Stick to Tonal Layering unless the element is literally floating over other interactive content.
*   **Don’t** use standard 4px or 8px corners. Only use `xl` (1.5rem) or `lg` (1rem) to maintain the signature soft-minimalist identity.
*   **Don’t** use dividers. If you feel the need for a line, increase your spacing token by one level instead.