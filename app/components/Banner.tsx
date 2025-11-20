"use client";

import { Box, Typography } from "@mui/material";

export interface BannerProps {
  backgroundImage: string;
  title: string;
  subtitle?: string;
}

export default function Banner({
  backgroundImage,
  title,
  subtitle,
}: BannerProps) {
  return (
    <Box
      sx={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: { xs: "scroll", md: "fixed" },
        height: { xs: "280px", sm: "400px", md: "600px" },
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        position: "relative",
        mb: { xs: 2, sm: 3, md: 6 },
        overflow: "hidden",
      }}
    >
      <Typography
        variant="h1"
        sx={{
          fontFamily: "var(--font-antic-didone)",
          fontWeight: 400,
          fontSize: { xs: "1.75rem", sm: "3rem", md: "4.5rem" },
          color: "#fff",
          textShadow: "2px 2px 8px rgba(0, 0, 0, 0.7)",
          letterSpacing: "0.05em",
          mb: subtitle ? 1 : 0,
          px: 2,
          wordBreak: "break-word",
        }}
      >
        {title}
      </Typography>
      {subtitle && (
        <Typography
          variant="h5"
          sx={{
            color: "#fff",
            textShadow: "1px 1px 4px rgba(0, 0, 0, 0.7)",
            fontSize: { xs: "0.85rem", sm: "1.1rem", md: "1.5rem" },
            fontWeight: 300,
            letterSpacing: "0.02em",
            px: 2,
            wordBreak: "break-word",
          }}
        >
          {subtitle}
        </Typography>
      )}
    </Box>
  );
}

