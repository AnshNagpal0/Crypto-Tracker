import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import React from "react";
import AlertModal from "./AlertModal";

const Header = () => {
  return (
    <AppBar position="static" color="secondary">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        ></IconButton>
        <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
          Crypto Tracker
        </Typography>
        <AlertModal />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
