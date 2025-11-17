# Font Usage Guide

This guide explains how to use the custom fonts configured in this Next.js application.

## Available Fonts

The application has three fonts configured in `app/layout.tsx`:

1. **Geist Sans** - Modern sans-serif font (default)
2. **Geist Mono** - Monospace font for code
3. **Antic Didone** - Elegant serif font from Google Fonts

## CSS Variables

The fonts are available as CSS variables throughout the application:

- `--font-geist-sans` - Geist Sans
- `--font-geist-mono` - Geist Mono
- `--font-antic-didone` - Antic Didone

## Usage Methods

### Method 1: Using Tailwind CSS Classes

You can use the fonts with Tailwind's `font-*` utility by referencing the CSS variable:

```tsx
<h1 className="font-[family-name:var(--font-antic-didone)]">
  Elegant Heading
</h1>
```

### Method 2: Using Inline Styles

```tsx
<h1 style={{ fontFamily: 'var(--font-antic-didone)' }}>
  Elegant Heading
</h1>
```

### Method 3: Using Material-UI sx Prop

```tsx
<Typography 
  variant="h4" 
  sx={{ fontFamily: 'var(--font-antic-didone)' }}
>
  Elegant Heading
</Typography>
```

### Method 4: Using CSS/SCSS

```css
.elegant-title {
  font-family: var(--font-antic-didone);
}
```

## Examples

### Example 1: Antic Didone in Header Component

```tsx
import Typography from '@mui/material/Typography';

<Typography
  variant="h6"
  component="div"
  sx={{ 
    fontFamily: 'var(--font-antic-didone)',
    fontWeight: 400,
  }}
>
  My Elegant App
</Typography>
```

### Example 2: Mixed Fonts in a Page

```tsx
export default function MyPage() {
  return (
    <div>
      {/* Antic Didone for headings */}
      <h1 style={{ fontFamily: 'var(--font-antic-didone)' }}>
        Welcome to My App
      </h1>
      
      {/* Geist Sans for body text (default) */}
      <p>
        This is regular body text using Geist Sans.
      </p>
      
      {/* Geist Mono for code */}
      <code style={{ fontFamily: 'var(--font-geist-mono)' }}>
        const example = "code";
      </code>
    </div>
  );
}
```

### Example 3: Using with MUI Components

```tsx
import { Typography, Button } from '@mui/material';

export default function StyledComponents() {
  return (
    <>
      <Typography 
        variant="h2" 
        sx={{ 
          fontFamily: 'var(--font-antic-didone)',
          mb: 2 
        }}
      >
        Elegant Title
      </Typography>
      
      <Button 
        variant="contained"
        sx={{ 
          fontFamily: 'var(--font-antic-didone)',
          textTransform: 'none',
        }}
      >
        Styled Button
      </Button>
    </>
  );
}
```

### Example 4: Tailwind CSS with Custom Font

```tsx
export default function TailwindExample() {
  return (
    <div>
      <h1 className="text-4xl font-[family-name:var(--font-antic-didone)]">
        Tailwind + Antic Didone
      </h1>
      
      <p className="font-[family-name:var(--font-geist-mono)] text-sm">
        Monospace text
      </p>
    </div>
  );
}
```

## Configuring Tailwind (Optional)

To make the fonts easier to use with Tailwind, you can add them to your `tailwind.config.ts`:

```typescript
import type { Config } from "tailwindcss";

const config: Config = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-geist-sans)'],
        mono: ['var(--font-geist-mono)'],
        serif: ['var(--font-antic-didone)'],
      },
    },
  },
};

export default config;
```

Then use them like this:

```tsx
<h1 className="font-serif">Antic Didone Heading</h1>
<p className="font-sans">Geist Sans Body</p>
<code className="font-mono">Geist Mono Code</code>
```

## Font Characteristics

### Antic Didone
- **Type**: Serif
- **Weight**: 400 (Regular only)
- **Best for**: Headings, titles, elegant displays
- **Style**: Classic, sophisticated, high-contrast

### Geist Sans
- **Type**: Sans-serif
- **Best for**: Body text, UI elements
- **Style**: Modern, clean, readable

### Geist Mono
- **Type**: Monospace
- **Best for**: Code blocks, technical content
- **Style**: Developer-friendly, clear

## Tips

1. **Antic Didone** works best for large headings and titles due to its elegant serif style
2. Use **Geist Sans** for body text and general UI elements (it's the default)
3. Reserve **Geist Mono** for code snippets and technical content
4. The `display: "swap"` setting ensures text remains visible during font loading
5. All fonts are optimized with `subsets: ["latin"]` for better performance

