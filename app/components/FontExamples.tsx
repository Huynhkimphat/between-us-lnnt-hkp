'use client';
import { Box, Typography, Button, Paper } from '@mui/material';

/**
 * Example component demonstrating how to use the Antic Didone font
 * and other custom fonts configured in the application
 */
export default function FontExamples() {
  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h3" sx={{ mb: 4, fontWeight: 700 }}>
        Font Usage Examples
      </Typography>

      {/* Example 1: Antic Didone for Elegant Headings */}
      <Paper sx={{ p: 3, mb: 3 }}>
        <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
          Example 1: Antic Didone for Elegant Headings
        </Typography>
        
        <Typography
          variant="h2"
          sx={{
            fontFamily: 'var(--font-antic-didone)',
            fontWeight: 400,
            mb: 2,
            color: '#4e0313',
          }}
        >
          Elegant Title with Antic Didone
        </Typography>

        <Typography
          variant="h4"
          sx={{
            fontFamily: 'var(--font-antic-didone)',
            fontWeight: 400,
            color: '#666',
          }}
        >
          Sophisticated Subtitle
        </Typography>
      </Paper>

      {/* Example 2: Mixed Fonts */}
      <Paper sx={{ p: 3, mb: 3 }}>
        <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
          Example 2: Mixing Different Fonts
        </Typography>

        <Typography
          variant="h3"
          sx={{
            fontFamily: 'var(--font-antic-didone)',
            fontWeight: 400,
            mb: 1,
          }}
        >
          Antic Didone Heading
        </Typography>

        <Typography variant="body1" sx={{ mb: 2 }}>
          This is regular body text using the default Geist Sans font. 
          It's clean, modern, and highly readable for longer paragraphs.
        </Typography>

        <Typography
          variant="body2"
          sx={{
            fontFamily: 'var(--font-geist-mono)',
            backgroundColor: '#f5f5f5',
            p: 2,
            borderRadius: 1,
          }}
        >
          const code = "This uses Geist Mono for code snippets";
        </Typography>
      </Paper>

      {/* Example 3: Buttons with Custom Fonts */}
      <Paper sx={{ p: 3, mb: 3 }}>
        <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
          Example 3: Buttons with Antic Didone
        </Typography>

        <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
          <Button
            variant="contained"
            sx={{
              fontFamily: 'var(--font-antic-didone)',
              fontSize: '1.1rem',
              textTransform: 'none',
              px: 3,
              py: 1.5,
            }}
          >
            Elegant Button
          </Button>

          <Button
            variant="outlined"
            sx={{
              fontFamily: 'var(--font-antic-didone)',
              fontSize: '1.1rem',
              textTransform: 'none',
              px: 3,
              py: 1.5,
            }}
          >
            Outlined Style
          </Button>

          <Button
            variant="text"
            sx={{
              fontFamily: 'var(--font-antic-didone)',
              fontSize: '1.1rem',
              textTransform: 'none',
            }}
          >
            Text Button
          </Button>
        </Box>
      </Paper>

      {/* Example 4: Different Font Sizes */}
      <Paper sx={{ p: 3, mb: 3 }}>
        <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
          Example 4: Antic Didone at Different Sizes
        </Typography>

        <Typography
          sx={{
            fontFamily: 'var(--font-antic-didone)',
            fontSize: '3rem',
            fontWeight: 400,
            mb: 1,
          }}
        >
          Extra Large (3rem)
        </Typography>

        <Typography
          sx={{
            fontFamily: 'var(--font-antic-didone)',
            fontSize: '2rem',
            fontWeight: 400,
            mb: 1,
          }}
        >
          Large (2rem)
        </Typography>

        <Typography
          sx={{
            fontFamily: 'var(--font-antic-didone)',
            fontSize: '1.5rem',
            fontWeight: 400,
            mb: 1,
          }}
        >
          Medium (1.5rem)
        </Typography>

        <Typography
          sx={{
            fontFamily: 'var(--font-antic-didone)',
            fontSize: '1rem',
            fontWeight: 400,
          }}
        >
          Regular (1rem)
        </Typography>
      </Paper>
    </Box>
  );
}

