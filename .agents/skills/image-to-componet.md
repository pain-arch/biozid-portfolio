---
name: image-to-component
description: Dissects screenshots, UI mockups, or PNG designs and converts them into production-ready Next.js React components.
---

# Image-to-Component Pipeline

When provided with an image, screenshot, or UI reference:

1. **Visual Token Audit**:
   - Identify font weights, heading hierarchies, micro-copy, and badge styles.
   - Detect border radiuses (`rounded-xl`, `rounded-3xl`, `rounded-full`).
   - Extract surface colors, backdrop blurs (`backdrop-blur-md`), and subtle border strokes (`border border-white/10` or `border-neutral-200/80`).

2. **Component Structure**:
   - Isolate static markup from interactive states (hover cards, mobile drawer toggles, active tab pill sliders).
   - Provide realistic dummy data arrays matching the screenshot content so the component renders out of the box.

3. **Production Standard**:
   - Write self-contained, drop-in TSX files.
   - Use Lucide React icons for standard glyphs (arrows, external links, social icons).