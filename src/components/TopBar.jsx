import {  IconButton, Stack, Toolbar , Tooltip, styled } from '@mui/material';
// import React from 'react';
import MuiAppBar from '@mui/material/AppBar';
import MenuIcon from '@mui/icons-material/Menu';
import SearchInput from './SearchInput';
import { NotificationsOutlined, SettingsOutlined } from '@mui/icons-material';
import ModeButton from './ModeButton';
import AccountSettings from './AccountSettings';


const drawerWidth = 240;


const AppBarr = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
// @ts-ignore
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));


// eslint-disable-next-line react/prop-types
const TopBar = ({ open, handleDrawerOpen, setMode}) => {
  

  return (
    <AppBarr position="fixed" 
// @ts-ignore
    open={open}>
        <Toolbar>
          <Tooltip title='menu'>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{
                marginRight: 5,
                ...(open && { display: 'none' }),
              }}
            >
              <MenuIcon />
            </IconButton>
          </Tooltip>

          <SearchInput />

          <Stack direction='row' flexGrow={1} justifyContent='end'>
            
            <ModeButton setMode={setMode} />

            <Tooltip title='notifications'>
              <IconButton color="inherit">
                <NotificationsOutlined />
              </IconButton>
            </Tooltip>
            <Tooltip title='settings'>
              <IconButton color="inherit" >
                <SettingsOutlined />
              </IconButton>
            </Tooltip >

            <AccountSettings />

          </Stack>
          
        </Toolbar>
      </AppBarr>
  );
}

export default TopBar;
