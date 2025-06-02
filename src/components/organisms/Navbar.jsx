import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Box,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useMediaQuery,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useTheme } from '@mui/material/styles';

const menuItems = [
  { label: 'Inicio', className: 'nav-inicio' },
  { label: 'Series', className: 'nav-series' },
  { label: 'Películas', className: 'nav-peliculas' },
  { label: 'HBO', className: 'nav-hbo' },
  { label: 'Niños y familia', className: 'nav-ninos' },
];

const NavBar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        backdropFilter: 'blur(5px)',
        boxShadow: 'none',
      }}
    >
      <Toolbar className="nav-toolbar">
        {/* Logo */}
        <Box className="nav-logo">
          <img src="/Imagenes/logo.webp" alt="Logo" className="nav-logo-img" />
        </Box>

        {isMobile ? (
          <>
            <IconButton
              edge="start"
              onClick={toggleDrawer(true)}
              className="hamburger-icon"
              sx={{ color: 'white' }}
            >
              <MenuIcon />
            </IconButton>

            {/* Iconos visibles también en móvil */}
            <Box className="nav-icons" sx={{ display: 'flex', ml: 'auto' }}>
              <IconButton className="nav-icon" sx={{ color: 'white' }}>
                <SearchIcon />
              </IconButton>
              <IconButton className="nav-icon" sx={{ color: 'white' }}>
                <AccountCircleIcon />
              </IconButton>
            </Box>

            <Drawer
              anchor="left"
              open={drawerOpen}
              onClose={toggleDrawer(false)}
              PaperProps={{
                sx: { backgroundColor: '#000', color: '#fff' },
              }}
            >
              <Box
                role="presentation"
                onClick={toggleDrawer(false)}
                onKeyDown={toggleDrawer(false)}
                sx={{ width: 250 }}
              >
                <List>
                  {menuItems.map(({ label, className }) => (
                    <ListItem key={label} disablePadding>
                      <ListItemButton
                        className={`nav-button ${className}`}
                        sx={{ color: 'white' }}
                      >
                        <ListItemText primary={label} sx={{ color: 'white' }} />
                      </ListItemButton>
                    </ListItem>
                  ))}
                </List>
              </Box>
            </Drawer>
          </>
        ) : (
          <>
            <Box className="nav-buttons">
              {menuItems.map(({ label, className }) => (
                <Button key={label} className={`nav-button ${className}`}>
                  {label}
                </Button>
              ))}
            </Box>

            {/* Iconos escritorio */}
            <Box className="nav-icons">
              <IconButton className="nav-icon" sx={{ color: 'white' }}>
                <SearchIcon />
              </IconButton>
              <IconButton className="nav-icon" sx={{ color: 'white' }}>
                <AccountCircleIcon />
              </IconButton>
            </Box>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
