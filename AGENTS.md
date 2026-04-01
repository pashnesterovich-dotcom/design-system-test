# AI Manufactury Design System — Lovable Integration Guide

> This file is a complete instruction set for Lovable AI.
> Give Lovable the URL to this file, and it will restyle every component.

## Step 1: Replace src/index.css

Download `lovable-theme.css` from this repository and replace the ENTIRE content of `src/index.css` with it. This sets all CSS variables (colors, radius, fonts) for shadcn/ui.

URL: https://raw.githubusercontent.com/pashnesterovich-dotcom/design-system-test/main/lovable-theme.css

---

## Step 2: Update shadcn/ui components

The CSS file handles theme variables, but shadcn components use hardcoded Tailwind classes for sizing, hover states, and layout. Update each component file as described below.

---

### Design Tokens Reference

**Colors (Dark theme — default):**
- Background app: `#13151E` / `hsl(224 18% 10%)`
- Background surface (cards): `#1A1D27` / `hsl(226 17% 13%)`
- Background elevated (dropdowns): `#21242F` / `hsl(225 14% 16%)`
- Text primary: `#FFFFFF`
- Text secondary: `#8B8FA3`
- Text disabled: `#4B5563`
- Border default: `#2E3140`
- Border strong (hover): `#3E4150`
- Accent primary (blue): `#60A5FA`
- Accent success (green): `#34D399`
- Accent warning (yellow): `#FBBF24`
- Accent error (red): `#F87171`
- Interactive default: `#60A5FA`
- Interactive hover: `#3B82F6`
- Interactive pressed: `#2563EB`

**Font:** Inter (400, 500, 600, 700)
**Default radius:** 8px (0.5rem)
**Spacing scale:** 2, 4, 8, 12, 16, 20, 24, 32, 40, 48, 64 px

---

### src/components/ui/button.tsx

Three visual variants. Each has 5 states: default, hover, focus, pressed (active), disabled.

**Primary (variant="default"):**
- Default: `bg-[#60A5FA] text-[#13151E] border-[#60A5FA]`
- Hover: `hover:bg-[#3B82F6] hover:border-[#3B82F6]` (NOT opacity, exact color)
- Focus: `focus-visible:ring-2 focus-visible:ring-[#60A5FA]/30 focus-visible:ring-offset-0`
- Active/Pressed: `active:bg-[#2563EB] active:text-white active:border-[#2563EB]`
- Disabled: `disabled:bg-[#1A1D27] disabled:text-[#4B5563] disabled:border-[#2E3140] disabled:opacity-100`

**Secondary (variant="secondary"):**
- Default: `bg-[#1A1D27] text-[#60A5FA] border border-[#2E3140]`
- Hover: `hover:bg-[#21242F] hover:border-[#3E4150]`
- Focus: `focus-visible:border-[#60A5FA] focus-visible:ring-2 focus-visible:ring-[#60A5FA]/30`
- Active: `active:bg-[#13151E] active:text-[#3B82F6] active:border-[#3B82F6]`
- Disabled: `disabled:bg-[#13151E] disabled:text-[#4B5563] disabled:border-[#1A1D27] disabled:opacity-100`

**Ghost (variant="ghost"):**
- Default: `bg-transparent text-[#8B8FA3]`
- Hover: `hover:bg-[#1A1D27] hover:text-white`
- Focus: `focus-visible:bg-[#1A1D27] focus-visible:border-[#2E3140]`
- Active: `active:bg-[#21242F] active:text-white`
- Disabled: `disabled:bg-transparent disabled:text-[#4B5563] disabled:opacity-100`

**Outline (variant="outline"):**
- Default: `bg-transparent text-[#FFFFFF] border border-[#2E3140]`
- Hover: `hover:bg-[#1A1D27] hover:border-[#3E4150]`

**Destructive (variant="destructive"):**
- Default: `bg-[#F87171] text-white`
- Hover: `hover:bg-[#EF4444]`
- Active: `active:bg-[#DC2626]`

**All buttons shared:**
- Font: `font-medium text-sm` (14px, weight 500)
- Transition: `transition-all duration-150`
- Letter spacing: `-tracking-tight` or `tracking-[-0.01em]`
- Border radius: `rounded-lg` (8px)
- Sizes: sm=`h-9 px-3`, default=`h-10 px-4 py-2`, lg=`h-11 px-8`

**IMPORTANT:** Remove `hover:bg-primary/90` and all `/90`, `/80` opacity modifiers. Use exact hex colors above.

