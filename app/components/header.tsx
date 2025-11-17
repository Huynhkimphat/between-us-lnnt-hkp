'use client';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';

/**
 * Navigation item interface
 */
export interface NavItem {
  /** Label to display for the navigation item */
  label: string;
  /** Optional unique identifier (defaults to label if not provided) */
  id?: string;
  /** Optional href for navigation */
  href?: string;
}

/**
 * Header component props interface
 */
export interface HeaderProps {
  /**
   * Logo or application title text
   * @default "My App"
   */
  logoText?: string;

  /**
   * Array of navigation items to display
   * @default [{ label: "Day 1" }, { label: "Day 2" }, ...]
   */
  navItems?: NavItem[];

  /**
   * Callback function when a navigation item is clicked
   * @param item - The navigation item that was clicked
   */
  onNavItemClick?: (item: NavItem) => void;

  /**
   * Callback function when the logo is clicked
   */
  onLogoClick?: () => void;

  /**
   * Width of the mobile drawer in pixels
   * @default 240
   */
  drawerWidth?: number;

  /**
   * Background color of the AppBar
   * @default "primary"
   */
  appBarColor?: 'default' | 'inherit' | 'primary' | 'secondary' | 'transparent';

  /**
   * Elevation (shadow depth) of the AppBar
   * @default 4
   */
  elevation?: number;

  /**
   * Font family for the logo text
   * @default undefined (uses default font)
   * @example "var(--font-antic-didone)"
   */
  logoFontFamily?: string;
}

/**
 * Default navigation items (Day 1 through Day 6)
 */
const DEFAULT_NAV_ITEMS: NavItem[] = [
  { label: 'Day 1', id: 'day-1' },
  { label: 'Day 2', id: 'day-2' },
  { label: 'Day 3', id: 'day-3' },
  { label: 'Day 4', id: 'day-4' },
  { label: 'Day 5', id: 'day-5' },
  { label: 'Day 6', id: 'day-6' },
];

export default function Header({
  logoText = 'My App',
  navItems = DEFAULT_NAV_ITEMS,
  onNavItemClick,
  onLogoClick,
  drawerWidth = 240,
  elevation = 4,
  logoFontFamily,
}: HeaderProps) {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  /**
   * Toggle mobile drawer open/closed
   */
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  /**
   * Handle navigation item click
   */
  const handleNavItemClick = (item: NavItem) => {
    // Close mobile drawer if open
    if (mobileOpen) {
      setMobileOpen(false);
    }

    // Call the optional callback
    if (onNavItemClick) {
      onNavItemClick(item);
    }
  };

  /**
   * Handle logo click
   */
  const handleLogoClick = () => {
    if (onLogoClick) {
      onLogoClick();
    }
  };

  /**
   * Mobile drawer content
   */
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', background: '#ccccccfe' }}>
      <Typography
        variant="h6"
        sx={{
          my: 2,
          fontWeight: 600,
          ...(logoFontFamily && { fontFamily: logoFontFamily }),
        }}
      >
        {logoText}
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.id || item.label} disablePadding>
            <ListItemButton
              sx={{ textAlign: 'center', py: 1.5 }}
              onClick={() => handleNavItemClick(item)}
            >
              <ListItemText
                primary={item.label}
                primaryTypographyProps={{
                  fontWeight: 500,
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar
        component="nav"
        elevation={elevation}
        position="static"
        sx={{
            background: 'transparent',
            borderRadius: 2,
            color: 'black'
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open navigation drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>

          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: 'none', sm: 'block' },
              fontWeight: 600,
              color: '#4e0313',
              cursor: onLogoClick ? 'pointer' : 'default',
              '&:hover': onLogoClick ? {
                opacity: 0.8,
              } : {},
              ...(logoFontFamily && { fontFamily: logoFontFamily }),
            }}
            onClick={handleLogoClick}
          >
            {logoText}
          </Typography>

          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: 'block', sm: 'none' },
              fontWeight: 700,
              color: 'black',
              cursor: onLogoClick ? 'pointer' : 'default',
              ...(logoFontFamily && { fontFamily: logoFontFamily }),
            }}
            onClick={handleLogoClick}
          >
            {logoText}
          </Typography>

          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Button
                key={item.id || item.label}
                sx={{
                  color: 'black',
                  mx: 0.5,
                  fontWeight: 500,
                  '&:hover': {
                    backgroundColor: '#6e0d25',
                    border: '1px solid #4e0313',
                    color: '#FAF4F0',
                  },
                }}
                onClick={() => handleNavItemClick(item)}
              >
                {item.label}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>

      {/* Mobile drawer */}
      <nav>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}
