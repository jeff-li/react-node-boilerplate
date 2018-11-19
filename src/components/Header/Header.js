import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom'
import {
  AppBar,
  Toolbar,
  Typography,
} from '@material-ui/core';

const Header = (props) => (
      <AppBar position="static">
        <Toolbar>
          <Typography variant="title" color="inherit">
            My React App
          </Typography>
          <NavLink to="/"> Home </NavLink>
          <NavLink to="/users"> Users </NavLink>
        </Toolbar>
      </AppBar>
);

export default Header;