---

### src/components/ui/input.tsx

**Filled variant (default):**
- Default: `bg-[#1A1D27] text-white border border-[#2E3140] rounded-lg px-3 py-2 text-sm`
- Placeholder: `placeholder:text-[#4B5563]`
- Hover: `hover:bg-[#21242F] hover:border-[#3E4150]`
- Focus: `focus:bg-[#1A1D27] focus:border-[#60A5FA] focus:ring-2 focus:ring-[#60A5FA]/15 focus:outline-none`
- Error: `aria-invalid:border-[#F87171] aria-invalid:ring-2 aria-invalid:ring-[#F87171]/15`
- Disabled: `disabled:bg-[#13151E] disabled:text-[#4B5563] disabled:border-[#1A1D27] disabled:placeholder:text-[#374151] disabled:opacity-100 disabled:cursor-not-allowed`

**IMPORTANT:** Remove `focus-visible:ring-ring/50` or any ring with `ring` variable. Use exact colors above.

---

### src/components/ui/textarea.tsx

Same as Input, plus:
- `min-h-[80px] resize-y`

---

### src/components/ui/select.tsx

**Trigger:**
- Default: `bg-[#1A1D27] text-white border border-[#2E3140] rounded-lg`
- Icon color: `text-[#8B8FA3]`
- Hover: `hover:bg-[#21242F] hover:border-[#3E4150]`
- Open: `data-[state=open]:border-[#60A5FA]`
- Open icon: `data-[state=open]:text-[#60A5FA]`

**Content (dropdown panel):**
- `bg-[#21242F] border border-[#2E3140] rounded-lg shadow-lg`

**Item:**
- Default: `text-white text-sm rounded-md`
- Hover/highlighted: `data-[highlighted]:bg-[#2E3140]`
- Selected: `data-[state=checked]:bg-[#1A1D27] data-[state=checked]:text-[#60A5FA]`

---

### src/components/ui/switch.tsx

- Track unchecked: `bg-[#2E3140]`
- Track checked: `bg-[#34D399]` (GREEN, not blue!)
- Track shape: `rounded-full` (pill, 9999px — NEVER square)
- Thumb: `rounded-full bg-white`
- Size: `w-11 h-6` (track), thumb `h-5 w-5`
- Transition: `transition-colors duration-150`

