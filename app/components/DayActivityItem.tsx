"use client";

import { ListItem, Typography, IconButton, Box, useMediaQuery, useTheme } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";

export interface DayActivityItemProps {
  time: string;
  description: string;
  image: string;
  googleMapsLink?: string;
  isRightAligned: boolean;
  onMouseEnter: (
    event: React.MouseEvent<HTMLElement>,
    imageSrc: string,
    rightAligned: boolean
  ) => void;
  onMouseLeave: () => void;
}

export default function DayActivityItem({
  time,
  description,
  image,
  googleMapsLink,
  isRightAligned,
  onMouseEnter,
  onMouseLeave,
}: DayActivityItemProps) {
  const theme = useTheme();
  // Only enable popover on desktop (md breakpoint and above)
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <ListItem
      sx={{
        p: 1,
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        cursor: "pointer",
        borderRadius: "8px",
        transition: "all 0.3s ease",
        gap: { xs: 0.5, md: 0 },
        "&:hover": {
          backgroundColor: "rgba(110, 13, 37, 0.08)",
          transform: { xs: "none", md: "translateX(4px)" },
        },
      }}
      onMouseEnter={(e) => isDesktop && onMouseEnter(e, image, isRightAligned)}
      onMouseLeave={() => isDesktop && onMouseLeave()}
    >
      <Typography
        component="span"
        sx={{
          fontWeight: 700,
          fontSize: "1rem",
          color: "#6E0D25",
          minWidth: { xs: "auto", md: "90px" },
          mr: { xs: 0, md: 1.5 },
          flexShrink: 0,
        }}
      >
        {time}
      </Typography>
      <Box sx={{ display: "flex", flex: 1, alignItems: "center" }}>
        <Typography
          component="span"
          sx={{
            fontSize: "1rem",
            color: "#4e0313",
            flex: 1,
            wordBreak: "break-word",
            overflowWrap: "break-word",
          }}
        >
          {description}
        </Typography>
        {googleMapsLink && (
          <a
            href={googleMapsLink}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "flex",
              alignItems: "center",
              margin: "auto",
              color: "#4e0313",
              flexShrink: 0,
            }}
          >
            <IconButton
              size="small"
              sx={{
                color: "#6E0D25",
                padding: "4px",
                "&:hover": {
                  backgroundColor: "rgba(110, 13, 37, 0.1)",
                },
              }}
            >
              <LocationOnIcon fontSize="small" />
            </IconButton>
          </a>
        )}
      </Box>
    </ListItem>
  );
}
