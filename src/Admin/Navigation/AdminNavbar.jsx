import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import Avatar from '@mui/material/Avatar';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

export default function AdminNavbar({handleSideBarViewInMobile}) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up('lg'));

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );
// https://res.cloudinary.com/ddkso1wxi/image/upload/v1675919455/Logo/Copy_of_Zosh_Academy_nblljp.png
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + isLargeScreen, backgroundColor: 'rgb(0, 0, 22)' }}>
        <Toolbar>
          {!isLargeScreen && <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
            onClick={handleSideBarViewInMobile}
          >
            <MenuIcon />
          </IconButton>}
          <Avatar alt="Zosh" src="data:image/png;base64,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" />
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <IconButton size="large" aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={4} color="error">
                <MailIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge badgeContent={17} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      
    </Box>
  );
}