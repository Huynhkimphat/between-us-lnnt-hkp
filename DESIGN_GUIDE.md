# Thailand Trip - Design Guide

## 🎨 Design System Overview

This document explains the visual design choices for the Thailand Trip itinerary application.

---

## Color Palette

### Primary Colors
- **Deep Burgundy**: `#6E0D25` - Main accent color, used for borders and gradients
- **Dark Red**: `#4e0313` - Text color for headings and important content
- **Cream**: `#FAF4F0` - Primary background color
- **Light Peach**: `#f5e6dc` - Secondary background for gradients

### Supporting Colors
- **Gray**: `#666` - Placeholder text and subtle content
- **White**: `#fff` - Navigation buttons and contrast elements

---

## Typography

### Fonts
1. **Antic Didone** (Google Fonts)
   - Usage: Day headings, main title
   - Weight: 400 (Regular)
   - Style: Elegant serif, high-contrast
   - Best for: Large display text

2. **Geist Sans** (Default)
   - Usage: Body text, UI elements
   - Style: Modern, clean sans-serif

### Font Sizes
- **Main Title**: 80px (responsive)
- **Day Headings**: 36px (mobile) → 48px (tablet) → 56px (desktop)
- **Body Text**: 0.95rem
- **Subtitle**: 20px

---

## Day Card Design

### Layout Pattern
The design uses an **alternating zigzag pattern**:
- **Odd Days (1, 3, 5)**: Left-aligned with left border
- **Even Days (2, 4, 6)**: Right-aligned with right border

This creates visual rhythm and guides the eye down the page.

### Card Components

#### 1. Container Box
```tsx
{
  position: "relative",
  background: "linear-gradient(...)",
  borderLeft/Right: "6px solid #6E0D25",
  borderRadius: "0 12px 12px 0" / "12px 0 0 12px",
  padding: "24px 32px",
  maxWidth: "600px",
  boxShadow: "...",
  transition: "all 0.3s ease",
}
```

**Design Choices:**
- **Gradient Background**: Subtle depth without overwhelming content
- **Thick Border**: 6px solid border on one side creates strong visual anchor
- **Asymmetric Radius**: Rounded on outer corners only, sharp on inner side
- **Max Width**: 600px prevents cards from becoming too wide on large screens
- **Padding**: 24px vertical, 32px horizontal for comfortable spacing

#### 2. Typography (Day Title)
```tsx
{
  fontFamily: "var(--font-antic-didone)",
  fontWeight: 400,
  fontSize: { xs: 36, sm: 48, md: 56 },
  color: "#4e0313",
  letterSpacing: "0.02em",
}
```

**Design Choices:**
- **Antic Didone**: Elegant serif adds sophistication
- **Responsive Sizing**: Scales from 36px to 56px based on screen size
- **Letter Spacing**: 0.02em improves readability at large sizes
- **Deep Red**: Strong contrast against cream background

#### 3. Decorative Divider
```tsx
{
  width: "80px",
  height: "3px",
  background: "linear-gradient(...)",
}
```

**Design Choices:**
- **Gradient**: Fades from burgundy to transparent
- **Direction**: Matches card alignment (left→right or right→left)
- **Size**: 80px × 3px provides subtle visual separation
- **Purpose**: Separates title from content elegantly

#### 4. Hover Effects
```tsx
{
  "&:hover": {
    transform: "translateX(±8px)",
    boxShadow: "enhanced shadow",
  }
}
```

**Design Choices:**
- **Horizontal Movement**: 8px shift emphasizes the zigzag pattern
- **Enhanced Shadow**: Deeper shadow on hover creates lift effect
- **Smooth Transition**: 0.3s ease for polished interaction

---

## Shadows & Depth

### Shadow Hierarchy
1. **Default State**: `4px 4px 20px rgba(110, 13, 37, 0.15)`
   - Subtle elevation
   - Burgundy tint matches color scheme

2. **Hover State**: `6px 6px 25px rgba(110, 13, 37, 0.25)`
   - Increased offset and blur
   - Higher opacity for stronger lift

### Shadow Direction
- **Left-aligned cards**: Shadow to the right (`4px 4px`)
- **Right-aligned cards**: Shadow to the left (`-4px 4px`)
- Creates consistent lighting from center

---

## Spacing System

### Vertical Spacing
- **Between cards**: `mt: 4` (32px with default MUI spacing)
- **Title margin**: `mb: 1` (8px)
- **Divider margin**: `mb: 2` (16px)
- **Last card**: `mb: 4` (32px bottom padding)

### Horizontal Spacing
- **Card padding**: 32px left/right
- **List items**: No horizontal padding (px: 0)
- **Max width**: 600px prevents excessive width

---

## Responsive Behavior

### Breakpoints (MUI Default)
- **xs**: 0px - 600px (Mobile)
- **sm**: 600px - 900px (Tablet)
- **md**: 900px+ (Desktop)

### Responsive Adjustments
1. **Font Sizes**: Scale from 36px → 48px → 56px
2. **Card Width**: Fluid up to 600px max
3. **Hover Effects**: Work on all devices (touch-friendly)

---

## Activity List Styling

### Day 1 (Example with Activities)
```tsx
<MenuList sx={{ p: 0 }}>
  <ListItem sx={{ 
    px: 0, 
    py: 0.5, 
    color: "#4e0313", 
    fontSize: "0.95rem" 
  }}>
    Activity text
  </ListItem>
</MenuList>
```

**Design Choices:**
- **No padding**: Aligns with card edges
- **Compact spacing**: 0.5 vertical padding
- **Matching color**: Same burgundy as title
- **Readable size**: 0.95rem (slightly smaller than 1rem)

### Placeholder Text (Days 2-6)
```tsx
<Typography sx={{
  color: "#666",
  fontSize: "0.95rem",
  fontStyle: "italic",
  textAlign: "right/left",
}}>
  Activities coming soon...
</Typography>
```

**Design Choices:**
- **Gray color**: Indicates placeholder status
- **Italic style**: Differentiates from actual content
- **Aligned text**: Matches card alignment

---

## Design Principles

### 1. **Elegance**
- Antic Didone font for sophisticated feel
- Subtle gradients instead of flat colors
- Refined color palette

### 2. **Rhythm**
- Alternating alignment creates visual flow
- Consistent spacing maintains harmony
- Hover effects add playfulness

### 3. **Clarity**
- High contrast text for readability
- Clear visual hierarchy
- Generous whitespace

### 4. **Consistency**
- Repeated patterns across all cards
- Unified color scheme
- Predictable interactions

---

## Future Enhancements

### Potential Additions
1. **Icons**: Add travel icons (✈️, 🏨, 🍜) to activities
2. **Timeline**: Vertical line connecting all days
3. **Images**: Background images for each day
4. **Animations**: Stagger entrance animations on page load
5. **Interactive**: Click to expand/collapse activities
6. **Status**: Visual indicators for completed activities

---

## Accessibility Notes

- ✅ High contrast ratios (burgundy on cream)
- ✅ Responsive font sizes
- ✅ Keyboard-friendly (no hover-only content)
- ✅ Semantic HTML structure
- ⚠️ Consider adding ARIA labels for screen readers
- ⚠️ Test with screen reader software

---

## Browser Compatibility

- ✅ Modern browsers (Chrome, Firefox, Safari, Edge)
- ✅ CSS Grid and Flexbox support required
- ✅ CSS transitions and transforms
- ✅ Google Fonts loading

