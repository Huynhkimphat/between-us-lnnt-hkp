"use client";
import { useState } from "react";
import { Container, Box, Popover, Fade, Slide, Grow, useMediaQuery, useTheme } from "@mui/material";
import Image from "next/image";
import Header from "./components/header";
import Banner from "./components/Banner";
import DayCardLeft from "./components/DayCardLeft";
import DayCardRight from "./components/DayCardRight";
import { itineraryData } from "./data/itinerary";

export default function Home() {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [currentImage, setCurrentImage] = useState<string>("");
  const [isRightAligned, setIsRightAligned] = useState<boolean>(false);

  const handlePopoverOpen = (
    event: React.MouseEvent<HTMLElement>,
    imageSrc: string,
    rightAligned: boolean = false
  ) => {
    setAnchorEl(event.currentTarget);
    setCurrentImage(imageSrc);
    setIsRightAligned(rightAligned);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
    setCurrentImage("");
    setIsRightAligned(false);
  };

  const open = Boolean(anchorEl) && isDesktop;

  return (
    <Box sx={{ background: "#6E0D25", p: { xs: 1, sm: 2, md: 4 } }}>
      <Container
        maxWidth="lg"
        sx={{
          borderRadius: 2,
          p: { xs: 1, sm: 1.5, md: 2 },
          minHeight: "calc(100vh - 64px)",
          background: "#FAF4F0",
          color: "black",
          overflow: "hidden",
        }}
      >
        <Header
          logoText="My App"
          logoFontFamily="var(--font-antic-didone)"
          onLogoClick={() => {
            console.log("Logo clicked");
          }}
        />

        {/* Banner with Animation */}
        <Slide direction="up" in={true} timeout={800}>
          <Fade in={true} timeout={1000}>
            <div>
              <Banner
                backgroundImage="/banner.avif"
                title="Thailand Trip"
                subtitle="27 Nov - 2 Dec 2025"
              />
            </div>
          </Fade>
        </Slide>

        <Container maxWidth="md">
          {/* Day Cards with Staggered Animation */}
          {itineraryData.days.map((day) => {
            const CardComponent =
              day.dayNumber % 2 === 1 ? DayCardLeft : DayCardRight;
            return (
              <Slide
                key={day.dayNumber}
                direction={day.dayNumber % 2 === 1 ? "right" : "left"}
                in={true}
                timeout={600}
                style={{
                  transitionDelay: `${(day.dayNumber - 1) * 150}ms`,
                }}
              >
                <Grow
                  in={true}
                  timeout={600}
                  style={{
                    transitionDelay: `${(day.dayNumber - 1) * 150}ms`,
                  }}
                >
                  <div>
                    <CardComponent
                      dayNumber={day.dayNumber}
                      dayDisplay={day.dayDisplay}
                      activities={day.activities}
                      onPopoverOpen={handlePopoverOpen}
                      onPopoverClose={handlePopoverClose}
                    />
                  </div>
                </Grow>
              </Slide>
            );
          })}
        </Container>

        {/* Popover for activity images */}
        <Popover
          id="activity-popover"
          sx={{
            pointerEvents: "none",
          }}
          open={open}
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: "center",
            horizontal: isRightAligned ? "left" : "right",
          }}
          transformOrigin={{
            vertical: "center",
            horizontal: isRightAligned ? "right" : "left",
          }}
          onClose={handlePopoverClose}
          disableRestoreFocus
          TransitionComponent={Fade}
          transitionDuration={300}
        >
          <Box
            sx={{
              p: { xs: 1.5, md: 2 },
              maxWidth: { xs: "280px", sm: "320px", md: "350px" },
              backgroundColor: "#fff",
              borderRadius: "8px",
              boxShadow: "0 4px 20px rgba(0, 0, 0, 0.15)",
            }}
          >
            {currentImage && (
              <Image
                src={currentImage}
                alt="Activity preview"
                width={300}
                height={200}
                style={{
                  width: "100%",
                  height: "auto",
                  borderRadius: "4px",
                  objectFit: "cover",
                }}
              />
            )}
          </Box>
        </Popover>
      </Container>
    </Box>
  );
}

