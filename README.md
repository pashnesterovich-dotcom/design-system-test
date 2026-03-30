# AI Manufactury Design System

Dark-first design system for AI Manufactury products. Built on Inter, CSS Custom Properties, and Tailwind CSS.

---

## Files

| File | Purpose |
|------|---------|
| `tokens.json` | Source of truth — all design tokens in W3C format |
| `index.css` | CSS Custom Properties for direct use |
| `tailwind.config.ts` | Tailwind v3/v4 config with all tokens mapped |

---

## Color Palette

### Blue (Brand)

<table>
<thead>
<tr><th>Token</th><th>Swatch</th><th>Hex</th><th>Usage</th></tr>
</thead>
<tbody>
<tr><td><code>--color-blue-100</code></td><td style="background:#EFF6FF;width:48px;height:24px;border:1px solid #2E3140">&nbsp;</td><td><code>#EFF6FF</code></td><td>Very light blue tints</td></tr>
<tr><td><code>--color-blue-200</code></td><td style="background:#DBEAFE;width:48px;height:24px;border:1px solid #2E3140">&nbsp;</td><td><code>#DBEAFE</code></td><td>Light blue backgrounds</td></tr>
<tr><td><code>--color-blue-300</code></td><td style="background:#93C5FD;width:48px;height:24px;border:1px solid #2E3140">&nbsp;</td><td><code>#93C5FD</code></td><td>Muted blue accents</td></tr>
<tr><td><code>--color-blue-400</code></td><td style="background:#60A5FA;width:48px;height:24px;border:1px solid #2E3140">&nbsp;</td><td><code>#60A5FA</code></td><td>Primary accent, interactive default</td></tr>
<tr><td><code>--color-blue-500</code></td><td style="background:#3B82F6;width:48px;height:24px;border:1px solid #2E3140">&nbsp;</td><td><code>#3B82F6</code></td><td>Interactive hover</td></tr>
<tr><td><code>--color-blue-600</code></td><td style="background:#2563EB;width:48px;height:24px;border:1px solid #2E3140">&nbsp;</td><td><code>#2563EB</code></td><td>Interactive pressed</td></tr>
<tr><td><code>--color-blue-700</code></td><td style="background:#1D4ED8;width:48px;height:24px;border:1px solid #2E3140">&nbsp;</td><td><code>#1D4ED8</code></td><td>Deep blue, high emphasis</td></tr>
</tbody>
</table>

### Gray (Neutrals)

<table>
<thead>
<tr><th>Token</th><th>Swatch</th><th>Hex</th><th>Usage</th></tr>
</thead>
<tbody>
<tr><td><code>--color-gray-50</code></td><td style="background:#F9FAFB;width:48px;height:24px;border:1px solid #2E3140">&nbsp;</td><td><code>#F9FAFB</code></td><td>Lightest — not used in dark theme</td></tr>
<tr><td><code>--color-gray-100</code></td><td style="background:#F3F4F6;width:48px;height:24px;border:1px solid #2E3140">&nbsp;</td><td><code>#F3F4F6</code></td><td>Light backgrounds</td></tr>
<tr><td><code>--color-gray-200</code></td><td style="background:#E5E7EB;width:48px;height:24px;border:1px solid #2E3140">&nbsp;</td><td><code>#E5E7EB</code></td><td>Dividers (light theme)</td></tr>
<tr><td><code>--color-gray-300</code></td><td style="background:#D1D5DB;width:48px;height:24px;border:1px solid #2E3140">&nbsp;</td><td><code>#D1D5DB</code></td><td>Muted text (light theme)</td></tr>
<tr><td><code>--color-gray-400</code></td><td style="background:#9CA3AF;width:48px;height:24px;border:1px solid #2E3140">&nbsp;</td><td><code>#9CA3AF</code></td><td>Placeholder text</td></tr>
<tr><td><code>--color-gray-500</code></td><td style="background:#6B7280;width:48px;height:24px;border:1px solid #2E3140">&nbsp;</td><td><code>#6B7280</code></td><td>Secondary icons</td></tr>
<tr><td><code>--color-gray-600</code></td><td style="background:#4B5563;width:48px;height:24px;border:1px solid #2E3140">&nbsp;</td><td><code>#4B5563</code></td><td>Disabled text</td></tr>
<tr><td><code>--color-gray-700</code></td><td style="background:#374151;width:48px;height:24px;border:1px solid #2E3140">&nbsp;</td><td><code>#374151</code></td><td>Disabled placeholder</td></tr>
<tr><td><code>--color-gray-800</code></td><td style="background:#1F2937;width:48px;height:24px;border:1px solid #2E3140">&nbsp;</td><td><code>#1F2937</code></td><td>Deep surfaces</td></tr>
<tr><td><code>--color-gray-900</code></td><td style="background:#111827;width:48px;height:24px;border:1px solid #2E3140">&nbsp;</td><td><code>#111827</code></td><td>Near-black backgrounds</td></tr>
<tr><td><code>--color-gray-950</code></td><td style="background:#030712;width:48px;height:24px;border:1px solid #2E3140">&nbsp;</td><td><code>#030712</code></td><td>Darkest surface</td></tr>
</tbody>
</table>

