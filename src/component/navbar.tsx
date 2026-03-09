"use client";

import * as React from "react";
import { AppBar, Box, Toolbar, IconButton, Menu, MenuItem, Container, Button } from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const pages = [
  { title: "Home", route: "/" },
  { title: "For Healthcare Providers", route: "/for-healthcare-providers" },
  { title: "For Patients", route: "/for-patients" },
  { title: "About the Model", route: "/about-the-model" },
  { title: "Contact Us", route: "/contact-us" },
];

const pillButtonColor = "#030712";
const navbarBackground = "#1e2939";

export default function Navbar() {
  const pathname = usePathname();
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

  const handleCloseNavMenu = () => setAnchorElNav(null);
  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => setAnchorElNav(event.currentTarget);

  return (
    <AppBar
      position="static"
      sx={{
        bgcolor: navbarBackground,
        backdropFilter: "blur(8px)",
        borderBottom: "1px solid rgba(255,255,255,0.1)",
        fontFamily: "inter",
      }}
      component="header"
      role="banner"
      aria-label="Main navigation for Survival Prediction App"
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="Open main navigation menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: "block", md: "none" }, mt: 1.1 }}
              slotProps={{
                paper: {
                  sx: {
                    bgcolor: navbarBackground,
                  },
                },
                list: {
                  sx: {
                    py: 1,
                    fontFamily: "Inter, system-ui, sans-serif",
                  },
                },
              }}
            >
              {pages.map((page, i) => (
                <MenuItem role="menuitem" key={page.title} onClick={handleCloseNavMenu}>
                  <Link
                    href={page.route}
                    aria-current={pathname === page.route ? "page" : undefined}
                    style={{
                      color: "white",
                      background: pathname === page.route ? pillButtonColor : "transparent",
                      fontFamily: "Inter",
                      fontWeight: 500,
                      fontSize: "14px",
                      padding: "6px 10px",
                      borderRadius: "8px",
                    }}
                  >
                    {page.title}
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box
            component="nav"
            aria-label="Main site navigation"
            sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
          >
            {pages.map((page, i) => (
              <Link
                href={page.route}
                key={page.title}
                aria-current={pathname === page.route ? "page" : undefined}
                style={{
                  color: "white",
                  marginLeft: "8px",
                  marginRight: "8px",
                  background: pathname === page.route ? pillButtonColor : "transparent",
                  fontFamily: "Inter",
                  fontWeight: 500,
                  fontSize: "14px",
                  padding: "6px 10px",
                  borderRadius: "8px",
                }}
              >
                {page.title}
              </Link>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