**IMPORTANT:** Switch ON = green (#34D399 success), NOT blue. This is a UX convention: toggles use success color.

---

### src/components/ui/checkbox.tsx

- Unchecked: `border border-[#2E3140] rounded` (4px radius)
- Hover: `hover:border-[#3E4150]`
- Checked: `bg-[#60A5FA] border-[#60A5FA] text-[#13151E]` (blue is correct for checkbox)
- Size: `h-4 w-4`

---

### src/components/ui/card.tsx

- Background: `bg-card` (uses CSS variable, correct)
- Border: `border border-[#2E3140]`
- Radius: `rounded-xl` (12px, NOT rounded-lg)
- Shadow: `shadow-sm` → `shadow-[0_1px_2px_0_rgba(0,0,0,0.4)]`
- Hover: `hover:border-[#3E4150] hover:shadow-[0_4px_8px_-1px_rgba(0,0,0,0.5)]`
- Card header padding: `p-6` (24px)
- Card content padding: `p-6` (24px)

---

### src/components/ui/badge.tsx

- Radius: `rounded-sm` (2px, NOT rounded-full)
- Font: `text-[13px] font-medium`
- Padding: `px-2 py-0.5`

**Variants:**
- Default: `bg-primary/15 text-primary border-primary/30`
- Success: `bg-[#34D399]/15 text-[#34D399] border-[#34D399]/30`
- Warning: `bg-[#FBBF24]/15 text-[#FBBF24] border-[#FBBF24]/30`
- Destructive: `bg-[#F87171]/15 text-[#F87171] border-[#F87171]/30`

---

### src/components/ui/tabs.tsx

**TabsList:**
- `border-b border-[#2E3140] bg-transparent`

**TabsTrigger:**
- Inactive: `text-[#8B8FA3] font-medium text-sm`
- Hover: `hover:text-white`
- Active: `data-[state=active]:text-[#60A5FA] data-[state=active]:border-b-2 data-[state=active]:border-[#60A5FA]`

---

### src/components/ui/dialog.tsx

**Overlay:**
- `bg-black/60 backdrop-blur-sm`

**Content:**
- `bg-[#21242F] border border-[#2E3140] rounded-xl shadow-[0_16px_48px_-4px_rgba(0,0,0,0.7)]`

---

### src/components/ui/sheet.tsx

**Content:**
- `bg-[#1A1D27] border-[#2E3140]`

---

### src/components/ui/tooltip.tsx

- `bg-[#21242F] text-white text-xs border border-[#2E3140] rounded px-2 py-1 shadow-md`

---

### src/components/ui/popover.tsx

**Content:**
- `bg-[#21242F] border border-[#2E3140] rounded-lg shadow-lg`

---

### src/components/ui/dropdown-menu.tsx

**Content:**
- `bg-[#21242F] border border-[#2E3140] rounded-lg shadow-lg`

**Item:**
- Default: `text-white text-sm rounded-md`
- Hover: `focus:bg-[#2E3140]`
- Active: `active:bg-[#1A1D27]`

---

### src/components/ui/table.tsx

**Header:**
- `text-[12px] font-semibold uppercase tracking-wider text-[#8B8FA3]`
- Cell padding: `px-4 py-3`
- Border: `border-b border-[#2E3140]`

**Body row:**
- `hover:bg-[#1A1D27] transition-colors duration-100`
- Cell: `text-sm px-4 py-3 border-b border-[#2E3140]`

---

### src/components/ui/separator.tsx

- `bg-[#2E3140]`

---

### src/components/ui/progress.tsx

- Track: `bg-[#2E3140] rounded-full`
- Fill: `bg-[#60A5FA] rounded-full transition-all duration-300`

---

### src/components/ui/avatar.tsx

- Shape: `rounded-full`
- Fallback: `bg-[#21242F] text-[#8B8FA3]`

---

### src/components/ui/skeleton.tsx

- `bg-[#21242F] rounded-lg animate-pulse`

---

### src/components/ui/label.tsx

- `text-[13px] font-medium text-white tracking-[0.01em]`
- Disabled: `data-[disabled]:text-[#4B5563]`

---

### src/components/ui/sonner.tsx (Toast)

- `bg-[#21242F] border border-[#2E3140] text-white rounded-xl shadow-lg`

---

### Sidebar styling

If the project uses a sidebar component:
- Background: `bg-[#1A1D27]`
- Border: `border-r border-[#2E3140]`
- Nav item default: `text-[#8B8FA3] hover:text-white hover:bg-[#21242F] rounded-lg px-3 py-2 text-sm transition-colors`
- Nav item active: `text-white bg-[#60A5FA]/10 font-medium`
- Section header: `text-[11px] uppercase tracking-widest text-[#4B5563] font-semibold px-3 py-2`
- Divider: `border-t border-[#2E3140] my-2`

---

## Step 3: Global styles

Make sure `body` uses:
```
font-family: 'Inter', system-ui, -apple-system, sans-serif;
-webkit-font-smoothing: antialiased;
background-color: hsl(224 18% 10%);  /* #13151E */
color: white;
```

Scrollbar (webkit):
- Track: transparent
- Thumb: `#2E3140`, hover `#3E4150`, rounded-full, width 6px

---

## Quick Prompt for Lovable

Copy and paste this into Lovable chat:

```
Apply the AI Manufactury Design System to this project. Follow the instructions exactly from this file:
https://raw.githubusercontent.com/pashnesterovich-dotcom/design-system-test/main/LOVABLE.md

1. Replace src/index.css with the content from:
   https://raw.githubusercontent.com/pashnesterovich-dotcom/design-system-test/main/lovable-theme.css

2. Update every shadcn component file in src/components/ui/ following the exact Tailwind classes specified in the LOVABLE.md guide. Key changes:
   - Button: exact hover colors (no opacity modifiers like /90)
   - Switch: green (#34D399) when checked, pill shape (rounded-full)
   - Card: rounded-xl (12px), not rounded-lg
   - Badge: rounded-sm (2px), not rounded-full
   - Input: filled style with bg-[#1A1D27], exact focus/hover/error/disabled states
   - Select: dark dropdown panel bg-[#21242F]
   - Table: uppercase headers, row hover
   - Sidebar: active item with blue/10 background
   - All components: remove opacity-based hover (/90, /80), use exact hex colors

3. Font: Inter from Google Fonts. No other fonts.
4. Default border-radius: 8px (--radius: 0.5rem)
5. Switch ON = green (#34D399), NOT blue
```
