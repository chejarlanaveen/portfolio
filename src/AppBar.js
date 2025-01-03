import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import PersonIcon from '@mui/icons-material/Person';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import CloseIcon from '@mui/icons-material/Close';
import DownloadIcon from '@mui/icons-material/Download';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Modal from '@mui/material/Modal';
import Paper from '@mui/material/Paper';
import './viewresume.pdf';

const pages = ['Profile', 'Education', 'Skills', 'Projects', 'Certifications', 'Experience', 'Contact Us'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [mode, setMode] = React.useState('light'); // Default mode
  const [openResume, setOpenResume] = React.useState(false);

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          ...(mode === 'light'
            ? {
                primary: {
                  main: '#1976d2',
                },
                background: {
                  default: '#f4f6f8',
                  paper: '#ffffff',
                },
              }
            : {
                primary: {
                  main: '#90caf9',
                },
                background: {
                  default: '#121212',
                  paper: '#1e1e1e',
                },
              }),
        },
        typography: {
          fontFamily: 'Roboto, sans-serif',
          button: {
            textTransform: 'none',
          },
        },
      }),
    [mode]
  );

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const toggleTheme = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  const handleOpenResume = () => {
    setOpenResume(true);
  };

  const handleCloseResume = () => {
    setOpenResume(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar sx={{ position: 'fixed', borderRadius: 2, mb: 3 }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <PersonIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.1rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              PORTFOLIO
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="menu"
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
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
                <MenuItem onClick={handleOpenResume}>
                  <Typography textAlign="center">View Resume</Typography>
                </MenuItem>
              </Menu>
            </Box>
            <PersonIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.1rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              PORTFOLIO
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'white', display: 'block', px: 3, ':hover': { backgroundColor: 'primary.dark' } }}
                >
                  {page}
                </Button>
              ))}
              <Button
                onClick={handleOpenResume}
                sx={{backgroundColor:'primary.dark', fontStyle:'italic', my: 2, color: 'black', display: 'block', px: 3, ':hover': { backgroundColor: 'primary.dark' } }}
              >
                View Resume
              </Button>
            </Box>

            <Box sx={{ flexGrow: 0, display: 'flex', alignItems: 'center' }}>
              <IconButton sx={{ ml: 1 }} onClick={toggleTheme} color="inherit">
                {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
              </IconButton>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="User Avatar" src="portfolioimg.jpg" />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      <Modal
        open={openResume}
        onClose={handleCloseResume}
        aria-labelledby="resume-modal"
        aria-describedby="resume-content"
        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      >
        <Paper
          sx={{
            width: '95%',
            maxWidth: 500,
            height: '90%',
            position: 'relative',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <IconButton
            onClick={handleCloseResume}
            sx={{ position: 'absolute', top: 8, right: 8, zIndex: 10 }}
          >
            <CloseIcon />
          </IconButton>
          <iframe
            src="viewresume.pdf" // Replace with the actual URL or path of the resume file
            title="Resume"
            style={{ flexGrow: 1, border: 'none', overflow: 'hidden' }}
          />
          <Box sx={{ p: 2, textAlign: 'center' }}>
            <Button
              variant="contained"
              color="primary"
              startIcon={<DownloadIcon />}
              href="viewresume.pdf" // Replace with the actual URL or path of the resume file
              download
            >
              Download Resume
            </Button>
          </Box>
        </Paper>
      </Modal>
    </ThemeProvider>
  );
}

export default ResponsiveAppBar;