### Functional Colors

<table>
<thead>
<tr><th>Token</th><th>Swatch</th><th>Hex</th><th>Usage</th></tr>
</thead>
<tbody>
<tr><td><code>--color-green-400</code></td><td style="background:#34D399;width:48px;height:24px;border:1px solid #2E3140">&nbsp;</td><td><code>#34D399</code></td><td>Success, positive states</td></tr>
<tr><td><code>--color-green-500</code></td><td style="background:#10B981;width:48px;height:24px;border:1px solid #2E3140">&nbsp;</td><td><code>#10B981</code></td><td>Success hover</td></tr>
<tr><td><code>--color-red-400</code></td><td style="background:#F87171;width:48px;height:24px;border:1px solid #2E3140">&nbsp;</td><td><code>#F87171</code></td><td>Error, destructive</td></tr>
<tr><td><code>--color-red-500</code></td><td style="background:#EF4444;width:48px;height:24px;border:1px solid #2E3140">&nbsp;</td><td><code>#EF4444</code></td><td>Error hover</td></tr>
<tr><td><code>--color-yellow-400</code></td><td style="background:#FBBF24;width:48px;height:24px;border:1px solid #2E3140">&nbsp;</td><td><code>#FBBF24</code></td><td>Warning, pending</td></tr>
<tr><td><code>--color-yellow-500</code></td><td style="background:#F59E0B;width:48px;height:24px;border:1px solid #2E3140">&nbsp;</td><td><code>#F59E0B</code></td><td>Warning hover</td></tr>
</tbody>
</table>

---

## Semantic Tokens — Dark Theme

### Background

<table>
<thead>
<tr><th>Token</th><th>Swatch</th><th>Hex</th><th>Usage</th></tr>
</thead>
<tbody>
<tr><td><code>--bg-app</code></td><td style="background:#13151E;width:48px;height:24px;border:1px solid #2E3140">&nbsp;</td><td><code>#13151E</code></td><td>Root application background</td></tr>
<tr><td><code>--bg-surface</code></td><td style="background:#1A1D27;width:48px;height:24px;border:1px solid #2E3140">&nbsp;</td><td><code>#1A1D27</code></td><td>Cards, panels, primary surfaces</td></tr>
<tr><td><code>--bg-elevated</code></td><td style="background:#21242F;width:48px;height:24px;border:1px solid #2E3140">&nbsp;</td><td><code>#21242F</code></td><td>Dropdowns, popovers, elevated UI</td></tr>
<tr><td><code>--bg-overlay</code></td><td style="background:#000000;width:48px;height:24px;border:1px solid #2E3140">&nbsp;</td><td><code>#000000</code></td><td>Modal overlays</td></tr>
</tbody>
</table>

### Text

<table>
<thead>
<tr><th>Token</th><th>Hex</th><th>Usage</th></tr>
</thead>
<tbody>
<tr><td><code>--text-primary</code></td><td><code>#FFFFFF</code></td><td>Primary readable text, headings</td></tr>
<tr><td><code>--text-secondary</code></td><td><code>#8B8FA3</code></td><td>Supporting text, labels, captions, timestamps</td></tr>
<tr><td><code>--text-disabled</code></td><td><code>#4B5563</code></td><td>Disabled state text</td></tr>
</tbody>
</table>

### Border

<table>
<thead>
<tr><th>Token</th><th>Swatch</th><th>Hex</th><th>Usage</th></tr>
</thead>
<tbody>
<tr><td><code>--border-default</code></td><td style="background:#2E3140;width:48px;height:24px">&nbsp;</td><td><code>#2E3140</code></td><td>Default borders, dividers, input outlines</td></tr>
<tr><td><code>--border-strong</code></td><td style="background:#3E4150;width:48px;height:24px">&nbsp;</td><td><code>#3E4150</code></td><td>Focused, hover, or emphasized borders</td></tr>
</tbody>
</table>

