# Color Palette Guide

## Current Color Scheme

### Primary Colors (Blue/Sky Theme)
The portfolio currently uses a professional blue color scheme:

| Shade | Hex Code | Tailwind Class | Usage |
|-------|----------|----------------|-------|
| 50    | `#f0f9ff` | `primary-50`   | Backgrounds, subtle highlights |
| 100   | `#e0f2fe` | `primary-100`  | Light backgrounds, badges |
| 200   | `#bae6fd` | `primary-200`  | Hover states |
| 300   | `#7dd3fc` | `primary-300`  | Borders, dividers |
| 400   | `#38bdf8` | `primary-400`  | Gradient accents |
| 500   | `#0ea5e9` | `primary-500`  | **Primary brand color** |
| 600   | `#0284c7` | `primary-600`  | Buttons, links, headings |
| 700   | `#0369a1` | `primary-700`  | Hover states for buttons |
| 800   | `#075985` | `primary-800`  | Dark accents |
| 900   | `#0c4a6e` | `primary-900`  | Very dark accents |

### Neutral Colors (Gray Scale)
| Shade | Usage |
|-------|-------|
| gray-50 | Page backgrounds |
| gray-100 | Card backgrounds |
| gray-600 | Secondary text |
| gray-700 | Body text |
| gray-900 | Headings, primary text |

## Recommended Alternative Palettes

### 1. Purple/Violet (Creative & Modern)
**Best for:** Creative professionals, designers, artists

```javascript
// tailwind.config.js
primary: {
  50: '#faf5ff',
  100: '#f3e8ff',
  200: '#e9d5ff',
  300: '#d8b4fe',
  400: '#c084fc',
  500: '#a855f7',  // Main color
  600: '#9333ea',  // Buttons, links
  700: '#7e22ce',
  800: '#6b21a8',
  900: '#581c87',
}
```

**Vibe:** Innovative, creative, luxurious
**Good match with:** White backgrounds, gold accents

---

### 2. Emerald/Green (Fresh & Tech)
**Best for:** Environmental tech, fintech, health tech

```javascript
primary: {
  50: '#ecfdf5',
  100: '#d1fae5',
  200: '#a7f3d0',
  300: '#6ee7b7',
  400: '#34d399',
  500: '#10b981',  // Main color
  600: '#059669',  // Buttons, links
  700: '#047857',
  800: '#065f46',
  900: '#064e3b',
}
```

**Vibe:** Growth, fresh, trustworthy, modern
**Good match with:** Light backgrounds, dark text

---

### 3. Orange/Amber (Energetic & Bold)
**Best for:** Entrepreneurs, marketing, e-commerce

```javascript
primary: {
  50: '#fffbeb',
  100: '#fef3c7',
  200: '#fde68a',
  300: '#fcd34d',
  400: '#fbbf24',
  500: '#f59e0b',  // Main color
  600: '#d97706',  // Buttons, links
  700: '#b45309',
  800: '#92400e',
  900: '#78350f',
}
```

**Vibe:** Energetic, warm, confident, innovative
**Good match with:** Dark navy, white

---

### 4. Rose/Pink (Modern & Friendly)
**Best for:** Social apps, lifestyle, personal brands

```javascript
primary: {
  50: '#fff1f2',
  100: '#ffe4e6',
  200: '#fecdd3',
  300: '#fda4af',
  400: '#fb7185',
  500: '#f43f5e',  // Main color
  600: '#e11d48',  // Buttons, links
  700: '#be123c',
  800: '#9f1239',
  900: '#881337',
}
```

**Vibe:** Friendly, approachable, modern, creative
**Good match with:** Soft grays, white

---

### 5. Indigo/Blue-Purple (Professional & Trustworthy)
**Best for:** Corporate, SaaS, professional services

```javascript
primary: {
  50: '#eef2ff',
  100: '#e0e7ff',
  200: '#c7d2fe',
  300: '#a5b4fc',
  400: '#818cf8',
  500: '#6366f1',  // Main color
  600: '#4f46e5',  // Buttons, links
  700: '#4338ca',
  800: '#3730a3',
  900: '#312e81',
}
```

**Vibe:** Professional, trustworthy, sophisticated
**Good match with:** Navy, white, light gray

---

### 6. Teal/Cyan (Tech & Innovation)
**Best for:** Tech startups, developers, software

```javascript
primary: {
  50: '#f0fdfa',
  100: '#ccfbf1',
  200: '#99f6e4',
  300: '#5eead4',
  400: '#2dd4bf',
  500: '#14b8a6',  // Main color
  600: '#0d9488',  // Buttons, links
  700: '#0f766e',
  800: '#115e59',
  900: '#134e4a',
}
```

**Vibe:** Modern, tech-savvy, clean, innovative
**Good match with:** Dark backgrounds, white

---

## Gradient Combinations

### Cool Gradients
```javascript
'from-blue-500 to-purple-600'    // Blue to Purple
'from-cyan-500 to-blue-600'      // Cyan to Blue
'from-teal-400 to-blue-500'      // Teal to Blue
'from-indigo-500 to-purple-600'  // Indigo to Purple
```

### Warm Gradients
```javascript
'from-orange-500 to-red-600'     // Orange to Red
'from-yellow-400 to-orange-500'  // Yellow to Orange
'from-pink-500 to-rose-600'      // Pink to Rose
'from-red-500 to-pink-600'       // Red to Pink
```

### Vibrant Gradients
```javascript
'from-purple-500 to-pink-600'    // Purple to Pink
'from-green-500 to-teal-600'     // Green to Teal
'from-blue-500 to-cyan-400'      // Blue to Cyan
```

## How to Change Colors

### Method 1: Update Tailwind Config (Recommended)

1. Open `tailwind.config.js`
2. Replace the `primary` color object in `extend.colors`
3. Save the file - changes will hot-reload

### Method 2: Search & Replace

If you want to use a different Tailwind color without config changes:

1. Search for `primary-` in all files
2. Replace with your chosen color (e.g., `violet-`, `emerald-`)

**Example:**
- `primary-500` → `violet-500`
- `primary-600` → `violet-600`

## Testing Your Palette

After changing colors, check these sections:

- ✅ Hero gradient background
- ✅ Section headings and dividers
- ✅ Button hover states
- ✅ Skill card gradients
- ✅ Link colors
- ✅ Form focus states
- ✅ Timeline icons
- ✅ Footer links

## Accessibility Guidelines

When choosing colors, ensure:

1. **Contrast Ratio:** At least 4.5:1 for normal text, 3:1 for large text
2. **Colorblind-Friendly:** Test with a colorblind simulator
3. **Readable on Both Backgrounds:** Test on white and dark backgrounds

**Tools to test:**
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [Coolors Contrast Checker](https://coolors.co/contrast-checker)

## Pro Tips

1. **Stick to one primary color** - Use shades for variety
2. **Use gradients sparingly** - They're eye-catching but can be overwhelming
3. **Test on mobile** - Colors may look different on smaller screens
4. **Consider your industry** - Blue = trust/tech, Green = growth/eco, Purple = creative

---

**Need inspiration?** Check out:
- [Tailwind Color Palette](https://tailwindcss.com/docs/customizing-colors)
- [Coolors](https://coolors.co/)
- [Adobe Color](https://color.adobe.com/)
