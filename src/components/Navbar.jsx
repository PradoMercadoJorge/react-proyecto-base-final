import React, { useState } from 'react';
import logo from '../assets/Daily_Planet.png';
import {
  AppBar,
  Tabs,
  Tab,
  Toolbar,
  Typography,
  makeStyles,
  useMediaQuery,
  useTheme,
} from '@material-ui/core';
export const logoImg = logo;
import Button from '@material-ui/core/Button';

import DrawerComp from './DrawerComp';

const useStyles = makeStyles((theme) => ({
  offset: theme.mixins.toolbar,
  menuButton: {
    marginRight: theme.spacing(1),
  },
  title: {
    flexGrow: 1,
  },
}));

const Navbar = () => {
  const [value, setValue] = useState();
  const theme = useTheme();
  console.log(theme);
  const isMatch = useMediaQuery(theme.breakpoints.down('md'));
  console.log(isMatch);

  const classes = useStyles();
  return (
    <React.Fragment>
      <AppBar position="fixed" color="black">
        <Toolbar>
          <img
            src={logoImg}
            style={{
              width: '70px',
              height: '50px',
              marginRight: '10px',
            }}
          >
            {isMatch ? (
              <>
                <Typography variant="h6" className={classes.title}>
                  DAILY PLANET
                </Typography>
                <DrawerComp />
              </>
            ) : (
              <>
                <Tabs
                  sx={{ marginLeft: 'auto' }}
                  value={value}
                  onChange={(e, value) => setValue(value)}
                >
                  <Tab label="HOME" />
                  <Tab label="CONTACT" />
                  <Tab label="ABOUT" />
                </Tabs>
                <Button color="inherit" style={{ fontSize: '20px' }}>
                  LOGIN
                </Button>
              </>
            )}
          </img>
        </Toolbar>
      </AppBar>
      <div className={classes.offset}></div>
    </React.Fragment>
  );
};

export default Navbar;
