"use client";
import { Container, Box, Typography, ListItem, MenuList } from "@mui/material";
import Header from "./components/header";

export default function Home() {
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
            borderRadius:2,
            border: '1px solid',
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
                Day 1
              </Typography>
              <Box
                sx={{
                  width: "80px",
                  height: "3px",
                  background:
                    "linear-gradient(90deg, #6E0D25 0%, transparent 100%)",
                  mb: 2,
                }}
              />
              <MenuList sx={{ p: 0 }}>
                <ListItem
                  sx={{ px: 0, py: 0.5, color: "#4e0313", fontSize: "0.95rem" }}
                >
                  3h30: Going to Tan Son Nhat Airport
                </ListItem>
                <ListItem
                  sx={{ px: 0, py: 0.5, color: "#4e0313", fontSize: "0.95rem" }}
                >
                  6h40-8h15: HCM - Bangkok
                </ListItem>
                <ListItem
                  sx={{ px: 0, py: 0.5, color: "#4e0313", fontSize: "0.95rem" }}
                >
                  9h Meet my girlfriend
                </ListItem>
                <ListItem
                  sx={{ px: 0, py: 0.5, color: "#4e0313", fontSize: "0.95rem" }}
                >
                  10h: Go to the hotel
                </ListItem>
                <ListItem
                  sx={{ px: 0, py: 0.5, color: "#4e0313", fontSize: "0.95rem" }}
                >
                  10h30: Jodd Fair
                </ListItem>
                <ListItem
                  sx={{ px: 0, py: 0.5, color: "#4e0313", fontSize: "0.95rem" }}
                >
                  11h30: Sleep with you
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
              <Box
                sx={{
                  width: "80px",
                  height: "3px",
                  background:
                    "linear-gradient(270deg, #6E0D25 0%, transparent 100%)",
                  mb: 2,
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
                  width: "80px",
                  height: "3px",
                  background:
                    "linear-gradient(90deg, #6E0D25 0%, transparent 100%)",
                  mb: 2,
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
                  width: "80px",
                  height: "3px",
                  background:
                    "linear-gradient(270deg, #6E0D25 0%, transparent 100%)",
                  mb: 2,
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
                  width: "80px",
                  height: "3px",
                  background:
                    "linear-gradient(90deg, #6E0D25 0%, transparent 100%)",
                  mb: 2,
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
                  width: "80px",
                  height: "3px",
                  background:
                    "linear-gradient(270deg, #6E0D25 0%, transparent 100%)",
                  mb: 2,
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
      </Container>
    </Box>
  );
}