### Accent

<table>
<thead>
<tr><th>Token</th><th>Swatch</th><th>Hex</th><th>Usage</th></tr>
</thead>
<tbody>
<tr><td><code>--accent-primary</code></td><td style="background:#60A5FA;width:48px;height:24px;border:1px solid #2E3140">&nbsp;</td><td><code>#60A5FA</code></td><td>Brand blue — primary CTA, links, active states</td></tr>
<tr><td><code>--accent-success</code></td><td style="background:#34D399;width:48px;height:24px;border:1px solid #2E3140">&nbsp;</td><td><code>#34D399</code></td><td>Success messages, completed states</td></tr>
<tr><td><code>--accent-warning</code></td><td style="background:#FBBF24;width:48px;height:24px;border:1px solid #2E3140">&nbsp;</td><td><code>#FBBF24</code></td><td>Warnings, pending states, caution</td></tr>
<tr><td><code>--accent-error</code></td><td style="background:#F87171;width:48px;height:24px;border:1px solid #2E3140">&nbsp;</td><td><code>#F87171</code></td><td>Errors, destructive actions, validation failures</td></tr>
</tbody>
</table>

---

## Spacing Scale

<table>
<thead>
<tr><th>Token</th><th>Value</th><th>Tailwind</th><th>Visual</th></tr>
</thead>
<tbody>
<tr><td><code>--spacing-2</code></td><td>2px</td><td><code>p-2</code> / <code>m-2</code></td><td><span style="display:inline-block;height:8px;background:#60A5FA;width:2px"></span></td></tr>
<tr><td><code>--spacing-4</code></td><td>4px</td><td><code>p-4</code> / <code>m-4</code></td><td><span style="display:inline-block;height:8px;background:#60A5FA;width:4px"></span></td></tr>
<tr><td><code>--spacing-8</code></td><td>8px</td><td><code>p-8</code> / <code>m-8</code></td><td><span style="display:inline-block;height:8px;background:#60A5FA;width:8px"></span></td></tr>
<tr><td><code>--spacing-12</code></td><td>12px</td><td><code>p-12</code> / <code>m-12</code></td><td><span style="display:inline-block;height:8px;background:#60A5FA;width:12px"></span></td></tr>
<tr><td><code>--spacing-16</code></td><td>16px</td><td><code>p-16</code> / <code>m-16</code></td><td><span style="display:inline-block;height:8px;background:#60A5FA;width:16px"></span></td></tr>
<tr><td><code>--spacing-20</code></td><td>20px</td><td><code>p-20</code> / <code>m-20</code></td><td><span style="display:inline-block;height:8px;background:#60A5FA;width:20px"></span></td></tr>
<tr><td><code>--spacing-24</code></td><td>24px</td><td><code>p-24</code> / <code>m-24</code></td><td><span style="display:inline-block;height:8px;background:#60A5FA;width:24px"></span></td></tr>
<tr><td><code>--spacing-32</code></td><td>32px</td><td><code>p-32</code> / <code>m-32</code></td><td><span style="display:inline-block;height:8px;background:#60A5FA;width:32px"></span></td></tr>
<tr><td><code>--spacing-40</code></td><td>40px</td><td><code>p-40</code> / <code>m-40</code></td><td><span style="display:inline-block;height:8px;background:#60A5FA;width:40px"></span></td></tr>
<tr><td><code>--spacing-48</code></td><td>48px</td><td><code>p-48</code> / <code>m-48</code></td><td><span style="display:inline-block;height:8px;background:#60A5FA;width:48px"></span></td></tr>
<tr><td><code>--spacing-64</code></td><td>64px</td><td><code>p-64</code> / <code>m-64</code></td><td><span style="display:inline-block;height:8px;background:#60A5FA;width:64px"></span></td></tr>
</tbody>
</table>

---

## Border Radius Scale

