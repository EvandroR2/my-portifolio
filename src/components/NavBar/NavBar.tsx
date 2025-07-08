import { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  MenuItem,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  styled,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const NavBar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md")); // < md = mobile

  const StyledToolbar = styled(Toolbar)(() => ({
    display: "flex",
    justifyContent: "space-between",
  }));

  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };

  const menuItems = [
  { label: "About", url: "https://evandror2portifolio.vercel.app/about.html" },
  { label: "Skills", url: "https://evandror2portifolio.vercel.app/index.html" },
  { label: "Projects", url: "https://evandror2portifolio.vercel.app/about.html" },
];


  return (
    <>
      <AppBar position="absolute">
        <StyledToolbar>
          <Box component="div" sx={{ fontWeight: "bold", fontSize: "1.5rem" }}>
            Evandro.dev
          </Box>

          {isMobile ? (
            <>
              <IconButton
                edge="end"
                color="inherit"
                aria-label="menu"
                onClick={toggleDrawer(true)}>
                <MenuIcon />
              </IconButton>

              <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
                <Box
                  sx={{ width: 250 }}
                  role="presentation"
                  onClick={toggleDrawer(false)}
                  onKeyDown={toggleDrawer(false)}>
                  <List>
                    {menuItems.map((item, index) => (
                      <ListItem
                        component="a"
                        key={index}
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer">
                        <ListItemText primary={item.label} />
                      </ListItem>
                    ))}
                  </List>

                </Box>
              </Drawer>
            </>
          ) : (
            <Box sx={{ display: "flex", gap: 2 }}>
              {menuItems.map((item) => (
                <MenuItem
                  key={item.label}
                  component="a"
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer" >
                  {item.label}
                </MenuItem>
              ))}
            </Box>

          )}
        </StyledToolbar>
      </AppBar>
    </>
  );
};

export default NavBar;
