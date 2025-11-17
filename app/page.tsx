"use client";
import { useState } from "react";
import {
  Container,
  Box,
  Typography,
  ListItem,
  MenuList,
  Popover,
} from "@mui/material";
import Image from "next/image";
import Header from "./components/header";

export default function Home() {
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

  const open = Boolean(anchorEl);
  return (
    <Box sx={{ background: "#6E0D25", p: 4 }}>
      <Container
        maxWidth="lg"
        sx={{
          borderRadius: 2,
          p: 2,
          minHeight: "calc(100vh - 64px)",
          background: "#FAF4F0",
          color: "black",
        }}
      >
        <Header
          logoText="My App"
          logoFontFamily="var(--font-antic-didone)"
          onNavItemClick={(item) => {
            console.log("Navigation item clicked:", item.label);
          }}
          onLogoClick={() => {
            console.log("Logo clicked");
          }}
        />
        <Box
          sx={{
            mt: 2,
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            backgroundImage:
              "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(/banner.avif)",
            backgroundSize: "cover",
            borderRadius: 2,
            border: "1px solid",
            height: "600px",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <Typography
            sx={{
              fontWeight: 400,
              fontSize: 80,
              fontFamily: "var(--font-antic-didone)",
              color: "#fff",
              textShadow: "2px 2px 8px rgba(0, 0, 0, 0.7)",
              zIndex: 1,
            }}
          >
            Thailand Trip
          </Typography>
          <Typography
            sx={{
              fontWeight: 400,
              fontSize: 20,
              color: "#fff",
              textShadow: "1px 1px 4px rgba(0, 0, 0, 0.7)",
              mt: 1,
            }}
          >
            27 Nov - 2 Dec
          </Typography>

          <Typography
            sx={{
              fontWeight: 400,
              fontSize: 16,
              color: "#fff",
              textShadow: "1px 1px 4px rgba(0, 0, 0, 0.7)",
            }}
          >
            2025
          </Typography>
        </Box>

        <Container maxWidth="md">
          {/* Day 1 - Left Aligned */}
          <Box
            sx={{
              mt: 4,
              width: "100%",
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "start",
            }}
          >
            <Box
              sx={{
                position: "relative",
                background: "linear-gradient(135deg, #FAF4F0 0%, #f5e6dc 100%)",
                borderLeft: "6px solid #6E0D25",
                borderRadius: "0 12px 12px 0",
                padding: "24px 32px",
                width: "80%",
                boxShadow: "4px 4px 20px rgba(110, 13, 37, 0.15)",
                transition: "all 0.3s ease",
                "&:hover": {
                  transform: "translateX(8px)",
                  boxShadow: "6px 6px 25px rgba(110, 13, 37, 0.25)",
                },
                display: "flex",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "var(--font-antic-didone)",
                  fontWeight: 400,
                  fontSize: { xs: 36, sm: 48, md: 56 },
                  color: "#4e0313",
                  mb: 1,
                  letterSpacing: "0.02em",
                  flex: 1,
                }}
              >
                Day 1
              </Typography>

              <MenuList sx={{ p: 0, flex: 2 }}>
                <ListItem
                  sx={{
                    px: 0,
                    py: 0.75,
                    display: "flex",
                    alignItems: "baseline",
                    cursor: "pointer",
                    borderRadius: "4px",
                    transition: "background-color 0.2s ease",
                    "&:hover": {
                      backgroundColor: "rgba(110, 13, 37, 0.05)",
                    },
                  }}
                  onMouseEnter={(e) => handlePopoverOpen(e, "/banner.avif", false)}
                  onMouseLeave={handlePopoverClose}
                >
                  <Typography
                    component="span"
                    sx={{
                      fontWeight: 700,
                      fontSize: "1rem",
                      color: "#6E0D25",
                      minWidth: "90px",
                      mr: 1.5,
                    }}
                  >
                    3h30:
                  </Typography>
                  <Typography
                    component="span"
                    sx={{
                      fontSize: "0.95rem",
                      color: "#4e0313",
                    }}
                  >
                    Going to Tan Son Nhat Airport
                  </Typography>
                </ListItem>
                <ListItem
                  sx={{
                    px: 0,
                    py: 0.75,
                    display: "flex",
                    alignItems: "baseline",
                    cursor: "pointer",
                    borderRadius: "4px",
                    transition: "background-color 0.2s ease",
                    "&:hover": {
                      backgroundColor: "rgba(110, 13, 37, 0.05)",
                    },
                  }}
                  onMouseEnter={(e) => handlePopoverOpen(e, "/banner.avif", false)}
                  onMouseLeave={handlePopoverClose}
                >
                  <Typography
                    component="span"
                    sx={{
                      fontWeight: 700,
                      fontSize: "1rem",
                      color: "#6E0D25",
                      minWidth: "90px",
                      mr: 1.5,
                    }}
                  >
                    6h40-8h15:
                  </Typography>
                  <Typography
                    component="span"
                    sx={{
                      fontSize: "0.95rem",
                      color: "#4e0313",
                    }}
                  >
                    HCM - Bangkok
                  </Typography>
                </ListItem>
                <ListItem
                  sx={{
                    px: 0,
                    py: 0.75,
                    display: "flex",
                    alignItems: "baseline",
                    cursor: "pointer",
                    borderRadius: "4px",
                    transition: "background-color 0.2s ease",
                    "&:hover": {
                      backgroundColor: "rgba(110, 13, 37, 0.05)",
                    },
                  }}
                  onMouseEnter={(e) => handlePopoverOpen(e, "/banner.avif", false)}
                  onMouseLeave={handlePopoverClose}
                >
                  <Typography
                    component="span"
                    sx={{
                      fontWeight: 700,
                      fontSize: "1rem",
                      color: "#6E0D25",
                      minWidth: "90px",
                      mr: 1.5,
                    }}
                  >
                    9h:
                  </Typography>
                  <Typography
                    component="span"
                    sx={{
                      fontSize: "0.95rem",
                      color: "#4e0313",
                    }}
                  >
                    Meet my girlfriend
                  </Typography>
                </ListItem>
                <ListItem
                  sx={{
                    px: 0,
                    py: 0.75,
                    display: "flex",
                    alignItems: "baseline",
                    cursor: "pointer",
                    borderRadius: "4px",
                    transition: "background-color 0.2s ease",
                    "&:hover": {
                      backgroundColor: "rgba(110, 13, 37, 0.05)",
                    },
                  }}
                  onMouseEnter={(e) => handlePopoverOpen(e, "/banner.avif", false)}
                  onMouseLeave={handlePopoverClose}
                >
                  <Typography
                    component="span"
                    sx={{
                      fontWeight: 700,
                      fontSize: "1rem",
                      color: "#6E0D25",
                      minWidth: "90px",
                      mr: 1.5,
                    }}
                  >
                    10h:
                  </Typography>
                  <Typography
                    component="span"
                    sx={{
                      fontSize: "0.95rem",
                      color: "#4e0313",
                    }}
                  >
                    Go to the hotel
                  </Typography>
                </ListItem>
                <ListItem
                  sx={{
                    px: 0,
                    py: 0.75,
                    display: "flex",
                    alignItems: "baseline",
                    cursor: "pointer",
                    borderRadius: "4px",
                    transition: "background-color 0.2s ease",
                    "&:hover": {
                      backgroundColor: "rgba(110, 13, 37, 0.05)",
                    },
                  }}
                  onMouseEnter={(e) => handlePopoverOpen(e, "/banner.avif", false)}
                  onMouseLeave={handlePopoverClose}
                >
                  <Typography
                    component="span"
                    sx={{
                      fontWeight: 700,
                      fontSize: "1rem",
                      color: "#6E0D25",
                      minWidth: "90px",
                      mr: 1.5,
                    }}
                  >
                    10h30:
                  </Typography>
                  <Typography
                    component="span"
                    sx={{
                      fontSize: "0.95rem",
                      color: "#4e0313",
                    }}
                  >
                    Jodd Fair
                  </Typography>
                </ListItem>
                <ListItem
                  sx={{
                    px: 0,
                    py: 0.75,
                    display: "flex",
                    alignItems: "baseline",
                    cursor: "pointer",
                    borderRadius: "4px",
                    transition: "background-color 0.2s ease",
                    "&:hover": {
                      backgroundColor: "rgba(110, 13, 37, 0.05)",
                    },
                  }}
                  onMouseEnter={(e) => handlePopoverOpen(e, "/banner.avif", false)}
                  onMouseLeave={handlePopoverClose}
                >
                  <Typography
                    component="span"
                    sx={{
                      fontWeight: 700,
                      fontSize: "1rem",
                      color: "#6E0D25",
                      minWidth: "90px",
                      mr: 1.5,
                    }}
                  >
                    11h30:
                  </Typography>
                  <Typography
                    component="span"
                    sx={{
                      fontSize: "0.95rem",
                      color: "#4e0313",
                    }}
                  >
                    Sleep with you
                  </Typography>
                </ListItem>
              </MenuList>
            </Box>
          </Box>

          {/* Day 2 - Right Aligned */}
          <Box
            sx={{
              mt: 4,
              width: "100%",
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "end",
            }}
          >
            <Box
              sx={{
                position: "relative",
                background: "linear-gradient(135deg, #f5e6dc 0%, #FAF4F0 100%)",
                borderRight: "6px solid #6E0D25",
                borderRadius: "12px 0 0 12px",
                padding: "24px 32px",
                maxWidth: "600px",
                boxShadow: "-4px 4px 20px rgba(110, 13, 37, 0.15)",
                transition: "all 0.3s ease",
                "&:hover": {
                  transform: "translateX(-8px)",
                  boxShadow: "-6px 6px 25px rgba(110, 13, 37, 0.25)",
                },
                display:'flex',
                flexDirection:'row-reverse',
                width: "80%",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "var(--font-antic-didone)",
                  fontWeight: 400,
                  fontSize: { xs: 36, sm: 48, md: 56 },
                  color: "#4e0313",
                  mb: 1,
                  letterSpacing: "0.02em",
                  textAlign: "right",
                }}
              >
                Day 2
              </Typography>
    
          <MenuList sx={{ p: 0, flex: 2 }}>
                <ListItem
                  sx={{
                    px: 0,
                    py: 0.75,
                    display: "flex",
                    alignItems: "baseline",
                    cursor: "pointer",
                    borderRadius: "4px",
                    transition: "background-color 0.2s ease",
                    "&:hover": {
                      backgroundColor: "rgba(110, 13, 37, 0.05)",
                    },
                  }}
                  onMouseEnter={(e) => handlePopoverOpen(e, "/banner.avif", true)}
                  onMouseLeave={handlePopoverClose}
                >
                  <Typography
                    component="span"
                    sx={{
                      fontWeight: 700,
                      fontSize: "1rem",
                      color: "#6E0D25",
                      minWidth: "90px",
                      mr: 1.5,
                    }}
                  >
                    3h30:
                  </Typography>
                  <Typography
                    component="span"
                    sx={{
                      fontSize: "0.95rem",
                      color: "#4e0313",
                    }}
                  >
                    Going to Tan Son Nhat Airport
                  </Typography>
                </ListItem>
                <ListItem
                  sx={{
                    px: 0,
                    py: 0.75,
                    display: "flex",
                    alignItems: "baseline",
                    cursor: "pointer",
                    borderRadius: "4px",
                    transition: "background-color 0.2s ease",
                    "&:hover": {
                      backgroundColor: "rgba(110, 13, 37, 0.05)",
                    },
                  }}
                  onMouseEnter={(e) => handlePopoverOpen(e, "/banner.avif", true)}
                  onMouseLeave={handlePopoverClose}
                >
                  <Typography
                    component="span"
                    sx={{
                      fontWeight: 700,
                      fontSize: "1rem",
                      color: "#6E0D25",
                      minWidth: "90px",
                      mr: 1.5,
                    }}
                  >
                    6h40-8h15:
                  </Typography>
                  <Typography
                    component="span"
                    sx={{
                      fontSize: "0.95rem",
                      color: "#4e0313",
                    }}
                  >
                    HCM - Bangkok
                  </Typography>
                </ListItem>
                <ListItem
                  sx={{
                    px: 0,
                    py: 0.75,
                    display: "flex",
                    alignItems: "baseline",
                    cursor: "pointer",
                    borderRadius: "4px",
                    transition: "background-color 0.2s ease",
                    "&:hover": {
                      backgroundColor: "rgba(110, 13, 37, 0.05)",
                    },
                  }}
                  onMouseEnter={(e) => handlePopoverOpen(e, "/banner.avif", true)}
                  onMouseLeave={handlePopoverClose}
                >
                  <Typography
                    component="span"
                    sx={{
                      fontWeight: 700,
                      fontSize: "1rem",
                      color: "#6E0D25",
                      minWidth: "90px",
                      mr: 1.5,
                    }}
                  >
                    9h:
                  </Typography>
                  <Typography
                    component="span"
                    sx={{
                      fontSize: "0.95rem",
                      color: "#4e0313",
                    }}
                  >
                    Meet my girlfriend
                  </Typography>
                </ListItem>
                <ListItem
                  sx={{
                    px: 0,
                    py: 0.75,
                    display: "flex",
                    alignItems: "baseline",
                    cursor: "pointer",
                    borderRadius: "4px",
                    transition: "background-color 0.2s ease",
                    "&:hover": {
                      backgroundColor: "rgba(110, 13, 37, 0.05)",
                    },
                  }}
                  onMouseEnter={(e) => handlePopoverOpen(e, "/banner.avif", true)}
                  onMouseLeave={handlePopoverClose}
                >
                  <Typography
                    component="span"
                    sx={{
                      fontWeight: 700,
                      fontSize: "1rem",
                      color: "#6E0D25",
                      minWidth: "90px",
                      mr: 1.5,
                    }}
                  >
                    10h:
                  </Typography>
                  <Typography
                    component="span"
                    sx={{
                      fontSize: "0.95rem",
                      color: "#4e0313",
                    }}
                  >
                    Go to the hotel
                  </Typography>
                </ListItem>
                <ListItem
                  sx={{
                    px: 0,
                    py: 0.75,
                    display: "flex",
                    alignItems: "baseline",
                    cursor: "pointer",
                    borderRadius: "4px",
                    transition: "background-color 0.2s ease",
                    "&:hover": {
                      backgroundColor: "rgba(110, 13, 37, 0.05)",
                    },
                  }}
                  onMouseEnter={(e) => handlePopoverOpen(e, "/banner.avif", true)}
                  onMouseLeave={handlePopoverClose}
                >
                  <Typography
                    component="span"
                    sx={{
                      fontWeight: 700,
                      fontSize: "1rem",
                      color: "#6E0D25",
                      minWidth: "90px",
                      mr: 1.5,
                    }}
                  >
                    10h30:
                  </Typography>
                  <Typography
                    component="span"
                    sx={{
                      fontSize: "0.95rem",
                      color: "#4e0313",
                    }}
                  >
                    Jodd Fair
                  </Typography>
                </ListItem>
                <ListItem
                  sx={{
                    px: 0,
                    py: 0.75,
                    display: "flex",
                    alignItems: "baseline",
                    cursor: "pointer",
                    borderRadius: "4px",
                    transition: "background-color 0.2s ease",
                    "&:hover": {
                      backgroundColor: "rgba(110, 13, 37, 0.05)",
                    },
                  }}
                  onMouseEnter={(e) => handlePopoverOpen(e, "/banner.avif", true)}
                  onMouseLeave={handlePopoverClose}
                >
                  <Typography
                    component="span"
                    sx={{
                      fontWeight: 700,
                      fontSize: "1rem",
                      color: "#6E0D25",
                      minWidth: "90px",
                      mr: 1.5,
                    }}
                  >
                    11h30:
                  </Typography>
                  <Typography
                    component="span"
                    sx={{
                      fontSize: "0.95rem",
                      color: "#4e0313",
                    }}
                  >
                    Sleep with you
                  </Typography>
                </ListItem>
              </MenuList>
            </Box>
          </Box>

          {/* Day 3 - Left Aligned */}
          <Box
            sx={{
              mt: 4,
              width: "100%",
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "start",
            }}
          >
            <Box
              sx={{
                position: "relative",
                background: "linear-gradient(135deg, #FAF4F0 0%, #f5e6dc 100%)",
                borderLeft: "6px solid #6E0D25",
                borderRadius: "0 12px 12px 0",
                padding: "24px 32px",
                maxWidth: "600px",
                boxShadow: "4px 4px 20px rgba(110, 13, 37, 0.15)",
                transition: "all 0.3s ease",
                "&:hover": {
                  transform: "translateX(8px)",
                  boxShadow: "6px 6px 25px rgba(110, 13, 37, 0.25)",
                },
              }}
            >
              <Typography
                sx={{
                  fontFamily: "var(--font-antic-didone)",
                  fontWeight: 400,
                  fontSize: { xs: 36, sm: 48, md: 56 },
                  color: "#4e0313",
                  mb: 1,
                  letterSpacing: "0.02em",
                }}
              >
                Day 3
              </Typography>
              <Box
                sx={{
                  width: "3px",
                  height: "80px",
                  background:
                    "linear-gradient(180deg, #6E0D25 0%, transparent 100%)",
                  mr: 2,
                }}
              />
              <Typography
                sx={{
                  color: "#666",
                  fontSize: "0.95rem",
                  fontStyle: "italic",
                }}
              >
                Activities coming soon...
              </Typography>
            </Box>
          </Box>

          {/* Day 4 - Right Aligned */}
          <Box
            sx={{
              mt: 4,
              width: "100%",
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "end",
            }}
          >
            <Box
              sx={{
                position: "relative",
                background: "linear-gradient(135deg, #f5e6dc 0%, #FAF4F0 100%)",
                borderRight: "6px solid #6E0D25",
                borderRadius: "12px 0 0 12px",
                padding: "24px 32px",
                maxWidth: "600px",
                boxShadow: "-4px 4px 20px rgba(110, 13, 37, 0.15)",
                transition: "all 0.3s ease",
                "&:hover": {
                  transform: "translateX(-8px)",
                  boxShadow: "-6px 6px 25px rgba(110, 13, 37, 0.25)",
                },
              }}
            >
              <Typography
                sx={{
                  fontFamily: "var(--font-antic-didone)",
                  fontWeight: 400,
                  fontSize: { xs: 36, sm: 48, md: 56 },
                  color: "#4e0313",
                  mb: 1,
                  letterSpacing: "0.02em",
                  textAlign: "right",
                }}
              >
                Day 4
              </Typography>
              <Box
                sx={{
                  width: "3px",
                  height: "80px",
                  background:
                    "linear-gradient(180deg, transparent 0%, #6E0D25 100%)",
                  mr: 2,
                  ml: "auto",
                }}
              />
              <Typography
                sx={{
                  color: "#666",
                  fontSize: "0.95rem",
                  fontStyle: "italic",
                  textAlign: "right",
                }}
              >
                Activities coming soon...
              </Typography>
            </Box>
          </Box>

          {/* Day 5 - Left Aligned */}
          <Box
            sx={{
              mt: 4,
              width: "100%",
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "start",
            }}
          >
            <Box
              sx={{
                position: "relative",
                background: "linear-gradient(135deg, #FAF4F0 0%, #f5e6dc 100%)",
                borderLeft: "6px solid #6E0D25",
                borderRadius: "0 12px 12px 0",
                padding: "24px 32px",
                maxWidth: "600px",
                boxShadow: "4px 4px 20px rgba(110, 13, 37, 0.15)",
                transition: "all 0.3s ease",
                "&:hover": {
                  transform: "translateX(8px)",
                  boxShadow: "6px 6px 25px rgba(110, 13, 37, 0.25)",
                },
              }}
            >
              <Typography
                sx={{
                  fontFamily: "var(--font-antic-didone)",
                  fontWeight: 400,
                  fontSize: { xs: 36, sm: 48, md: 56 },
                  color: "#4e0313",
                  mb: 1,
                  letterSpacing: "0.02em",
                }}
              >
                Day 5
              </Typography>
              <Box
                sx={{
                  width: "3px",
                  height: "80px",
                  background:
                    "linear-gradient(180deg, #6E0D25 0%, transparent 100%)",
                  mr: 2,
                }}
              />
              <Typography
                sx={{
                  color: "#666",
                  fontSize: "0.95rem",
                  fontStyle: "italic",
                }}
              >
                Activities coming soon...
              </Typography>
            </Box>
          </Box>

          {/* Day 6 - Right Aligned */}
          <Box
            sx={{
              mt: 4,
              mb: 4,
              width: "100%",
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "end",
            }}
          >
            <Box
              sx={{
                position: "relative",
                background: "linear-gradient(135deg, #f5e6dc 0%, #FAF4F0 100%)",
                borderRight: "6px solid #6E0D25",
                borderRadius: "12px 0 0 12px",
                padding: "24px 32px",
                maxWidth: "600px",
                boxShadow: "-4px 4px 20px rgba(110, 13, 37, 0.15)",
                transition: "all 0.3s ease",
                "&:hover": {
                  transform: "translateX(-8px)",
                  boxShadow: "-6px 6px 25px rgba(110, 13, 37, 0.25)",
                },
              }}
            >
              <Typography
                sx={{
                  fontFamily: "var(--font-antic-didone)",
                  fontWeight: 400,
                  fontSize: { xs: 36, sm: 48, md: 56 },
                  color: "#4e0313",
                  mb: 1,
                  letterSpacing: "0.02em",
                  textAlign: "right",
                }}
              >
                Day 6
              </Typography>
              <Box
                sx={{
                  width: "3px",
                  height: "80px",
                  background:
                    "linear-gradient(180deg, transparent 0%, #6E0D25 100%)",
                  mr: 2,
                  ml: "auto",
                }}
              />
              <Typography
                sx={{
                  color: "#666",
                  fontSize: "0.95rem",
                  fontStyle: "italic",
                  textAlign: "right",
                }}
              >
                Activities coming soon...
              </Typography>
            </Box>
          </Box>
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
        >
          <Box
            sx={{
              p: 2,
              maxWidth: "350px",
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
