"use client";

import { Box, Typography, MenuList, Fade } from "@mui/material";
import DayActivityItem from "./DayActivityItem";
import { Activity } from "@/app/data/itinerary";

export interface DayCardRightProps {
  dayNumber: number;
  activities: Activity[];
  onPopoverOpen: (
    event: React.MouseEvent<HTMLElement>,
    imageSrc: string,
    rightAligned: boolean
  ) => void;
  onPopoverClose: () => void;
}

export default function DayCardRight({
  dayNumber,
  activities,
  onPopoverOpen,
  onPopoverClose,
}: DayCardRightProps) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: { xs: "center", md: "flex-end" },
        mb: { xs: 2, sm: 3, md: 6 },
        width: "100%",
        px: { xs: 0, sm: 1 },
      }}
    >
      <Box
        sx={{
          position: "relative",
          background: "linear-gradient(135deg, #f5e6dc 0%, #FAF4F0 100%)",
          borderRight: { xs: "3px solid #6E0D25", md: "6px solid #6E0D25" },
          borderRadius: { xs: "8px 0 0 8px", md: "12px 0 0 12px" },
          padding: { xs: "12px 14px", sm: "16px 20px", md: "24px 32px" },
          width: { xs: "100%", sm: "90%", md: "80%" },
          boxShadow: "-4px 4px 20px rgba(110, 13, 37, 0.15)",
          transition: "all 0.3s ease",
          "&:hover": {
            transform: { xs: "none", md: "translateX(-8px) scale(1.02)" },
            boxShadow: "-6px 6px 25px rgba(110, 13, 37, 0.25)",
            borderRightColor: "#8B1538",
          },
          display: "flex",
          flexDirection: { xs: "column", md: "row-reverse" },
          gap: { xs: 1, md: 2 },
          overflow: "hidden",
        }}
      >
        <Typography
          sx={{
            fontFamily: "var(--font-antic-didone)",
            fontWeight: 700,
            fontSize: { xs: "1.5rem", sm: "2.5rem", md: "3.5rem" },
            color: "#4e0313",
            mb: { xs: 1, md: 1 },
            letterSpacing: "0.02em",
            textAlign: { xs: "center", md: "right" },
            whiteSpace: "nowrap",
            flexShrink: 0,
          }}
        >
          Day {dayNumber}
        </Typography>

        <Box
          sx={{
            display: { xs: "none", md: "block" },
            width: { xs: "2px", md: "3px" },
            height: { xs: "60px", md: "80px" },
            background: "linear-gradient(180deg, transparent 0%, #6E0D25 100%)",
            mr: { xs: 1, md: 2 },
            ml: "auto",
            alignSelf: "center",
            transition: "all 0.3s ease",
          }}
        />

        <MenuList sx={{ p: 0, flex: 1 }}>
          {activities.map((activity, index) => (
            <Fade
              key={index}
              in={true}
              timeout={600}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div>
                <DayActivityItem
                  time={activity.time}
                  description={activity.description}
                  image={activity.image}
                  googleMapsLink={activity.googleMapsLink}
                  isRightAligned={true}
                  onMouseEnter={onPopoverOpen}
                  onMouseLeave={onPopoverClose}
                />
              </div>
            </Fade>
          ))}
        </MenuList>
      </Box>
    </Box>
  );
}