<table>
<thead>
<tr><th>Token</th><th>Value</th><th>Tailwind</th><th>Usage</th></tr>
</thead>
<tbody>
<tr><td><code>--radius-0</code></td><td>0px</td><td><code>rounded-none</code></td><td>Sharp — tables, code blocks</td></tr>
<tr><td><code>--radius-2</code></td><td>2px</td><td><code>rounded-sm</code></td><td>Subtle — badges, small tags</td></tr>
<tr><td><code>--radius-4</code></td><td>4px</td><td><code>rounded-md</code></td><td>Inputs, inline elements</td></tr>
<tr><td><code>--radius-8</code></td><td>8px</td><td><code>rounded-lg</code></td><td>Buttons, cards, dropdowns</td></tr>
<tr><td><code>--radius-12</code></td><td>12px</td><td><code>rounded-xl</code></td><td>Panels, modals, sidebars</td></tr>
<tr><td><code>--radius-16</code></td><td>16px</td><td><code>rounded-2xl</code></td><td>Large cards, sheets</td></tr>
<tr><td><code>--radius-full</code></td><td>9999px</td><td><code>rounded-full</code></td><td>Pills, avatars, status dots</td></tr>
</tbody>
</table>

---

## Typography Scale

<table>
<thead>
<tr><th>Token</th><th>Size</th><th>Line Height</th><th>Usage</th></tr>
</thead>
<tbody>
<tr><td><code>--font-size-11</code></td><td>11px</td><td>16px</td><td>Micro labels inside compact components only</td></tr>
<tr><td><code>--font-size-12</code></td><td>12px</td><td>16px</td><td>Meta / timestamps — only where space is critical</td></tr>
<tr><td><code>--font-size-13</code></td><td>13px</td><td>20px</td><td>Labels, badges, tags, status pills</td></tr>
<tr><td><code>--font-size-14</code></td><td>14px</td><td>20px</td><td>Secondary body, supporting text, descriptions</td></tr>
<tr><td><code>--font-size-16</code></td><td>16px</td><td>24px</td><td><strong>Body default</strong> — minimum for readable content</td></tr>
<tr><td><code>--font-size-18</code></td><td>18px</td><td>28px</td><td>Card headings, section subheadings</td></tr>
<tr><td><code>--font-size-20</code></td><td>20px</td><td>28px</td><td>Section titles</td></tr>
<tr><td><code>--font-size-24</code></td><td>24px</td><td>32px</td><td>Page headings, H2</td></tr>
<tr><td><code>--font-size-30</code></td><td>30px</td><td>40px</td><td>Display headings, H1</td></tr>
<tr><td><code>--font-size-36</code></td><td>36px</td><td>44px</td><td>Hero headings, hero numbers</td></tr>
</tbody>
</table>

> **Rule:** Base 16px, minimum 14px, 12px only for meta/timestamps. No `text-transform: uppercase`.

---

## Components

### Button

Three variants × five states each.

<table>
<thead>
<tr><th>Variant</th><th>State</th><th>Background</th><th>Text</th><th>Border</th></tr>
</thead>
<tbody>
<tr><td rowspan="5"><strong>Primary</strong></td><td>Default</td><td><code>#60A5FA</code></td><td><code>#13151E</code></td><td><code>#60A5FA</code></td></tr>
<tr><td>Hover</td><td><code>#3B82F6</code></td><td><code>#13151E</code></td><td><code>#3B82F6</code></td></tr>
<tr><td>Focus</td><td><code>#60A5FA</code></td><td><code>#13151E</code></td><td><code>#3B82F6</code> + ring</td></tr>
<tr><td>Pressed</td><td><code>#2563EB</code></td><td><code>#FFFFFF</code></td><td><code>#2563EB</code></td></tr>
<tr><td>Disabled</td><td><code>#1A1D27</code></td><td><code>#4B5563</code></td><td><code>#2E3140</code></td></tr>

<tr><td rowspan="5"><strong>Secondary</strong></td><td>Default</td><td><code>#1A1D27</code></td><td><code>#60A5FA</code></td><td><code>#2E3140</code></td></tr>
<tr><td>Hover</td><td><code>#21242F</code></td><td><code>#60A5FA</code></td><td><code>#3E4150</code></td></tr>
<tr><td>Focus</td><td><code>#1A1D27</code></td><td><code>#60A5FA</code></td><td><code>#60A5FA</code></td></tr>
<tr><td>Pressed</td><td><code>#13151E</code></td><td><code>#3B82F6</code></td><td><code>#3B82F6</code></td></tr>
<tr><td>Disabled</td><td><code>#13151E</code></td><td><code>#4B5563</code></td><td><code>#1A1D27</code></td></tr>

<tr><td rowspan="5"><strong>Ghost</strong></td><td>Default</td><td>transparent</td><td><code>#8B8FA3</code></td><td>transparent</td></tr>
<tr><td>Hover</td><td><code>#1A1D27</code></td><td><code>#FFFFFF</code></td><td>transparent</td></tr>
<tr><td>Focus</td><td><code>#1A1D27</code></td><td><code>#FFFFFF</code></td><td><code>#2E3140</code></td></tr>
<tr><td>Pressed</td><td><code>#21242F</code></td><td><code>#FFFFFF</code></td><td>transparent</td></tr>
<tr><td>Disabled</td><td>transparent</td><td><code>#4B5563</code></td><td>transparent</td></tr>
</tbody>
</table>

