import * as React from "react";
import { ThemeProvider, createTheme, styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

import CssBaseline from "@mui/material/CssBaseline";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import getDesignTokens from "./style/MyTheme";
import TopBar from "./components/TopBar";
import SideBar from "./components/SideBar";


const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));


const modeLocal = localStorage.getItem("mode");



export default function MiniDrawer() {
  const [mode, setMode] = useState(modeLocal != null ? modeLocal : "light");
  const [open, setOpen] = useState(false);

  document.addEventListener('keyup' , (e) => {
    e.key === 'Escape' && setOpen(false);
  })

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
  return (
    <ThemeProvider theme={theme}>  
      <Box sx={{ display: "flex" }}>
        <CssBaseline />

        <TopBar {...{open, handleDrawerOpen, setMode}}
        />

        <SideBar
          {...{open, handleDrawerClose, DrawerHeader}}
        />
        
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <DrawerHeader />
          <Outlet />
        </Box>

      </Box>
    </ThemeProvider>
  );
}
