# Header Component

A reusable, responsive Header component for React/Next.js applications built with Material-UI.

## Features

- ✅ **Responsive Design**: Automatically adapts to desktop and mobile devices
- ✅ **Mobile Menu**: Hamburger menu with slide-out drawer on mobile devices
- ✅ **Customizable**: Fully customizable logo, navigation items, colors, and callbacks
- ✅ **TypeScript Support**: Full TypeScript type definitions included
- ✅ **Material-UI Integration**: Built with MUI components for consistent styling
- ✅ **Accessibility**: Proper ARIA labels and semantic HTML

## Installation

The component uses Material-UI, which is already installed in this project:

```bash
npm install @mui/material @mui/icons-material @emotion/react @emotion/styled
```

## Basic Usage

```tsx
import Header from './components/header';

export default function MyPage() {
  return (
    <div>
      <Header />
      {/* Your page content */}
    </div>
  );
}
```

## Props

### `HeaderProps`

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `logoText` | `string` | `"My App"` | Logo or application title text |
| `navItems` | `NavItem[]` | `[{ label: "Day 1" }, ...]` | Array of navigation items (Day 1-6 by default) |
| `onNavItemClick` | `(item: NavItem) => void` | `undefined` | Callback when a navigation item is clicked |
| `onLogoClick` | `() => void` | `undefined` | Callback when the logo is clicked |
| `drawerWidth` | `number` | `240` | Width of the mobile drawer in pixels |
| `appBarColor` | `'default' \| 'inherit' \| 'primary' \| 'secondary' \| 'transparent'` | `'primary'` | Background color of the AppBar |
| `elevation` | `number` | `4` | Shadow depth of the AppBar (0-24) |
| `logoFontFamily` | `string` | `undefined` | Font family for the logo text (e.g., `"var(--font-antic-didone)"`) |

### `NavItem` Interface

```typescript
interface NavItem {
  label: string;      // Display text for the navigation item
  id?: string;        // Optional unique identifier
  href?: string;      // Optional href for navigation
}
```

## Examples

### Example 1: Basic Header with Default Navigation

```tsx
<Header logoText="My Application" />
```

### Example 2: Custom Navigation Items

```tsx
const customNavItems = [
  { label: 'Home', id: 'home' },
  { label: 'About', id: 'about' },
  { label: 'Services', id: 'services' },
  { label: 'Contact', id: 'contact' },
];

<Header 
  logoText="My Company"
  navItems={customNavItems}
/>
```

### Example 3: With Click Handlers

```tsx
'use client';
import { useRouter } from 'next/navigation';
import Header from './components/header';

export default function MyPage() {
  const router = useRouter();

  const handleNavClick = (item) => {
    console.log('Navigating to:', item.label);
    // Add your navigation logic here
    // router.push(`/${item.id}`);
  };

  const handleLogoClick = () => {
    router.push('/');
  };

  return (
    <Header 
      logoText="My App"
      onNavItemClick={handleNavClick}
      onLogoClick={handleLogoClick}
    />
  );
}
```

### Example 4: Custom Styling

```tsx
<Header 
  logoText="My App"
  appBarColor="secondary"
  elevation={0}
  drawerWidth={300}
/>
```

### Example 5: Day 1-6 Navigation (Default)

```tsx
<Header
  logoText="Weekly Planner"
  onNavItemClick={(item) => {
    console.log(`Selected: ${item.label}`);
  }}
/>
```

### Example 6: Using Custom Font (Antic Didone)

```tsx
<Header
  logoText="Elegant App"
  logoFontFamily="var(--font-antic-didone)"
  onNavItemClick={(item) => {
    console.log(`Selected: ${item.label}`);
  }}
/>
```

## Responsive Behavior

- **Desktop (≥600px)**: 
  - Logo on the left
  - Navigation items displayed horizontally on the right
  - No hamburger menu

- **Mobile (<600px)**:
  - Hamburger menu icon on the left
  - Logo in the center
  - Navigation items in a slide-out drawer

## Customization Tips

### Change AppBar Color

Use the `appBarColor` prop to match your theme:

```tsx
<Header appBarColor="secondary" />
```

### Remove Shadow

Set `elevation` to 0 for a flat design:

```tsx
<Header elevation={0} />
```

### Wider Mobile Drawer

Increase the drawer width for more content:

```tsx
<Header drawerWidth={320} />
```

## TypeScript

The component exports the following types:

```typescript
export interface NavItem {
  label: string;
  id?: string;
  href?: string;
}

export interface HeaderProps {
  logoText?: string;
  navItems?: NavItem[];
  onNavItemClick?: (item: NavItem) => void;
  onLogoClick?: () => void;
  drawerWidth?: number;
  appBarColor?: 'default' | 'inherit' | 'primary' | 'secondary' | 'transparent';
  elevation?: number;
}
```

## Notes

- The component uses the `'use client'` directive for Next.js App Router compatibility
- Mobile drawer automatically closes when a navigation item is clicked
- Logo becomes clickable when `onLogoClick` is provided
- All navigation items are keyboard accessible