### TextField

Two variants: `filled` (with surface background) and `outlined` (transparent background). Both share the same state tokens for text and border colors.

**States:** default → hover → focus → error → disabled

**Key token pairs per state:**

| State | Border token |
|-------|-------------|
| Default | `--border-default` (`#2E3140`) |
| Hover | `--border-strong` (`#3E4150`) |
| Focus | `--accent-primary` (`#60A5FA`) |
| Error | `--accent-error` (`#F87171`) |
| Disabled | surface background, muted text |

### Search

Inherits from TextField (filled), adds icon slot on the left. Icon color shifts from `--text-secondary` to `--accent-primary` on focus.

### Dropdown

Trigger behaves like a secondary button. Menu panel uses `--bg-elevated` with `border-radius: 8px` and `--border-default` border. Selected item text uses `--accent-primary`.

### Textarea

Same token set as TextField (filled), resizable vertically. Min-height: 80px. Same 5 states.

---

## Usage

### In Lovable (recommended)

Paste `index.css` into your Lovable project's global styles. All tokens are available as CSS variables immediately.

```css
/* Paste this in your global CSS entry point */
@import url('./index.css');

/* Use anywhere */
.my-card {
  background: var(--bg-surface);
  border: 1px solid var(--border-default);
  border-radius: var(--radius-8);
  color: var(--text-primary);
  padding: var(--spacing-16);
}

.my-button {
  background: var(--btn-primary-default-bg);
  color: var(--btn-primary-default-text);
  border: 1px solid var(--btn-primary-default-border);
}

.my-button:hover {
  background: var(--btn-primary-hover-bg);
  border-color: var(--btn-primary-hover-border);
}
```

### In React + Tailwind

Copy `tailwind.config.ts` to your project root and extend or replace the default config.

```tsx
// tailwind.config.ts already configured — just use the classes:

// Backgrounds
<div className="bg-bg-app">Root</div>
<div className="bg-bg-surface">Card</div>
<div className="bg-bg-elevated">Dropdown</div>

// Text
<p className="text-text-primary">Main content</p>
<p className="text-text-secondary">Caption / label</p>
<p className="text-text-disabled">Disabled</p>

// Borders
<div className="border border-border-default rounded-lg">Panel</div>
<div className="border border-border-strong rounded-lg">Focused panel</div>

// Accents
<span className="text-accent-primary">Active link</span>
<span className="text-accent-success">Success</span>
<span className="text-accent-warning">Warning</span>
<span className="text-accent-error">Error</span>

// Buttons
<button className="bg-blue-400 text-bg-app rounded-lg px-16 py-8
                   hover:bg-blue-500 transition-colors duration-150">
  Primary
</button>

// Spacing
<div className="p-16 gap-8 space-y-12">...</div>
```

### In React with CSS Variables directly

```tsx
const Card = ({ children }: { children: React.ReactNode }) => (
  <div
    style={{
      background: "var(--bg-surface)",
      border: "1px solid var(--border-default)",
      borderRadius: "var(--radius-8)",
      padding: "var(--spacing-16)",
      color: "var(--text-primary)",
    }}
  >
    {children}
  </div>
);
```

---

## Download

- [`tokens.json`](./tokens.json) — W3C Design Tokens format, compatible with Style Dictionary v4
- [`index.css`](./index.css) — CSS Custom Properties, drop into any project
- [`tailwind.config.ts`](./tailwind.config.ts) — Tailwind v3/v4 configuration

---

## Principles

- **Dark only.** This system is built for dark-first products. No light theme variants.
- **Tokens, not hardcoded values.** Every color, spacing, and radius is a named token.
- **Minimal accents.** Bright colors (blue, green, yellow, red) are used sparingly — only for status dots, CTAs, and validation feedback.
- **Inter everywhere.** The default font is Inter. No serif, no decorative fonts.
- **16px base.** Body text is 16px minimum. Labels are 13-14px. 12px is only for timestamps and micro-labels inside compact components.
- **Cubic-bezier animations.** All transitions use `cubic-bezier(0.4, 0, 0.2, 1)` — consistent with the system.

---

*AI Manufactury Design System — maintained by Design Studio agents*
