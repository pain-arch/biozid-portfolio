---
name: viewport-scaling
description: Guarantees responsive scaling from mobile (375px) through 2K/Ultra-Wide (2560px) displays without layout breakage or overstretching.
---

# Viewport Scaling Directives

Every layout, section, and component MUST conform to this 5-tier scaling matrix:

| Breakpoint Tier | Tailwind Targets | Rules |
| :--- | :--- | :--- |
| **Mobile** | `< 640px` (base) | Stack to single column (`grid-cols-1`, `flex-col`). Minimum touch target 44x44px. Horizontal padding: `px-4`. |
| **Tablet** | `md:` (`768px`) | 2-column grids (`md:grid-cols-2`). Moderate padding: `px-6`. Refined font scales. |
| **Laptop** | `lg:` (`1024px`) | 3-column showcases or split hero layouts. Persistent desktop navigation. |
| **Desktop** | `xl:` / `2xl:` (`1280px` – `1536px`) | Standard bounds: `max-w-7xl mx-auto px-8 py-20`. Full hover states. |
| **2K & Ultra-Wide** | `min-w-[1920px]` – `2560px` | Enforce container containment (`max-w-[1750px] mx-auto` or `2xl:max-w-[1800px]`). Apply fluid typography (`text-[clamp(2.5rem,4vw,4.5rem)]`) so text scales with display resolution without wrapping unexpectedly. |

## Layout Rules
- **No Fixed Widths:** Never set fixed pixel widths (`w-[1200px]`). Use `w-full max-w-[...]`.
- **Viewport Bleed Defense:** Include `overflow-x-clip` or `overflow-x-hidden` on full-width wrapper containers to prevent mobile horizontal scrollbar bugs.