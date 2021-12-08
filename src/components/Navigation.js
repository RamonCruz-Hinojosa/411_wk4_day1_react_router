import React, { Component, Fragment } from "react";
import { AppBar, Toolbar, IconButton, Typography } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
// Import { Link } here //
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <AppBar position="relative">
      <Toolbar>
        <IconButton color="inherit">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" style={{ flexGrow: "1" }}>
          FakeCars.com
        </Typography>
        <ul className="nav-list">
          <Link to="/about">About</Link>
          <Link to="/">Home</Link>
        </ul>
      </Toolbar>
    </AppBar>
  );
};

export default Navigation;
